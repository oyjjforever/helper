(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ticket-grant"],{"0aff":function(e,t,a){},"20fd":function(e,t,a){"use strict";var r=a("d9f6"),n=a("aebd");e.exports=function(e,t,a){t in e?r.f(e,t,n(0,a)):e[t]=a}},"549b":function(e,t,a){"use strict";var r=a("d864"),n=a("63b6"),o=a("241e"),i=a("b0dc"),s=a("3702"),l=a("b447"),u=a("20fd"),c=a("7cd6");n(n.S+n.F*!a("4ee1")((function(e){Array.from(e)})),"Array",{from:function(e){var t,a,n,d,h=o(e),m="function"==typeof this?this:Array,p=arguments.length,f=p>1?arguments[1]:void 0,b=void 0!==f,g=0,v=c(h);if(b&&(f=r(f,p>2?arguments[2]:void 0,2)),void 0==v||m==Array&&s(v))for(t=l(h.length),a=new m(t);t>g;g++)u(a,g,b?f(h[g],g):h[g]);else for(d=v.call(h),a=new m;!(n=d.next()).done;g++)u(a,g,b?i(d,f,[n.value,g],!0):n.value);return a.length=g,a}})},"774e":function(e,t,a){e.exports=a("d2d5")},"81b5":function(e,t,a){"use strict";var r=a("0aff"),n=a.n(r);n.a},d2d5:function(e,t,a){a("1654"),a("549b"),e.exports=a("584a").Array.from},fac8:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"indicators-setting"},[a("div",{staticClass:"grid-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.grid.loading,expression:"grid.loading"}],ref:"table",attrs:{border:"",stripe:"",data:e.grid.rows,height:e.grid.height,"highlight-current-row":""},on:{"selection-change":function(t){return e.grid.selectedRow=t}}},[a("el-table-column",{attrs:{type:"index",width:"50",align:"center",label:"序号"}}),a("el-table-column",{attrs:{prop:"subName",label:"自动下发业务监控指标",align:"left","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{width:"200",align:"center",prop:"warnLevel",label:"预警级别","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"userName",label:"编制人",align:"left",width:"200","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{width:"150",align:"center",label:"编制日期",prop:"createTime","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("dateTime")(t.row.createTime,"YYYY-MM-DD")))]}}])}),a("el-table-column",{attrs:{align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{effect:"light",placement:"bottom-start",content:"编辑",enterable:!1}},[a("el-link",{staticStyle:{"font-size":"20px",margin:"0 5px 0 0"},attrs:{icon:"el-icon-edit-outline"},on:{click:function(a){return e.onUpdate(t.row)}}})],1),a("el-tooltip",{attrs:{effect:"light",placement:"bottom-start",content:"查看",enterable:!1}},[a("el-link",{staticStyle:{"font-size":"20px",margin:"0 5px 0 0"},attrs:{icon:"el-icon-view"},on:{click:function(a){return e.onView(t.row)}}})],1)]}}])})],1)],1),e.dialog.show?a("el-dialog",{directives:[{name:"dialog",rawName:"v-dialog"}],attrs:{width:"700px",visible:e.dialog.show,"modal-append-to-body":!1,"close-on-click-modal":!1},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[a("i",{class:e.dialogMode.icon}),a("span",[e._v("自动下发监控指标 —— "+e._s(e.dialogMode.title))])]),a("el-form",{ref:"form",attrs:{rules:e.dialog.rules,model:e.dialog.data,"label-width":"110px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"监控指标",prop:"typeName"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:1!==e.dialog.mode},on:{change:e.onSubNameChange},model:{value:e.dialog.data.subCode,callback:function(t){e.$set(e.dialog.data,"subCode",t)},expression:"dialog.data.subCode"}},e._l(e.targetSettins,(function(e){return a("el-option",{key:e.subCode,attrs:{value:e.subCode,label:e.subName}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"预警级别",prop:"warnLevel"}},[a("el-radio",{attrs:{disabled:"",label:"一般预警"},model:{value:e.dialog.data.warnLevel,callback:function(t){e.$set(e.dialog.data,"warnLevel",t)},expression:"dialog.data.warnLevel"}},[e._v("一般预警")]),a("el-radio",{attrs:{disabled:"",label:"重要预警"},model:{value:e.dialog.data.warnLevel,callback:function(t){e.$set(e.dialog.data,"warnLevel",t)},expression:"dialog.data.warnLevel"}},[e._v("重要预警")])],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"监控规则",prop:"monitorRule"}},[a("el-input",{attrs:{disabled:""},model:{value:e.dialog.data.monitorRule,callback:function(t){e.$set(e.dialog.data,"monitorRule",t)},expression:"dialog.data.monitorRule"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.thresholdLabel,prop:"threshold"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:3===e.dialog.mode},model:{value:e.dialog.data.threshold,callback:function(t){e.$set(e.dialog.data,"threshold",t)},expression:"dialog.data.threshold"}},e._l(e.threshold,(function(e){return a("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"编制人",prop:"userName"}},[a("el-input",{attrs:{disabled:""},model:{value:e.dialog.data.userName,callback:function(t){e.$set(e.dialog.data,"userName",t)},expression:"dialog.data.userName"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"编制时间",prop:"createTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{disabled:"",type:"date",placeholder:"选择日期"},model:{value:e.dialog.data.createTime,callback:function(t){e.$set(e.dialog.data,"createTime",t)},expression:"dialog.data.createTime"}})],1)],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[3!==e.dialog.mode?a("el-button",{attrs:{type:"primary",icon:"fa fa-save"},on:{click:e.onSave}},[e._v(" 保存")]):e._e()],1)],1):e._e()],1)},n=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("7514"),a("a745")),i=a.n(o);function s(e){if(i()(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}var l=a("774e"),u=a.n(l),c=a("c8bb"),d=a.n(c);function h(e){if(d()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return u()(e)}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(e){return s(e)||h(e)||m()}var f=a("bd86"),b=(a("96cf"),a("3b8d")),g=a("c32d"),v=a.n(g);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(f["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x={name:"TicketGrant",data:function(){return{grid:{rows:[],height:null,loading:!1,selectedRow:[]},dialog:{mode:null,show:!1,data:{typeCode:null,typeName:null,subCode:null,subName:null,warnLevel:null,monitorRule:">",threshold:null,createBy:null,userName:null,createTime:null},rules:{typeName:[{required:!0,message:"请选择监控指标！"}],threshold:[{required:!0,message:"请选择数值！"}]}},targetSettins:[{subName:"日下发平均耗时",subCode:"001"},{subName:"发放失败次数占比",subCode:"002"},{subName:"某时段发放平均耗时/日平均耗时",subCode:"003"},{subName:"财政某票据库存量/该票据前30日发放量",subCode:"004"},{subName:"单位某票据库存量/该票据前30日开票量",subCode:"005"}]}},computed:{dialogMode:function(){switch(this.dialog.mode){case 1:return{title:"新增",icon:"el-icon-document-add",message:"添加成功！"};case 2:return{title:"编辑",icon:"el-icon-edit-outline",message:"修改成功！"};case 3:return{title:"查看",icon:"el-icon-document"};default:return{}}},threshold:function(){switch(this.dialog.data.subCode){case"001":return[{value:"1",label:"1s"},{value:"2",label:"2s"},{value:"3",label:"3s"}];case"002":return[{value:"10",label:"10%"},{value:"20",label:"20%"},{value:"30",label:"30%"}];case"003":return[{value:"1",label:"1.0"},{value:"1.1",label:"1.1"},{value:"1.2",label:"1.2"},{value:"1.3",label:"1.3"}];case"004":return[{value:"1",label:"1.0"},{value:"2",label:"2.0"},{value:"3",label:"3.0"},{value:"4",label:"4.0"},{value:"5",label:"5.0"}];case"005":return[{value:"1",label:"1.0"},{value:"2",label:"2.0"},{value:"3",label:"3.0"},{value:"4",label:"4.0"},{value:"5",label:"5.0"}];default:return[]}},thresholdLabel:function(){switch(this.dialog.data.subCode){case"001":return"耗时";case"002":case"003":case"004":case"005":return"比例";default:return"数值"}}},created:function(){this.featchData()},methods:{featchData:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.grid.loading=!0,e.next=3,this.$api.queryData({params:{mapperId:"com.bosssoft.monitor.dao.ThresholdMapper.thresholds",typeCode:"09"}});case 3:t=e.sent,a=t.data,this.grid.loading=!1,this.grid.rows=a.data;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),validateBeforeAdd:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve());case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),onAdd:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.validateBeforeAdd();case 3:t={typeCode:"09",typeName:"票据自动发放",subCode:null,subName:null,monitorRule:">",threshold:null,createBy:this.$store.state.user.userInfo.userId,userName:this.$store.state.user.userInfo.userName,createTime:v()().format("YYYY-MM-DD HH:mm:ss")},this.dialog.mode=1,this.dialog.show=!0,this.dialog.data=t,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),e.t0.message&&this.$message.error(e.t0.message);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),validateBeforeDelete:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1!==t.status){e.next=3;break}return this.$message.info("当前指标已启用，不允许删除！"),e.abrupt("return",Promise.reject(new Error));case 3:return e.abrupt("return",Promise.resolve());case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onDelete:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.validateBeforeDelete(t);case 3:this.$confirm("您确定要删除当前选中的记录吗?","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$api.remove({params:{mapperId:"com.bosssoft.monitor.dao.ThresholdMapper.deleteByPrimaryKey",fid:t.fid}});case 2:a.featchData(),a.$message.success("删除成功！");case 4:case"end":return e.stop()}}),e)})))).catch((function(){})),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),e.t0.message&&this.$message.error(e.t0.message);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(t){return e.apply(this,arguments)}return t}(),validateBeforeUpdate:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1!==t.status){e.next=3;break}return this.$message.info("当前指标已启用，不允许编辑！"),e.abrupt("return",Promise.reject(new Error));case 3:return e.abrupt("return",Promise.resolve());case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onUpdate:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{this.dialog.mode=2,this.dialog.show=!0,this.dialog.data=Object.assign({},t)}catch(a){a.message&&this.$message.error(a.message)}case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onView:function(e){this.dialog.mode=3,this.dialog.show=!0,this.dialog.data=Object.assign({},e)},validateBeforeSave:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs["form"].validate();case 2:if(1!==this.dialog.mode){e.next=10;break}return e.next=5,this.$api.queryData({params:{mapperId:"com.bosssoft.monitor.dao.ThresholdMapper.isExists",isList:!1,typeCode:"09",subCode:this.dialog.data.subCode}});case 5:if(t=e.sent,a=t.data,!(a.data.count>0)){e.next=10;break}return this.$message.info("当前已存在启用的{".concat(this.dialog.data.subName,"}指标，不允许新增！")),e.abrupt("return",Promise.reject(new Error));case 10:return this.dialog.mode,e.abrupt("return",Promise.resolve());case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onSave:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.validateBeforeSave();case 3:if(1!==this.dialog.mode){e.next=8;break}return e.next=6,this.$api.add({data:y({mapperId:"com.bosssoft.monitor.dao.ThresholdMapper.insertSelective"},this.dialog.data)});case 6:e.next=11;break;case 8:return t=this.dialog.data,e.next=11,this.$api.modify({data:{mapperId:"com.bosssoft.monitor.dao.ThresholdMapper.updateByPrimaryKeySelective",fid:t.fid,threshold:t.threshold,createBy:this.$store.state.user.userInfo.userId,createTime:v()().format("YYYY-MM-DD HH:mm:ss")}});case 11:this.featchData(),this.dialog.show=!1,this.$message.success(this.dialogMode.message),e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](0),e.t0.message&&this.$message.error(e.t0.message);case 19:case"end":return e.stop()}}),e,this,[[0,16]])})));function t(){return e.apply(this,arguments)}return t}(),toggleEnable:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=[],!a){e.next=5;break}r.push(a),e.next=8;break;case 5:if(0!==this.grid.selectedRow.length){e.next=8;break}return this.$message.info("请选择指标！"),e.abrupt("return");case 8:return r=[].concat(p(r),p(this.grid.selectedRow)),e.next=11,this.$api.modify({data:{mapperId:"com.bosssoft.monitor.dao.ThresholdMapper.toggleEnable",status:t,ids:JSON.stringify(r.map((function(e){return e.fid})))}});case 11:this.featchData();case 12:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}(),onSubNameChange:function(e){"001"===e||"002"===e?(this.dialog.data.warnLevel="重要预警",this.dialog.data.monitorRule=">"):"003"===e?(this.dialog.data.warnLevel="一般预警",this.dialog.data.monitorRule=">"):"004"!==e&&"005"!==e||(this.dialog.data.warnLevel="重要预警",this.dialog.data.monitorRule="<"),this.dialog.data.threshold=this.threshold[0].value,this.$refs["form"].clearValidate(),this.dialog.data.subName=this.targetSettins.find((function(t){return t.subCode===e})).subName}}},k=x,R=(a("81b5"),a("2877")),O=Object(R["a"])(k,r,n,!1,null,"16b76ef4",null);t["default"]=O.exports}}]);
//# sourceMappingURL=ticket-grant.2763d8e4.js.map