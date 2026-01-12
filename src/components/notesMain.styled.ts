import styled from "styled-components";

export const NotesWrap = styled.div`
  width: 100%;
  padding: 18px;
`;

export const NotesGrid = styled.div<{ $grid: boolean }>`
  display: grid;
  gap: 14px;

  ${({ $grid }) =>
    $grid
      ? `
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    align-items: start;
  `
      : `
    grid-template-columns: 1fr;
  `}
`;

export const Card = styled.article`
  border: 1px solid var(--border, rgba(255, 255, 255, 0.12));
  background: var(--card, rgba(255, 255, 255, 0.04));
  border-radius: 16px;
  padding: 14px 14px 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);

  display: grid;
  gap: 10px;
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--text, #fff);
  line-height: 1.2;

  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Meta = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  opacity: 0.85;
`;

export const Badge = styled.span`
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border, rgba(255, 255, 255, 0.12));
  background: rgba(255, 255, 255, 0.05);
`;

export const Content = styled.p`
  margin: 0;
  color: var(--text, #fff);
  opacity: 0.92;
  line-height: 1.5;

 
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border, rgba(255, 255, 255, 0.12));
  background: rgba(255, 255, 255, 0.05);
  opacity: 0.9;
`;

export const Empty = styled.p`
  opacity: 0.75;
  padding: 28px 18px;
`;
