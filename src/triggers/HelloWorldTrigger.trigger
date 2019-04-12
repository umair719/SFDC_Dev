/**
 * Created by umair on 2019-03-02.
 */

trigger HelloWorldTrigger on Account (before insert) {
    for (Account a : Trigger.New) {
        System.debug(a.Description);
        a.Description = 'New description';
        System.debug('Hello World!');
    }
}