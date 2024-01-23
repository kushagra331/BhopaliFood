import { useState } from "react";
const Section=({title,desc,isVisible1,setIsVisible1})=>{
    const [isVisible,setIsVisible]=useState();
    console.log("isVisible1=",isVisible1,"setIsVisible1=",setIsVisible1);
    return(
        <div className="bg-pink-100 w-3/4 my-0 mx-auto rounded-md">
            <h1>{title}</h1>
            {
            isVisible1 ? 
                <button onClick={()=>{
                    setIsVisible1(false);
                    // setIsVisible(false);
                }}>Hide</button> :
                <button onClick={()=>{
                    setIsVisible1(true)
                    // setIsVisible(true);
                }}>Show</button>
            }
            {isVisible1 && <p>{desc}</p>}
        </div>
    )
}
const Instamart=()=>{
    const [sectionConfig,setSectionConfig]=useState({
        insta:false,
        about:false
    });
    const [visibleSection,setVisibleSection]=useState();
    return (
        <div className=" bg-slate-500 w-full">
            <div className="my-auto w-3/4 mx-auto flex flex-col gap-2">
                <h1>Instamart Section</h1>
                <Section title="Instamart" desc="Instamart Desc" 
                isVisible1={visibleSection==="insta"}
                setIsVisible1={()=>setVisibleSection("insta")} />
                <Section title="About" desc="About Desc" 
                isVisible1={visibleSection==="about"}
                setIsVisible1={()=>setVisibleSection("about")} />
            </div>
        </div>
    );
}
export default Instamart;