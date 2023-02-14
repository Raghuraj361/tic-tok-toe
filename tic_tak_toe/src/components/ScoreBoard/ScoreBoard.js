import React, { useContext } from 'react';
import ContextApi from '../../ContextApi';
import './ScoreBoard.css';

function ScoreBoard() {

  const {scores} = useContext(ContextApi);
  const xPlaying = useContext(ContextApi);

    const { xScore, oScore } = scores;

  return (
    <div className='scoreboard'>
       <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>
  )
}

export default ScoreBoard;
