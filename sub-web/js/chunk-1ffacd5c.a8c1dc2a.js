(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ffacd5c"],{"14c3":function(e,t,o){var r=o("c6b6"),l=o("9263");e.exports=function(e,t){var o=e.exec;if("function"===typeof o){var n=o.call(e,t);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return l.call(e,t)}},"25f0":function(e,t,o){"use strict";var r=o("6eeb"),l=o("825a"),n=o("d039"),s=o("ad6d"),a="toString",i=RegExp.prototype,c=i[a],u=n((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),f=c.name!=a;(u||f)&&r(RegExp.prototype,a,(function(){var e=l(this),t=String(e.source),o=e.flags,r=String(void 0===o&&e instanceof RegExp&&!("flags"in i)?s.call(e):o);return"/"+t+"/"+r}),{unsafe:!0})},"4de4":function(e,t,o){"use strict";var r=o("23e7"),l=o("b727").filter,n=o("1dde"),s=o("ae40"),a=n("filter"),i=s("filter");r({target:"Array",proto:!0,forced:!a||!i},{filter:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}})},5319:function(e,t,o){"use strict";var r=o("d784"),l=o("825a"),n=o("7b0b"),s=o("50c4"),a=o("a691"),i=o("1d80"),c=o("8aa5"),u=o("14c3"),f=Math.max,p=Math.min,m=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,o,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,S=g?"$":"$0";return[function(o,r){var l=i(this),n=void 0==o?void 0:o[e];return void 0!==n?n.call(o,l,r):t.call(String(l),o,r)},function(e,r){if(!g&&v||"string"===typeof r&&-1===r.indexOf(S)){var n=o(t,e,this,r);if(n.done)return n.value}var i=l(e),m=String(this),d="function"===typeof r;d||(r=String(r));var b=i.global;if(b){var x=i.unicode;i.lastIndex=0}var y=[];while(1){var R=u(i,m);if(null===R)break;if(y.push(R),!b)break;var k=String(R[0]);""===k&&(i.lastIndex=c(m,s(i.lastIndex),x))}for(var w="",_=0,A=0;A<y.length;A++){R=y[A];for(var U=String(R[0]),L=f(p(a(R.index),m.length),0),$=[],E=1;E<R.length;E++)$.push(h(R[E]));var O=R.groups;if(d){var T=[U].concat($,L,m);void 0!==O&&T.push(O);var I=String(r.apply(void 0,T))}else I=C(U,m,L,$,O,r);L>=_&&(w+=m.slice(_,L)+I,_=L+U.length)}return w+m.slice(_)}];function C(e,o,r,l,s,a){var i=r+e.length,c=l.length,u=b;return void 0!==s&&(s=n(s),u=d),t.call(a,u,(function(t,n){var a;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return o.slice(0,r);case"'":return o.slice(i);case"<":a=s[n.slice(1,-1)];break;default:var u=+n;if(0===u)return t;if(u>c){var f=m(u/10);return 0===f?t:f<=c?void 0===l[f-1]?n.charAt(1):l[f-1]+n.charAt(1):t}a=l[u-1]}return void 0===a?"":a}))}}))},6547:function(e,t,o){var r=o("a691"),l=o("1d80"),n=function(e){return function(t,o){var n,s,a=String(l(t)),i=r(o),c=a.length;return i<0||i>=c?e?"":void 0:(n=a.charCodeAt(i),n<55296||n>56319||i+1===c||(s=a.charCodeAt(i+1))<56320||s>57343?e?a.charAt(i):n:e?a.slice(i,i+2):s-56320+(n-55296<<10)+65536)}};e.exports={codeAt:n(!1),charAt:n(!0)}},"8aa5":function(e,t,o){"use strict";var r=o("6547").charAt;e.exports=function(e,t,o){return t+(o?r(e,t).length:1)}},9263:function(e,t,o){"use strict";var r=o("ad6d"),l=o("9f7f"),n=RegExp.prototype.exec,s=String.prototype.replace,a=n,i=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=l.UNSUPPORTED_Y||l.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=i||u||c;f&&(a=function(e){var t,o,l,a,f=this,p=c&&f.sticky,m=r.call(f),d=f.source,b=0,h=e;return p&&(m=m.replace("y",""),-1===m.indexOf("g")&&(m+="g"),h=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(d="(?: "+d+")",h=" "+h,b++),o=new RegExp("^(?:"+d+")",m)),u&&(o=new RegExp("^"+d+"$(?!\\s)",m)),i&&(t=f.lastIndex),l=n.call(p?o:f,h),p?l?(l.input=l.input.slice(b),l[0]=l[0].slice(b),l.index=f.lastIndex,f.lastIndex+=l[0].length):f.lastIndex=0:i&&l&&(f.lastIndex=f.global?l.index+l[0].length:t),u&&l&&l.length>1&&s.call(l[0],o,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(l[a]=void 0)})),l}),e.exports=a},"9f7f":function(e,t,o){"use strict";var r=o("d039");function l(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=l("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=l("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a640:function(e,t,o){"use strict";var r=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&r((function(){o.call(null,t||function(){throw 1},1)}))}},a9c7:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",{staticStyle:{"margin-top":"10px"}},[o("el-col",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[e._v(" Firefly-SubConverter "),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"github"},on:{click:e.goToProject}}),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"telegram"},on:{click:e.gotoTgChannel}}),o("div",{staticStyle:{display:"inline-block",position:"absolute",right:"20px"}},[e._v(" "+e._s(e.backendVersion)+" ")])],1),o("el-container",[o("el-form",{staticStyle:{width:"100%"},attrs:{model:e.form,"label-width":"120px","label-position":"left"}},[o("el-form-item",{attrs:{label:"模式设置:"}},[o("el-radio",{attrs:{label:"1"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("基础模式")]),o("el-radio",{attrs:{label:"2"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("进阶模式")])],1),o("el-form-item",{attrs:{label:"订阅链接:"}},[o("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"支持订阅或ss/ssr/vmess单链接。多个链接请每行一个或用 | 分隔"},on:{blur:e.saveSubUrl},model:{value:e.form.sourceSubUrl,callback:function(t){e.$set(e.form,"sourceSubUrl",t)},expression:"form.sourceSubUrl"}})],1),o("el-form-item",{attrs:{label:"客户端:"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:e.form.clientType,callback:function(t){e.$set(e.form,"clientType",t)},expression:"form.clientType"}},e._l(e.options.clientTypes,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"远程配置:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.remoteConfig,callback:function(t){e.$set(e.form,"remoteConfig",t)},expression:"form.remoteConfig"}},e._l(e.options.remoteConfig,(function(t){return o("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)})),1)],1),o("el-form-item",{attrs:{label:"后端地址:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.customBackend,callback:function(t){e.$set(e.form,"customBackend",t)},expression:"form.customBackend"}},e._l(e.options.customBackend,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),"2"===e.advanced?o("div",[o("el-form-item",{attrs:{label:"包含节点:"}},[o("el-input",{attrs:{placeholder:"节点名包含的关键字，支持正则"},model:{value:e.form.includeRemarks,callback:function(t){e.$set(e.form,"includeRemarks",t)},expression:"form.includeRemarks"}})],1),o("el-form-item",{attrs:{label:"排除节点:"}},[o("el-input",{attrs:{placeholder:"节点名不包含的关键字，支持正则"},model:{value:e.form.excludeRemarks,callback:function(t){e.$set(e.form,"excludeRemarks",t)},expression:"form.excludeRemarks"}})],1),o("el-form-item",{attrs:{label:"输出文件名:"}},[o("el-input",{attrs:{placeholder:"返回的订阅文件名"},model:{value:e.form.filename,callback:function(t){e.$set(e.form,"filename",t)},expression:"form.filename"}})],1),o("el-form-item",{attrs:{"label-width":"0px"}},[o("el-row",{attrs:{type:"flex"}},[o("el-col",[o("el-checkbox",{attrs:{label:"Emoji",border:""},model:{value:e.form.emoji,callback:function(t){e.$set(e.form,"emoji",t)},expression:"form.emoji"}})],1),o("el-popover",{attrs:{placement:"bottom"},model:{value:e.form.extraset,callback:function(t){e.$set(e.form,"extraset",t)},expression:"form.extraset"}},[o("el-row",[o("el-checkbox",{attrs:{label:"启用 UDP"},model:{value:e.form.udp,callback:function(t){e.$set(e.form,"udp",t)},expression:"form.udp"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"节点类型"},model:{value:e.form.appendType,callback:function(t){e.$set(e.form,"appendType",t)},expression:"form.appendType"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"排序节点"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"过滤非法节点"},model:{value:e.form.fdn,callback:function(t){e.$set(e.form,"fdn",t)},expression:"form.fdn"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"TCP Fast Open"},model:{value:e.form.tfo,callback:function(t){e.$set(e.form,"tfo",t)},expression:"form.tfo"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Skip Cert Verify"},model:{value:e.form.scv,callback:function(t){e.$set(e.form,"scv",t)},expression:"form.scv"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"输出为 Node List"},model:{value:e.form.nodeList,callback:function(t){e.$set(e.form,"nodeList",t)},expression:"form.nodeList"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("节点处理")])],1),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{placement:"bottom"},model:{value:e.form.rule,callback:function(t){e.$set(e.form,"rule",t)},expression:"form.rule"}},[o("el-row",[o("el-checkbox",{attrs:{label:"展开规则"},model:{value:e.form.expand,callback:function(t){e.$set(e.form,"expand",t)},expression:"form.expand"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Classic Rule Provider"},model:{value:e.form.classic,callback:function(t){e.$set(e.form,"classic",t)},expression:"form.classic"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("Rule Provider 选项")])],1)],1)],1)],1):e._e(),o("div",{staticStyle:{"margin-top":"50px"}}),o("el-divider",{attrs:{"content-position":"center"}},[o("i",{staticClass:"el-icon-magic-stick"})]),o("el-form-item",{attrs:{label:"定制订阅:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.customSubUrl,callback:function(t){e.customSubUrl=t},expression:"customSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.customSubUrl,expression:"customSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{attrs:{label:"订阅短链接:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.curtomShortSubUrl,callback:function(t){e.curtomShortSubUrl=t},expression:"curtomShortSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.curtomShortSubUrl,expression:"curtomShortSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{staticStyle:{"margin-top":"40px","text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",disabled:0===e.form.sourceSubUrl.length},on:{click:e.makeUrl}},[e._v("生成订阅链接")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",loading:e.loading,disabled:0===e.customSubUrl.length},on:{click:e.makeShortUrl}},[e._v("生成短链接")])],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-upload",loading:e.loading},on:{click:function(t){e.dialogUploadConfigVisible=!0}}},[e._v("上传配置")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-connection",disabled:0===e.customSubUrl.length},on:{click:e.clashInstall}},[e._v("一键导入Clash")])],1)],1)],1)],1)],1)],1),o("el-dialog",{attrs:{visible:e.dialogUploadConfigVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"700px"},on:{"update:visible":function(t){e.dialogUploadConfigVisible=t}}},[o("div",{attrs:{slot:"title"},slot:"title"},[e._v(" Remote config upload "),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{trigger:"hover",placement:"right"}},[o("el-link",{attrs:{type:"primary",href:e.sampleConfig,target:"_blank",icon:"el-icon-info"}},[e._v("参考配置")]),o("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})],1)],1),o("el-form",{attrs:{"label-position":"left"}},[o("el-form-item",{attrs:{prop:"uploadConfig"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},maxlength:"10000","show-word-limit":""},model:{value:e.uploadConfig,callback:function(t){e.uploadConfig=t},expression:"uploadConfig"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.uploadConfig="",e.dialogUploadConfigVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary",disabled:0===e.uploadConfig.length},on:{click:e.confirmUploadConfig}},[e._v("确 定")])],1)],1)],1)},l=[],n=(o("4de4"),o("c975"),o("b64b"),o("d3b7"),o("ac1f"),o("25f0"),o("5319"),"https://github.com/LM-Firefly/sub-web"),s="https://raw.githubusercontent.com/tindy2013/subconverter/master/base/config/example_external_config.ini",a="https://github.com/tindy2013/subconverter/releases",i="https://firefly-sub.vercel.app/sub?",c="https://suo.yt/short",u="https://api.wcc.best/config/upload",f="https://t.me/subconverter_discuss",p={data:function(){var e={backendVersion:"",advanced:"1",isPC:!0,options:{clientTypes:{"Clash新参数":"clash&new_name=true","ClashR新参数":"clashr&new_name=true",Clash:"clash",ClashR:"clashr",Surge2:"surge&ver=2",Surge3:"surge&ver=3",Surge4:"surge&ver=4",Quantumult:"quan",QuantumultX:"quanx",Surfboard:"surfboard",Loon:"loon",ss:"ss",ssr:"ssr",ssd:"ssd",v2ray:"v2ray"},customBackend:{"localhost:25500 本地版":"http://localhost:25500/sub?","firefly-sub.vercel.app":"https://firefly-sub.vercel.app/sub?","firefly-sub.herokuapp.com":"https://firefly-sub.herokuapp.com/sub?","sub.ccsub.site(CordCloud机场提供)":"https://sub.ccsub.site/sub?","subcon.dlj.tf(subconverter作者提供1)":"https://subcon.dlj.tf/sub?","subconverter-web.now.sh":"https://subconverter-web.now.sh/sub?","subconverter.herokuapp.com":"https://subconverter.herokuapp.com/sub?","api.dler.io(sub作者&lhie1提供-稳定)":"https://api.dler.io/sub?","api.wcc.best(sub-web作者提供-稳定)":"https://api.wcc.best/sub?"},backendOptions:[{value:"http://localhost:25500/sub?"},{value:"https://firefly-sub.vercel.app/sub?"},{value:"https://firefly-sub.herokuapp.com/sub?"},{value:"https://sub.ccsub.site/sub?"},{value:"https://subcon.dlj.tf/sub?"},{value:"https://subconverter-web.now.sh/sub?"},{value:"https://subconverter.herokuapp.com/sub?"},{value:"https://api.wcc.best/sub?"}],remoteConfig:[{label:"默认",options:[{label:"不选,由接口提供方提供",value:""}]},{label:"LM-Firefly",options:[{label:"AIO",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/AIO.ini"},{label:"CordCloud",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/CordCloud.ini"},{label:"Clash-RULE-SET",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/Clash-RULE-SET.ini"}]},{label:"ACL4SSR",options:[{label:"ACL4SSR 默认版 分组比较全",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"},{label:"ACL4SSR_AdblockPlus 更多去广告",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"},{label:"ACL4SSR_Full_MultiMode 全分组 自动测速、故障转移、负载均衡",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Ful_MultiMode.ini"},{label:"ACL4SSR_Full 全分组 重度用户使用",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"},{label:"ACL4SSR_Full_AdblockPlus 全分组 重度用户使用 更多去广告",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"},{label:"ACL4SSR_Full_Netflix 全分组 重度用户使用 奈飞全量",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"},{label:"ACL4SSR_Full_NoAuto.ini 全分组 无自动测速 重度用户使用",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"},{label:"ACL4SSR_Mini 精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"},{label:"ACL4SSR_Mini_AdblockPlus.ini 精简版 更多去广告",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"},{label:"ACL4SSR_Mini_Fallback.ini 精简版 带故障转移",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"},{label:"ACL4SSR_Mini_MultiMode.ini 精简版 自动测速、故障转移、负载均衡",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"},{label:"ACL4SSR_Mini_NoAuto.ini 精简版 不带自动测速",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"},{label:"ACL4SSR_NoAuto 无自动测速",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"},{label:"ACL4SSR_NoReject 无广告拦截规则",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"}]},{label:"universal",options:[{label:"No-Urltest",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/universal/no-urltest.ini"},{label:"Urltest",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/universal/urltest.ini"}]},{label:"customized",options:[{label:"Maying",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/maying.ini"},{label:"rixCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/rixcloud.ini"},{label:"Nirvana",value:"https://raw.githubusercontent.com/Mazetsz/ACL4SSR/master/Clash/config/V2rayPro.ini"},{label:"V2Pro",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/V2Pro.ini"},{label:"YoYu",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/yoyu.ini"},{label:"Ytoo",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ytoo.ini"},{label:"NyanCAT",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/nyancat.ini"},{label:"Nexitally",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/nexitally.ini"},{label:"SoCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/socloud.ini"},{label:"ARK",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ark.ini"},{label:"ssrCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ssrcloud.ini"},{label:"世葵Auto",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/SkslaPro-auto.ini"},{label:"世葵Balance",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/SkslaPro-Balance.ini"},{label:"贼船",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/zeichuan.ini"},{label:"布丁",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/pud.ini"}]},{label:"Special",options:[{label:"NeteaseUnblock(仅规则，No-Urltest)",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/special/netease.ini"},{label:"Basic(仅GEOIP CN + Final)",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/special/basic.ini"}]}]},form:{sourceSubUrl:"",clientType:"",customBackend:"",remoteConfig:"",excludeRemarks:"",includeRemarks:"",filename:"",emoji:!0,nodeList:!1,rule:!1,extraset:!1,sort:!1,udp:!1,tfo:!1,scv:!1,fdn:!1,appendType:!1,insert:!1,expand:!1,classic:!1},loading:!1,customSubUrl:"",curtomShortSubUrl:"",dialogUploadConfigVisible:!1,uploadConfig:"",uploadPassword:"",myBot:f,sampleConfig:s},t=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(t){for(var o=e.options.remoteConfig[1].options,r=0;r<o.length;r++)o[r].label.length>10&&(o[r].label=o[r].label.replace(/\s.*/,""));for(var l={},n=Object.keys(e.options.customBackend),a=0;a<n.length;a++){var i=n[a].replace(/\(.*/,"");l[i]=e.options.customBackend[n[a]]}e.options.customBackend=l}return e},created:function(){document.title="Firefly-SubConverter",this.isPC=this.$getOS().isPc,this.form.sourceSubUrl=this.getLocalStorageItem("sourceSubUrl")},mounted:function(){this.form.clientType="clash&new_name=true",this.form.customBackend="https://firefly-sub.vercel.app/sub?",this.notify(),this.form.remoteConfig="https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/CordCloud.ini",this.getBackendVersion()},methods:{onCopy:function(){this.$message.success("Copied!")},goToProject:function(){window.open(n)},gotoTgChannel:function(){window.open(f)},gotoGayhub:function(){window.open(a)},gotoRemoteConfig:function(){window.open(s)},clashInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="clash://install-config?url=";window.open(e+encodeURIComponent(""!==this.curtomShortSubUrl?this.curtomShortSubUrl:this.customSubUrl))},surgeInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="surge://install-config?url=";window.open(e+this.customSubUrl)},makeUrl:function(){var e=this;if(""===this.form.sourceSubUrl||""===this.form.clientType)return this.$message.error("订阅链接与客户端为必填项"),!1;var t=""===this.form.customBackend?i:this.form.customBackend,o=""===this.form.remoteConfig?"":this.form.remoteConfig,r=this.form.sourceSubUrl;if(r=r.replace(/(\n|\r|\n\r)/g,"|"),-1!==r.indexOf("losadhwse")&&(-1!==t.indexOf("py6.pw")||-1!==t.indexOf("subconverter-web.now.sh")||-1!==t.indexOf("subconverter.herokuapp.com")||-1!==t.indexOf("api.wcc.best")))return this.$alert("此机场订阅已将该后端屏蔽，请自建后端转换。","转换错误提示",{confirmButtonText:"确定",callback:function(t){e.$message({type:"error",message:"action: ".concat(t)})}}),!1;this.customSubUrl=t+"target="+this.form.clientType+"&url="+encodeURIComponent(r)+"&insert="+this.form.insert,""!==o&&(this.customSubUrl+="&config="+encodeURIComponent(o)),"2"===this.advanced&&(""!==this.form.excludeRemarks&&(this.customSubUrl+="&exclude="+encodeURIComponent(this.form.excludeRemarks)),""!==this.form.includeRemarks&&(this.customSubUrl+="&include="+encodeURIComponent(this.form.includeRemarks)),""!==this.form.filename&&(this.customSubUrl+="&filename="+encodeURIComponent(this.form.filename)),this.form.appendType&&(this.customSubUrl+="&append_type="+this.form.appendType.toString()),this.customSubUrl+="&emoji="+this.form.emoji.toString()+"&list="+this.form.nodeList.toString()+"&udp="+this.form.udp.toString()+"&tfo="+this.form.tfo.toString()+"&scv="+this.form.scv.toString()+"&fdn="+this.form.fdn.toString()+"&sort="+this.form.sort.toString()+"&expand="+this.form.expand.toString()+"&classic="+this.form.classic.toString(),"clash"===this.form.clientType&&(this.customSubUrl+="&new_name="+this.form.new_name.toString())),this.$copyText(this.customSubUrl),this.$message.success("定制订阅已复制到剪贴板")},makeShortUrl:function(){var e=this;if(""===this.customSubUrl)return this.$message.warning("请先生成订阅链接，再获取对应短链接"),!1;this.loading=!0;var t=new FormData;t.append("longUrl",btoa(this.customSubUrl)),this.$axios.post(c,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.ShortUrl?(e.curtomShortSubUrl=t.data.ShortUrl,e.$copyText(t.data.ShortUrl),e.$message.success("短链接已复制到剪贴板")):e.$message.error("短链接获取失败："+t.data.Message)})).catch((function(){e.$message.error("短链接获取失败")})).finally((function(){e.loading=!1}))},notify:function(){var e=this.$createElement;this.$notify({title:"隐私提示",type:"warning",message:e("i",{style:"color: teal"},"各种订阅链接（短链接服务除外）生成纯前端实现，无隐私问题。默认提供后端转换服务，隐私担忧者请自行搭建后端服务。")})},confirmUploadConfig:function(){var e=this;if(""===this.uploadConfig)return this.$message.warning("远程配置不能为空"),!1;this.loading=!0;var t=new FormData;t.append("password",this.uploadPassword),t.append("config",this.uploadConfig),this.$axios.post(u,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.url?(e.$message.success("远程配置上传成功，配置链接已复制到剪贴板，有效期三个月望知悉"),e.form.remoteConfig=t.data.Url,e.$copyText(e.form.remoteConfig),e.dialogUploadConfigVisible=!1):e.$message.error("远程配置上传失败："+t.data.Message)})).catch((function(){e.$message.error("远程配置上传失败")})).finally((function(){e.loading=!1}))},backendSearch:function(e,t){var o=this.options.backendOptions,r=e?o.filter(this.createFilter(e)):o;t(r)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getBackendVersion:function(){var e=this;this.$axios.get(i.substring(0,i.length-5)+"/version").then((function(t){e.backendVersion=t.data.replace(/backend\n$/gm,""),e.backendVersion=e.backendVersion.replace("subconverter","")}))},saveSubUrl:function(){""!==this.form.sourceSubUrl&&this.setLocalStorageItem("sourceSubUrl",this.form.sourceSubUrl)},getLocalStorageItem:function(e){var t=+new Date,o=localStorage.getItem(e),r="";if(null!==o){var l=JSON.parse(o);l.expire>t?r=l.value:localStorage.removeItem(e)}return r},setLocalStorageItem:function(e,t){var o="86400",r=+new Date,l={setTime:r,ttl:parseInt(o),expire:r+1e3*o,value:t};localStorage.setItem(e,JSON.stringify(l))}}},m=p,d=o("2877"),b=Object(d["a"])(m,r,l,!1,null,null,null);t["default"]=b.exports},ac1f:function(e,t,o){"use strict";var r=o("23e7"),l=o("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},ad6d:function(e,t,o){"use strict";var r=o("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b64b:function(e,t,o){var r=o("23e7"),l=o("7b0b"),n=o("df75"),s=o("d039"),a=s((function(){n(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return n(l(e))}})},c975:function(e,t,o){"use strict";var r=o("23e7"),l=o("4d64").indexOf,n=o("a640"),s=o("ae40"),a=[].indexOf,i=!!a&&1/[1].indexOf(1,-0)<0,c=n("indexOf"),u=s("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:i||!c||!u},{indexOf:function(e){return i?a.apply(this,arguments)||0:l(this,e,arguments.length>1?arguments[1]:void 0)}})},d784:function(e,t,o){"use strict";o("ac1f");var r=o("6eeb"),l=o("d039"),n=o("b622"),s=o("9263"),a=o("9112"),i=n("species"),c=!l((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=n("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),m=!l((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var o="ab".split(e);return 2!==o.length||"a"!==o[0]||"b"!==o[1]}));e.exports=function(e,t,o,f){var d=n(e),b=!l((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),h=b&&!l((function(){var t=!1,o=/a/;return"split"===e&&(o={},o.constructor={},o.constructor[i]=function(){return o},o.flags="",o[d]=/./[d]),o.exec=function(){return t=!0,null},o[d](""),!t}));if(!b||!h||"replace"===e&&(!c||!u||p)||"split"===e&&!m){var g=/./[d],v=o(d,""[e],(function(e,t,o,r,l){return t.exec===s?b&&!l?{done:!0,value:g.call(t,o,r)}:{done:!0,value:e.call(o,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),S=v[0],C=v[1];r(String.prototype,e,S),r(RegExp.prototype,d,2==t?function(e,t){return C.call(e,this,t)}:function(e){return C.call(e,this)})}f&&a(RegExp.prototype[d],"sham",!0)}}}]);
//# sourceMappingURL=chunk-1ffacd5c.a8c1dc2a.js.map