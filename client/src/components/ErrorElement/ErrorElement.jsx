import React from 'react'
import German from './GERMAN2.png'
import { Image } from 'react-bootstrap'
import './Error.css'

 function ErrorElement() {
  return (
      <>
      <Image className="Ger" src = { German } alt = 'Iron Hack logo'/>
      <div className='rezo'>
          <h2>ERROR 404</h2>
      <h3>Reza a San German del Back-End </h3>
     
          </div>
      </>
  )
}
export default ErrorElement