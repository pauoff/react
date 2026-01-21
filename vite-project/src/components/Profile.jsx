import React from 'react';

const Profile = ({name, age, profession}) => {
    return (
        <div>
            <h2>Perfil</h2>
            <p><strong>Nombre:</strong> {name}</p>
            <p><strong>Edad:</strong> {age}</p>
            <p><strong>Profesión:</strong> {profession}</p>
        </div>
    );
};
export default Profile;
