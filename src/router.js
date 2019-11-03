import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/find",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "./views/Home/Home"),
      children: [
        {
          path: "concern",
          name: "concern",
          component: () =>
            import(/* webpackChunkName: "concern" */ "./views/Home/HomeConcern")
        },
        {
          path: "find",
          name: "find",
          component: () =>
            import(/* webpackChunkName: "find" */ "./views/Home/HomeFound")
        }
      ]
    },
    {
      path: "/goods",
      name: "goods",
      component: () =>
        import(/* webpackChunkName: "goods" */ "./views/Goods.vue")
    },
    {
      path: "/friends",
      name: "friends",
      component: () =>
        import(/* webpackChunkName: "friends" */ "./views/FriendsCircle.vue")
    },
    {
      path: "/me",
      name: "me",
      component: () => import(/* webpackChunkName: "me" */ "./views/Me.vue")
    },
    {
      path: "/details/:id",
      name: "details",
      component: () =>
        import(/* webpackChunkName: "me" */ "./components/GoodsDetail.vue")
    },
    {
      path: "/catalogue",
      redirect: "/catalogue/skin-care",
      name: "catalogue",
      component: () =>
        import(/* webpackChunkName: "catalogue" */ "./views/Catelogue"),
      children: [
        {
          path: "skin-care",
          name: "skin-care",
          component: () =>
            import(
              /* webpackChunkName: "skin-care" */ "./views/Catelogue/SkinCare"
            ),
          meta: { title: "护肤" }
        },
        {
          path: "shoe",
          name: "shoe",
          component: () =>
            import(/* webpackChunkName: "shoe" */ "./views/Catelogue/Shoe"),
          meta: { title: "鞋靴" }
        },
        {
          path: "personal-care",
          name: "personal-care",
          component: () =>
            import(
              /* webpackChunkName: "personal-care" */ "./views/Catelogue/PersonalCare"
            ),
          meta: { title: "个人护理" }
        },
        {
          path: "healthy",
          name: "healthy",
          component: () =>
            import(
              /* webpackChunkName: "healthy" */ "./views/Catelogue/Healthy"
            ),
          meta: { title: "保健" }
        }
      ]
    },
    {
      path: "*",
      name: "404",
      component: () =>
        import(/* webpackChunkName: "404" */ "./views/NotFound.vue")
    }
  ]
});
