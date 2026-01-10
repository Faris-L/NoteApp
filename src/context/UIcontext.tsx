import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { NotesFilter } from "../type";

type NotesUIContextValue = {
   searchValue: string;
  sideBarOpen: boolean;
  isGrid: boolean;
  isSettings: boolean;

  isNoteCard: boolean;
  toggleNoteCard: () => void;

  chosenFilter: NotesFilter;
  setChosenFilter: (filter: NotesFilter) => void;

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
  const [isNoteCard,setIsNoteCard] =  useState(false);
  const [chosenFilter, setChosenFilter] = useState<NotesFilter>("all");

  return (
    <NotesUIContext.Provider
      value={{
        searchValue,
        sideBarOpen,
        isGrid,
        isSettings,
        isNoteCard,
        chosenFilter,

        setChosenFilter: (f) => setChosenFilter(f),
        toggleNoteCard:()=>setIsNoteCard((p)=>!p),
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
