import * as React from 'react';

import { ContentProps } from "./interfaces";
import { getNotesGroup } from '../../../common/data/helpers';
import { NotesGroup } from './notes-group';
import './content.scss';

export const Content: React.FC<ContentProps> = ({ selectedNotesGroup }) => {

    const notesGroup = getNotesGroup(selectedNotesGroup);

    return (
        <div className="content-container">
            <NotesGroup notesGroup={notesGroup} />
        </div>
    )

}