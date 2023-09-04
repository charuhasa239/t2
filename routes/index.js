var express = require('express');
var router = express.Router();
const nameList = [
  {
    'id': 1, 'term': "branching", 'description': 'In source control, duplicating an object under review allows multiple developers to modify the same code simultaneously',
    'reference': '[1] DZone, "48 DevOps Terms You Should Know: A DevOps Glossary," Medium, july. 17, 2017. [Online]. Available: https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752.n'
  },
  {
    'id': 2, 'term': 'commit', 'description': 'In version control systems, developers can record changes made to a repository by committing them, along with a log message that describes the modifications.',
    'reference': 'Plutora. (n.d.). "DevOps at Scale: Terminology Glossary." Plutora. Retrieved from https://www.plutora.com/devops-at-scale/terminology-glossary'
  },
  {
    'id': 3, 'term': 'functional testing', 'description': 'A type of black-box testing that involves testing functions (also known as features) by providing input and observing the resulting output change',
    'reference': 'Plutora. (n.d.). "DevOps at Scale: Terminology Glossary." Plutora. Retrieved from https://www.plutora.com/devops-at-scale/terminology-glossary'
  },
  {
    'id': 4, 'term': 'DevSecOps', 'description': 'It involves incorporating security into all stages of the software development workflow instead of saving it for the last stage',
    'reference': 'Global Knowledge. (n.d.). "Glossary of DevOps Terms." Global Knowledge. Retrieved from https://www.globalknowledge.com/ca-en/topics/devops/glossary-of-terms/'
  },
  {
    'id': 5, 'term': 'Issue Tracking', 'description': 'To record and follow the progress of every problem or issue that a user identifies until the problem is resolved',
    'reference': 'Simplilearn. (n.d.). "Top DevOps Terms You Should Know." Simplilearn. Retrieved from https://www.simplilearn.com/top-devops-terms-you-should-know-article'
  },
  {
    'id': 6, 'term': 'Fail Fast', 'description': 'A strategy in which you try something, it fails, feedback is delivered quickly, you adapt accordingly, and try again.',
    'reference': 'Simplilearn. (n.d.). "Top DevOps Terms You Should Know." Simplilearn. Retrieved from https://www.simplilearn.com/top-devops-terms-you-should-know-article'
  },
  {
    'id': 7, 'term': 'Infrastructure-as-a-Service (IaaS)', 'description': 'A self-service computing, networking, and storage utility on-demand over a network',
    'reference': 'Digital.ai. (n.d.). "Common DevOps Terms." Digital.ai. Retrieved from https://digital.ai/glossary/common-devops-terms/'
  },
  {
    'id': 8, 'term': 'Rollback', 'description': 'An automatic or manual operation that restores a database or program to a previously defined state',
    'reference': 'DZone. (n.d.). "48 DevOps Terms You Should Know: A DevOps Glossary." Medium. Retrieved from https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752'
  },
  {
    'id': 9, 'term': 'NoOps', 'description': 'NoOps (no operations) is the idea that automation can completely eliminate the need for a dedicated operations team.',
    'reference': 'Plutora. (n.d.). "DevOps at Scale: Terminology Glossary." Plutora. Retrieved from https://www.plutora.com/devops-at-scale/terminology-glossary'
  },
  {
    'id': 10, 'term': 'Test Environment', 'description': 'An environment that testing teams use to execute test cases and fix bugs prior to a release.',
    'reference': 'DevOps istitute (2020). "DevOps Master Glossary." Retrieved from https://assets.ctfassets.net/82ripq7fjls2/5IhUvz2yDKCePQbSM5vj1V/e676e3e6028e580b536e79f472c607c2/DevOps-Master-Glossary-10Dec2020.pdf'
  },
  {
    'id': 11, 'term': 'agent', 'description': 'A program installed on specific physical servers in order to handle the execution of various processes on that server.',
    'reference': 'DZone. (n.d.). "48 DevOps Terms You Should Know: A DevOps Glossary." Medium. Retrieved from https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752'
  },
  {
    'id': 12, 'term': 'batch sizes', 'description': 'Refers to the volume of features involved in a single code release.',
    'reference': 'DevOps istitute (2020). "DevOps Master Glossary." Retrieved from https://assets.ctfassets.net/82ripq7fjls2/5IhUvz2yDKCePQbSM5vj1V/e676e3e6028e580b536e79f472c607c2/DevOps-Master-Glossary-10Dec2020.pdf'
  },
  {
    'id': 13, 'term': 'production', 'description': 'The last stage in the software deployment pipeline, where the target audience will finally use the application.',
    'reference': 'Simplilearn. (n.d.). "Top DevOps Terms You Should Know." Simplilearn. Retrieved from https://www.simplilearn.com/top-devops-terms-you-should-know-article'
  },
  {
    'id': 14, 'term': 'lean', 'description': 'Lean aims to create more value for customers with fewer resources by identifying and eliminating waste.',
    'reference': 'Plutora. (n.d.). "DevOps at Scale: Terminology Glossary." Plutora. Retrieved from https://www.plutora.com/devops-at-scale/terminology-glossary'
  },
  {
    'id': 15, 'term': 'collaboration', 'description': 'People jointly working with others towards a common goal.',
    'reference': 'DevOps istitute (2020). "DevOps Master Glossary." Retrieved from https://assets.ctfassets.net/82ripq7fjls2/5IhUvz2yDKCePQbSM5vj1V/e676e3e6028e580b536e79f472c607c2/DevOps-Master-Glossary-10Dec2020.pdf'
  },
  {
    'id': 16, 'term': 'Regression Testing', 'description': 'testing of the end-to-end system to verify that changes to an application did not negatively impact existing functionality.',
    'reference': 'Digital.ai. (n.d.). "Common DevOps Terms." Digital.ai. Retrieved from https://digital.ai/glossary/common-devops-terms/'
  },
  {
    'id': 17, 'term': 'Product owner', 'description': 'The product owner has a leadership role in agile development and is responsible for managing the product backlog.',
    'reference': 'Plutora. (n.d.). "DevOps at Scale: Terminology Glossary." Plutora. Retrieved from https://www.plutora.com/devops-at-scale/terminology-glossary'
  },
  {
    'id': 18, 'term': 'Exploratory Testing', 'description': 'A testing process where human testers are given free rein to test areas that may potentially have issues that automated testing couldn’t detect.',
    'reference': 'Simplilearn. (n.d.). "Top DevOps Terms You Should Know." Simplilearn. Retrieved from https://www.simplilearn.com/top-devops-terms-you-should-know-article'
  },
  {
    'id': 19, 'term': 'autonomy', 'description': 'The ability to make changes with the resources currently available, without the need to defer to something or someone higher up in the hierarchy.',
    'reference': 'DZone. (n.d.). "48 DevOps Terms You Should Know: A DevOps Glossary." Medium. Retrieved from https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752'
  },
  {
    'id': 20, 'term': 'sprint', 'description': 'A sprint is a defined work period, usually a month or less, in which a scrum team completes a discrete unit of work.',
    'reference': 'Plutora. (n.d.). "DevOps at Scale: Terminology Glossary." Plutora. Retrieved from https://www.plutora.com/devops-at-scale/terminology-glossary'
  },
  {
    'id': 21, 'term': 'Artifact', 'description': 'Any description of a process used to create a piece of software that can be referred to, including diagrams, user requirements, and UML models.',
    'reference': 'DZone, "48 DevOps Terms You Should Know: A DevOps Glossary," Medium, july. 17, 2017. [Online]. Available: https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752.n'
  },
  {
    'id': 22, 'term': 'Build Agent', 'description': 'An agent used in continuous integration that can be installed locally or remotely, depending on the server. The agent sends and receives messages relating to the creation of software builds.',
    'reference': 'Simplilearn. (n.d.). "Top DevOps Terms You Should Know." Simplilearn. Retrieved from https://www.simplilearn.com/top-devops-terms-you-should-know-article'
  },
  {
    'id': 23, 'term': 'Continuous Integration', 'description': ' a development practice that requires developers to integrate code into a shared repository several times a day.',
    'reference': 'Digital.ai. (n.d.). "Common DevOps Terms." Digital.ai. Retrieved from https://digital.ai/glossary/common-devops-terms/'
  },
  {
    'id': 24, 'term': 'Delivery Package', 'description': 'Set of release items (files, images, etc.) that  are packaged for deployment.',
    'reference': 'DevOps istitute (2020). "DevOps Master Glossary." Retrieved from https://assets.ctfassets.net/82ripq7fjls2/5IhUvz2yDKCePQbSM5vj1V/e676e3e6028e580b536e79f472c607c2/DevOps-Master-Glossary-10Dec2020.pdf'
  },
  {
    'id': 25, 'term': 'Everything as Code', 'description': 'everything from bare metal servers to deployment configurations is stored in a repository as code and can be recreated or rolled back to a past state with the click of a button.',
    'reference': 'Plutora. (n.d.). "DevOps at Scale: Terminology Glossary." Plutora. Retrieved from https://www.plutora.com/devops-at-scale/terminology-glossary'
  },
  {
    'id': 26, 'term': 'Mean Time to Recovery (MTTR)', 'description': 'The average time it takes a system or component to recover from a failure and return to production status.',
    'reference': 'DZone, "48 DevOps Terms You Should Know: A DevOps Glossary," Medium, july. 17, 2017. [Online]. Available: https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752.n'
  },
  {
    'id': 27, 'term': 'Technical debt', 'description': 'The extra development work that results when an easily implemented code is used in the short run, rather than the application of the best overall solution.',
    'reference': 'Simplilearn. (n.d.). "Top DevOps Terms You Should Know." Simplilearn. Retrieved from https://www.simplilearn.com/top-devops-terms-you-should-know-article'
  },
  {
    'id': 28, 'term': 'Release management', 'description': 'the process of managing software releases from the development stage to the actual software release itself.',
    'reference': 'Digital.ai. (n.d.). "Common DevOps Terms." Digital.ai. Retrieved from https://digital.ai/glossary/common-devops-terms/'
  },
  {
    'id': 29, 'term': 'Metric', 'description': 'Something that is measured and reported upon to help manage a process, IT service or activity.',
    'reference': 'DevOps istitute (2020). "DevOps Master Glossary." Retrieved from https://assets.ctfassets.net/82ripq7fjls2/5IhUvz2yDKCePQbSM5vj1V/e676e3e6028e580b536e79f472c607c2/DevOps-Master-Glossary-10Dec2020.pdf'
  },
  {
    'id': 30, 'term': 'Selenium', 'description': 'Popular open‐source tool for software testing GUI and web applications.',
    'reference': 'DevOps istitute (2020). "DevOps Master Glossary." Retrieved from https://assets.ctfassets.net/82ripq7fjls2/5IhUvz2yDKCePQbSM5vj1V/e676e3e6028e580b536e79f472c607c2/DevOps-Master-Glossary-10Dec2020.pdf'
  },
  {
    'id': 31, 'term': 'Application Release Automation', 'description': 'A practice of deploying software releases to various environments and their configurations with aslittle human interaction as possible.',
    'reference': 'DZone. (n.d.). "48 DevOps Terms You Should Know: A DevOps Glossary." Medium. Retrieved from https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752.'
  },
  {
    'id': 32, 'term': 'Behavior Driven Development', 'description': 'Test cases are created by simulating an EUTs externally observable inputs and outputs.',
    'reference': 'DevOps istitute (2020). "DevOps Master Glossary." Retrieved from https://assets.ctfassets.net/82ripq7fjls2/5IhUvz2yDKCePQbSM5vj1V/e676e3e6028e580b536e79f472c607c2/DevOps-Master-Glossary-10Dec2020.pdf'
  },
  {
    'id': 33, 'term': 'Container', 'description': 'containers are stand-alone, executable packages containing everything needed to run a piece of software.',
    'reference': 'Common DevOps Terms." Digital.ai. Retrieved from https://digital.ai/glossary/common-devops-terms/'
  },
  {
    'id': 34, 'term': 'Deployment Pipeline', 'description': 'An automated multi-step process that takes software from version control to making it available to an organizations users.',
    'reference': 'Simplilearn. (n.d.). "Top DevOps Terms You Should Know." Simplilearn. Retrieved from https://www.simplilearn.com/top-devops-terms-you-should-know-article'
  },
  {
    'id': 35, 'term': 'Legacy Application', 'description': 'An outdated or obsolete software program that is difficult to transition away from due to time, money, or other challenges within the organization.',
    'reference': 'Plutora. (n.d.). "DevOps at Scale: Terminology Glossary." Plutora. Retrieved from https://www.plutora.com/devops-at-scale/terminology-glossary'
  },
  {
    'id': 36, 'term': 'Self-Service Deployment', 'description': 'The action of automating deployment processes enough for developers to allow project managers or even clients to directly control deployments.',
    'reference': 'DZone. (n.d.). "48 DevOps Terms You Should Know: A DevOps Glossary." Medium. Retrieved from https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752.'
  },
  {
    'id': 37, 'term': 'DevOps Pipeline', 'description': 'The entire set of interconnected processes that make up a DevOps Infrastructure.',
    'reference': 'DevOps istitute (2020). "DevOps Master Glossary." Retrieved from https://assets.ctfassets.net/82ripq7fjls2/5IhUvz2yDKCePQbSM5vj1V/e676e3e6028e580b536e79f472c607c2/DevOps-Master-Glossary-10Dec2020.pdf'
  },
  {
    'id': 38, 'term': 'Version control system ', 'description': 'a system that records changes to a file or set of files over time so that you can recall specific versions later.',
    'reference': 'Common DevOps Terms." Digital.ai. Retrieved from https://digital.ai/glossary/common-devops-terms/'
  },
  {
    'id': 39, 'term': 'Test Automation', 'description': 'Using specialized software to control the execution of tests and compare actual outcomes against predicted outcomes.',
    'reference': 'Simplilearn. (n.d.). "Top DevOps Terms You Should Know." Simplilearn. Retrieved from https://www.simplilearn.com/top-devops-terms-you-should-know-article'
  },
  {
    'id': 40, 'term': 'Private Cloud', 'description': 'A private cloud serves the needs of a single organization. It is often hosted on-prem and is optimized to fit a particular infrastructure use case.',
    'reference': 'Plutora. (n.d.). "DevOps at Scale: Terminology Glossary." Plutora. Retrieved from https://www.plutora.com/devops-at-scale/terminology-glossary'
  }


];
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "SIT722 DevOps Glossary",
    sub:
      " welcome to my website showing a collection  of devops terms and thier brief description.",
    names: nameList,
  });
});
module.exports = router;
