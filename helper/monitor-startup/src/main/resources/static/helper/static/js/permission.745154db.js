(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["permission"],{"18a0":function(e,t,r){"use strict";var a=r("8ec3"),n=r.n(a);n.a},"2e08":function(e,t,r){var a=r("9def"),n=r("9744"),i=r("be13");e.exports=function(e,t,r,o){var s=String(i(e)),l=s.length,c=void 0===r?" ":String(r),u=a(t);if(u<=l||""==c)return s;var d=u-l,p=n.call(c,Math.ceil(d/c.length));return p.length>d&&(p=p.slice(0,d)),o?p+s:s+p}},"3aca":function(e,t,r){},"4d0d":function(e,t,r){"use strict";var a=r("eccc"),n=r.n(a);n.a},"4dad":function(e,t,r){},"5dbc":function(e,t,r){var a=r("d3f4"),n=r("8b97").set;e.exports=function(e,t,r){var i,o=t.constructor;return o!==r&&"function"==typeof o&&(i=o.prototype)!==r.prototype&&a(i)&&n&&n(e,i),e}},"7cdf":function(e,t,r){var a=r("5ca1");a(a.S,"Number",{isInteger:r("9c12")})},"867b":function(e,t,r){"use strict";var a=r("3aca"),n=r.n(a);n.a},"8b97":function(e,t,r){var a=r("d3f4"),n=r("cb7c"),i=function(e,t){if(n(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(n){t=!0}return function(e,r){return i(e,r),t?e.__proto__=r:a(e,r),e}}({},!1):void 0),check:i}},"8ec3":function(e,t,r){},9744:function(e,t,r){"use strict";var a=r("4588"),n=r("be13");e.exports=function(e){var t=String(n(this)),r="",i=a(e);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t);return r}},"9c12":function(e,t,r){var a=r("d3f4"),n=Math.floor;e.exports=function(e){return!a(e)&&isFinite(e)&&n(e)===e}},aa77:function(e,t,r){var a=r("5ca1"),n=r("be13"),i=r("79e5"),o=r("fdef"),s="["+o+"]",l="​",c=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),d=function(e,t,r){var n={},s=i((function(){return!!o[e]()||l[e]()!=l})),c=n[e]=s?t(p):o[e];r&&(n[r]=c),a(a.P+a.F*s,"String",n)},p=d.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},bbd0:function(e,t,r){"use strict";var a=r("4dad"),n=r.n(a);n.a},c23a:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"permission-index"},[r("div",{staticClass:"left-aside"},[r("menu-tree",{ref:"menuTree"})],1),r("div",{staticClass:"right-aside"},[r("div",{staticClass:"tool-bar"},[r("el-link",{attrs:{icon:"el-icon-document-checked"},on:{click:function(t){return e.authorization()}}},[e._v("确认授权")]),r("div",{staticClass:"split-line"}),r("el-link",{attrs:{icon:"el-icon-document-add"},on:{click:function(t){return e.$refs.roleList.onAdd()}}},[e._v("新增角色")]),r("div",{staticClass:"split-line"}),r("el-link",{attrs:{icon:"el-icon-circle-check"},on:{click:function(t){return e.$refs.roleList.toggleEnable({status:1})}}},[e._v("启用")]),r("div",{staticClass:"split-line"}),r("el-link",{attrs:{icon:"el-icon-remove-outline"},on:{click:function(t){return e.$refs.roleList.toggleEnable({status:0})}}},[e._v("停用")])],1),r("div",{staticClass:"grid-content"},[r("div",{staticClass:"right-top"},[r("role-list",{ref:"roleList",on:{selectMenu:function(t){return e.$refs["menuTree"].selectMenu(t)},queryUser:function(t){return e.$refs["userList"].featchRoleUser(t)}}})],1),r("div",{staticClass:"right-bottom"},[r("user-list",{ref:"userList",on:{addRoleUser:e.addRoleUser,beforeAddRoleUser:e.beforeAddRoleUser,removeRoleUser:e.removeRoleUser}})],1)])])])},n=[],i=(r("96cf"),r("3b8d")),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"menu-tree"},[r("el-input",{staticClass:"search-input",attrs:{placeholder:"搜索"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),r("el-tree",{ref:"menuTree",staticClass:"tree-view menu-tree-list",attrs:{"show-checkbox":"","expand-on-click-node":"","default-expanded-keys":["-1"],"node-key":"id",data:e.menus,props:{label:"name",children:"children"},"filter-node-method":e.filterNode},on:{"check-change":e.onCheckChange}})],1)},s=[],l=(r("ac6a"),r("7514"),r("7f7f"),{name:"MenuTree",data:function(){return{rawMenus:[],menus:[{id:"-1",name:"菜单列表",children:[]}],filterText:null}},created:function(){},watch:{filterText:function(e){this.$refs.menuTree.filter(e)}},mounted:function(){this.featchMenu()},methods:{filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},featchMenu:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.queryData({params:{mapperId:"com.bosssoft.monitor.dao.MenuMapper.menus"}});case 2:t=e.sent,r=t.data,this.rawMenus=r.data,this.initMenuData(r.data);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),initMenuData:function(e){var t=this,r=e.filter((function(t){return!e.find((function(e){return e.id===t.parentId}))}));r.forEach((function(r){t.getChildMenu(r,e)})),this.menus[0].children=r},getChildMenu:function(e,t){var r=this;e.children=[],t.forEach((function(a){a.parentId===e.id&&(e.children.push(a),r.getChildMenu(a,t))}))},selectMenu:function(e){this.$refs["menuTree"].setCheckedKeys(e)},onCheckChange:function(e,t){var r,a;"0404"===e.menuCode&&t&&this.$refs.menuTree.setChecked(null===(r=this.rawMenus.find((function(e){return"0405"===e.menuCode})))||void 0===r?void 0:r.id,!1);"0405"===e.menuCode&&t&&this.$refs.menuTree.setChecked(null===(a=this.rawMenus.find((function(e){return"0404"===e.menuCode})))||void 0===a?void 0:a.id,!1)}}}),c=l,u=(r("18a0"),r("2877")),d=Object(u["a"])(c,o,s,!1,null,"725bf80a",null),p=d.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"role-list"},[r("div",{staticClass:"search-bar"},[r("el-form",{attrs:{inline:"",model:e.search}},[r("el-form-item",{attrs:{label:"角色名称"}},[r("el-input",{attrs:{clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onQuery(t)}},model:{value:e.search.roleName,callback:function(t){e.$set(e.search,"roleName",t)},expression:"search.roleName"}})],1),r("el-form-item",{attrs:{label:"角色状态"}},[r("el-select",{attrs:{clearable:""},model:{value:e.search.status,callback:function(t){e.$set(e.search,"status",t)},expression:"search.status"}},[r("el-option",{attrs:{label:"启用",value:1}}),r("el-option",{attrs:{label:"停用",value:0}})],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"warning",icon:"el-icon-search"},on:{click:e.onQuery}},[e._v("查询")])],1)],1)],1),e.grid.height?r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.grid.loading,expression:"grid.loading"}],ref:"table",attrs:{border:"",stripe:"","highlight-current-row":"",height:e.grid.height,data:e.grid.rows},on:{"row-click":e.onRowClick,"selection-change":function(t){return e.selectedRoles=t}}},[r("el-table-column",{attrs:{type:"index",width:"50",align:"center",label:"序号"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"code",label:"角色编码",width:"200"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"name",label:"角色名称"}}),r("el-table-column",{attrs:{prop:"status",align:"center",label:"角色状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"===t.row.status?r("el-tag",{attrs:{type:"success"}},[e._v("启用")]):r("el-tag",{attrs:{type:"danger"}},[e._v("停用")])]}}],null,!1,4021331983)}),r("el-table-column",{attrs:{align:"center",width:"100",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-link",{staticStyle:{"font-size":"20px",margin:"0 5px 0 0"},attrs:{icon:"el-icon-edit-outline"},on:{click:function(r){return e.onUpdate(t.row)}}}),r("el-link",{staticStyle:{"font-size":"20px"},attrs:{icon:"el-icon-delete"},on:{click:function(r){return e.onDelete(t.row)}}})]}}],null,!1,2070165969)})],1):e._e(),r("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next","page-sizes":[10,30,50],"page-size":e.pagging.pageSize,"current-page":e.pagging.pageNum,total:e.pagging.total},on:{"size-change":e.onChangePageSize,"current-change":e.onChangeCurrentPage}}),e.dialog.show?r("el-dialog",{directives:[{name:"dialog",rawName:"v-dialog"}],attrs:{width:"640px",visible:e.dialog.show,"modal-append-to-body":!1,"close-on-click-modal":!1},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[r("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[r("i",{class:e.dialogMode.icon}),r("span",[e._v("角色维护 —— "+e._s(e.dialogMode.title))])]),r("el-form",{ref:"form",attrs:{rules:e.dialog.rules,model:e.dialog.data,"label-width":"100px"}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"角色编码",prop:"code"}},[r("el-input",{attrs:{disabled:1!==e.dialog.mode},model:{value:e.dialog.data.code,callback:function(t){e.$set(e.dialog.data,"code",t)},expression:"dialog.data.code"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[r("el-input",{attrs:{maxlength:"10"},model:{value:e.dialog.data.name,callback:function(t){e.$set(e.dialog.data,"name",t)},expression:"dialog.data.name"}})],1)],1)],1),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-select",{model:{value:e.dialog.data.status,callback:function(t){e.$set(e.dialog.data,"status",t)},expression:"dialog.data.status"}},[r("el-option",{attrs:{label:"启用",value:"1"}}),r("el-option",{attrs:{label:"停用",value:"0"}})],1)],1),r("el-form-item",{attrs:{label:"说明",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",maxlength:"100","show-word-limit":""},model:{value:e.dialog.data.remark,callback:function(t){e.$set(e.dialog.data,"remark",t)},expression:"dialog.data.remark"}})],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",icon:"fa fa-save"},on:{click:e.onSave}},[e._v(" 保存")])],1)],1):e._e()],1)},f=[],h=(r("8e6e"),r("456d"),r("bd86")),m=(r("6b54"),r("f576"),r("c5f6"),r("7cdf"),r("386d"),r("c32d")),v=r.n(m);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(r,!0).forEach((function(t){Object(h["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={name:"RoleList",data:function(){return{search:{status:null,roleName:null},grid:{rows:[],height:null,loading:!1},pagging:{total:0,pageNum:1,pageSize:10},dialog:{mode:null,show:!1,data:{name:null,code:null,status:null,remark:null},rules:{code:[{required:!0,message:"请输入角色编码"}],name:[{required:!0,message:"请输入角色名称"}]}},selectedRoles:[]}},computed:{dialogMode:function(){switch(this.dialog.mode){case 1:return{title:"新增",icon:"el-icon-document-add",message:"添加成功！"};case 2:return{title:"编辑",icon:"el-icon-edit-outline",message:"修改成功！"};case 3:return{title:"查看",icon:"el-icon-document"};default:return{}}}},created:function(){},mounted:function(){this.grid.height=this.$el.clientHeight-75,this.featchData()},methods:{featchData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.grid.loading=!0,e.next=3,this.$api.pagingData({params:{mapperId:"com.bosssoft.monitor.dao.RoleMapper.roles",pageNum:this.pagging.pageNum,pageSize:this.pagging.pageSize,roleName:this.search.roleName,status:this.search.status}});case 3:t=e.sent,r=t.data,this.grid.loading=!1,this.grid.rows=r.data.rows,this.pagging.total=r.data.total,this.pagging.pageNum=r.data.pageNum,this.pagging.pageSize=r.data.pageSize;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onQuery:function(){this.pagging.pageNum=1,this.featchData()},onChangeCurrentPage:function(e){this.pagging.pageNum=e,this.featchData()},onChangePageSize:function(e){this.pagging.pageNum=1,this.pagging.pageSize=e,this.featchData()},onAdd:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={code:v()().format("HHmmss"),name:null,remark:null,status:"1"},e.next=3,this.$api.queryData({params:{mapperId:"com.bosssoft.monitor.dao.RoleMapper.newestCode",isList:!1}});case 3:a=e.sent,n=a.data,(null===(t=n.data)||void 0===t?void 0:t.code)&&Number.isInteger(parseInt(n.data.code))&&(r.code=(parseInt(n.data.code)+1).toString().padStart(6,"0")),this.dialog.mode=1,this.dialog.data=r,this.dialog.show=!0;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),validateBeforeDelete:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.queryData({params:{mapperId:"com.bosssoft.monitor.dao.RoleMapper.ifUsed",isList:!1,roleId:t.fid}});case 2:if(r=e.sent,a=r.data,!(a.data.count>0)){e.next=7;break}return this.$message.info("该角色有用户在使用，不能删除！"),e.abrupt("return",Promise.reject(new Error));case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onDelete:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.validateBeforeDelete(t);case 3:this.$confirm("您确定要删除当前记录吗?","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.$api.remove({params:{mapperId:"com.bosssoft.monitor.dao.RoleMapper.deleteByPrimaryKey",fid:t.fid}});case 2:r.featchData(),r.$message.success("删除成功！");case 4:case"end":return e.stop()}}),e)})))).catch((function(){})),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),e.t0.message&&this.$message.error(e.t0.message);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(t){return e.apply(this,arguments)}return t}(),onUpdate:function(e){this.dialog.mode=2,this.dialog.show=!0,this.dialog.data=Object.assign({},e)},validateBeforeSave:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs["form"].validate();case 2:if(1!==this.dialog.mode){e.next=10;break}return e.next=5,this.$api.queryData({params:{mapperId:"com.bosssoft.monitor.dao.RoleMapper.checkCode",isList:!1,code:this.dialog.data.code}});case 5:if(t=e.sent,r=t.data,!(r.data.count>0)){e.next=10;break}return this.$message.info("角色编码已存在，请重新输入！"),e.abrupt("return",Promise.reject(new Error));case 10:return e.abrupt("return",Promise.resolve());case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onSave:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.validateBeforeSave();case 3:if(1!==this.dialog.mode){e.next=8;break}return e.next=6,this.$api.add({data:w({mapperId:"com.bosssoft.monitor.dao.RoleMapper.insertSelective"},this.dialog.data)});case 6:e.next=11;break;case 8:return t=this.dialog.data,e.next=11,this.$api.modify({data:{mapperId:"com.bosssoft.monitor.dao.RoleMapper.updateByPrimaryKeySelective",fid:t.fid,name:t.name,status:t.status,remark:t.remark}});case 11:this.dialog.show=!1,this.featchData(),this.$message.success(this.dialogMode.message),e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](0),e.t0.message&&this.$message.error(e.t0.message);case 19:case"end":return e.stop()}}),e,this,[[0,16]])})));function t(){return e.apply(this,arguments)}return t}(),onRowClick:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs["table"].clearSelection(),this.$refs["table"].toggleRowSelection(t),this.queryMenuAndUser(t);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),queryMenuAndUser:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$emit("queryUser",t),e.next=3,this.$api.queryData({params:{mapperId:"com.bosssoft.monitor.dao.RoleMapper.roleMenu",roleId:t.fid}});case 3:r=e.sent,a=r.data,this.$emit("selectMenu",a.data);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),toggleEnable:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.status;0!==this.selectedRoles.length?this.$api.modify({data:{mapperId:"com.bosssoft.monitor.dao.RoleMapper.toggleEnable",status:r,roleIds:JSON.stringify(this.selectedRoles.map((function(e){return e.fid})))}}).then((function(){e.featchData()})):this.$message.info("请选择角色！")}}},k=y,x=(r("4d0d"),Object(u["a"])(k,g,f,!1,null,"13182f31",null)),R=x.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-list"},[r("div",{staticClass:"tool-bar"},[r("el-link",{attrs:{icon:"el-icon-document-add"},on:{click:function(t){return e.$emit("beforeAddRoleUser")}}},[e._v("新增角色用户")]),e._v(" \n  ")],1),e.grid.height?r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.grid.loading,expression:"grid.loading"}],attrs:{border:"",stripe:"",height:e.grid.height,data:e.grid.rows}},[r("el-table-column",{attrs:{type:"index",width:"50",align:"center",label:"序号"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"userName",label:"用户名称",width:"200"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"userCode",label:"角色账号",width:"120"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"identityCode",align:"center",label:"身份证号",width:"130"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"mobileNo",align:"center",label:"手机号",width:"130"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"mainOrg",label:"所属机构",width:"130"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"mainPosition",label:"所属岗位"}}),r("el-table-column",{attrs:{align:"center",width:"50",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-link",{staticStyle:{"font-size":"20px"},attrs:{icon:"el-icon-delete"},on:{click:function(r){return e.onDelete(t.row)}}})]}}],null,!1,1604076764)})],1):e._e(),r("el-dialog",{directives:[{name:"dialog",rawName:"v-dialog"}],attrs:{width:"900px",visible:e.dialog.show,"modal-append-to-body":!1,"close-on-click-modal":!1},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)},open:e.onDialogOpen}},[r("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[r("i",{staticClass:"el-icon-document-add"}),r("span",[e._v("角色用户 —— 新增")])]),r("div",{staticClass:"search-bar"},[r("el-form",{attrs:{inline:"",model:e.dialog.search}},[r("el-form-item",{attrs:{label:"用户名称"}},[r("el-input",{attrs:{clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onQuery(t)}},model:{value:e.dialog.search.userName,callback:function(t){e.$set(e.dialog.search,"userName",t)},expression:"dialog.search.userName"}})],1),r("el-form-item",{attrs:{label:"用户账号"}},[r("el-input",{attrs:{clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onQuery(t)}},model:{value:e.dialog.search.userCode,callback:function(t){e.$set(e.dialog.search,"userCode",t)},expression:"dialog.search.userCode"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"warning",icon:"el-icon-search"},on:{click:e.onQuery}},[e._v("查询")])],1)],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dialog.grid.loading,expression:"dialog.grid.loading"}],ref:"userTable",attrs:{border:"",stripe:"",height:365,data:e.dialog.grid.rows},on:{"selection-change":function(t){return e.selectedUsers=t},"row-click":function(t){return e.$refs["userTable"].toggleRowSelection(t)}}},[r("el-table-column",{attrs:{type:"selection",align:"center",width:"50"}}),r("el-table-column",{attrs:{type:"index",width:"50",align:"center",label:"序号"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"userName",label:"用户名称",width:"200"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"userCode",label:"用户账号",width:"150"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"mainOrg",label:"所属机构",width:"200"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"mainPosition",label:"所属岗位"}})],1),r("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next","page-sizes":[10,30,50],"page-size":e.dialog.pagging.pageSize,"current-page":e.dialog.pagging.pageNum,total:e.dialog.pagging.total},on:{"size-change":e.onChangePageSize,"current-change":e.onChangeCurrentPage}}),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",icon:"fa fa-save"},on:{click:e.onSave}},[e._v(" 保存")])],1)],1)],1)},C=[],N={name:"UserList",data:function(){return{grid:{rows:[],height:null,loading:!1},dialog:{show:!1,search:{userName:null,userCode:null},grid:{rows:[],height:null,loading:!1},pagging:{total:0,pageNum:1,pageSize:10}},selectedUsers:[]}},created:function(){},mounted:function(){this.grid.height=this.$el.clientHeight-32},methods:{featchRoleUser:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.grid.loading=!0,e.next=3,this.$api.queryData({params:{mapperId:"com.bosssoft.monitor.dao.RoleMapper.roleUser",roleId:t.fid}});case 3:r=e.sent,a=r.data,this.grid.loading=!1,this.grid.rows=a.data;case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),featchData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.dialog.grid.loading=!0,e.next=3,this.$api.pagingData({params:{mapperId:"com.bosssoft.monitor.dao.UserMapper.userList",pageNum:this.dialog.pagging.pageNum,pageSize:this.dialog.pagging.pageSize,userName:this.dialog.search.userName,userCode:this.dialog.search.userCode}});case 3:t=e.sent,r=t.data,this.dialog.grid.loading=!1,this.dialog.grid.rows=r.data.rows,this.dialog.pagging.total=r.data.total,this.dialog.pagging.pageNum=r.data.pageNum,this.dialog.pagging.pageSize=r.data.pageSize;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onQuery:function(){this.dialog.pagging.pageNum=1,this.featchData()},onChangeCurrentPage:function(e){this.dialog.pagging.pageNum=e,this.featchData()},onChangePageSize:function(e){this.dialog.pagging.pageNum=1,this.dialog.pagging.pageSize=e,this.featchData()},onDialogOpen:function(){this.dialog.search.userName=null,this.dialog.search.userCode=null,this.onQuery()},validateBeforeSave:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==this.selectedUsers.length){e.next=3;break}return this.$message.info("请选择要添加的用户！"),e.abrupt("return",Promise.reject(new Error));case 3:return e.abrupt("return",Promise.resolve());case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onSave:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.validateBeforeSave();case 3:this.$emit("addRoleUser",this.selectedUsers),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),e.t0.message&&this.$message.error(e.t0.message);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}(),onDelete:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{this.$confirm("您确定要删除当前用户吗?","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){r.$emit("removeRoleUser",[t.userId])})).catch((function(){}))}catch(a){a.message&&this.$message.error(a.message)}case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},O=N,S=(r("bbd0"),Object(u["a"])(O,$,C,!1,null,"74526ecd",null)),I=S.exports,_={name:"PermissionIndex",components:{MenuTree:p,RoleList:R,UserList:I},data:function(){return{}},created:function(){},mounted:function(){},methods:{authorization:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.$refs["roleList"].selectedRoles.map((function(e){return e.fid})),r=this.$refs["menuTree"].$refs["menuTree"].getCheckedKeys().filter((function(e){return"-1"!==e})),0!==t.length){e.next=5;break}return this.$message.info("请选择角色！"),e.abrupt("return");case 5:return e.next=7,this.$api.add({data:{mapperId:"com.bosssoft.monitor.dao.RoleMapper.insertRoleMenu",roleIds:JSON.stringify(t),menuIds:JSON.stringify(r)}});case 7:this.$message.success("授权成功！");case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),beforeAddRoleUser:function(){var e=this.$refs["roleList"].selectedRoles;0!==e.length?this.$refs["userList"].dialog.show=!0:this.$message.info("请选择角色！")},addRoleUser:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$refs["roleList"].selectedRoles.map((function(e){return e.fid})),r=this.$refs["userList"].selectedUsers.map((function(e){return e.userId})),e.next=4,this.$api.add({data:{mapperId:"com.bosssoft.monitor.dao.RoleMapper.insertRoleUser",roleIds:JSON.stringify(t),userIds:JSON.stringify(r)}});case 4:this.$refs["userList"].featchRoleUser(this.$refs["roleList"].selectedRoles[0]),this.$message.success("角色用户添加成功！");case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),removeRoleUser:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=this.$refs["roleList"].selectedRoles.map((function(e){return e.fid})),0!==r.length){e.next=4;break}return this.$message.info("请选择角色！"),e.abrupt("return");case 4:return e.next=6,this.$api.remove({params:{mapperId:"com.bosssoft.monitor.dao.RoleMapper.deleteRoleUser",roleIds:JSON.stringify(r),userIds:JSON.stringify(t)}});case 6:this.$refs["userList"].featchRoleUser(this.$refs["roleList"].selectedRoles[0]);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},M=_,j=(r("867b"),Object(u["a"])(M,a,n,!1,null,"5ebab94e",null));t["default"]=j.exports},c5f6:function(e,t,r){"use strict";var a=r("7726"),n=r("69a8"),i=r("2d95"),o=r("5dbc"),s=r("6a99"),l=r("79e5"),c=r("9093").f,u=r("11e9").f,d=r("86cc").f,p=r("aa77").trim,g="Number",f=a[g],h=f,m=f.prototype,v=i(r("2aeb")(m))==g,b="trim"in String.prototype,w=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():p(t,3);var r,a,n,i=t.charCodeAt(0);if(43===i||45===i){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+t}for(var o,l=t.slice(2),c=0,u=l.length;c<u;c++)if(o=l.charCodeAt(c),o<48||o>n)return NaN;return parseInt(l,a)}}return+t};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof f&&(v?l((function(){m.valueOf.call(r)})):i(r)!=g)?o(new h(w(t)),r,f):w(t)};for(var y,k=r("9e1e")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;k.length>x;x++)n(h,y=k[x])&&!n(f,y)&&d(f,y,u(h,y));f.prototype=m,m.constructor=f,r("2aba")(a,g,f)}},eccc:function(e,t,r){},f576:function(e,t,r){"use strict";var a=r("5ca1"),n=r("2e08"),i=r("a25f"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);a(a.P+a.F*o,"String",{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=permission.745154db.js.map