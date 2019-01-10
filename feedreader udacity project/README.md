#Feedreader Overview

For this project I create tests wihin the four test suites:
1.RSS Feeds
2.the menu
3.Initial entries
4.New Feed Selection


#'rss feeds' test suite
There are 3 tests ensure the feeds are defined, that hey have a 'url' and a 'name'

#'the menu' test suite
There are 2 tests. One that makes sure the menu is hidden by default and one for the toggle menu to become visible and  hidden on click of hamburger

#'initial entries' test suite
This is an asynchronous test and uses the beforeach function. We want to make sure the loadfeed function completes its job.

#'new feed selection' test suite
This is an asynchronous test. We are testing to make sure the new load of a feed actually loads the content.