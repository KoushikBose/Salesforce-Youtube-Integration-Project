let definition =
      {"dataSource":{"contextVariables":[{"id":3,"name":"User.userAccountId","val":"0018Z00002h3veoAAB"}],"orderBy":{"isReverse":false,"name":""},"type":"DataRaptor","value":{"bundle":"InsReadAccountPolicyClaims","inputMap":{"Id":"{User.userAccountId}"},"resultVar":""}},"dynamicCanvasWidth":{"type":"mobile"},"enableLwc":true,"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfInsAccountClaimsChildMobile_nds_1_Vlocity","Id":"0Rb8Z000000vPVTCAU","MasterLabel":"cfInsAccountClaimsChildMobile_nds_1_Vlocity","NamespacePrefix":"c","ManageableState":"unmanaged"},"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"children":[{"class":"nds-col ","element":"outputField","elementLabel":"Block-0-Block-1-Text-0","key":"element_element_element_block_0_0_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BName%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-text-heading_small nds-text-link","container":{"class":""},"customClass":"nds-text-heading_small nds-text-link","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text"},{"class":"nds-col ","element":"outputField","elementLabel":"Block-0-Block-1-Text-1","key":"element_element_element_block_0_0_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"ReportedDate","id":"state-new-condition-20","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3EReported:%3C/div%3E","record":"{record}"},"size":{"default":"5","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-text-body_medium","container":{"class":""},"customClass":"nds-text-body_medium","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"5","isResponsive":false},"sizeClass":"nds-size_5-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text"},{"class":"nds-col ","element":"outputField","elementLabel":"Block-0-Block-1-Field-2","key":"element_element_element_block_0_0_block_0_0_outputField_2_0","name":"Field","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","currency":"USD","fieldName":"ReportedDate","format":"MMM DD, YYYY","locale":"en-US","placeholder":"","record":"{record}","type":"date"},"size":{"default":"7","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-text-body_medium","container":{"class":""},"customClass":"nds-text-body_medium","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"7","isResponsive":false},"sizeClass":"nds-size_7-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"nds-col ","element":"outputField","elementLabel":"Block-0-Block-1-Field-3","key":"element_element_element_block_0_0_block_0_0_outputField_3_0","name":"Field","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","currency":"","fieldName":"TotalPaid","locale":"","placeholder":"","record":"{record}","type":"currency"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-text-body_medium","container":{"class":""},"customClass":"nds-text-body_medium","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"children":[{"class":"nds-col ","element":"outputField","elementLabel":"Block-0-Block-1-Block-4-Field-0","key":"element_element_element_element_block_0_0_block_0_0_block_4_0_outputField_0_0","name":"Field","parentElementKey":"element_element_element_block_0_0_block_0_0_block_4_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Status","id":"state-new-condition-0","operator":"==","type":"custom","value":"Closed"}],"id":"state-condition-object","isParent":true},"fieldName":"Status","placeholder":"","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-theme_shade nds-text-align_center  nds-button nds-text-color_weak","container":{"class":""},"customClass":"nds-theme_shade nds-text-align_center  nds-button nds-text-color_weak","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"nds-col ","element":"outputField","elementLabel":"Block-0-Block-1-Block-4-Field-0-clone-0","key":"element_element_element_element_block_0_0_block_0_0_block_4_0_outputField_1_0","name":"Field","parentElementKey":"element_element_element_block_0_0_block_0_0_block_4_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Status","id":"state-new-condition-0","operator":"==","type":"custom","value":"Draft"}],"id":"state-condition-object","isParent":true},"fieldName":"Status","placeholder":"","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-theme_warning nds-text-align_center nds-button nds-text-color_inverse","container":{"class":""},"customClass":"nds-theme_warning nds-text-align_center nds-button nds-text-color_inverse","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"nds-col ","element":"outputField","elementLabel":"Block-0-Block-1-Block-4-Field-1-clone-0","key":"element_element_element_element_block_0_0_block_0_0_block_4_0_outputField_2_0","name":"Field","parentElementKey":"element_element_element_block_0_0_block_0_0_block_4_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Status","id":"state-new-condition-0","operator":"!=","type":"custom","value":"Draft"},{"field":"Status","id":"state-new-condition-58","logicalOperator":"&&","operator":"!=","type":"custom","value":"Closed"}],"id":"state-condition-object","isParent":true},"fieldName":"Status","placeholder":"","record":"{record}","type":"text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-theme_success nds-text-align_center nds-button","container":{"class":""},"customClass":"nds-theme_success nds-text-align_center nds-button","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"}],"class":"nds-col ","element":"block","elementLabel":"Block-0-Block-1-Block-4","key":"element_element_element_block_0_0_block_0_0_block_4_0","name":"Block","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"4","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-m-vertical_medium","container":{"class":""},"customClass":"nds-m-vertical_medium","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":false},"sizeClass":"nds-size_4-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"}],"class":"nds-col ","element":"block","elementLabel":"Block-0-Block-1","key":"element_element_block_0_0_block_0_0","name":"Block","parentElementKey":"element_block_0_0","property":{"action":{"actionData":{"card":"{card}","stateAction":{"Record":{"targetAction":"view","targetId":"{Id}","targetName":"Claim"},"displayName":"Action","id":"flex-action-1610643932630","openUrlIn":"Current Window","targetType":"Record","type":"Custom","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onclick","iconName":"standard-default","label":"Action","name":""},"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"9","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"9","isResponsive":false},"sizeClass":"nds-size_9-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"},{"class":"nds-col ","element":"flexImg","elementLabel":"Block-0-Image-2","key":"element_element_block_0_0_flexImg_1_0","name":"Image","parentElementKey":"element_block_0_0","property":{"data-conditions":{"group":[{"field":"LossCause","id":"state-new-condition-121","operator":"==","type":"custom","value":"Auto Theft"},{"field":"LossCause","id":"state-new-condition-130","logicalOperator":"||","operator":"==","type":"custom","value":"Collision"},{"field":"LossCause","id":"state-new-condition-146","logicalOperator":"||","operator":"==","type":"custom","value":"Auto Accident"},{"field":"LossCause","id":"state-new-condition-167","logicalOperator":"||","operator":"==","type":"custom","value":"3rd Party Injury"}],"id":"state-condition-object","isParent":true},"extraclass":"nds-icon_large nds-align_absolute-center nds-communities-icon_auto-accident nds-m-top_xx-small","record":"{record}","size":"","stateImg":{"alternativeText":"Image description","imgsrc":"/resource/{nsPrefix}newport/assets/images/communities/incident.svg"}},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-m-top_x-small","container":{"class":""},"customClass":"nds-m-top_x-small","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"3","isResponsive":false},"sizeClass":"nds-size_3-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"nds-col ","element":"flexImg","elementLabel":"Block-0-Image-1-clone-1","key":"element_element_block_0_0_flexImg_2_0","name":"Image","parentElementKey":"element_block_0_0","property":{"data-conditions":{"group":[{"field":"LossCause","id":"state-new-condition-121","operator":"==","type":"custom","value":"Fire"},{"field":"LossCause","id":"state-new-condition-130","logicalOperator":"||","operator":"==","type":"custom","value":"Animal"},{"field":"LossCause","id":"state-new-condition-146","logicalOperator":"||","operator":"==","type":"custom","value":"Vandalism"},{"field":"LossCause","id":"state-new-condition-167","logicalOperator":"||","operator":"==","type":"custom","value":"Property Theft"}],"id":"state-condition-object","isParent":true},"extraclass":"nds-icon_large nds-align_absolute-center nds-communities-icon_auto-accident nds-m-top_xx-small","record":"{record}","size":"","stateImg":{"alternativeText":"Image description","imgsrc":"/resource/{nsPrefix}newport/assets/images/communities/homeowners.svg"}},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-m-top_x-small","container":{"class":""},"customClass":"nds-m-top_x-small","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"3","isResponsive":false},"sizeClass":"nds-size_3-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"nds-col ","element":"flexImg","elementLabel":"Block-0-Image-1-clone-0","key":"element_element_block_0_0_flexImg_3_0","name":"Image","parentElementKey":"element_block_0_0","property":{"data-conditions":{"group":[{"field":"LossCause","id":"state-new-condition-121","operator":"==","type":"custom","value":"Flooding"}],"id":"state-condition-object","isParent":true},"extraclass":"nds-icon_large nds-align_absolute-center nds-communities-icon_auto-accident nds-m-top_xx-small","record":"{record}","size":"","stateImg":{"alternativeText":"Image description","imgsrc":"/resource/{nsPrefix}newport/assets/images/communities/flooding.svg"}},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-m-top_x-small","container":{"class":""},"customClass":"nds-m-top_x-small","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"3","isResponsive":false},"sizeClass":"nds-size_3-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"nds-col ","element":"flexImg","elementLabel":"Block-0-Image-2-clone-0","key":"element_element_block_0_0_flexImg_4_0","name":"Image","parentElementKey":"element_block_0_0","property":{"data-conditions":{"group":[{"field":"LossCause","id":"state-new-condition-121","operator":"==","type":"custom","value":"Glass Claim"}],"id":"state-condition-object","isParent":true},"extraclass":"nds-icon_large nds-align_absolute-center nds-communities-icon_auto-accident nds-m-top_xx-small","record":"{record}","size":"","stateImg":{"alternativeText":"Image description","imgsrc":"/resource/{nsPrefix}newport/assets/images/communities/glass.svg"}},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-m-top_x-small","container":{"class":""},"customClass":"nds-m-top_x-small","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"3","isResponsive":false},"sizeClass":"nds-size_3-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"}],"class":"nds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-p-vertical_medium  nds-border_bottom","container":{"class":""},"customClass":"nds-p-vertical_medium  nds-border_bottom","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}}},{"actions":[],"blankCardState":true,"childCards":[],"components":{"layer-0":{"children":[{"class":"nds-col ","element":"outputField","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%3ENo%20records%20returned%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-text-align_center nds-text-heading_x-small","container":{"class":""},"customClass":"nds-text-align_center nds-text-heading_x-small","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Open","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}}}],"theme":"nds","title":"insAccountClaimsChildMobile_nds","Id":"a1p8Z000006zONJAAC","vlocity_ins__GlobalKey__c":"insAccountClaimsChildMobile_nds/Vlocity/1/1605523329776","vlocity_ins__IsChildCard__c":true};
  export default definition