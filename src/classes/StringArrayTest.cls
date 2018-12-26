/**
 * Created by umair on 2018-12-25.
 */

public with sharing class StringArrayTest {

    public static List<String> generateStringArray(Integer n) {
        List<String> l = new List<String>();
        for (Integer i = 0; i < n; i++) {
            l.add('Test ' + i);
        }
        return l;
    }

}