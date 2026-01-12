import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { NotesFilter, TagFilter, ActiveModal } from "../type";

type NotesUIContextValue = {
  searchValue: string;
  sideBarOpen: boolean;
  isGrid: boolean;
  isSettings: boolean;

  chosenFilter: NotesFilter;
  setChosenFilter: (filter: NotesFilter) => void;

  activeTag: TagFilter;
  setActiveTag: (tag: TagFilter) => void;

  activeModal: ActiveModal;
  openModal: (m: Exclude<ActiveModal, null>) => void;
  closeModal: () => void;

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

  const [chosenFilter, setChosenFilter] = useState<NotesFilter>("all");
  const [activeTag, setActiveTag] = useState<TagFilter>(null);

  const [activeModal, setActiveModal] = useState<ActiveModal>(null);

  const openModal = (m: Exclude<ActiveModal, null>) => setActiveModal(m);
  const closeModal = () => setActiveModal(null);

  return (
    <NotesUIContext.Provider
      value={{
        searchValue,
        sideBarOpen,
        isGrid,
        isSettings,

        chosenFilter,
        setChosenFilter,

        activeTag,
        setActiveTag,

        activeModal,
        openModal,
        closeModal,

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
