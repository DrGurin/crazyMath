(function(t){function s(s){for(var e,r,h=s[0],a=s[1],d=s[2],p=0,c=[];p<h.length;p++)r=h[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);l&&l(s);while(c.length)c.shift()();return n.push.apply(n,d||[]),i()}function i(){for(var t,s=0;s<n.length;s++){for(var i=n[s],e=!0,h=1;h<i.length;h++){var a=i[h];0!==o[a]&&(e=!1)}e&&(n.splice(s--,1),t=r(r.s=i[0]))}return t}var e={},o={app:0},n=[];function r(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,s,i){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)r.d(i,e,function(s){return t[s]}.bind(null,e));return i},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="";var h=window["webpackJsonp"]=window["webpackJsonp"]||[],a=h.push.bind(h);h.push=s,h=h.slice();for(var d=0;d<h.length;d++)s(h[d]);var l=a;n.push([0,"chunk-vendors"]),i()})({0:function(t,s,i){t.exports=i("56d7")},"034f":function(t,s,i){"use strict";var e=i("64a9"),o=i.n(e);o.a},"56d7":function(t,s,i){"use strict";i.r(s);var e=i("2b0e"),o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"content_up",on:{mousemove:t.getCoordinate,click:t.stopDrag}},[i("button",{staticClass:"pa button open-controlls open-controlls-fake",attrs:{id:"show-controlls"},on:{click:function(s){return t.showControlls()}}},[t._v(t._s(t.statusOfControls[0])+" controlls")]),t.showFirstTop?i("div",{staticClass:"top pa top_first",style:t.getPositionFirstTop},[i("p",{staticClass:"letter"},[t._v("A")])]):t._e(),t.showSecondTop?i("div",{staticClass:"top pa top_second",style:t.getPositionSecondTop},[i("p",{staticClass:"letter"},[t._v("B")])]):t._e(),t.showThirdTop?i("div",{staticClass:"top pa top_third",style:t.getPositionThirdTop},[i("p",{staticClass:"letter"},[t._v("C")])]):t._e(),t.showStartTop?i("div",{staticClass:"top pa top_start",style:t.getPositionStartTop}):t._e(),t._l(t.dots,(function(t,s){return i("div",{key:s,staticClass:"it-dot pa",style:t})})),t.showFirstTop&&t.showSecondTop&&t.showThirdTop?i("div",{staticClass:"line pa line_first",class:[t.isTopChangable?"":"shadow"],style:t.getWidthFirst}):t._e(),t.showFirstTop&&t.showSecondTop&&t.showThirdTop?i("div",{staticClass:"line pa line_second",class:[t.isTopChangable?"":"shadow"],style:t.getWidthSecond}):t._e(),t.showFirstTop&&t.showSecondTop&&t.showThirdTop?i("div",{staticClass:"line pa line_third",class:[t.isTopChangable?"":"shadow"],style:t.getWidthThird}):t._e()],2),i("div",{staticClass:"content_down",class:[t.isControllsOpened?"content_down-show":"content_down-hide",""]},[i("button",{staticClass:"pa button open-controlls",attrs:{id:"show-controlls"},on:{click:function(s){return t.showControlls()}}},[t._v(t._s(t.statusOfControls[0])+" controlls")]),i("div",{staticClass:"data_status"},[i("p",{staticClass:"iterator"},[t._v("Quantity of iterations: "+t._s(t.dots.length))])]),i("div",{staticClass:"button_wrapper"},[i("div",{staticClass:"subwrapper set_tops"},[i("button",{staticClass:"button set_top set_top_first",attrs:{id:"setTopFirst"},on:{click:function(s){return t.setTopFirst()}}},[t._v("Set first top")]),i("button",{staticClass:"button set_top set_top_second",attrs:{id:"setTopSecond"},on:{click:function(s){return t.setSecondTop()}}},[t._v("Set second top")]),i("button",{staticClass:"button set_top set_top_third",attrs:{id:"setTopThird"},on:{click:function(s){return t.setThirdTop()}}},[t._v("Set third top")]),i("button",{staticClass:"button set_top set_top_start",attrs:{id:"setTopStart"},on:{click:function(s){return t.setStartTop()}}},[t._v("Set start top")]),i("br"),i("button",{staticClass:"button reset_top",on:{click:function(s){return t.resetTops()}}},[t._v("RESET")]),i("button",{staticClass:"button create_triangle",on:{click:function(s){return t.createTriangle()}}},[t._v("Create triangle")]),i("button",{staticClass:"button stop_interval",attrs:{id:"stopInterval"},on:{click:function(s){return t.startInterval()}}},[t._v("Start iteration")]),i("br"),i("button",{staticClass:"button stop_interval",attrs:{id:"stopInterval"},on:{click:function(s){return t.stopInterval()}}},[t._v("Stop iteration")]),i("br")])])])])},n=[],r=(i("3022"),{name:"app",data(){return{isTopChangable:!0,canSetCoordinate:!1,isControllsOpened:!1,statusOfControls:["Show"],showFirstTop:!1,dragableFirst:!1,showSecondTop:!1,dragableSecond:!1,showThirdTop:!1,dragableThird:!1,showStartTop:!1,dragableStart:!1,firstTop:0,firstLeft:0,secondTop:0,secondLeft:0,thirdTop:0,thirdLeft:0,lengthFirst:0,firstAngle:0,lengthSecond:0,secondAngle:0,lengthThird:0,thirdAngle:0,dots:[],newDot:null,newTop:0,newLeft:0}},methods:{showControlls(){this.isControllsOpened=!this.isControllsOpened,this.statusOfControls.splice(1,1),this.isControllsOpened?this.statusOfControls.unshift("Hide"):this.statusOfControls.unshift("Show")},randomTop(){let t=.5+3*Math.random();return Math.round(t)},setCoordinates(){let t=this.randomTop();1==t&&this.canSetCoordinate?(this.newTop=.5*(this.firstTop+this.newTop),this.newLeft=.5*(this.firstLeft+this.newLeft),this.newDot=`top: ${this.newTop}px; left: ${this.newLeft}px`,this.dots.push(this.newDot)):2==t&&this.canSetCoordinate?(this.newTop=.5*(this.secondTop+this.newTop),this.newLeft=.5*(this.secondLeft+this.newLeft),this.newDot=`top: ${this.newTop}px; left: ${this.newLeft}px`,this.dots.push(this.newDot)):3==t&&this.canSetCoordinate&&(this.newTop=.5*(this.thirdTop+this.newTop),this.newLeft=.5*(this.thirdLeft+this.newLeft),this.newDot=`top: ${this.newTop}px; left: ${this.newLeft}px`,this.dots.push(this.newDot))},stopDrag(t){1==this.dragableFirst?(this.dragableFirst=!1,this.dragableSecond=!1,this.dragableThird=!1,this.dragableStart=!1,this.firstTop=t.clientY,this.firstLeft=t.clientX):1==this.dragableSecond?(this.dragableFirst=!1,this.dragableSecond=!1,this.dragableThird=!1,this.dragableStart=!1,this.secondTop=t.clientY,this.secondLeft=t.clientX):1==this.dragableThird?(this.dragableFirst=!1,this.dragableSecond=!1,this.dragableThird=!1,this.dragableStart=!1,this.thirdTop=t.clientY,this.thirdLeft=t.clientX):1==this.dragableStart&&(this.dragableFirst=!1,this.dragableSecond=!1,this.dragableThird=!1,this.dragableStart=!1,this.newTop=t.clientY,this.newLeft=t.clientX)},getCoordinate(t){this.dragableFirst&&this.showFirstTop?(this.firstTop=t.clientY,this.firstLeft=t.clientX):this.dragableSecond&&this.showSecondTop?(this.secondTop=t.clientY,this.secondLeft=t.clientX):this.dragableThird&&this.showThirdTop?(this.thirdTop=t.clientY,this.thirdLeft=t.clientX):this.dragableStart&&this.showStartTop&&(this.newTop=t.clientY,this.newLeft=t.clientX)},setTopFirst(t){this.isTopChangable&&(this.showFirstTop=!0,this.dragableFirst=!0)},setSecondTop(t){this.isTopChangable&&(this.showSecondTop=!0,this.dragableSecond=!0)},setThirdTop(t){this.isTopChangable&&(this.showThirdTop=!0,this.dragableThird=!0)},setStartTop(t){this.canSetCoordinate||(this.showStartTop=!0,this.dragableStart=!0)},resetTops(){this.canSetCoordinate=!1,this.showFirstTop=!1,this.showSecondTop=!1,this.showThirdTop=!1,this.showStartTop=!1,this.dots=[],this.firstAngle=0,this.secondAngle=0,this.thirdAngle=0,this.lengthFirst=0,this.lengthSecond=0,this.lengthThird=0,this.isTopChangable=!0},createTriangle(){this.showFirstTop&&this.showSecondTop&&this.showThirdTop?(this.isTopChangable=!1,this.lengthFirst=Math.sqrt((this.firstTop-this.secondTop)*(this.firstTop-this.secondTop)+(this.firstLeft-this.secondLeft)*(this.firstLeft-this.secondLeft)),this.firstAngle=180*Math.atan2(this.secondTop-this.firstTop,this.secondLeft-this.firstLeft)/Math.PI,this.lengthSecond=Math.sqrt((this.secondTop-this.thirdTop)*(this.secondTop-this.thirdTop)+(this.secondLeft-this.thirdLeft)*(this.secondLeft-this.thirdLeft)),this.secondAngle=180*Math.atan2(this.thirdTop-this.secondTop,this.thirdLeft-this.secondLeft)/Math.PI,this.lengthThird=Math.sqrt((this.firstTop-this.thirdTop)*(this.firstTop-this.thirdTop)+(this.firstLeft-this.thirdLeft)*(this.firstLeft-this.thirdLeft)),this.thirdAngle=180*Math.atan2(this.firstTop-this.thirdTop,this.firstLeft-this.thirdLeft)/Math.PI):alert("Установите три вершины, для Вашего треугольника")},startInterval(){this.canSetCoordinate=!0,setInterval(this.setCoordinates,.1)},stopInterval(){this.canSetCoordinate=!1}},computed:{getPositionFirstTop(){return this.dragableFirst,`top:${this.firstTop}px;left:${this.firstLeft}px`},getPositionSecondTop(){return this.dragableSecond,`top:${this.secondTop}px;left:${this.secondLeft}px`},getPositionThirdTop(){return this.dragableThird,`top:${this.thirdTop}px;left:${this.thirdLeft}px`},getPositionStartTop(){return this.dragableStart,`top:${this.newTop}px;left:${this.newLeft}px`},getWidthFirst(){return`width: ${this.lengthFirst}px; top:${this.firstTop+3}px; left:${this.firstLeft+5}px; transform: rotate(${this.firstAngle}deg); transformOrigin: 0 0`},getWidthSecond(){return`width: ${this.lengthSecond}px; top:${this.secondTop+3}px; left:${this.secondLeft+5}px; transform: rotate(${this.secondAngle}deg); transformOrigin: 0 0`},getWidthThird(){return`width: ${this.lengthThird}px; top:${this.thirdTop+3}px; left:${this.thirdLeft+5}px; transform: rotate(${this.thirdAngle}deg); transformOrigin: 0 0`}}}),h=r,a=(i("034f"),i("2877")),d=Object(a["a"])(h,o,n,!1,null,null,null),l=d.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,s,i){}});
//# sourceMappingURL=app.557e9047.js.map