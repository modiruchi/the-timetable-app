import * as React from 'react';

import { ContentProps } from "./interfaces";
import { getNotesGroup } from '../../common/data/helpers';
import { NotesGroup } from './notes-group';
import './content.scss';
import { NoteValue, Note } from '../../common/data/mock-data';
import { useState } from 'react';

export const Content: React.FC<ContentProps> = ({ selectedNotesGroup }) => {

    let notesGroup = getNotesGroup(selectedNotesGroup);
    let [stateNotesGroup, updateStateNotesGroup] = useState(notesGroup);

    const onNoteValueEdit = (noteObj: Note, noteValue: NoteValue, event: any) => {
        noteObj.values.find((noteValueObj) => {
            if (noteValueObj === noteValue) {
                noteValueObj.value = event.target.value;
                return true;
            }
            return false;
        });
        updateStateNotesGroup({...notesGroup})
    }

    const propsOnNoteValueAdd = (value: string, note: Note) => {
        note.values = [...note.values, {value}];
        updateStateNotesGroup({...notesGroup});
    }

    return (
        <div className="content-container">
            <NotesGroup notesGroup={stateNotesGroup} propsOnNoteValueEdit={onNoteValueEdit} propsOnNoteValueAdd={propsOnNoteValueAdd} />
        </div>
    )

}