(()=>{"use strict";var t={28:(t,e,i)=>{i.d(e,{Z:()=>l});var s=i(81),n=i.n(s),o=i(645),r=i.n(o)()(n());r.push([t.id,"* {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    background-color: #c7d2fe;\n}\n\nbutton {\n    font-size: 16px;\n    font-weight: bold;\n}\n\n/* Header */\nh1 {\n    text-align: center;\n}\n\n/* Main Content */\n.container {\n    display: flex;\n}\n\n.projects {\n    width: 20%;\n    text-align: center;\n}\n\n.tasks {\n    width: 70%;\n    margin-left: 10%;\n}\n\n/* Projects Sidebar */\nselect {\n    width: 70%;\n}\n\n.projects-form {\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n.add-project,\n.delete-project,\n.projects-input,\nselect {\n    width: 100%;\n    margin-bottom: 10px;\n}\n\n.add-project,\n.delete-project,\n.projects-input {\n    height: 30px;\n}\n\n.projects-input {\n    box-sizing: border-box;\n    font-size: 16px;\n}\n\n.add-project {\n    background-color: #22c55e;\n    color: white;\n    border: 1px solid #22c55e;\n}\n\n.delete-project {\n    background-color: #ef4444;\n    color: white;\n    border: 1px solid #ef4444;\n}\n\nselect {\n    font-size: 16px;\n}\n\n/* Tasks Grid */\n.tasks-tabs {\n    margin-bottom: 20px;\n}\n\n.add-task {\n    background-color: #22c55e;\n    color: white;\n    border: 1px solid #22c55e;\n    border-radius: 10px;\n    margin-right: 20px;\n}\n\n.tasks-button {\n    background-color: #3b82f6;\n    color: white;\n    border: 1px solid #3b82f6;\n    border-radius: 10px;\n}\n\n.button-active {\n    background-color: #2563eb;\n}\n\n.checkbox-label {\n    float: right;\n    margin-right: 30px;\n}\n\n.tasks-list {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 200px);\n    grid-template-rows: repeat(auto-fit, 200px);\n    gap: 10px;\n    height: 100%;\n    /* border: 2px solid black; */\n    padding: 5px;\n}\n\n.item {\n    position: relative;\n    border: 2px solid black;\n    height: 200px;\n    width: 200px;\n}\n\np {\n    text-align: center;\n}\n\nimg {\n    position: absolute;\n    bottom: 10px;\n    width: 30px;\n    height: 30px;\n}\n\n.edit-task,\n.complete-task,\n.delete-task {\n    cursor: pointer;\n}\n\n.edit-task {\n    left: 10px;\n}\n\n.complete-task {\n    left: 50%;\n    transform: translate(-50%, 0)\n}\n\n.delete-task {\n    right: 10px;\n}\n\n/* Modal */\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0,0,0,0.7);\n}\n\n.modal-content {\n    background-color: white;\n    margin: 150px auto;\n    border: 1px solid grey;\n    width: 50%;\n    height: 50%;\n}\n\nh2 {\n    text-align: center;\n}\n\n.close {\n    position: relative;\n    top: 0;\n    cursor: pointer;\n    float: right;\n    font-size: 24px;\n    margin-right: 10px;\n}\n\n.form-row {\n    display: flex;\n    align-items: center;\n    margin-left: 20px;\n    margin-bottom: 20px;\n}\n\n.form-row input,\n.form-row textarea {\n    border: 1px solid black;\n    border-radius: 3px;\n    font-size: 14px;\n    padding: 7px;\n    width: 70%;\n}   \n\n.form-row label,\nlegend {\n    display: inline-block;\n    width: 100px;\n    text-align: right;\n    font-weight: bold;\n}\n\n.form-row label {\n    margin-top: 7px;\n    margin-right: 10px;\n}\n\nfieldset {\n    border: none;\n}\n\nfieldset label,\nfieldset input,\nlegend {\n    margin-bottom: 10px;\n}\n\nfieldset label,\nfieldset input {\n    display: inline-block;\n    margin-top: 0px;\n}\n\nfieldset label {\n    margin-right: 20px;\n}\n\nfieldset input {\n    margin-left: 10px;\n}\n\nlegend {\n    float: left;\n    margin-left: 7px;\n}\n\n.new-task-submit,\n.edit-task-submit {\n    margin-left: auto;\n    margin-right: auto;\n}",""]);const l=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",s=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),s&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),s&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,s,n,o){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(s)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(r[a]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);s&&r[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),i&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=i):c[2]=i),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),e.push(c))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function i(t){for(var i=-1,s=0;s<e.length;s++)if(e[s].identifier===t){i=s;break}return i}function s(t,s){for(var o={},r=[],l=0;l<t.length;l++){var a=t[l],d=s.base?a[0]+s.base:a[0],c=o[d]||0,h="".concat(d," ").concat(c);o[d]=c+1;var p=i(h),u={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=n(u,s);s.byIndex=l,e.splice(l,0,{identifier:h,updater:m,references:1})}r.push(h)}return r}function n(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,n){var o=s(t=t||[],n=n||{});return function(t){t=t||[];for(var r=0;r<o.length;r++){var l=i(o[r]);e[l].references--}for(var a=s(t,n),d=0;d<o.length;d++){var c=i(o[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}o=a}}},569:t=>{var e={};t.exports=function(t,i){var s=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(i)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,i)=>{t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var s="";i.supports&&(s+="@supports (".concat(i.supports,") {")),i.media&&(s+="@media ".concat(i.media," {"));var n=void 0!==i.layer;n&&(s+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),s+=i.css,n&&(s+="}"),i.media&&(s+="}"),i.supports&&(s+="}");var o=i.sourceMap;o&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var o=e[s]={id:s,exports:{}};return t[s](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),i.nc=void 0,(()=>{var t=i(379),e=i.n(t),s=i(795),n=i.n(s),o=i(569),r=i.n(o),l=i(565),a=i.n(l),d=i(216),c=i.n(d),h=i(589),p=i.n(h),u=i(28),m={};m.styleTagTransform=p(),m.setAttributes=a(),m.insert=r().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=c(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;class g{constructor(t,e,i,s,n,o,r=!1){this.id=t,this.title=e,this.description=i,this.dueDate=s,this.priority=n,this.notes=o,this.completed=r}getTodo(){return this}}class v{constructor(t){this.title=t,this.todos=[],this.currentId=0}addTodo(t,e,i,s,n,o=!1){let r=new g(this.currentId,t,e,i,s,n,o);this.todos.push(r),this.currentId++}getTodos(){return this.todos}getTodo(t){for(let e=0;e<this.todos.length;e++)if(this.todos[e].id==t)return this.todos[e];return!1}editTodo(t,e,i,s,n,o){let r=this.getTodo(t);r.title=e,r.description=i,r.dueDate=s,r.priority=n,r.notes=o}deleteTodo(t){this.todos=this.todos.filter((e=>e.id!=t))}completeTodo(t){let e=this.getTodo(t);!0===e.completed?e.completed=!1:e.completed=!0}}const f=i.p+"8d317290131028fe10cf.svg",w=i.p+"d47351b83650f2a3b7e5.svg",b=i.p+"bde675c38d54979f589e.svg";new class{constructor(t){this.view=t,this.time="all",this.projectsLocal=JSON.parse(localStorage.getItem("projects"))||[],this.projects=this.retrieveLocalObjects(),this.refresh(),this.view.addProjectBtn.addEventListener("click",(()=>{let t=this.view.getElement("input").value;if(""===t)return;if(this.projectExists(t))return void alert("That project title already exists!");this.view.displayNewProject(t,"option");let e=new v(t);this.projects.push(e);let i=e.getTodos();this.view.clearProjectInput(),this.view.displayTodos(this.getFilteredTodoDates(i,this.time)),localStorage.setItem("projects",JSON.stringify(this.projects))})),this.view.deleteProjectBtn.addEventListener("click",(()=>{let t=this.view.getElement("select").value;if(""===t)return;let e=t.replace(/\s+/g,"-");this.view.deleteElement(`option.${CSS.escape(e)}`),this.projects=this.projects.filter((e=>e.title!==t)),localStorage.setItem("projects",JSON.stringify(this.projects)),t=this.view.getElement("select").value;let i=this.getProject(t).getTodos();i.sort(((t,e)=>t.dueDate>e.dueDate?1:e.dueDate>t.dueDate?-1:0)),this.view.displayTodos(this.getFilteredTodoDates(i,this.time))})),this.view.addTaskBtn.addEventListener("click",(()=>{""!==this.view.getElement("select").value?this.view.displayNewModal():alert("Must have a project selected!")})),this.view.closeBtn.addEventListener("click",(()=>{this.view.hideModal()})),this.view.submitBtn.addEventListener("click",(t=>{let e=this.view.getTodo();if(""===e[0]||""===e[2])return;let i=this.view.getElement("select").value,s=this.getProject(i);"new-task-submit"===t.target.className?(e[3]?s.addTodo(e[0],e[1],e[2],"low",e[6]):e[4]?s.addTodo(e[0],e[1],e[2],"medium",e[6]):e[5]&&s.addTodo(e[0],e[1],e[2],"high",e[6]),localStorage.setItem("projects",JSON.stringify(this.projects))):"edit-task-submit"===t.target.className&&(e[3]?s.editTodo(e[7],e[0],e[1],e[2],"low",e[6]):e[4]?s.editTodo(e[7],e[0],e[1],e[2],"medium",e[6]):e[5]&&s.editTodo(e[7],e[0],e[1],e[2],"high",e[6]),localStorage.setItem("projects",JSON.stringify(this.projects))),this.view.hideModal();let n=s.getTodos();n.sort(((t,e)=>t.dueDate>e.dueDate?1:e.dueDate>t.dueDate?-1:0)),this.view.displayTodos(this.getFilteredTodoDates(n,this.time)),t.preventDefault()})),this.view.showAllBtn.addEventListener("click",(()=>{this.time="all";let t=this.view.getElement("select").value;if(""===t)return;let e=this.getProject(t).getTodos();this.view.toggleDateButton(this.time),e.sort(((t,e)=>t.dueDate>e.dueDate?1:e.dueDate>t.dueDate?-1:0)),this.view.displayTodos(this.getFilteredTodoDates(e,this.time))})),this.view.showWeekBtn.addEventListener("click",(()=>{this.time="week";let t=this.view.getElement("select").value;if(""===t)return;let e=this.getProject(t).getTodos();this.view.toggleDateButton(this.time),e.sort(((t,e)=>t.dueDate>e.dueDate?1:e.dueDate>t.dueDate?-1:0)),this.view.displayTodos(this.getFilteredTodoDates(e,this.time))})),this.view.showMonthBtn.addEventListener("click",(()=>{this.time="month";let t=this.view.getElement("select").value;if(""===t)return;let e=this.getProject(t).getTodos();this.view.toggleDateButton(this.time),e.sort(((t,e)=>t.dueDate>e.dueDate?1:e.dueDate>t.dueDate?-1:0)),this.view.displayTodos(this.getFilteredTodoDates(e,this.time))})),this.view.showYearBtn.addEventListener("click",(()=>{this.time="year";let t=this.view.getElement("select").value;if(""===t)return;let e=this.getProject(t).getTodos();this.view.toggleDateButton(this.time),e.sort(((t,e)=>t.dueDate>e.dueDate?1:e.dueDate>t.dueDate?-1:0)),this.view.displayTodos(this.getFilteredTodoDates(e,this.time))})),this.view.showCompletedCheckbox.addEventListener("click",(()=>{let t=this.view.getElement("select").value,e=this.getProject(t).getTodos();e.sort(((t,e)=>t.dueDate>e.dueDate?1:e.dueDate>t.dueDate?-1:0)),this.view.displayTodos(this.getFilteredTodoDates(e,this.time))})),document.addEventListener("click",(t=>{let e=t.target;if("SELECT"===e.tagName){let t=this.view.getElement("select").value,e=this.getProject(t).getTodos();this.view.displayTodos(this.getFilteredTodoDates(e,this.time))}else if("edit-task"===e.className){let t=e.parentNode.getAttribute("todo-id"),i=this.view.getElement("select").value,s=this.getProject(i).getTodo(t);this.view.displayEditModal(s)}else if("complete-task"===e.className){let t=e.parentNode.getAttribute("todo-id"),i=this.view.getElement("select").value,s=this.getProject(i);s.completeTodo(t),localStorage.setItem("projects",JSON.stringify(this.projects));let n=s.getTodos();n.sort(((t,e)=>t.dueDate>e.dueDate?1:e.dueDate>t.dueDate?-1:0)),this.view.displayTodos(this.getFilteredTodoDates(n,this.time))}else if("delete-task"===e.className){let t=e.parentNode.getAttribute("todo-id"),i=this.view.getElement("select").value,s=this.getProject(i);s.deleteTodo(t),localStorage.setItem("projects",JSON.stringify(this.projects));let n=s.getTodos();n.sort(((t,e)=>t.dueDate>e.dueDate?1:e.dueDate>t.dueDate?-1:0)),this.view.displayTodos(this.getFilteredTodoDates(n,this.time))}}))}projectExists(t){for(let e=0;e<this.projects.length;e++)if(this.projects[e].title===t)return!0;return!1}getProject(t){for(let e=0;e<this.projects.length;e++)if(this.projects[e].title===t)return this.projects[e];return!1}getFilteredTodoDates(t,e){if("all"===e)return t;let i=new Date;i.setHours(0,0,0,0);let s=new Date;return s.setHours(0,0,0,0),"week"===e?s.setDate(i.getDate()+7):"month"===e?s.setDate(i.getDate()+30):"year"===e&&s.setDate(i.getDate()+365),i=i.toISOString().substring(0,10),s=s.toISOString().substring(0,10),t.filter((t=>t.dueDate>=i&&t.dueDate<=s))}retrieveLocalObjects(){let t=[];for(let e=0;e<this.projectsLocal.length;e++){let i=new v(this.projectsLocal[e].title);for(let t=0;t<this.projectsLocal[e].todos.length;t++)i.addTodo(this.projectsLocal[e].todos[t].title,this.projectsLocal[e].todos[t].description,this.projectsLocal[e].todos[t].dueDate,this.projectsLocal[e].todos[t].priority,this.projectsLocal[e].todos[t].notes,this.projectsLocal[e].todos[t].completed);t.push(i)}return t}refresh(){this.view.displayAllProjects(this.projects,"option");let t=this.view.getElement("select").value;if(""===t)return;let e=this.getProject(t).getTodos();this.view.displayTodos(this.getFilteredTodoDates(e,this.time))}}(new class{constructor(){this.projectsInput=this.getElement(".projects-input"),this.projectsDropdown=this.getElement("select"),this.addProjectBtn=this.getElement(".add-project"),this.deleteProjectBtn=this.getElement(".delete-project"),this.addTaskBtn=this.getElement(".add-task"),this.showAllBtn=this.getElement(".show-all"),this.showWeekBtn=this.getElement(".show-week"),this.showMonthBtn=this.getElement(".show-month"),this.showYearBtn=this.getElement(".show-year"),this.showCompletedCheckbox=this.getElement("#show-completed"),this.modal=this.getElement(".modal"),this.modalContent=this.getElement(".modal-content"),this.tasksList=this.getElement(".tasks-list"),this.titleField=this.getElement("#title"),this.descriptionField=this.getElement("#description"),this.dueDateField=this.getElement("#dueDate"),this.lowPriorityField=this.getElement("#low"),this.mediumPriorityField=this.getElement("#medium"),this.highPriorityField=this.getElement("#high"),this.notesField=this.getElement("#notes"),this.idField=this.getElement("#todo-id"),this.submitBtn=this.getElement("input[type=submit]"),this.closeBtn=this.getElement(".close"),this.projectOptions=document.querySelectorAll("option")}getElement(t){return document.querySelector(t)}createElement(t,e=""){const i=document.createElement(t);return""!==e&&i.classList.add(e),i}deleteElement(t){document.querySelector(t).remove()}clearProjectInput(){this.projectsInput.value=""}displayNewProject(t,e,i=""){let s=this.createElement(e,i);s.innerText=t,s.value=t,t=t.replace(/\s+/g,"-"),s.classList.add(t),this.projectsDropdown.appendChild(s),s.selected=!0}displayAllProjects(t,e,i=""){for(let s=0;s<t.length;s++)this.displayNewProject(t[s].title,e,i)}toggleDateButton(t){"all"===t?(this.showAllBtn.classList.add("button-active"),this.showWeekBtn.classList.remove("button-active"),this.showMonthBtn.classList.remove("button-active"),this.showYearBtn.classList.remove("button-active")):"week"===t?(this.showAllBtn.classList.remove("button-active"),this.showWeekBtn.classList.add("button-active"),this.showMonthBtn.classList.remove("button-active"),this.showYearBtn.classList.remove("button-active")):"month"===t?(this.showAllBtn.classList.remove("button-active"),this.showWeekBtn.classList.remove("button-active"),this.showMonthBtn.classList.add("button-active"),this.showYearBtn.classList.remove("button-active")):"year"===t&&(this.showAllBtn.classList.remove("button-active"),this.showWeekBtn.classList.remove("button-active"),this.showMonthBtn.classList.remove("button-active"),this.showYearBtn.classList.add("button-active"))}displayNewModal(){this.modal.style.display="block",this.submitBtn.classList.remove("edit-task-submit"),this.submitBtn.classList.add("new-task-submit"),this.titleField.value="",this.descriptionField.value="",this.dueDateField.value="",this.lowPriorityField.checked=!0,this.mediumPriorityField.checked=!1,this.highPriorityField.checked=!1,this.notesField.value="",this.idField.value=""}hideModal(){this.modal.style.display="none"}displayEditModal(t){this.modal.style.display="block",this.submitBtn.classList.add("edit-task-submit"),this.submitBtn.classList.remove("new-task-submit"),this.titleField.value=t.title,this.descriptionField.value=t.description,this.dueDateField.value=t.dueDate,"low"===t.priority?this.lowPriorityField.checked=!0:"medium"===t.priority?this.mediumPriorityField.checked=!0:"high"===t.priority&&(this.highPriorityField.checked=!0),this.notesField.value=t.notes,this.idField.value=t.id}getTodo(){return[this.titleField.value,this.descriptionField.value,this.dueDateField.value,this.lowPriorityField.checked,this.mediumPriorityField.checked,this.highPriorityField.checked,this.notesField.value,this.idField.value]}displayTodos(t){this.tasksList.innerHTML="",!1===this.showCompletedCheckbox.checked&&(t=t.filter((t=>!1===t.completed))),t.forEach((t=>{let e=this.createElement("div","item");e.setAttribute("todo-id",t.id);let i=this.createElement("h2");i.innerText=t.title,e.appendChild(i);let s=this.createElement("p");s.innerText=t.dueDate,e.appendChild(s),this.editTaskBtn=new Image,this.editTaskBtn.src=f,this.editTaskBtn.classList.add("edit-task"),e.appendChild(this.editTaskBtn),this.completeTaskBtn=new Image,this.completeTaskBtn.src=w,this.completeTaskBtn.classList.add("complete-task"),e.appendChild(this.completeTaskBtn),this.deleteTaskBtn=new Image,this.deleteTaskBtn.src=b,this.deleteTaskBtn.classList.add("delete-task"),e.appendChild(this.deleteTaskBtn),"low"===t.priority?e.style.backgroundColor="#22c55e":"medium"===t.priority?e.style.backgroundColor="#f97316":"high"===t.priority&&(e.style.backgroundColor="#ef4444"),!0===t.completed?e.style.opacity="0.5":!1===t.completed&&(e.style.opacity="1"),this.tasksList.appendChild(e)}))}})})()})();