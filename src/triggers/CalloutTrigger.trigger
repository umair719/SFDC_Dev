/**
 * Created by umair on 2019-03-10.
 */

trigger CalloutTrigger on Account (before insert, before update) {
    CalloutClass.makeCallout();
}