import * as React from 'react';
import { NoteProps } from './interfaces';


export const Note: React.FC<NoteProps> = ({ note }) => {

    return (
        <div className="note-container">
            {note && note.values.map((noteValue) => {
                return (
                    <div>
                        <span>{noteValue.value}</span>
                    </div>
                )
            })}
        </div>
    )
}