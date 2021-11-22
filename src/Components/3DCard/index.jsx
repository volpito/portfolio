import React from 'react'
import './style.scss'

function index() {

  const cell=[];

  for(var value = 1; value <= 100; value++) {
    cell.push(value);
} 
  return (
    <>
    <div className="reflection-container ">
      {cell.map(uniCell => (
        <a className={`reflection-grid-cell reflection-grid-cell-${uniCell}`} href="/resume">
        </a>
      )
      )}

    <div className="reflection-content"></div>
    </div>

    </>

  )
}


export default index