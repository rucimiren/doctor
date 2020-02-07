import Vue from 'vue'
import App from './App'

import 'muse-ui/lib/styles/base.less';
import {
  DateInput,
  TextField
} from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
Vue.use(DateInput);
Vue.use(TextField);

import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';

Vue.use(YDUI);


import Axios from "axios"
Vue.prototype.$axios = Axios

Vue.config.productionTip = false
import router from './router'

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
