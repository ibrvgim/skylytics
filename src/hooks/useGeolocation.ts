import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface InitialStateType {
  position: [number, number] | null;
  error: string | null;
}

const initialState: InitialStateType = {
  position: null,
  error: null,
};

function useGeolocation(): [[number, number] | null, boolean, () => void] {
  const [locationData, setLocationData] = useState(initialState);
  const [trigger, setTrigger] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function requestAgain() {
    setTrigger((count) => count + 1);
  }

  function setError(value: string | null) {
    setLocationData((data) => ({ ...data, error: value }));
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.');
      return;
    }

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLocationData({
          position: [latitude, longitude],
          error: null,
        });
        setError(null);
        setIsLoading(false);
      },

      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError(
              'You denied the request for Geolocation. Allow access for further action.',
            );
            break;
          case error.POSITION_UNAVAILABLE:
            setError(
              'Location information is unavailable. Please try again later.',
            );
            break;
          case error.TIMEOUT:
            setError('The request timed out. Please try again later.');
            break;
          default:
            setError('An unknown error occurred. Please try again later.');
        }

        setIsLoading(false);
      },

      { enableHighAccuracy: true, maximumAge: 0 },
    );

    if (locationData.error) toast.error(locationData.error);
  }, [trigger, locationData.error]);

  return [locationData.position, isLoading, requestAgain];
}

export default useGeolocation;
