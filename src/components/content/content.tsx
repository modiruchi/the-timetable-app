import * as React from 'react';

import { ContentProps } from "./interfaces";
import { getNotesGroup } from '../../common/data/helpers';
import { NotesGroup } from './notes-group';
import './content.scss';
import { createContext, useState } from 'react';

export const TodosDispatch = createContext(null);

// function init(selectedNotesGroup: string) {
//     return getNotesGroup(selectedNotesGroup);
// }

// const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'note-value-edit':
//             action.noteObj.values.find((noteValueObj: NoteValue) => {
//                 if (noteValueObj === action.noteValue) {
//                     noteValueObj.value = action.value;
//                     return true;
//                 }
//                 return false;
//             });
//             return { ...state };
//         case 'note-value-add':
//             // let newState = {...state};
//             // let noteObj = newState.notes.find((note: Note)=>{
//             //     return note.id === action.node.id;
//             // })

//             // action.note.values = [...action.note.values, { 'value': action.value }];
//             return { ...state };
//         case 'new-data':
//             return {...action.value};    
//     }
// }

export const Content: React.FC<ContentProps> = ({ selectedNotesGroup }) => {
    const [stateNotesGroup, updateStateNotesGroup] = useState(getNotesGroup(selectedNotesGroup));

    React.useEffect(()=>{
        updateStateNotesGroup(getNotesGroup(selectedNotesGroup));    
    }, [selectedNotesGroup])

    return (
        // <TodosDispatch.Provider value={updateStateNotesGroup}>
            <div className="content-container">
                <NotesGroup notesGroup={stateNotesGroup} />
            </div>
        // </TodosDispatch.Provider>
    )

}