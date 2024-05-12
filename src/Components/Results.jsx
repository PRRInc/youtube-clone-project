import "./Results.css";

export default function Results () {

    fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyByjYAM4SMo8Kq0kUB4dcILgvjxKEgVfsE&part=snippet&q=react%20tutorial&type=video")
    .then((response) => { 
        return response.json() })
    .then((res) => {

        let arr = res.items;

        arr.map( (videoObj) => {
            return (
                <div className="result-video-preview">
                    <div className="result-video-thumbnail" >
                        <img src="`${ videoObj.snippet.thumbnails.medium }`" alt="Video Thumbnail"/>
                    </div>
                    <div className="results-video-specs">
                        <h2 className="video-title">{ videoObj.snippet.channelTitle	 }</h2>
                        <div className="video-stats">
                            <p className="views">{ videoObj.snippet.channelId }Views</p>
                            <p className="channel-name">{ videoObj.snippet.channelTitle	}</p>
                            <p className="uplaod-date">{ videoObj.snippet.publishedAt }	</p>
                        </div>
                        <p className="video-description">{ videoObj.snippet.description }</p>
                    </div>
                </div>
            )
        })
    })
}