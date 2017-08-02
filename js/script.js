(function() {
    'use strict'
    var testArr = [
        {
            story: "I am an active 68-year-old starting my days at Donner Lake at 6am for a 2 1/2 mile slalom pull. When water skiing my shoulders and back sometimes take a toll before my next adventure mountain biking or hang gliding. I apply MJ4Meds to my sore spots and get immediate relief so I can continue my day.", 
            author: 'Bobby Carter', 
            custSince: '2012'
        }, 
        {
            story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur pellentesque convallis. Etiam laoreet nec erat vitae mattis. Ut cursus sapien est. Cras.", 
            author: 'Jane Doe', 
            custSince: '2000'
        },
        {
            story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae odio ipsum.", 
            author: 'John Doe', 
            custSince: '2009'
        }];
    var interval = function() {
        setInterval(function(){ 
            switchOut(); 
        }, 10000);
    }

    var switchOut = function() {
        // testArr.shift();
        var testimonies = document.getElementById("testimonies");
        var author = document.getElementById("author");
        var custSince = document.getElementById("custSince");
        var ran = testArr[Math.floor(Math.random() * testArr.length)];
        testimonies.innerHTML = ran.story;
        author.innerHTML = ran.author;
        custSince.innerHTML = ran.custSince;
    }

    interval();
})();
