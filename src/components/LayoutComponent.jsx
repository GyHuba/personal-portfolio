import { useEffect } from "react";
import ContactComponent from "./ContactComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import LandingPageComponent from "./LandingPageComponent";
import ProjectComponent from "./ProjectsComponent";
import SkillsComponent from "./SkillsComponent";


export default function LayoutComponent(){

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
        })
    })

    useEffect(()=>{
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el)=>observer.observe(el))
    })



    return(
        <>
        <HeaderComponent />
        <LandingPageComponent />
        <ProjectComponent />
        <SkillsComponent />
        <ContactComponent />
        <FooterComponent />
        </>
    )
}