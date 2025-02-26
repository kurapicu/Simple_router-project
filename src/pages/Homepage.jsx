import React, { useState } from "react";
import {Link} from "react-router-dom";
import { Button, IconButton, Card, CardMedia, CardContent, Typography, Grid,Box,} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import  SettingsOutlinedIcon  from "@mui/icons-material/Settings";
import  FeedbackIcon  from "@mui/icons-material/Feedback";
import  HelpOutlineIcon   from "@mui/icons-material/Help";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import GamepadIcon from "@mui/icons-material/Gamepad";
import NewsPaperIcon from "@mui/icons-material/NewsPaper";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import MovieIcon from "@mui/icons-material/Movie";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import img1 from "/src/assets/images/youtubepre.png";
import pic1 from "/src/assets/images/24px1.svg";
import pic2 from "/src/assets/images/24px2.svg";
import pic3 from "/src/assets/images/24px3.svg";
import vid from "/src/assets/images/vid.mp4"
import luffy from "/src/assets/images/luffy.webp"
import { HelpOutline, PlusOneOutlined, ReportOutlined, SettingsOutlined } from "@mui/icons-material";

const categories = [
  "All", "Gaming", "Real Madrid CF", "Goalkeepers", "eFootball",
  "Premier League", "Dribbling", "Trailers", "Music", "Crunchyroll, LLC",
  "FIFA 20", "EA SPORTS FC™ 25", "Mixes", "Naruto", "PlayStation 4", "Live", "Web Development"
];


const Videos = [
  {
    title: "FIFA 16 | Man Utd vs. Tottenham - Premier League 2015/16 Full Match",
    thumbnail: "https://imgs.search.brave.com/w2HND3H2u2ORdvuYc96qSZUj_BxcJM2mKSEhQ2E_04I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzQxLzcxLzkz/LzM2MF9GXzc0MTcx/OTM5NF9DOUJQM1li/aVhTSjdXc3BTREx0/S2RZeFpLS1dsZjBK/ei5qcGc",
    views: "146K views",
    time: "2 days ago",
    channel: "YAERetros",
    duration: "1:45:32",
    video:"/src/assets/images/vid.mp4",
    channelpic:"/src/assets/images/luffy.webp"
  },
  {
    title: "Which Ultimate Can Destroy Planet Namek? - DRAGON BALL Moments",
    thumbnail: "https://imgs.search.brave.com/LjWstTQLLjSEUy3qxp_S4pSEDQuiik8D53XqmACn8RM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bGVuc2JhbGwteWVs/bG93LWFuZC1vcmFu/Z2UtbGlnaHRzLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA",
    views: "874K views",
    time: "3 months ago",
    channel: "RikudouFox",
    duration: "12:58",
    video:"/src/assets/images/vid.mp4",
        channelpic:"/src/assets/images/luffy.webp"
  },
  {
    title: "Top 4 Blue Lock Goals/Moments in Real Life Comparison",
    thumbnail: "https://imgs.search.brave.com/s2tI5morK2fJn3WWCMMCHD3kGWvEtuN9qbvBO7wJpKY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzQ2LzgyLzU3/LzM2MF9GXzk0Njgy/NTc1Nl9qZGR2Mk5h/cGN0d0JXamxuSWxZ/dGFkVngzeHVPQk4w/Ti5qcGc",
    views: "711K views",
    time: "1 month ago",
    channel: "ImjustEarth",
    duration: "5:32",
    video:"/src/assets/images/vid.mp4",
        channelpic:"/src/assets/images/luffy.webp"
  },
  {
    title: "Top 4 Blue Lock Goals/Moments in Real Life Comparison",
    thumbnail: "https://imgs.search.brave.com/Jx8eAt3b3FFc7T8qGmK4AjpohtGB8b4pA1TYkGAkfTQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzY1LzEzLzk0/LzM2MF9GXzk2NTEz/OTQwOV9JT21HVGVQ/Z2ZFVW44ek1YWnFw/YTlPRXRpRmJndkVC/TC5qcGc",
    views: "711K views",
    time: "1 month ago",
    channel: "ImjustEarth",
    duration: "5:32",
    video:"/src/assets/images/vid.mp4",
        channelpic:"/src/assets/images/luffy.webp"
  }
  ,
  {
    title: "Which Ultimate Can Destroy Planet Namek? - DRAGON BALL Moments",
    thumbnail: "https://imgs.search.brave.com/LjWstTQLLjSEUy3qxp_S4pSEDQuiik8D53XqmACn8RM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bGVuc2JhbGwteWVs/bG93LWFuZC1vcmFu/Z2UtbGlnaHRzLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA",
    views: "874K views",
    time: "3 months ago",
    channel: "RikudouFox",
    duration: "12:58",
    video:"/src/assets/images/vid.mp4",
        channelpic:"/src/assets/images/luffy.webp"
  }
  ,
  {
    title: "Which Ultimate Can Destroy Planet Namek? - DRAGON BALL Moments",
    thumbnail: "https://imgs.search.brave.com/LjWstTQLLjSEUy3qxp_S4pSEDQuiik8D53XqmACn8RM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bGVuc2JhbGwteWVs/bG93LWFuZC1vcmFu/Z2UtbGlnaHRzLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA",
    views: "874K views",
    time: "3 months ago",
    channel: "RikudouFox",
    duration: "12:58",
    video:"/src/assets/images/vid.mp4",
        channelpic:"/src/assets/images/luffy.webp"
  }
  ,
  {
    title: "Which Ultimate Can Destroy Planet Namek? - DRAGON BALL Moments",
    thumbnail: "https://imgs.search.brave.com/LjWstTQLLjSEUy3qxp_S4pSEDQuiik8D53XqmACn8RM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bGVuc2JhbGwteWVs/bG93LWFuZC1vcmFu/Z2UtbGlnaHRzLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA",
    views: "874K views",
    time: "3 months ago",
    channel: "RikudouFox",
    video:"/src/assets/images/vid.mp4",
        channelpic:"/src/assets/images/luffy.webp"
    
  }
  ,
  {
    title: "Which Ultimate Can Destroy Planet Namek? - DRAGON BALL Moments",
    thumbnail: "https://imgs.search.brave.com/LjWstTQLLjSEUy3qxp_S4pSEDQuiik8D53XqmACn8RM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bGVuc2JhbGwteWVs/bG93LWFuZC1vcmFu/Z2UtbGlnaHRzLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA",
    views: "874K views",
    time: "3 months ago",
    channel: "RikudouFox",
    duration: "12:58",
    video:"/src/assets/images/vid.mp4",
        channelpic:"/src/assets/images/luffy.webp"
  }
  ,
  {
    title: "Which Ultimate Can Destroy Planet Namek? - DRAGON BALL Moments",
    thumbnail: "https://imgs.search.brave.com/LjWstTQLLjSEUy3qxp_S4pSEDQuiik8D53XqmACn8RM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bGVuc2JhbGwteWVs/bG93LWFuZC1vcmFu/Z2UtbGlnaHRzLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA",
    views: "874K views",
    time: "3 months ago",
    channel: "RikudouFox",
    duration: "12:58",
    video:"/src/assets/images/vid.mp4",
        channelpic:"/src/assets/images/luffy.webp"
  }
  ,
  {
    title: "Which Ultimate Can Destroy Planet Namek? - DRAGON BALL Moments",
    thumbnail: "https://imgs.search.brave.com/LjWstTQLLjSEUy3qxp_S4pSEDQuiik8D53XqmACn8RM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bGVuc2JhbGwteWVs/bG93LWFuZC1vcmFu/Z2UtbGlnaHRzLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA",
    views: "874K views",
    time: "3 months ago",
    channel: "RikudouFox",
    duration: "12:58",
    video:"/src/assets/images/vid.mp4",
        channelpic:"/src/assets/images/luffy.webp"
  }
  ,
  {
    title: "Which Ultimate Can Destroy Planet Namek? - DRAGON BALL Moments",
    thumbnail: "https://imgs.search.brave.com/LjWstTQLLjSEUy3qxp_S4pSEDQuiik8D53XqmACn8RM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bGVuc2JhbGwteWVs/bG93LWFuZC1vcmFu/Z2UtbGlnaHRzLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA",
    views: "874K views",
    time: "3 months ago",
    channel: "RikudouFox",
    duration: "12:58",
    video:"/src/assets/images/vid.mp4",
        channelpic:"/src/assets/images/luffy.webp"
  }
  ,
  {
    title: "Which Ultimate Can Destroy Planet Namek? - DRAGON BALL Moments",
    thumbnail: "https://imgs.search.brave.com/LjWstTQLLjSEUy3qxp_S4pSEDQuiik8D53XqmACn8RM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bGVuc2JhbGwteWVs/bG93LWFuZC1vcmFu/Z2UtbGlnaHRzLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA",
    views: "874K views",
    time: "3 months ago",
    channel: "RikudouFox",
    duration: "12:58",
    video:"/src/assets/images/vid.mp4"
  }
];


const Homepage = () => {

  return (
    <div
      className="Container"
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
      }}
    >
      <div
        className="leftwrapper"
        style={{ width: "16%", backgroundColor: "#0F0F0F", position: "fixed", height: "100vh", overflowY: "auto", top: "60px", scrollbarWidth: "thin", scrollbarColor: "#555 #0F0F0F" , overflowX:"hidden"}}
      ><div style={{padding: "20px", display: "flex", flexDirection: "column", gap: "10px",}}>
         <Button style={{ color: "white", gap:"20px",justifyContent: "flex-start", cursor:" pointer" }}><HomeIcon /> Home</Button>
          <Button style={{ color: "white", gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><MovieIcon /> Shorts</Button>
          <Button style={{ color: "white", gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><SubscriptionsIcon /> Subscriptions</Button>
          <Button style={{ color: "white", gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><MusicNoteIcon /> YouTube Music</Button>
          <hr style={{ border: "1px solid #303030", width: "100%" }} />
          <Button style={{ color: "white",justifyContent: "space-between" , cursor:" pointer"}}>Me <ExpandMoreIcon/></Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><HistoryIcon /> History</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><PlaylistPlayIcon /> Playlists</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><VideoLibraryIcon /> Your videos</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><WatchLaterIcon /> Watch Later</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><ThumbUpIcon /> Liked videos</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><FileDownloadIcon /> Downloads</Button>
          <hr style={{ border: "1px solid #303030", width: "100%" }} />
          <Button style={{ color: "white",gap:"20px",paddingRight:"90px", cursor:" pointer"}}>Subscriptions</Button>
          <Button style={{ color: "white",gap:"20px",paddingRight:"70px", cursor:" pointer"}}><Avatar style={{height:"26px",width:"26px"}} />dingdong</Button>
          <Button style={{ color: "white",gap:"20px",paddingRight:"70px", cursor:" pointer"}}><Avatar style={{height:"26px",width:"26px"}} />dingdong</Button>
          <Button style={{ color: "white",gap:"20px",paddingRight:"70px", cursor:" pointer"}}><Avatar style={{height:"26px",width:"26px"}} />dingdong</Button>
          <Button style={{ color: "white",gap:"20px",paddingRight:"70px", cursor:" pointer"}}><Avatar style={{height:"26px",width:"26px"}} />dingdong</Button>
          <Button style={{ color: "white",gap:"20px",paddingRight:"70px", cursor:" pointer"}}><Avatar style={{height:"26px",width:"26px"}} />dingdong</Button>
          <Button style={{ color: "white",gap:"10px",paddingRight:"70px", cursor:" pointer"}}><ExpandMoreIcon/>Show more</Button>
          <hr style={{ border: "1px solid #303030", width: "100%" }} />
          <Button style={{ color: "white",gap:"20px",paddingRight:"140px", cursor:" pointer"}}>Explore</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><WhatshotIcon />Trending</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><MusicNoteIcon />Music</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><GamepadIcon/>Gaming</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><NewsPaperIcon/>News</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><WhatshotIcon />Sports</Button>
          <hr style={{ border: "1px solid #303030", width: "100%" }} />
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}>More from Youtube</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><img src={pic1} alt="YouTube Logo" style={{ height: "20px", marginLeft: "10px" }} />Youtube kids</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><img src={pic2} alt="YouTube Logo" style={{ height: "20px", marginLeft: "10px" }} />Youtube music</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><img src={pic3} alt="YouTube Logo" style={{ height: "20px", marginLeft: "10px" }} />Youtube studio</Button>
          <hr style={{ border: "1px solid #303030", width: "100%" }} />
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><SettingsOutlined/>Settings</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><ReportOutlined/>Report history</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><HelpOutlineIcon/>Help</Button>
          <Button style={{ color: "white",gap:"20px",justifyContent: "flex-start", cursor:" pointer"}}><FeedbackIcon/>Send feedback</Button>
          <hr style={{ border: "1px solid #303030", width: "100%" }} />
          <div style={{width:"30px",fontSize:"14px",lineHeight:""}}>
            <p>AboutPressCopyrightContact usCreatorAdvertiseDevelopers</p>
            <p>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
          </div>

 </div></div>
      <div
        className="wrapper"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0F0F0F",
        }}
      >
        <div
          className="headerContainer">  <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", backgroundColor: "#0F0F0F", position: "fixed", width: "100%", top: 0,height:"8%"}}>
                      <style>
            {`::-webkit-scrollbar { width: 6px; }
              ::-webkit-scrollbar-thumb { background: #555; border-radius: 10px; }
              ::-webkit-scrollbar-track { background: #202020; }
              body { overflow: hidden; }`}
          </style>
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
<main style={{ padding: "20px", backgroundColor: "#0F0F0F", marginLeft: "15%", marginTop: "4%", height: "75vh", overflowY: "auto" }}>
<Button><Box
      sx={{
        display: "flex", 
        overflowX: "auto", 
        overflowY: "hidden", 
        whiteSpace: "nowrap", 
        // background: "#181818",
        padding: "10px 0",
        maxWidth: "100vw"
      }}
    >
                            <style>
            {`::-webkit-scrollbar { width: 6px; height:0px }
              ::-webkit-scrollbar-thumb { background: #555; border-radius: 10px; }
              ::-webkit-scrollbar-track { background: #202020; }
              body { overflowX: hidden; }`}
          </style>
      {categories.map((category, index) => (
        <Button
          key={index}
          sx={{
            marginX: "5px", 
            padding: "5px 15px", 
            borderRadius: "20px",
            background: index === 0 ? "#fff" : "#222", 
            color: index === 0 ? "#000" : "#fff",
            textTransform: "none", 
            fontSize: "14px", 
            fontWeight: "bold",
            flexShrink: 0 
          }}
        >
          {category}
        </Button>
      ))}
    </Box></Button>
<Grid container spacing={2} sx={{ padding: "10px" }}>
      {Videos.map((video, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Link to={"/welcome"}>
          <Box
            sx={{
            //   background: "#222",
              borderRadius: "8px",
              overflow: "hidden",
              padding: "10px",
              position: "relative",
            }}
          >
            <Box sx={{ position: "relative", borderRadius: "8px", overflow: "hidden", height: "150px" }}>
                            {<img
                src={video.thumbnail}
                alt={video.title}
                style={{ width: "100%", borderRadius: "8px",}}
              />}
              {/* {<video src={video.video} style={{ width:"100%",}}/>} */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "8px",
                  right: "8px",
                  background: "rgba(0, 0, 0, 0.8)",
                  color: "#fff",
                  padding: "3px 6px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  borderRadius: "4px",
                }}
              >
                {video.duration}
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
             <img
                src={video.thumbnail}
                alt={video.channel}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" sx={{ fontSize: "12px", fontWeight: "bold",color:"white" }}>
                  {video.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#aaa" }}>
                  {video.channel}
                </Typography>
                <Typography variant="body2" sx={{ color: "#aaa" }}>
                  {video.views} • {video.time}
                </Typography>
              </Box>
              <MoreVertIcon sx={{ color: "#aaa", cursor: "pointer" }} />
            </Box>
          </Box>
          </Link>
        </Grid>
      ))}
    </Grid>
</main>


      </div>
    </div>
  );
};

export default Homepage;
