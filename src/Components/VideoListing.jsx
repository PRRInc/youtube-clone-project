import {Link} from 'react-router-dom'
import "./VideoListing.css";

export default function VideoListing({ result }) {
  return(
    <article className="video">
      <h3 className="title1">
        <Link to={`/videos/${result.id.videoId}`}>{result.snippet.title}</Link>
      </h3>
      <p className="description">{result.snippet.description}</p>
      <aside className="details">
        {/* <p>
          <span>Listed Category:</span>
          {video.category}
        </p>
        <p>
          <span>Date Added:</span> {video.dateAdded}
        </p> */}
      </aside>
    </article>
  );}
