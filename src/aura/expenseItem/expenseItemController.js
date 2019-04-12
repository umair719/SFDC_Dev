/**
 * Created by umair on 9/15/18.
 */
({
    doInit: function (component, event, helper) {
        var mydate = component.get("v.expense.Date__c");
        if (mydate) {
            component.set("v.formatdate", new Date(mydate));
        }
    },
    clickReimbursed: function (compoenent, event, helper) {
        var expense = compoenent.get("v.expense");
        var updateEvent = compoenent.getEvent("updateExpenses");
        updateEvent.setParams({"expense": expense});
        updateEvent.fire();
    }
})