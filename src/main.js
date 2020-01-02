import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import DexiePlugin from "./plugins/dexie";

Vue.use(DexiePlugin);
Vue.use(require('vue-moment'));

Vue.mixin({
  methods: {
    humanHashRate(hashrate, decimals = 2) {
      let thresh = 1000;
      if (Math.abs(hashrate) < thresh) {
        return hashrate + " h/s";
      }
      const units = [
        "Kh/s",
        "Mh/s",
        "Gh/s",
        "Th/s",
        "Ph/s",
        "Eh/s",
        "Zh/s",
        "Yh/s"
      ];
      let u = -1;
      do {
        hashrate /= thresh;
        ++u;
      } while (Math.abs(hashrate) >= thresh && u < units.length - 1);

      return (
        hashrate.toFixed(decimals) +
        ' <span class="is-size-7">' +
        units[u] +
        "</span>"
      );
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
