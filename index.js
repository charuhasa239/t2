var express = require('express');
var router = express.Router();
const nameList = [
    {
        'id': 1, 'term': "branching", 'description': 'In source control, duplicating an object under review allows multiple developers to modify the same code simultaneously',
        'reference': '[1] DZone, "48 DevOps Terms You Should Know: A DevOps Glossary," Medium, july. 17, 2017. [Online]. Available: https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752.n'
    },
    {
        'id': 2, 'term': 'commit', 'description': 'In version control systems, developers can record changes made to a repository by committing them, along with a log message that describes the modifications.',
        'reference': 'ref1'
    },
    {
        'id': 3, 'term': 'functional testing', 'description': 'A type of black-box testing that involves testing functions (also known as features) by providing input and observing the resulting output change',
        'reference': 'ref 1'
    },
    {
        'id': 4, 'term': 'DevSecOps', 'description': 'It involves incorporating security into all stages of the software development workflow instead of saving it for the last stage',
        'reference': 'ref 1'
    },
    {
        'id': 5, 'term': 'Issue Tracking', 'description': 'To record and follow the progress of every problem or “issue” that a user identifies until the problem is resolved',
        'reference': 'ref 1'
    },
    {
        'id': 6, 'term': 'Fail Fast', 'description': 'A strategy in which you try something, it fails, feedback is delivered quickly, you adapt accordingly, and try again.',
        'reference': 'ref 1'
    },
    {
        'id': 7, 'term': 'Infrastructure-as-a-Service (IaaS)', 'description': 'A self-service computing, networking, and storage utility on-demand over a network',
        'reference': 'ref 1'
    },
    {
        'id': 8, 'term': 'Rollback', 'description': 'An automatic or manual operation that restores a database or program to a previously defined state',
        'reference': 'ref 1'
    },
    {
        'id': 9, 'term': 'NoOps', 'description': 'NoOps (no operations) is the idea that automation can completely eliminate the need for a dedicated operations team.',
        'reference': 'ref 1'
    },
    {
        'id': 10, 'term': 'Test Environment', 'description': 'An environment that testing teams use to execute test cases and fix bugs prior to a release.',
        'reference': 'ref 1'
    }

];
router.get("/", function (res) {
    res.render("index", {
        title: "SIT722 DevOps Glossary",
        sub:
            " welcome to my website showing a collection  of devops terms and thier brief description.",
        names: nameList,
    });
});
module.exports = router;