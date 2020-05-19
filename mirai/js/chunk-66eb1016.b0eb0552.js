(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66eb1016"],{"0a85":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chart-container"},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"companySize",staticClass:"chart"}),e("p",{staticClass:"title"},[t._v(t._s(t.title))])])},o=[],n={props:{columnBarData:{type:Array,default:function(){return[]}},title:{type:String,default:null},isLoading:{type:Boolean,default:!0}},data:function(){return{loading:!0,chartDom:{},data:[]}},watch:{isLoading:{handler:function(){this.loading=!0}},columnBarData:{handler:function(){this.data=this.columnBarData,this.initColumnBar()}}},mounted:function(){this.chartDom=this.$echarts.init(this.$refs.companySize),this.upLoad()},methods:{upLoad:function(){this.$emit("fromSonComp",this.chartDom)},initColumnBar:function(){for(var t=this,a=[0],e=0,i=this.data.length-1;i>0;i--)e+=this.data[i].value,a.unshift(e);var o=this.data.map((function(t){return t.name}));setTimeout((function(){t.loading=!1}),300);var n={color:["#3398DB"],tooltip:{trigger:"axis",backgroundColor:"rgba(0, 0, 0, 0.4)",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(0, 0, 0, 0.1)"}},formatter:function(t){var a=t[1],e=a.name,i=a.color,o=a.value,n='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'.concat(i,';"></span>学历为: ').concat(e," 共").concat(o," 条招聘数据");return n}},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}},right:"5%",top:"5%"},grid:{bottom:"40",left:"10",right:"20"},xAxis:[{type:"category",data:o,axisTick:{show:!1},axisLabel:{color:"#303133"},axisLine:{lineStyle:{color:"#E9E9EB"}}}],yAxis:[{type:"value",axisLabel:{color:"#303133",show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"rgba(239, 241, 244, .2"}},splitArea:{show:!0,areaStyle:{color:["rgba(239, 241, 244, .6)","#FFF"]}},axisLine:{lineStyle:{color:"#E9E9EB"}},splitNumber:7}],series:[{stack:"企业规模",type:"bar",barMaxWidth:"200",itemStyle:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{itemStyle:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:a},{stack:"企业规模",type:"bar",barMaxWidth:"200",color:"#409EFF",data:this.data,label:{show:!0,position:"inside",formatter:function(t){var a=t.value;return a+"条"}}}]};this.chartDom.setOption(n)}}},s=n,r=(e("830a"),e("4023")),c=Object(r["a"])(s,i,o,!1,null,"70e333f1",null);a["a"]=c.exports},"13b6":function(t,a,e){"use strict";var i=e("2aa35"),o=e.n(i);o.a},"2aa35":function(t,a,e){},3185:function(t,a,e){},"3c3b":function(t,a,e){},"49c7":function(t,a,e){},6382:function(t,a,e){"use strict";var i=e("db18"),o=e.n(i);o.a},"78b3":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chart-container"},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"heatmap",staticClass:"heatmap"}),e("p",{staticClass:"title"},[t._v(t._s(t.title))])])},o=[],n={props:{heatMapData:{type:Array,default:function(){return[]}},title:{type:String,default:""},isLoading:{type:Boolean,default:!0}},data:function(){return{loading:!0,chartDom:{},salary:["3k及以下","4k","6k","8k","10k","12k","14k","16k","20k","24k","28k","30K及以上"],workYears:["不限","应届毕业生","1年以下","1-3年","3-5年","5-10年","10年以上"],data:[]}},watch:{isLoading:{handler:function(){this.loading=!0}},heatMapData:{handler:function(){this.data=this.heatMapData,this.initHeatmap()}}},mounted:function(){this.chartDom=this.$echarts.init(this.$refs.heatmap),this.upLoad()},activated:function(){},methods:{upLoad:function(){this.$emit("fromSonComp",this.chartDom)},initHeatmap:function(){var t=this;setTimeout((function(){t.loading=!1}),300);var a=[];this.data.forEach((function(t,e){t.value.forEach((function(t,i){a.push([i,e,t])}))}));var e={animation:!0,grid:{bottom:"20",left:"10",right:"20",containLabel:!0},xAxis:{type:"category",data:this.salary,axisTick:{show:!1},axisLabel:{color:"#303133"},axisLine:{lineStyle:{color:"#E9E9EB"}}},yAxis:{type:"category",data:this.workYears,axisTick:{show:!1},axisLabel:{color:"#606266"},axisLine:{lineStyle:{color:"#606266"}}},visualMap:{type:"piecewise",pieces:[{gte:200,color:"#0087dc"},{gt:120,lte:200,color:"#1ca2dc"},{gt:40,lte:120,color:"#5bc3f0"},{gt:20,lte:40,color:"#A0CFFF"},{lte:20,color:"#C6E2FF"}],textStyle:{color:"#606266"},orient:"horizontal",left:"center",top:"27"},series:{type:"heatmap",data:a,label:{show:!0},emphasis:{itemStyle:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}}}};this.chartDom.setOption(e)}}},s=n,r=(e("6382"),e("4023")),c=Object(r["a"])(s,i,o,!1,null,"46006634",null);a["a"]=c.exports},"830a":function(t,a,e){"use strict";var i=e("3185"),o=e.n(i);o.a},"87fa":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"compared"},[e("div",{staticClass:"analysis"},[e("positionCopy",{staticClass:"position",attrs:{"position-data":t.leftData.positionData,"action-type":"setComparedLeftForm","is-loading":t.leftData.isLoading}}),e("heat-map",{staticClass:"heat-map",attrs:{"heat-map-data":t.leftData.heatMapData,title:"预测薪资","is-loading":t.leftData.isLoading},on:{fromSonComp:t.getFromHeat}}),e("columnBar",{staticClass:"company-size",attrs:{"column-data":t.leftData.companySizeData,title:"企业规模","is-loading":t.leftData.isLoading},on:{fromSonComp:t.getFromBar}}),e("columnBarSub",{staticClass:"education",attrs:{"column-bar-data":t.leftData.educationData,title:"学历要求","is-loading":t.leftData.isLoading},on:{fromSonComp:t.getFromBarSub}}),e("wordCloud",{staticClass:"word-cloud",attrs:{"word-cloud-data":t.leftData.benefitData,title:"薪资福利","is-loading":t.leftData.isLoading},on:{fromSonComp:t.getFromWordCloud}}),e("pie",{staticClass:"finance-stage",attrs:{"pie-data":t.leftData.financeStage,title:"企业融资","is-loading":t.leftData.isLoading},on:{fromSonComp:t.getFromPie}})],1),e("div",{staticClass:"analysis"},[e("positionCopy",{staticClass:"position",attrs:{"position-data":t.rightData.positionData,"action-type":"setComparedRightForm","is-loading":t.rightData.isLoading}}),e("heat-map",{staticClass:"heat-map",attrs:{"heat-map-data":t.rightData.heatMapData,title:"预测薪资","is-loading":t.rightData.isLoading},on:{fromSonComp:t.getFromHeat}}),e("columnBar",{staticClass:"company-size",attrs:{"column-data":t.rightData.companySizeData,title:"企业规模","is-loading":t.rightData.isLoading},on:{fromSonComp:t.getFromBar}}),e("columnBarSub",{staticClass:"education",attrs:{"column-bar-data":t.rightData.educationData,title:"学历要求","is-loading":t.rightData.isLoading},on:{fromSonComp:t.getFromBarSub}}),e("wordCloud",{staticClass:"word-cloud",attrs:{"word-cloud-data":t.rightData.benefitData,title:"薪资福利","is-loading":t.rightData.isLoading},on:{fromSonComp:t.getFromWordCloud}}),e("pie",{staticClass:"finance-stage",attrs:{"pie-data":t.rightData.financeStage,title:"企业融资","is-loading":t.rightData.isLoading},on:{fromSonComp:t.getFromPie}})],1)])},o=[],n=e("f9f0"),s=e.n(n),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"position-container"},[e("div",{staticClass:"left-container"},[e("selectRegion",{staticClass:"select-region",attrs:{"default-value":"广东省"},on:{changeRegion:t.changeRegion}}),e("el-row",{staticClass:"top"},[Object.keys(t.positionDest).length>0?e("el-col",{staticClass:"box",attrs:{span:8}},[e("div",{staticClass:"title"},[e("p",[t._v(t._s(t.positionDest.title))]),e("span",[t._v(t._s(t.positionDest.rank))])]),e("div",{staticClass:"num"},[e("div",{staticClass:"num-item"},[e("p",{staticClass:"item-name"},[t._v("今月新增")]),e("p",{staticClass:"item-num"},[t._v(t._s(t.positionDest.new))])]),e("div",{staticClass:"num-item"},[e("p",{staticClass:"item-name"},[t._v("职位总量")]),e("p",{staticClass:"item-num"},[t._v(t._s(t.positionDest.total))])])])]):e("el-col",{staticClass:"box",attrs:{span:8}},[e("div",{staticClass:"title"},[e("p",[t._v("CodeRush")]),e("span",[t._v("TOP 39")])]),e("div",{staticClass:"num"},[e("div",{staticClass:"num-item"},[e("p",{staticClass:"item-name"},[t._v("今月新增")]),e("p",{staticClass:"item-num"},[t._v("0")])]),e("div",{staticClass:"num-item"},[e("p",{staticClass:"item-name"},[t._v("职位总量")]),e("p",{staticClass:"item-num"},[t._v("0")])])])]),e("el-col",{staticClass:"box",attrs:{span:16}},[e("div",{staticClass:"title"},[e("p",{staticClass:"city"},[t._v("热门地区")])]),t.positionHotRegion.length>0?e("div",{staticClass:"num"},t._l(t.positionHotRegion,(function(a,i){return e("div",{key:i,staticClass:"num-item"},[e("p",{staticClass:"item-name"},[t._v(t._s(a.name))]),e("p",{staticClass:"item-num"},[t._v(t._s(a.value))])])})),0):e("div",{staticClass:"num"},t._l(3,(function(a,i){return e("div",{key:i,staticClass:"num-item"},[e("p",{staticClass:"item-name"},[t._v("CodeRush")]),e("p",{staticClass:"item-num "},[t._v("0")])])})),0)])],1),e("el-row",{staticClass:"bottom"},[e("el-col",{staticClass:"box",attrs:{span:24}},[e("div",{staticClass:"title"},[t._v(t._s(t.positionDest.title)+"技术栈要求")]),t.positionSkill.length>0?e("ul",t._l(t.positionSkill,(function(a,i){return e("el-popover",{key:a.name,staticClass:"card-li",attrs:{placement:"top-start",width:"200",trigger:"hover"}},[e("div",[t._v("关键词总数："+t._s(a.total)+"条")]),e("div",[t._v("较上月增长：："+t._s(a.new)+" 条")]),e("div"),e("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(i+1+". "+a.name))])],1)})),1):e("ul",[e("li",{staticClass:"card-li-null"},[t._v(" "+t._s(t.positionForm.region)+'没有"'+t._s(t.positionDest.title)+'"的职位哦～ ')])])]),e("el-col",{staticClass:"box",attrs:{span:24}},[e("div",{staticClass:"title"},[t._v("技术社区")]),t.positionCommunity.length>0?e("ul",t._l(t.positionCommunity,(function(a){return e("el-popover",{key:a.name,staticClass:"card-li",attrs:{placement:"top-start",width:"200",trigger:"hover"}},[e("div",[t._v(t._s(a.title))]),e("el-button",{attrs:{slot:"reference"},on:{click:function(e){return t.openUrl(a.url)}},slot:"reference"},[e("img",{staticClass:"com-img",attrs:{src:a.icon,alt:"logo"}}),e("p",[t._v(t._s(a.name))])])],1)})),1):e("ul",[e("li",{staticClass:"card-li-null"},[t._v(" 广告位招租 ")])])]),e("el-col",{staticClass:"box",attrs:{span:24}},[e("div",{staticClass:"title"},[t._v("视频学习网站")]),t.positionVideo.length>0?e("ul",t._l(t.positionVideo,(function(a){return e("el-popover",{key:a.name,staticClass:"card-li",attrs:{placement:"top-start",width:"200",trigger:"hover"}},[e("div",[t._v(t._s(a.title))]),e("el-button",{attrs:{slot:"reference"},on:{click:function(e){return t.openUrl(a.url)}},slot:"reference"},[e("img",{staticClass:"com-img",attrs:{src:a.icon,alt:"logo"}}),e("p",[t._v(t._s(a.name))])])],1)})),1):e("ul",[e("li",{staticClass:"card-li-null"},[t._v(" 广告位招租 ")])])])],1)],1),e("div",{staticClass:"right-container"},[t.otherPosition.length>0?e("div",{staticClass:"bottom-right"},t._l(t.otherPosition,(function(a,i){return e("div",{key:i,staticClass:"bottom-right-item",on:{click:function(e){return t.handleOther(a.name)}}},[e("p",{staticClass:"item-name"},[t._v(t._s(a.name))]),e("p",{staticClass:"item-num"},[e("span",{staticStyle:{"font-size":"12px"}},[t._v("总量")]),t._v(" "+t._s(a.value)+" ")])])})),0):t._e()])])},c=[],l=e("da47"),u=e("ae8c");function d(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?d(Object(e),!0).forEach((function(a){m(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function m(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var h={components:{selectRegion:l["a"]},props:{positionData:{type:Object,default:function(){return[]}},isLoading:{type:Boolean,default:!0},actionType:{type:String,default:""}},data:function(){return{positionDest:[],positionHotRegion:[],otherPosition:[],positionSkill:[],positionCommunity:[],positionVideo:[],loading:!0}},computed:p({},Object(u["b"])(["positionForm"])),watch:{isLoading:{handler:function(){console.log(22222),this.loading=!0}},positionData:{handler:function(){this.initPositionData()}}},mounted:function(){},methods:{openUrl:function(t){t&&window.open(t)},initPositionData:function(){var t=this;setTimeout((function(){t.loading=!1}),300),this.positionDest=this.positionData.desc,this.positionHotRegion=this.positionData.hotRegion,this.otherPosition=this.positionData.other,this.positionSkill=this.positionData.skill,this.positionCommunity=this.positionData.community,this.positionVideo=this.positionData.video},changeRegion:function(t){t.name&&(this.$store.dispatch(this.actionType,{key:"region",value:t.name}),this.$store.dispatch(this.actionType,{key:"level",value:t.level}))},handleOther:function(t){this.$store.dispatch(this.actionType,{key:"position",value:t})}}},f=h,g=(e("f4da"),e("cfc0"),e("4023")),v=Object(g["a"])(f,r,c,!1,null,"10ced81d",null),b=v.exports,D=e("78b3"),C=e("daac"),y=e("0a85"),_=e("f705"),S=e("f698"),w=e("6e6f");function x(t,a,e,i,o,n,s){try{var r=t[n](s),c=r.value}catch(l){return void e(l)}r.done?a(c):Promise.resolve(c).then(i,o)}function O(t){return function(){var a=this,e=arguments;return new Promise((function(i,o){var n=t.apply(a,e);function s(t){x(n,i,o,s,r,"next",t)}function r(t){x(n,i,o,s,r,"throw",t)}s(void 0)}))}}function F(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function L(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?F(Object(e),!0).forEach((function(a){k(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):F(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function k(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var j={components:{positionCopy:b,heatMap:D["a"],columnBar:C["a"],columnBarSub:y["a"],wordCloud:_["a"],pie:S["a"]},data:function(){return{leftData:{positionData:{},heatMapData:[],companySizeData:[],educationData:[],benefitData:[],financeStage:[],isLoading:!0},rightData:{positionData:{},heatMapData:[],companySizeData:[],educationData:[],benefitData:[],financeStage:[],isLoading:!0}}},computed:L({},Object(u["b"])(["comparedLeftForm","comparedRightForm","changedPage","showingName"])),watch:{comparedLeftForm:{handler:function(){this.leftData.isLoading=!this.leftData.isLoading,this.getLeftData(this.comparedLeftForm)},deep:!0},comparedRightForm:{handler:function(){this.rightData.isLoading=!this.rightData.isLoading,this.getRightData(this.comparedRightForm)},deep:!0}},created:function(){this.compArr=[]},mounted:function(){var t=this;this.getLeftData(this.comparedLeftForm),this.getRightData(this.comparedRightForm).then((function(){t.$store.dispatch("setChartDOM",t.compArr)}))},activated:function(){this.$store.dispatch("getName",["compared-salaryExp","compared-companySize","compared-education","compared-benefit","compared-financeStage","_compared-salaryExp","_compared-companySize","_compared-education","_compared-benefit","_compared-financeStage"]),this.changedPage.includes("compared")&&(this.$store.dispatch("getShowingName"),this.showingName.map((function(t){t.chartDom.resize()})),this.$store.dispatch("deleteChangePage","compared"))},methods:{getFromHeat:function(t){this.compArr.push({name:"compared-salaryExp",chartDom:t})},getFromBar:function(t){this.compArr.push({name:"compared-companySize",chartDom:t})},getFromBarSub:function(t){this.compArr.push({name:"compared-education",chartDom:t})},getFromWordCloud:function(t){this.compArr.push({name:"compared-benefit",chartDom:t})},getFromPie:function(t){this.compArr.push({name:"compared-financeStage",chartDom:t})},_getFromHeat:function(t){this.compArr.push({name:"_compared-salaryExp",chartDom:t})},_getFromBar:function(t){this.compArr.push({name:"_compared-companySize",chartDom:t})},_getFromBarSub:function(t){this.compArr.push({name:"_compared-education",chartDom:t})},_getFromWordCloud:function(t){this.compArr.push({name:"_compared-benefit",chartDom:t})},_getFromPie:function(t){this.compArr.push({name:"_compared-financeStage",chartDom:t})},getLeftData:function(){var t=arguments,a=this;return O(s.a.mark((function e(){var i,o,n,r,c,l,u,d,p,m,h,f,g;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.length>0&&void 0!==t[0]?t[0]:{},e.next=3,Object(w["f"])(i);case 3:return o=e.sent,n=o.data,a.leftData.heatMapData=n,e.next=8,Object(w["b"])(i);case 8:return r=e.sent,c=r.data,a.leftData.companySizeData=c,e.next=13,Object(w["c"])(i);case 13:return l=e.sent,u=l.data,a.leftData.educationData=u,e.next=18,Object(w["a"])(i);case 18:return d=e.sent,p=d.data,0===p.length&&(p=[{name:"CodeRush",value:2739},{name:"大数据招聘分析平台",value:2739},{name:"广告位招租",value:2739}]),a.leftData.benefitData=p,e.next=24,Object(w["d"])(i);case 24:return m=e.sent,h=m.data,a.leftData.financeStage=h,e.next=29,Object(w["e"])(i);case 29:f=e.sent,g=f.data,a.leftData.positionData=g;case 32:case"end":return e.stop()}}),e)})))()},getRightData:function(){var t=arguments,a=this;return O(s.a.mark((function e(){var i,o,n,r,c,l,u,d,p,m,h,f,g;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.length>0&&void 0!==t[0]?t[0]:{},e.next=3,Object(w["f"])(i);case 3:return o=e.sent,n=o.data,a.rightData.heatMapData=n,e.next=8,Object(w["b"])(i);case 8:return r=e.sent,c=r.data,a.rightData.companySizeData=c,e.next=13,Object(w["c"])(i);case 13:return l=e.sent,u=l.data,a.rightData.educationData=u,e.next=18,Object(w["a"])(i);case 18:return d=e.sent,p=d.data,0===p.length&&(p=[{name:"CodeRush",value:2739},{name:"大数据招聘分析平台",value:2739},{name:"广告位招租",value:2739}]),a.rightData.benefitData=p,e.next=24,Object(w["d"])(i);case 24:return m=e.sent,h=m.data,a.rightData.financeStage=h,e.next=29,Object(w["e"])(i);case 29:f=e.sent,g=f.data,a.rightData.positionData=g;case 32:case"end":return e.stop()}}),e)})))()}}},P=j,E=(e("13b6"),Object(g["a"])(P,i,o,!1,null,"7d6fbb48",null));a["default"]=E.exports},8821:function(t,a,e){},ad80:function(t,a,e){"use strict";var i=e("49c7"),o=e.n(i);o.a},cfc0:function(t,a,e){"use strict";var i=e("8821"),o=e.n(i);o.a},db18:function(t,a,e){},f4da:function(t,a,e){"use strict";var i=e("3c3b"),o=e.n(i);o.a},f698:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chart-container"},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"pie",staticClass:"chart"}),e("p",{staticClass:"title"},[t._v(t._s(t.title))])])},o=[],n={props:{pieData:{type:Array,default:function(){return[]}},title:{type:String,default:""},isLoading:{type:Boolean,default:!0}},data:function(){return{loading:!0,chartDom:{},data:[]}},watch:{isLoading:{handler:function(){this.loading=!0}},pieData:{handler:function(){this.data=this.pieData;var t=0;this.pieData.forEach((function(a){t+=a.value})),this.initPie(t)}}},mounted:function(){this.chartDom=this.$echarts.init(this.$refs.pie),this.upLoad()},methods:{upLoad:function(){this.$emit("fromSonComp",this.chartDom)},initPie:function(t){var a=this;setTimeout((function(){a.loading=!1}),300);var e=["#0E7CE2","#67C23A","#FF8352","#E271DE","#409EFF","#F8456B","#00FFFF","#4AEAB0"],i=function(t){var a=/(?=(\B)(\d{3})+$)/g;return t.toString().replace(a,",")},o={title:{text:"{name|总量}\n{val|"+i(t)+"}",top:"center",left:"center",textStyle:{rich:{name:{fontSize:14,fontWeight:"normal",color:"#666666",padding:[10,0]},val:{fontSize:32,fontWeight:"bold",color:"#333333"}}}},color:e,legend:{orient:"horizontal",bottom:"10",icon:"rect",itemWidth:12,itemHeight:12,align:"left",textStyle:{rich:{name:{fontSize:12},value:{fontSize:16,padding:[0,5,0,15]},unit:{fontSize:12}}}},series:[{type:"pie",radius:["50%","70%"],center:["center","center"],data:this.data,itemStyle:{normal:{borderColor:"#FFF",borderWidth:2}},labelLine:{normal:{length:20,length2:120,lineStyle:{color:"#C0C4CC"}}},label:{normal:{formatter:function(t){return"{icon|●}{name|"+t.name+"}{value|"+i(t.value)+"}"},padding:[0,-100,25,-100],rich:{icon:{fontSize:20},name:{fontSize:14,padding:[0,10,0,4],color:"#666666"},value:{fontSize:18,fontWeight:"bold",color:"#333333"}}}},animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 200*Math.random()}}]};this.chartDom.setOption(o)}}},s=n,r=(e("ad80"),e("4023")),c=Object(r["a"])(s,i,o,!1,null,"ccfbe9fe",null);a["a"]=c.exports}}]);
//# sourceMappingURL=chunk-66eb1016.b0eb0552.js.map