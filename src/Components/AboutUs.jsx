import "./AboutUs.css";
import developers from "../data/developers";

export default function AboutUs( ) {

    return (
        <>
        <h3 className="page-section-header">Meet The Devs</h3>
        <hr className="title-linebreak"/>
        <div id="dev-card-container">
            { developers.map( devObj => {
                return (
                    <div className="developer-profile-container" key={ devObj.id }>
                        <div className="dev-profile-specs">
                            <h3 className="dev-name">{ devObj.name }</h3>
                            <p className="dev-location">{ devObj.location }</p>
                            <div className="dev-profiles-links">
                                <a href={ devObj.profiles.gitHub }><img className="github dev-profile-icon" src="assets/git.svg" alt="GitHub Icon"/></a>
                                <a href={ devObj.profiles.linkedIn }><img className="linkedin dev-profile-icon" src="assets/linked-1.png" alt="LinkedIn Icon"/></a>
                                <a href="mailto:{ devObj.profiles.emailAddress }" target="_blank"><img className="email dev-profile-icon" src="assets/index.svg" alt="Email Icon"/></a>
                            </div>
                            <p className="skills-description">{ devObj.skillsDescription }</p>
                        </div>
                        <div className="dev-profile-photo-container">
                            <img src={ devObj.profileImage } alt="profile photo"/>
                        </div>
                    </div>
                )
            })}
         </div>
         <h3 className="page-section-header">How Our App Works</h3>
         <hr className="title-linebreak"/>
         <div id="app-functionality-info">
            <section className="feature-section">
                <h2 className="about-feature-title">Search Feature</h2>
                <p className="feature-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo harum minima enim magnam, cumque blanditiis dicta corporis. Eius ipsa aperiam assumenda, asperiores a nisi, sed doloremque alias saepe delectus qui.</p>
            </section>
            <section className="feature-section">
                <h2 className="about-feature-title">Results Feature</h2>
                <p className="feature-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo harum minima enim magnam, cumque blanditiis dicta corporis. Eius ipsa aperiam assumenda, asperiores a nisi, sed doloremque alias saepe delectus qui.</p>
            </section>
            <section className="feature-section">
                <h2 className="about-feature-title">Sidebar Navigation</h2>
                <p className="feature-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo harum minima enim magnam, cumque blanditiis dicta corporis. Eius ipsa aperiam assumenda, asperiores a nisi, sed doloremque alias saepe delectus qui.</p>
            </section>
            <section className="feature-section">
                <h2 className="about-feature-title">Video Viewing</h2>
                <p className="feature-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo harum minima enim magnam, cumque blanditiis dicta corporis. Eius ipsa aperiam assumenda, asperiores a nisi, sed doloremque alias saepe delectus qui.</p>
            </section>
         </div>     
        </>
    )
}