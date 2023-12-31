import { IScaffold2Group } from "react-declarative";

import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";

export const sidemenu: IScaffold2Group[] = [
  {
    id: "example_pages",
    label: "Example Pages",
    icon: PublicIcon,
    children: [
      {
        label: "Dashboard",
        id: "dashboard",
        icon: HomeIcon,
      },
      {
        label: "Users list",
        id: "users_list",
        icon: PeopleIcon,
      },
    ],
  },
];

export default sidemenu;
