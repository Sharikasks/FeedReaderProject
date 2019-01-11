$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // This is our second test - it tests to make sure that our url is defined. It makes sure it's defined by ensuring url length is greater than 0

        it('url defined', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        // This is our third test - This test loops through each feed in the allFeeds object to make sure that name is defined. We verify by making sure lenght is greater than 0.

        it('name defined', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });

    });


    // This is our second Test suite that deals with test around our menu.

    describe('The menu', function() {

        //This is our fourth test - it makes sure that the menu is hidden by default through the .menu-hidden class

        it('is hidden', function() {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        //This is our fifth test that makes sure the menu toggles properly from visible to non visible as it is continually clicked.

        it('toggles on and off', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });
    // This is our Third Test Suite that is ensuring our feed reader is working properly named 'initial entries'
    describe('Initial Entries', function() {

        //This is our sixth test - this is an asynchronous test that uses Jasmine's beforeEach function. We are testing that loadFeed() is populating at least one entry

         beforeEach(function(done) {
            loadFeed(0, done);
         });
         it('completes its work', function() {
            const feed = document.querySelector('.feed');
            expect(feed.children.length > 0).toBe(true);
         });
    });

    // This is our fourth test suite 'New Feed Selection' to make sure new feeds load after initial load
    describe('New Feed Selection', function() {
        const feed = document.querySelector('.feed');
        const firstFeed = [];

        //This is the seventh and final test that makes sure content is loaded when loadFeed() is executed
    beforeEach(function(done) {
            loadFeed(0, function(){
                Array.from(feed.children).forEach(function(entry) {
                firstFeed.push(entry.innerText);
            });
            loadFeed(1, function(){
                Array.from(feed.children).forEach(function(entry) {
                firstFeed.push(entry.innerText);
                done();
                });
            });
        });
    });
         it('content changes', function() {
            Array.from(feed.children).forEach(function(entry,index) {
                expect(entry.innerText === firstFeed[index]).toBe(false);
                expect(entry.innerText, firstFeed[index], entry.innerText === firstFeed[index]);
            });
         });
    });
}());
