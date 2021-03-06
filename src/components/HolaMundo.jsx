import React from 'react';

const HolaMundo = () => {
    const Hello = 'Hola Mundo';
    const isTrue = true;
    return(
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso esecial de react</h2>
            {isTrue ? <h4>Esto es verdadero</h4> : <h5>Es falso</h5>}
            {isTrue && <h4>Soy verdadero</h4>}
        </div>
    );
}

export default HolaMundo;