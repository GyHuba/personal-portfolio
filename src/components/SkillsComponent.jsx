import "../css/skills-component.css";


export default function SkillsComponent(){

    return(
        <>
        <div className="container content hidden">
        <div className="second-title" id="skills">Skills</div>
            <div className="skills-container">
                <img src="../public/skills.png" alt="" className="phone-mode"/>
                <img src="../public/skills2.png" alt="" className="wild-screen-mode"/>
                <img src="../public/skills1.png" alt="" className="wild-screen-mode"/>
            </div>
        </div>
        </>
    )
}