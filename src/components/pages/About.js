import React from "react";
import Account from "../../auth/Account";

export const About = ({session}) => {
    return <Account key={session.user.id} session={session}/>
}

