export interface Note{
    id:string,
    title:string,
    content:string,
    tags:string[],
    createdAt:number,
    updatedAt:number,
    isPinned:boolean,
    isArchived:boolean,
    isDeleted:boolean;
}

export interface CreateNotePayload{
    title:string,
    content:string,
    tags?:string[];
}


export type UpdateNotePayload = Partial<Pick< 
   Note,
    | "title"
    | "content"
    | "tags"
    | "isPinned"
    | "isArchived"
  >
>;


export type NotesFilter =
  | "all"
  | "pinned"
  | "archived"
  | "trash"
  | "untagged";

export type TagFilter = string | null;

export type ActiveModal = "create" | "edit" | "settings" | "deleteConfirm" | null;