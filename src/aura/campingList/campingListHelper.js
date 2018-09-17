/**
 * Created by umair on 9/16/18.
 */
({
    createItem: function (component, item) {

        var action = component.get("c.saveItem");
        action.setParam({
            item: item
        });

        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }
        });
    }
})