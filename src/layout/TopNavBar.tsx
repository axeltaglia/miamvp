import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar"
import * as React from "react"
import {Typography} from "@mui/material"
import Button from "@mui/material/Button"
import {useAuth} from "../contexts/AuthContext/AuthContext"
import {useNavigate} from "react-router-dom"

function TopNavBar() {
    const {signOut} = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        signOut()
        navigate('/home')
    }

    return <AppBar position="fixed" sx={{ width: `calc(100% - 240px)`, ml: `240px` }}>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Title
            </Typography>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
    </AppBar>
}

export default TopNavBar

