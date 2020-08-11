// import Vue from 'vue';
import { mount, createLocalVue } from '@vue/test-utils';
import ElementUI from 'element-ui';

const localVue = createLocalVue();
localVue.use(ElementUI);

import Login from '../../src/models/auth/Login';
import $Config from '../../public/config/config';

describe('Login.vue', () => {
  const wrapper = mount(Login, {
    mocks: {
      $Config,
    },
    data() {
      return {
        account: {},
      };
    },
    localVue,
  });
  const input = wrapper.findAll('.el-input__inner').at(1);
  it('判断输入框类型是否为字符串', () => {
    expect(typeof input.text()).toBe('string');
  });
  it('判断输入框初始值是否为空', () => {
    expect(input.text()).toBe('');
  });
});
