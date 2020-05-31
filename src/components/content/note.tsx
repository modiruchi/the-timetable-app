import * as React from 'react';
import { NoteProps } from './interfaces';
import './note.scss';
import { useRef, useState } from 'react';
import { isNullOrUndefined } from 'util';
import { NoteValue } from '../../common/data/mock-data';
import { getValuesArrayFromNote } from '../../common/data/helpers';


export const Note: React.FC<NoteProps> = ({ note }) => {

    const [values, updateValues] = useState(getValuesArrayFromNote(note));
    const inputRef = useRef(null);
    const onNoteClick = (event: any) => {
        if (event && event.target.nodeName !== 'INPUT') {
            if (inputRef && inputRef.current !== isNullOrUndefined) {
                inputRef!.current!.focus();
            }
        }
    }

    const afterTextDone = () => {
        const value = inputRef.current.value;
        if (value) {
            updateValues([...values, { parent: values[0].parent, id: 'aaass', value: value }])
            inputRef.current.value = '';
        }
    }

    const onEdit = (event: any, noteValue: NoteValue) => {
        const valuesClone: NoteValue[] = [];
        values.forEach((value) => {
            let valueObj = {...value};
            valuesClone.push(valueObj);
            valueObj.value = valueObj.id === noteValue.id? event.target.value : valueObj.value;
        });
        updateValues(valuesClone);
    }

    return (
        <div className="note-container">
            <div
                style={{ backgroundColor: note.color, boxShadow: `0px 0px 2px 2px ${note.color}` }}
                className="note-content-container"
                onClick={onNoteClick}>
                {values.map((noteValue, index) => {
                    return (
                        <div key={index}>
                            <input style={{ backgroundColor: note.color }} type="text" onChange={(event) => { onEdit(event, noteValue) }} value={noteValue.value} />
                        </div>
                    )
                })}
                <div><input ref={inputRef} style={{ backgroundColor: note.color }} onBlur={afterTextDone} type="text" /></div>
            </div>
        </div>
    )
}