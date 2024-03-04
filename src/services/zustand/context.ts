import {
  createContext as reactCreateContext,
  createElement,
  useContext,
  useRef,
  type ReactNode,
} from "react";
import type { UseBoundStore, StoreApi } from "zustand";

type UseContextStore<T extends object> = {
  (): T;
  <U>(selector: (s: T) => U, equalityFn?: (a: T, b: T) => boolean): U;
};

function createContext<
  TState extends object,
  TUseBoundStore extends UseBoundStore<StoreApi<object>> = UseBoundStore<
    StoreApi<object>
  >,
>() {
  const ZustandContext = reactCreateContext<TUseBoundStore | undefined>(
    undefined,
  );

  const Provider = ({
    createStore,
    children,
  }: {
    createStore: () => TUseBoundStore;
    children: ReactNode;
  }) => {
    const storeRef = useRef<TUseBoundStore>();

    if (!storeRef.current) {
      storeRef.current = createStore();
    }

    return createElement(
      ZustandContext.Provider,
      { value: storeRef.current },
      children,
    );
  };

  const useStore: UseContextStore<TState> = <StateSlice>(
    selector?: (s: TState) => StateSlice,
    equalityFn = Object.is,
  ) => {
    // ZustandContext value is guaranteed to be stable.
    const useProviderStore = useContext(ZustandContext);
    if (!useProviderStore) {
      throw new Error(
        "Seems like you have not used zustand provider as an ancestor.",
      );
    }

    return useProviderStore(selector as (s: object) => StateSlice, equalityFn);
  };

  return {
    Provider,
    ZustandContext,
    useStore,
  };
}

export default createContext;
