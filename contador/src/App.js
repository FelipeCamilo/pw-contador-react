import './App.css';

import React from 'react'

import Contador from './components/contador'
import Card from './components/Card';

export default () => (

  <div className="App" >
    <h1>Contador</h1>

    <div className="Cards">

      <Card titulo="Contador componentizado" color="#0d3024">
        <Contador numeroInicial={10} /> 
      </Card>

    </div>
  </div>
);
