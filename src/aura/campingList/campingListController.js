/**
 * Created by umair on 9/15/18.
 */
({
    clickCreateItem: function (component, event, helper) {
        var validItem = component.find('campingitemform').reduce(function (validSoFar, inputCmp) {
            // Display error message for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if (validItem) {
            // Create the new expense
            var newItem = component.get('v.newItem');
            console.log('Create Item: ' + JSON.stringify(newItem));

            var theItems = component.get("v.items");
            var newItem = JSON.parse(JSON.stringify(newItem));
            console.log("Item before 'create': " + JSON.stringify(theItems));
            theItems.push(newItem);
            console.log("Item after 'create': " + JSON.stringify(theItems));
            component.set("v.items", theItems);
            //createItem(component, newItem);
            component.set("v.newItem", {
                'sobjectType': 'Camping_Item__c',
                'Name': '',
                'Quantity__c': 0,
                'Price__c': 0,
                'Packed__c': false
            });
        }
    } // ,
    // createItem: function (component, item) {
    //     var theItems = component.get("v.items");
    //     var newItem = JSON.parse(JSON.stringify(item));
    //     console.log("Item before 'create': " + JSON.stringify(theItems));
    //     theItems.push(newItem);
    //     console.log("Item after 'create': " + JSON.stringify(theItems));
    //     component.set("v.items", theItems);
    //
    // }
})