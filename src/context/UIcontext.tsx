import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type NotesUIContextValue = {
  searchValue: string;
  sideBarOpen: boolean;
  isGrid: boolean;
  isSettings: boolean;

  toggleSideBar: () => void;
  toggleGrid: () => void;
  toggleSettings: () => void;
  searchNote: (input: string) => void;
};

const NotesUIContext = createContext<NotesUIContextValue | null>(null);

export const useNotesUI = () => {
  const ctx = useContext(NotesUIContext);
  if (!ctx) {
    throw new Error("useNotesUI must be used inside NotesUIProvider");
  }
  return ctx;
};

type ProviderProps = {
  children: ReactNode;
};

export const NotesUIProvider = ({ children }: ProviderProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [isGrid, setIsGrid] = useState(true);
  const [isSettings, setIsSettings] = useState(false);

  return (
    <NotesUIContext.Provider
      value={{
        searchValue,
        sideBarOpen,
        isGrid,
        isSettings,

        toggleSideBar: () => setSideBarOpen((p) => !p),
        toggleGrid: () => setIsGrid((p) => !p),
        toggleSettings: () => setIsSettings((p) => !p),
        searchNote: (input: string) => setSearchValue(input),
      }}
    >
      {children}
    </NotesUIContext.Provider>
  );
};
