import React from 'react'

const Score = ({ scores }) => {
  return(
   <>
      {scores.map(obj => {
        return (
        <div key={Math.random()*1000}>
        <h4>{obj.date}</h4>
        <h5>Score: {obj.score}</h5>
        </div>
        ) 
      })}
   </>
  )
}

export default Score