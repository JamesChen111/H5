import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import {
  Tabbar,
  TabbarItem,
  Search,
  Image,
  Lazyload,
  Swipe,
  SwipeItem,
  CountDown,
  Tab,
  Tabs,
  NavBar,
  Icon,
  Field,
  Uploader,
  Button,
  Popup,
  Dialog,
  Cell,
  CellGroup,
  Divider,
  Grid,
  GridItem,
  Loading
} from "vant";
import "amfe-flexible";
import "./assets/scss/index.scss";
import "@/assets/icons/iconfont.css";
import "./mock/mock";

Vue.prototype.$axios = axios;
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Search);
Vue.use(Image);
Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);
Vue.use(CountDown);
Vue.use(Tab).use(Tabs);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Field);
Vue.use(Uploader);
Vue.use(Button);
Vue.use(Popup);
Vue.use(Dialog);
Vue.use(Divider);
Vue.use(Cell).use(CellGroup);
Vue.use(Grid).use(GridItem);
Vue.use(Loading);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
