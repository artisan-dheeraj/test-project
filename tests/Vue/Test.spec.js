/* global describe beforeEach it see afterEach */
import { mount } from '@vue/test-utils';
import moxios from 'moxios';
import Test from '../../resources/assets/js/components/Test.vue';

describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    moxios.install();

    wrapper = mount(Test, {
      stubs: ['router-link', 'router-view']
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('shows text', () => {
    see(wrapper, "I'm an example component.");
  });
});
