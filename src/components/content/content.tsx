import * as React from 'react';

import { ContentProps } from "./interfaces";
import { getNotesGroup } from '../../common/data/helpers';
import { NotesGroup as NotesGroupComponent } from './notes-group';
import './content.scss';
import { NotesGroup, NoteValue, Note } from '../../common/data/mock-data';
import { useState, useRef } from 'react';

export const Content: React.FC<ContentProps> = ({ selectedNotesGroup }) => {

    const notesGroup = getNotesGroup(selectedNotesGroup);
    let [stateNotesGroup, updateStateNotesGroup] = useState(notesGroup);

    let selectedNotesGroupRef = useRef(selectedNotesGroup);
    selectedNotesGroupRef.current = selectedNotesGroup;

    const onNoteValueEdit = (noteObj: Note, noteValue: NoteValue, event: any) => {
        noteObj.values.find((noteValueObj) => {
            if (noteValueObj === noteValue) {
                noteValueObj.value = event.target.value;
                return true;
            }
            return false;
        });
        updateStateNotesGroup({ ...notesGroup } as NotesGroup)
    }

    const propsOnNoteValueAdd = (value: string, note: Note) => {
        note.values = [...note.values, { value }];
        updateStateNotesGroup({ ...notesGroup } as NotesGroup);
    }

    React.useEffect(() => {
        return () => {
            updateStateNotesGroup(getNotesGroup(selectedNotesGroupRef.current))
        }
    }, [selectedNotesGroup])

    return (
        <div className="content-container">
            <NotesGroupComponent notesGroup={stateNotesGroup} propsOnNoteValueEdit={onNoteValueEdit} propsOnNoteValueAdd={propsOnNoteValueAdd} />
        </div>
    )

}