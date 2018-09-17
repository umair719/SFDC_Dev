/**
 * Created by umair on 9/16/18.
 */

public with sharing class CampingListController {
    @AuraEnabled
    public static List<Camping_Item__c> getItems() {
        // Check FLS
        String[] fieldsToCheck = new String[]{
                'Id', 'Name', 'Price__c', 'Quantity__c', 'Packed__c',
                'CreateDate'
        };

        Map<String, Schema.SObjectField> fieldDescribleTokens = Schema.SObjectType.Camping_Item__c.fields.getMap();

        for (String field : fieldsToCheck) {
            if (!fieldDescribleTokens.get(field).getDescribe().isAccessible()) {
                throw new System.NoAccessException();
            }
        }

        // Pull data
        return [
                SELECT Id, Name, Price__c, Quantity__c, Packed__c, CreatedDate
                FROM Camping_Item__c
        ];
    }

    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c campingItem) {
        upsert campingItem;
        return campingItem;
    }
}