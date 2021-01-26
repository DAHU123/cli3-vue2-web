export const constantRouterMap = [
  {
    path: "/",
    redirect: {
      name: "Mine"
    }
  },
  {
    path: "/",
    name: "Mine",
    component: () => import("../views/Mine.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }
];
