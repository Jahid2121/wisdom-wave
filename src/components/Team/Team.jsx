import { useEffect } from "react";


const Team = () => {

    useEffect(()=> {
        fetch('/team.json')
        .then(res => res.json())
        .then(data => console.log(data.data))
    },[])
    return (
        <div>
            <h2 className="text-3xl text-custom-Pink">Meet Our Team</h2>
            
        </div>
    );
};

export default Team;