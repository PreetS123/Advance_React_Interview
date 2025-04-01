import React, {useEffect} from 'react';


const callback=()=>{
    if(navigator.onLine){
        window.alert("Yup! you are back");
    }else{
        window.alert("Opps! lost your internet connection");
    }
}
const useOnlineNotification = () => {

    useEffect(()=>{
          window.addEventListener("online",callback);
          window.addEventListener("offline",callback);

          return()=>{
            window.removeEventListener("online",callback);
            window.removeEventListener("offline",callback);
          }
    },[])

  return null;
}

export default useOnlineNotification;