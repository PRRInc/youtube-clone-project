import topVideoCategories from "../data/topvideocategories";
import "./Home.css";

export default function Home() {

    const API_KEY = import.meta.env.VITE_API_KEY
    let categorizedVideoArr = [];
    let categoryNumVals = Object.values(topVideoCategories);

    function getVideosByCatgeory(category){
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=${category}&key=${API_KEY}`)
        .then( (response) => response.json )
        .then( res => {
            categorizedVideoArr = res.item;
            return categorizedVideoArr})
    }
    
    // return (
    //     <> 
    //       <div className="category-container">
    //             <h3>Category</h3>
    //                 { categoryNumVals.map( val => {
    //                     getVideosByCatgeory(val).map( el =>
    //                         {
    //                             return ( 
    //                                 <div className="category-video-list">
    //                                     <div className="video-thumbnail">
    //                                         <div>
    //                                             <img src="{ result.snippet.thumbnails.small.url }" alt="video thumbnail"/>
    //                                         </div>
    //                                         <div className="category-video-card">
    //                                             <h4 className="category-video-title">{ el.snippet.title }</h4>
    //                                             <div className="details-container">
    //                                                 <p className="category-video-channel">{ el.snippet.channelTitle }</p>
    //                                                 <div className="category-video-channel">
    //                                                     <p className="category-video-views">521,600 Views</p>
    //                                                     <p className="category-video-date">{ el.snippet.publishedAt }</p>
    //                                                 </div> 
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             )
    //                         }
    //                     );
    //                     })
    //                 }
    //         </div>
    //     </>
    // )
}