/**
 * Created by umair on 9/13/18.
 */
({
    // Load expenses from Salesfroce
    doInit: function (component, event, helper) {
        // Crate the action
        var action = component.get("c.getExpenses");
        // Add callback behavior for when response is recieved
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                component.set("v.expenses", response.getReturnValue());
            } else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
    clickCreate: function (component, event, helper) {
        var validExpense = component.find('expenseform').reduce(function (validSoFar, inputCmp) {
            // Display error message for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if (validExpense) {
            // Create the new expense
            var newExpense = component.get("v.newExpense");
            console.log('Create expense: ' + JSON.stringify(newExpense));
            helper.createExpense(component, newExpense);
        }
    }
})