import React, {Component} from 'react';
import Header from '../Components/header'
import Body from '../Components/body'

class Home extends Component{
  render(){
    return(
      <div>
          <nav class="navbar navbar-light bg-light sticky-top">
          <a class="navbar-brand" href="https://github.com/vale314/Algoritmia/tree/master/Morse" target="_blank">
            <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
            Convertidor de Texto
          </a>
        </nav>
          <Header/>
          <Body/>
      </div>
    );
  }
}

export default Home;
