import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import Header from './app/Components/Header/Header';
import Login from './app/Components/Login/Login';

function App() {
  return (
    <Container fluid>
      <Header userName={'Sonu Kumar'} isLoggedIn ={true}/>
      <Login />
    </Container>
  );
}

export default App;
