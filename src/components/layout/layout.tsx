import Header from "./header";
import SideBar from "./sidebar";
import { useNotesUI } from "../../context/UIcontext";
import {
  Page,
  Content,
  Main,
  ModalOverlay,
  ModalBox,
  ModalHeader,
  ModalTitle,
  CloseBtn,
  ModalBody,
} from "../layout/notesLayout.styled";

const NotesLayout = () => {
  const { isNoteCard, closeNoteCard } = useNotesUI();

  return (
    <Page>
      <Header />

      <Content>
        <SideBar />

        <Main>
          <h2>MAIN</h2>
          <p>Ovde prikazuješ note.</p>
        </Main>
      </Content>

     
      {isNoteCard ? (
        <ModalOverlay onClick={closeNoteCard}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Create note</ModalTitle>
              <CloseBtn type="button" onClick={closeNoteCard}>
                <i className="bx bx-x" />
              </CloseBtn>
            </ModalHeader>

            <ModalBody>
              <p>Ovde ide tvoj Create Note UI.</p>
            </ModalBody>
          </ModalBox>
        </ModalOverlay>
      ) : null}
    </Page>
  );
};

export default NotesLayout;
