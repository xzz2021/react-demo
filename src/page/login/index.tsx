import React, { Component } from "react";

import './index.css'
import LoginForm from "./login";

export default class Login extends Component {
    render(): React.ReactNode {
        return (
            <div className="form_wrapper">
                <LoginForm />

            </div>
        )
    }

}
