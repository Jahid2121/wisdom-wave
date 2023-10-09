import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Team = () => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        fetch('/team.json')
            .then(res => res.json())
            .then(data => setTeamData(data));
    }, []);

    return (
        <div>
            <h2 className="text-3xl text-custom-Pink">Meet Our Team</h2>
            <Marquee gradientWidth={100}  speed={600}>
                {teamData.map(member => (
                   <div className="relative inline-block " key={member.id}>
                    <img
                        className="w-1/12  h-1/5"
                        src={member.image}
                        alt={member.name}
                        title={`${member.name} - ${member.role}`}
                    />
                    <h2 className="absolute">{member.name} </h2>
                   
                   </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Team;


