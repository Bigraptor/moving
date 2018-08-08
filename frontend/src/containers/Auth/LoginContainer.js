import React, { Component } from "react";
import AuthContents from "components/Auth/AuthContents";
import InputWithLabel from "components/Auth/InputWithLabel";
import AuthButton from "components/Auth/AuthButton";
import RightAlignLink from "components/Auth/RightAlignLink";
import AuthError from "components/Auth/AuthError";

import * as accountActions from "redux/modules/account";
import * as userActions from "redux/modules/user";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import storage from "lib/storage";
import queryString from "query-string";

class LoginContainer extends Component{

    componentDidMount(){
        const { location } = this.props;
        const query = queryString.parse(location.search);
        if(query.expired !== undefined) {
            this.setError('세션이 만료되었습니다. 다시 로그인 해주세요.');
        }
    }

    componentWillUnmount(){
        const { AccountActions } = this.props;
        AccountActions.initializeForm('login');
    }

    handleChange = (e) => {
        const { AccountActions } = this.props;
        const { name, value } = e.target;
        AccountActions.changeInput({
            name,
            value,
            form: 'login'
        });
    };

    setError = (message) => {
        const { AccountActions } = this.props;
        AccountActions.setError({
            form: 'login',
            message
        });
    };

    handleLogin = async () => {
        const { AccountActions, UserActions, history } = this.props;
        const { id, pw } = this.props.form.toJS();
        
        try{
            await AccountActions.login({id, pw});
            const loggedInfo = this.props.result.toJS();

            UserActions.setLoggedInfo(loggedInfo);
            history.push('/');
            storage.set('loggedInfo', loggedInfo);
        }catch(e) {
            this.setError('잘못된 계정정보 입니다.');
        }
    };

    render(){
        const { error } = this.props;
        const { id, pw } = this.props.form.toJS();
        const { handleChange, handleLogin } = this;

        return (
            <div>
                <AuthContents title = "로그인" >
                    <InputWithLabel label = "아이디" type = "text" name = "id" placeholder = "아이디" value = {id} onChange = {handleChange} />
                    <InputWithLabel label = "비밀번호" type = "password" name = "pw" placeholder = "비밀번호" value = {pw} onChange = {handleChange} />
                    {error && <AuthError>{error}</AuthError>}
                    <AuthButton click = {handleLogin}>로그인</AuthButton>
                    <RightAlignLink to = "/auth/join">회원가입</RightAlignLink>
                </AuthContents>
            </div>
        );
    }
};

export default connect(
    (state) => ({
        form: state.account.getIn(['login', 'form']),
        result: state.account.get('result'),
        error: state.account.getIn(['login', 'error'])
    }),
    (dispatch) => ({
        AccountActions: bindActionCreators(accountActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(LoginContainer);