import create, { StoreApi } from "zustand";
import LocalStorage from "@local-storage";
import createAppSlice, { AppSlice } from "@services/zustand/app/AppSlice";
import createUserSlice, { UserSlice } from "@services/zustand/user/UserSlice";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";

export type StoreState = AppSlice & UserSlice;
export type StoreSlice<T> = (
  set: StoreApi<StoreState>["setState"],
  get: StoreApi<StoreState>["getState"],
) => T;

const ZustandMMKVStorage: StateStorage = {
  setItem: (name: string, value: string) => {
    return LocalStorage.set(name, value);
  },
  getItem: (name: string) => {
    const value = LocalStorage.getString(name);
    return value ?? null;
  },
  removeItem: (name: string) => {
    return LocalStorage.delete(name);
  },
};

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      ...createAppSlice(set, get),
      ...createUserSlice(set, get),
    }),
    {
      name: "store",
      storage: createJSONStorage(() => ZustandMMKVStorage),
    },
  ),
);

export default useStore;
