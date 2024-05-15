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
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Unzc731iCUY?si=m6O1JL0_30IyBBs4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    </article>
  );}
