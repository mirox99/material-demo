import {TextField, Button} from '@material-ui/core';
import {firebase} from "../api/firebase";
import {useInput} from "../hooks/useInput";
import './auth.css'
import {useHistory} from "react-router-dom";

function Auth() {
    const history = useHistory();
    const {
        value: email,
        bind: bindEmail,
        setError: setEmailError,
    } = useInput('');
    const {
        value: password,
        bind: bindPassword,
        setError: setPasswordError,
    } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/");
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode === 'auth/email-already-in-use') {
                    signInWithEmailAndPassword()
                }
                if (errorCode === 'auth/weak-password') {
                    setPasswordError(errorMessage)
                }
                if (errorCode === 'auth/invalid-email') {
                    setEmailError(errorMessage)
                }
            });
    }
    const signInWithEmailAndPassword = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/");
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;

                if (errorCode === 'auth/wrong-password') {
                    setPasswordError(errorMessage)
                }
            });
    }

    return (
        <div className='auth-view'>
            <div className="content">
                <h2 className='auth-header'>Login or Register</h2>
                <form onSubmit={handleSubmit} className='MuiFormGroup-root' autoComplete="off">
                    <TextField required
                               id="email"
                               label="Email"
                               {...bindEmail}
                               variant="outlined"/>
                    <TextField required
                               id="password"
                               label="Password"
                               type="password"
                               {...bindPassword}
                               variant="outlined"/>
                    <Button variant="contained"
                            type='submit'
                            color="primary">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Auth;
