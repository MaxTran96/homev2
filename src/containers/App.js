import React, { Component } from 'react';

import './App.css';
import MyNavBar from '../components/navBarSection/MyNavBar';
import CodePanel from '../components/codePanelSection/CodePanel';
import Bio from '../components/bioSection/Bio';
// import {Button} from 'react-bootstrap';
// import BarList from '../components/barSection/BarList';
// import { fraLib } from '../components/jsonFiles/fraLibSkill';
// import { language } from '../components/jsonFiles/languageSkill';
// import { database } from '../components/jsonFiles/databaseSkill';
// import { other } from '../components/jsonFiles/otherSkill';
import ProjectList from '../components/projectSection/ProjectList.js';
import {Portfolio} from '../components/jsonFiles/Portfolio.js';
import Footer from '../components/footerSection/Footer.js';
import BarSection from '../components/barSection/BarSection.js';
import BlogList from '../components/blogSection/BlogList';
import {Blogfolio} from '../components/jsonFiles/Blogfolio.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavBar/>
        <header className="App-header home">
          
          <h1 className="App-title">Hello World! I'm a software engineer</h1>

          <CodePanel/>
          
        </header>
        <div id ="bio"><Bio/></div>
        {/* <Button className ="skill-button" bsStyle="primary" bsSize="large">Click to see my skills</Button> */}
        {/* <div>
          
          <BarList category="Languages" Skills = {language}/>
          <BarList category="Frameworks/Libraries" Skills = {fraLib}/>
          <BarList category="Database" Skills = {database}/>
          <BarList category="Others" Skills = {other}/>
        </div> */}
        <BarSection/>
        <h1>Portfolio</h1>
        <div id="work"><ProjectList Portfolio={Portfolio}/></div>
        
        <h1>Max's Journey</h1>
        <div id="blog"><BlogList Blogfolio={Blogfolio}></BlogList></div>
        <Footer/>
      </div>
    );
  }
}

export default App;
