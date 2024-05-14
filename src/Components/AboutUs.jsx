import "./AboutUs.css";
import developers from "../data/developers";

export default function AboutUs( ) {

    return (
        <>
        <h2 className="page-section-header">Meet The Devs</h2>
        <div id="dev-card-container">
            { developers.map( devObj => {
                return (
                    <div className="developer-profile-container">
                        <div className="dev-profile-photo">
                            <img src={ devObj.profileImage } alt="profile photo"/>
                        </div>
                        <div className="dev-profile-specs">
                            <h3 className="dev-name">{ devObj.name }</h3>
                            <p className="dev-location">{ devObj.location }</p>
                            <div className="dev-profiles-links">
                                <a href={ devObj.profiles.gitHub }><img className="github dev-profile-icon" src="assets/git.svg" alt="GitHub Icon"/></a>
                                <a href={ devObj.profiles.linkedIn }><img className="linkedin dev-profile-icon" src="assets/linked-1.png" alt="LinkedIn Icon"/></a>
                                <a href={ devObj.profiles.emailAddress }><img className="email dev-profile-icon" src="assets/index.svg" alt="Email Icon"/></a>
                            </div>
                            <p className="skills-description">{ devObj.skillsDescription }</p>
                        </div>
                    </div>
                )
            })}
         </div>
         <hr />
         <h2 className="page-section-header">How Our App Works</h2>
         <div id="app-functionality-info">
         </div>     
        </>
    )
}