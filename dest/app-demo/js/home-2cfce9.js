webpackJsonp([3],{275:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),s=i.value}catch(u){return void n(u)}return i.done?void e(s):Promise.resolve(s).then((function(e){r("next",e)}),(function(e){r("throw",e)}))}return r("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise(function(t){return setTimeout(t,e)})}function l(e){var t=e.state,n=e.handlers,r=t.form2;return h["default"].createElement("div",null,h["default"].createElement(P.Style,{name:"main"}),h["default"].createElement(P.Preload,{name:"stats"}),h["default"].createElement(E["default"],null),h["default"].createElement("h1",null,t.text," ",t.count),h["default"].createElement("div",null,h["default"].createElement("button",{onClick:n.handleIncre},"加一"),h["default"].createElement("button",{onClick:n.handleDecre},"减一"),h["default"].createElement("button",{onClick:n.handleIncreAsync},"异步加一"),h["default"].createElement("button",{onClick:n.handleDecreAsync},"异步减一"),h["default"].createElement("button",{onClick:n.handleToggle},t.isOn?"关闭定时器":"打开定时器")),h["default"].createElement("div",null,"form1-name:",h["default"].createElement(P.Input,{name:"form1.name"}),"form1-pass:",h["default"].createElement(P.Input,{name:"form1.pass"})),h["default"].createElement("div",null,"form2-name:",h["default"].createElement(P.Input,{name:"form2.name",check:I.isNotEmpty,style:{borderColor:r.name.isWarn?"red":null}}),"form2-email:",h["default"].createElement(P.Input,{name:"form2.email",check:I.isEmail,style:{borderColor:r.email.isWarn?"red":null}}),"form2-pass:",h["default"].createElement(P.Input,{name:"form2.pass",check:I.isNotEmpty,style:{borderColor:r.pass.isWarn?"red":null}}),"form2-number:",h["default"].createElement(P.Input,{name:"form2.number",check:I.isNumeric,style:{borderColor:r.number.isWarn?"red":null}})),h["default"].createElement("div",null,h["default"].createElement("button",{onClick:n.handleCheckAll},"检查 form2 的全部表单的正确性")," ",h["default"].createElement("button",{onClick:n.handleClearWarning},"清空 form2 的全部表单警示样式")),h["default"].createElement("div",null,t.form3.map((function(e,t){return h["default"].createElement("div",{key:t},"name: ",h["default"].createElement(P.Input,{name:"form3."+t+".name"}),"value: ",h["default"].createElement(P.Input,{name:"form3."+t+".value"}))}))),!!t.imgSrc&&h["default"].createElement("img",{src:t.imgSrc}),h["default"].createElement("div",null))}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=(function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}})(),f=n(200),d=r(f),m=n(201),h=r(m),y=n(1),v=(r(y),n(276)),g=(r(v),n(207)),b=r(g),T=n(279),E=r(T),P=n(214),C=n(280),I=(r(C),{isNotEmpty:function(e){return!!e},isEmail:function(e){return/.*@.*/.test(e)},isNumeric:function(e){return!isNaN(Number(e))}}),w=(function(e){function t(){var e,n,r,s,p=this;a(this,t);for(var f=arguments.length,d=Array(f),m=0;m<f;m++)d[m]=arguments[m];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(d))),r.preload={main:"/css/main.css",stats:"/stats.json"},r.View=l,r.initialState={text:"首页",count:10,isOn:!0,stats:null,date:"",form1:{name:"",pass:""},form2:{name:{value:"",isValid:!1,isWarn:!1},email:{value:"",isValid:!1,isWarn:!1},pass:{value:"",isValid:!1,isWarn:!1},number:{value:"",isValid:!1,isWarn:!1}},form3:[{name:"1",value:"1"},{name:"2",value:"2"},{name:"3",value:"3"}],imgSrc:null},r.actions={INCREMENT:function(e){return c({},e,{count:e.count+1})},DECREMENT:function(e){return c({},e,{count:e.count-1})},INCREMENT_ASYNC:function(e){var t=this;return o(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(1e3);case 2:return e.abrupt("return",t.INCREMENT);case 3:case"end":return e.stop()}}),n,t)})))()},DECREMENT_ASYNC:function(e){var t=this;return o(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(1e3);case 2:return e.abrupt("return",t.DECREMENT);case 3:case"end":return e.stop()}}),n,t)})))()},TOGGLE_TIMER:function(e){return c({},e,{isOn:!e.isOn})}},r.handleIncre=function(){var e=r.store.actions.INCREMENT;e()},r.handleIncreAsync=o(regeneratorRuntime.mark((function h(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.store.actions.INCREMENT_ASYNC,t.next=3,e();case 3:case 4:case"end":return t.stop()}}),h,p)}))),r.handleDecre=function(){var e=r.store.actions.DECREMENT;e()},r.handleDecreAsync=function(){var e=r.store.actions.DECREMENT_ASYNC;e()},r.handleToggle=function(){var e=r.store.actions.TOGGLE_TIMER;e();var t=r.store.getState(),n=t.isOn;n?r.setTimer():r.clearTimer()},r.handleUpload=function(e){var t=e.FileFtpPath,n=r.store.actions.UPDATE_STATE,o=r.ftpToHttp(t);n({imgSrc:o})},r.handleCheckAll=function(e){var t=r.store.getState(),n=r.store.actions.UPDATE_STATE,o=b["default"].mapValues(t.form2,(function(e,t){return c({},e,{isWarn:!e.isValid})}));n({form2:o})},r.handleClearWarning=function(e){var t=r.store.getState(),n=r.store.actions.UPDATE_STATE,o=b["default"].mapValues(t.form2,(function(e,t){return c({},e,{isWarn:!1})}));n({form2:o});b["default"].mapValues(t.form2,(function(e){return e.value}))},s=n,i(r,s)}return s(t,e),p(t,[{key:"shouldComponentCreate",value:function(){}},{key:"componentWillCreate",value:function(){}},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:(function(){function e(){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),n,this)})));return e})()},{key:"componentWillUpdate",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"shouldComponentUpdate",value:function(){}},{key:"pageWillLeave",value:function(){this.clearTimer()}},{key:"windowWillUnload",value:function(){}},{key:"setTimer",value:function(){var e=this.store.actions.INCREMENT;this.timer=setInterval(e,1e3)}},{key:"clearTimer",value:function(){clearInterval(this.timer)}}]),t})(d["default"]);t["default"]=w},280:function(e,t,n){"use strict";e.exports=n(281)},281:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){}Object.defineProperty(t,"__esModule",{value:!0});var a=n(282),i=r(a),s=n(201),u=r(s),l=n(320),c=r(l),p=n(328),f=r(p),d=u["default"].createClass({displayName:"Upload",propTypes:{component:s.PropTypes.string,style:s.PropTypes.object,prefixCls:s.PropTypes.string,action:s.PropTypes.string,name:s.PropTypes.string,multipart:s.PropTypes.bool,onError:s.PropTypes.func,onSuccess:s.PropTypes.func,onProgress:s.PropTypes.func,onStart:s.PropTypes.func,data:s.PropTypes.oneOfType([s.PropTypes.object,s.PropTypes.func]),headers:s.PropTypes.object,accept:s.PropTypes.string,multiple:s.PropTypes.bool,disabled:s.PropTypes.bool,beforeUpload:s.PropTypes.func,customRequest:s.PropTypes.func,onReady:s.PropTypes.func,withCredentials:s.PropTypes.bool,supportServerRender:s.PropTypes.bool},getDefaultProps:function(){return{component:"span",prefixCls:"rc-upload",data:{},headers:{},name:"file",multipart:!1,onReady:o,onStart:o,onError:o,onSuccess:o,supportServerRender:!1,multiple:!1,beforeUpload:null,customRequest:null,withCredentials:!1}},getInitialState:function(){return{Component:null}},componentDidMount:function(){this.props.supportServerRender&&this.setState({Component:this.getComponent()},this.props.onReady)},getComponent:function(){return"undefined"!=typeof FormData?c["default"]:f["default"]},abort:function(e){this.refs.inner.abort(e)},render:function(){if(this.props.supportServerRender){var e=this.state.Component;return e?u["default"].createElement(e,(0,i["default"])({},this.props,{ref:"inner"})):null}var t=this.getComponent();return u["default"].createElement(t,(0,i["default"])({},this.props,{ref:"inner"}))}});t["default"]=d,e.exports=t["default"]},282:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var o=n(283),a=r(o);t["default"]=a["default"]||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},283:function(e,t,n){e.exports={"default":n(284),__esModule:!0}},284:function(e,t,n){n(285),e.exports=n(288).Object.assign},285:[653,286,301],286:function(e,t,n){var r=n(287),o=n(288),a=n(289),i=n(291),s="prototype",u=function(e,t,n){var l,c,p,f=e&u.F,d=e&u.G,m=e&u.S,h=e&u.P,y=e&u.B,v=e&u.W,g=d?o:o[t]||(o[t]={}),b=g[s],T=d?r:m?r[t]:(r[t]||{})[s];d&&(n=t);for(l in n)c=!f&&T&&void 0!==T[l],c&&l in g||(p=c?T[l]:n[l],g[l]=d&&"function"!=typeof T[l]?n[l]:y&&c?a(p,r):v&&T[l]==p?(function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[s]=e[s],t})(p):h&&"function"==typeof p?a(Function.call,p):p,h&&((g.virtual||(g.virtual={}))[l]=p,e&u.R&&b&&!b[l]&&i(b,l,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},287:339,288:344,289:[641,290],290:356,291:[635,292,300,296],292:[636,293,295,299,296],293:[637,294],294:348,295:[638,296,297,298],296:[634,297],297:342,298:[639,294,287],299:[640,294],300:352,301:[654,302,317,318,319,306,297],302:[643,303,316],303:[644,304,305,309,313],304:340,305:[645,306,308],306:[646,307],307:369,308:370,309:[647,305,310,312],310:[648,311],311:373,312:[649,311],313:[650,314,315],314:[642,287],315:354,316:376,317:378,318:379,319:[652,308],320:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(282),a=r(o),i=n(321),s=r(i),u=n(201),l=r(u),c=n(325),p=r(c),f=n(326),d=r(f),m=n(327),h=r(m),y=l["default"].createClass({displayName:"AjaxUploader",propTypes:{component:u.PropTypes.string,style:u.PropTypes.object,prefixCls:u.PropTypes.string,className:u.PropTypes.string,multiple:u.PropTypes.bool,disabled:u.PropTypes.bool,accept:u.PropTypes.string,children:u.PropTypes.any,onStart:u.PropTypes.func,data:u.PropTypes.oneOfType([u.PropTypes.object,u.PropTypes.func]),headers:u.PropTypes.object,beforeUpload:u.PropTypes.func,customRequest:u.PropTypes.func,onProgress:u.PropTypes.func,withCredentials:u.PropTypes.bool},getInitialState:function(){return this.reqs={},{uid:(0,h["default"])()}},componentWillUnmount:function(){this.abort()},onChange:function(e){var t=e.target.files;this.uploadFiles(t),this.reset()},onClick:function(){var e=this.refs.file;e&&e.click()},onKeyDown:function(e){"Enter"===e.key&&this.onClick()},onFileDrop:function(e){if("dragover"===e.type)return void e.preventDefault();var t=e.dataTransfer.files;this.uploadFiles(t),e.preventDefault()},uploadFiles:function(e){for(var t=Array.prototype.slice.call(e),n=t.length,r=0;r<n;r++){var o=t[r];o.uid=(0,h["default"])(),this.upload(o,t)}},upload:function(e,t){var n=this,r=this.props;if(!r.beforeUpload)return setTimeout((function(){return n.post(e)}),0);var o=r.beforeUpload(e,t);o&&o.then?o.then((function(t){var r=Object.prototype.toString.call(t);"[object File]"===r||"[object Blob]"===r?n.post(t):n.post(e)}))["catch"]((function(e){console&&void 0})):o!==!1&&setTimeout((function(){return n.post(e)}),0)},post:function(e){var t=this;if(this.isMounted()){var n=this.props,r=n.data,o=n.onStart,a=n.onProgress;"function"==typeof r&&(r=r(e));var i=e.uid,s=n.customRequest||d["default"];this.reqs[i]=s({action:n.action,filename:n.name,file:e,data:r,headers:n.headers,withCredentials:n.withCredentials,onProgress:a?function(t){a(t,e)}:null,onSuccess:function(r){delete t.reqs[i],n.onSuccess(r,e)},onError:function(r,o){delete t.reqs[i],n.onError(r,o,e)}}),o(e)}},reset:function(){this.setState({uid:(0,h["default"])()})},abort:function(e){var t=this.reqs;if(e){var n=e;e&&e.uid&&(n=e.uid),t[n]&&(t[n].abort(),delete t[n])}else Object.keys(t).forEach((function(e){t[e]&&t[e].abort(),delete t[e]}))},render:function(){var e,t=this.props,n=t.component,r=t.prefixCls,o=t.className,i=t.disabled,u=t.style,c=t.multiple,f=t.accept,d=t.children,m=(0,p["default"])((e={},(0,s["default"])(e,r,!0),(0,s["default"])(e,r+"-disabled",i),(0,s["default"])(e,o,o),e)),h=i?{}:{onClick:this.onClick,onKeyDown:this.onKeyDown,onDrop:this.onFileDrop,onDragOver:this.onFileDrop,tabIndex:"0"};return l["default"].createElement(n,(0,a["default"])({},h,{className:m,role:"button",style:u}),l["default"].createElement("input",{type:"file",ref:"file",key:this.state.uid,style:{display:"none"},accept:f,multiple:c,onChange:this.onChange}),d)}});t["default"]=y,e.exports=t["default"]},321:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var o=n(322),a=r(o);t["default"]=function(e,t,n){return t in e?(0,a["default"])(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},322:function(e,t,n){e.exports={"default":n(323),__esModule:!0}},323:function(e,t,n){n(324);var r=n(288).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},324:[651,286,296,292],326:function(e,t){"use strict";function n(e,t){var n="cannot post "+e.action+" "+t.status+"'",r=new Error(n);return r.status=t.status,r.method="post",r.url=e.action,r}function r(e){var t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(n){return t}}function o(e){var t=new XMLHttpRequest;e.onProgress&&t.upload&&(t.upload.onprogress=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),e.onProgress(t)});var o=new FormData;e.data&&Object.keys(e.data).map((function(t){o.append(t,e.data[t])})),o.append(e.filename,e.file),t.onerror=function(t){e.onError(t)},t.onload=function(){return t.status<200||t.status>=300?e.onError(n(e,t),r(t)):void e.onSuccess(r(t))},t.open("post",e.action,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);var a=e.headers||{};null!==a["X-Requested-With"]&&t.setRequestHeader("X-Requested-With","XMLHttpRequest");for(var i in a)a.hasOwnProperty(i)&&null!==a[i]&&t.setRequestHeader(i,a[i]);return t.send(o),{abort:function(){t.abort()}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o,e.exports=t["default"]},327:function(e,t){"use strict";function n(){return"rc-upload-"+r+"-"+ ++o}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var r=+new Date,o=0;e.exports=t["default"]},328:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(321),a=r(o),i=n(282),s=r(i),u=n(201),l=r(u),c=n(1),p=r(c),f=n(325),d=r(f),m=n(327),h=r(m),y=n(329),v=r(y),g={position:"absolute",top:0,opacity:0,filter:"alpha(opacity=0)",left:0,zIndex:9999},b=l["default"].createClass({displayName:"IframeUploader",propTypes:{component:u.PropTypes.string,style:u.PropTypes.object,disabled:u.PropTypes.bool,prefixCls:u.PropTypes.string,className:u.PropTypes.string,accept:u.PropTypes.string,onStart:u.PropTypes.func,multiple:u.PropTypes.bool,children:u.PropTypes.any,data:u.PropTypes.oneOfType([u.PropTypes.object,u.PropTypes.func]),action:u.PropTypes.string,name:u.PropTypes.string},getInitialState:function(){return this.file={},{uploading:!1}},componentDidMount:function(){this.updateIframeWH(),this.initIframe()},componentDidUpdate:function(){this.updateIframeWH()},onLoad:function(){if(this.state.uploading){var e=this.props,t=this.file,n=void 0;try{var r=this.getIframeDocument(),o=r.getElementsByTagName("script")[0];o&&o.parentNode===r.body&&r.body.removeChild(o),n=r.body.innerHTML,e.onSuccess(n,t)}catch(a){(0,v["default"])(!1,"cross domain error for Upload. Maybe server should return document.domain script. see Note from https://github.com/react-component/upload"),n="cross-domain",e.onError(a,null,t)}this.endUpload()}},onChange:function(){var e=this,t=this.getFormInputNode(),n=this.file={uid:(0,h["default"])(),name:t.value};this.startUpload();var r=this.props;if(!r.beforeUpload)return this.post(n);var o=r.beforeUpload(n);o&&o.then?o.then((function(){e.post(n)}),(function(){e.endUpload()})):o!==!1?this.post(n):this.endUpload()},getIframeNode:function(){return this.refs.iframe},getIframeDocument:function(){return this.getIframeNode().contentDocument},getFormNode:function(){return this.getIframeDocument().getElementById("form")},getFormInputNode:function(){return this.getIframeDocument().getElementById("input")},getFormDataNode:function(){return this.getIframeDocument().getElementById("data")},getFileForMultiple:function(e){return this.props.multiple?[e]:e},getIframeHTML:function(e){var t="",n="";if(e){var r="script";t="<"+r+'>document.domain="'+e+'";</'+r+">",n='<input name="_documentDomain" value="'+e+'" />'}return'\n    <!DOCTYPE html>\n    <html>\n    <head>\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <style>\n    body,html {padding:0;margin:0;border:0;overflow:hidden;}\n    </style>\n    '+t+'\n    </head>\n    <body>\n    <form method="post"\n    encType="multipart/form-data"\n    action="'+this.props.action+'" id="form"\n    style="display:block;height:9999px;position:relative;overflow:hidden;">\n    <input id="input" type="file"\n     name="'+this.props.name+'"\n     style="position:absolute;top:0;right:0;height:9999px;font-size:9999px;cursor:pointer;"/>\n    '+n+'\n    <span id="data"></span>\n    </form>\n    </body>\n    </html>\n    '},initIframeSrc:function(){this.domain&&(this.getIframeNode().src="javascript:void((function(){\n        var d = document;\n        d.open();\n        d.domain='"+this.domain+"';\n        d.write('');\n        d.close();\n      })())")},initIframe:function(){var e=this.getIframeNode(),t=e.contentWindow,n=void 0;this.domain=this.domain||"",this.initIframeSrc();try{n=t.document}catch(r){this.domain=document.domain,this.initIframeSrc(),t=e.contentWindow,n=t.document}n.open("text/html","replace"),n.write(this.getIframeHTML(this.domain)),n.close(),this.getFormInputNode().onchange=this.onChange},endUpload:function(){this.state.uploading&&(this.file={},this.state.uploading=!1,this.setState({uploading:!1}),this.initIframe())},startUpload:function(){this.state.uploading||(this.state.uploading=!0,this.setState({uploading:!0}))},updateIframeWH:function(){var e=p["default"].findDOMNode(this),t=this.getIframeNode();t.style.height=e.offsetHeight+"px",t.style.width=e.offsetWidth+"px"},abort:function(e){if(e){var t=e;e&&e.uid&&(t=e.uid),t===this.file.uid&&this.endUpload()}else this.endUpload()},post:function(e){var t=this.getFormNode(),n=this.getFormDataNode(),r=this.props.data,o=this.props.onStart;"function"==typeof r&&(r=r(e));var a=[];for(var i in r)r.hasOwnProperty(i)&&a.push('<input name="'+i+'" value="'+r[i]+'"/>');n.innerHTML=a.join(""),t.submit(),n.innerHTML="",o(e)},render:function(){var e,t=this.props,n=t.component,r=t.disabled,o=t.className,i=t.prefixCls,u=t.children,c=t.style,p=(0,s["default"])({},g,{display:this.state.uploading||r?"none":""}),f=(0,d["default"])((e={},(0,a["default"])(e,i,!0),(0,a["default"])(e,i+"-disabled",r),(0,a["default"])(e,o,o),e));return l["default"].createElement(n,{className:f,style:(0,s["default"])({position:"relative",zIndex:0},c)},l["default"].createElement("iframe",{ref:"iframe",onLoad:this.onLoad,style:p}),u)}});t["default"]=b,e.exports=t["default"]},329:180});