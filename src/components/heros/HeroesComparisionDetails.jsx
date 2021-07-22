import React from "react";

const HerosComparisionDisplay = ({  selectedHeroes }) => {
  return (
    <div style={{ marginTop: '32px', marginLeft: '50px', textAlign:'center'}}>
      <section style={{ marginLeft: '280px'}} className="cards">
      {
        selectedHeroes.map (hero => {
            return (
                <div className="card">
                    <img src={hero.image.url} alt={hero.name} />
                    <div className="info">
                        <h1>{hero.name}</h1>
                        <p>Combat : {hero.powerstats.combat}</p>
                        <p>Intelligence : {hero.powerstats.intelligence}</p>
                        <p>Power: {hero.powerstats.power}</p>
                        <p>Speed: {hero.powerstats.speed}</p>
                        <p>Strength: {hero.powerstats.strength}</p>
                    </div>
                </div>
            )
        })
      }
      </section>
  </div>)
};

export default HerosComparisionDisplay;