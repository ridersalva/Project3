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
import HomePage from './HomePage'
import AlertsPage from './AlertsPage'
import ProfilePage from './ProfilePage'
import VehiclePage from './VehiclesPage'
const TestPage = () => {
  return (
    <>
      <h1>TEST PAGE TODO SEGUIDO</h1>
      <hr />
      <HomePage />
      <hr />
      <AlertsPage />
      <hr />
      <ProfilePage />
      <hr />
      <VehiclePage />
      <hr />
      <hr />
    </>
  )
}
export default TestPage