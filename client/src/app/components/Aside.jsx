import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Settings from "@mui/icons-material/Settings";
import CookieIcon from "@mui/icons-material/Cookie";
import ContactMail from "@mui/icons-material/ContactMail";
import Home from "@mui/icons-material/Home";

const categories = [
  {
    id: "Home",
    icon: <Home />,
    path: "/",
  },
  {
    id: "Users",
    icon: <Settings />,

    path: "/app/users",
  },
  {
    id: "Messages",
    icon: <ContactMail />,
    path: "/app/messages",
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export function Aside(props) {
  const { ...other } = props;

  const { pathname } = useLocation();

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 15, color: "#fff" }}
        >
          <Link
            variant="p"
            component={RouterLink}
            sx={{
              color: "#fff",
              textDecoration: "none",
              "&:hover": { color: "#fff" },
            }}
            to="/app"
          >
            <Typography variant="span" component="span" sx={{ marginRight: 1 }}>
              Auth MERN stack with
            </Typography>
            <CookieIcon />
            'S
          </Link>
        </ListItem>

        {categories.map(({ id, icon, path }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem disablePadding>
              <ListItemButton
                component={NavLink}
                selected={
                  path.startsWith(pathname) && pathname !== "/app"
                    ? true
                    : false
                }
                sx={item}
                to={path}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{id}</ListItemText>
              </ListItemButton>
            </ListItem>
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
