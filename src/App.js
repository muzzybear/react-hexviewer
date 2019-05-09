import React, { Component } from 'react';
import HexView from './HexView';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    fetch(logo).then(res => res.blob()).then(b => this.setData(b));
  }

  setData(data) {
    let fr = new FileReader();
    fr.onloadend = () => {
      this.setState(prev => ({ data: fr.result }));
    };
    fr.readAsArrayBuffer(data);
  }

  handleDrop(e) {
    e.stopPropagation();
    e.preventDefault();

    if (e.dataTransfer.files.length > 0) {
      const f = e.dataTransfer.files;
      this.setData(f[0]);
    }
  }

  handleDragOver(e) {    
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = "link";
  }

  render() {
    return (
      <div className="App"
        onDrop={this.handleDrop}
        onDragOver={this.handleDragOver}
        >
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Shitty HexViewer</h2>
        </div>
        <div className="App-content">
          <HexView data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
