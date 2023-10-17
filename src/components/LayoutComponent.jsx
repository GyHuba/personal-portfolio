import ContactComponent from "./ContactComponent";
import HeaderComponent from "./HeaderComponent";
import LandingPageComponent from "./LandingPageComponent";
import ProjectComponent from "./ProjectsComponent";
import SkillsComponent from "./SkillsComponent";


export default function LayoutComponent(){

    return(
        <>
        <HeaderComponent />
        <LandingPageComponent />
        <ProjectComponent />
        <SkillsComponent />
        <ContactComponent />
        </>
    )
}