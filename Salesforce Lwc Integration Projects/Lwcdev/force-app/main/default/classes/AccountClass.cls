global without sharing class AccountClass implements Vlocity_ins.VlocityOpenInterface {
        global Boolean invokeMethod(String methodName, Map<String,Object> inputMap, Map<String,Object> outMap, Map<String,Object> options){
            
            Boolean result = true;
            try{
                if(methodName.equals('GetRecordTypeId')){
                    getRecordTypeId(inputMap,outMap);
                    
                }
                
            }
            catch(Exception e){
                result = false;
            }
            return result;                
            
        } 
        
        public void getRecordTypeId(Map<String,Object> inputMap,Map<String,Object> outMap){
            
             System.debug(inputMap);
             String name =(String)inputMap.get('recordTypeName');
             String ObjectName =(String)inputMap.get('sobject');
             List<RecordType> rec = [Select Id from RecordType where name=: name and SobjectType=:ObjectName limit 1];
            
             outMap.put('RecordTypeId',rec.get(0).Id);
             System.debug(outMap);        
        }
            
    }