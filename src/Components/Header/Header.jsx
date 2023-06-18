import React from 'react'
import './headerStyle.css';

export default function Header(props) {
  return (
    <div  className='header d-flex align-items-center justify-content-center' style={{height:props.height+'vh'}} >
      <div className="header-content  text-white ">
        <h1>{props.title}</h1>
        <p className='mt-2 w-50 m-auto'>{props.desc}</p>
      </div>
    </div>  )
}
