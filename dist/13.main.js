(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{24:function(e,a,n){"use strict";a.a={name:"编程符号",data:{name:"flare",children:[{name:"analytics"},{name:"animate",children:[{name:"Easing",value:17010},{name:"FunctionSequence",value:5842},{name:"interpolate"},{name:"ISchedulable",value:1041},{name:"Parallel",value:5176},{name:"Pause",value:449},{name:"Scheduler",value:5593},{name:"Sequence",value:5534},{name:"Transition",value:9201},{name:"Transitioner",value:19975},{name:"TransitionEvent",value:1116},{name:"Tween",value:6006}]},{name:"data"},{name:"display",children:[{name:"DirtySprite",value:8833},{name:"LineSprite",value:1732},{name:"RectSprite",value:3623},{name:"TextSprite",value:10066}]},{name:"flex"},{name:"physics",children:[{name:"DragForce",value:1082},{name:"GravityForce",value:1336},{name:"IForce",value:319},{name:"NBodyForce",value:10498},{name:"Particle",value:2822},{name:"Simulation",value:9983},{name:"Spring",value:2213},{name:"SpringForce",value:1681}]},{name:"query"},{name:"scale",children:[{name:"IScaleMap",value:2105},{name:"LinearScale",value:1316},{name:"LogScale",value:3151},{name:"OrdinalScale",value:3770},{name:"QuantileScale",value:2435},{name:"QuantitativeScale",value:4839},{name:"RootScale",value:1756},{name:"Scale",value:4268},{name:"ScaleType",value:1821},{name:"TimeScale",value:5833}]},{name:"util"},{name:"vis",children:[{name:"axis"},{name:"controls"},{name:"datas"},{name:"events"},{name:"legend"},{name:"operator"},{name:"Visualization",value:16540}]}]}}},46:function(e,a,n){"use strict";n.r(a);var l=function(){var e=this.$createElement;return(this._self._c||e)("ui-demos",{attrs:{url:"Tree/basic"}},[this._v("\n  From Left to Right Tree\n")])};l._withStripped=!0;var t=n(22),i=n(24),r=n(21),o=n.n(r),u={components:{uiDemos:t.a},mounted(){let e=o()('<svg><g class="node"></g><g class="text"></g></svg>').attr({width:700,height:500}).appendTo("#demo").painter();o.a.treeLayout({root:function(e){return e},id:function(e){return e.name},child:function(e,a){return e.children}}).config({type:"LR",width:700,height:500}).drawer(function(a){let n,l,t;for(n in a.node)l=a.node[n],e.config({fillStyle:"#fff",strokeStyle:"red"}).bind("<circle>").appendTo("g.node").strokeCircle(l.left,l.top,3),l.data.value||l.children&&!(l.children.length<=0)||e.config("fillStyle","gray"),e.bind("<circle>").appendTo("g.node").fillCircle(l.left,l.top,3),l.id!==a.root&&(t=a.node[l.pid],e.config("strokeStyle","#aaa").beginPath().moveTo(t.left+3,t.top),e.bind("<path>").appendTo("g.node").bezierCurveTo(t.left+50,t.top,l.left-50,l.top,l.left-3,l.top),e.stroke()),e.config({fillStyle:"#555","font-size":"9"}).bind("<text>").appendTo("g.text").fillText(l.id,l.left+5,l.top)})(i.a.data)}},c=n(3),m=Object(c.a)(u,l,[],!1,null,null,null);m.options.__file="src/demos/Tree/basic.vue";a.default=m.exports}}]);