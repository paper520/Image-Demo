(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{38:function(e,t,l){"use strict";l.r(t);var i=function(){var e=this.$createElement;return(this._self._c||e)("ui-demos",{attrs:{url:"Bar/simple"}},[this._v("Bar Simple")])};i._withStripped=!0;var n=l(22),o=l(21),a=l.n(o),r={components:{uiDemos:n.a},mounted(){let e=a()("<canvas>非常抱歉，您的浏览器不支持canvas!</canvas>").attr({width:700,height:500}).appendTo("#demo").painter(),t=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],l=[120,200,150,80,70,110,130],i=[200,150,100,50,0];e.beginPath().moveTo(50,450).lineTo(700,450).stroke().beginPath().moveTo(50,10).lineTo(50,450).stroke();for(let l=0;l<t.length;l++)e.fillText(t[l],650/14*(2*l+1)+50,470).fillRect(650/7*(l+1)+50,450,2,10);e.config("textAlign","right");for(let t=0;t<i.length;t++)e.fillText(i[t],30,10+110*t).fillRect(40,9+110*t,10,2);e.config("fillStyle","#b34038");for(let t=0;t<l.length;t++)e.fillRect(650/7*t+50+10,450,650/7-20,-l[t]/200*440)}},s=l(3),c=Object(s.a)(r,i,[],!1,null,null,null);c.options.__file="src/demos/Bar/simple.vue";t.default=c.exports}}]);