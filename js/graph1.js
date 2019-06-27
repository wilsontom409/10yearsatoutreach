var prospectsinView = true;
var applicantsinView = false;
var yeildinView = false;
var internsinView = false;

var prospects = document.getElementById('prospects').getContext('2d');
var applicants = document.getElementById('applicants').getContext('2d');
var yeild = document.getElementById('yeild').getContext('2d');
var interns = document.getElementById('interns').getContext('2d');


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
            },
            legend: {
                  display: false
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
            },
            legend: {
                  display: false
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
            },
            legend: {
                  display:false
              }
        });
    } else {
        yeildinView = false;  
    }
});

$(window).scroll(function() {
    if (isScrolledIntoView('#interns')) {
        if (internsinView) {
            return;
        }
        internsinView = true;
        new Chart(interns, {
            type: 'bar',

            data: {
                labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                datasets: [{
                    label: 'Internships',
                    backgroundColor: 'rgb(118, 118, 118)',
                    borderColor: 'rgb(118, 118, 118)',
                    data: [150000, 170000, 190000, 250000, 280000, 300000, 350000, 380000, 400000, 500000]
                }]
            },

            options: {
                maintainAspectRatio: false
            },
            legend: {
                  display: false
              }
            
        });
        new Chart(document.getElementById("interns_doughnut"), {
            type: 'pie',
            data: {
              labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
              datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [2478,5267,734,784,433]
              }]
            },
            options: {
              title: {
                display: true,
                text: 'Students who are employed or have plans 1 year post graduation.'
              },
              legend: {
                  display: false
              }
            }
        });
    } else {
        internsinView = false;  
    }
});

$(document).ready(function() {
//    TweenMax.to(".title_words", 3, {
//      opacity: 1,
//      ease: Elastic.easeOut
//    });
    
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

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var modalImg = document.getElementById("img01");


img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

$(".img-fluid").addClass("wow fadeIn z-depth-1-half");

new WOW().init();