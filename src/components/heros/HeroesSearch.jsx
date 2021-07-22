import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import HerosComparisionDisplay from './HeroesComparisionDetails'

const HeroSearch = (props) => {

  const [herosList, setSearchedHeros] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [viewComparision, setViewComparision] = useState(false)

  const handleInputChange = async (e) => {
    const heroName = e.target.value
    const response = await fetch(
      `https://www.superheroapi.com/api.php/1476729849337335/search/${heroName}`
    );
    const data = await response.json();
    if (!data.results) {
      setSelectedHeroes([])
      setSearchedHeros([])
    } else {
      setSearchedHeros(data.results)
    }
    if(heroName){
      if(localStorage.getItem('heroHistory') && JSON.parse(localStorage.getItem('heroHistory')).length > 0){
        localStorage.setItem('heroHistory', JSON.stringify([...JSON.parse(localStorage.getItem('heroHistory')), {name: heroName, date: new Date()  }]))
      } else {
        localStorage.setItem('heroHistory', JSON.stringify([{name: heroName, date: new Date()  }]))
      }
    }
  }

  const handleCheck = (item) => {
    if (selectedHeroes.some(itm => item.id === itm.id)) {
      const removeHeroes = selectedHeroes.filter(itm => itm.id !== item.id)
      setSelectedHeroes(removeHeroes)
    } else {
      setSelectedHeroes([...selectedHeroes, item])
    }
  }

  const onClickViewComparision = () => {
    setViewComparision(true)
  }

  return (
    <>
      <div>
        <h1 className="header-title">{viewComparision ? 'Powerstats comparision' : 'SuperHeroes Search'}
            <button style={{ float: 'right' }} className="button" onClick={viewComparision ? () => setViewComparision(false) : () => props.history.push('/history')}> {viewComparision ? 'Home' : 'View History'} </button>
        </h1>
      </div>
      {!viewComparision ?
        <div style={{ textAlign: 'center', marginTop: '92px' }}>
          <input type="text" className="myInput" onChange={handleInputChange} placeholder="Search for heroes.." title="Type in a name" />
          {herosList.length > 0 && <h4 className="messageHeader"> Select Any two heroes for comparision  {selectedHeroes && selectedHeroes.length === 2 && <button className="button" onClick={onClickViewComparision}> View Comparision </button>}</h4>}
          <ul style={{ width: '55%', marginLeft: '291px' }} className="hero-ul">
            {herosList && herosList.map((item, key) => {
              const checkboxDisabled = selectedHeroes.length !== 2 ? false : !selectedHeroes.some(itm => item.id === itm.id);
              return (
                <li className="hero-l" key={key}>
                  <div>
                    <div className="box1">
                      <img alt='hero img' className="hero-image" src={item.image.url} />
                      <p className="heroName"><Link style={{textDecoration: 'none', color: 'black'}} to={`/details/${item.id}`}>{item.name}</Link></p>
                    </div>
                    <div className="box3" style={{ marginTop: '-44px', marginLeft: '241px' }}>
                      <input disabled={checkboxDisabled} type="checkbox" onChange={() => handleCheck(item)} />
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div> :
        <HerosComparisionDisplay selectedHeroes={selectedHeroes} />
      }
    </>
  );
};

export default withRouter(HeroSearch);