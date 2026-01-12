import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  gap: 14px;
`;

export const Field = styled.div`
  display: grid;
  gap: 8px;
`;

export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 12px;
  border-radius: 12px;
  border: 1px solid var(--border, rgba(255, 255, 255, 0.12));
  background: var(--card, rgba(255, 255, 255, 0.04));
  color: var(--text, #fff);
  outline: none;

  &::placeholder {
    color: var(--muted, rgba(255, 255, 255, 0.5));
  }

  &:focus {
    border-color: var(--accent, rgba(255, 255, 255, 0.28));
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 140px;
  resize: vertical;
  padding: 12px 12px;
  border-radius: 12px;
  border: 1px solid var(--border, rgba(255, 255, 255, 0.12));
  background: var(--card, rgba(255, 255, 255, 0.04));
  color: var(--text, #fff);
  outline: none;
  line-height: 1.5;

  &::placeholder {
    color: var(--muted, rgba(255, 255, 255, 0.5));
  }

  &:focus {
    border-color: var(--accent, rgba(255, 255, 255, 0.28));
  }
`;

export const TagRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;
`;

export const Btn = styled.button`
  border: 1px solid var(--border, rgba(255, 255, 255, 0.12));
  background: var(--card, rgba(255, 255, 255, 0.06));
  color: var(--text, #fff);
  border-radius: 12px;
  padding: 10px 12px;
  cursor: pointer;
  transition: transform 0.05s ease, border-color 0.15s ease,
    background 0.15s ease;

  &:hover {
    background: var(--card, rgba(255, 255, 255, 0.1));
    border-color: var(--accent, rgba(255, 255, 255, 0.25));
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const TagPills = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const TagPill = styled.button`
  border: 1px solid var(--border, rgba(255, 255, 255, 0.12));
  background: var(--card, rgba(255, 255, 255, 0.06));
  color: var(--text, #fff);
  border-radius: 999px;
  padding: 8px 10px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: var(--card, rgba(255, 255, 255, 0.1));
    border-color: var(--accent, rgba(255, 255, 255, 0.25));
  }
`;

export const CheckboxLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  user-select: none;
  color: var(--text, #fff);
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: var(--accentSolid, #6d5efc);
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 6px;
`;

export const SecondaryBtn = styled(Btn)`
  background: transparent;

  &:hover {
    background: var(--card, rgba(255, 255, 255, 0.06));
  }
`;
