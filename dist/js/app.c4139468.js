(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],u=0,h=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("b680"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-wrapper",attrs:{id:"app"}},[s("nav",{staticClass:"navbar is-fixed-top is-white",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-brand"},[s("a",{staticClass:"navbar-item",attrs:{href:"#"}},[s("img",{staticClass:"logo",attrs:{src:t.logo}}),t._m(0)])]),t._m(1)])]),s("router-view"),t._m(2)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"is-size-4 has-text-weight-bold has-super"},[t._v(" NoncerPro "),s("span",{staticClass:"superscript"},[t._v("API")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[s("div",{staticClass:"navbar-start"}),s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("hr"),s("div",{staticClass:"content has-text-centered"},[s("p",[s("a",{attrs:{target:"_blank",href:"https://github.com/NoncerPro/noncerpro-nimiq-cuda"}},[t._v("NVIDIA Miner Docs ")]),t._v(" | "),s("a",{attrs:{target:"_blank",href:"https://github.com/NoncerPro/noncerpro-nimiq-opencl"}},[t._v("AMD Miner Docs")]),t._v(" | "),s("a",{attrs:{target:"_blank",href:"https://discord.gg/DWDnJBy"}},[t._v("Discord Channel")])])])])])}],i=s("e347"),o=s.n(i),c={data:function(){return{logo:o.a}}},l=c,d=(s("5c0b"),s("2877")),u=Object(d["a"])(l,n,r,!1,null,null,null),h=u.exports,f=s("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var b=s("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"container"},[a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isConnected,expression:"!isConnected"}],staticClass:"main"},[a("div",{staticClass:"container"},[a("div",{staticClass:"has-text-centered"},[a("img",{attrs:{src:s("5892")}})]),a("div",{staticClass:"has-text-centered m-t-xl"},[a("code",[t._v(t._s(t.errorMessage))]),a("h1",{staticClass:"is-size-1 m-t-lg"},[t._v("Could not connect to the Miner API")]),a("p",[t._v("Please make sure that NoncerPro Miner is up and running")])])])])]),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isConnected,expression:"isConnected"}]},[a("section",{staticClass:"m-t-lg"},[a("div",{staticClass:"columns is-variable"},[a("div",{staticClass:"column"},[a("single-stat",{attrs:{name:"hashrate",text:"Hashrate",value:t.humanHashRate(t.vars.totalHashrate)}})],1),a("div",{staticClass:"column"},[a("single-stat",{attrs:{text:"Submitted Shares",name:"totalShares",value:t.vars.totalShares}})],1),a("div",{staticClass:"column"},[a("single-stat",{attrs:{text:"Active GPUs",name:"activeGpus",value:t.vars.activeGpus}})],1),a("div",{staticClass:"column"},[a("single-stat",{attrs:{text:"Invalid Shares",name:"invalidShares",value:t.vars.invalidShares}})],1)])]),a("section",{staticClass:"m-t-lg"},[a("div",{staticClass:"box",staticStyle:{height:"50vh"}},[a("div",{staticClass:"m-b-lg chart-top"},[a("h2",{staticClass:"title is-5"},[t._v("Hashrate")]),a("div",{staticClass:"actions"},[a("button",{staticClass:"button is-small is-rounded m-l-sm",class:[t.isActive(24)?"is-info":""],on:{click:function(e){t.activeSpan=24}}},[t._v("Last 24 hrs")]),a("button",{staticClass:"button is-small is-rounded m-l-sm",class:[t.isActive(12)?"is-info":""],on:{click:function(e){t.activeSpan=12}}},[t._v("Last 12 hrs")]),a("button",{staticClass:"button is-small is-rounded m-l-sm",class:[t.isActive(3)?"is-info":""],on:{click:function(e){t.activeSpan=3}}},[t._v("Last 3 hrs")]),a("button",{staticClass:"button is-small is-rounded m-l-sm",class:[t.isActive(1)?"is-info":""],on:{click:function(e){t.activeSpan=1}}},[t._v("Last 1 hr")])])]),t.chartData?a("line-chart",{staticStyle:{height:"80%"},attrs:{"chart-data":t.chartData,"gradient-colors":t.gradientColors,"gradient-stops":t.gradientStops,"extra-options":t.chartOptions}}):t._e()],1)]),a("section",{staticClass:"m-t-lg"},[a("div",{staticClass:"flex-2-right-left"},[a("h2",{staticClass:"title is-5 m-b-none"},[t._v("Miner Wallet:")]),a("span",{staticClass:"tag is-normal has-text-weight-bold",class:[t.vars.devMining?"is-info":"is-success"],domProps:{innerHTML:t._s(t.devMiningMessage)}})]),a("div",{staticClass:"box m-t-md"},[t._v(t._s(t.vars.wallet))])]),a("section",{staticClass:"m-t-lg"},[a("div",{staticClass:"columns is-6 is-variable"},[a("div",{staticClass:"column"},[a("h2",{staticClass:"is-size-6 has-text-weight-bold"},[t._v("Connected Pool:")]),a("div",{staticClass:"box m-t-md"},[t._v(t._s(t.vars.server))])]),a("div",{staticClass:"column"},[a("h2",{staticClass:"is-size-6 has-text-weight-bold"},[t._v("Device ID:")]),a("div",{staticClass:"box m-t-md"},[t._v(t._s(t.vars.deviceId))])]),a("div",{staticClass:"column"},[a("h2",{staticClass:"is-size-6 has-text-weight-bold"},[t._v("Device Name:")]),a("div",{staticClass:"box m-t-md"},[t._v(t._s(t.vars.deviceName))])])])]),t.vars.devices.length?a("section",{staticClass:"m-t-lg"},[a("h2",{staticClass:"title is-5"},[t._v("Per GPU Stats:")]),t._l(t.vars.devices,(function(e){return a("div",{key:e.gpuId,staticClass:"box m-b-md"},[a("div",{staticClass:"flex-2-right-left"},[a("span",[t._v("GPU #"+t._s(e.gpuId))]),a("span",{staticClass:"hashrate is-size-6 has-text-link is-family-secondary has-text-weight-bold",domProps:{innerHTML:t._s(t.humanHashRate(e.hashrate))}})])])}))],2):t._e()])])],1)])},p=[],m=(s("a4d3"),s("4de4"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("ade3")),g=(s("96cf"),s("1da1")),j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stat box p-sm"},[s("span",{staticClass:"text has-text-weight-semibold is-size-7 m-b-sm m-t-sm",domProps:{textContent:t._s(t.text)}}),s("p",{staticClass:"has-text-right"},[s("span",{staticClass:"hashrate is-size-5 has-text-link is-family-secondary has-text-weight-bold",domProps:{innerHTML:t._s(t.value)}})])])},C=[],y=(s("a9e3"),{props:{name:{required:!0},value:[String,Number],text:String},methods:{},mounted:function(){}}),x=y,w=Object(d["a"])(x,j,C,!1,null,null,null),_=w.exports,O=s("1fca"),k={name:"line-chart",extends:O["a"],mixins:[O["b"].reactiveProp],props:{extraOptions:Object,gradientColors:{type:Array,default:function(){return["rgba(72,72,176,0.2)","rgba(72,72,176,0.0)","rgba(119,52,169,0)"]},validator:function(t){return t.length>1}},gradientStops:{type:Array,default:function(){return[1,.4,0]},validator:function(t){return t.length>1}}},data:function(){return{ctx:null}},methods:{updateGradients:function(t){var e=this;if(t){var s=this.ctx||document.getElementById(this.chartId).getContext("2d"),a=s.createLinearGradient(0,230,0,50);this.gradientStops.forEach((function(t,s){a.addColorStop(t,e.gradientColors[s])})),t.datasets.forEach((function(t){t.backgroundColor||(t.backgroundColor=a)}))}}},mounted:function(){var t=this;this.$watch("chartData",(function(){t.updateGradients(t.chartData),t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}};function S(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function D(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?S(Object(s),!0).forEach((function(e){Object(m["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):S(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var P={default:"#344675",primary:"#42b883",info:"#a891f6",danger:"#fd5d93",orange:"#ff8a76",teal:"#00d6b4",primaryGradient:["rgba(76, 211, 150, 0.4)","rgba(53, 183, 125, 0)","rgba(119,52,169,0)"],purpleGradient:["rgba(226,217,255,0.4)","rgba(226,217,255,0.3)","rgba(226,217,255,0)"]},M={maintainAspectRatio:!1,legend:{display:!1},responsive:!0},z={fill:!0,borderColor:P.info,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:P.info,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:P.info,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4},I=D({},M,{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{offset:!0,gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e",autoSkip:!0}}],xAxes:[{type:"time",distribution:"series",time:{time:{displayFormats:{minute:"h:mm a"}}},gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e",autoSkip:!0,maxTicksLimit:12}}]}}),A=s("bc3a"),H=s.n(A);function E(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function G(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?E(Object(s),!0).forEach((function(e){Object(m["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):E(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var L={name:"home",data:function(){return{isConnected:!1,errorMessage:"",chartData:null,chartOptions:I,gradientColors:P.purpleGradient,gradientStops:[1,.8,0],interval:!1,interval2:!1,activeSpan:1,chartIntervalSec:300,hashrates:[],chartLabels:[],vars:{totalHashrate:0,wallet:"...",deviceId:"...",deviceName:"...",server:"....",devices:[{gpuId:1,hashrate:1e3}],devMining:!1},connected:!0,loading:!0}},components:{SingleStat:_,LineChart:k},created:function(){this.getDataFromApi(),this.interval=setInterval(this.getDataFromApi,3e3),this.saveData(),this.interval2=setInterval(this.saveData,6e4)},mounted:function(){},destroyed:function(){clearInterval(this.interval),clearInterval(this.interval2)},methods:{getDataFromApi:function(){var t=this;H.a.get("/api").then((function(e){t.vars=e.data,t.isConnected=!0})).catch((function(e){t.isConnected=!1,t.errorMessage=e}))},isActive:function(t){return this.activeSpan===t},updateData:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Dexie.totalHashRate.where("date").above(this.$moment().subtract(this.activeSpan,"hour").unix()).sortBy("date");case 2:e=t.sent,e=e.filter((function(t,e){return e%(3*s.activeSpan)==0})),this.chartLabels.length=0,this.hashrates.length=0,e.forEach((function(t){s.hashrates.unshift({x:new Date(1e3*t.date),y:t.hash_rate})})),this.chartData={datasets:[G({},z,{data:this.hashrates})]};case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),saveData:function(){var t=this.$moment().unix();this.$Dexie.totalHashRate.where("date").below(t-1440).delete(),this.$Dexie.totalHashRate.put({date:t,hash_rate:this.vars.totalHashrate}),this.updateData()},getFakeData:function(){this.isConnected=!0;var t=this.getRandomInt(2e3),e=this.getRandomInt(2e3),s=this.getRandomInt(2e3),a=t+e+s;this.vars={totalHashrate:a,totalShares:this.getRandomInt(100),invalidShares:this.getRandomInt(10),activeGpus:3,wallet:"LJKG976SDFAOIUSDF9G876SDFG",deviceId:"2",deviceName:"GHULU",server:"api.noncer.pro",devices:[{gpuId:1,hashrate:t},{gpuId:2,hashrate:e},{gpuId:3,hashrate:s}],devMining:Math.random()>.5}},getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))},makeTimeDots:function(){for(var t,e=this.chartIntervalSec/60,s=60*this.activeSpan/e,a=[],n=0;n<s+1;n++)t=this.$moment().subtract(n*e,"minute").unix(),a.push(60*Math.floor(t/60));return a}},computed:{devMiningMessage:function(){return this.vars.devMining?"Dev Mining&nbsp;&nbsp;&nbsp;ON":"Dev Mining&nbsp;&nbsp;&nbsp;OFF"}},watch:{activeSpan:function(t){this.chartIntervalSec=5*t*60,this.updateData()}}},N=L,R=(s("cccb"),Object(d["a"])(N,v,p,!1,null,null,null)),F=R.exports;a["a"].use(b["a"]);var $=[{path:"/",name:"home",component:F}],B=new b["a"]({routes:$}),T=B,U=s("2f62");a["a"].use(U["a"]);var q=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}}),W=s("74ce"),J=new W["a"]("noncerpro");J.version(1).stores({totalHashRate:"++id,date,hash_rate"});var K={install:function(t){t.prototype.$Dexie=J}},V=K;a["a"].use(V),a["a"].use(s("2ead")),a["a"].mixin({methods:{humanHashRate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,s=1e3;if(Math.abs(t)<s)return t+" h/s";var a=["Kh/s","Mh/s","Gh/s","Th/s","Ph/s","Eh/s","Zh/s","Yh/s"],n=-1;do{t/=s,++n}while(Math.abs(t)>=s&&n<a.length-1);return t.toFixed(e)+' <span class="is-size-7">'+a[n]+"</span>"}}}),a["a"].config.productionTip=!1,new a["a"]({router:T,store:q,render:function(t){return t(h)}}).$mount("#app")},5892:function(t,e,s){t.exports=s.p+"img/broken.446a60fc.png"},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),n=s.n(a);n.a},"5ced":function(t,e,s){},"9c0c":function(t,e,s){},cccb:function(t,e,s){"use strict";var a=s("5ced"),n=s.n(a);n.a},e347:function(t,e,s){t.exports=s.p+"img/logo.f0c98196.svg"}});
//# sourceMappingURL=app.c4139468.js.map