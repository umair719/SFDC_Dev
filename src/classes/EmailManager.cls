/**
 * Created by umair on 2018-12-25.
 */

public with sharing class EmailManager {
    //Public Method
    public static void sendMail(String address, String subject, String body) {
        // Create an email message object
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        String[] toAddresses = new String[]{
                address
        };
        mail.setToAddresses(toAddresses);
        mail.setSubject(subject);
        mail.setPlainTextBody(body);

        // Pass this email message to the built-in sendEmail method
        // of the Messaging class
        Messaging.SendEmailResult[] results = Messaging.sendEmail(new Messaging.SingleEmailMessage[]{
                mail
        });

        // Call a helper method to inspect the returned results
        inspectResults(results);
    }

    // Helper Method
    private static Boolean inspectResults(Messaging.SendEmailResult[] results) {
        Boolean sendResults = true;

        // sendEmail return an array of result objects
        // Iterate through the list of inspect results.
        // In this class, the method sends only one email,
        // so we should have only one result.

        for (Messaging.SendEmailResult res : results) {
            if (res.isSuccess()) {
                System.debug('Email sent successfully');
            } else {
                sendResults = false;
                System.debug('The following errors occurred: ' + res.getErrors());
            }
        }

        return sendResults;
    }
}