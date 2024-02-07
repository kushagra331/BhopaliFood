import { useState } from "react";
// I'm trying to remove particular item from my cart
const Section=({title,desc,isVisible,toggleVisibility })=>{
    // const [isVisible,setIsVisible]=useState(false);
    return(
        <div className="bg-pink-100 w-3/4 my-0 mx-auto rounded-md">
            <h1>{title}</h1>
            {
               isVisible ?  
               <div>
                    {/*                   onClick={()=>setIsVisible(false)} */}
                    <button type="button" onClick={toggleVisibility}>Hide</button> 
                    <p>{desc}</p>
               </div>:
               <button type="button" onClick={toggleVisibility}>Show</button>
            }
            {/* { isVisible && <p>{desc}</p>} */}
        </div>
    )
}
const Instamart=()=>{
    const [visibleSection,setVisibleSection]=useState("about");
    const toggleVisibility  = (section) => {debugger;
        setVisibleSection(section === visibleSection ? null : section);
    };
    return (
        <div className=" bg-slate-500 w-full">
            <div className="my-auto w-3/4 mx-auto flex flex-col gap-2">
                <h1>Instamart Section</h1>
                <Section title={"Instamart"} desc={"Instamart Desc..." }
                isVisible={visibleSection==="instamart"}
                // setIsVisible={ ()=> setVisibleSection("instamart") }
                toggleVisibility={() => toggleVisibility ("instamart")}
                 />
                <Section title={"About"} desc={"About Desc..." } 
                isVisible={visibleSection==="about"}
                // setIsVisible={ ()=> setVisibleSection("about") } 
                toggleVisibility={() => toggleVisibility ("about")}
                />
            </div>
        </div>
    );
}
export default Instamart;