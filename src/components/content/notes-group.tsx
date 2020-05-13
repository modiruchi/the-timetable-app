import * as React from 'react';
import { NotesGroupProps } from './interfaces';
import { Note } from './note';
import './notes-group.scss';
import { NoteValue, Note as INote } from '../../common/data/mock-data';

export const NotesGroup: React.FC<NotesGroupProps> = ({ notesGroup, propsOnNoteValueEdit, propsOnNoteValueAdd }) => {

    const onNoteValueEdit = (event: any, noteValue: NoteValue, note: INote) => {
        const noteObj = notesGroup!.notes.find((noteObj) => {
            return noteObj === note;
        });
        propsOnNoteValueEdit(noteObj, noteValue, event);
    }

    const onNoteValueAdd = (value: string, note: INote) => {
        propsOnNoteValueAdd(value, note);
    }

    return (
        <div className="notes-group-container">
            {notesGroup && notesGroup.notes.map((note, index) => {
                return (
                    <Note key={index} onNoteValueAdd={onNoteValueAdd} onNoteValueEdit={onNoteValueEdit} note={note}></Note>
                )
            })}
        </div>
    )
}