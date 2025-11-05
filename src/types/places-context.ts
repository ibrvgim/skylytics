export interface PlacesStateType {
  searchPlace: string;
  searchPlaceOnBackground: string;
  activeSearchContainer: boolean;
}

export type PlacesAction =
  | { type: 'searchPlace'; payload: string }
  | { type: 'searchPlaceOnBackground'; payload: string }
  | { type: 'toggleResultsContainer' };
