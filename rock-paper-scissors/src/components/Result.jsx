import React from 'react';
import { useSelector } from "react-redux";


const Result = () => {
    const resultat = useSelector((state) => state.resultat);

    return (
        <div className='result'>
            RESULTADO: {resultat}
        </div>
    );
};

export default Result;