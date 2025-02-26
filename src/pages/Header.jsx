import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import  HelpOutlineIcon   from "@mui/icons-material/Help";
import NotificationsIcon from "@mui/icons-material/Notifications";
import img1 from "/src/assets/images/youtubepre.png";
import Avatar from "@mui/material/Avatar";
import { Button, IconButton, Card, CardMedia, CardContent, Typography, Grid,Box,} from "@mui/material";

const Header = () => {
  return (
    <div
          className="headerContainer">  <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", backgroundColor: "#0F0F0F", position: "fixed", width: "100%", top: 0,height:"8%",left:"0px"}}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <img src={img1} alt="YouTube Logo" style={{ height: "40px", marginLeft: "10px" }} />
          <span style={{ color: "white", marginLeft: "10px", fontSize: "18px", fontWeight: "bold" }}>Premium</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
        </div>
          <div className="inputcontainer" style={{}}>
          <input
            type="text"
            placeholder="Search"
            style={{
              borderRadius: "30px",
              width: "610px",
              height: "38px",
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: "16px", 
              paddingLeft: "20px",
              backgroundColor: "#121212",
              color:"0F0F0F ",
              border: "2px solid #212121",
              outline: "none",
              
            }}
          />
<button style={{
  fontSize: "10px", // Increase this value to make the icon bigger
  width: "60px",
  height: "41px",
  background: "#222222",
  border: "none",
  outline: "none",
  borderTopRightRadius: "20px",
  borderBottomRightRadius: "20px",
  borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
  position:"relative",
  right:"62px",
  top:"3.8px",
  cursor: "pointer"

}}>
  <SearchIcon/>
</button>
          <IconButton style={{ position:"relative", backgroundColor: "#303030", borderRadius: "50%",right:"50px" }}>
            <MicIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginRight:"80px" }}>
        <Button style={{ borderRadius: "20px", backgroundColor: "black", color: "white" }}>
  +Create
</Button>

          <IconButton>
            <NotificationsIcon style={{ color: "white" }} />
          </IconButton>
          <Avatar style={{ marginLeft: "10px" }} /> 
        </div>
      </header>
</div>
  )
}

export default Header