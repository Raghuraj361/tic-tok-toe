import React, { useContext } from 'react';
import "./Board.css";
import Box from '../Box/Box';
import ContextApi from '../../ContextApi';

function Board() {

  const {board, onClick} = useContext(ContextApi)
  

  return (
    <div className='board'>
          {
           board.map((value, idx) => {
            return <Box value={value} key={idx} onClick={() => value === null && onClick(idx)} />;
           })
          }
    </div>
  )
}

export default Board
