/**
 * Created by umair on 9/15/18.
 */
({

    doInit: function (component, event, helper) {
        // Create the action
        var action = component.get('c.getItems');
        // Add callback behavior when response is recieved
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                component.set('v.items', response.getReturnValue());
            } else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
    clickCreateItem: function (component, event, helper) {
        var validItem = component.find('campingitemform').reduce(function (validSoFar, inputCmp) {
            // Display error message for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        
        if (validItem) {
            // Create the new item
            var newItem = component.get('v.newItem');
            console.log('Create Item: ' + JSON.stringify(newItem));
            helper.createItem(component, newItem);

        }
    }
})