import { createContext, useContext, useReducer } from 'react';
import type { UnitsAction, UnitsState } from '../types/units';

const initialState: UnitsState = {
  temperatureUnit: 'celsius',
  windSpeed: 'kmh',
  precipitation: 'mm',
};

function reducer(state: UnitsState, action: UnitsAction): UnitsState {
  switch (action.type) {
    case 'switchAll': {
      return {
        ...state,
        temperatureUnit:
          state.temperatureUnit === 'celsius' ? 'fahrenheit' : 'celsius',
        windSpeed: state.windSpeed === 'kmh' ? 'mph' : 'kmh',
        precipitation: state.precipitation === 'mm' ? 'in' : 'mm',
      };
    }

    case 'switchToCelsius':
      return { ...state, temperatureUnit: 'celsius' };

    case 'switchToFahrenheit':
      return { ...state, temperatureUnit: 'fahrenheit' };

    case 'switchToKmh':
      return { ...state, windSpeed: 'kmh' };

    case 'switchToMph':
      return { ...state, windSpeed: 'mph' };

    case 'switchToMM':
      return { ...state, precipitation: 'mm' };

    case 'switchToIN':
      return { ...state, precipitation: 'in' };

    default:
      throw new Error('Unknown action detected.');
  }
}

interface UnitsContextType extends UnitsState {
  dispatch: React.Dispatch<UnitsAction>;
}

const UnitsContext = createContext<UnitsContextType | undefined>(undefined);

export function UnitsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    temperatureUnit: state.temperatureUnit,
    windSpeed: state.windSpeed,
    precipitation: state.precipitation,
    dispatch,
  };

  return (
    <UnitsContext.Provider value={value}>{children}</UnitsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUnits() {
  const context = useContext(UnitsContext);

  if (!context)
    throw new Error('useUnits must be used within UnitsContextProvider');

  return context;
}
