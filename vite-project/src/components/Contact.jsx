import React from "react";

const Contact = ({email,phone,show}) => {
    return (
        <>
            {show && (
                <div>
                    <h3>Contacto</h3>
                    <p>Email: {email}</p>
                    <p>Teléfono: {phone}</p>
                </div>
            )}
        </>
    );
};
export default Contact;