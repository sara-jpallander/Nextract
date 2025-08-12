import { create } from "zustand";
import { Product } from "@/components/productlist/ProductList";

// States för att kunna uppdatera // Simon
export interface APIState {
  api: string;
  setApi: (newApi: string) => void;
  clearApi: () => void;
}
export interface OriginalAPIState {
  originalAPI: string;
  setApi: (newApi: string) => void;
  clearApi: () => void;
}

export interface APIKey {
  key: string;
  setKey: (newKey: string) => void;
  clearKey: () => void;
}

export interface APIid {
  id: string;
  setId: (newId: string) => void;
  clearId: () => void;
}
////////////////////////////////
export interface DataState {
  data: object[];
  setData: (newData: object[]) => void;
}

export interface AllDataState {
  allData: object[];
  setAllData: (newData: object[]) => void;
}

export interface ChosenKeysState {
  chosenKeys: string[];
  setChosenKeys: (newChosenKeys: string[]) => void;
  resetChosenKeys: () => void;
}

export interface FilteredJsonDataState {
  filteredJsonData: object[];
  setFilteredJsonData: (newFilteredJsonData: object[]) => void;
}

export interface PreviewState {
  showPreview: boolean;
  setShowPreview: () => void;
}

export interface SelectedProductsState {
  selectedProducts: Product[];
  setSelectedProducts: (
    newSelectedProducts: Product[] | ((prev: Product[]) => Product[])
  ) => void;
  clearSelectedProducts: () => void;
}

export const useSelectedProductsStore = create<SelectedProductsState>()(
  (set) => {
    const loadFromStorage = () => {
      if (typeof window !== "undefined") {
        try {
          const stored = localStorage.getItem("selectedProducts");
          return stored ? JSON.parse(stored) : [];
        } catch (error) {
          console.error("Error loading from localStorage:", error);
          return [];
        }
      }
      return [];
    };

    return {
      selectedProducts: loadFromStorage(),
      setSelectedProducts: (
        newSelectedProducts: Product[] | ((prev: Product[]) => Product[])
      ) => {
        set((state) => {
          const updatedProducts =
            typeof newSelectedProducts === "function"
              ? newSelectedProducts(state.selectedProducts)
              : newSelectedProducts;

          if (typeof window !== "undefined") {
            try {
              localStorage.setItem(
                "selectedProducts",
                JSON.stringify(updatedProducts)
              );
            } catch (error) {
              console.error("Error saving to localStorage:", error);
            }
          }

          return { selectedProducts: updatedProducts };
        });
      },
      clearSelectedProducts: () => {
        if (typeof window !== "undefined") {
          localStorage.removeItem("selectedProducts");
        }
        set({ selectedProducts: [] });
      },
    };
  }
);

export const useAPIStore = create<APIState>()((set) => ({
  api: "",
  setApi: (newApi: string) => set(() => ({ api: newApi })),
  clearApi: () => set(() => ({ api: "" })),
}));

export const useOriginalAPIStore = create<OriginalAPIState>()((set) => ({
  originalAPI: "",
  setApi: (newApi: string) => set(() => ({ originalAPI: newApi })),
  clearApi: () => set(() => ({ originalAPI: "" })),
}));

export const useAPIKeyStore = create<APIKey>()((set) => ({
  key: "",
  setKey: (newKey: string) => set(() => ({ key: newKey })),
  clearKey: () => set(() => ({ key: "" })),
}));

export const useApiIdStore = create<APIid>()((set) => ({
  id: "",
  setId: (newId: string) => set(() => ({ id: newId })),
  clearId: () => set(() => ({ id: "" })),
}));

export const useDataStore = create<DataState>()((set) => ({
  data: [],
  setData: (newData: object[]) => set(() => ({ data: newData })),
}));

export const useAllDataStore = create<AllDataState>()((set) => ({
  allData: [],
  setAllData: (newAllData: object[]) => set(() => ({ allData: newAllData })),
}));

export const useChosenKeysStore = create<ChosenKeysState>()((set) => ({
  chosenKeys: [],
  setChosenKeys: (newChosenKeys: string[]) =>
    set(() => ({ chosenKeys: newChosenKeys })),
  resetChosenKeys: () => set(() => ({ chosenKeys: [] })),
}));

export const useFilteredJsonDataStore = create<FilteredJsonDataState>()(
  (set) => ({
    filteredJsonData: [],
    setFilteredJsonData: (newFilteredJsonData: object[]) =>
      set(() => ({ filteredJsonData: newFilteredJsonData })),
  })
);

export const useShowPreviewStore = create<PreviewState>()((set) => ({
  showPreview: false,
  setShowPreview: () => set((state) => ({ showPreview: !state.showPreview })),
}));
