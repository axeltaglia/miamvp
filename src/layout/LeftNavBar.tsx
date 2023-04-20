import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function LeftNavBar() {
  const navigate = useNavigate();
  return (
    <>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            MIA
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem key={"about"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} onClick={() => navigate("/home")} />
          </ListItem>

          <ListItem key={"about"}>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText
              primary={"About"}
              onClick={() => navigate("/about")}
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default LeftNavBar;
