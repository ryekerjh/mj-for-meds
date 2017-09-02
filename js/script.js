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
            story: "For 6 months I had constant and fairly severe shoulder pain that was probably a result of straining it while doing yoga or just from overuse. I was not able to raise my arm over my head and had a horrible time trying to sleep. I tried several rounds of acupuncture, a few chiropractic appts., massage, major doses of Advil, epsom salt baths, etc!! When nothing helped reduce the pain or heal my shoulder, I went to my Kaiser MD who recommended steroid injections, which I refused. Right about that time I was given some of Beth's salve to try and although I was quite reluctant and a bit  skeptical that this salve would do anything at all, to my amazement, I got immediate results. I not only had more mobility in my shoulder area, there was a definite reduction in my pain level. After apply it several times a day for several days, along with some stretches prescribed by a X-Fit coach, one week later my condition is 75% better. I highly recommend this amazing remedy and am a true believer in Beth's miracle Salve.", 
            author: 'Lisa C.', 
            custSince: '2017'
        },
        {  
            story: "I have had chronic elbow pain for the last several years. I believe it is due to repetitious movements. Whatever the cause, it never doesn't have pain! I used the Mary Janes Healing Balm and within 30 minutes the pain had subsided. Such a pleasant surprise as I have tried many treatments over the years. I keep the balm in my purse and whenever I feel a tinge of pain I rub it on. I won't leave home without it!",
            author: 'Jan Dougherty',
            custSince: '2017'
        },
        { 
            story: "A female in my mid 50's, I have suffered from Rheumatoid Arthritis for a while now. It began in my lower back, then my shoulder, elbow and most recently the onset of carpal tunnel in my wrist and fingers, which impairs my ability to do daily tasks. The balm helps tremendously relieve the swelling, pain, inflammation, stiffness and aching and greatly improves my range of motion and functionality. Thank you! I'm so grateful!",
            author: 'Colette Kinder',
            custSince: '2016'
        },
        {
            story: "I would like to express my sincere gratitude for your excellent product, MJ4Meds. I have been designing handmade clothes over 30 years and have been diagnosed with carpal tunnel and arthritis. After using your product I am pain free. I highly recommend this cream and will continue using it the rest of my life. Thanks again!",
            author: 'Melody Sabatasso',
            custSince: '2016'
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
