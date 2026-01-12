import { useMemo } from "react";
import { useNotesData } from "../context/Datacontext";
import { useNotesUI } from "../context/UIcontext";
import {
  NotesWrap,
  NotesGrid,
  Card,
  CardHeader,
  Title,
  Meta,
  Badge,
  Content,
  Tags,
  Tag,
  Empty,
} from "./notesMain.styled";

const NotesMain = () => {
  const { notes } = useNotesData();
  const { chosenFilter, activeTag, searchValue, isGrid } = useNotesUI();

  const visibleNotes = useMemo(() => {
    let list = [...notes];

    if (chosenFilter === "trash") list = list.filter((n) => n.isDeleted);
    else list = list.filter((n) => !n.isDeleted);

    if (chosenFilter === "pinned") list = list.filter((n) => n.isPinned);
    if (chosenFilter === "archived") list = list.filter((n) => n.isArchived);

    if (activeTag) list = list.filter((n) => n.tags.includes(activeTag));

    const q = searchValue.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.content.toLowerCase().includes(q)
      );
    }

    
    list.sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

    return list;
  }, [notes, chosenFilter, activeTag, searchValue]);

  return (
    <NotesWrap>
      {visibleNotes.length === 0 ? (
        <Empty>Nema beleški za prikaz.</Empty>
      ) : (
        <NotesGrid $grid={isGrid}>
          {visibleNotes.map((n) => (
            <Card key={n.id}>
              <CardHeader>
                <Title>{n.title || "Untitled"}</Title>
                <Meta>
                  {n.isPinned && <Badge>Pinned</Badge>}
                  {n.isArchived && <Badge>Archived</Badge>}
                </Meta>
              </CardHeader>

              <Content>{n.content}</Content>

              {n.tags.length > 0 && (
                <Tags>
                  {n.tags.slice(0, 6).map((t) => (
                    <Tag key={t}>#{t}</Tag>
                  ))}
                </Tags>
              )}
            </Card>
          ))}
        </NotesGrid>
      )}
    </NotesWrap>
  );
};

export default NotesMain;
