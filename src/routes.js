import React from 'react';
import Dashboard from "views/Dashboard.js";
import UserPage from "views/UserPage.js";
import StudentSubjectModal from 'components/Subjects/StudentSubjectModal';
import Login from 'views/UserAuth/Login';
import Lesson from 'views/Lesson';

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },
  
  {
    path: "/lesson",
    component: Lesson,
    layout: "/admin",
    redirect: true
  },
  {
    type: "dropdown",
    name: "Year One",
    children: [
      {
        name: "First Term",
        target: "modal",
        component: <StudentSubjectModal />
      }
    ]
  },

  {
    type: "dropdown",
    name: "Year Two",
    children: [
      {
        name: "First Term",
        target: "modal",
        component: <StudentSubjectModal />
      }
    ]
  },
  {
    type: "dropdown",
    name: "Year Three",
    children: [
      {
        name: "First Term",
        target: "modal",
        component: <StudentSubjectModal />
      }
    ]
  }
  
  //  {
  //   pro: true,
  //   name: "Logout",
  //   icon: "media-1_button-power",
  //   layout: "/admin"
  // }
  
];
export default dashRoutes;

export var authRoutes = [
  /****************************/
  // === AUTH ROUTES ===
  /****************************/
  {
    path: "/login",
    component: Login,
    layout: "/auth",
    redirect: true
  },
]
