require('jsdom-global')();

global.$ = global.jQuery = require('jquery');
require('bootstrap-sass');

global.expect = require('expect');
global.axios = require('axios');
global.Vuex = require('vuex');
global.Vue = require('vue');
global._ = require('lodash');

// jQuery ui extend
$ = $.extend(require('jquery-ui/ui/version'));
$ = $.extend(require('jquery-ui/ui/widget'));
$ = $.extend(require('jquery-ui/ui/widgets/selectmenu'));
$ = $.extend(require('bootstrap-datepicker'));
$ = $.extend(require('slick-carousel'));
$ = $.extend(require('jquery-fancybox/source/js/jquery.fancybox.pack.js'));

// Helper Functions
global.see = (wrapper, text, selector) => {
  const wrap = selector ? wrapper.find(selector) : wrapper;

  expect(wrap.html()).toContain(text);
};

global.dontSee = (wrapper, text, selector) => {
  const wrap = selector ? wrapper.find(selector) : wrapper;

  expect(wrap.html()).not.toContain(text);
};

global.type = (wrapper, text, selector) => {
  const node = wrapper.find(selector);

  node.element.value = text;
  node.trigger('input');
};

global.click = (wrapper, selector) => {
  wrapper.find(selector).trigger('click');
};

global.submit = (wrapper, selector) => {
  wrapper.find(selector).trigger('submit');
};
