import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

export const pagesItems = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    items: [
      { title: "Default", to: "/dashboard/default" },
      { title: "Analytics", to: "/dashboard/analytics" },
      { title: "Saas", to: "/dashboard/saas" },
    ],
  },
  {
    icon: <WebOutlinedIcon />,
    title: "Pages",
    items: [
      { title: "Profile", to: "/pages/profile" },
      { title: "Settings", to: "/pages/settings" },
      {
        title: "Auth",
        items: [
          { title: "Sign In", to: "/pages/auth/signin" },
          { title: "Sign Up", to: "/pages/auth/signup" },
          { title: "Reset Password", to: "/pages/auth/rst-password" },
        ],
      },
    ],
  },
  {
    icon: <ContentPasteOutlinedIcon />,
    title: "Form",
    to: "/forms",
    items: [],
  },
  {
    icon: <AssignmentOutlinedIcon />,
    title: "List",
    to: "/list",
    items: [],
  },
  // {
  //   icon: <AssignmentOutlinedIcon />,
  //   title: "Projects",
  //   items: [],
  // },
  // {
  //   icon: <ShoppingCartOutlinedIcon />,
  //   title: "Orders",
  //   items: [],
  // },
  {
    icon: <ShoppingCartOutlinedIcon />,
    title: "Invoices",
    items: [
      { title: "List", to: "/invoices/list" },
      { title: "Details", to: "/invoices/details" },
    ],
  },
  {
    icon: <CheckBoxOutlinedIcon />,
    title: "Tasks",
    items: [],
  },
  {
    icon: <CalendarTodayOutlinedIcon />,
    title: "Calendar",
    items: [],
  },
];

export const elementsItems = [
  {
    icon: <GridViewOutlinedIcon />,
    title: "Components",
    items: [
      { title: "Alerts", to: "/components/alerts" },
      { title: "Accordian", to: "/components/accordian" },
      { title: "Avatars", to: "/components/avatars" },
      { title: "Badges", to: "/components/badges" },
      { title: "Buttons", to: "/components/buttons" },
      { title: "Cards", to: "/components/cards" },
      { title: "Chips", to: "/components/chips" },
      { title: "Dialogs", to: "/components/dialogs" },
      { title: "Lists", to: "/components/lists" },
      { title: "Menus", to: "/components/menus" },
      { title: "Pagination", to: "/components/pagination" },
      { title: "Progress", to: "/components/progress" },
      { title: "Snackbars", to: "/components/snackbars" },
      { title: "Tooltips", to: "/components/tooltips" },
    ],
  },
  {
    icon: <AutoGraphOutlinedIcon />,
    title: "Charts",
    items: [],
  },
  {
    icon: <ContentPasteOutlinedIcon />,
    title: "Forms",
    items: [
      { title: "Pickers", to: "/forms/pickers" },
      { title: "Selection Controls", to: "/forms/selectionControls" },
      { title: "Selects", to: "/forms/selects" },
      { title: "Text Fields", to: "/forms/textFields" },
      { title: "Editors", to: "/forms/editors" },
      { title: "Formik", to: "/forms/formik" },
    ],
  },
  {
    icon: <FormatListBulletedOutlinedIcon />,
    title: "Tables",
    items: [
      { title: "Simple Tables", to: "/tables/simpleTables" },
      { title: "Advanced Tables", to: "/tables/advancedTables" },
      { title: "Data Grid", to: "/tables/dataGrid" },
    ],
  },
  {
    icon: <FavoriteBorderOutlinedIcon />,
    title: "Icons",
    items: [
      { title: "Material Icons", to: "/icons/materialIcons" },
      { title: "Feather Icons", to: "/icons/featherIcons" },
    ],
  },
  {
    icon: <MapOutlinedIcon />,
    title: "Maps",
    items: [
      { title: "Google Maps", to: "/maps/googleMaps" },
      { title: "Vector Maps", to: "/maps/vectorMaps" },
    ],
  },
];

export const materialAppItems = [
  {
    icon: <MenuBookOutlinedIcon />,
    title: "Documentation",
    items: [],
  },
  {
    icon: <AutoGraphOutlinedIcon />,
    title: "Changelog",
    items: [],
  },
];
