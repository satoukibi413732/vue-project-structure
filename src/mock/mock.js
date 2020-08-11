// 使用 Mock
const Mock = require('mockjs');

Mock.mock('http://localhost:8080/api/v1/auth/login', 'post', option => {
  //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
  let req = JSON.parse(option.body);
  let res;
  if (req.username === 'admin' && req.password === '123456') {
    res = {
      status: 'ok',
      message: 'succeed',
      data: {
        access_token: 'cd915283001af72f1594018277',
        account: req.username,
        //0 管理员 1 普通用户
        role: 0,
      },
    };
  } else {
    res = {
      status: 'fail',
      message: '用户密码错误',
      data: null,
    };
  }
  return res;
});

Mock.mock('http://localhost:8080/api/v1/auth/account/list', 'get', () => {
  return {
    status: 'ok',
    message: '',
    data: {
      //第一页
      page: 1,
      //总数据数
      total: 10,
      //每页10条数据
      size: 10,
      userList: [
        {
          id: 0,
          userName: 'admin',
          //是否用户列表只会返回普通用户？如果是不需要role
          //0 管理员 1 普通用户,
          role: 0,
          createTime: '2020.6.30',
        },
        {
          id: 1,
          userName: 'operator1',
          //是否用户列表只会返回普通用户？如果是不需要role
          //0 管理员 1 普通用户,
          role: 1,
          // true 为启用状态 反之 则为停用状态
          status: true,
          createTime: '2020.7.02',
        },
        {
          id: 2,
          userName: 'operator2',
          //是否用户列表只会返回普通用户？如果是不需要role
          //0 管理员 1 普通用户,
          role: 1,
          // true 为启用状态 反之 则为停用状态
          status: false,
          createTime: '2020.7.03',
        },
        {
          id: 3,
          userName: 'operator3',
          //是否用户列表只会返回普通用户？如果是不需要role
          //0 管理员 1 普通用户,
          role: 1,
          // true 为启用状态 反之 则为停用状态
          status: false,
          createTime: '2020.7.03',
        },
        {
          id: 4,
          userName: 'operator4',
          //是否用户列表只会返回普通用户？如果是不需要role
          //0 管理员 1 普通用户,
          role: 1,
          // true 为启用状态 反之 则为停用状态
          status: true,
          createTime: '2020.7.04',
        },
        {
          id: 5,
          userName: 'operator5',
          //是否用户列表只会返回普通用户？如果是不需要role
          //0 管理员 1 普通用户,
          role: 1,
          // true 为启用状态 反之 则为停用状态
          status: true,
          createTime: '2020.7.04',
        },
        {
          id: 6,
          userName: 'operator6',
          //是否用户列表只会返回普通用户？如果是不需要role
          //0 管理员 1 普通用户,
          role: 1,
          // true 为启用状态 反之 则为停用状态
          status: true,
          createTime: '2020.7.04',
        },
        {
          id: 7,
          userName: 'operator7',
          //是否用户列表只会返回普通用户？如果是不需要role
          //0 管理员 1 普通用户,
          role: 1,
          // true 为启用状态 反之 则为停用状态
          status: true,
          createTime: '2020.7.05',
        },
        {
          id: 8,
          userName: 'operator8',
          //是否用户列表只会返回普通用户？如果是不需要role
          //0 管理员 1 普通用户,
          role: 1,
          // true 为启用状态 反之 则为停用状态
          status: false,
          createTime: '2020.7.06',
        },
        {
          id: 9,
          userName: 'operator9',
          //是否用户列表只会返回普通用户？如果是不需要role
          //0 管理员 1 普通用户,
          role: 1,
          // true 为启用状态 反之 则为停用状态
          status: true,
          createTime: '2020.7.07',
        },
      ],
    },
  };
});
