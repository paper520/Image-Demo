(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{35:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this.$createElement;return(this._self._c||e)("ui-demos",{attrs:{url:"Candlestick/simple"}},[this._v("Candlestick Simple")])};l._withStripped=!0;var i=n(22),o=n(21),g=n.n(o),s={components:{uiDemos:i.a},mounted(){let e=g()("<canvas>非常抱歉，您的浏览器不支持canvas!</canvas>").attr({width:700,height:500}).appendTo("#demo").painter(),t=["2017-10-24","2017-10-25","2017-10-26","2017-10-27"],n=[[20,30,10,35],[40,35,30,55],[33,38,33,40],[40,42,32,42]],l=[60,50,40,30,20,10,0];e.beginPath().moveTo(50,450).lineTo(700,450).stroke().beginPath().moveTo(50,10).lineTo(50,460).stroke(),e.config({textAlign:"center",textBaseline:"top","font-size":12});for(let n=0;n<t.length;n++)e.fillRect(50+650/t.length*(n+1)-2,450,2,10).fillText(t[n],50+650/(2*t.length)*(2*n+1),460);e.config({textAlign:"right",textBaseline:"middle"});for(let t=0;t<l.length;t++)e.config("fillStyle","#000").fillRect(40,9+440/(l.length-1)*t,10,2).fillText(l[t],30,9+440/(l.length-1)*t),t<l.length-1&&e.config("fillStyle","gray").beginPath().moveTo(50,10+440/(l.length-1)*t).lineTo(700,10+440/(l.length-1)*t).stroke();for(let l=0;l<n.length;l++)e.config("strokeStyle",n[l][0]>n[l][1]?"rgb(49, 70, 86)":"rgb(194, 53, 49)").config("lineWidth",650/n.length*.5).beginPath().moveTo(50+650/(2*t.length)*(2*l+1),450-440/60*n[l][0]).lineTo(50+650/(2*t.length)*(2*l+1),450-440/60*n[l][1]).stroke().config("lineWidth",2).beginPath().moveTo(50+650/(2*t.length)*(2*l+1),450-440/60*n[l][2]).lineTo(50+650/(2*t.length)*(2*l+1),450-440/60*n[l][3]).stroke()}},h=n(3),a=Object(h.a)(s,l,[],!1,null,null,null);a.options.__file="src/demos/Candlestick/simple.vue";t.default=a.exports}}]);