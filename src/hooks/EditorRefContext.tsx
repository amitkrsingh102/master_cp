import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export const createEditorContext = <EditorStore,>(
  initialState: EditorStore,
) => {
  const useEditorStoreData = (): {
    get: () => EditorStore;
    set: (value: Partial<EditorStore>) => void;
    subscribe: (callback: () => void) => () => void;
  } => {
    const store = useRef(initialState);

    const subscribers = useRef(new Set<() => void>());

    const get = useCallback(() => store.current, []);
    const set = useCallback((value: Partial<EditorStore>) => {
      store.current = { ...store.current, ...value };
      subscribers.current.forEach((callback) => callback());
    }, []);
    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback);
      return () => subscribers.current.delete(callback);
    }, []);
    return { get, set, subscribe };
  };

  type UseStoreDataType = ReturnType<typeof useEditorStoreData>;

  const EditorStoreContext = createContext<UseStoreDataType | null>(null);

  const EditorStoreContextProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <EditorStoreContext.Provider value={useEditorStoreData()}>
        {children}
      </EditorStoreContext.Provider>
    );
  };

  const useEditorStore = (): [
    EditorStore,
    (value: Partial<EditorStore>) => void,
  ] => {
    const store = useContext(EditorStoreContext);
    if (!store) throw new Error("Store not found");
    const [state, stateSet] = useState(store?.get());

    useEffect(() => {
      return store.subscribe(() => stateSet(store.get()));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // const state = useSyncExternalStore(store.subscribe, store.get);

    return [state, store.set];
  };

  return { EditorStoreContextProvider, useEditorStore };
};
