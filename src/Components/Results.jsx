import "./Results.css";

export default function Results ( { results } ) {

    return (
        <>
            <div className="sort-dropdown">
                <h4>Search Results for "puppies"</h4>
                <select className="select-sort">
                    <option>Sort by</option>
                    <option value="date">Date</option>
                    <option value="views">Views</option>
                    <option value="popularity">Popularity</option>
                </select>
            </div>
            <div className="results-container">
            
            {results?.map((result) => {
                return (
                    <VideoListing result={result} key={result.id.videoId} />
                )})}

                <div className="result-video-preview">
                    <div className="result-video-thumbnail" >
                        <img src="assets/test-thumbnail.webp" alt="Video Thumbnail"/>
                    </div>
                    <div className="results-video-specs">
                        <h3 className="video-title">OMG! Did You Know About This Sample Video?!?</h3>
                        <div className="video-stats">
                            <div className="row stat-item">
                                <img src="assets/views.svg" alt="views icon"/>
                                <p className="views">561,200 Views</p>
                            </div>
                            <div className="row stat-item">
                                <img src="assets/user.svg" alt="account icon"/>
                                <p className="channel-name">The John Doe Show</p>
                            </div>
                            <div className="row stat-item">
                                <img src="assets/noun-calendar-2283216.svg" alt="upload date icon"/>
                                <p className="uplaod-date">Jan 1, 2000</p>
                            </div>
                        </div>
                        <p className="video-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in </p>
                    </div>
                </div>
            </div>
        </>
    )
}