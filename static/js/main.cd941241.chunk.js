(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),c=(a(18),a(2)),s=a(3),l=a(5),u=a(4),p=a(1),d=a(6),f=a(12),h=a(11),m=(a(19),function(e,t){return e.toString(16).toUpperCase().padStart(t,"0")}),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=16*this.props.index,t=this.props.data.slice(e,e+16),a=new Uint8Array(t),n=Array.from(a).map(function(e){return m(e,2)}),i=Array.from(a).map(function(e){return String.fromCharCode(e)}).join("").replace(/[\x00-\x20]/g,"\xa0"),o=m(e,8);return r.a.createElement("div",{className:"HexView-row",style:this.props.style},r.a.createElement("span",{className:"HexView-offset"},o),r.a.createElement("span",{className:"HexView-data"},n.join(" ")),r.a.createElement("span",{className:"HexView-text"},i))}}]),t}(n.PureComponent),b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;if(!this.props.data)return r.a.createElement("div",null);var t=this.props.data.byteLength,a=Math.ceil(t/16);return r.a.createElement(h.a,null,function(t){var n=t.height,i=t.width;return r.a.createElement(f.a,{className:"HexView",height:n,itemCount:a,itemSize:18,width:i,itemData:e.props.data},v)})}}]),t}(n.Component),O=a(7),g=a.n(O),j=(a(20),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={data:null},e.handleDragOver=e.handleDragOver.bind(Object(p.a)(e)),e.handleDrop=e.handleDrop.bind(Object(p.a)(e)),fetch(g.a).then(function(e){return e.blob()}).then(function(t){return e.setData(t)}),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"setData",value:function(e){var t=this,a=new FileReader;a.onloadend=function(){t.setState(function(e){return{data:a.result}})},a.readAsArrayBuffer(e)}},{key:"handleDrop",value:function(e){if(e.stopPropagation(),e.preventDefault(),e.dataTransfer.files.length>0){var t=e.dataTransfer.files;this.setData(t[0])}}},{key:"handleDragOver",value:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="link"}},{key:"render",value:function(){return r.a.createElement("div",{className:"App",onDrop:this.handleDrop,onDragOver:this.handleDragOver},r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),r.a.createElement("h2",null,"Shitty HexViewer")),r.a.createElement("div",{className:"App-content"},r.a.createElement(b,{data:this.state.data})))}}]),t}(n.Component));o.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.cd941241.chunk.js.map