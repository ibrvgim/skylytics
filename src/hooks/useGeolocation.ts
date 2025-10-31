import { useEffect, useState } from 'react';

interface InitialStateType {
  position: [number, number] | null;
  error: string | null;
}

const initialState: InitialStateType = {
  position: null,
  error: null,
};

function useGeolocation(): [
  [number, number] | null,
  string | null,
  () => void,
] {
  const [locationData, setLocationData] = useState(initialState);
  const [trigger, setTrigger] = useState(0);

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

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLocationData({
          position: [latitude, longitude],
          error: null,
        });
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
      },
      { enableHighAccuracy: true, maximumAge: 0 },
    );
  }, [trigger]);

  return [locationData.position, locationData.error, requestAgain];
}

export default useGeolocation;
