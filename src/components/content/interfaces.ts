import { NotesGroup, Note } from "../../common/data/mock-data";

export interface ContentProps {
    selectedNotesGroup: string;
}

export interface NotesGroupProps {
    notesGroup: NotesGroup | undefined;
    propsOnNoteValueEdit: Function;
    propsOnNoteValueAdd: Function;
}

export interface NoteProps {
    note: Note;
    onNoteValueEdit: Function;
    onNoteValueAdd: Function;
}