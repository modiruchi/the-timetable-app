import React from "react";
import './add-group.scss';
import { AddGroupProps } from './interface';
import { TTButton } from '../../../common/tt-button/tt-button';

export const AddGroup: React.FC<AddGroupProps> = ({ onClick }) => {
    return (<div className='add-group-container'>
        <TTButton text="+" onClick={() => onClick({ name: 'New', displayValue: 'New Group' })}></TTButton>
    </div>)
}