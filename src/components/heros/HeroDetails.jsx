import React, { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";

const HeroDetails = (props) => {
  const [hero, setHero] = useState();
  const match = useParams();

  useEffect(() => {
    const fetchHeroData = async () => {
      const response = await fetch(
        `https://www.superheroapi.com/api.php/1476729849337335/${match.id}/`
      );
      const data = await response.json();
      setHero(data);
    };
    fetchHeroData();
  }, [match.id]);

  return (
    <>
      <h1 className="header-title">
        SuperHeroes Info
      <button style={{ float: 'right' }} className="button" onClick={() => props.history.push('/')}> Home</button>
      </h1>
      {hero && <div className="hero-details">
        <img src={hero.image.url} alt={hero.name} />
        <div className="hero-card-info">
          <h2>{hero.name}</h2>
          <div className="primary-title">
            <p>Publisher:</p>
            <p>{hero.biography.publisher}</p>
          </div>
          <div className="primary-title">
            <p>Alignment:</p>
            <p>{hero.biography.alignment}</p>
          </div>
          <div className="primary-title">
            <p>Alignment: </p>
            <p>{hero.biography.alignment}</p>
          </div>
          <div className="primary-title">
            <p>Race: </p>
            <p>{hero.appearance.race}</p>
          </div>
          <div className="primary-title">
            <p>Gender: </p>
            <p>{hero.appearance.gender}</p>
          </div>
          <div className="primary-title">
            <p>Works: </p>
            <p>{hero.work.occupation}</p>
          </div>
          <div className="hero-powers">
            {Object.entries(hero.powerstats).map((key) => (
              <p key={key[0]}>
                {key[0].charAt(0).toUpperCase() + key[0].slice(1)}: {key[1]}
              </p>
            ))}
          </div>
        </div>
      </div>}
    </>
  );
};

export default withRouter(HeroDetails);
