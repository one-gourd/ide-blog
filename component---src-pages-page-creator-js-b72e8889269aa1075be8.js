(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{146:function(e,o,t){"use strict";t.r(o);t(164);var n=t(0),u=t.n(n),r=t(33),i=t.n(r),l=t(149),d=(t(50),t(167)),a=t(166),c=(t(135),t(165)),m=(t(136),{modules:[{name:"Next",dist:"http://gcs.dockerlab.alipay.net/assets/Next/index.js"},{name:"Gourd",dist:"http://gcs.dockerlab.alipay.net/assets/Gourd/index.js"}],components:[{component:"Gourd.Iterator",id:"Iterator",props:{dataSource:[{text:1}]},children:[{component:"div",id:"itdiv",props:{children:"{{$scope.text}}"}}]},{component:"div",id:"$div_rk2ss",uuid:"$uu_div_ryTAh",children:[{component:"Next.Grid.Row",id:"$Row_B1wLZ",uuid:"$uu_Row_BJeaC",children:[{component:"Next.Grid.Col",id:"$Col_HJlwL",props:{style:{marginBottom:" 20px"}},uuid:"$uu_Col_ByP6C",children:[{component:"Breadcrumb",id:"$Breadcrumb_HymdZ",uuid:"$uu_Breadcrumb_B1apC",children:[{component:"Breadcrumb.Item",id:"$BreadcrumbItem_B1qdb",props:{link:"",data_text:"选品平台"},uuid:"$uu_BreadcrumbItem_BJLgT",children:[]},{component:"Breadcrumb.Item",id:"$BreadcrumbItem_SJVgf",props:{data_text:"选商品222",link:""},uuid:"$uu_BreadcrumbItem_Syve6",children:[]}]}]}]},{component:"Row",id:"$Row_SkKP1",uuid:"$uu_Row_SJWTR",children:[{component:"Col",id:"$Col_Bketv",uuid:"$uu_Col_Hyd6R",children:[{component:"Form",id:"$Form_HJCOJ",props:{direction:"hoz"},uuid:"$uu_Form_HkR6R",children:[{component:"FormItem",id:"$FormItem_BklCu",props:{label:"规则 id"},uuid:"$uu_FormItem_Sk$ga",children:[{component:"Input",id:"$Input_id",props:{maxLength:20,rows:0,style:{width:" 80px"},placeholder:"",value:"$store.$Select_industryName.value",size:"small"},size:"medium",validate:{trigger:["onBlur"],rules:[]},uuid:"$uu_Input_rk8_6",children:[]}]},{component:"FormItem",id:"$FormItem_SkEFk",props:{label:"规则名称"},uuid:"$uu_FormItem_HkFx6",children:[{component:"Input",id:"$Input_name",props:{style:{width:"100"}},uuid:"$uu_Input_SyDWp",children:[]}]},{component:"FormItem",id:"$FormItem_HJdYJ",props:{label:"创建者"},uuid:"$uu_FormItem_H15lp",children:[{component:"Input",id:"$Input_optUserNick",props:{style:{width:"80"},value:"$store.global.user.nick"},uuid:"$uu_Input_H1uZT",children:[]}]},{component:"FormItem",id:"$FormItem_BJsKJ",props:{label:"行业市场"},uuid:"$uu_FormItem_ryjgp",children:[{component:"Select",id:"$Select_industryId",size:"medium",props:{value:"",dataSource:[]},fetch:{cycle:{success:{},error:{},before:{},loading:{}}},uuid:"$uu_Select_rkK_p",children:[]}]},{component:"FormItem",id:"$FormItem_ryLql",props:{label:""},uuid:"$uu_FormItem_r1nlT",children:[{component:"Button",id:"$Button_query",props:{data_text:"查询规则",type:"primary",loading:!1},events:{onClick:"__$Button_query_onClick"},uuid:"$uu_Button_HJ5W6",children:[]}]}]}]}]},{component:"Row",id:"$Row_S1Y5R",uuid:"$uu_Row_rJMTA",children:[{component:"Col",id:"$Col_BylFq",uuid:"$uu_Col_H1YTC",children:[{component:"Button",id:"$Button_new",props:{data_text:"新建规则",type:"primary",shape:!1},events:{onClick:"__$Button_new_onClick"},uuid:"$uu_Button_SkJgp",children:[]}]}]},{component:"Row",id:"$Row_H1Sl9",uuid:"$uu_Row_r1X6C",children:[{component:"Col",id:"$Col_r1eSe",uuid:"$uu_Col_Hk96C",children:[{component:"Table",id:"$Table_rule",props:{dataSource:"$store.$Table_rule.$remote.result.model.data",isZebra:!1},fetch:{method:"GET",autorun:!0,url:{path:"//paimai-admin.daily.taobao.net/gourd/gourdServiceApiNew.htm",query:{apiName:"console.selection.goods.rule.query",version:"1.0",requestData:{pageSize:"10",page:"$store.$Pagination_HybSq.value",ruleId:"$store.$Input_id.value",ruleName:"$store.$Input_name.value",userName:"$store.$Input_optUserNick.value",industryId:"$store.$Select_industryId.value"}}},cycle:{success:{},error:{},loading:{},before:{}}},uuid:"$uu_Table_S1gl6",children:[{component:"Table.Column",id:"$TableColumn_rklGf",props:{dataIndex:"ruleId",title:"规则 id",width:140,cell:"__$TableColumn_rklGf_cell"},uuid:"$uu_TableColumn_S16xp",children:[]},{component:"Table.Column",id:"$TableColumn_ByWGG",props:{dataIndex:"ruleName",title:"规则名称",cell:"__$TableColumn_ByWGG_cell"},uuid:"$uu_TableColumn_ry0x6",children:[]},{component:"Table.Column",id:"$TableColumn_BkeNX",props:{dataIndex:"ruleDesc",title:"规则描述"},uuid:"$uu_TableColumn_rkxeV",children:[]},{component:"Table.Column",id:"$TableColumn_Hk4Mz",props:{title:"创建者",dataIndex:"optNick",width:90,align:"center"},uuid:"$uu_TableColumn_rJxbT",children:[]},{component:"Table.Column",id:"$TableColumn_BkBfG",props:{title:"行业市场",dataIndex:"industryName",width:90,align:"center"},uuid:"$uu_TableColumn_B1W_a",children:[]},{component:"Table.Column",id:"$TableColumn_rJLzz",props:{title:"操作",cell:"__$TableColumn_rJLzz_cell"},uuid:"$uu_TableColumn_r1MZT",children:[]}]}]}]},{component:"Pagination",id:"$Pagination_HybSq",props:{style:{marginTop:"10px",marginLeft:" 20px"},pageSize:10,total:"$store.$Table_rule.$remote.result.model.page.totalCount",value:0},size:"medium",events:{onChange:"__$Pagination_HybSq_onChange"},uuid:"$uu_Pagination_rkZlp",children:[]},{component:"Dialog",id:"$Dialog_Skw6Z",props:{title:"编辑规则",visible:!1,closable:!0},events:{onOk:"__$Dialog_Skw6Z_onOk",onCancel:"__$Dialog_Skw6Z_onCancel",onClose:"__$Dialog_Skw6Z_onClose"},uuid:"$uu_Dialog_SkVa0",children:[{component:"Form",id:"$Form_rkLgz",events:{},uuid:"$uu_Form_B1j60",children:[{component:"FormItem",id:"$FormItem_H1lUl",props:{label:"规则名称",extra:""},uuid:"$uu_FormItem_rkMx6",children:[{component:"Input",id:"$Input_newRuleName",props:{style:{width:" 300px"}},size:"medium",validate:{trigger:["onBlur"],rules:[{rule:"required",value:!0,message:"名称不能为空"}]},uuid:"$uu_Input_SJ7_T",children:[]}]},{component:"FormItem",id:"$FormItem_HJcZG",props:{label:"规则描述"},uuid:"$uu_FormItem_BkQeT",children:[{component:"Input",id:"$Input_newRuleDesc",props:{multiple:!0,rows:2,maxLength:10,style:{width:" 300px"}},size:"medium",validate:{trigger:["onBlur"],rules:[{rule:"required",value:!0,message:"描述是必填"}]},uuid:"$uu_Input_HJEZa",children:[]}]},{component:"FormItem",id:"$FormItem_Hyjfz",props:{label:"行业市场"},uuid:"$uu_FormItem_BkNxa",children:[{component:"Select",id:"$Select_newIndustryId",props:{style:{width:" 100px"},dataSource:[]},fetch:{cycle:{success:{},error:{},loading:{},before:{}}},size:"medium",validate:{trigger:["onChange"],rules:[{rule:"required",value:!0,message:"行业市场是必填"}]},uuid:"$uu_Select_Bkr_a",children:[]}]}]},{component:"Io",id:"$Io_save",props:{dataSource:"$store.$Io_save.$remote.result.model"},fetch:{method:"GET",autorun:!1,url:{path:"//paimai-admin.daily.taobao.net/gourd/gourdServiceApiNew.htm",query:{apiName:"console.selection.goods.rule.save",version:"1.0",requestData:{ruleName:"$store.$Input_newRuleName.value",ruleDesc:"$store.$Input_newRuleDesc.value",industryId:"$store.$Select_newIndustryId.value",ruleId:"$store.$Hidden_ruleId.value",empId:"$store.global.user.id"}}},cycle:{success:{},error:{},loading:{},before:{}}},uuid:"$uu_Io_HJ3aR",children:[]},{component:"Hidden",id:"$Hidden_ruleId",uuid:"$uu_Hidden_SJeG8",children:[]}]},{component:"Io",id:"$Io_del",props:{dataSource:"$store.$Io_del.$remote.result"},fetch:{method:"GET",autorun:!1,url:{path:"//paimai-admin.daily.taobao.net/gourd/gourdServiceApiNew.htm",query:{apiName:"console.selection.goods.rule.del",version:"1.0",requestData:{empId:"$store.global.user.id"}}},cycle:{success:{},error:{},loading:{},before:{}}},uuid:"$uu_Io_HJSa0",children:[]},{component:"Io",id:"$Io_copy",props:{dataSource:"$store.$Io_copy.$remote.result.model"},fetch:{method:"GET",autorun:!1,url:{path:"//paimai-admin.daily.taobao.net/gourd/gourdServiceApiNew.htm",query:{apiName:"console.selection.goods.rule.copy",version:"1.0",requestData:{empId:"$store.global.user.id"}}},cycle:{success:{},error:{},loading:{},before:{}}},uuid:"$uu_Io_r1IaA",children:[]},{component:"Io",id:"$Io_B1ucl",props:{dataSource:"$store.$Io_B1ucl.$remote.dataList"},fetch:{method:"GET",autorun:!0,url:{path:"//paimai-admin.daily.taobao.net/gourd/gourdServiceApiNew.htm",query:{apiName:"console.selection.goods.industryList",version:"1.0",requestData:{ruleType:"1"}}},cycle:{success:{action:"__$Io_B1ucl_fetch_success"},error:{},before:{},loading:{}}},uuid:"$uu_Io_ryxuq",children:[]}]}],functions:window._test_}),s=t(168),p=Object(a.schemaConverter)(m.components),_=Object(d.createSchemaModel)(p),$=Object(s.PageCreatorFactory)(),h=$.PageCreatorWithStore,I=$.client;function g(e){console.log("当前点击：",e)}var b={schemaTree:{onSelectNode:function(e){console.log("当前选中的 node:",e.id,e.name)},onRightClickNode:function(e){e.node,e.event,console.log("onRightClick...")},onModelChange:Object(c.debounce)(function(e,o){if("schema"===e){var t=o.schemaJSON?o.schemaJSON:o;console.log(777,"schema changed:",e),I.put("/clients/switchPanel/clients/codeEditor/editor",{name:"value",value:JSON.stringify(t.children,null,4)}),m.components=t.children,I.put("/clients/switchPanel/clients/previewer/iframe",{name:"data",value:{event:"data-from-ide",type:"updateSchema",data:m}})}},400,{isImmediate:!0}),onExpand:function(e){}}},y={onSwitch:function(e,o){console.log("[with client]当前点击：",e,o)},codeEditor:{language:"json"},previewer:{url:"http://localhost:9006/gourd2/pi/demo/index.html?from=ide"}};I.post("/clients/componentTree/clients/schemaTree/tree",{schema:_}),I.post("/clients/componentTree/clients/contextMenu/menu",{menu:{id:"component-tree",name:"组件树右键菜单",children:[{id:"createSub",name:"添加组件",icon:"plus",shortcut:"⌘+Alt+G"},{id:"createUp",name:"前面插入组件",icon:"arrow-up",shortcut:""},{id:"createDown",name:"后面插入组件",icon:"arrow-down",shortcut:""},{id:"divider",name:"分割线",icon:"file",type:"separator"},{id:"copy",name:"复制",icon:"copy",shortcut:"⌘+C"},{id:"paste",name:"粘贴",icon:"switcher",shortcut:"⌘+V"},{id:"divider",name:"分割线",icon:"file",type:"separator"},{id:"delete",name:"删除",icon:"delete",shortcut:"⌘+Delete"}]}});o.default=function(){return u.a.createElement("div",null,u.a.createElement(l.Helmet,null,u.a.createElement("meta",{charSet:"utf-8"}),u.a.createElement("title",null,"页面可视化搭建平台")),u.a.createElement(i.a,{to:"/"},"back home"),u.a.createElement(h,{componentTree:b,switchPanel:y,onClick:g}))}}}]);
//# sourceMappingURL=component---src-pages-page-creator-js-b72e8889269aa1075be8.js.map