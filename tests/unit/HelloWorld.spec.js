import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = mount(HelloWorld, {
    });

    // console.log(wrapper.find('.sc-table').text());
    // expect(wrapper.text()).to.include(msg);
  });
});
