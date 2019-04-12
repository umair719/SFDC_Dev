/**
 * Created by umair on 2019-03-10.
 */

public class CalloutClass {
    @future(callout=true)
    public static void makeCallout(){
        HttpRequest request = new HttpRequest();
        // Set the endpoint URL.
        String endpoint = 'https://api.github.com/orgs/octokit/repos';
        request.setEndpoint(endpoint);

        // Set the HTTP verb to GET
        request.setMethod('GET');

        // Send the HTTP request and get the response.
        HttpResponse response = new Http().send(request);
    }
}