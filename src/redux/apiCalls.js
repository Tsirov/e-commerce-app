import { loginStart,loginFailure,loginSuccess } from './userRedux';

export const login = async (dispatch, user) =>{
    dispatch(loginStart());

    try {
        const res = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(user)
        });

        const result = await res.json();
        dispatch(loginSuccess(result))//result need to be user information
    } catch (err) {
        dispatch(loginFailure());
    }
}