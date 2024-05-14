import VideoListing from "./VideoListing";
import { useParams } from "react-router-dom";
import "./Results.css";

export default function Results ( { results, search } ) {

    // let { etag } = useParams();
    // console.log(etag);

    return (
        <>
            <div className="sort-dropdown">
                <h4>Search Results for "{ search }"</h4>
                <select className="select-sort">
                    <option>Sort by</option>
                    <option value="date">Date</option>
                    <option value="views">Views</option>
                    <option value="popularity">Popularity</option>
                </select>
            </div>
            <div className="results-container">
            
            { results?.map((result) => {
                return (
                    <VideoListing result={result} key={result.id.videoId} />
                )}) }

            </div>
        </>
    )
}