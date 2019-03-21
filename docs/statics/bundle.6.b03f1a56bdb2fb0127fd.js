(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{168:function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}},553:function(e,t,n){"use strict";var r=n(151),o=(n(152),n(153)),a=(n(154),function(e){var t={exports:{}};e(t,t.exports);var n=t.exports.__esModule&&t.exports.default||t.exports;return"function"==typeof n?n:function(){return r.createElement("div",{},"Code snippet should export a component!")}}(function(e,t){var r=n(168),o=n(32);t.__esModule=!0,t.default=function(){return m.default.createElement(c.FormProvider,null,m.default.createElement(c.default,{defaultValue:{aa:"123"},onSubmit:function(e){return console.log(e)}},m.default.createElement(c.Field,{name:"aa",type:"string"}),m.default.createElement("button",{htmlType:"submit"},"内部提交")),m.default.createElement(c.FormConsumer,null,function(e){var t=e.submit;return m.default.createElement("button",{onClick:t},"外部提交")}))};var a=o(n(170)),m=r(n(0)),c=(o(n(8)),r(n(155)));(0,c.registerFormField)("string",(0,c.connect)()(function(e){return m.default.createElement("input",(0,a.default)({},e,{value:e.value||""}))}))})),m=function(){return r.createElement(r.Fragment,{},r.createElement("h1",{id:"formconsumer",className:"react-demo-h1"},"FormConsumer"),r.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),r.createElement("p",{className:"react-demo-p"},"用于表单的跨组件通讯提交重置状态同步等操作，它主要与FormProvider一起使用"),r.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),r.createElement(o,{code:"import {FormConsumer} from '@uform/react'\n",justCode:!0,lang:"javascript"}),r.createElement("h2",{id:"api",className:"react-demo-h2"},"API"),r.createElement(o,{code:'<FormConsumer>\n    {({\n      status  : String<"changed" | "resetd" | "initialize" | "submitting" | "submitted">, //表单活动状态\n      state   : FormState,//表单状态模型\n      schema  : Object,//表单schema\n      submit(),//表单提交\n      reset(),//表单重置\n      dispatch(name : String,payload : any)//触发effect自定义事件 \n    })=>ReactElement)\n</FormConsumer>\n',justCode:!0,lang:"typescript"}),r.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),r.createElement(o,{code:"import React, { Component } from 'react'\nimport ReactDOM from 'react-dom'\nimport SchemaForm, {\n  registerFormField,\n  Field,  \n  connect,\n  FormProvider,\n  FormConsumer\n} from '@uform/react'\n\nregisterFormField(\n  'string',\n  connect()(props => <input {...props} value={props.value || ''} />)\n)\n\nReactDOM.render(\n   <FormProvider>\n       <SchemaForm defaultValue={{aa:'123'}} onSubmit={values=>console.log(values)}>\n         <Field name=\"aa\" type=\"string\"/>\n         <button htmlType=\"submit\">内部提交</button>\n       </SchemaForm>\n       <FormConsumer>\n         {({submit})=>(<button onClick={submit}>外部提交</button>)}\n       </FormConsumer>\n   </FormProvider>\n,document.getElementById('root'))\n",justCode:!1,lang:"jsx"},r.createElement(a,{})))};m.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=m}}]);
//# sourceMappingURL=bundle.6.b03f1a56bdb2fb0127fd.js.map