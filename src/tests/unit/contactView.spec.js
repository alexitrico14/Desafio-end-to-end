import { shallowMount } from '@vue/test-utils';
import ContactView from '@/views/ContactView.vue';

describe('ContactView.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(ContactView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
