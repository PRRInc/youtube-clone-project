import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
// import { DeleteComment, getComment } from "../api/fetch"
import "./ShowPage.css";
// import ErrorMessage from "./errors/ErrorMessage.jsx";

export default function ShowPage({ initiateVideo, videoShow }) {

    const { id } = useParams();

    useEffect(() => {
        initiateVideo(id)
      }, []);
    
   
    const [showFullDescription, setShowFullDescription] = useState(false);
      
        const toggleDescription = () => {
          setShowFullDescription(!showFullDescription);
        };

      
    return (
        <>
            <div className="video-container">
                <div className="video-view">
                    <iframe id="ytplayer" type="text/html" width="640" height="360" src={`https://www.youtube.com/embed/${id}?autoplay=1`} frameborder="0"></iframe>
                </div>
                <div className="details-container">
                    <div className="top-row-details row">
                        <h3>{videoShow ? videoShow.snippet.title: "OMG! Did You Know About This Sample Video?!?"}</h3>
                        <div className="uploader-info row">
                            <p>{videoShow ? videoShow.snippet.channelTitle: "The John Doe Show"}</p>
                            <img src="assets/pexels-photo-762020.jpeg" alt="Channel Name" className="uploader-profile-photo" />
                        </div>
                    </div>
                    < div className="mid-row-details row">
                        <p>{videoShow ? videoShow.statistics.viewCount:"521,600"} Views</p>
                        <p>Uploaded {videoShow ? new Date(videoShow.snippet.publishedAt).toDateString() : "January 1, 2000"}</p>
                    </div>
                    {videoShow && videoShow.snippet && (
                    <div className="row bottom-row-details">
                        <p>
                            {showFullDescription ? videoShow.snippet.description : `${videoShow.snippet.description.slice(0, 100)}...`}
                            <span onClick={toggleDescription} style={{ cursor: "pointer", color: "blue" }} >
                            {showFullDescription ? " Show Less" : " Show More"}</span>
                        </p>
                        <img src="assets/like.svg" alt="Like Video Icon" className="like-icon row"/>
                    </div>
                    )}
                </div>
            </div>
            <hr />
            <h3>Commments</h3>
            <div className="comments-section">
                <form className="row">
                    <input type="text" name="commenter" placeholder="Name" className="name-input-box"/>
                    <input type="text" name="comment" placeholder="Add a comment..." className="comment-input-box"/>
                    <img src="assets/check.svg" alt="submit icon"/>
                </form>
                <hr />
                <ul className="comment-list">
                    <li className="comment-container">
                        <p className="comment-user">Jane Doe</p>
                        <p className="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nihil sit magni iure sint voluptas maiores animi, tempore temporibus est laboriosam culpa nisi. Ipsa eius, eos culpa qui facere laudantium!</p>
                    </li>
                </ul>
            </div>
        </>
    )
}