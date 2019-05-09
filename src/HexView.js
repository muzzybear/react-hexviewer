import React, { Component, PureComponent } from 'react';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import './HexView.css';

const hexify = (x,len) => x.toString(16).toUpperCase().padStart(len,"0");


class HexRow extends PureComponent {
  render() {
    let offset = this.props.index*16;

    let data = this.props.data.slice(offset, offset+16);
    let d = new Uint8Array(data);
    let h = Array.from(d).map(x => hexify(x,2));
    let t = Array.from(d).map(x => String.fromCharCode(x)).join("").replace(/[\x00-\x20]/g, "\u00a0");
    let offsetStr = hexify(offset, 8);
  
    return (
      <div className="HexView-row" style={this.props.style}>
        <span className="HexView-offset">{offsetStr}</span>
        <span className="HexView-data">{h.join(" ")}</span>
        <span className="HexView-text">{t}</span>
      </div>
    );  
  
  }
}

class HexView extends Component {

  render() {
    if (!this.props.data) {
      return (<div></div>);
    }

    const len = this.props.data.byteLength;
    const rows = Math.ceil(len/16);

    return (
      <AutoSizer>
        {({height, width}) => (
          <List
            className="HexView"
            height={height}
            itemCount={rows}
            itemSize={18}
            width={width}
            itemData={this.props.data}
          >
            {HexRow}
          </List>
        )}
      </AutoSizer>
    );
  }
}

export default HexView;
