import { StoreSlice } from "@zustand";

export interface AppSlice {
  isWalkthroughAvailable: boolean;
  setWalkthrough: (value: boolean) => void;
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const createAppSlice: StoreSlice<AppSlice> = (set) => ({
  isWalkthroughAvailable: true,
  setWalkthrough: (value: boolean) => set({ isWalkthroughAvailable: value }),
  isDarkMode: true,
  setDarkMode: (value: boolean) => set({ isDarkMode: value }),
});

export default createAppSlice;
