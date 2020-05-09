import { NotesGroup, Note } from "../../../common/data/mock-data";

export interface ContentProps {
    selectedNotesGroup: string;
}

export interface NotesGroupProps {
    notesGroup: NotesGroup | undefined;
}

export interface NoteProps {
    note: Note;
}