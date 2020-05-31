import * as React from 'react';
import { NotesGroupProps } from './interfaces';
import { Note } from './note';
import './notes-group.scss';

import { useState } from 'react';
// import { TodosDispatch } from './content';
import { getNotesFromGroup } from '../../common/data/helpers';
import { INote } from '../../common/data/mock-data';


export const NotesGroup: React.FC<NotesGroupProps> = ({ notesGroup }) => {

    const [notes, updateNotes] = useState(getNotesFromGroup(notesGroup.name));

    React.useEffect(() => {
        updateNotes(getNotesFromGroup(notesGroup.name));
    }, [notesGroup]);

    // const dispatch = useContext(TodosDispatch);

    // const onNoteValueEdit = (event: any, noteValue: NoteValue, note: INote) => {
    //     const noteObj = notes.find((noteObj) => {
    //         return noteObj === note;
    //     });
    //     dispatch({ noteObj, noteValue, event });
    // }

    // const onNoteValueAdd = (value: string, note: INote) => {
    //     dispatch({ value, note });
    // }

    return (
        <div className="notes-group-container">
            {notes.map((note: INote, index: number) => {
                return (
                    <Note key={index} note={note} updateNotes={updateNotes}></Note>
                )
            })}
        </div>
    )
}


