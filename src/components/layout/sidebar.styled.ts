import styled from "styled-components";

export const Aside = styled.aside`
  width: 260px;
  min-height: calc(100vh - 68px);
  padding: 16px;

  background: #6f6f6f;
  color: #fff;
  border-right: 1px solid rgba(255, 255, 255, 0.15);

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NewNoteBtn = styled.button`
  height: 42px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;

  color: #fff;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  i {
    font-size: 18px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.35);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Section = styled.div`
  position: relative;
`;

export const FilterButton = styled.button`
  height: 42px;
  width: 100%;
  padding: 0 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;

  color: #fff;
  cursor: pointer;

  .left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  i {
    font-size: 18px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;

export const Dropdown = styled.div`
  margin-top: 8px;

  display: flex;
  flex-direction: column;
  gap: 6px;

  padding: 8px;
  border-radius: 12px;

  background: #7a7a7a;
  border: 1px solid rgba(255, 255, 255, 0.25);
`;

export const DropItem = styled.button`
  height: 38px;
  padding: 0 12px;

  display: flex;
  align-items: center;
  gap: 10px;

  background: transparent;
  border: none;
  border-radius: 10px;

  color: #fff;
  cursor: pointer;

  i {
    font-size: 18px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.25);
  }

  &[data-active="true"] {
    background: rgba(0, 0, 0, 0.35);
  }
`;
