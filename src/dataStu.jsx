import {
  Dashboard as DashboardIcon,
  Edit,
  List,
  Checklist,
  Sms,
  Logout,
  AttachMoney,
  Search as SearchIcon,
  PeopleAlt,
  Settings as SettingsIcon,
  Help as HelpIcon,
} from "@mui/icons-material";

import Dashboard from "./Tutor/Dashboard";

import Studentlist from "./Tutor/Studentlist";
import Requestlist from "./Tutor/Requestlist";
import Coinbank from "./Tutor/Coinbank";
import Invitefriend from "./Tutor/Invitefriend";
import Settings from "./Tutor/Settings";
import Help from "./Tutor/Help";
import DashboardSt from "./Student/DashboardSt";
import EditprofileSt from "./Student/EditprofileSt";
import Search from "./Search";

const data = [
  {
    id: 0,
    label: "Dashboard",
    icon: <DashboardIcon />,
    component: <DashboardSt />,
    path: "/Student/Dashboard",
  },
  {
    id: 1,
    label: "Editprofile",
    icon: <Edit />,
    component: <EditprofileSt />,
    path: "/Student/Editprofile",
  },
  {
    id: 2,
    label: "Search",
    icon: <SearchIcon />,
    component: <Search />,
    path: "/Student/Search",
  },
  {
    id: 5,
    label: "Settings",
    icon: <SettingsIcon />,
    component: <Settings />,
    path: "/Student/Settings",
  },
  {
    id: 6,
    label: "Help",
    icon: <HelpIcon />,
    component: <Help />,
    path: "/Student/Help",
  },
  {
    id: 7,
    label: "Logout",
    icon: <Logout />,
    component: <Requestlist />,
    path: "/",
  },
];

export default data;
