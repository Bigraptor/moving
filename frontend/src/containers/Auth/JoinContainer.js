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
import { isAlphanumeric, isLength } from "validator";
import debounce from "lodash/debounce";
import storage from "lib/storage";

class JoinContainer extends Component {

    validate = {
        id: (value) => {
            if(!isAlphanumeric(value) || !isLength(value, {min: 4, max: 10})) {
                this.setError("아이디는 4~10 글자의 알파벳 혹은 숫자로 이루어져 있어야 합니다.");
                return false;
            }

            return true;
        },
        nickname: (value) => {
            if(!isLength(value, {min:3, max:7})) {
                this.setError('닉네임은 3글자에서 7글자까지 입니다.');
                return false;
            }

            return true;
        },
        pw: (value) => {
            if(!isLength(value, {min: 4})) {
                this.setError('비밀번호는 최소 4글자 이상이어야 합니다.');
                return false;
            }

            return true;
        },
        pwconfirm: (value) => {
            if(this.props.form.get('pw') !== value) {
                this.setError('비밀번호가 일치하지 않습니다.');
                return false;
            }

            return true;
        }
    };

    componentWillUnmount(){
        const { AccountActions } = this.props;
        AccountActions.initializeForm('join');
    };

    setError = (message) => {
        const { AccountActions} = this.props;
        AccountActions.setError({
            form: 'join', 
            message
        });
    };

    checkIdExists = debounce(async (id) => {
        const { AccountActions } = this.props;
        try{
            await AccountActions.checkIdExists(id);
            if(this.props.exists.get('id')) {
                this.setError('이미 존재하는 아이디입니다.');
            } else{
                this.setError(null);
            }
        }catch(e) {
            this.setError(null);
        }
    }, 300);

    checkNicknameExists = debounce(async (nickname) => {
        const { AccountActions } = this.props;
        try {
            await AccountActions.checkNicknameExists(nickname);
            if(this.props.exists.get('nickname')) {
                this.setError('닉네임이 존재합니다.');
            } else {
                this.setError(null);
            }
        }catch(e) {
            this.setError(null);
        }
    }, 300);

    handleChange = (e) => {
        const { AccountActions } = this.props;
        const { name, value } = e.target;
        AccountActions.changeInput({
            name, 
            value, 
            form:'join'
        });

        const validation = this.validate[name](value);
        if(!validation) return;

        const check = name === 'id' ? this.checkIdExists : this.checkNicknameExists;
        check(value);
    };

    handleRegister = async () => {
        const { form, AccountActions, history, UserActions, error } = this.props;
        const { id, nickname, pw, pwconfirm } = form.toJS();
        const { validate } = this;

        if(error) return;
        if(!validate['id'](id)||!validate['nickname'](nickname)||!validate['pw'](pw)||!validate['pwconfirm'](pwconfirm)) {
            return;
        }

        try{
            await AccountActions.register({id, nickname, pw});
            const loggedInfo = this.props.result.toJS();
            
            storage.set('loggedInfo', loggedInfo);
            UserActions.setLoggedInfo(loggedInfo);
            UserActions.setValidated(true);
            history.push('/');
        }catch(e) {
            if(e.response.status === 409) {
                const {key} = e.response.data;
                const message = key === 'id' ? '아이디가 이미 존재합니다.' : '닉네임이 이미 존재합니다.';
                return this.setError(message);
            }
            this.setError('알 수 없는 오류가 발생했습니다.');
        }
    };

    render(){

        const { handleChange, handleRegister } = this;
        const { id, nickname, pw, pwconfirm } = this.props.form.toJS();
        const { error } = this.props;

        return (
            <div>
                <AuthContents title = "회원가입" >
                    <InputWithLabel label = "아이디" type = "text" name = "id" placeholder = "아이디" value = {id} onChange = {handleChange} />
                    <InputWithLabel label = "닉네임" type = "text" name = "nickname" placeholder = "닉네임" value = {nickname} onChange = {handleChange} />
                    <InputWithLabel label = "비밀번호" type = "password" name = "pw" placeholder = "비밀번호" value = {pw} onChange = {handleChange} />
                    <InputWithLabel label = "비밀번호 확인" type = "password" name = "pwconfirm" placeholder = "비밀번호 확인" value = {pwconfirm} onChange = {handleChange} />
                    {error&&<AuthError>{error}</AuthError>}
                    <AuthButton click = {handleRegister}>회원가입</AuthButton>
                    <RightAlignLink to = "/auth">로그인</RightAlignLink>
                </AuthContents>
            </div>
        );
    }
};

export default connect(
    ( state ) => ({
        form: state.account.getIn(['join', 'form']),
        error: state.account.getIn(['join', 'error']),
        exists: state.account.getIn(['join', 'exists']),
        result: state.account.get('result')
    }),
    (dispatch) => ({
        AccountActions: bindActionCreators(accountActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(JoinContainer);