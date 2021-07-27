import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import Header from "./components/header";
import Section from "./components/Section.jsx";
import {DataProvider} from './components/context'
class App extends React.Component{
  render(){
    return(
     <DataProvider>
         <div className="App">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
     </DataProvider>
    );
  }
}

export default App;
