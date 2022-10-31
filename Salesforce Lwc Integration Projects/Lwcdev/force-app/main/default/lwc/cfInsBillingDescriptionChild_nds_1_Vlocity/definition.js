let definition =
      {"dataSource":{"contextVariables":[{"id":1,"name":"User.userAccountId","val":"0018Z00002h3veoAAB"}],"orderBy":{"isReverse":false,"name":""},"type":"DataRaptor","value":{"bundle":"InsExtractAccountBillingDetails","inputMap":{"Id":"{User.userAccountId}"},"resultVar":"[0].BillingAccount"}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"isFlex":true,"isRepeatable":true,"lwc":{"DeveloperName":"cfInsBillingDescriptionChild_nds_1_Vlocity","Id":"0Rb8Z000000vPobCAG","ManageableState":"unmanaged","MasterLabel":"cfInsBillingDescriptionChild_nds_1_Vlocity","NamespacePrefix":"c"},"states":[{"actions":[],"childCards":["insPolicyBillingChild_nds","insBillingStrategyChild_nds"],"components":{"layer-0":{"children":[{"children":[{"children":[{"children":[{"class":"nds-col ","element":"outputField","elementLabel":"Block-3-Block-0-Field-0","key":"element_element_element_element_block_0_0_block_0_0_block_0_0_outputField_0_0","name":"Field","parentElementKey":"element_element_element_block_0_0_block_0_0_block_0_0","property":{"card":"{card}","fieldName":"AmountDue","placeholder":"","record":"{record}","styles":{"label":{"fontSize":""},"value":{"fontSize":"","textAlign":""}},"type":"text"},"size":{"default":"12","isResponsive":true,"large":"12","medium":"6","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-communities-billing_amountDue","container":{"class":""},"customClass":"nds-communities-billing_amountDue","elementStyleProperties":{"styles":{"label":{"fontSize":""},"value":{"fontSize":"","textAlign":""}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"12","medium":"6","small":"12"},"sizeClass":"nds-large-size_12-of-12  nds-medium-size_6-of-12  nds-small-size_12-of-12  nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"nds-col ","element":"outputField","elementLabel":"Block-3-Block-0-Text-1","key":"element_element_element_element_block_0_0_block_0_0_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_element_element_block_0_0_block_0_0_block_0_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"BillDueDate","id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3EDue%20%7BBillDueDate%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"12","medium":"6","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-align-bottom  ","container":{"class":"nds-align-bottom "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"12","medium":"6","small":"12"},"sizeClass":"nds-large-size_12-of-12  nds-medium-size_6-of-12  nds-small-size_12-of-12  nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text"},{"class":"nds-col ","element":"childCardPreview","elementLabel":"Block-3-Block-0-FlexCard-3","key":"element_element_element_element_block_0_0_block_0_0_block_0_0_childCardPreview_2_0","name":"FlexCard","parentElementKey":"element_element_element_block_0_0_block_0_0_block_0_0","property":{"cardName":"insPolicyBillingChild_nds","cardNode":"","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-m-top_large","container":{"class":""},"customClass":"nds-m-top_large","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"children":[{"class":"nds-col ","element":"action","elementLabel":"Block-0-Block-4-Action-0","key":"element_element_element_block_0_0_block_3_0_flexAction_0_0","name":"Action","parentElementKey":"element_element_block_0_0_block_3_0","property":{"card":"{card}","hideActionIcon":true,"iconSize":"xx-small","record":"{record}","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Make a Payment","id":"flex-action-1604932837371","openUrlIn":"Current Window","targetType":"Web Page","type":"Custom","vlocityIcon":"standard-default"},"stateObj":"{record}"},"size":{"default":"12","isResponsive":true,"large":"5","medium":"5","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-button nds-button_brand   nds-text-align_center nds-m-top--large","container":{"class":"nds-button nds-button_brand "},"customClass":" nds-text-align_center nds-m-top--large","elementStyleProperties":{"iconSize":"xx-small"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"5","medium":"5","small":"12"},"sizeClass":"nds-large-size_5-of-12 nds-medium-size_5-of-12 nds-small-size_12-of-12 nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"nds-col ","element":"action","elementLabel":"Block-0-Block-4-Action-0-clone-0","key":"element_element_element_block_0_0_block_3_0_flexAction_1_0","name":"Action","parentElementKey":"element_element_block_0_0_block_3_0","property":{"card":"{card}","hideActionIcon":true,"iconSize":"xx-small","record":"{record}","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"View Statement","id":"flex-action-1604932855988","openUrlIn":"Current Window","targetType":"Web Page","type":"Custom","vlocityIcon":"standard-default"},"stateObj":"{record}"},"size":{"default":"12","isResponsive":true,"large":"5","medium":"5","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":" nds-button nds-m-top--large","container":{"class":" nds-button"},"customClass":"nds-m-top--large","elementStyleProperties":{"iconSize":"xx-small"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"5","medium":"5","small":"12"},"sizeClass":"nds-large-size_5-of-12 nds-medium-size_5-of-12 nds-small-size_12-of-12 nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"}],"class":"nds-col ","element":"block","elementLabel":"Block-3-Block-0-Block-5","key":"element_element_element_element_block_0_0_block_0_0_block_0_0_block_3_0","name":"Block","parentElementKey":"element_element_element_block_0_0_block_0_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"}],"class":"nds-col ","element":"block","elementLabel":"Block-3-Block-0","key":"element_element_element_block_0_0_block_0_0_block_0_0","name":"Block","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"4","medium":"5","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-border_right nds-show_small nds-p-around--medium","container":{"class":""},"customClass":"nds-border_right nds-show_small nds-p-around--medium","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"4","medium":"5","small":"12"},"sizeClass":"nds-large-size_4-of-12 nds-medium-size_5-of-12 nds-small-size_12-of-12 nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"},{"children":[{"class":"nds-col ","element":"outputField","elementLabel":"Block-0-Field-0","key":"element_element_element_element_block_1_0_block_0_0_block_1_0_outputField_0_0","name":"Field","parentElementKey":"element_element_element_block_1_0_block_0_0_block_1_0","property":{"card":"{card}","fieldName":"AmountDue","placeholder":"","record":"{record}","styles":{"label":{"fontSize":""},"value":{"fontSize":"","textAlign":""}},"type":"text"},"size":{"default":"12","isResponsive":true,"large":"6","medium":"6","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-communities-billing_amountDue","container":{"class":""},"customClass":"nds-communities-billing_amountDue","elementStyleProperties":{"styles":{"label":{"fontSize":""},"value":{"fontSize":"","textAlign":""}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"6","medium":"6","small":"12"},"sizeClass":"nds-large-size_6-of-12 nds-medium-size_6-of-12 nds-small-size_12-of-12 nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"nds-col ","element":"outputField","elementLabel":"Block-0-Text-1","key":"element_element_element_element_block_1_0_block_0_0_block_1_0_outputField_1_0","name":"Text","parentElementKey":"element_element_element_block_1_0_block_0_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3EDue%20%7BBillDueDate%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"6","medium":"6","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-align-bottom  nds-text-align_right nds-show_small","container":{"class":"nds-align-bottom "},"customClass":"nds-text-align_right nds-show_small","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"6","medium":"6","small":"12"},"sizeClass":"nds-large-size_6-of-12 nds-medium-size_6-of-12 nds-small-size_12-of-12 nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text"},{"class":"nds-col ","element":"outputField","elementLabel":"Block-0-Text-1-clone-0","key":"element_element_element_element_block_1_0_block_0_0_block_1_0_outputField_2_0","name":"Text","parentElementKey":"element_element_element_block_1_0_block_0_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3EDue%20%7BBillDueDate%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"6","medium":"6","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-align-bottom  nds-text-align_left nds-hide_small","container":{"class":"nds-align-bottom "},"customClass":"nds-text-align_left nds-hide_small","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"6","medium":"6","small":"12"},"sizeClass":"nds-large-size_6-of-12 nds-medium-size_6-of-12 nds-small-size_12-of-12 nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text"},{"children":[{"class":"nds-col ","element":"action","elementLabel":"Block-0-Block-4-Action-0","key":"element_element_element_block_0_0_block_3_0_flexAction_0_0","name":"Action","parentElementKey":"element_element_block_0_0_block_3_0","property":{"card":"{card}","hideActionIcon":true,"iconSize":"xx-small","record":"{record}","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Make a Payment","id":"flex-action-1604932837371","openUrlIn":"Current Window","targetType":"Web Page","type":"Custom","vlocityIcon":"standard-default"},"stateObj":"{record}"},"size":{"default":"12","isResponsive":true,"large":"5","medium":"5","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-button nds-button_brand   nds-text-align_center nds-m-top--large","container":{"class":"nds-button nds-button_brand "},"customClass":" nds-text-align_center nds-m-top--large","elementStyleProperties":{"iconSize":"xx-small"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"5","medium":"5","small":"12"},"sizeClass":"nds-large-size_5-of-12 nds-medium-size_5-of-12 nds-small-size_12-of-12 nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"nds-col ","element":"action","elementLabel":"Block-0-Block-4-Action-0-clone-0","key":"element_element_element_block_0_0_block_3_0_flexAction_1_0","name":"Action","parentElementKey":"element_element_block_0_0_block_3_0","property":{"card":"{card}","hideActionIcon":true,"iconSize":"xx-small","record":"{record}","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"View Statement","id":"flex-action-1604932855988","openUrlIn":"Current Window","targetType":"Web Page","type":"Custom","vlocityIcon":"standard-default"},"stateObj":"{record}"},"size":{"default":"12","isResponsive":true,"large":"5","medium":"5","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":" nds-button nds-m-top--large","container":{"class":" nds-button"},"customClass":"nds-m-top--large","elementStyleProperties":{"iconSize":"xx-small"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"5","medium":"5","small":"12"},"sizeClass":"nds-large-size_5-of-12 nds-medium-size_5-of-12 nds-small-size_12-of-12 nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"}],"class":"nds-col ","element":"block","elementLabel":"Block-0-Block-4","key":"element_element_element_element_block_1_0_block_0_0_block_1_0_block_3_0","name":"Block","parentElementKey":"element_element_element_block_1_0_block_0_0_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"nds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"nds-size_12-of-12"},"type":"block"}],"class":"nds-col ","element":"block","elementLabel":"Block-3-Block-1","key":"element_element_element_block_0_0_block_0_0_block_1_0","name":"Block","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"4","medium":"5","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-border_none  nds-hide_small nds-p-around--medium","container":{"class":""},"customClass":"nds-border_none  nds-hide_small nds-p-around--medium","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"4","medium":"5","small":"12"},"sizeClass":"nds-large-size_4-of-12 nds-medium-size_5-of-12 nds-small-size_12-of-12 nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"},{"children":[{"children":[{"class":"nds-col ","element":"outputField","elementLabel":"Block-1-Text-1","key":"element_element_element_element_element_block_1_0_block_0_0_block_2_0_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_element_element_element_block_1_0_block_0_0_block_2_0_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3EBilling%20Account%20Number%3C/div%3E","record":"{record}"},"size":{"default":"6","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":" nds-p-bottom--x-small nds-text-body_medium_bold","container":{"class":""},"customClass":" nds-p-bottom--x-small nds-text-body_medium_bold","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"6","isResponsive":false},"sizeClass":"nds-size_6-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text"},{"class":"nds-col ","element":"outputField","elementLabel":"Block-1-Field-2","key":"element_element_element_element_element_block_1_0_block_0_0_block_2_0_block_0_0_outputField_1_0","name":"Field","parentElementKey":"element_element_element_element_block_1_0_block_0_0_block_2_0_block_0_0","property":{"card":"{card}","fieldName":"AccountNumber","label":"","placeholder":"","record":"{record}","type":"text"},"size":{"default":"6","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-p-bottom--x-small nds-text-body_medium","container":{"class":""},"customClass":"nds-p-bottom--x-small nds-text-body_medium","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"6","isResponsive":false},"sizeClass":"nds-size_6-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"}],"class":"nds-col ","element":"block","elementLabel":"Block-1-Block-0","key":"element_element_element_element_block_1_0_block_0_0_block_2_0_block_0_0","name":"Block","parentElementKey":"element_element_element_block_1_0_block_0_0_block_2_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":12,"isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-border_bottom ","container":{"class":""},"customClass":"nds-border_bottom ","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":12,"isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"},{"children":[{"class":"nds-col ","element":"outputField","elementLabel":"Block-1-Text-2","key":"element_element_element_element_element_block_1_0_block_0_0_block_2_0_block_1_0_outputField_0_0","name":"Text","parentElementKey":"element_element_element_element_block_1_0_block_0_0_block_2_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3ECard%20Type%3C/div%3E","record":"{record}"},"size":{"default":"6","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":" nds-p-vertical--x-small nds-text-body_medium_bold","container":{"class":""},"customClass":" nds-p-vertical--x-small nds-text-body_medium_bold","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"6","isResponsive":false},"sizeClass":"nds-size_6-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text"},{"class":"nds-col ","element":"outputField","elementLabel":"Block-1-Field-3","key":"element_element_element_element_element_block_1_0_block_0_0_block_2_0_block_1_0_outputField_1_0","name":"Field","parentElementKey":"element_element_element_element_block_1_0_block_0_0_block_2_0_block_1_0","property":{"card":"{card}","fieldName":"CardType","placeholder":"","record":"{record}","type":"text"},"size":{"default":"6","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":" nds-p-vertical--x-small nds-text-body_medium","container":{"class":""},"customClass":" nds-p-vertical--x-small nds-text-body_medium","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"6","isResponsive":false},"sizeClass":"nds-size_6-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"}],"class":"nds-col ","element":"block","elementLabel":"Block-1-Block-1","key":"element_element_element_element_block_1_0_block_0_0_block_2_0_block_1_0","name":"Block","parentElementKey":"element_element_element_block_1_0_block_0_0_block_2_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-border_bottom","container":{"class":""},"customClass":"nds-border_bottom","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"},{"children":[{"class":"nds-col ","element":"outputField","elementLabel":"Block-1-Text-3","key":"element_element_element_element_element_block_1_0_block_0_0_block_2_0_block_2_0_outputField_0_0","name":"Text","parentElementKey":"element_element_element_element_block_1_0_block_0_0_block_2_0_block_2_0","property":{"card":"{card}","mergeField":"%3Cdiv%3EPayment%20Method%3C/div%3E","record":"{record}"},"size":{"default":"6","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-p-vertical--x-small nds-text-body_medium_bold","container":{"class":""},"customClass":"nds-p-vertical--x-small nds-text-body_medium_bold","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"6","isResponsive":false},"sizeClass":"nds-size_6-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text"},{"class":"nds-col ","element":"outputField","elementLabel":"Block-1-Field-4","key":"element_element_element_element_element_block_1_0_block_0_0_block_2_0_block_2_0_outputField_1_0","name":"Field","parentElementKey":"element_element_element_element_block_1_0_block_0_0_block_2_0_block_2_0","property":{"card":"{card}","fieldName":"PaymentMethodName","placeholder":"","record":"{record}","type":"text"},"size":{"default":"6","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":" nds-p-vertical--x-small nds-text-body_medium","container":{"class":""},"customClass":" nds-p-vertical--x-small nds-text-body_medium","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"6","isResponsive":false},"sizeClass":"nds-size_6-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"}],"class":"nds-col ","element":"block","elementLabel":"Block-1-Block-2","key":"element_element_element_element_block_1_0_block_0_0_block_2_0_block_2_0","name":"Block","parentElementKey":"element_element_element_block_1_0_block_0_0_block_2_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-border_bottom","container":{"class":""},"customClass":"nds-border_bottom","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"},{"class":"nds-col ","element":"action","elementLabel":"Block-1-Action-5","key":"element_element_element_element_block_1_0_block_0_0_block_2_0_action_3_0","name":"Action","parentElementKey":"element_element_element_block_1_0_block_0_0_block_2_0","property":{"card":"{card}","hideActionIcon":true,"record":"{record}","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Manage Payment Details","id":"flex-action-1604932893679","openUrlIn":"Current Window","targetType":"Web Page","type":"Custom","vlocityIcon":"standard-default"},"stateObj":"{record}"},"size":{"default":"12","isResponsive":true,"large":"3","medium":"4","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-button nds-p-vertical--small nds-text-align_left ","container":{"class":"nds-button nds-p-vertical--small nds-text-align_left"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"3","medium":"4","small":"12"},"sizeClass":"nds-large-size_3-of-12 nds-medium-size_4-of-12 nds-small-size_12-of-12 nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"}],"class":"nds-col ","element":"block","elementLabel":"Block-3-Block-2","key":"element_element_element_block_0_0_block_0_0_block_2_0","name":"Block","parentElementKey":"element_element_block_0_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"8","medium":"7","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-p-around--medium","container":{"class":""},"customClass":"nds-p-around--medium","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"8","medium":"7","small":"12"},"sizeClass":"nds-large-size_8-of-12 nds-medium-size_7-of-12 nds-small-size_12-of-12 nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"}],"class":"nds-col ","element":"block","elementLabel":"Block-1-Block-0","key":"element_element_block_0_0_block_0_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":" nds-m-vertical--medium ","container":{"class":""},"customClass":" nds-m-vertical--medium ","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"},{"class":"nds-col ","element":"childCardPreview","elementLabel":"Block-1-FlexCard-1","key":"element_element_block_0_0_childCardPreview_1_0","name":"FlexCard","parentElementKey":"element_block_0_0","property":{"cardName":"insBillingStrategyChild_nds","cardNode":"","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"nds-size_12-of-12"},"type":"element"}],"class":"nds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-card nds-panel nds-communities-billing nds-communities-article","container":{"class":""},"customClass":"nds-card nds-panel nds-communities-billing nds-communities-article","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-m-bottom_medium nds-communities-policy-card","container":{"class":""},"customClass":"nds-m-bottom_medium nds-communities-policy-card","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}}},{"actions":[],"blankCardState":true,"childCards":[],"components":{"layer-0":{"children":[{"class":"nds-col ","element":"outputField","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%3ENo%20records%20returned%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-text-align_center nds-text-heading_x-small","container":{"class":""},"customClass":"nds-text-align_center nds-text-heading_x-small","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"documents":[],"fields":[],"isSmartAction":false,"name":"Open","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-m-bottom_medium nds-communities-article nds-p-around_small ","container":{"class":"nds-m-bottom_medium nds-communities-article nds-p-around_small"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}}}],"theme":"nds","title":"insBillingDescriptionChild_nds","tracking":{"businessCategory":""},"Id":"a1p8Z000006zONRAAC","vlocity_ins__GlobalKey__c":"insBillingDescriptionChild_nds/Vlocity/1/1607593176910","vlocity_ins__IsChildCard__c":true};
  export default definition