/**
 * Created by umair on 9/8/18.
 */
({
    handleClick: function (component, event, helper) {
        var btnClicked = event.getSource().get('v.label');
        var btnMessage = btnClicked.get('v.label');
        component.set('v.message', btnMessage);
    },
    handleClick1: function (component, event, helper) {
        var newMessage = event.getSource().get('v.label');
        component.set('v.message', newMessage);
    },
    handleClick2: function (component, event, helper) {
        component.set('v.message', event.getSource().get('v.label'));
    }
})