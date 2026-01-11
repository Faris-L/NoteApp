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
  transition: background 0.15s ease, transform 0.1s ease;

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

export const QuickTitle = styled.p`
  margin: 6px 0 0;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.85);
`;

export const QuickFilters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const QuickItem = styled.button`
  height: 40px;
  width: 100%;
  padding: 0 12px;

  display: flex;
  align-items: center;
  gap: 10px;

  background: rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;

  color: #fff;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;

  i {
    font-size: 18px;
    opacity: 0.9;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.28);
  }

  &[data-active="true"] {
    background: rgba(0, 0, 0, 0.38);
    border-color: rgba(255, 255, 255, 0.35);
  }
`;
