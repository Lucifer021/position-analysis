(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5f93e3c"],{"42ea":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var a=n("0c6d");function i(){return Object(a["a"])({url:"/Language_Servlet",method:"get"})}function r(t){var e=t.time,n=void 0===e?["2020-03-30","2020-03-31","2020-04-01","2020-04-02"]:e;return Object(a["a"])({url:"/CountryDate_Job_Servlet",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:{time:n}})}},6166:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"vcl-container"},[n("el-switch",{staticClass:"run",attrs:{"active-text":"开始","inactive-text":"暂停"},nativeOn:{click:function(e){return t.handleRun(e)}},model:{value:t.runFlag,callback:function(e){t.runFlag=e},expression:"runFlag"}}),n("div",{staticClass:"title"},[n("p",{staticClass:"sub-title"},[t._v("截止至当前时间招聘最火热的职位是:")]),0!=t.data.length?n("p",[t._v(t._s(t.data[t.data.length-1].name))]):t._e()]),n("div",{staticClass:"chart"},[n("p",{staticClass:"time"},[t._v(t._s(t.dateList[t.index]))]),n("div",{ref:"vcl",staticClass:"vcl"})])],1)},i=[],r=n("f9f0"),o=n.n(r),s=n("c466"),c=n("ae8c"),u=n("42ea");function l(t,e,n,a,i,r,o){try{var s=t[r](o),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(a,i)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var r=t.apply(e,n);function o(t){l(r,a,i,o,s,"next",t)}function s(t){l(r,a,i,o,s,"throw",t)}o(void 0)}))}}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={data:function(){return{vclData:[],option:[],index:0,data:[],positionList:[],positionColors:[],dateList:[],timer:null,runFlag:!1,loading:!0}},computed:p({},Object(c["b"])(["changedPage","showingName"])),mounted:function(){this.temporary()},activated:function(){console.log("vcl upupup"),this.$store.dispatch("getName",["vcl"]),this.changedPage.includes("vcl")&&(this.$store.dispatch("getShowingName"),this.showingName.map((function(t){t.chartDom.resize()})),this.$store.dispatch("deleteChangePage","vcl"))},methods:{getFromSon:function(t){this.$store.dispatch("setChartDOM",[{name:"vcl",chartDom:t}])},getData:function(t){var e=this.vclData.map((function(e){return{name:e.name,value:e.data[t]}}));this.data=e.sort((function(t,e){return t.value-e.value})),this.positionList=this.data.map((function(t){return t.name}))},run:function(t,e){var n=this,a=this.data;++this.index;var i=this.vclData.map((function(t){return{name:t.name,value:t.data[n.index]}})),r=a.map((function(t,e){var n=i.findIndex((function(e){return e.name===t.name}));return{name:t.name,value:i[n].value-a[e].value}})),o=r.map((function(t){return{name:t.name,value:Math.round(t.value/e)}})),s=0,c=setInterval((function(){a.forEach((function(t,e){t.value+=o[e].value})),n.option=n.getOption(n.positionList,a),t.setOption(n.option),s++,s===e&&(n.index===n.dateList.length-1&&(n.runFlag=!1,clearInterval(n.timer)),clearInterval(c),i.sort((function(t,e){return t.value-e.value})),n.data=i,n.positionList=i.map((function(t){return t.name})),n.option=n.getOption(n.positionList,i),t.setOption(n.option))}),1e3/e)},getOption:function(t,e){var n=this;return{tooltip:{trigger:"axis",backgroundColor:"rgba(0,0,0,0.3)",axisPointer:{type:"cross",label:{precision:"0"}}},grid:{left:"2%",right:"2%",bottom:"2%",top:"2%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01],axisTick:{show:!1}},yAxis:{show:!1,type:"category",axisTick:{show:!1},axisLabel:{fontSize:18,color:function(t){var e=t,a=n.positionColors.find((function(t){return t.name===e})).color;return a}},data:t},series:[{name:this.dateList[0],type:"bar",data:e,barMaxWidth:21,label:{show:!0,position:"insideRight",fontSize:21,offset:[0,-10],formatter:function(t){var e=t.name,n=t.value;return"".concat(e,": ").concat(n," 条")}},itemStyle:{barBorderRadius:[0,7,7,0],color:function(t){var e=t.name,a=n.positionColors.find((function(t){return t.name===e})).color;return a}}}]}},handleRun:function(){var t=this;if(this.index===this.dateList.length-1&&(this.index=0,this.ininChart()),this.runFlag){var e=this.$echarts.init(this.$refs.vcl);this.timer=setInterval((function(){t.run(e,10)}),1e3)}else clearInterval(this.timer)},ininChart:function(){var t=Object(s["a"])("2020-02-19",Object(s["b"])()),e=Object(s["b"])(t+1).reverse();this.dateList=e,this.getData(this.index);var n=this.$echarts.init(this.$refs.vcl);this.positionColors=this.positionList.map((function(t){var e="rgb(".concat(Math.round(255*Math.random()),", ").concat(Math.round(255*Math.random()),", ").concat(Math.round(255*Math.random()),")");return{name:t,color:e}})),this.option=this.getOption(this.positionList,this.data),n.setOption(this.option),this.getFromSon(n)},temporary:function(){var t=this;return h(o.a.mark((function e(){var n,a,i,r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(s["a"])("2020-02-19",Object(s["b"])()),a=Object(s["b"])(n+1).reverse(),e.next=4,Object(u["a"])({time:a});case 4:i=e.sent,r=i.data,t.loading=!1,t.vclData=r,t.ininChart();case 9:case"end":return e.stop()}}),e)})))()}}},m=f,g=(n("9a86"),n("4023")),b=Object(g["a"])(m,a,i,!1,null,"e62194fc",null);e["default"]=b.exports},"9a86":function(t,e,n){"use strict";var a=n("ded4"),i=n.n(a);i.a},ded4:function(t,e,n){}}]);
//# sourceMappingURL=chunk-f5f93e3c.c10de68a.js.map