(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{42:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this.$createElement;return(this._self._c||e)("ui-demos",{attrs:{url:"Bar/gradient"}},[this._v("渐变色")])};n._withStripped=!0;var i=o(22),l=o(21),a=o.n(l),r={components:{uiDemos:i.a},mounted(){let e=a()("<svg></svg>").attr({width:700,height:500}).appendTo("#demo").painter(),t=[220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220];e.config({textAlign:"right",fillStyle:"gray","font-size":12});for(let t=0;t<=5;t++)e.bind("<text>").appendTo().fillText(100*t,30,490-96*t).bind("<path>").appendTo().beginPath().moveTo(40,490-96*t).lineTo(700,490-96*t).stroke();let o=e.createLinearGradient(50,0,50,100).addColorStop(0,"#8bf").addColorStop(.3,"#83bff6").addColorStop(.7,"#188df0").addColorStop(1,"#188df0").value(),n=640/t.length;a()("g").data(t).enter("<g>").appendTo("svg").loop((t,i,l)=>{e.config("fillStyle","rgba(231, 231, 231,90)").bind("<rect>").appendTo(l).fillRect(50+i*n,10,.7*n,480);let r=t/500*480;e.config("fillStyle",o).bind("<rect>").appendTo(l).fillRect(50+i*n,490,.7*n,0),a.a.animation(t=>{e.bind(a()("rect",l[0])[1]).fillRect(50+i*n,490-r*t,.7*n,r*t)},1e3)})}},d=o(3),p=Object(d.a)(r,n,[],!1,null,null,null);p.options.__file="src/demos/Bar/gradient.vue";t.default=p.exports}}]);