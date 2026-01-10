import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 72px;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  background: rgba(20, 20, 24, 0.6);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);

  color: #eaeaf0;
`;
 export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  h1 {
    font-size: 19px;
    font-weight: 700;
    letter-spacing: 0.6px;
    text-transform: uppercase;
  }

  button {
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 14px;

    color: #fff;
    font-size: 22px;
    cursor: pointer;

    transition: all 0.25s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-2px);
    }

    &:active {
      transform: scale(0.92);
    }
  }
`;


export const Search = styled.div`
  flex: 1;
  max-width: 460px;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 10px 18px;
  border-radius: 18px;

  background: rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);

  transition: box-shadow 0.25s ease, background 0.25s ease;

  &:focus-within {
    background: rgba(255, 255, 255, 0.12);
    box-shadow:
      inset 0 0 0 1px #6ae3ff,
      0 0 0 4px rgba(106, 227, 255, 0.2);
  }

  i {
    font-size: 18px;
    color: #6ae3ff;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;

    font-size: 14px;
    color: #fff;

    &::placeholder {
      color: rgba(255, 255, 255, 0.55);
    }
  }
`;


export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    height: 42px;
    padding: 0 18px;

    display: flex;
    align-items: center;
    gap: 8px;

    background: linear-gradient(135deg, #6ae3ff, #8f7bff);
    border: none;
    border-radius: 999px;

    color: #0e0e12;
    font-size: 18px;
    cursor: pointer;
    font-weight: 600;

    box-shadow: 0 6px 20px rgba(106, 227, 255, 0.35);

    transition: all 0.25s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(106, 227, 255, 0.55);
    }

    &:active {
      transform: scale(0.95);
    }

    i {
      font-size: 20px;
    }
  }
`;
