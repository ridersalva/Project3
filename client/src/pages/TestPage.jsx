import React from 'react'
import GoogleLogin from 'react-google-login';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import {google} from 'googleapis'


function TestPage() {
  const respuestaGoogle = (respuesta) => {
    console.log(" R E S P U E S T A", respuesta);
    console.log("RESPUESTA PLUS", respuesta.profileObj)
    console.log("token obj", respuesta.tokenObj.access_token)

    
  }
  return (
    <div>TestPage



      <div className="App">
        <br></br>
        <GoogleLogin
          clientId="930571990047-vs1e552vvjjqiofgunmopech66hfhoi2.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={respuestaGoogle}
          onFailure={respuestaGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <ReactEmbeddedGoogleCalendar publicUrl="your-publicUrl" />
      </div>
    </div>
  )
}
export default TestPage