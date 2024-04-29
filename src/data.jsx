import {
  Dashboard as DashboardIcon,
  Edit,
  List,
  Checklist,
  Sms,
  Logout,
  AttachMoney,
  Payment,
  PeopleAlt,
  Settings as SettingsIcon,
  Help as HelpIcon,
} from "@mui/icons-material";

import Dashboard from "./Tutor/Dashboard";
import Editprofile from "./Tutor/Editprofile";
import Studentlist from "./Tutor/Studentlist";
import Requestlist from "./Tutor/Requestlist";
import Coinbank from "./Tutor/Coinbank";
import Invitefriend from "./Tutor/Invitefriend";
import Settings from "./Tutor/Settings";
import Help from "./Tutor/Help";

const data = [
  {
    id: 0,
    label: "Dashboard",
    icon: <DashboardIcon />,
    component: <Dashboard />,
    path: "/Tutor/Dashboard",
  },
  {
    id: 1,
    label: "Editprofile",
    icon: <Edit />,
    component: <Editprofile />,
    path: "/Tutor/Editprofile",
  },
  {
    id: 2,
    label: "Studentlist",
    icon: <List />,
    component: <Studentlist />,
    path: "/Tutor/Studentlist",
  },
  
 
  {
    id: 3,
    label: "Coinbank",
    icon: <AttachMoney />,
    component: <Coinbank />,
    path: "/Tutor/Coinbank",
  },
  
  {
    id: 4,
    label: "Invitefriend",
    icon: <PeopleAlt />,
    component: <Invitefriend />,
    path: "/Tutor/Invitefriend",
  },
  {
    id: 5,
    label: "Settings",
    icon: <SettingsIcon />,
    component: <Settings />,
    path: "/Tutor/Settings",
  },
  {
    id: 6,
    label: "Help",
    icon: <HelpIcon />,
    component: <Help />,
    path: "/Tutor/Help",
  },
  {
    id: 7,
    label: "Logout",
    icon: <Logout />,
    component: <Requestlist/>,
    path: "/Tutor/Requestlist",
  },
];

export default data;
