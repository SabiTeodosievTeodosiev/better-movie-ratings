import { useState } from 'react';
import { auth } from '../../../utils/firebase';
import "./UserForm.css";
// import { history } from 'react-router-dom';

function UserForm(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordEqualsConfirmPassword, setPasswordEqualsConfirmPassword] = useState(false);

    function usernameChecker(ev) {
        if (ev.target.value.length >= 6)
            setUsername(ev.target.value);
    }

    function emailChecker(ev) {
        if (ev.target.value.length >= 6)
            setEmail(ev.target.value);
    }

    function passwordChecker(ev) {
        if (ev.target.value.length >= 6)
            setPassword(ev.target.value);
    }

    function confirmPasswordChecker(ev) {
        setConfirmPassword(ev.target.value);

        if (confirmPassword.length >= 6 && password === confirmPassword)
            setPasswordEqualsConfirmPassword(true);
        else
            setPasswordEqualsConfirmPassword(false);
    }

    function submitHandler(ev) {
        ev.preventDefault();

        if (props.type === "register" && !passwordEqualsConfirmPassword)
            return;

        let objToSend = {
            username,
            email,
            password
        };

        // console.log('User object to send:');
        // console.log(objToSend);

        if (props.type === "login") {
            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    console.log('Signed in');
                    var user = userCredential.user;
                    console.log('user credential:');
                    console.log(user);
                    props.history.push('/');
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log('Firebase auth error with code: ' + errorCode + 'and message: ' + errorMessage);
                });
        }

        if (props.type === "register") {
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    console.log('Registered');
                    var user = userCredential.user;
                    console.log('user credential:');
                    console.log(user);
                    props.history.push('/');
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log('Firebase auth error with code: ' + errorCode + 'and message: ' + errorMessage);
                });
        }
    }

    let confirmPasswordRow, usernameRow;
    if (props.type === "register") {
        confirmPasswordRow = (<div className="fieldset-row">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="123456" onChange={confirmPasswordChecker} />
        </div>);

        usernameRow = (
            <div className="fieldset-row">
                <label htmlFor='username'>Username</label>
                <input type="text" name="username" placeholder="Give_Leo_Oscar" onBlur={usernameChecker} />
            </div>
        );
    }

    return (
        <form className='form user-form' method='post' onSubmit={submitHandler}>
            <fieldset>
                <legend>{props.type + " Form"}</legend>

                {usernameRow}

                <div className="fieldset-row">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="jon_doe@gmail.com" onBlur={emailChecker} />
                </div>

                <div className="fieldset-row">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="123456" onBlur={passwordChecker} />
                </div>

                {confirmPasswordRow}

                <div className="fieldset-row">
                    <input type="submit" value={props.type} />
                </div>
            </fieldset>
        </form>
    );
}

export default UserForm;