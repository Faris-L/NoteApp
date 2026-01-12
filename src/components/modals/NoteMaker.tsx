import { useState } from "react";
import { useNotesData } from "../../context/Datacontext"; 
import { useNotesUI } from "../../context/UIcontext"; 
import {
  Wrapper,
  Field,
  Input,
  TextArea,
  TagRow,
  Btn,
  TagPills,
  TagPill,
  CheckboxLabel,
  Checkbox,
  Actions,
  SecondaryBtn,
} from "./noteMaker.styled";

const NoteMaker = () => {
  const { createNote } = useNotesData();
  const { closeModal } = useNotesUI();   

  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isPinned, setIsPinned] = useState(false);

  const addTag = () => {
    const t = tagInput.trim();
    if (!t) return;

    setTags((prev) => (prev.includes(t) ? prev : [...prev, t]));
    setTagInput("");
  };

  const removeTag = (t: string) => {
    setTags((prev) => prev.filter((x) => x !== t));
  };

  const resetForm = () => {
    setNoteTitle("");
    setNoteText("");
    setTags([]);
    setTagInput("");
    setIsPinned(false);
  };

  const handleSave = () => {
    const title = noteTitle.trim();
    const content = noteText.trim();

    
    if (!title && !content) return;

    createNote({
      title,
      content,
      tags,
    });

    resetForm();
    closeModal(); 
  };

  const handleCancel = () => {
    resetForm();
    closeModal(); 
  };

  return (
    <Wrapper>
      <Field>
        <Input
          placeholder="Title..."
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
      </Field>

      <Field>
        <TextArea
          placeholder="Write note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
      </Field>

      <Field>
        <TagRow>
          <Input
            placeholder="Add tag..."
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addTag();
              }
            }}
          />
          <Btn type="button" onClick={addTag}>
            Add tag
          </Btn>
        </TagRow>

        {tags.length > 0 && (
          <TagPills>
            {tags.map((t) => (
              <TagPill key={t} type="button" onClick={() => removeTag(t)}>
                #{t} ✕
              </TagPill>
            ))}
          </TagPills>
        )}
      </Field>

      <CheckboxLabel>
        <Checkbox
          type="checkbox"
          checked={isPinned}
          onChange={() => setIsPinned((p) => !p)}
        />
        Pin note
      </CheckboxLabel>

      <Actions>
        <SecondaryBtn type="button" onClick={handleCancel}>
          Cancel
        </SecondaryBtn>
        <Btn type="button" onClick={handleSave}>
          Save
        </Btn>
      </Actions>
    </Wrapper>
  );
};

export default NoteMaker;
