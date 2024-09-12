import {StoreSlice} from '@zustand';

export interface AppState {
  isWalkthroughAvailable: boolean;
  setWalkthrough: (value: boolean) => void;
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const createAppSlice: StoreSlice<AppState> = set => ({
  isWalkthroughAvailable: true,
  setWalkthrough: (value: boolean) => set({isWalkthroughAvailable: value}),
  isDarkMode: true,
  setDarkMode: (value: boolean) => set({isDarkMode: value}),
});

export default createAppSlice;
