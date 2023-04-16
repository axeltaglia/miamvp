import React from "react"
import {Box, Typography} from "@mui/material"
import TopNavBar from "../layout/TopNavBar"
import LeftNavBar from "../layout/LeftNavBar"
import Toolbar from "@mui/material/Toolbar"

function About() {
    return <>
        <Box sx={{ display: 'flex' }}>
            <TopNavBar />
            <LeftNavBar />
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                <Toolbar />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Page About content
                </Typography>
            </Box>
        </Box>
    </>
}

export default About