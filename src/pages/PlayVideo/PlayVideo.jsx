import React from 'react'
import '/src/pages/PlayVideo/PlayVideo.css'
import vid1   from '/src/assets/images/vid1.mp4'
import luffy  from '/src/assets/images/luffy.webp'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import SendIcon from '@mui/icons-material/Send';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

const PlayVideo = () => {
  return (
    <div className='play-video' style={{minHeight:"50%"}}>
        <video src={vid1} controls autoPlay muted></video>
        <h3>Best Youtube Channel to learn Web Development</h3>
        <div className="play-video-info">
          <p>1525 Views &bull; 2 days ago</p>
          <div>
            <span><ThumbUpIcon/>125</span>
            <span><ThumbDownIcon/>2</span>
            <span><SendIcon/>Share</span>
            <span><TurnedInIcon/>Save</span>
          </div>
        </div>
        <hr />
        <div className="publisher">
          <img src={luffy} alt="" />
          <div>
            <p>Nathan.dev</p>
            <span>1M Subscribers</span>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="vid-d">
          <p>Best Website Developer</p>
          <p>Subscribe Nate.dev to get the Best Website tutorials</p>
          <hr />
          <h4>130 Comments</h4>
          <div className="comment">
            <img src={luffy} alt="" />
            <div>
              <h3>Jack nigger <span>1 day ago</span></h3>
              <p>Source code link is shared in community post for all my coding videos exclusively for channel members</p>
              <div className="comment-act">
                <ThumbUpIcon/>
                <span>244</span>
                <ThumbDownIcon/>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={luffy} alt="" />
            <div>
              <h3>Jack nigger <span>1 day ago</span></h3>
              <p>Source code link is shared in community post for all my coding videos exclusively for channel members</p>
              <div className="comment-act">
                <ThumbUpIcon/>
                <span>244</span>
                <ThumbDownIcon/>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={luffy} alt="" />
            <div>
              <h3>Jack nigger <span>1 day ago</span></h3>
              <p>Source code link is shared in community post for all my coding videos exclusively for channel members</p>
              <div className="comment-act">
                <ThumbUpIcon/>
                <span>244</span>
                <ThumbDownIcon/>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={luffy} alt="" />
            <div>
              <h3>Jack nigger <span>1 day ago</span></h3>
              <p>Source code link is shared in community post for all my coding videos exclusively for channel members</p>
              <div className="comment-act">
                <ThumbUpIcon/>
                <span>244</span>
                <ThumbDownIcon/>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={luffy} alt="" />
            <div>
              <h3>Jack nigger <span>1 day ago</span></h3>
              <p>Source code link is shared in community post for all my coding videos exclusively for channel members</p>
              <div className="comment-act">
                <ThumbUpIcon/>
                <span>244</span>
                <ThumbDownIcon/>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={luffy} alt="" />
            <div>
              <h3>Jack nigger <span>1 day ago</span></h3>
              <p>Source code link is shared in community post for all my coding videos exclusively for channel members</p>
              <div className="comment-act">
                <ThumbUpIcon/>
                <span>244</span>
                <ThumbDownIcon/>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={luffy} alt="" />
            <div>
              <h3>Jack nigger <span>1 day ago</span></h3>
              <p>Source code link is shared in community post for all my coding videos exclusively for channel members</p>
              <div className="comment-act">
                <ThumbUpIcon/>
                <span>244</span>
                <ThumbDownIcon/>
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={luffy} alt="" />
            <div>
              <h3>Jack nigger <span>1 day ago</span></h3>
              <p>Source code link is shared in community post for all my coding videos exclusively for channel members</p>
              <div className="comment-act">
                <ThumbUpIcon/>
                <span>244</span>
                <ThumbDownIcon/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PlayVideo