/**
 * Created by umair on 9/14/18.
 */
({
    createExpense: function (component, expense) {

        var action = component.get("c.saveExpense");
        action.setParam({
            expense: expense
        });

        action.setCallback(this, function (response) {
            console.log(response);
            var state = response.getState();
            if (state === "SUCCESS") {
                var expenses = component.get("v.expenses");
                expenses.push(response.getReturnValue());
                console.log(expenses);
                component.set("v.expenses", expenses);
            } else {
                console.log(state);
            }
        });

        $A.enqueueAction(action);
    }
});