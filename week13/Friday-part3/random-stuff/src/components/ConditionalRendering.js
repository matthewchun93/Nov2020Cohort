import React, {useState, useEffect} from "react";

const ConditionalRendering = () => {

  const [isLoaded, setIsLoaded] = useState(false); //has our data loaded 

  useEffect(() => {
    
    setTimeout(()=>{
        // represents a long api call
        setIsLoaded(true);

    }, 3000)

  }, [])

  if(!isLoaded){
    return <> Data is loading</>
  }
  else{
    return <>This is our main view</>
  }
};

export default ConditionalRendering;
