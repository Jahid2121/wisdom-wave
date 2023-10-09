import React from 'react';

const Member = ({ member }) => {
    const { image, name, role } = member;
    return (
        <div className="relative mr-4 mb-4 bg-orange-200 rounded-lg overflow-hidden shadow-lg">
            <div className="w-[340px] h-[280px]">
                <img src={image} alt={name} className="w-full  h-full object-cover" />
            </div>
            <div className="px-6 py-4">
                <h2 className="text-2xl text-white font-bold text-custom-Pink-dark mb-2">{name}</h2>
                <p className="text-lg text-custom-Pink">{role}</p>
            </div>
        </div>
    );
};

export default Member;


