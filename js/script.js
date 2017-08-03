(function(JQuery) {
    'use strict'
    var loadFn = function() {
        window.onload = function() {
            var modal = document.getElementById("loadModal");
            // modal.style.display = "block";
            // modal.style.marginLeft = "0px";
          $('#loadModal').modal('show')
            // modal.classList.toggle("appear");
        }  
    }  
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
            story: "I have had chronic elbow pain for the last several years. I believe it is due to repetitious movements. Whatever the cause, it never doesn't have pain! I used the Mary Janes Healing Balm and within 30 minutes the pain had subsided. Such a pleasant surprise as I have tried many treatments over the years. I keep the balm in my purse and whenever I feel a tinge of pain I rub it on. I won't leave home without it!",
            author: 'Jan Dougherty',
            custSince: '2017'
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
    loadFn();
})();
