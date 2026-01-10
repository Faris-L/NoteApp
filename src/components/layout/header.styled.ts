import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 64px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  background: #111;
  color: #fff;
  border-bottom: 1px solid #222;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  h1 {
    font-size: 18px;
    font-weight: 600;
  }

  button {
    background: none;
    border: none;
    color: inherit;
    font-size: 22px;
    cursor: pointer;
  }
`;

export const Search = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #1c1c1c;
  padding: 8px 12px;
  border-radius: 8px;

  i {
    font-size: 18px;
    opacity: 0.7;
  }

  input {
    flex: 1;
    background: none;
    border: none;
    color: #fff;
    outline: none;
    font-size: 14px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    background: none;
    border: none;
    color: inherit;
    font-size: 20px;
    cursor: pointer;
  }
`;
