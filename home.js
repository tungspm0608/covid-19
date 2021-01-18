let width,height
let nhiem = 0
let chet = 0
let hoiphuc = 0
let nhiem1 = 0
let chet1 = 0
let hoiphuc1 = 0

let EUROPE = 0
let NORTH_AMERICA = 0
let ASIA = 0
let SOUTH_AMERICA = 0
let AFRICA = 0

fetch("https://corona.lmao.ninja/v2/countries")
.then((response) => response.json())
.then(data => {
    console.log(data);
    for (let i= 0; i < 220;i++) {
        nhiem = nhiem + data[i].cases
        chet = chet + data[i].deaths
        hoiphuc = hoiphuc + data[i].recovered
        nhiem1 = nhiem1 + data[i].todayCases
        chet1 = chet1 + data[i].todayDeaths
        hoiphuc1 = hoiphuc1 + data[i].todayRecovered
        if (data[i].continent == 'Asia') {ASIA = ASIA + data[i].cases}
        if (data[i].continent == 'Europe') {EUROPE = EUROPE + data[i].cases}
        if (data[i].continent == 'Africa') {AFRICA = AFRICA + data[i].cases}
        if (data[i].continent == 'North America') {NORTH_AMERICA = NORTH_AMERICA + data[i].cases}
        if (data[i].continent == 'South America') {SOUTH_AMERICA = SOUTH_AMERICA + data[i].cases}
        // let text_child = data[i].country
        // let child = document.createElement("div")
        // child.innerHTML = text_child
        // document.getElementById('table_dangmac').appendChild(child); 
        document.getElementById('table_dangmac').innerHTML += `<tr id="table_hang">
                                                        <td id="table_1"><img src="${data[i].countryInfo.flag}"></td>
                                                        <td id="table_2">${data[i].country}</td>
                                                        <td id="table_3">${data[i].continent}</td>
                                                        <td id="table_4">${data[i].population}</td>
                                                        <td id="table_5">${data[i].cases}</td>
                                                        <td id="table_6">${data[i].casesPerOneMillion}</td>
                                                        <td id="table_7">${data[i].oneCasePerPeople}</td>
                                                        <td id="table_8">${data[i].todayCases}</td>
                                                    </tr>`
        document.getElementById('table_chuakhoi').innerHTML += `<tr id="table_hang">
                                                                    <td id="table_1"><img src="${data[i].countryInfo.flag}"></td>
                                                                    <td id="table_2">${data[i].country}</td>
                                                                    <td>${data[i].continent}</td>
                                                                    <td>${data[i].population}</td>
                                                                    <td>${data[i].recovered}</td>
                                                                    <td>${data[i].recoveredPerOneMillion}</td>
                                                                    <td>${data[i].todayRecovered}</td>
                                                                </tr>`
        document.getElementById('table_tuvong').innerHTML += `<tr id="table_hang">
                                                                <td id="table_1"><img  src="${data[i].countryInfo.flag}"></td>
                                                                <td id="table_2">${data[i].country}</td>
                                                                <td>${data[i].continent}</td>
                                                                <td>${data[i].population}</td>
                                                                <td>${data[i].deaths}</td>
                                                                <td>${data[i].oneDeathPerPeople}</td>
                                                                <td>${data[i].deathsPerOneMillion}</td>
                                                                <td>${data[i].todayDeaths}</td>
                                                            </tr>`
    };
    document.getElementById('nhiem_today').textContent = String(nhiem)
    document.getElementById('chet_today').textContent = String(chet)
    document.getElementById('hoiphuc_today').textContent = String(hoiphuc)
    document.getElementById('nhiem_today1').textContent = '+' + String(nhiem1)
    document.getElementById('chet_today1').textContent = '+' + String(chet1)
    document.getElementById('hoiphuc_today1').textContent = '+' + String(hoiphuc1)
    document.getElementById('EUROPE').textContent = EUROPE
    document.getElementById('NORTH_AMERICA').textContent = NORTH_AMERICA
    document.getElementById('ASIA').textContent = ASIA
    document.getElementById('SOUTH_AMERICA').textContent = SOUTH_AMERICA
    document.getElementById('AFRICA').textContent = AFRICA
})

.catch(err => {
    // console.log(err);
    console.log('no problem');
});



function dangmac () {
    document.getElementById('table_dangmac').style.display = 'block'
    document.getElementById('table_chuakhoi').style.display = 'none'
    document.getElementById('table_tuvong').style.display = 'none'
    document.getElementById('dangmac').style.backgroundColor = '#F9F871'
    document.getElementById('chuakhoi').style.backgroundColor = 'rgb(179, 178, 175)'
    document.getElementById('tuvong').style.backgroundColor = 'rgb(179, 178, 175)'
}
function chuakhoi () {
    document.getElementById('table_dangmac').style.display = 'none'
    document.getElementById('table_chuakhoi').style.display = 'block'
    document.getElementById('table_tuvong').style.display = 'none'
    document.getElementById('dangmac').style.backgroundColor = 'rgb(179, 178, 175)'
    document.getElementById('chuakhoi').style.backgroundColor = '#F9F871'
    document.getElementById('tuvong').style.backgroundColor = 'rgb(179, 178, 175)'
}
function tuvong () {
    document.getElementById('table_dangmac').style.display = 'none'
    document.getElementById('table_chuakhoi').style.display = 'none'
    document.getElementById('table_tuvong').style.display = 'block'
    document.getElementById('dangmac').style.backgroundColor = 'rgb(179, 178, 175)'
    document.getElementById('chuakhoi').style.backgroundColor = 'rgb(179, 178, 175)'
    document.getElementById('tuvong').style.backgroundColor = '#F9F871'
}

function drop_nava () {
	if (document.getElementById('drop_content').style.display == 'block') {
        document.getElementById('drop_content').style.display = 'none'
    }else {
        document.getElementById('drop_content').style.display = 'block'
    }
}

function hientai () {
    width = window.outerWidth
    document.getElementById('hientai').style.display = 'block' 
    document.getElementById('hientai_button').style.backgroundColor = '#BF3F3C'
    document.getElementById('hientai_button').style.color = 'black'
    document.getElementById('covid19_button').style.background = 'none'
    document.getElementById('covid19_button').style.color = 'white'
    document.getElementById('tintuc_button').style.background = 'none'
    document.getElementById('tintuc_button').style.color = 'white'
    document.getElementById('quiz_button').style.background = 'none'
    document.getElementById('quiz_button').style.color = 'white'
    document.getElementById('covid19').style.display = 'none'
    document.getElementById('tintuc').style.display = 'none'
    document.getElementById('quiz').style.display = 'none'
    if (width <= 739) {
        document.getElementById('map').style.display = 'none'  
        document.getElementById('footer').style.display = 'none'
        document.getElementById('footer_mobile').style.display = 'block'
    } else {
        document.getElementById('map').style.display = 'block'  
        document.getElementById('footer').style.display = 'block'
    // document.getElementById('slider').style.backgroundColor = '#2c3e50'
    }
}
function covid19 () {
    width = window.outerWidth
    document.getElementById('hientai').style.display = 'none' 
    document.getElementById('covid19').style.display = 'block' 
    document.getElementById('covid19_button').style.background = "#BF3F3C"
    document.getElementById('covid19_button').style.color = 'black'
    document.getElementById('hientai_button').style.background = 'none'
    document.getElementById('hientai_button').style.color = 'white'
    document.getElementById('tintuc_button').style.background = 'none'
    document.getElementById('tintuc_button').style.color = 'white'
    document.getElementById('quiz_button').style.background = 'none'
    document.getElementById('quiz_button').style.color = 'white'
    document.getElementById('tintuc').style.display = 'none'
    document.getElementById('quiz').style.display = 'none'
    if (width <= 739) {
        document.getElementById('map').style.display = 'none'  
        document.getElementById('footer').style.display = 'none'
        document.getElementById('footer_mobile').style.display = 'block'
    } else {
        document.getElementById('map').style.display = 'flex'  
        document.getElementById('footer').style.display = 'block'
    // document.getElementById('slider').style.backgroundColor = '#2c3e50'
    }
}
function tintuc () {
    width = window.outerWidth
    document.getElementById('hientai').style.display = 'none' 
    document.getElementById('covid19').style.display = 'none'
    document.getElementById('tintuc').style.display = 'block' 
    document.getElementById('tintuc_button').style.backgroundColor = '#BF3F3C'
    document.getElementById('tintuc_button').style.color = 'black'
    // document.getElementById('slider').style.backgroundColor = '#2c3e50'
    document.getElementById('hientai_button').style.background = 'none'
    document.getElementById('hientai_button').style.color = 'white'
    document.getElementById('covid19_button').style.background = 'none'
    document.getElementById('covid19_button').style.color = 'white'
    document.getElementById('quiz_button').style.background = 'none'
    document.getElementById('quiz_button').style.color = 'white'
    document.getElementById('quiz').style.display = 'none' 
    if (width <= 739) {
        document.getElementById('map').style.display = 'none'  
        document.getElementById('footer').style.display = 'none'
        document.getElementById('footer_mobile').style.display = 'block'
    } else {
        document.getElementById('map').style.display = 'block'  
        document.getElementById('footer').style.display = 'block'
    }
}
function quiz () {
    width = window.outerWidth
    document.getElementById('hientai').style.display = 'none' 
    document.getElementById('covid19').style.display = 'none'
    document.getElementById('tintuc').style.display = 'none'
    document.getElementById('footer').style.display = 'none'
    document.getElementById('quiz').style.display = 'block' 
    document.getElementById('quiz_button').style.backgroundColor = '#BF3F3C'
    document.getElementById('quiz_button').style.color = 'black'
    // document.getElementById('slider').style.backgroundColor = '#2c3e50'
    document.getElementById('hientai_button').style.background = "none"
    document.getElementById('hientai_button').style.color = 'white'
    document.getElementById('covid19_button').style.background = 'none'
    document.getElementById('covid19_button').style.color = 'white'
    document.getElementById('tintuc_button').style.background = 'none'
    document.getElementById('tintuc_button').style.color = 'white'
    if (width <= 739) {
        document.getElementById('map').style.display = 'none'  
        document.getElementById('footer_mobile').style.display = 'none'
        // document.getElementById('nava').style.position = 'absolute'
        // document.getElementById('nava').style.top = '500px'
        // document.getElementById('nava').style.left = '1000px'
        // document.getElementById('nava').style.transform = 'rotate(90deg)'
        // document.getElementById('body').style.backgroundImage = 'https://i.pinimg.com/originals/a4/a5/48/a4a5484cc9e7f0594f426a0afde8d372.jpg'
    } else {
        document.getElementById('map').style.display = 'none' 
    }
}

function openquiz() {
    width = window.outerWidth
    if (width <= 1024) {alert('chỉ có thể sử dụng trên thiết bị máy tính , vui lòng thay đổi thiêt bị để thục hiện cuọc thi , Xin cảm ơn .')}
    else {
        open(URL='https://quiz-coronavirus-a113c.web.app')
    }
}

function thongtin() {
    document.getElementById('thongtin').style.display = 'block'
    document.getElementById('trieuchung').style.display = 'none'
    document.getElementById('phongngua').style.display = 'none'
}
function trieuchung() {
    document.getElementById('thongtin').style.display = 'none'
    document.getElementById('trieuchung').style.display = 'block'
    document.getElementById('phongngua').style.display = 'none'
}
function phongngua() {
    document.getElementById('thongtin').style.display = 'none'
    document.getElementById('trieuchung').style.display = 'none'
    document.getElementById('phongngua').style.display = 'block'
}

function look() {
    document.getElementById('bg-text2').remove()
    document.getElementById('chu_covid').remove()
    document.getElementById('map1').style.filter = 'none'
}

// document.getElementById('solg').textContent = localStorage.getItem('demnguoithi')
// let top1  = localStorage.getItem('top1').split(',')
// let top2  = localStorage.getItem('top2').split(',')
// let top3 = localStorage.getItem('top3').split(',')

// document.getElementById('top' + String(1) + '_name').textContent = top1[3]
// document.getElementById('top' + String(1) + '_score').textContent = 'score : '+ top1[0] + ' D'
// document.getElementById('top' + String(1) + '_time').textContent = 'time : ' + top1[1] + ' S'  

// document.getElementById('top' + String(2) + '_name').textContent = top2[3]
// document.getElementById('top' + String(2) + '_score').textContent = 'score : '+ top2[0] + ' D'
// document.getElementById('top' + String(2) + '_time').textContent = 'time : ' + top2[1] + ' S'  

// document.getElementById('top' + String(3) + '_name').textContent = top3[3]
// document.getElementById('top' + String(3) + '_score').textContent = 'score : '+ top3[0] + ' D'
// document.getElementById('top' + String(3) + '_time').textContent = 'time : ' + top3[1] + ' S'  

var myIndex = 0;
var continuerun = 0;

setInterval(function() {
    if (continuerun == 0) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
    }
},3000 )   // setTimeout(carousel, 4000); // Change image every 2 seconds

localStorage.setItem('lgshare',0)
// setTimeout(function () {
    document.getElementById('slgshare').textContent = localStorage.getItem('lgshare') +' ' + 'Share'
    document.getElementById('slgshare1').textContent = localStorage.getItem('lgshare') +' ' + 'Share'
    document.getElementById('slgshare2').textContent = localStorage.getItem('lgshare') +' ' + 'Share'
// },3000)
function share() {
    localStorage.setItem('lgshare',Number(localStorage.getItem('lgshare')) + 1);
    document.getElementsByClassName('slgshare').textContent = localStorage.getItem('lgshare') +' ' + 'Share'
}

var myIndex02 = 0;
setInterval(function() {
    var i;
    var x = document.getElementsByClassName("mySlides02");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex02++;
    if (myIndex02 > x.length) {myIndex02 = 1}    
    x[myIndex02-1].style.display = "block";  
},3000 ) 

var myIndex03 = 0;
setInterval(function() {
    var i;
    var x = document.getElementsByClassName("mySlides03");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex03++;
    if (myIndex03 > x.length) {myIndex03 = 1}    
    x[myIndex03-1].style.display = "block";  
},1000 ) 

var demnhapnhay = 0
setInterval(function() {
    if (demnhapnhay % 2 == 0) {
        document.getElementById('nhapnhay').style.display = 'none'
    } else {document.getElementById('nhapnhay').style.display = 'block'}
    demnhapnhay += 1
},1000)

// localStorage.setItem('dem_feedback',0)
function feedback () {
    width =  window.outerWidth
    if (width <= 739) {document.getElementById('feedback').remove()}
    let name = document.getElementById('feedback_name').value
    let email = document.getElementById('feedback_email').value
    let inform = document.getElementById('feedback_inform').value
    localStorage.setItem('feedback' + String(localStorage.getItem('dem_feedback')),[name,email,inform])
    localStorage.setItem('dem_feedback',Number(localStorage.getItem('dem_feedback')) + 1)
    document.getElementById('feedback_name').value = ''
    document.getElementById('feedback_email').value = ''
    document.getElementById('feedback_inform').value = ''
}




var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}





var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides12");
  var dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active";
}

// localStorage.removeItem('feedback0')
// localStorage.removeItem('feedback1')
// localStorage.removeItem('feedback2')
// localStorage.removeItem('feedback4')
// localStorage.removeItem('feedback5')
// localStorage.removeItem('feedback6')
// localStorage.removeItem('feedback7')
// localStorage.removeItem('feedback8')
// localStorage.removeItem('feedback9')
// localStorage.removeItem('feedback10')

//paste this code under the head tag or in a separate js file.
	// Wait for window load
$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});