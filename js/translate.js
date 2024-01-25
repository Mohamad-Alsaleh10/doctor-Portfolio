// start translate header 
var languageData;
var isEnglish = true; // تحديد اللغة الافتراضية

function loadLanguageData(language) {
    var langFile = language === 'en' ? 'english.json' : 'arabic.json';
    return fetch(langFile)
        .then(response => response.json())
        .then(data => {
            languageData = data;
            updateUI();
        });
}

function updateUI() {
    var nav = document.querySelector('header .nav');
    var mainHeader = document.querySelector('.main-header');
    var listHeader = document.querySelector('.list-header');
    var  logo = document.querySelector('.main-header .logo');
    var footerlist = document.querySelector('footer ul');
    var about = document.querySelector('.about-main ul');
    var counter = document.querySelector('.counter');
    var mobilelist = document.querySelector('.list-container ul');
    var appointmentform = document.querySelector('#form-container #appointment-form');
    var appointmentformLabels = document.querySelectorAll('#form-container #appointment-form label');

    if (!isEnglish) {
        // تغيير المحاذاة للغة العربية
        if (nav) nav.style.flexDirection = 'row-reverse';
        if (mainHeader) mainHeader.style.flexDirection = 'row-reverse';
        if (listHeader) listHeader.style.flexDirection = 'row-reverse';
        if (logo) logo.style.flexDirection = 'row-reverse';
        if (footerlist) footerlist.style.flexDirection = 'row-reverse';
        if (about) about.style.direction = 'rtl';
        if (counter) counter.style.flexDirection = 'row-reverse';
        if(mobilelist) mobilelist.style.textAlign='right';
        if(appointmentform) appointmentform.style.textAlign='right';
        if(appointmentform) appointmentform.style.direction='rtl';

        // for(i=0 ; i<serviceUl.length ; i++){
        //     serviceUl[i].style.direction='rtl';
        // };


    } else {
        // إعادة المحاذاة للغة الإنجليزية
        if (nav) nav.style.flexDirection = 'row';
        if (mainHeader) mainHeader.style.flexDirection = 'row';
        if (listHeader) listHeader.style.flexDirection = 'row';
        if (logo) logo.style.flexDirection = 'row';
        if (footerlist) footerlist.style.flexDirection = 'row';
        if (about) about.style.direction = 'ltr';
        if (counter) counter.style.flexDirection = 'row';
        if(mobilelist) mobilelist.style.textAlign='left';
        if(appointmentform) appointmentform.style.textAlign='left';
        if(appointmentform) appointmentform.style.direction='ltr';
        
        // for(i=0 ; i<serviceUl.length ; i++){
        //     serviceUl[i].style.direction='ltr';
        // };

         





    }

    document.querySelector('.email span').innerHTML = languageData.email;
    // document.querySelector('.phone span').innerHTML = languageData.phone;
    document.querySelector('.nav-item:nth-child(2) .email span').innerHTML = languageData.address;
    document.querySelectorAll('.list-header li a')[0].innerHTML = languageData.home;
    document.querySelectorAll('.list-header li a')[1].innerHTML = languageData.services;
    document.querySelectorAll('.list-header li a')[2].innerHTML = languageData.gallery;
    document.querySelectorAll('.list-header li a')[3].innerHTML = languageData.blog;
    document.querySelectorAll('footer ul li a')[0].innerHTML=languageData.home;
    document.querySelectorAll('footer ul li a')[1].innerHTML=languageData.services;
    document.querySelectorAll('footer ul li a')[2].innerHTML=languageData.gallery;
    document.querySelectorAll('footer ul li a')[3].innerHTML = languageData.blog;
    document.querySelectorAll('.list-container ul li a')[0].innerHTML=languageData.home;
    document.querySelectorAll('.list-container ul li a')[1].innerHTML=languageData.services;
    document.querySelectorAll('.list-container ul li a')[2].innerHTML=languageData.gallery;
    document.querySelectorAll('.list-container ul li a')[3].innerHTML = languageData.blog;
    document.querySelector('.subscription span').innerHTML = languageData.subscribe;
    document.querySelector('.subscribe-btn').innerHTML=languageData.subscribeBtn;
    document.querySelector('.name-main').innerHTML=languageData.namemain;
    document.querySelector('main .appointment-pack .clinic-main').innerHTML=languageData.clinicmain;
    document.querySelector('main .appointment-pack .book-btn-main').innerHTML=languageData.bookbtnmain;
    document.querySelectorAll('.title-sec')[0].innerHTML=languageData.about;
    document.querySelectorAll('.title-sec')[1].innerHTML=languageData.services;
    document.querySelectorAll('.title-sec')[2].innerHTML=languageData.galleryTitle;
    document.querySelectorAll('.title-sec')[3].innerHTML=languageData.testimonials;
    document.querySelectorAll('.about-main ul li')[0].innerHTML=languageData.itemserv0;
    document.querySelectorAll('.about-main ul li')[1].innerHTML=languageData.itemserv1;
    document.querySelectorAll('.about-main ul li')[2].innerHTML=languageData.itemserv2;
    document.querySelectorAll('.about-main ul li')[3].innerHTML=languageData.itemserv3;
    document.querySelector('.services-main p').innerHTML=languageData.serviceMain;
    document.querySelectorAll('.gallery-container .gallery-item a').forEach(function(a) {
        a.innerHTML = languageData.readMore;
     });
     document.querySelector('.gallery-main .gallery-btn').innerHTML=languageData.galleryBTN;
     document.querySelectorAll('.counter-item span:nth-child(2)')[0].innerHTML=languageData.years;
     document.querySelectorAll('.counter-item span:nth-child(2)')[1].innerHTML=languageData.operates;
     document.querySelectorAll('.counter-item span:nth-child(2)')[2].innerHTML=languageData.Patients
     ;
     document.querySelector('.review-btn').innerHTML=languageData.ReviewBtn;
     appointmentformLabels[0].innerHTML=languageData.Yourname;
     appointmentformLabels[1].innerHTML=languageData.Yourmail;
     appointmentformLabels[2].innerHTML=languageData.Yourphone;
     appointmentformLabels[3].innerHTML=languageData.Yourdate;
     appointmentformLabels[4].innerHTML=languageData.Yourmessage;
     document.querySelector('#submitForm').innerHTML=languageData.subbtn;
     document.querySelector('#cancelForm').innerHTML=languageData.cancelbtn;




}

function changeLanguage() {
    if (isEnglish) {
        loadLanguageData('ar');
        isEnglish = false; 
        document.querySelector('.lang #langText').innerHTML="AR";// تحديث قيمة isEnglish
        localStorage.setItem('language', 'ar');

    } else {
        loadLanguageData('en');
        isEnglish = true; // تحديث قيمة isEnglish
        document.querySelector('.lang #langText').innerHTML="EN";
        localStorage.setItem('language', 'en');

    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Check for the selected language in local storage
    var selectedLanguage = localStorage.getItem('language');

    // If a language is stored, load it; otherwise, use the default language (English)
    if (selectedLanguage) {
        loadLanguageData(selectedLanguage);
        // Update isEnglish accordingly
        isEnglish = selectedLanguage === 'en';
        document.querySelector('.lang #langText').innerHTML = isEnglish ? "EN" : "AR";
    } else {
        loadLanguageData('en'); // Default language is English
    }

    // Rest of your code...
});


// end translate header 



// start open list when click 




document.addEventListener('DOMContentLoaded', function () {
    var barsIcon = document.querySelector('.fa-bars');
    var timesIcon = document.querySelector('.fa-times');
    var listContainer = document.querySelector('.list-container');
    barsIcon.addEventListener('click', function () {
        listContainer.style.opacity = '1';
        listContainer.style.transform = 'translateX(0)';

    });

    timesIcon.addEventListener('click', function () {
        listContainer.style.opacity = '0';
        listContainer.style.transform = 'translateX(173px)';


    });
});


// end open list when click 



// handle navbar links to add underline when click on it 
function handleClick(event) {
    // Remove 'active' class from all elements
    let elements = document.querySelectorAll('.list-header a');
    elements.forEach(function (element) {
        element.classList.remove('active');
    });

    // Add 'active' class to the clicked element
    event.target.classList.add('active');

    // Store the clicked item in local storage
    localStorage.setItem('activeItem', event.target.getAttribute('href'));
}

// Check for an active item in local storage
document.addEventListener('DOMContentLoaded', function() {
    let activeItem = localStorage.getItem('activeItem');
    if (activeItem) {
        let elements = document.querySelectorAll('.list-header a');
        elements.forEach(function (element) {
            if (element.getAttribute('href') === activeItem) {
                element.classList.add('active');
            }
        });
    }
});
