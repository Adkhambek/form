import { ISwitchItem } from "react-declarative";

import DashboardPage from "../pages/DashboardPage";
import UserListPage from "../pages/UserListPage";

import ErrorPage from "../pages/ErrorPage";
import UserEditPage from "../pages/UserEditPage";

interface IRouteItem extends ISwitchItem {
  sideMenu: string;
}

export const routes: IRouteItem[] = [
  {
    path: "/",
    sideMenu: "root.example_pages.dashboard",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    sideMenu: "root.example_pages.dashboard",
    element: DashboardPage,
  },
  {
    path: "/users",
    sideMenu: "root.example_pages.users_list",
    element: UserListPage,
  },
  {
    path: "/users/:id",
    sideMenu: "root.example_pages.users_list",
    element: UserEditPage,
  },
  {
    path: "/error-page",
    sideMenu: "",
    element: ErrorPage,
  },
  {
    path: "/unauthorized-page",
    sideMenu: "",
    element: ErrorPage,
  },
];

export const sideMenuClickMap: Record<string, string> = {
  "root.example_pages.users_list": "/users",
  "root.example_pages.todos_list": "/todos_list",
  "root.example_pages.todos_card": "/todos_card",
  "root.example_pages.dashboard": "/dashboard",
};

export default routes;
