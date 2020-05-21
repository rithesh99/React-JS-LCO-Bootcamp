import React, { useState } from "react"

import Context from "./context"


const Provider = props => {
    const [mission, setMission] = useState({
        mname : "Go to Russia",
        agent : "007",
        accept : "Not accepted",
    });
    return(
        <Context.Provider
        value={{
            data: mission,
            isMissionAccepted: () => {
                setMission({...mission, accept: "ACCEPTED"})
            }
        }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default Provider;