import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const ShowSearchedHistory = (props) => {
  const [searchHistory, setSearchHistory] = useState(JSON.parse(localStorage.getItem('heroHistory')))

  const onClickClearHistory = () => {
    setSearchHistory(localStorage.removeItem('heroHistory'));
   }

  return (
    <div>
      <h1 className="header-title">
        Search History
        <button className="button" style={{ float: 'right' }} onClick={() => props.history.push('/')}> Home </button>
      </h1>
      <button className="clearButton" onClick={onClickClearHistory}> Clear History </button>
      <ul style={{ position: 'relative', bottom: '12px' }} className="hero-ul">
        {searchHistory && searchHistory.map((item, key) => {
            const today = new Date(item.date);
            const date = today.getFullYear() + '-' + today.getMonth() + 1 + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            return (
                <li style={{ width: '50%', textAlign: 'center', marginLeft: '266px' }} className="hero-l" key={key}>
                    <p style={{ float: 'left' }}>{date}</p>
                    <p>{item.name}</p>
                </li>

            )
        })
        }
      </ul>
    </div>
)
}


export default withRouter(ShowSearchedHistory);