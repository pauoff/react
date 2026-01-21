import React from 'react';
const Skill = ({array,show}) => {
    return(
        show &&(
            <ul>
                {array.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        )
    )
}
export default Skill;
