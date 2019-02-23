import Dashboard from "views/Dashboard.jsx";
import Users from "views/UserList.jsx";
import Movieslist from "views/Movieslist.jsx";

import MovieUpload from "views/MovieUpload.jsx";
import Payment from "views/Payment.jsx";

import Register from "views/Register.jsx";
import Login from "views/Login.jsx";
import Reset from "views/Reset.jsx";
import Plans from "views/Plans.jsx";
import About from "views/About.jsx";
import Profile from "views/Profile.jsx";
import EditProfile from "views/EditProfile.jsx";
import Watch from "views/watch.jsx";
import CpRegister from "views/CpRegister.jsx";
import CpLogin from "views/CpLogin.jsx";

import Subscribe from "views/Subscribe.jsx";
import Watched from "views/Watched.jsx";
import Movie from "views/Movie.jsx";
import Landing from "views/Landing.jsx";
import Privacy from "views/privacy.jsx";
import FAQ from "views/FAQ.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
   {
    path: "/Userlist",
    name: "User List",
    icon: "tim-icons icon-puzzle-10",
    component: Users,
    layout: "/admin"
  },
  {
    path: "/MovieUpload",
    name: "Movie Upload",
    icon: "tim-icons icon-single-02",
    component: MovieUpload,
    layout: "/admin"
  },
  {
    path: "/Movieslist",
    name: "Movieslist",
    icon: "tim-icons icon-pin",
    component: Movieslist,
    layout: "/admin"
  },
  {
    path: "/Payment",
    name: "Payment",
    icon: "tim-icons icon-pin",
    component: Payment,
    layout: "/User"
  },
  
  {
    path: "/home",
    // icon: "tim-icons icon-align-center",
    component: Landing,
    layout: "/rtl"

  },

  {
    path: "/register",
    name: "Registration",
    icon: "tim-icons icon-chart-pie-36",
    component: Register,
    layout: "/rtl"
  },
  {
    path: "/login",
    name: "Login",
    icon: "tim-icons icon-chart-pie-36",
    component: Login,
    layout: "/rtl"
  },
    {
    path: "/cp/register",
    name: "Registration",
    icon: "tim-icons icon-chart-pie-36",
    component: CpRegister,
    layout: "/rtl"
  },
  {
    path: "/cp/login",
    name: "Content Provider Login",
    icon: "tim-icons icon-chart-pie-36",
    component: CpLogin,
    layout: "/rtl"
  },

  {
    path: "/Reset",
    name: "Reset",
    icon: "tim-icons icon-chart-pie-36",
    component: Reset,
    layout: "/rtl"
  },
  {
    path: "/plans",
    name: "Plans",
    icon: "tim-icons icon-chart-pie-36",
    component: Plans,
    layout: "/rtl"
  },
  {
    path: "/About",
    name: "About",
    icon: "tim-icons icon-chart-pie-36",
    component: About,
    layout: "/rtl"
  },
  {
    path: "/Profile",
    name: "Profile",
    icon: "tim-icons icon-chart-pie-36",
    component: Profile,
    layout: "/User"
  },
  {
    path: "/EditProfile",
    name: "EditProfile",
    icon: "tim-icons icon-chart-pie-36",
    component: EditProfile,
    layout: "/User"
  },
   {
    path: "/Watch",
    name: "WatchMovies",
    icon: "tim-icons icon-chart-pie-36",
    component: Watch,
    layout: "/User"
  },
  {
    path: "/Subscribe",
    name: "Subscribe",
    icon: "tim-icons icon-chart-pie-36",
    component: Subscribe,
    layout: "/User"
  },
  {
    path: "/Watched",
    name: "Watched",
    icon: "tim-icons icon-chart-pie-36",
    component: Watched,
    layout: "/User"
  },
   {
    path: "/Movie",
    name: "Movie",
    icon: "tim-icons icon-chart-pie-36",
    component: Movie,
    layout: "/User"
  },
  {
    path: "/privacy",
    name: "Privacy",
    icon: "tim-icons icon-chart-pie-36",
    component: Privacy,
    layout: "/rtl"
  },
  {
    path: "/FAQ",
    name: "FAQ",
    icon: "tim-icons icon-chart-pie-36",
    component: FAQ,
    layout: "/rtl"
  },
];
export default routes;
