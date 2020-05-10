import * as React from 'react';
import { NoteProps } from './interfaces';
import './note.scss';
import { useRef } from 'react';
import { isNullOrUndefined } from 'util';
import { NoteValue } from '../../common/data/mock-data';


export const Note: React.FC<NoteProps> = ({ note, onNoteValueEdit, onNoteValueAdd }) => {
    const inputRef = useRef(null);
    const onNoteClick = (event: any) => {
        if(event && event.target.nodeName !== 'INPUT') {
            if (inputRef && inputRef.current !== isNullOrUndefined) {
                inputRef!.current!.focus();
            }
        }
    }

    const afterTextDone = () => {
        const value = inputRef.current.value;
        onNoteValueAdd(value, note);
        // note.values.push({ value });
        // note = { ...note };
        inputRef.current.value = '';

    }

    const onEdit = (event: any, noteValue: NoteValue) => {
        onNoteValueEdit(event, noteValue, note);
    }

    return (
        <div className="note-container">
            <div
                style={{ backgroundColor: note.color, boxShadow: `0px 0px 2px 2px ${note.color}` }}
                className="note-content-container"
                onClick={onNoteClick}>
                {note && note.values.map((noteValue, index) => {
                    return (
                        <div key={index}>
                            <input style={{ backgroundColor: note.color }} type="text" onChange={(event)=>{onEdit(event, noteValue)}} value={noteValue.value} />
                        </div>
                    )
                })}
                <div><input ref={inputRef} style={{ backgroundColor: note.color }} onBlur={afterTextDone} type="text" /></div>
            </div>
        </div>
    )
}