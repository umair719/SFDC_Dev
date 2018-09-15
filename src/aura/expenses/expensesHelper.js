/**
 * Created by umair on 9/14/18.
 */
({
    createExpense: function (component, expense) {
        var theExpenses = component.get('v.expenses');

        // Copy the expnese to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        var newExpense = JSON.parse(JSON.stringify(expense));
        console.log("Expense before 'create':" + JSON.stringify(theExpenses));
        theExpenses.push(newExpense);
        console.log("Expense after 'create': " + JSON.stringify(theExpenses));
        component.set("v.expenses", theExpenses);
    }
});