(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ffacd5c"],{"14c3":function(e,t,o){var l=o("c6b6"),n=o("9263");e.exports=function(e,t){var o=e.exec;if("function"===typeof o){var r=o.call(e,t);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==l(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"25f0":function(e,t,o){"use strict";var l=o("6eeb"),n=o("825a"),r=o("d039"),a=o("ad6d"),i="toString",s=RegExp.prototype,c=s[i],u=r((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),f=c.name!=i;(u||f)&&l(RegExp.prototype,i,(function(){var e=n(this),t=String(e.source),o=e.flags,l=String(void 0===o&&e instanceof RegExp&&!("flags"in s)?a.call(e):o);return"/"+t+"/"+l}),{unsafe:!0})},"4de4":function(e,t,o){"use strict";var l=o("23e7"),n=o("b727").filter,r=o("1dde"),a=o("ae40"),i=r("filter"),s=a("filter");l({target:"Array",proto:!0,forced:!i||!s},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},5319:function(e,t,o){"use strict";var l=o("d784"),n=o("825a"),r=o("7b0b"),a=o("50c4"),i=o("a691"),s=o("1d80"),c=o("8aa5"),u=o("14c3"),f=Math.max,p=Math.min,m=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,b=function(e){return void 0===e?e:String(e)};l("replace",2,(function(e,t,o,l){var g=l.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,S=l.REPLACE_KEEPS_$0,v=g?"$":"$0";return[function(o,l){var n=s(this),r=void 0==o?void 0:o[e];return void 0!==r?r.call(o,n,l):t.call(String(n),o,l)},function(e,l){if(!g&&S||"string"===typeof l&&-1===l.indexOf(v)){var r=o(t,e,this,l);if(r.done)return r.value}var s=n(e),m=String(this),d="function"===typeof l;d||(l=String(l));var h=s.global;if(h){var x=s.unicode;s.lastIndex=0}var R=[];while(1){var y=u(s,m);if(null===y)break;if(R.push(y),!h)break;var _=String(y[0]);""===_&&(s.lastIndex=c(m,a(s.lastIndex),x))}for(var k="",A=0,w=0;w<R.length;w++){y=R[w];for(var L=String(y[0]),U=f(p(i(y.index),m.length),0),$=[],O=1;O<y.length;O++)$.push(b(y[O]));var E=y.groups;if(d){var N=[L].concat($,U,m);void 0!==E&&N.push(E);var T=String(l.apply(void 0,N))}else T=C(L,m,U,$,E,l);U>=A&&(k+=m.slice(A,U)+T,A=U+L.length)}return k+m.slice(A)}];function C(e,o,l,n,a,i){var s=l+e.length,c=n.length,u=h;return void 0!==a&&(a=r(a),u=d),t.call(i,u,(function(t,r){var i;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return o.slice(0,l);case"'":return o.slice(s);case"<":i=a[r.slice(1,-1)];break;default:var u=+r;if(0===u)return t;if(u>c){var f=m(u/10);return 0===f?t:f<=c?void 0===n[f-1]?r.charAt(1):n[f-1]+r.charAt(1):t}i=n[u-1]}return void 0===i?"":i}))}}))},6547:function(e,t,o){var l=o("a691"),n=o("1d80"),r=function(e){return function(t,o){var r,a,i=String(n(t)),s=l(o),c=i.length;return s<0||s>=c?e?"":void 0:(r=i.charCodeAt(s),r<55296||r>56319||s+1===c||(a=i.charCodeAt(s+1))<56320||a>57343?e?i.charAt(s):r:e?i.slice(s,s+2):a-56320+(r-55296<<10)+65536)}};e.exports={codeAt:r(!1),charAt:r(!0)}},"8aa5":function(e,t,o){"use strict";var l=o("6547").charAt;e.exports=function(e,t,o){return t+(o?l(e,t).length:1)}},9263:function(e,t,o){"use strict";var l=o("ad6d"),n=o("9f7f"),r=RegExp.prototype.exec,a=String.prototype.replace,i=r,s=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=s||u||c;f&&(i=function(e){var t,o,n,i,f=this,p=c&&f.sticky,m=l.call(f),d=f.source,h=0,b=e;return p&&(m=m.replace("y",""),-1===m.indexOf("g")&&(m+="g"),b=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(d="(?: "+d+")",b=" "+b,h++),o=new RegExp("^(?:"+d+")",m)),u&&(o=new RegExp("^"+d+"$(?!\\s)",m)),s&&(t=f.lastIndex),n=r.call(p?o:f,b),p?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=f.lastIndex,f.lastIndex+=n[0].length):f.lastIndex=0:s&&n&&(f.lastIndex=f.global?n.index+n[0].length:t),u&&n&&n.length>1&&a.call(n[0],o,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(n[i]=void 0)})),n}),e.exports=i},"9f7f":function(e,t,o){"use strict";var l=o("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=l((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=l((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a640:function(e,t,o){"use strict";var l=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&l((function(){o.call(null,t||function(){throw 1},1)}))}},a9c7:function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",{staticStyle:{"margin-top":"10px"}},[o("el-col",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[e._v(" Firefly-SubConverter "),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"github"},on:{click:e.goToProject}}),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"telegram"},on:{click:e.gotoTgChannel}}),o("div",{staticStyle:{display:"inline-block",position:"absolute",right:"20px"}},[e._v(" "+e._s(e.backendVersion)+" ")])],1),o("el-container",[o("el-form",{staticStyle:{width:"100%"},attrs:{model:e.form,"label-width":"120px","label-position":"left"}},[o("el-form-item",{attrs:{label:"模式设置:"}},[o("el-radio",{attrs:{label:"1"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("基础模式")]),o("el-radio",{attrs:{label:"2"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("进阶模式")])],1),o("el-form-item",{attrs:{label:"订阅链接:"}},[o("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"支持订阅或ss/ssr/vmess单链接。多个链接请每行一个或用 | 分隔"},on:{blur:e.saveSubUrl},model:{value:e.form.sourceSubUrl,callback:function(t){e.$set(e.form,"sourceSubUrl",t)},expression:"form.sourceSubUrl"}})],1),o("el-form-item",{attrs:{label:"客户端:"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:e.form.clientType,callback:function(t){e.$set(e.form,"clientType",t)},expression:"form.clientType"}},e._l(e.options.clientTypes,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"远程配置:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.remoteConfig,callback:function(t){e.$set(e.form,"remoteConfig",t)},expression:"form.remoteConfig"}},e._l(e.options.remoteConfig,(function(t){return o("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)})),1)],1),o("el-form-item",{attrs:{label:"后端地址:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.customBackend,callback:function(t){e.$set(e.form,"customBackend",t)},expression:"form.customBackend"}},e._l(e.options.customBackend,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),"2"===e.advanced?o("div",[o("el-form-item",{attrs:{label:"包含节点:"}},[o("el-input",{attrs:{placeholder:"节点名包含的关键字，支持正则"},model:{value:e.form.includeRemarks,callback:function(t){e.$set(e.form,"includeRemarks",t)},expression:"form.includeRemarks"}})],1),o("el-form-item",{attrs:{label:"排除节点:"}},[o("el-input",{attrs:{placeholder:"节点名不包含的关键字，支持正则"},model:{value:e.form.excludeRemarks,callback:function(t){e.$set(e.form,"excludeRemarks",t)},expression:"form.excludeRemarks"}})],1),o("el-form-item",{attrs:{label:"输出文件名:"}},[o("el-input",{attrs:{placeholder:"返回的订阅文件名"},model:{value:e.form.filename,callback:function(t){e.$set(e.form,"filename",t)},expression:"form.filename"}})],1),o("el-form-item",{attrs:{"label-width":"0px"}},[o("el-row",{attrs:{type:"flex"}},[o("el-col",[o("el-checkbox",{attrs:{label:"Emoji",border:""},model:{value:e.form.emoji,callback:function(t){e.$set(e.form,"emoji",t)},expression:"form.emoji"}})],1),o("el-popover",{attrs:{placement:"bottom"},model:{value:e.form.rule,callback:function(t){e.$set(e.form,"rule",t)},expression:"form.rule"}},[o("el-row",[o("el-checkbox",{attrs:{label:"展开规则"},model:{value:e.form.expand,callback:function(t){e.$set(e.form,"expand",t)},expression:"form.expand"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Classic Rule Provider"},model:{value:e.form.classic,callback:function(t){e.$set(e.form,"classic",t)},expression:"form.classic"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("Rule Provider 选项")])],1),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{placement:"bottom"},model:{value:e.form.extraset,callback:function(t){e.$set(e.form,"extraset",t)},expression:"form.extraset"}},[o("el-row",[o("el-checkbox",{attrs:{label:"启用 UDP"},model:{value:e.form.udp,callback:function(t){e.$set(e.form,"udp",t)},expression:"form.udp"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"节点类型"},model:{value:e.form.appendType,callback:function(t){e.$set(e.form,"appendType",t)},expression:"form.appendType"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"排序节点"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"过滤非法节点"},model:{value:e.form.fdn,callback:function(t){e.$set(e.form,"fdn",t)},expression:"form.fdn"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"TCP Fast Open"},model:{value:e.form.tfo,callback:function(t){e.$set(e.form,"tfo",t)},expression:"form.tfo"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Skip Cert Verify"},model:{value:e.form.scv,callback:function(t){e.$set(e.form,"scv",t)},expression:"form.scv"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"输出为 Node List"},model:{value:e.form.nodeList,callback:function(t){e.$set(e.form,"nodeList",t)},expression:"form.nodeList"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("节点处理")])],1),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{placement:"bottom"}},[o("el-row",[o("el-checkbox",{attrs:{label:"Surge.DoH"},model:{value:e.form.tpl.surge.doh,callback:function(t){e.$set(e.form.tpl.surge,"doh",t)},expression:"form.tpl.surge.doh"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Clash.DoH"},model:{value:e.form.tpl.clash.doh,callback:function(t){e.$set(e.form.tpl.clash,"doh",t)},expression:"form.tpl.clash.doh"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"网易云"},model:{value:e.form.insert,callback:function(t){e.$set(e.form,"insert",t)},expression:"form.insert"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("定制功能")])],1)],1)],1)],1):e._e(),o("div",{staticStyle:{"margin-top":"50px"}}),o("el-divider",{attrs:{"content-position":"center"}},[o("i",{staticClass:"el-icon-magic-stick"})]),o("el-form-item",{attrs:{label:"定制订阅:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.customSubUrl,callback:function(t){e.customSubUrl=t},expression:"customSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.customSubUrl,expression:"customSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{attrs:{label:"订阅短链接:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.curtomShortSubUrl,callback:function(t){e.curtomShortSubUrl=t},expression:"curtomShortSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.curtomShortSubUrl,expression:"curtomShortSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{staticStyle:{"margin-top":"40px","text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",disabled:0===e.form.sourceSubUrl.length},on:{click:e.makeUrl}},[e._v("生成订阅链接")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",loading:e.loading,disabled:0===e.customSubUrl.length},on:{click:e.makeShortUrl}},[e._v("生成短链接")])],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-upload",loading:e.loading},on:{click:function(t){e.dialogUploadConfigVisible=!0}}},[e._v("上传配置")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-connection",disabled:0===e.customSubUrl.length},on:{click:e.clashInstall}},[e._v("一键导入Clash")])],1)],1)],1)],1)],1)],1),o("el-dialog",{attrs:{visible:e.dialogUploadConfigVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"700px"},on:{"update:visible":function(t){e.dialogUploadConfigVisible=t}}},[o("div",{attrs:{slot:"title"},slot:"title"},[e._v(" Remote config upload "),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{trigger:"hover",placement:"right"}},[o("el-link",{attrs:{type:"primary",href:e.sampleConfig,target:"_blank",icon:"el-icon-info"}},[e._v("参考配置")]),o("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})],1)],1),o("el-form",{attrs:{"label-position":"left"}},[o("el-form-item",{attrs:{prop:"uploadConfig"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},maxlength:"10000","show-word-limit":""},model:{value:e.uploadConfig,callback:function(t){e.uploadConfig=t},expression:"uploadConfig"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.uploadConfig="",e.dialogUploadConfigVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary",disabled:0===e.uploadConfig.length},on:{click:e.confirmUploadConfig}},[e._v("确 定")])],1)],1)],1)},n=[],r=(o("4de4"),o("c975"),o("b64b"),o("d3b7"),o("ac1f"),o("25f0"),o("5319"),"https://github.com/LM-Firefly/sub-web"),a="https://raw.githubusercontent.com/tindy2013/subconverter/master/base/config/example_external_config.ini",i="https://github.com/tindy2013/subconverter/releases",s="https://firefly-sub.vercel.app/sub?",c="https://suo.yt/short",u="https://api.wcc.best/config/upload",f="https://t.me/subconverter_discuss",p={data:function(){var e={backendVersion:"",advanced:"1",isPC:!0,options:{clientTypes:{"Clash新参数":"clash&new_name=true","ClashR新参数":"clashr&new_name=true",Clash:"clash",ClashR:"clashr",Surge2:"surge&ver=2",Surge3:"surge&ver=3",Surge4:"surge&ver=4",Quantumult:"quan",QuantumultX:"quanx",Surfboard:"surfboard",Loon:"loon",ss:"ss",ssr:"ssr",ssd:"ssd",v2ray:"v2ray"},customBackend:{"localhost:25500 本地版":"http://localhost:25500/sub?","firefly-sub.vercel.app":"https://firefly-sub.vercel.app/sub?","firefly-sub.herokuapp.com":"https://firefly-sub.herokuapp.com/sub?"},backendOptions:[{value:"http://localhost:25500/sub?"},{value:"https://firefly-sub.vercel.app/sub?"},{value:"https://firefly-sub.herokuapp.com/sub?"}],remoteConfig:[{label:"默认",options:[{label:"不选,由接口提供方提供",value:""}]},{label:"LM-Firefly",options:[{label:"AIO",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/AIO.ini"},{label:"CordCloud",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/CordCloud.ini"}]},{label:"ACL4SSR",options:[{label:"ACL4SSR_Online 默认版 分组比较全 (与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"},{label:"ACL4SSR_Online_AdblockPlus 更多去广告 (与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"},{label:"ACL4SSR_Online_NoAuto 无自动测速 (与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"},{label:"ACL4SSR_Online_NoReject 无广告拦截规则 (与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"},{label:"ACL4SSR_Online_Mini 精简版 (与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"},{label:"ACL4SSR_Online_Mini_AdblockPlus.ini 精简版 更多去广告 (与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"},{label:"ACL4SSR_Online_Mini_NoAuto.ini 精简版 不带自动测速 (与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"},{label:"ACL4SSR_Online_Mini_Fallback.ini 精简版 带故障转移 (与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"},{label:"ACL4SSR_Online_Mini_MultiMode.ini 精简版 自动测速、故障转移、负载均衡 (与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"},{label:"ACL4SSR_Online_Full 全分组 重度用户使用 (与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"},{label:"ACL4SSR_Online_Full_NoAuto.ini 全分组 无自动测速 重度用户使用 (与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"},{label:"ACL4SSR_Online_Full_AdblockPlus 全分组 重度用户使用 更多去广告 (与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"},{label:"ACL4SSR_Online_Full_Netflix 全分组 重度用户使用 奈飞全量 (与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"},{label:"ACL4SSR 本地 默认版 分组比较全",value:"config/ACL4SSR.ini"},{label:"ACL4SSR_Mini 本地 精简版",value:"config/ACL4SSR_Mini.ini"},{label:"ACL4SSR_Mini_NoAuto.ini 本地 精简版+无自动测速",value:"config/ACL4SSR_Mini_NoAuto.ini"},{label:"ACL4SSR_Mini_Fallback.ini 本地 精简版+fallback",value:"config/ACL4SSR_Mini_Fallback.ini"},{label:"ACL4SSR_BackCN 本地 回国",value:"config/ACL4SSR_BackCN.ini"},{label:"ACL4SSR_NoApple 本地 无苹果分流",value:"config/ACL4SSR_NoApple.ini"},{label:"ACL4SSR_NoAuto 本地 无自动测速 ",value:"config/ACL4SSR_NoAuto.ini"},{label:"ACL4SSR_NoAuto_NoApple 本地 无自动测速&无苹果分流",value:"config/ACL4SSR_NoAuto_NoApple.ini"},{label:"ACL4SSR_NoMicrosoft 本地 无微软分流",value:"config/ACL4SSR_NoMicrosoft.ini"},{label:"ACL4SSR_WithGFW 本地 GFW列表",value:"config/ACL4SSR_WithGFW.ini"}]},{label:"universal",options:[{label:"No-Urltest",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/universal/no-urltest.ini"},{label:"Urltest",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/universal/urltest.ini"}]},{label:"customized",options:[{label:"Maying",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/maying.ini"},{label:"rixCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/rixcloud.ini"},{label:"Nirvana",value:"https://raw.githubusercontent.com/Mazetsz/ACL4SSR/master/Clash/config/V2rayPro.ini"},{label:"V2Pro",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/V2Pro.ini"},{label:"YoYu",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/yoyu.ini"},{label:"Ytoo",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ytoo.ini"},{label:"NyanCAT",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/nyancat.ini"},{label:"Nexitally",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/nexitally.ini"},{label:"SoCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/socloud.ini"},{label:"ARK",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ark.ini"},{label:"ssrCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ssrcloud.ini"},{label:"世葵Auto",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/SkslaPro-auto.ini"},{label:"世葵Balance",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/SkslaPro-Balance.ini"},{label:"贼船",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/zeichuan.ini"},{label:"布丁",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/pud.ini"}]},{label:"Special",options:[{label:"NeteaseUnblock(仅规则，No-Urltest)",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/special/netease.ini"},{label:"Basic(仅GEOIP CN + Final)",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/special/basic.ini"}]}]},form:{sourceSubUrl:"",clientType:"",customBackend:"",remoteConfig:"",excludeRemarks:"",includeRemarks:"",filename:"",emoji:!0,nodeList:!1,rule:!1,extraset:!1,sort:!1,udp:!1,tfo:!1,scv:!1,fdn:!1,appendType:!1,insert:!1,expand:!1,classic:!1,tpl:{surge:{doh:!1},clash:{doh:!1}}},loading:!1,customSubUrl:"",curtomShortSubUrl:"",dialogUploadConfigVisible:!1,uploadConfig:"",uploadPassword:"",myBot:f,sampleConfig:a},t=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(t){for(var o=e.options.remoteConfig[1].options,l=0;l<o.length;l++)o[l].label.length>10&&(o[l].label=o[l].label.replace(/\s.*/,""));for(var n={},r=Object.keys(e.options.customBackend),i=0;i<r.length;i++){var s=r[i].replace(/\(.*/,"");n[s]=e.options.customBackend[r[i]]}e.options.customBackend=n}return e},created:function(){document.title="Firefly-SubConverter",this.isPC=this.$getOS().isPc,this.form.sourceSubUrl=this.getLocalStorageItem("sourceSubUrl")},mounted:function(){this.form.clientType="clash&new_name=true",this.form.customBackend="https://firefly-sub.vercel.app/sub?",this.form.remoteConfig="https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/CordCloud.ini",this.getBackendVersion()},methods:{onCopy:function(){this.$message.success("Copied!")},goToProject:function(){window.open(r)},gotoTgChannel:function(){window.open(f)},gotoGayhub:function(){window.open(i)},gotoRemoteConfig:function(){window.open(a)},clashInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="clash://install-config?url=";window.open(e+encodeURIComponent(""!==this.curtomShortSubUrl?this.curtomShortSubUrl:this.customSubUrl))},surgeInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="surge://install-config?url=";window.open(e+this.customSubUrl)},makeUrl:function(){var e=this;if(""===this.form.sourceSubUrl||""===this.form.clientType)return this.$message.error("订阅链接与客户端为必填项"),!1;var t=""===this.form.customBackend?s:this.form.customBackend,o=""===this.form.remoteConfig?"":this.form.remoteConfig,l=this.form.sourceSubUrl;if(l=l.replace(/(\n|\r|\n\r)/g,"|"),-1!==l.indexOf("losadhwse")&&(-1!==t.indexOf("py6.pw")||-1!==t.indexOf("subconverter-web.now.sh")||-1!==t.indexOf("subconverter.herokuapp.com")||-1!==t.indexOf("api.wcc.best")))return this.$alert("此机场订阅已将该后端屏蔽，请自建后端转换。","转换错误提示",{confirmButtonText:"确定",callback:function(t){e.$message({type:"error",message:"action: ".concat(t)})}}),!1;this.customSubUrl=t+"target="+this.form.clientType+"&url="+encodeURIComponent(l)+"&insert="+this.form.insert,""!==o&&(this.customSubUrl+="&config="+encodeURIComponent(o)),"2"===this.advanced&&(""!==this.form.excludeRemarks&&(this.customSubUrl+="&exclude="+encodeURIComponent(this.form.excludeRemarks)),""!==this.form.includeRemarks&&(this.customSubUrl+="&include="+encodeURIComponent(this.form.includeRemarks)),""!==this.form.filename&&(this.customSubUrl+="&filename="+encodeURIComponent(this.form.filename)),this.form.appendType&&(this.customSubUrl+="&append_type="+this.form.appendType.toString()),this.customSubUrl+="&emoji="+this.form.emoji.toString()+"&list="+this.form.nodeList.toString()+"&udp="+this.form.udp.toString()+"&tfo="+this.form.tfo.toString()+"&scv="+this.form.scv.toString()+"&fdn="+this.form.fdn.toString()+"&sort="+this.form.sort.toString()+"&expand="+this.form.expand.toString()+"&classic="+this.form.classic.toString(),!0===this.form.tpl.surge.doh&&(this.customSubUrl+="&surge.doh=true"),"clash"===this.form.clientType&&(!0===this.form.tpl.clash.doh&&(this.customSubUrl+="&clash.doh=true"),this.customSubUrl+="&new_name="+this.form.new_name.toString())),this.$copyText(this.customSubUrl),this.$message.success("定制订阅已复制到剪贴板")},makeShortUrl:function(){var e=this;if(""===this.customSubUrl)return this.$message.warning("请先生成订阅链接，再获取对应短链接"),!1;this.loading=!0;var t=new FormData;t.append("longUrl",btoa(this.customSubUrl)),this.$axios.post(c,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.ShortUrl?(e.curtomShortSubUrl=t.data.ShortUrl,e.$copyText(t.data.ShortUrl),e.$message.success("短链接已复制到剪贴板")):e.$message.error("短链接获取失败："+t.data.Message)})).catch((function(){e.$message.error("短链接获取失败")})).finally((function(){e.loading=!1}))},confirmUploadConfig:function(){var e=this;if(""===this.uploadConfig)return this.$message.warning("远程配置不能为空"),!1;this.loading=!0;var t=new FormData;t.append("password",this.uploadPassword),t.append("config",this.uploadConfig),this.$axios.post(u,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.url?(e.$message.success("远程配置上传成功，配置链接已复制到剪贴板，有效期三个月望知悉"),e.form.remoteConfig=t.data.Url,e.$copyText(e.form.remoteConfig),e.dialogUploadConfigVisible=!1):e.$message.error("远程配置上传失败："+t.data.Message)})).catch((function(){e.$message.error("远程配置上传失败")})).finally((function(){e.loading=!1}))},backendSearch:function(e,t){var o=this.options.backendOptions,l=e?o.filter(this.createFilter(e)):o;t(l)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getBackendVersion:function(){var e=this;this.$axios.get(s.substring(0,s.length-5)+"/version").then((function(t){e.backendVersion=t.data.replace(/backend\n$/gm,""),e.backendVersion=e.backendVersion.replace("subconverter","")}))},saveSubUrl:function(){""!==this.form.sourceSubUrl&&this.setLocalStorageItem("sourceSubUrl",this.form.sourceSubUrl)},getLocalStorageItem:function(e){var t=+new Date,o=localStorage.getItem(e),l="";if(null!==o){var n=JSON.parse(o);n.expire>t?l=n.value:localStorage.removeItem(e)}return l},setLocalStorageItem:function(e,t){var o="86400",l=+new Date,n={setTime:l,ttl:parseInt(o),expire:l+1e3*o,value:t};localStorage.setItem(e,JSON.stringify(n))}}},m=p,d=o("2877"),h=Object(d["a"])(m,l,n,!1,null,null,null);t["default"]=h.exports},ac1f:function(e,t,o){"use strict";var l=o("23e7"),n=o("9263");l({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,o){"use strict";var l=o("825a");e.exports=function(){var e=l(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b64b:function(e,t,o){var l=o("23e7"),n=o("7b0b"),r=o("df75"),a=o("d039"),i=a((function(){r(1)}));l({target:"Object",stat:!0,forced:i},{keys:function(e){return r(n(e))}})},c975:function(e,t,o){"use strict";var l=o("23e7"),n=o("4d64").indexOf,r=o("a640"),a=o("ae40"),i=[].indexOf,s=!!i&&1/[1].indexOf(1,-0)<0,c=r("indexOf"),u=a("indexOf",{ACCESSORS:!0,1:0});l({target:"Array",proto:!0,forced:s||!c||!u},{indexOf:function(e){return s?i.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},d784:function(e,t,o){"use strict";o("ac1f");var l=o("6eeb"),n=o("d039"),r=o("b622"),a=o("9263"),i=o("9112"),s=r("species"),c=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=r("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),m=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var o="ab".split(e);return 2!==o.length||"a"!==o[0]||"b"!==o[1]}));e.exports=function(e,t,o,f){var d=r(e),h=!n((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),b=h&&!n((function(){var t=!1,o=/a/;return"split"===e&&(o={},o.constructor={},o.constructor[s]=function(){return o},o.flags="",o[d]=/./[d]),o.exec=function(){return t=!0,null},o[d](""),!t}));if(!h||!b||"replace"===e&&(!c||!u||p)||"split"===e&&!m){var g=/./[d],S=o(d,""[e],(function(e,t,o,l,n){return t.exec===a?h&&!n?{done:!0,value:g.call(t,o,l)}:{done:!0,value:e.call(o,t,l)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),v=S[0],C=S[1];l(String.prototype,e,v),l(RegExp.prototype,d,2==t?function(e,t){return C.call(e,this,t)}:function(e){return C.call(e,this)})}f&&i(RegExp.prototype[d],"sham",!0)}}}]);
//# sourceMappingURL=chunk-1ffacd5c.3e1276df.js.map