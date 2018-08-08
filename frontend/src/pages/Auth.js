import React from "react";
import AuthWrapper from "components/Auth/AuthWrapper";
import { Route } from "react-router-dom";
import LoginContainer from "containers/Auth/LoginContainer";
import JoinContainer from "containers/Auth/JoinContainer";

const Auth = () => {
    return (
        <div>
            <AuthWrapper>
                <Route exact path = "/auth" component = {LoginContainer} />
                <Route path = "/auth/join" component = {JoinContainer} />
            </AuthWrapper>
        </div>
    );
};

export default Auth;