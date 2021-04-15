import { useState } from 'react';
import "./Form.css";

function Form(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassoword, setConfirmPassword] = useState('');

    function usernameChecker() {

    }

    function emailChecker() {

    }

    function passwordChecker() {

    }

    function confirmPasswordChecker() {

    }

    function submitHandler() {

    }

    return (
        <form className='form' method='post' onSubmit={submitHandler}>
            <fieldset>
                <legend>{props.type + " Form"}</legend>

                <div className="fieldset-row">
                    <label htmlFor='username'>Username</label>
                    <input type="text" name="username" placeholder="Give_Leo_Oscar" onBlur={usernameChecker} />
                </div>

                <div className="fieldset-row">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="jon_doe@gmail.com" onBlur={emailChecker} />
                </div>

                <div className="fieldset-row">
                    <label htmlFor="passoword">Password</label>
                    <input type="password" name="password" placeholder="123456" onBlur={passwordChecker} />
                </div>

                <div className="fieldset-row">
                    <label htmlFor="confirmPassoword">Confirm Password</label>
                    <input type="password" name="confirmPassword" placeholder="123456" onChange={confirmPasswordChecker} />
                </div>

                <div className="fieldset-row">
                    <input type="submit">{props.type}</input>
                </div>
            </fieldset>
        </form>
    );
}

export default Form;