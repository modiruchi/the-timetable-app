import * as React from 'react';
import { TTInput } from '../../../common/tt-input/tt-input';
import './signup.scss';
import { TTButton } from '../../../common/tt-button/tt-button';

export const SignUp: React.FC = ()=> {

    return (
        <div className='container'>
            <div className='container-details'>
                <label className='login-label'>Log In</label>
                <div className='container-details-input-container'>
                    <TTInput placeholder='Enter user name' height='35px' width='250px'/>
                </div>
                <div className='container-details-input-container'>
                    <TTInput placeholder='Enter Password' height='35px' width='250px'/>
                </div>
                <div className='button-container'>
                    <TTButton text='Log In'></TTButton>
                </div>
            </div>
        </div>
    )
}