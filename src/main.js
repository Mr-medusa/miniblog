import './assets/fonts/a_calling_font_d_by_7ntypes-webfont.woff'
import './assets/fonts/a_calling_font_d_by_7ntypes-webfont.woff2'
import './assets/fonts/inconsolata-webfont.woff'
import './assets/fonts/inconsolata-webfont.woff2'
import './assets/fonts/obelixpro-broken-cyr-webfont.woff'
import './assets/fonts/obelixpro-broken-cyr-webfont.woff2'
import './assets/css/normalize.css'
import './assets/css/util.css'
import './assets/css/hover.css'


import Vue from 'vue'
import Frame from './Frame.vue'
import operateTip from './components/modal/OperateTip'
import miniSelect from './components/widget/miniSelect'

import router from './router'

Vue.config.productionTip = false

Vue.component('OperateTip', operateTip);
Vue.component('miniSelect', miniSelect);

new Vue({
    router,
    render: h => h(Frame)
}).$mount('#app');
