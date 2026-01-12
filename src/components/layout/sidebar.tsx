import { useNotesUI } from "../../context/UIcontext";
import { useNotesData } from "../../context/Datacontext";
import {
  Aside,
  NewNoteBtn,
  QuickFilters,
  QuickItem,
  QuickTitle,
} from "./sidebar.styled";

const SideBar = () => {
  const {
    sideBarOpen,
    chosenFilter,
    setChosenFilter,
    openModal,
    setActiveTag,
  } = useNotesUI();

  const { tags } = useNotesData();

  if (!sideBarOpen) return null;

  return (
    <Aside>
      <NewNoteBtn
        type="button"
        onClick={() => {
          setActiveTag(null);      
          setChosenFilter("all");  
          openModal("create");     
        }}
      >
        <i className="bx bx-plus" />
        New note
      </NewNoteBtn>

      <QuickTitle>Quick filters</QuickTitle>

      <QuickFilters>
        <QuickItem
          type="button"
          data-active={chosenFilter === "all"}
          onClick={() => setChosenFilter("all")}
        >
          <i className="bx bx-note" />
          All
        </QuickItem>

        <QuickItem
          type="button"
          data-active={chosenFilter === "pinned"}
          onClick={() => setChosenFilter("pinned")}
        >
          <i className="bx bx-pin" />
          Pinned
        </QuickItem>

        <QuickItem
          type="button"
          data-active={chosenFilter === "archived"}
          onClick={() => setChosenFilter("archived")}
        >
          <i className="bx bx-archive" />
          Archived
        </QuickItem>

        <QuickItem
          type="button"
          data-active={chosenFilter === "trash"}
          onClick={() => setChosenFilter("trash")}
        >
          <i className="bx bx-trash" />
          Trash
        </QuickItem>
      </QuickFilters>

      <QuickTitle>Tags</QuickTitle>

      <QuickFilters>
        {tags.slice(0, 8).map((t) => (
          <QuickItem
            key={t.name}
            type="button"
            onClick={() => {
              setChosenFilter("all");
              setActiveTag(t.name);
            }}
          >
            <i className="bx bx-purchase-tag" />
            {t.name}
            <span style={{ marginLeft: "auto", opacity: 0.8 }}>{t.count}</span>
          </QuickItem>
        ))}
      </QuickFilters>
    </Aside>
  );
};

export default SideBar;
