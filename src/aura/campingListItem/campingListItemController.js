/**
 * Created by umair on 9/8/18.
 */
({
    packItem: function (component, event, helper) {
        component.set('v.item.Packed__c', true);
        event.getSource().set('disabled', true);
    }
})