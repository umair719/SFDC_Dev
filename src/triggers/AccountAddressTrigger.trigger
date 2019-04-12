/**
 * Created by umair on 2019-03-10.
 */

trigger AccountAddressTrigger on Account (before insert, before update) {
    // The Account object will need a new custom checkbox that should have the Field Label 'Match Billing Address'
    // and Field Name of 'Match_Billing_Address'. The resulting API Name should be 'Match_Billing_Address__c'.
    // With 'AccountAddressTrigger' active, if an Account has a Billing Postal Code and 'Match_Billing_Address__c'
    // is true, the record should have the Shipping Postal Code set to match on insert or update.
    for (Account newAccount : Trigger.New) {
        if (String.isBlank(newAccount.BillingPostalCode) && newAccount.Match_Billing_Address__c == 1) {

        }
    }
}