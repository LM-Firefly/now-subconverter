(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ffacd5c"],{"14c3":function(e,t,o){var l=o("c6b6"),a=o("9263");e.exports=function(e,t){var o=e.exec;if("function"===typeof o){var r=o.call(e,t);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==l(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"25f0":function(e,t,o){"use strict";var l=o("6eeb"),a=o("825a"),r=o("d039"),s=o("ad6d"),n="toString",i=RegExp.prototype,c=i[n],u=r((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),f=c.name!=n;(u||f)&&l(RegExp.prototype,n,(function(){var e=a(this),t=String(e.source),o=e.flags,l=String(void 0===o&&e instanceof RegExp&&!("flags"in i)?s.call(e):o);return"/"+t+"/"+l}),{unsafe:!0})},"4de4":function(e,t,o){"use strict";var l=o("23e7"),a=o("b727").filter,r=o("1dde"),s=o("ae40"),n=r("filter"),i=s("filter");l({target:"Array",proto:!0,forced:!n||!i},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5319:function(e,t,o){"use strict";var l=o("d784"),a=o("825a"),r=o("7b0b"),s=o("50c4"),n=o("a691"),i=o("1d80"),c=o("8aa5"),u=o("14c3"),f=Math.max,m=Math.min,b=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,d=/\$([$&'`]|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};l("replace",2,(function(e,t,o,l){var v=l.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=l.REPLACE_KEEPS_$0,S=v?"$":"$0";return[function(o,l){var a=i(this),r=void 0==o?void 0:o[e];return void 0!==r?r.call(o,a,l):t.call(String(a),o,l)},function(e,l){if(!v&&g||"string"===typeof l&&-1===l.indexOf(S)){var r=o(t,e,this,l);if(r.done)return r.value}var i=a(e),b=String(this),p="function"===typeof l;p||(l=String(l));var d=i.global;if(d){var x=i.unicode;i.lastIndex=0}var R=[];while(1){var y=u(i,b);if(null===y)break;if(R.push(y),!d)break;var w=String(y[0]);""===w&&(i.lastIndex=c(b,s(i.lastIndex),x))}for(var k="",A=0,_=0;_<R.length;_++){y=R[_];for(var L=String(y[0]),U=f(m(n(y.index),b.length),0),O=[],E=1;E<y.length;E++)O.push(h(y[E]));var I=y.groups;if(p){var $=[L].concat(O,U,b);void 0!==I&&$.push(I);var M=String(l.apply(void 0,$))}else M=C(L,b,U,O,I,l);U>=A&&(k+=b.slice(A,U)+M,A=U+L.length)}return k+b.slice(A)}];function C(e,o,l,a,s,n){var i=l+e.length,c=a.length,u=d;return void 0!==s&&(s=r(s),u=p),t.call(n,u,(function(t,r){var n;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return o.slice(0,l);case"'":return o.slice(i);case"<":n=s[r.slice(1,-1)];break;default:var u=+r;if(0===u)return t;if(u>c){var f=b(u/10);return 0===f?t:f<=c?void 0===a[f-1]?r.charAt(1):a[f-1]+r.charAt(1):t}n=a[u-1]}return void 0===n?"":n}))}}))},6547:function(e,t,o){var l=o("a691"),a=o("1d80"),r=function(e){return function(t,o){var r,s,n=String(a(t)),i=l(o),c=n.length;return i<0||i>=c?e?"":void 0:(r=n.charCodeAt(i),r<55296||r>56319||i+1===c||(s=n.charCodeAt(i+1))<56320||s>57343?e?n.charAt(i):r:e?n.slice(i,i+2):s-56320+(r-55296<<10)+65536)}};e.exports={codeAt:r(!1),charAt:r(!0)}},"8aa5":function(e,t,o){"use strict";var l=o("6547").charAt;e.exports=function(e,t,o){return t+(o?l(e,t).length:1)}},9263:function(e,t,o){"use strict";var l=o("ad6d"),a=o("9f7f"),r=RegExp.prototype.exec,s=String.prototype.replace,n=r,i=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=i||u||c;f&&(n=function(e){var t,o,a,n,f=this,m=c&&f.sticky,b=l.call(f),p=f.source,d=0,h=e;return m&&(b=b.replace("y",""),-1===b.indexOf("g")&&(b+="g"),h=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,d++),o=new RegExp("^(?:"+p+")",b)),u&&(o=new RegExp("^"+p+"$(?!\\s)",b)),i&&(t=f.lastIndex),a=r.call(m?o:f,h),m?a?(a.input=a.input.slice(d),a[0]=a[0].slice(d),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:i&&a&&(f.lastIndex=f.global?a.index+a[0].length:t),u&&a&&a.length>1&&s.call(a[0],o,(function(){for(n=1;n<arguments.length-2;n++)void 0===arguments[n]&&(a[n]=void 0)})),a}),e.exports=n},"9f7f":function(e,t,o){"use strict";var l=o("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=l((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=l((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a640:function(e,t,o){"use strict";var l=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&l((function(){o.call(null,t||function(){throw 1},1)}))}},a9c7:function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",{staticStyle:{"margin-top":"10px"}},[o("el-col",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[e._v(" Firefly-SubConverter "),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"github"},on:{click:e.goToProject}}),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"telegram"},on:{click:e.gotoTgChannel}}),o("div",{staticStyle:{display:"inline-block",position:"absolute",right:"20px"}},[e._v(" "+e._s(e.backendVersion)+" ")])],1),o("el-container",[o("el-form",{staticStyle:{width:"100%"},attrs:{model:e.form,"label-width":"80px","label-position":"left"}},[o("el-form-item",{attrs:{label:"模式设置:"}},[o("el-radio",{attrs:{label:"1"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("基础模式")]),o("el-radio",{attrs:{label:"2"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("进阶模式")])],1),o("el-form-item",{attrs:{label:"订阅链接:"}},[o("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"支持各种订阅链接或单节点链接，多个链接每行一个或用 | 分隔"},on:{blur:e.saveSubUrl},model:{value:e.form.sourceSubUrl,callback:function(t){e.$set(e.form,"sourceSubUrl",t)},expression:"form.sourceSubUrl"}})],1),o("el-form-item",{attrs:{label:"客户端项:"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:e.form.clientType,callback:function(t){e.$set(e.form,"clientType",t)},expression:"form.clientType"}},e._l(e.options.clientTypes,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"远程配置:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.remoteConfig,callback:function(t){e.$set(e.form,"remoteConfig",t)},expression:"form.remoteConfig"}},e._l(e.options.remoteConfig,(function(t){return o("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)})),1)],1),o("el-form-item",{attrs:{label:"后端地址:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.customBackend,callback:function(t){e.$set(e.form,"customBackend",t)},expression:"form.customBackend"}},e._l(e.options.customBackend,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),"2"===e.advanced?o("div",[o("el-form-item",{attrs:{label:"包含节点:"}},[o("el-input",{attrs:{placeholder:"节点名包含的关键字，支持正则"},model:{value:e.form.includeRemarks,callback:function(t){e.$set(e.form,"includeRemarks",t)},expression:"form.includeRemarks"}})],1),o("el-form-item",{attrs:{label:"排除节点:"}},[o("el-input",{attrs:{placeholder:"节点名不包含的关键字，支持正则"},model:{value:e.form.excludeRemarks,callback:function(t){e.$set(e.form,"excludeRemarks",t)},expression:"form.excludeRemarks"}})],1),o("el-form-item",{attrs:{label:"输出文件名:"}},[o("el-input",{attrs:{placeholder:"返回的订阅文件名"},model:{value:e.form.filename,callback:function(t){e.$set(e.form,"filename",t)},expression:"form.filename"}})],1),o("el-form-item",{attrs:{label:"TUN & DNS:"}},[o("el-input",{attrs:{placeholder:"tap | tun | cfa"},model:{value:e.form.clashdns,callback:function(t){e.$set(e.form,"clashdns",t)},expression:"form.clashdns"}})],1),o("el-form-item",{attrs:{"label-width":"0px"}},[o("el-row",{attrs:{type:"flex"}},[o("el-col",[o("el-checkbox",{attrs:{label:"Emoji",border:""},model:{value:e.form.emoji,callback:function(t){e.$set(e.form,"emoji",t)},expression:"form.emoji"}})],1),o("el-col",{staticStyle:{"margin-left":"10px"}},[o("el-checkbox",{attrs:{label:"Clash新字段",border:""},model:{value:e.form.new_name,callback:function(t){e.$set(e.form,"new_name",t)},expression:"form.new_name"}})],1),o("el-popover",{attrs:{placement:"bottom"},model:{value:e.form.extraset,callback:function(t){e.$set(e.form,"extraset",t)},expression:"form.extraset"}},[o("el-row",[o("el-checkbox",{attrs:{label:"启用 UDP"},model:{value:e.form.udp,callback:function(t){e.$set(e.form,"udp",t)},expression:"form.udp"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"节点类型"},model:{value:e.form.appendType,callback:function(t){e.$set(e.form,"appendType",t)},expression:"form.appendType"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"排序节点"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"过滤非法节点"},model:{value:e.form.fdn,callback:function(t){e.$set(e.form,"fdn",t)},expression:"form.fdn"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"TCP Fast Open"},model:{value:e.form.tfo,callback:function(t){e.$set(e.form,"tfo",t)},expression:"form.tfo"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Skip Cert Verify"},model:{value:e.form.scv,callback:function(t){e.$set(e.form,"scv",t)},expression:"form.scv"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"输出为 Node List"},model:{value:e.form.nodeList,callback:function(t){e.$set(e.form,"nodeList",t)},expression:"form.nodeList"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("节点处理")])],1),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{placement:"bottom"},model:{value:e.form.rule,callback:function(t){e.$set(e.form,"rule",t)},expression:"form.rule"}},[o("el-row",[o("el-checkbox",{attrs:{label:"展开规则"},model:{value:e.form.expand,callback:function(t){e.$set(e.form,"expand",t)},expression:"form.expand"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Classic Rule Provider"},model:{value:e.form.classic,callback:function(t){e.$set(e.form,"classic",t)},expression:"form.classic"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("Rule Provider 选项")])],1)],1)],1)],1):e._e(),o("div",{staticStyle:{"margin-top":"50px"}}),o("el-divider",{attrs:{"content-position":"center"}},[o("i",{staticClass:"el-icon-magic-stick"})]),o("el-form-item",{attrs:{label:"定制订阅:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.customSubUrl,callback:function(t){e.customSubUrl=t},expression:"customSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.customSubUrl,expression:"customSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{staticStyle:{"margin-top":"40px","text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",disabled:0===e.form.sourceSubUrl.length},on:{click:e.makeUrl}},[e._v("生成订阅链接")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-connection",disabled:0===e.customSubUrl.length},on:{click:e.clashInstall}},[e._v("一键导入Clash")])],1)],1)],1)],1)],1)],1)],1)},a=[],r=(o("4de4"),o("c975"),o("b64b"),o("d3b7"),o("ac1f"),o("25f0"),o("5319"),"https://github.com/LM-Firefly/sub-web"),s="https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/AIO.ini",n="https://github.com/tindy2013/subconverter/releases",i="https://firefly-sub.vercel.app/sub?",c="https://t.me/subconverter_discuss",u={data:function(){var e={backendVersion:"",advanced:"1",isPC:!0,options:{clientTypes:{Clash:"clash",ClashR:"clashr",Surge2:"surge&ver=2",Surge3:"surge&ver=3",Surge4:"surge&ver=4",Quantumult:"quan","Quantumult X":"quanx",Loon:"loon",Mellow:"mellow",Surfboard:"surfboard","Shadowsocks(SIP002)":"ss","Shadowsocks Android(SIP008)":"sssub",ShadowsocksR:"ssr",ShadowsocksD:"ssd",V2Ray:"v2ray",Trojan:"trojan","混合订阅（mixed）":"mixed","自动判断客户端":"auto"},customBackend:{"localhost:25500 本地版":"http://localhost:25500/sub?","firefly-sub.vercel.app":"https://firefly-sub.vercel.app/sub?","firefly-sub.herokuapp.com":"https://firefly-sub.herokuapp.com/sub?","sub.ccsub.site(CordCloud机场提供)":"https://subweb.ccsub.site/sub?","subcon.dlj.tf(subconverter作者提供1)":"https://subcon.dlj.tf/sub?","subconverter-web.now.sh":"https://subconverter-web.now.sh/sub?","subconverter.herokuapp.com":"https://subconverter.herokuapp.com/sub?","api.dler.io(sub作者&lhie1提供-稳定)":"https://api.dler.io/sub?","api.wcc.best(sub-web作者提供-稳定)":"https://api.wcc.best/sub?"},backendOptions:[{value:"http://localhost:25500/sub?"},{value:"https://firefly-sub.vercel.app/sub?"},{value:"https://firefly-sub.herokuapp.com/sub?"},{value:"https://subweb.ccsub.site/sub?"},{value:"https://subcon.dlj.tf/sub?"},{value:"https://subconverter-web.now.sh/sub?"},{value:"https://subconverter.herokuapp.com/sub?"},{value:"https://api.wcc.best/sub?"}],remoteConfig:[{label:"默认",options:[{label:"不选，由接口提供方提供",value:""}]},{label:"LM-Firefly (Online, 与Github 同步)",options:[{label:"AIO",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/AIO.ini"},{label:"AIO-NoReject",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/AIO-NoReject.ini"},{label:"CordCloud",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/CordCloud.ini"},{label:"CordCloud-NoReject",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/CordCloud-NoReject.ini"},{label:"AIO-Classic",value:"https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/AIO-Classic.ini"}]},{label:"ACL4SSR (Online, 与Github 同步)",options:[{label:"ACL4SSR 默认版 分组比较全",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"},{label:"ACL4SSR_AdblockPlus 更多去广告",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"},{label:"ACL4SSR_Full_MultiMode 全分组 自动测速、故障转移、负载均衡",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"},{label:"ACL4SSR_Full 全分组 重度用户使用",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"},{label:"ACL4SSR_Full_AdblockPlus 全分组 重度用户使用 更多去广告",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"},{label:"ACL4SSR_Full_Netflix 全分组 重度用户使用 奈飞全量",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"},{label:"ACL4SSR_Full_NoAuto 全分组 无自动测速 重度用户使用",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"},{label:"ACL4SSR_Mini 精简版",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"},{label:"ACL4SSR_Mini_MultiCountry 精简版 带港美日国家",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini"},{label:"ACL4SSR_Mini_AdblockPlus 精简版 更多去广告",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"},{label:"ACL4SSR_Mini_Fallback 精简版 带故障转移",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"},{label:"ACL4SSR_Mini_MultiMode 精简版 自动测速、故障转移、负载均衡",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"},{label:"ACL4SSR_Mini_NoAuto 精简版 不带自动测速",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"},{label:"ACL4SSR_NoAuto 无自动测速",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"},{label:"ACL4SSR_NoReject 无广告拦截规则",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"}]},{label:"机场定制",options:[{label:"EXFLUX",value:"https://gist.github.com/jklolixxs/16964c46bad1821c70fa97109fd6faa2/raw/EXFLUX.ini"},{label:"NaNoport",value:"https://gist.github.com/jklolixxs/32d4e9a1a5d18a92beccf3be434f7966/raw/NaNoport.ini"},{label:"CordCloud",value:"https://gist.github.com/jklolixxs/dfbe0cf71ffc547557395c772836d9a8/raw/CordCloud.ini"},{label:"BigAirport",value:"https://gist.github.com/jklolixxs/e2b0105c8be6023f3941816509a4c453/raw/BigAirport.ini"},{label:"跑路云",value:"https://gist.github.com/jklolixxs/9f6989137a2cfcc138c6da4bd4e4cbfc/raw/PaoLuCloud.ini"},{label:"WaveCloud",value:"https://gist.github.com/jklolixxs/fccb74b6c0018b3ad7b9ed6d327035b3/raw/WaveCloud.ini"},{label:"几鸡",value:"https://gist.github.com/jklolixxs/bfd5061dceeef85e84401482f5c92e42/raw/JiJi.ini"},{label:"四季加速",value:"https://gist.github.com/jklolixxs/6ff6e7658033e9b535e24ade072cf374/raw/SJ.ini"},{label:"ImmTelecom",value:"https://gist.github.com/jklolixxs/24f4f58bb646ee2c625803eb916fe36d/raw/ImmTelecom.ini"},{label:"AmyTelecom",value:"https://gist.github.com/jklolixxs/b53d315cd1cede23af83322c26ce34ec/raw/AmyTelecom.ini"},{label:"Miaona",value:"https://gist.github.com/jklolixxs/ff8ddbf2526cafa568d064006a7008e7/raw/Miaona.ini"},{label:"Foo&Friends",value:"https://gist.github.com/jklolixxs/df8fda1aa225db44e70c8ac0978a3da4/raw/Foo&Friends.ini"},{label:"ABCloud",value:"https://gist.github.com/jklolixxs/b1f91606165b1df82e5481b08fd02e00/raw/ABCloud.ini"},{label:"希腊奶",value:"https://raw.githubusercontent.com/MegumiUUU/megumiclash/master/common.ini"},{label:"路飞船长",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Luffy_balance.ini"},{label:"CNIX",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/SSRcloud.ini"},{label:"Nirvana",value:"https://raw.githubusercontent.com/Mazetsz/ACL4SSR/master/Clash/config/V2rayPro.ini"},{label:"V2Pro",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/V2Pro.ini"},{label:"史迪仔-自动测速",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Stitch.ini"},{label:"史迪仔-负载均衡",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/Stitch-Balance.ini"},{label:"Maying",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/maying.ini"},{label:"rixCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/rixcloud.ini"},{label:"YoYu",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/yoyu.ini"},{label:"Ytoo",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ytoo.ini"},{label:"w8ves",value:"https://raw.nameless13.com/api/public/dl/M-We_Fn7/w8ves.ini"},{label:"NyanCAT",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/nyancat.ini"},{label:"Nexitally",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/nexitally.ini"},{label:"布丁",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/pud.ini"},{label:"SoCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/socloud.ini"},{label:"ARK",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ark.ini"},{label:"贼船",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/zeichuan.ini"},{label:"N3RO",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/n3ro_optimized.ini"},{label:"Scholar",value:"https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/scholar_optimized.ini"},{label:"便利店",value:"https://subweb.oss-cn-hongkong.aliyuncs.com/RemoteConfig/customized/convenience.ini"},{label:"ssrCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ssrcloud.ini"}]},{label:"Special",options:[{label:"NeteaseUnblock(仅规则，No-Urltest)",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/special/netease.ini"},{label:"Basic(仅GEOIP CN + Final)",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/special/basic.ini"}]}]},form:{sourceSubUrl:"",clientType:"",customBackend:"",remoteConfig:"",excludeRemarks:"",includeRemarks:"",filename:"",clashdns:"",emoji:!0,nodeList:!1,rule:!1,extraset:!1,sort:!1,udp:!1,tfo:!1,scv:!1,fdn:!1,appendType:!1,insert:!1,expand:!1,classic:!1,new_name:!0},loading:!1,customSubUrl:"",myBot:c,sampleConfig:s},t=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(t){for(var o=e.options.remoteConfig[1].options,l=0;l<o.length;l++)o[l].label.length>10&&(o[l].label=o[l].label.replace(/\s.*/,""));for(var a={},r=Object.keys(e.options.customBackend),n=0;n<r.length;n++){var i=r[n].replace(/\(.*/,"");a[i]=e.options.customBackend[r[n]]}e.options.customBackend=a}return e},created:function(){document.title="Firefly-SubConverter",this.isPC=this.$getOS().isPc,this.form.sourceSubUrl=this.getLocalStorageItem("sourceSubUrl")},mounted:function(){this.form.clientType="clash",this.form.customBackend="https://firefly-sub.vercel.app/sub?",this.notify(),this.form.remoteConfig="https://raw.githubusercontent.com/LM-Firefly/Rules/master/Subconverter-base/CordCloud.ini",this.getBackendVersion()},methods:{onCopy:function(){this.$message.success("Copied!")},goToProject:function(){window.open(r)},gotoTgChannel:function(){window.open(c)},gotoGayhub:function(){window.open(n)},gotoRemoteConfig:function(){window.open(s)},clashInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="clash://install-config?url=";window.open(e+encodeURIComponent(""!==this.curtomShortSubUrl?this.curtomShortSubUrl:this.customSubUrl))},surgeInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="surge://install-config?url=";window.open(e+this.customSubUrl)},makeUrl:function(){var e=this;if(""===this.form.sourceSubUrl||""===this.form.clientType)return this.$message.error("订阅链接与客户端为必填项"),!1;var t=""===this.form.customBackend?i:this.form.customBackend,o=""===this.form.remoteConfig?"":this.form.remoteConfig,l=this.form.sourceSubUrl;if(l=l.replace(/(\n|\r|\n\r)/g,"|"),-1!==l.indexOf("losadhwse")&&(-1!==t.indexOf("py6.pw")||-1!==t.indexOf("subconverter-web.now.sh")||-1!==t.indexOf("subconverter.herokuapp.com")||-1!==t.indexOf("api.wcc.best")))return this.$alert("此机场订阅已将该后端屏蔽，请自建后端转换。","转换错误提示",{confirmButtonText:"确定",callback:function(t){e.$message({type:"error",message:"action: ".concat(t)})}}),!1;this.customSubUrl=t+"target="+this.form.clientType+"&url="+encodeURIComponent(l)+"&insert="+this.form.insert,""!==o&&(this.customSubUrl+="&config="+encodeURIComponent(o)),"2"===this.advanced&&(""!==this.form.excludeRemarks&&(this.customSubUrl+="&exclude="+encodeURIComponent(this.form.excludeRemarks)),""!==this.form.includeRemarks&&(this.customSubUrl+="&include="+encodeURIComponent(this.form.includeRemarks)),""!==this.form.filename&&(this.customSubUrl+="&filename="+encodeURIComponent(this.form.filename)),this.form.appendType&&(this.customSubUrl+="&append_type="+this.form.appendType.toString()),""!==this.form.clashdns&&(this.customSubUrl+="&clash.dns="+encodeURIComponent(this.form.clashdns)),this.customSubUrl+="&emoji="+this.form.emoji.toString()+"&list="+this.form.nodeList.toString()+"&udp="+this.form.udp.toString()+"&tfo="+this.form.tfo.toString()+"&scv="+this.form.scv.toString()+"&fdn="+this.form.fdn.toString()+"&sort="+this.form.sort.toString()+"&expand="+this.form.expand.toString()+"&classic="+this.form.classic.toString(),"clash"===this.form.clientType&&(this.customSubUrl+="&new_name="+this.form.new_name.toString())),this.$copyText(this.customSubUrl),this.$message.success("定制订阅已复制到剪贴板")},notify:function(){var e=this.$createElement;this.$notify({title:"隐私提示",type:"warning",message:e("i",{style:"color: teal"},"各种订阅链接（短链接服务除外）生成纯前端实现，无隐私问题。默认提供后端转换服务，隐私担忧者请自行搭建后端服务。")})},backendSearch:function(e,t){var o=this.options.backendOptions,l=e?o.filter(this.createFilter(e)):o;t(l)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getBackendVersion:function(){var e=this;this.$axios.get(i.substring(0,i.length-5)+"/version").then((function(t){e.backendVersion=t.data.replace(/backend\n$/gm,""),e.backendVersion=e.backendVersion.replace("subconverter","")}))},saveSubUrl:function(){""!==this.form.sourceSubUrl&&this.setLocalStorageItem("sourceSubUrl",this.form.sourceSubUrl)},getLocalStorageItem:function(e){var t=+new Date,o=localStorage.getItem(e),l="";if(null!==o){var a=JSON.parse(o);a.expire>t?l=a.value:localStorage.removeItem(e)}return l},setLocalStorageItem:function(e,t){var o="86400",l=+new Date,a={setTime:l,ttl:parseInt(o),expire:l+1e3*o,value:t};localStorage.setItem(e,JSON.stringify(a))}}},f=u,m=o("2877"),b=Object(m["a"])(f,l,a,!1,null,null,null);t["default"]=b.exports},ac1f:function(e,t,o){"use strict";var l=o("23e7"),a=o("9263");l({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,o){"use strict";var l=o("825a");e.exports=function(){var e=l(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b64b:function(e,t,o){var l=o("23e7"),a=o("7b0b"),r=o("df75"),s=o("d039"),n=s((function(){r(1)}));l({target:"Object",stat:!0,forced:n},{keys:function(e){return r(a(e))}})},c975:function(e,t,o){"use strict";var l=o("23e7"),a=o("4d64").indexOf,r=o("a640"),s=o("ae40"),n=[].indexOf,i=!!n&&1/[1].indexOf(1,-0)<0,c=r("indexOf"),u=s("indexOf",{ACCESSORS:!0,1:0});l({target:"Array",proto:!0,forced:i||!c||!u},{indexOf:function(e){return i?n.apply(this,arguments)||0:a(this,e,arguments.length>1?arguments[1]:void 0)}})},d784:function(e,t,o){"use strict";o("ac1f");var l=o("6eeb"),a=o("d039"),r=o("b622"),s=o("9263"),n=o("9112"),i=r("species"),c=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=r("replace"),m=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),b=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var o="ab".split(e);return 2!==o.length||"a"!==o[0]||"b"!==o[1]}));e.exports=function(e,t,o,f){var p=r(e),d=!a((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),h=d&&!a((function(){var t=!1,o=/a/;return"split"===e&&(o={},o.constructor={},o.constructor[i]=function(){return o},o.flags="",o[p]=/./[p]),o.exec=function(){return t=!0,null},o[p](""),!t}));if(!d||!h||"replace"===e&&(!c||!u||m)||"split"===e&&!b){var v=/./[p],g=o(p,""[e],(function(e,t,o,l,a){return t.exec===s?d&&!a?{done:!0,value:v.call(t,o,l)}:{done:!0,value:e.call(o,t,l)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:m}),S=g[0],C=g[1];l(String.prototype,e,S),l(RegExp.prototype,p,2==t?function(e,t){return C.call(e,this,t)}:function(e){return C.call(e,this)})}f&&n(RegExp.prototype[p],"sham",!0)}}}]);
//# sourceMappingURL=chunk-1ffacd5c.eb1c5994.js.map