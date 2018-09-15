/**
 * Created by umair on 9/13/18.
 */
({
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