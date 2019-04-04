import React, {Component} from 'react';
import { fraLib } from '../jsonFiles/fraLibSkill';
import { language } from '../jsonFiles/languageSkill';
import { database } from '../jsonFiles/databaseSkill';
import { other } from '../jsonFiles/otherSkill';
import {Button} from 'react-bootstrap';
import BarList from './BarList.js';
import { Collapse } from 'react-bootstrap';
import { Well } from 'react-bootstrap';

class BarSection extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        open: false
      };
    }
  
    render() {
      return (
        <div>
          <Button bsStyle="primary" onClick={() => this.setState({ open: !this.state.open })}>
            Click HERE TO SEE MY SKILLS
          </Button>
          <Collapse in={this.state.open}>
            <div>
                <Well>
                  <BarList category="Languages" Skills = {language}/>
                  <BarList category="Frameworks/Libraries" Skills = {fraLib}/>
                  <BarList category="Database" Skills = {database}/>
                  <BarList category="Others" Skills = {other}/>
                </Well>
            </div>
          </Collapse>
        </div>
      );
    }
  }
  export default BarSection;