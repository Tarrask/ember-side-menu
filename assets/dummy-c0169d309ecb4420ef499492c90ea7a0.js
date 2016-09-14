"use strict";define("dummy/app",["exports","ember","ember-resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,r){t.default.MODEL_FACTORY_INJECTIONS=!0;var i=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default});(0,a.default)(i,r.default.modulePrefix),e.default=i}),define("dummy/components/content-backdrop",["exports","ember-side-menu/components/content-backdrop"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/fa-icon",["exports","ember-font-awesome/components/fa-icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/fa-list",["exports","ember-font-awesome/components/fa-list"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/fa-stack",["exports","ember-font-awesome/components/fa-stack"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/menu-style-option",["exports","ember","dummy/templates/components/menu-style-option"],function(e,t,n){e.default=t.default.Component.extend({layout:n.default,tagName:"a",classNameBindings:["isActive:current-demo"],isActive:t.default.computed("option","activeOption",function(){var e=this.get("option"),t=this.get("activeOption");return e.id===t.id}),click:function(){var e=this.get("option");this.sendAction("action",e)}})}),define("dummy/components/side-button",["exports","ember","dummy/templates/components/side-button"],function(e,t,n){e.default=t.default.Component.extend({layout:n.default,tagName:"a",classNames:["side-button"],classNameBindings:["isActive:active","side"],isActive:t.default.computed("side","actualSide",function(){return this.get("side")===this.get("actualSide")}),click:function(){this.set("actualSide",this.get("side"))}})}),define("dummy/components/side-menu-link-to",["exports","ember-side-menu/components/side-menu-link-to"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/side-menu-toggle",["exports","ember-side-menu/components/side-menu-toggle"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/side-menu",["exports","ember-side-menu/components/side-menu"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){return r}e.appVersion=a;var r=n.default.APP.version;e.default=t.default.Helper.helper(a)}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){var a=n.default.APP,r=a.name,i=a.version;e.default={name:"App Version",initialize:(0,t.default)(r,i)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var a,r=n.default.exportApplicationGlobal;a="string"==typeof r?r:t.default.String.classify(n.default.modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("dummy/initializers/side-menu",["exports","ember-side-menu/initializers/side-menu"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});a.map(function(){}),e.default=a}),define("dummy/routes/application",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return{options:[{id:"slide",text:"Slide"}]}},setupController:function(e,t){this._super.apply(this,arguments),this.controller.set("activeOption",t.options[0]),this.controller.set("side","left")},actions:{changeSide:function(e){this.set("side",e)},changeMenu:function(e){var t=this.controllerFor("application");t.set("activeOption",e)}}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/side-menu",["exports","ember-side-menu/services/side-menu"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.8.0",loc:{source:null,start:{line:1,column:0},end:{line:25,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("nav");e.setAttribute(n,"class","sm-item-list");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","");var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("i");e.setAttribute(r,"class","fa fa-fw fa-star-o"),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("span"),i=e.createTextNode("Favorites");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","");var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("i");e.setAttribute(r,"class","fa fa-fw fa-bell-o"),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("span"),i=e.createTextNode("Alerts");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","");var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("i");e.setAttribute(r,"class","fa fa-fw fa-envelope-o"),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("span"),i=e.createTextNode("Messages");e.appendChild(r,i),e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","");var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("i");e.setAttribute(r,"class","fa fa-fw fa-comment-o"),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("span"),i=e.createTextNode("Comments");e.appendChild(r,i),e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","");var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("i");e.setAttribute(r,"class","fa fa-fw fa-bar-chart-o"),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("span"),i=e.createTextNode("Analytics");e.appendChild(r,i),e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","");var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("i");e.setAttribute(r,"class","fa fa-fw fa-newspaper-o"),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("span"),i=e.createTextNode("Reading List");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@2.8.0",loc:{source:null,start:{line:33,column:4},end:{line:33,column:52}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Left");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{revision:"Ember@2.8.0",loc:{source:null,start:{line:34,column:4},end:{line:34,column:54}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Right");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{revision:"Ember@2.8.0",loc:{source:null,start:{line:41,column:6},end:{line:43,column:6}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","menu-style-option",[],["option",["subexpr","@mut",[["get","option",["loc",[null,[42,35],[42,41]]],0,0,0,0]],[],[],0,0],"activeOption",["subexpr","@mut",[["get","activeOption",["loc",[null,[42,55],[42,67]]],0,0,0,0]],[],[],0,0],"action","changeMenu"],["loc",[null,[42,8],[42,89]]],0,0]],locals:["option"],templates:[]}}();return{meta:{revision:"Ember@2.8.0",loc:{source:null,start:{line:1,column:0},end:{line:50,column:6}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"id","outer-container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("main");e.setAttribute(a,"id","page-wrap");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("h1"),i=e.createElement("a");e.setAttribute(i,"href","https://github.com/tsubik/ember-side-menu");var d=e.createTextNode("ember-side-menu");e.appendChild(i,d),e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n\n    ");e.appendChild(a,r);var r=e.createElement("h2");e.setAttribute(r,"class","description");var i=e.createTextNode("\n      Mobile friendly Ember menu component using CSS transitions. More effects and SVG path animations coming soon.\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n\n    ");e.appendChild(a,r);var r=e.createElement("nav");e.setAttribute(r,"class","demo-buttons");var i=e.createTextNode("\n");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode("    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n\n    ");e.appendChild(a,r);var r=e.createElement("p"),i=e.createTextNode("\n      Demo page design is literally taken from ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"href","https://github.com/negomi/react-burger-menu");var d=e.createTextNode("react-burger-menu");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[3]),r=e.childAt(a,[3]),i=new Array(6);return i[0]=e.createMorphAt(t,0,0,n),i[1]=e.createMorphAt(t,1,1,n),i[2]=e.createMorphAt(a,1,1),i[3]=e.createMorphAt(r,3,3),i[4]=e.createMorphAt(r,5,5),i[5]=e.createMorphAt(e.childAt(r,[9]),1,1),e.insertBoundary(t,0),i},statements:[["block","side-menu",[],["width","300px","side",["subexpr","@mut",[["get","side",["loc",[null,[1,32],[1,36]]],0,0,0,0]],[],[],0,0]],0,null,["loc",[null,[1,0],[25,14]]]],["content","content-backdrop",["loc",[null,[26,0],[26,20]]],0,0,0,0],["inline","side-menu-toggle",[],["side",["subexpr","@mut",[["get","side",["loc",[null,[29,26],[29,30]]],0,0,0,0]],[],[],0,0]],["loc",[null,[29,2],[29,32]]],0,0],["block","side-button",[],["side","left","actualSide",["subexpr","@mut",[["get","side",["loc",[null,[33,42],[33,46]]],0,0,0,0]],[],[],0,0]],1,null,["loc",[null,[33,4],[33,68]]]],["block","side-button",[],["side","right","actualSide",["subexpr","@mut",[["get","side",["loc",[null,[34,43],[34,47]]],0,0,0,0]],[],[],0,0]],2,null,["loc",[null,[34,4],[34,70]]]],["block","each",[["get","model.options",["loc",[null,[41,14],[41,27]]],0,0,0,0]],[],3,null,["loc",[null,[41,6],[43,15]]]]],locals:[],templates:[e,t,n,a]}}())}),define("dummy/templates/components/menu-style-option",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.0",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/menu-style-option.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","option.text",["loc",[null,[1,0],[1,15]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/components/side-button",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.0",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/side-button.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","yield",["loc",[null,[1,0],[1,9]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/components/side-menu-toggle",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.8.0",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"dummy/templates/components/side-menu-toggle.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["content","yield",["loc",[null,[2,2],[2,11]]],0,0,0,0]],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@2.8.0",loc:{source:null,start:{line:3,column:0},end:{line:6,column:0}},moduleName:"dummy/templates/components/side-menu-toggle.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","toggle-bars");var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.8.0",loc:{source:null,start:{line:1,column:0},end:{line:6,column:7}},moduleName:"dummy/templates/components/side-menu-toggle.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","if",[["get","hasBlock",["loc",[null,[1,6],[1,14]]],0,0,0,0]],[],0,1,["loc",[null,[1,0],[6,7]]]]],locals:[],templates:[e,t]}}())}),define("dummy/templates/components/side-menu",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.0",loc:{source:null,start:{line:1,column:0},end:{line:1,column:9}},moduleName:"dummy/templates/components/side-menu.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["content","yield",["loc",[null,[1,0],[1,9]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),r=JSON.parse(unescape(a)),i={default:r};return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-side-menu",version:"0.0.10+4c9c4a16"});