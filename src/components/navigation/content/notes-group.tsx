import * as React from 'react';
import { NotesGroupProps } from './interfaces';
import { Note } from './note';

export const NotesGroup: React.FC<NotesGroupProps> = ({ notesGroup }) => {

    return (
        <div className="notes-group-container">
            {notesGroup && notesGroup.notes.map((note) => {
                return (
                    <Note note={note}></Note>
                )
            })}
        </div>
    )
}