let definition = 
                {"GlobalKey__c":"Non Held Policy Story LWC/Vlocity/2/1580726148889","dataSource":{"type":null},"enableLwc":true,"filter":{"['objAPIName']":"vlocity_ins__NonHeldPolicy__c"},"states":[{"blankStateCheck":false,"collapse":true,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"},{"field":"['onGoing']","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}]},"definedActions":{"actions":[]},"disableAddCondition":false,"fields":[{"collapse":true,"editing":false,"fieldType":"standard","label":"Policy Type","name":"['highlight']","type":"string"},{"collapse":true,"editing":false,"fieldType":"standard","label":"LOB","name":"['subtitle']","type":"string"}],"filter":"$scope.data.status === 'active' && $scope.obj['onGoing'] == true","flyout":{"lwc":{"DeveloperName":"storyEditStateFlyout","Id":"0Rb8Z000000vPneCAI","MasterLabel":"storyEditStateFlyout","name":"storyEditStateFlyout"}},"flyoutAttributes":[{"name":"parent","val":"$scope.obj"}],"lwc":{"DeveloperName":"storyOngoingState","Id":"0Rb8Z000000vPndCAY","MasterLabel":"storyOngoingState","name":"storyOngoingState"},"name":"Non Held Policy Ongoing","sObjectType":"vlocity_ins__NonHeldPolicy__c","templateUrl":"story-card"},{"blankStateCheck":false,"collapse":true,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"},{"field":"['onGoing']","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}]},"definedActions":{"actions":[]},"disableAddCondition":false,"fields":[{"collapse":true,"editing":false,"fieldType":"standard","label":"Policy Type","name":"['highlight']","type":"string"},{"collapse":true,"editing":false,"fieldType":"standard","label":"LOB","name":"['subtitle']","type":"string"}],"filter":"$scope.data.status === 'active' && $scope.obj['onGoing'] == false","flyout":{"lwc":{"DeveloperName":"storyEditStateFlyout","Id":"0Rb8Z000000vPneCAI","MasterLabel":"storyEditStateFlyout","name":"storyEditStateFlyout"}},"flyoutAttributes":[{"name":"parent","val":"$scope.obj"}],"lwc":{"DeveloperName":"storyNormalState","Id":"0Rb8Z000000vPnfCAI","MasterLabel":"storyNormalState","name":"storyNormalState"},"name":"Non Held Policy","sObjectType":"vlocity_ins__NonHeldPolicy__c","templateUrl":"story-card"}],"title":"Non Held Policies"}; 
            export default definition