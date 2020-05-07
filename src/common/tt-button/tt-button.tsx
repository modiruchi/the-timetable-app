import * as React from 'react';
import { ButtonProps } from './interfaces';
import './tt-button.scss';

export const TTButton: React.FC<ButtonProps> = ({ text }) => {
    return (
        <button>{text}</button>
    )
}