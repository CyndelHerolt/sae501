import React, {useState, useEffect} from 'react';

const GlassesCard = () => {
    const [glassesData, setGlassesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/glasses')
            .then((response) => response.json())
            .then((data) => setGlassesData(data))
            .catch((error) => console.error('Erreur:', error));
    }, []);

    return (
        <div className={"glassesCards"}>
            {glassesData.map((glassesItem) => {
                return (
                    <div className={"glassesCard"} key={glassesItem.id}>
                        <div className={"glassesImg"}>
                            <img src={`/${glassesItem.img}`} alt="les lunettes"/>
                        </div>
                        <h3>{glassesItem.libelle}</h3>
                        <small>{glassesItem.ref}</small>
                        <p>{glassesItem.prix} €</p>
                    </div>
                );
            })}
        </div>
    );
}

export default GlassesCard;