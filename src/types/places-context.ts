export interface PlacesStateType {
  searchPlace: string;
  activeSearchContainer: boolean;
}

export type PlacesAction =
  | { type: 'searchPlace'; payload: string }
  | { type: 'toggleResultsContainer'; payload: boolean };
