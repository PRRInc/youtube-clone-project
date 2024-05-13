import "./ShowPage.css";

export default function ShowPage () {
    return (
        <>
            <div className="video-container">
                <div className="video-view">
                </div>
                <div className="details-container">
                    <div className="top-row-details row">
                        <h3>OMG! Did You Know About This Sample Video?!?</h3>
                        <div className="uploader-info row">
                            <p>The John Doe Show</p>
                            <img src="assets/pexels-photo-762020.jpeg" alt="Channel Name" className="uploader-profile-photo" />
                        </div>
                    </div>
                    < div className="mid-row-details row">
                        <p>521,600 Views</p>
                        <p>Uploaded January 1, 2000</p>
                    </div>
                    <div className="row bottom-row-details">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in </p>
                        <img src="assets/like.svg" alt="Like Video Icon" className="like-icon row"/>
                    </div>
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