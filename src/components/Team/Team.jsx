import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Member from "./Member";

const Team = () => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        fetch('/team.json')
            .then(res => res.json())
            .then(data => setTeamData(data));
    }, []);

    return (
        <div>
            <h2 className="text-5xl font-bold text-center mb-8 text-custom-Pink">Meet Our Team</h2>
            <Marquee   speed={150}>
                {teamData.map(member => (
                   <Member key={member.id} member={member}></Member>
                ))}
            </Marquee>
        </div>
    );
};

export default Team;


