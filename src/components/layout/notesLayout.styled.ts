import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: #5f5f5f; /* po želji */
`;

export const Content = styled.div`
  display: flex;
  min-height: calc(100vh - 68px); /* isto koliko ti je header visok */
`;

export const Main = styled.main`
  flex: 1;
  padding: 20px;
  background: #7a7a7a; /* da bude u fazonu */
  color: #fff;
`;

/* ===== MODAL ===== */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: grid;
  place-items: center;
  z-index: 50;
`;

export const ModalBox = styled.div`
  width: min(560px, calc(100% - 24px));
  border-radius: 14px;
  background: #6f6f6f;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const ModalHeader = styled.div`
  height: 54px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

export const CloseBtn = styled.button`
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;

  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;

  color: #fff;
  cursor: pointer;

  i {
    font-size: 22px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.35);
  }
`;

export const ModalBody = styled.div`
  padding: 16px;
`;
