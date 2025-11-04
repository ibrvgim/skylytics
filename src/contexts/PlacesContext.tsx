import { createContext, useContext, useReducer } from 'react';
import type { PlacesAction, PlacesStateType } from '../types/places-context';

const initialState: PlacesStateType = {
  searchPlace: '',
  activeSearchContainer: false,
};

function reducer(
  state: PlacesStateType,
  action: PlacesAction,
): PlacesStateType {
  switch (action.type) {
    case 'searchPlace':
      return { ...state, searchPlace: action.payload };

    case 'toggleResultsContainer': {
      return {
        ...state,
        activeSearchContainer: state.activeSearchContainer ? false : true,
      };
    }

    default:
      throw new Error('Unknown action detected.');
  }
}

interface PlacesContextType extends PlacesStateType {
  dispatch: React.Dispatch<PlacesAction>;
}

const PlacesContext = createContext<PlacesContextType | undefined>(undefined);

export function PlacesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    searchPlace: state.searchPlace,
    activeSearchContainer: state.activeSearchContainer,
    dispatch,
  };

  return (
    <PlacesContext.Provider value={value}>{children}</PlacesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePlaces() {
  const context = useContext(PlacesContext);

  if (!context)
    throw new Error('usePlaces must be used within PlacesContextProvider.');

  return context;
}
