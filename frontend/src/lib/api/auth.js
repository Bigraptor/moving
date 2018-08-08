import axios from "axios";

export const register = ({id, nickname, pw}) => axios.post('/api/auth/register', {id, nickname, pw}); 
export const checkIdExists = (id) => axios.get('/api/auth/exists/id/' + id);
export const checkNicknameExists = (nickname) => axios.get('/api/auth/exists/nickname/'+nickname);
export const login = ({id, pw}) => axios.post('/api/auth/login', {id, pw});
export const checkStatus = () => axios.get('/api/auth/check');