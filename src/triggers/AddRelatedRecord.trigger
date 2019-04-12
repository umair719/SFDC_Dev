/**
 * Created by umair on 2019-03-10.
 */

trigger AddRelatedRecord on Account (after insert, after update) {

    List<Opportunity> oppList = new List<Opportunity>();

    // Get the related opportunities for the accounts in this trigger
    Map<Id, Account> acctsWithOpps = new Map<Id, Account>(
    [SELECT Id, (SELECT Id FROM Opportunities) FROM Account WHERE Id IN :Trigger.New]
    );

    // Add an opportunity for each account if it doesn't already have one.
    // Iterate though each account.
    for (Account a : Trigger.New) {
        System.debug('acctWithOps.get(a.Id).Opportunities.size()=' + acctsWithOpps.get(a.Id).Opportunities.size());
        // Check if the account already has a related opportunity.
        if (acctsWithOpps.get(a.Id).Opportunities.size() == 0) {
            //if it doesn't, add a default opportunity
            oppList.add(new Opportunity(Name = a.Name + ' Opportunity',
                    StageName = 'Prospecting',
                    CloseDate = System.today().addMonths(1),
                    AccountId = a.Id));
        }
    }

    // If default opp were created, lets add them to the list
    if (oppList.size() > 0) {
        insert oppList;
    }

}