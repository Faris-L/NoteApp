import Header from "./header";
import SideBar from "./sidebar";
import NotesMain from "../NotesMain";
import NoteMaker from "../modals/NoteMaker";
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
  const { activeModal, closeModal } = useNotesUI();

  return (
    <Page>
      <Header />

      <Content>
        <SideBar />

        <Main>
          <NotesMain/>
        </Main>
      </Content>

      {activeModal === "create" && (
        <ModalOverlay onClick={closeModal}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Create note</ModalTitle>

              <CloseBtn type="button" onClick={closeModal}>
                <i className="bx bx-x" />
              </CloseBtn>
            </ModalHeader>

            <ModalBody>
              <NoteMaker />
            </ModalBody>
          </ModalBox>
        </ModalOverlay>
      )}
    </Page>
  );
};

export default NotesLayout;
