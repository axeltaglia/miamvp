import { Box, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import LeftNavBar from "../layout/LeftNavBar";
import TopNavBar from "../layout/TopNavBar";

function About() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <TopNavBar />
        <LeftNavBar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Page About content
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default About;
