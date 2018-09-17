/**
 * Created by umair on 9/16/18.
 */

public with sharing class ExpensesController {
    // STERN LECTURE ABOUT WHAT'S MISSING HERE COMING SOON
    @AuraEnabled
    public static List<Expense__c> getExpenses() {
        // Check to make sure all fields are accessible to this user
        String[] fieldsToCheck = new String[]{
                'Id', 'Name', 'Amount__c', 'Client__c', 'Date__c',
                'Reimbursed__c', 'CreateDate'
        };

        Map<String, Schema.SObjectField> fieldDescribleTokens = Schema.SObjectType.Expense__c.fields.getMap();

        for (String field : fieldsToCheck) {
            if (!fieldDescribleTokens.get(field).getDescribe().isAccessible()) {
                throw new System.NoAccessException();
            }
        }

        // OK, this user can access all the fields
        return [
                SELECT Id, Name, Amount__c, Client__c, Date__c, Reimbursed__c, CreatedDate
                FROM Expense__c
        ];
    }

    @AuraEnabled
    public static Expense__c saveExpense(Expense__c expense) {
        // Perform isUpdatable() checking first, then
        upsert expense;
        return expense;
    }

}