import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Projects from "./components/timeline"
import Treks from './components/blog'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar/>
				<div id="colorlib-main">
                    <Introduction/>
                    <About/>
                    <Projects/>
                    <Treks />
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
