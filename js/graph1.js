var prospectsinView = true;
var applicantsinView = false;
var yeildinView = false;

var prospects = document.getElementById('prospects').getContext('2d');
var applicants = document.getElementById('applicants').getContext('2d');
var yeild = document.getElementById('yeild').getContext('2d');

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#prospects')) {
        if (prospectsinView) {
            return;
        }
        prospectsinView = true;
        new Chart(prospects, {
            type: 'bar',

            data: {
                labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                datasets: [{
                    label: 'Prospects',
                    backgroundColor: 'rgb(118, 118, 118)',
                    borderColor: 'rgb(118, 118, 118)',
                    data: [150000, 170000, 190000, 250000, 280000, 300000, 350000, 380000, 400000, 500000]
                }]
            },

            options: {
                maintainAspectRatio: false
            }
        });
    } else {
        prospectsinView = false;  
    }
});

$(window).scroll(function() {
    if (isScrolledIntoView('#applicants')) {
        if (applicantsinView) { return; }
        applicantsinView = true;
        new Chart(applicants, {
            type: 'bar',
            data: {
                labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                datasets: [{
                    label: 'Applicants',
                    backgroundColor: 'rgb(214, 214, 206)',
                    borderColor: 'rgb(214, 214, 206)',
                    data: [21000, 24000, 25000, 22000, 20000, 26000, 28000, 32000, 33000, 35000]
                }]
            },
            options: {
                maintainAspectRatio: false
            }
        });
    } else {
        applicantsinView = false;  
    }
});


$(window).scroll(function() {
    if (isScrolledIntoView('#yeild')) {
        if (yeildinView) { return; }
        yeildinView = true;
        new Chart(yeild, {
            type: 'line',
            data: {
                labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                datasets: [{
                    label: 'Yield Rate',
                    backgroundColor: 'rgb(145, 171, 90)',
                    borderColor: 'rgb(145, 171, 90)',
                    data: [0.4, 0.5, 0.5, 0.4, 0.4, 0.6, 0.7, 0.7, 0.8, 0.85],
                    fill: false
                },
                {label: 'Admit Rate',
                backgroundColor: 'rgb(143, 57, 49)',
                borderColor: 'rgb(143, 57, 49)',
                data: [0.4, 0.3, 0.3, 0.25, 0.15, 0.1, 0.1, 0.05, 0.1, 0.04],
                fill: false
                }]
            },

            options: {
                maintainAspectRatio: false
        
            }
        });
    } else {
        yeildinView = false;  
    }
});


$(document).ready(function() {
    TweenMax.set(".title", { perspective: 500 });
    TweenMax.set(".overlay", {z: 150})
    
    TweenMax.fromTo(
    ".overlay",
    1,
    { skewX: 30, scale: 1.5  },
    {
      delay: 0,
      skewX: 0,
      xPercent: 100,
      transformOrigin: "0% 100%",
      repeat: 0,
      repeatDelay: 1,
      ease: Power2.easeOut
    }
    );
    
    TweenMax.from(".skyline", 1, {
        delay: 0,
        z: 100,
        transformOrigin: "50% 0%",
        repeat: 0,
        repeatDelay: 1,
        ease: Power3.easeOut
    });
});