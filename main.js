(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(81),r=n.n(i),o=n(645),s=n.n(o)()(r());s.push([e.id,"/* Header */\nh1 {\n    text-align: center;\n}\n\n/* Main Content */\n.container {\n    display: flex;\n    height: 80vh;\n}\n\n.projects {\n    width: 20%;\n}\n\n.tasks {\n    width: 70%;\n    margin-left: 10%;\n}\n\n/* Projects Sidebar */\nselect {\n    width: 70%;\n}\n\n.projects-form {\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n/* Tasks Grid */\n.tasks-tabs {\n    margin-bottom: 20px;\n}\n\n.tasks-list {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 200px);\n    grid-template-rows: repeat(auto-fit, 200px);\n    gap: 10px;\n    height: 100%;\n    /* width: 850px; */\n    border: 2px solid black;\n    padding: 5px;\n}\n\n.item {\n    border: 2px solid black;\n    height: 200px;\n    width: 200px;\n}\n\np {\n    text-align: center;\n}\n\n/* Modal */\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0,0,0,0.7);\n}\n\n.modal-content {\n    background-color: white;\n    margin: 150px auto;\n    border: 1px solid grey;\n    width: 50%;\n    height: 50%;\n}\n\nh2 {\n    text-align: center;\n}\n\n.form-row {\n    display: flex;\n    align-items: center;\n    margin-left: 20px;\n    margin-bottom: 20px;\n}\n\n.form-row input,\n.form-row textarea {\n    border: 1px solid black;\n    border-radius: 3px;\n    font-size: 14px;\n    padding: 7px;\n    width: 70%;\n}   \n\n.form-row label,\nlegend {\n    display: inline-block;\n    width: 100px;\n    text-align: right;\n    font-weight: bold;\n}\n\n.form-row label {\n    margin-top: 7px;\n    margin-right: 10px;\n}\n\nfieldset {\n    border: none;\n}\n\nfieldset label,\nfieldset input,\nlegend {\n    margin-bottom: 10px;\n}\n\nfieldset label,\nfieldset input {\n    display: inline-block;\n    margin-top: 0px;\n}\n\nfieldset label {\n    margin-right: 20px;\n}\n\nfieldset input {\n    margin-left: 10px;\n}\n\nlegend {\n    float: left;\n    margin-left: 7px;\n}\n\n.new-task {\n    margin-left: auto;\n    margin-right: auto;\n}",""]);const a=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);i&&s[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var o={},s=[],a=0;a<e.length;a++){var l=e[a],d=i.base?l[0]+i.base:l[0],c=o[d]||0,p="".concat(d," ").concat(c);o[d]=c+1;var h=n(p),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(u);else{var m=r(u,i);i.byIndex=a,t.splice(a,0,{identifier:p,updater:m,references:1})}s.push(p)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var a=n(o[s]);t[a].references--}for(var l=i(e,r),d=0;d<o.length;d++){var c=n(o[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),r=n.n(i),o=n(569),s=n.n(o),a=n(565),l=n.n(a),d=n(216),c=n.n(d),p=n(589),h=n.n(p),u=n(28),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=c(),t()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;class f{constructor(e,t,n,i,r){this.title=e,this.description=t,this.dueDate=n,this.priority=i,this.notes=r,this.completed=!1}getTodo(){return this}}class g{constructor(e){this.title=e,this.todos=[]}addTodo(e,t,n,i,r){let o=new f(e,t,n,i,r);this.todos.push(o)}getTodos(){return this.todos}}new class{constructor(e){this.view=e,this.projects=[],this.view.addProjectBtn.addEventListener("click",(()=>{let e=this.view.getElement("input").value;if(""===e)return;if(this.projectExists(e))return void alert("That project title already exists!");this.view.displayNewProject(e,"option");let t=new g(e);this.projects.push(t)})),this.view.deleteProjectBtn.addEventListener("click",(()=>{let e=this.view.getElement("select").value;if(""===e)return;let t=e.replace(/\s+/g,"-");this.view.deleteElement(`option.${CSS.escape(t)}`),this.projects=this.projects.filter((t=>t.title!==e))})),this.view.addTaskBtn.addEventListener("click",(()=>{this.view.displayModal()})),this.view.newTaskBtn.addEventListener("click",(e=>{let t=this.view.getTodo();if(""===t[0]||""===t[2])return;let n=this.view.getElement("select").value,i=this.getProject(n);t[3]?i.addTodo(t[0],t[1],t[2],"low",t[6]):t[4]?i.addTodo(t[0],t[1],t[2],"medium",t[6]):t[5]&&i.addTodo(t[0],t[1],t[2],"high",t[6]),this.view.hideModal();let r=i.getTodos();r.sort(((e,t)=>e.dueDate>t.dueDate?1:t.dueDate>e.dueDate?-1:0)),console.log(r),this.view.displayTodos(r),e.preventDefault()}))}projectExists(e){for(let t=0;t<this.projects.length;t++)if(this.projects[t].title===e)return!0;return!1}getProject(e){for(let t=0;t<this.projects.length;t++)if(this.projects[t].title===e)return this.projects[t];return!1}}(new class{constructor(){this.projectsDropdown=this.getElement("select"),this.addProjectBtn=this.getElement(".add-project"),this.deleteProjectBtn=this.getElement(".delete-project"),this.addTaskBtn=this.getElement(".add-task"),this.modal=this.getElement(".modal"),this.modalContent=this.getElement(".modal-content"),this.newTaskBtn=this.getElement(".new-task"),this.tasksList=this.getElement(".tasks-list"),this.titleField=this.getElement("#title"),this.descriptionField=this.getElement("#description"),this.dueDateField=this.getElement("#dueDate"),this.lowPriorityField=this.getElement("#low"),this.mediumPriorityField=this.getElement("#medium"),this.highPriorityField=this.getElement("#high"),this.notesField=this.getElement("#notes")}getElement(e){return document.querySelector(e)}createElement(e,t=""){const n=document.createElement(e);return""!==t&&n.classList.add(t),n}deleteElement(e){document.querySelector(e).remove()}displayNewProject(e,t,n=""){let i=this.createElement(t,n);i.innerText=e,i.value=e,e=e.replace(/\s+/g,"-"),i.classList.add(e),this.projectsDropdown.appendChild(i),i.selected=!0}displayModal(){this.modal.style.display="block"}hideModal(){this.modal.style.display="none"}getTodo(){return[this.titleField.value,this.descriptionField.value,this.dueDateField.value,this.lowPriorityField.checked,this.mediumPriorityField.checked,this.highPriorityField.checked,this.notesField.value]}displayTodos(e){this.tasksList.innerHTML="",e.forEach((e=>{let t=this.createElement("div","item"),n=this.createElement("h2");n.innerText=e.title,t.appendChild(n);let i=this.createElement("p");i.innerText=e.dueDate,t.appendChild(i),this.tasksList.appendChild(t)}))}})})()})();