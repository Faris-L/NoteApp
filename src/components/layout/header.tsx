import { HeaderWrapper, Left, Search, Actions } from "./header.styled";
import { useNotesUI } from "../../context/UIcontext"

const Header = () => {
  const {
    sideBarOpen,
    toggleSideBar,
    searchValue,
    searchNote,
    isGrid,
    toggleGrid,
    toggleSettings,
  } = useNotesUI();

  return (
    <HeaderWrapper>
      <Left>
        <button onClick={toggleSideBar}>
          <i className={sideBarOpen ? "bx bx-x" : "bx bx-menu"} />
        </button>
        <h1>Notes</h1>
      </Left>

      <Search>
        <i className="bx bx-search" />
        <input
          type="text"
          placeholder="Search notes..."
          value={searchValue}
          onChange={(e) => searchNote(e.target.value)}
        />
      </Search>

      <Actions>
        <button onClick={toggleGrid}>
          <i className={isGrid ? "bx bx-grid-alt" : "bx bx-list-ul"} />
        </button>

        <button onClick={toggleSettings}>
          <i className="bx bx-cog" />
        </button>
      </Actions>
    </HeaderWrapper>
  );
};

export default Header;
