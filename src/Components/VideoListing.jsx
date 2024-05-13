import { Link } from 'react-router-dom'
import "./VideoListing.css";

export default function VideoListing({ result }) {
  return(
    <div className="result-video-preview">
      <div className="result-video-thumbnail" >
          <img src={ url(`${ snippet.thumbnails.medium }`) } alt="Video Thumbnail"/>
      </div>
      <div className="results-video-specs">
      <Link to={`/videos/${ result.id.videoId }`}><h3 className="video-title">{ result.snippet.title }</h3></Link>
          <div className="video-stats">
              <div className="row stat-item">
                  <img src="assets/views.svg" alt="views icon"/>
                  <p className="views">561,200 Views</p>
              </div>
              <div className="row stat-item">
                  <img src="assets/user.svg" alt="account icon"/>
                  <p className="channel-name">{ result.snippet.channelTitle }</p>
              </div>
              <div className="row stat-item">
                  <img src="assets/noun-calendar-2283216.svg" alt="upload date icon"/>
                  <p className="uplaod-date">{ result.snippet.publishedAt }</p>
              </div>
          </div>
          <p className="video-description">{ result.snippet.description }</p>
      </div>
  </div>
  )
}
