import * as React from 'react';
import { TTInput } from '../../../common/tt-input/tt-input';
import './signup.scss';
import { TTButton } from '../../../common/tt-button/tt-button';
import { useHistory } from "react-router-dom";


const initialState = { userName: '', password: '', isErrorinUserName: false, isErrorinPwd: false};

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'userValueChange':
            return action.value === '' ? { ...state, userName: action.value, isErrorinUserName: true } : { ...state, userName: action.value, isErrorinUserName: false };
        case 'pwdValueChange':
            return action.value === '' ? { ...state, password: action.value, isErrorinPwd: true } : { ...state, password: action.value, isErrorinPwd: false };
    }
}

export const SignUp: React.FC = () => {
    let history = useHistory();
    const [state, dispatch] = React.useReducer(reducer, initialState);
    // React.useEffect(() => {
    //     if (state.userName === '') {
    //         isErrorinUserName = true;
    //     }
    // }, [state.userName]);

    // React.useEffect(() => {
    //     if (state.password === '') {
    //         isErrorinPwd = true;
    //     }
    // }, [state.password])

    const onUserNameChange = (e: any) => {
        dispatch({ type: 'userValueChange', value: e.target.value })
    }

    const onPwdChange = (e: any) => {
        dispatch({ type: 'pwdValueChange', value: e.target.value })
    }

    const onLoginButtonClick = () => {
        return state.userName && state.password && history.push('/home');
    }

    return (
        <div className='container'>
            <div className='container-details'>
                <label className='login-label'>Log In</label>
                <div className='container-details-input-container'>
                    <TTInput placeholder='Enter user name' height='35px' width='250px' onChange={onUserNameChange} />
                    {state.isErrorinUserName && (<label className="error">Please enter user name</label>)}
                </div>
                <div className='container-details-input-container'>
                    <TTInput placeholder='Enter Password' height='35px' width='250px' onChange={onPwdChange} />
                    {state.isErrorinPwd && (<label className="error">Please enter password</label>)}
                </div>
                <div className='button-container'>
                    <TTButton onClick={onLoginButtonClick} text='Log In'></TTButton>
                </div>
            </div>
        </div>
    )
}