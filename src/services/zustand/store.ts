import create, { StoreApi } from "zustand";
import { persist, StateStorage } from "zustand/middleware";
import { MMKVLoader } from "react-native-mmkv-storage";
import createAppSlice, { AppSlice } from "@services/zustand/app/AppSlice";
import createUserSlice, { UserSlice } from "@services/zustand/user/UserSlice";

const sessionStorage = new MMKVLoader()
  .withInstanceID("sessionStorage")
  .initialize();

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
      getStorage: () => sessionStorage as StateStorage,
    },
  ),
);

export default useStore;
