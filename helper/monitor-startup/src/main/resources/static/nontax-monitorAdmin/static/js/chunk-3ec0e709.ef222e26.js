(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ec0e709"],{9447:function(e,t,a){},b9dc:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hosts-manage"},[a("div",{staticClass:"search-bar-1"},[a("el-form",{ref:"ruleForm",attrs:{model:e.search,inline:!0,rules:e.search.rules}},[a("el-form-item",{attrs:{label:"主机名称",prop:"hostName"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入主机名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onQuery(t)}},model:{value:e.search.hostName,callback:function(t){e.$set(e.search,"hostName","string"===typeof t?t.trim():t)},expression:"search.hostName"}})],1),a("el-form-item",{attrs:{label:"IP地址",prop:"IP"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入IP地址"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onQuery(t)}},model:{value:e.search.IP,callback:function(t){e.$set(e.search,"IP","string"===typeof t?t.trim():t)},expression:"search.IP"}})],1),a("el-form-item",{attrs:{label:"主机类型",prop:"type"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择主机类型"},model:{value:e.search.type,callback:function(t){e.$set(e.search,"type",t)},expression:"search.type"}},[a("el-option",{attrs:{label:"应用服务器",value:"0"}}),a("el-option",{attrs:{label:"数据库服务器",value:"1"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.onQuery}},[e._v("查询")])],1)],1)],1),a("div",{staticClass:"tool-bar"},[a("el-link",{attrs:{icon:"el-icon-document-add"},on:{click:e.onAdd}},[e._v("新增")]),a("div",{staticClass:"split-line"}),a("el-link",{attrs:{icon:"el-icon-refresh"},on:{click:e.fetchData}},[e._v("刷新")])],1),a("div",{staticClass:"gird-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.grid.loading,expression:"grid.loading"}],ref:"table",attrs:{border:"",stripe:"",data:e.grid.rows,height:e.grid.height,"highlight-current-row":"","header-cell-style":{textAlign:"center"}},on:{"selection-change":function(t){return e.grid.selectedRow=t}}},[a("el-table-column",{attrs:{type:"index",width:"50",align:"center",label:"序号"}}),a("el-table-column",{attrs:{prop:"hostName",label:"被监控主机名称",align:"left","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"IP",label:"IP地址",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"type",label:"主机类型",align:"left","show-overflow-tooltip":"",formatter:e.transType}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{effect:"light",placement:"bottom-start",content:"查看",enterable:!1}},[a("el-link",{staticStyle:{"font-size":"20px",margin:"0 5px 0 0"},attrs:{icon:"el-icon-document"},on:{click:function(a){return e.onView(t.row)}}})],1),a("el-tooltip",{attrs:{effect:"light",placement:"bottom-start",content:"编辑",enterable:!1}},[a("el-link",{staticStyle:{"font-size":"20px",margin:"0 5px 0 0"},attrs:{icon:"el-icon-edit-outline"},on:{click:function(a){return e.onUpdate(t.row)}}})],1),a("el-tooltip",{attrs:{effect:"light",placement:"bottom-start",content:"删除",enterable:!1}},[a("el-link",{staticStyle:{"font-size":"20px",margin:"0 5px 0 0"},attrs:{icon:"el-icon-delete"},on:{click:function(a){return e.onDelete(t.row)}}})],1)]}}])})],1),a("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next","page-sizes":[10,30,50],"page-size":e.pagging.pageSize,"current-page":e.pagging.pageNum,total:e.pagging.total},on:{"size-change":e.onChangePageSize,"current-change":e.onChangeCurrentPage}})],1),e.dialog.show?a("el-dialog",{directives:[{name:"dialog",rawName:"v-dialog"}],attrs:{width:"700px",visible:e.dialog.show,"modal-append-to-body":!1,"close-on-click-modal":!1},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[a("i",{class:e.dialogMode.icon}),a("span",[e._v("服务器主机信息管理 —— "+e._s(e.dialogMode.title))])]),a("el-form",{ref:"form",attrs:{rules:e.dialog.rules,model:e.dialog.data,"label-width":"110px",disabled:3===e.dialog.mode}},[a("el-row",[3===e.dialog.mode?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"主机ID",prop:"fid"}},[a("el-input",{model:{value:e.dialog.data.fid,callback:function(t){e.$set(e.dialog.data,"fid","string"===typeof t?t.trim():t)},expression:"dialog.data.fid"}})],1)],1):e._e(),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"主机名称",prop:"hostName"}},[a("el-input",{model:{value:e.dialog.data.hostName,callback:function(t){e.$set(e.dialog.data,"hostName","string"===typeof t?t.trim():t)},expression:"dialog.data.hostName"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"IP地址",prop:"IP"}},[a("el-input",{model:{value:e.dialog.data.IP,callback:function(t){e.$set(e.dialog.data,"IP","string"===typeof t?t.trim():t)},expression:"dialog.data.IP"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"主机类型",prop:"type"}},[a("el-select",{staticStyle:{width:"100%"},model:{value:e.dialog.data.type,callback:function(t){e.$set(e.dialog.data,"type",t)},expression:"dialog.data.type"}},[a("el-option",{attrs:{label:"应用服务器",value:"0"}}),a("el-option",{attrs:{label:"数据库服务器",value:"1"}})],1)],1)],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[3!==e.dialog.mode?a("el-button",{attrs:{type:"primary",icon:"fa fa-save"},on:{click:e.onSave}},[e._v(" 保存")]):e._e()],1)],1):e._e()],1)},r=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("386d"),a("bd86")),i=(a("96cf"),a("3b8d"));function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={name:"HostsManager",data:function(){var e=function(e){return function(t,a,o){e?""===a||/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/.test(a)?o():o("请输入正确的IP地址"):""!==a&&/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/.test(a)?o():o("请输入正确的IP地址")}};return{search:{hostName:"",IP:"",type:"",rules:{IP:[{validator:e(!0),trigger:"blur"}]}},grid:{rows:[],height:null,loading:!1,selectedRow:[]},pagging:{pageSize:10,pageNum:1,total:0},dialog:{mode:null,show:!1,data:null,rules:{IP:[{required:!0,validator:e(!1),trigger:"blur"}],type:[{required:!0,message:"请至少选择一个主机类型",trigger:"change"}],hostName:[{required:!0,message:"请填写主机名称",trigger:"blur"}]}}}},computed:{dialogMode:function(){switch(this.dialog.mode){case 1:return{title:"新增主机",icon:"el-icon-document-add",message:"添加成功！"};case 2:return{title:"编辑主机",icon:"el-icon-edit-outline",message:"修改成功！"};case 3:return{title:"查看",icon:"el-icon-document"};default:return{}}}},mounted:function(){this.fetchData(),this.resize(),window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.addEventListener("resize",this.resize)},methods:{fetchData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.grid.loading=!0,e.next=3,this.$api.pagingData({params:l({mapperId:"com.bosssoft.monitor.dao.HostManageMapper.queryHosts",pageNum:this.pagging.pageNum,pageSize:this.pagging.pageSize},t)});case 3:a=e.sent,o=a.data,this.grid.loading=!1,this.grid.rows=o.data.rows,this.pagging.total=o.data.total;case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onChangeCurrentPage:function(e){this.pagging.pageNum=e,this.fetchData()},onChangePageSize:function(e){this.pagging.pageNum=1,this.pagging.pageSize=e,this.fetchData()},onAdd:function(){var e={hostName:"",IP:"",type:""};this.dialog.mode=1,this.dialog.show=!0,this.dialog.data=e},transType:function(e,t,a,o){return"0"===a?"应用服务器":"数据库服务器"},validateForm:function(e){var t=this;return function(a,o){t.$refs[e].validate((function(e){e?a():o&&o()}))}},onQuery:function(){var e=this;this.validateForm("ruleForm")((function(){e.pagging.pageNum=1,e.fetchData(e.search)}))},resize:function(){this.grid.height=this.$el.clientHeight-116},onUpdate:function(e){this.dialog.mode=2,this.dialog.show=!0,this.dialog.data=Object.assign({},e)},onView:function(e){this.dialog.mode=3,this.dialog.show=!0,this.dialog.data=Object.assign({},e)},onSave:function(){var e=this;this.validateForm("form")(Object(i["a"])(regeneratorRuntime.mark((function t(){var a,o,r,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,1!==e.dialog.mode){t.next=6;break}return t.next=4,e.$api.add({data:l({mapperId:"com.bosssoft.monitor.dao.HostManageMapper.insertHost"},e.dialog.data)});case 4:t.next=9;break;case 6:return a=e.dialog.data,o=a.fid,r=a.hostName,n=a.IP,i=a.type,t.next=9,e.$api.modify({data:{mapperId:"com.bosssoft.monitor.dao.HostManageMapper.updateHost",fid:o,hostName:r,IP:n,type:i}});case 9:e.fetchData(),e.dialog.show=!1,e.$message.success(e.dialogMode.message),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),t.t0.message&&e.$message.error(t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[0,14]])}))))},onDelete:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{this.$confirm("您确定要删除当前选中的记录吗?","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$api.remove({params:{mapperId:"com.bosssoft.monitor.dao.HostManageMapper.deleteHost",fid:t.fid}});case 2:a.fetchData(),a.$message.success("删除成功！");case 4:case"end":return e.stop()}}),e)})))).catch((function(){}))}catch(o){o.message&&this.$message.error(o.message)}case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},d=c,g=(a("fe81"),a("2877")),p=Object(g["a"])(d,o,r,!1,null,"34350fdb",null);t["default"]=p.exports},fe81:function(e,t,a){"use strict";var o=a("9447"),r=a.n(o);r.a}}]);
//# sourceMappingURL=chunk-3ec0e709.ef222e26.js.map