import React from 'react';

const Member = ({member}) => {
    const {image, name, role, bio} = member;
    return (
        <div className="relative mr-4 bg-custom-Pink-light w-96" >
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={image} alt="Shoes" className="rounded-xl w-[690px]   h-[280px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p className='font-bold text-2xl'>{role}</p>
  </div>
</div>
       
       </div>
    );
};

export default Member;


// <img
//             className=""
//             src={image}
//             alt={name}
//             title={`${name} - ${role}`}
//         />
//         <h2 className="absolute shadow-xl text-3xl">{name} </h2>