
import Users from "views/UserList.jsx";
import Movieslist from "views/Movieslist.jsx";
import CpProfile from "views/CpProfile.jsx";
import MovieUpload from "views/MovieUpload.jsx";
import CpRegister from "views/CpRegister.jsx";
import CpLogin from "views/CpLogin.jsx";

import Plans from "views/Plans.jsx";
import About from "views/About.jsx";




var routes1 = [
  
 {
    path: "/MovieUpload",
    name: "Movie Upload",
    icon: "tim-icons icon-single-02",
    component: MovieUpload,
    layout: "/cp"
  },
  {
    path: "/Movieslist",
    name: "Movieslist",
    icon: "tim-icons icon-pin",
    component: Movieslist,
    layout: "/cp"
  },
  {
    path: "/cp-profile",
    name: "Content Provider Profile",
    icon: "tim-icons icon-single-02",
    component: CpProfile,
    layout: "/cp"
  },

];
export default routes1;
