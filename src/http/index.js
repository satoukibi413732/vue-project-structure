import { get, post } from './http';

export default {
  login: data => {
    return post('/auth/login', data);
  },
  fetchUserList: params => {
    return get('/user/fetchUserList', params);
  },
  addUser: data => {
    return post('/user/addUser', data);
  },
  deleteUser: data => {
    return post('/user/deleteUser', data);
  },
  updatePassword: data => {
    return post('/user/updatePassword', data);
  },
  updateMyPassword: data => {
    return post('/user/updateMyPassword', data);
  },
  updateUserStatus: data => {
    return post('/user/updateUserStatus', data);
  },
  fetchLogList: params => {
    return get('/log/fetchLogList', params);
  },
};
