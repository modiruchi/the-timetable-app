import * as React from 'react';
import './tt-input.scss';
import { InputProps } from './interfaces';

export const TTInput: React.FC<InputProps> = (props) => {
    const style: React.CSSProperties = { height: props.height, width: props.width };

    return (
        <input {...props} style={style} type="text"></input>        
    )
}

TTInput.defaultProps = {
    height: '35px',
    width: '200px'
}

