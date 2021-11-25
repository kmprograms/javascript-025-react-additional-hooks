import React from "react";
import {useFormState} from 'react-use-form-state'

const App2 = () => {
    // react-use-form-state-hook pozwala w wygodny sposób zarządzać stanem formularza
    // npm install react-use-form-state
    // https://www.npmjs.com/package/react-use-form-state
    const [formState, {text, email, password, radio}] = useFormState();

    const submitAction = (event) => {
        event.preventDefault();
        console.log(formState.values);
        console.log(formState.validity);
        console.log(formState.touched);
    }

    return (
        <div className="container mt-5">
            <form onSubmit={submitAction}>

                <div className="form-group mb-2">
                    <label htmlFor="username">Username</label>
                    <input id="username" {...text('username')} className="form-control"/>
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="email">Email</label>
                    <input id="email" {...email('email')} className="form-control"/>
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input id="username" {...password('password')} className="form-control"/>
                </div>

                <div className="form-group mb-2">
                    <input {...radio('role', 'admin')} class="form-check-input me-1"/>
                    <label className="me-2">Admin</label>

                    <input {...radio('role', 'user')} className="form-check-input me-1"/>
                    <label className="me-2">User</label>
                </div>

                <button className="btn btn-success" type="submit">Send</button>
            </form>
        </div>
    )
}

export default App2;
