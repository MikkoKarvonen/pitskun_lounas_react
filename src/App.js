import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu.js';

let dummy = {
  "courses": [
    {
      "title_fi": "Jauhelihakeittoa",
      "category": "Lounas",
      "properties": "G, M",
      "desc_fi": "",
      "desc_en": "",
      "desc_se": ""
    },
    {
      "title_fi": "Mustajuurisosekeittoa",
      "category": "Kasvislounas",
      "properties": "G, L",
      "desc_fi": "",
      "desc_en": "",
      "desc_se": ""
    },
    {
      "title_fi": "Mustajuurisosekeittoa, broileria ja fetasalaattia",
      "category": "Deli Salad Garden",
      "properties": "G, L",
      "desc_fi": "",
      "desc_en": "",
      "desc_se": ""
    },
    {
      "title_fi": "Yst\u00e4v\u00e4np\u00e4iv\u00e4leivosta",
      "category": "J\u00e4lkiruoka",
      "properties": "L",
      "desc_fi": "",
      "desc_en": "",
      "desc_se": ""
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Pitskun lounas</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Lounas</th>
              <th>Kasvisruoka</th>
              <th>Deli</th>
              <th>Jälkiruoka</th>
            </tr>
          </thead>
          <tbody>
            <Menu menu={dummy}/>
            <Menu menu={dummy}/>
            <Menu menu={dummy}/>
            <Menu menu={dummy}/>
            <Menu menu={dummy}/>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
