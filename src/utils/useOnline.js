import { useEffect, useState } from "react";
const useOnline = () =>{
    const [isOnline,setIsOnline]=useState(true);
    useEffect(()=>{
        const handleOnline=()=>{
            setIsOnline(true);
        }
        const handleOffline=()=>{
            setIsOnline(false);
        }
        //Adding event listner
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);
        return ()=>{
            //Removing the event listner so that cache will get removed once work is done
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
    },[]);
    return isOnline;
}
export default useOnline;
