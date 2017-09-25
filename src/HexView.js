import React, { Component } from 'react';
import './HexView.css';

class HexView extends Component {
  constructor() {
    super();
    this.state = {
        offset: 0,
    };
  }

  renderRow(offset) {
    let hexify = (x,len) => x.toString(16).toUpperCase().padStart(len,"0");
    
    let data = this.props.data.slice(offset, offset+16);
    let d = new Uint8Array(data);
    let h = Array.from(d).map(x => hexify(x,2));
    let t = Array.from(d).map(x => String.fromCharCode(x)).join("").replace(/[\x00-\x20]/g, "\u00a0");
    let offsetStr = hexify(offset, 8);

    return (
        <div className="HexView-row" key={offset}>
          <span className="HexView-offset">{offsetStr}</span>
          <span className="HexView-data">{h.join(" ")}</span>
          <span className="HexView-text">{t}</span>
        </div>
      );
  }

  render() {
    let foo = null;
    if (this.props.data) {
      foo = [];
      let start = 0;
      let end = start+4096;
      const len = this.props.data.byteLength;
      for(let offset = start; offset < end && offset < len; offset += 16) {
        foo.push(this.renderRow(offset));
      }
    }
    return (
        <div className="HexView">
        {foo}
        </div>
    );
  }
}

export default HexView;
