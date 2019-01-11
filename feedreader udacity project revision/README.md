#Feedreader Overview

For this project I create tests wihin the four test suites:
1.RSS Feeds
2.the menu
3.Initial entries
4.New Feed Selection

Our Jasmine tests are configured on feedreader.js. To start testing, open up index.html and jasmine testing widget will appear at the bottom


#'rss feeds' test suite
There are 3 tests ensure the feeds are defined, that hey have a 'url' and a 'name'

Test 1 'are defined' - This test makes sure that the allFeeds variable has been defined.

Test 2 'url defined' - This makes sure that the allfeeds object has 'url' defined.

Test 3 'name defined' - This makes sure that the allfeeds object has 'name' defined.

#'the menu' test suite
There are 2 tests. One that makes sure the menu is hidden by default and one for the toggle menu to become visible and  hidden on click of hamburger

Test 4 'is hidden' - This makes sure that the menu is hidden by default on load through css declarations assigned to .menu-hidden

Test 5 'toggles on and off'- This makes sure the toggle method is properly adding and removing the .menu-hidden class to <body> tag

#'initial entries' test suite
This is an asynchronous test and uses the beforeach function. We want to make sure the loadfeed function completes its job.

Test 6 'Initial Entries' - This is an asynchronous test that tests the loadFeed() function and makes sure it displays an entry

#'new feed selection' test suite
This is an asynchronous test. We are testing to make sure the new load of a feed actually loads the content.

Test 7 'New Feed Selection' - This is an asychronous test that makes sure content is loaded when another feed is initiated.