(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject);__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-info/dist/index.js"),client=__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object(client.addDecorator)(dist.withInfo),Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(module))},"./node_modules/nested-object-assign/lib sync recursive ^\\.\\/.*$":function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":"./node_modules/nested-object-assign/lib/nestedObjectAssign.js","./nestedObjectAssign.js":"./node_modules/nested-object-assign/lib/nestedObjectAssign.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./node_modules/nested-object-assign/lib sync recursive ^\\.\\/.*$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/ReactTyped.stories.js":"./src/stories/ReactTyped.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/ReactTyped.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BasicExample",(function(){return ReactTyped_stories_BasicExample})),__webpack_require__.d(__webpack_exports__,"WithInput",(function(){return ReactTyped_stories_WithInput})),__webpack_require__.d(__webpack_exports__,"SmartBackspace",(function(){return SmartBackspace})),__webpack_require__.d(__webpack_exports__,"Stopped",(function(){return ReactTyped_stories_Stopped}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),prop_types=(__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),typed=__webpack_require__("./node_modules/typed.js/lib/typed.js"),typed_default=__webpack_require__.n(typed),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["style","typedRef","stopped","className"],_excluded2=["style","typedRef","stopped","className"],_excluded3=["style","typedRef","stopped","className"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var ReactTyped_ReactTyped=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(ReactTyped,_Component);var _super=_createSuper(ReactTyped);function ReactTyped(){var _this;_classCallCheck(this,ReactTyped);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).rootElement=react_default.a.createRef(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ReactTyped,[{key:"componentDidMount",value:function componentDidMount(){var _this$props=this.props,stopped=(_this$props.style,_this$props.typedRef,_this$props.stopped),typedOptions=(_this$props.className,_objectWithoutProperties(_this$props,_excluded));this.constructTyped(typedOptions),stopped&&this.typed.stop()}},{key:"constructTyped",value:function constructTyped(){var _this2=this,options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_this$props2=this.props,typedOptions=(_this$props2.style,_this$props2.typedRef,_this$props2.stopped,_this$props2.className,_objectWithoutProperties(_this$props2,_excluded2));this.typed&&this.typed.destroy(),this.typed=new typed_default.a(this.rootElement.current,Object.assign(typedOptions,options)),this.props.typedRef&&this.props.typedRef(this.typed),this.typed.reConstruct=function(opts){_this2.constructTyped(opts)}}},{key:"shouldComponentUpdate",value:function shouldComponentUpdate(nextProps){var _this3=this;if(this.props!==nextProps){nextProps.style,nextProps.typedRef,nextProps.stopped,nextProps.className;var typedOptions=_objectWithoutProperties(nextProps,_excluded3);return this.typed.options=Object.assign(this.typed.options,typedOptions),!Object.keys(nextProps).every((function(key){return!_this3.props[key]&&nextProps[key]?(_this3.constructTyped(nextProps),!1):(_this3.typed[key]&&(_this3.typed[key]=nextProps[key]),!0)}))||this.props.strings.length===nextProps.strings.length||this.constructTyped(nextProps),!0}return!1}},{key:"render",value:function render(){var _this$props3=this.props,style=_this$props3.style,className=_this$props3.className,children=_this$props3.children,child=Object(jsx_runtime.jsx)("span",{ref:this.rootElement});return children&&(child=react_default.a.cloneElement(children,{ref:this.rootElement})),Object(jsx_runtime.jsx)("span",{style:style,className:className,children:child})}}]),ReactTyped}(react.Component);ReactTyped_ReactTyped.propTypes={style:prop_types_default.a.object,className:prop_types_default.a.string,children:prop_types_default.a.object,typedRef:prop_types_default.a.func,stopped:prop_types_default.a.bool,strings:prop_types_default.a.arrayOf(prop_types_default.a.string),typeSpeed:prop_types_default.a.number,startDelay:prop_types_default.a.number,backSpeed:prop_types_default.a.number,smartBackspace:prop_types_default.a.bool,shuffle:prop_types_default.a.bool,backDelay:prop_types_default.a.number,fadeOut:prop_types_default.a.bool,fadeOutClass:prop_types_default.a.string,fadeOutDelay:prop_types_default.a.number,loop:prop_types_default.a.bool,loopCount:prop_types_default.a.number,showCursor:prop_types_default.a.bool,cursorChar:prop_types_default.a.string,autoInsertCss:prop_types_default.a.bool,attr:prop_types_default.a.string,bindInputFocusEvents:prop_types_default.a.bool,contentType:prop_types_default.a.oneOf(["html",""]),onComplete:prop_types_default.a.func,preStringTyped:prop_types_default.a.func,onStringTyped:prop_types_default.a.func,onLastStringBackspaced:prop_types_default.a.func,onTypingPaused:prop_types_default.a.func,onTypingResumed:prop_types_default.a.func,onReset:prop_types_default.a.func,onStop:prop_types_default.a.func,onStart:prop_types_default.a.func,onDestroy:prop_types_default.a.func},ReactTyped_ReactTyped.__docgenInfo={description:"",methods:[{name:"constructTyped",docblock:null,modifiers:[],params:[{name:"options",type:null}],returns:null}],displayName:"ReactTyped",props:{style:{type:{name:"object"},required:!1,description:"styles for the outer element"},className:{type:{name:"string"},required:!1,description:"class name for the outer element"},children:{type:{name:"object"},required:!1,description:"the element to wrapp"},typedRef:{type:{name:"func"},required:!1,description:"typedRef(self: Typed) returns the Typed instance"},stopped:{type:{name:"bool"},required:!1,description:"initialize in stopped state"},strings:{type:{name:"arrayOf",value:{name:"string"}},required:!1,description:"strings to be typed"},typeSpeed:{type:{name:"number"},required:!1,description:"type speed in milliseconds"},startDelay:{type:{name:"number"},required:!1,description:"time before typing starts in milliseconds"},backSpeed:{type:{name:"number"},required:!1,description:"backspacing speed in milliseconds"},smartBackspace:{type:{name:"bool"},required:!1,description:"only backspace what doesn't match the previous string"},shuffle:{type:{name:"bool"},required:!1,description:"shuffle the strings"},backDelay:{type:{name:"number"},required:!1,description:"time before backspacing in milliseconds"},fadeOut:{type:{name:"bool"},required:!1,description:"Fade out instead of backspace"},fadeOutClass:{type:{name:"string"},required:!1,description:"css class for fade animation"},fadeOutDelay:{type:{name:"number"},required:!1,description:"Fade out delay in milliseconds"},loop:{type:{name:"bool"},required:!1,description:"loop the strings"},loopCount:{type:{name:"number"},required:!1,description:"amount of loops"},showCursor:{type:{name:"bool"},required:!1,description:"show cursor"},cursorChar:{type:{name:"string"},required:!1,description:"character for cursor"},autoInsertCss:{type:{name:"bool"},required:!1,description:"insert CSS for cursor and fadeOut into HTML"},attr:{type:{name:"string"},required:!1,description:"attribute for typing Ex: input placeholder, value, or just HTML text"},bindInputFocusEvents:{type:{name:"bool"},required:!1,description:"bind to focus and blur if el is text input"},contentType:{type:{name:"enum",value:[{value:'"html"',computed:!1},{value:'""',computed:!1}]},required:!1,description:"'html' or 'null' for plaintext"},onComplete:{type:{name:"func"},required:!1,description:"onComplete(self: Typed) All typing is complete"},preStringTyped:{type:{name:"func"},required:!1,description:"preStringTyped(arrayPos: number, self: Typed) Before each string is typed"},onStringTyped:{type:{name:"func"},required:!1,description:"onStringTyped(arrayPos: number, self: Typed) After each string is typed"},onLastStringBackspaced:{type:{name:"func"},required:!1,description:"onLastStringBackspaced(self: Typed) During looping, after last string is typed"},onTypingPaused:{type:{name:"func"},required:!1,description:"onTypingPaused(arrayPos: number, self: Typed) Typing has been stopped"},onTypingResumed:{type:{name:"func"},required:!1,description:"onTypingResumed(arrayPos: number, self: Typed) Typing has been started after being stopped"},onReset:{type:{name:"func"},required:!1,description:"onReset(self: Typed) After reset"},onStop:{type:{name:"func"},required:!1,description:"onStop(arrayPos: number, self: Typed)    After stop"},onStart:{type:{name:"func"},required:!1,description:"onStart(arrayPos: number, self: Typed) After start"},onDestroy:{type:{name:"func"},required:!1,description:"onDestroy(self: Typed) After destroy"}}};var src_ReactTyped=ReactTyped_ReactTyped;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ReactTyped.js"]={name:"ReactTyped",docgenInfo:ReactTyped_ReactTyped.__docgenInfo,path:"src/ReactTyped.js"});var ReactTyped_stories_excluded=["children"];function ReactTyped_stories_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function ReactTyped_stories_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var typedInstance,defaults={strings:["welcome to react-typed",'This is a react component that wraps up the <a href="https://github.com/mattboldt/typed.js/">typed.js</a>','If you like the project add a star in <a href="https://github.com/mattboldt/typed.js/">typed.js</a> and <a href="https://github.com/mattboldt/typed.js/">react-typed</a>'],typeSpeed:50,backSpeed:20,loop:!0,startDelay:0,smartBackspace:!0,shuffle:!1,backDelay:1,fadeOut:!1,fadeOutDelay:100,loopCount:0,showCursor:!0,cursorChar:"|",bindInputFocusEvents:!1},ReactTyped_stories_Controls=(__webpack_exports__.default={title:"ReactTyped",parameters:{info:{text:"\n\n* typedInstance.toggle() :Toggle start() and stop() of the Typed instance.\n* typedInstance.Stop: typing / backspacing and enable cursor blinking.\n* typedInstance.start(): Start typing / backspacing after being stopped.\n* destroy(): Destroy this instance of Typed.\n* reset(restart?): Reset Typed and optionally restarts.\n\n You can get typed instance like this\n\n<ReactTyped typedRef={ (typedInstance)=>{ this.typed = typedInstance; } } />\n"}}},function Controls(){return Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("button",{onClick:function onClick(){return typedInstance.start()},children:"Start"}),Object(jsx_runtime.jsx)("button",{onClick:function onClick(){return typedInstance.stop()},children:"Stop"}),Object(jsx_runtime.jsx)("button",{onClick:function onClick(){return typedInstance.reset()},children:"Reset"}),Object(jsx_runtime.jsx)("button",{onClick:function onClick(){return typedInstance.toggle()},children:"Toggle"}),Object(jsx_runtime.jsx)("button",{onClick:function onClick(){return typedInstance.destroy()},children:"Destroy"})]})});ReactTyped_stories_Controls.displayName="Controls";var ReactTyped_stories_Template=function Template(_ref){var children=_ref.children,args=ReactTyped_stories_objectWithoutProperties(_ref,ReactTyped_stories_excluded);return Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)(src_ReactTyped,Object.assign({},args,{children:children})),Object(jsx_runtime.jsx)(ReactTyped_stories_Controls,{})]})};ReactTyped_stories_Template.displayName="Template";var ReactTyped_stories_BasicExample=function BasicExample(args){return Object(jsx_runtime.jsx)(ReactTyped_stories_Template,Object.assign({typedRef:function typedRef(typed){typedInstance=typed}},args))};ReactTyped_stories_BasicExample.displayName="BasicExample",ReactTyped_stories_BasicExample.args=defaults;var ReactTyped_stories_WithInput=function WithInput(args){return Object(jsx_runtime.jsx)(ReactTyped_stories_Template,Object.assign({typedRef:function typedRef(typed){typedInstance=typed}},args,{children:Object(jsx_runtime.jsx)("input",{type:"text"})}))};ReactTyped_stories_WithInput.displayName="WithInput",ReactTyped_stories_WithInput.args=Object.assign({},defaults,{loop:!1,attr:"placeholder"});var SmartBackspace=ReactTyped_stories_Template.bind({});SmartBackspace.args=Object.assign({},defaults,{backSpeed:50,strings:["Here you can find hardware","Here you can find software","Here you can find net tools"]});var ReactTyped_stories_Stopped=function Stopped(args){return Object(jsx_runtime.jsxs)("div",{children:["Press start ",Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)(src_ReactTyped,Object.assign({typedRef:function typedRef(typed){typedInstance=typed}},args)),Object(jsx_runtime.jsx)(ReactTyped_stories_Controls,{})]})};ReactTyped_stories_Stopped.displayName="Stopped",ReactTyped_stories_Stopped.args=Object.assign({},defaults,{backSpeed:50,stopped:!0,strings:["Here you can find hardware","Here you can find software","Here you can find net tools"]}),ReactTyped_stories_BasicExample.parameters=Object.assign({storySource:{source:"(args) => (\n  <Template\n    typedRef={(typed) => {\n      typedInstance = typed;\n    }}\n    {...args}\n  />\n)"}},ReactTyped_stories_BasicExample.parameters),ReactTyped_stories_WithInput.parameters=Object.assign({storySource:{source:'(args) => (\n  <Template\n    typedRef={(typed) => {\n      typedInstance = typed;\n    }}\n    {...args}\n  >\n    <input type="text" />\n  </Template>\n)'}},ReactTyped_stories_WithInput.parameters),SmartBackspace.parameters=Object.assign({storySource:{source:"({ children, ...args }) => (\n  <div>\n    <ReactTyped {...args}>{children}</ReactTyped>\n    <Controls />\n  </div>\n)"}},SmartBackspace.parameters),ReactTyped_stories_Stopped.parameters=Object.assign({storySource:{source:"(args) => (\n  <div>\n    Press start <br />\n    <br />\n    <ReactTyped\n      typedRef={(typed) => {\n        typedInstance = typed;\n      }}\n      {...args}\n    />\n    <Controls />\n  </div>\n)"}},ReactTyped_stories_Stopped.parameters),ReactTyped_stories_BasicExample.__docgenInfo={description:"",methods:[],displayName:"BasicExample"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/ReactTyped.stories.js"]={name:"BasicExample",docgenInfo:ReactTyped_stories_BasicExample.__docgenInfo,path:"src/stories/ReactTyped.stories.js"}),ReactTyped_stories_WithInput.__docgenInfo={description:"",methods:[],displayName:"WithInput"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/ReactTyped.stories.js"]={name:"WithInput",docgenInfo:ReactTyped_stories_WithInput.__docgenInfo,path:"src/stories/ReactTyped.stories.js"}),ReactTyped_stories_Stopped.__docgenInfo={description:"",methods:[],displayName:"Stopped"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/ReactTyped.stories.js"]={name:"Stopped",docgenInfo:ReactTyped_stories_Stopped.__docgenInfo,path:"src/stories/ReactTyped.stories.js"})},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);