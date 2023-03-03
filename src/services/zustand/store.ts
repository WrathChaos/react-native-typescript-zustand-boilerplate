import create, { StoreApi } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createAppSlice, { AppSlice } from "@services/zustand/app/AppSlice";
import createUserSlice, { UserSlice } from "@services/zustand/user/UserSlice";

export type StoreState = AppSlice & UserSlice;
export type StoreSlice<T> = (
  set: StoreApi<StoreState>["setState"],
  get: StoreApi<StoreState>["getState"],
) => T;

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      ...createAppSlice(set, get),
      ...createUserSlice(set, get),
    }),
    {
      name: "store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useStore;
