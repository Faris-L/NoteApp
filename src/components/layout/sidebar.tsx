import { useEffect, useRef, useState } from "react";
import { useNotesUI } from "../../context/UIcontext";
import type { NotesFilter } from "../../type";

import {
  Aside,
  NewNoteBtn,
  Section,
  FilterButton,
  Dropdown,
  DropItem,
} from "./sidebar.styled";

const FILTERS: { key: NotesFilter; label: string; icon: string }[] = [
  { key: "all", label: "All", icon: "bx bx-note" },
  { key: "pinned", label: "Pinned", icon: "bx bx-pin" },
  { key: "archived", label: "Archived", icon: "bx bx-archive" },
  { key: "trash", label: "Trash", icon: "bx bx-trash" },
  { key: "untagged", label: "Untagged", icon: "bx bx-tag-alt" },
];

const SideBar = () => {
  const { sideBarOpen, chosenFilter, setChosenFilter, openNoteCard } = useNotesUI();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  if (!sideBarOpen) return null;

  const selected = FILTERS.find((f) => f.key === chosenFilter) ?? FILTERS[0];

  return (
    <Aside>
      <NewNoteBtn type="button" onClick={openNoteCard}>
        <i className="bx bx-plus" />
        New note
      </NewNoteBtn>

      <Section ref={wrapRef}>
        <FilterButton type="button" onClick={() => setOpen((p) => !p)}>
          <span className="left">
            <i className="bx bx-filter" />
            <b>{selected.label}</b>
          </span>
          <i className={open ? "bx bx-chevron-up" : "bx bx-chevron-down"} />
        </FilterButton>

        {open && (
          <Dropdown>
            {FILTERS.map((f) => (
              <DropItem
                key={f.key}
                data-active={f.key === chosenFilter}
                onClick={() => {
                  setChosenFilter(f.key);
                  setOpen(false);
                }}
              >
                <i className={f.icon} />
                {f.label}
              </DropItem>
            ))}
          </Dropdown>
        )}
      </Section>
    </Aside>
  );
};

export default SideBar;
