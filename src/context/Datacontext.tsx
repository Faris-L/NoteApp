import { createContext, useContext, useState, useMemo } from "react";
import type { ReactNode } from "react";
import type { Note } from "../type";

type NotesDataContextValue = {
  notes: Note[];
  tags: { name: string; count: number }[];
  getNotesByTag: (tag: string | null) => Note[];
};

const NotesDataContext = createContext<NotesDataContextValue | null>(null);

export const useNotesData = () => {
  const ctx = useContext(NotesDataContext);
  if (!ctx) {
    throw new Error("useNotesData must be used inside NotesDataProvider");
  }
  return ctx;
};

type ProviderProps = {
  children: ReactNode;
};

export const NotesDataProvider = ({ children }: ProviderProps) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const tags = useMemo(() => {
    const map = new Map<string, number>();

    for (const n of notes) {
      for (const t of n.tags) {
        map.set(t, (map.get(t) ?? 0) + 1);
      }
    }

    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [notes]);

  const getNotesByTag = (tag: string | null) => {
    if (tag === null) return notes;
    return notes.filter((n) => n.tags.includes(tag));
  };

  return (
    <NotesDataContext.Provider
      value={{
        notes,
        tags,
        getNotesByTag,
      }}
    >
      {children}
    </NotesDataContext.Provider>
  );
};
