export default {
  // 匹配电子邮件地址
  isEmailAddress: val => {
    return (
      /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) ||
      /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val)
    );
  },
  isEmail: value => {
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(
      value
    );
  }
};
