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
    var galleryItemsTitle = document.querySelectorAll('.gallery-page-section .gallery-item .gallery-title');
    var galleryItemsbtn = document.querySelectorAll('.gallery-page-section .gallery-item .gallery-btn');
    var gaalerylist = document.querySelectorAll('.gallery-page-section .gallery-item .gaalery-list');
    var gaalerylistul = document.querySelectorAll('.gallery-page-section .gallery-item .gaalery-list ul');
    var gaalerydesc = document.querySelectorAll('.gaalery-desc');
    var gallerypargraphs = document.querySelector('.special-gl');
    var gallerypargraphP = document.querySelector('.gallery-pargraph p');
    var gallerypargraphSpans = document.querySelectorAll('.gallery-pargraph span');
    var gallerypargraphOl = document.querySelector('.gallery-pargraph ol');
    var gallerypargraphOlItem = document.querySelectorAll('.gallery-pargraph ol li');
    var gptrans = document.querySelector('.gp-trans');
    var gallitemDiv = document.querySelector('.gallery-page-section .gall-item div');
    var gallitemDivul = document.querySelector('.gallery-page-section .gall-item div ul');
    var gallitemDivListItems = document.querySelectorAll('.gallery-page-section .gall-item div ul li');

    var gallItem = document.querySelector('.gallery-page-section .gall-item');
    var gallItemPa = document.querySelector('.gallery-page-section .gall-item p');

    var spicialP = document.querySelector('.gallery-item-special p');


    var mobileGalleryTits = document.querySelectorAll(".description-item p ") ;
    var mobileBtnView = document.querySelectorAll(".see-item a");
    var readmorelistItems = document.querySelectorAll(".read-more-list li");
    var readmorelist = document.querySelectorAll(".read-more-header .read-more-list");
    var readmorepargraph = document.querySelectorAll(".read-more-pargraph");
    var mobilereadmorebtn = document.querySelectorAll(".read-more-btn");
    var titlelistMobile = document.querySelector(".title-list");
    var specialpargraph = document.querySelector(".special-pargraph");
    var specialpargraphP = document.querySelector(".special-pargraph p");
    var specialpargraphspan = document.querySelector(".special-pargraph span");
    var titlelist = document.querySelector(".title-list");
    var readmorlistItems = document.querySelectorAll(".read-more-list ul li");
    var sers = document.querySelector(".sers");
    var Specpargraphtitles = document.querySelectorAll(".Spec-pargraph-title");
    var hello = document.querySelector(".hello");
    var orderList = document.querySelector(".orderList");
    var orderListItem = document.querySelectorAll(".orderList li");

    var rewq = document.querySelector(".rewq");
    var retyt = document.querySelector(".retyt");
    var uuu = document.querySelector(".uuu");
    var ddd = document.querySelector(".ddd");
    var titleUrinary = document.querySelector(".title-Urinary");
    var mobilelist = document.querySelector('.list-container ul');
    if (!isEnglish) {
        // تغيير المحاذاة للغة العربية
        if (nav) nav.style.flexDirection = 'row-reverse';
        if (mainHeader) mainHeader.style.flexDirection = 'row-reverse';
        if (listHeader) listHeader.style.flexDirection = 'row-reverse';
        if (logo) logo.style.flexDirection = 'row-reverse';
        if (footerlist) footerlist.style.flexDirection = 'row-reverse';
        if (about) about.style.direction = 'rtl';
        if (counter) counter.style.flexDirection = 'row-reverse';
        if (gaalerylist[0]) gaalerylist[0].style.flexDirection = 'row-reverse';
        if (gaalerylist[1]) gaalerylist[1].style.flexDirection = 'row-reverse';

        if (gaalerylistul[0]) gaalerylistul[0].style.textAlign  = 'right';
        if (gaalerylistul[1]) gaalerylistul[0].style.direction  = 'rtl';

        if (gaalerylistul[0]) gaalerylistul[1].style.textAlign  = 'right';
        if (gaalerylistul[1]) gaalerylistul[1].style.direction  = 'rtl';

        if(gaalerydesc[0]) gaalerydesc[0].style.flexDirection='row-reverse';
        if(gaalerydesc[0]) gaalerydesc[0].style.textAlign='right';

        if(gaalerydesc[1]) gaalerydesc[1].style.flexDirection='row-reverse';
        if(gaalerydesc[1]) gaalerydesc[1].style.textAlign='right';

        if(gallerypargraphs) gallerypargraphs.style.textAlign='right ';
        if(gallerypargraphs) gallerypargraphs.style.direction='rtl';


        if(gallerypargraphOl) gallerypargraphOl.style.textAlign='right';
        if(gallerypargraphOl) gallerypargraphOl.style.direction='rtl';
        
        if(gptrans) gptrans.style.textAlign="right";

        if(gallitemDiv) gallitemDiv.style.flexDirection="row-reverse";
        if(gallitemDivul) gallitemDivul.style.direction="rtl";

        if(gallItemPa) gallItemPa.style.textAlign="right";

        if(spicialP) spicialP.style.textAlign="right";
        if(readmorelist[0]) readmorelist[0].style.textAlign="right";
        if(readmorelist[0]) readmorelist[0].style.direction="rtl";
        if(readmorelist[1]) readmorelist[1].style.textAlign="right";
        if(readmorelist[1]) readmorelist[1].style.direction="rtl";
        if(readmorepargraph[0]) readmorepargraph[0].style.direction="rtl";
        if(readmorepargraph[0]) readmorepargraph[0].style.textAlign="right";
        if(readmorepargraph[1]) readmorepargraph[1].style.direction="rtl";
        if(readmorepargraph[1]) readmorepargraph[1].style.textAlign="right";

        if(titlelistMobile) titlelistMobile.style.textAlign="right";
        if(specialpargraph) specialpargraph.style.textAlign="right"; 

        if(sers) sers.style.textAlign="right"; 
        if(Specpargraphtitles[0]) Specpargraphtitles[0].style.textAlign="right";
        if(Specpargraphtitles[1]) Specpargraphtitles[0].style.textAlign="right";
        if(hello) hello.style.textAlign="right";
        if(orderList) orderList.style.textAlign="right";
        if(orderList) orderList.style.direction="rtl";

        if(rewq) rewq.style.textAlign="right";
        if(retyt) retyt.style.textAlign="right";
        if(uuu) uuu.style.textAlign="right";
        if(ddd) ddd.style.textAlign="right";
        if(mobilelist) mobilelist.style.textAlign='right';
        



        



         
        


    } else {
        // إعادة المحاذاة للغة الإنجليزية
        if (nav) nav.style.flexDirection = 'row';
        if (mainHeader) mainHeader.style.flexDirection = 'row';
        if (listHeader) listHeader.style.flexDirection = 'row';
        if (logo) logo.style.flexDirection = 'row';
        if (footerlist) footerlist.style.flexDirection = 'row';
        if (about) about.style.direction = 'ltr';
        if (counter) counter.style.flexDirection = 'row';
        if (gaalerylist[0]) gaalerylist[0].style.flexDirection = 'row';
        if (gaalerylist[1]) gaalerylist[1].style.flexDirection = 'row';

        if (gaalerylistul[0]) gaalerylistul[0].style.textAlign  = 'left';
        if (gaalerylistul[1]) gaalerylistul[0].style.direction  = 'ltr';

        if (gaalerylistul[0]) gaalerylistul[1].style.textAlign  = 'left';
        if (gaalerylistul[1]) gaalerylistul[1].style.direction  = 'ltr';

        if(gaalerydesc[0]) gaalerydesc[0].style.flexDirection='row';
        if(gaalerydesc[0]) gaalerydesc[0].style.textAlign='left';

        if(gaalerydesc[1]) gaalerydesc[1].style.flexDirection='row';
        if(gaalerydesc[1]) gaalerydesc[1].style.textAlign='left';

        if(gallerypargraphs) gallerypargraphs.style.textAlign='left ';
        if(gallerypargraphs) gallerypargraphs.style.direction='ltr';

        if(gallerypargraphOl) gallerypargraphOl.style.textAlign='left';
        if(gallerypargraphOl) gallerypargraphOl.style.direction='ltr';

        if(gptrans) gptrans.style.textAlign="left";

        if(gallitemDiv) gallitemDiv.style.flexDirection="row";
        if(gallitemDivul) gallitemDivul.style.direction="ltr";

        if(gallItemPa) gallItemPa.style.textAlign="left";

        if(spicialP) spicialP.style.textAlign="left";
        if(readmorelist[0]) readmorelist[0].style.textAlign="left";
        if(readmorelist[0]) readmorelist[0].style.direction="ltr";
        if(readmorelist[1]) readmorelist[1].style.textAlign="left";
        if(readmorelist[1]) readmorelist[1].style.direction="ltr";
        if(readmorepargraph[0]) readmorepargraph[0].style.direction="ltr";
        if(readmorepargraph[0]) readmorepargraph[0].style.textAlign="left";
        if(readmorepargraph[1]) readmorepargraph[1].style.direction="ltr";
        if(readmorepargraph[1]) readmorepargraph[1].style.textAlign="left";
        if(specialpargraph) specialpargraph.style.textAlign="left";
        if(sers) sers.style.textAlign="left"; 
        if(Specpargraphtitles[0]) Specpargraphtitles[0].style.textAlign="left";
        if(Specpargraphtitles[1]) Specpargraphtitles[0].style.textAlign="left";
        if(hello) hello.style.textAlign="left";
        if(rewq) rewq.style.textAlign="left";
        if(retyt) retyt.style.textAlign="left";
        if(uuu) uuu.style.textAlign="left";
        if(ddd) ddd.style.textAlign="left";
        if(mobilelist) mobilelist.style.textAlign='left';












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
    document.querySelectorAll('.gallery-container .gallery-item a').forEach(function(a) {
        a.innerHTML = languageData.readMore;
     });
     ;
    //  document.querySelector('.copy-write span:nth-child(1)').innerHTML=languageData.copywrite;
    //  document.querySelector('.copy-write span:nth-child(2)').innerHTML=languageData.developedBy;
    galleryItemsTitle[0].innerHTML = languageData.firstTitle;
    galleryItemsTitle[1].innerHTML = languageData.secondTitle;
    galleryItemsTitle[2].innerHTML = languageData.thirdTitle;
    galleryItemsTitle[3].innerHTML = languageData.fourthTitle;
    galleryItemsTitle[4].innerHTML = languageData.fifthTitle;
    

    galleryItemsbtn[0].innerHTML = languageData.firstbtn;
    galleryItemsbtn[1].innerHTML = languageData.secondbtn;
    galleryItemsbtn[2].innerHTML = languageData.thirdbtn;
    galleryItemsbtn[3].innerHTML = languageData.fourthbtn;
    galleryItemsbtn[4].innerHTML = languageData.fifthbtn;

    document.querySelectorAll('.gallery-page-section .gallery-item .gaalery-list ul li')[0].innerHTML = languageData.firstitemlist;
    document.querySelectorAll('.gallery-page-section .gallery-item .gaalery-list ul li')[1].innerHTML = languageData.seconditemlist;
    document.querySelectorAll('.gallery-page-section .gallery-item .gaalery-list ul li')[2].innerHTML = languageData.thirditemlist;
    document.querySelectorAll('.gallery-page-section .gallery-item .gaalery-list ul li')[3].innerHTML = languageData.fourthitemlist;
    document.querySelectorAll('.gallery-page-section .gallery-item .gaalery-list ul li')[4].innerHTML = languageData.fifthitemlist;
    document.querySelectorAll('.gallery-page-section .gallery-item .gaalery-list ul li')[5].innerHTML = languageData.sixthitemlist;
    document.querySelectorAll('.gallery-page-section .gallery-item .gaalery-list ul li')[6].innerHTML = languageData.seventhitemlist;
    document.querySelectorAll('.gallery-page-section .gallery-item .gaalery-list ul li')[7].innerHTML = languageData.eighthitemlist;
    document.querySelectorAll('.gallery-page-section .gallery-item .gaalery-list ul li')[8].innerHTML = languageData.ninthitemlist;
    document.querySelectorAll('.gallery-page-section .gallery-item .gaalery-list ul li')[9].innerHTML = languageData.tenthitemlist;
    document.querySelectorAll('.gallery-page-section .gallery-item .gaalery-list ul li')[10].innerHTML = languageData.elevenitemlist;

    document.querySelectorAll('.gallery-page-section .gallery-item .gallery-pargraph')[0].innerHTML = languageData.firstParg;
    document.querySelectorAll('.gallery-page-section .gallery-item .gallery-pargraph')[1].innerHTML = languageData.secondParg;

    gaalerylistul[1].querySelector('h4').innerHTML=languageData.headeritemlist2;
    gaalerylistul[1].querySelectorAll('li')[0].innerHTML=languageData.firstitemlist2;
    gaalerylistul[1].querySelectorAll('li')[1].innerHTML=languageData.seconditemlistitemlist2;
    gaalerylistul[1].querySelectorAll('li')[2].innerHTML=languageData.thirditemlist2;
    gaalerylistul[1].querySelectorAll('li')[3].innerHTML=languageData.fourthitemlist2;
    gaalerylistul[1].querySelectorAll('li')[4].innerHTML=languageData.fifthitemlist2;
    gaalerylistul[1].querySelectorAll('li')[5].innerHTML=languageData.sixthitemlist2;
    gaalerylistul[1].querySelectorAll('li')[6].innerHTML=languageData.seventhitemlist2;
    gaalerylistul[1].querySelectorAll('li')[7].innerHTML=languageData.eightitemlist2;
    document.querySelectorAll('.Read-btn')[0].innerHTML=languageData.readBtn;
    document.querySelectorAll('.Read-btn')[1].innerHTML=languageData.readBtn;

    document.querySelector('.p-translate').innerHTML=languageData.pTrans; 
    document.querySelector('.gp-trans').innerHTML=languageData.gpTrans; 
    document.querySelectorAll('.Read-btn')[2].innerHTML=languageData.readBtn;
    

    document.querySelector('.parag-title-trans').innerHTML=languageData.pargtittr;
    document.querySelector('.pargraph-desc-transl').innerHTML=languageData.pargdesctr;
    document.querySelectorAll('.Read-btn')[3].innerHTML=languageData.readBtn;

    gallerypargraphSpans[0].innerHTML=languageData.span0;
    gallerypargraphSpans[1].innerHTML=languageData.span1;

    gallerypargraphP.innerHTML=languageData.par;

    gallerypargraphOlItem[0].innerHTML=languageData.oltrans0;
    gallerypargraphOlItem[1].innerHTML=languageData.oltrans1;
    document.querySelectorAll('.Read-btn')[4].innerHTML=languageData.readBtn;
    
    gallitemDivListItems[0].innerHTML=languageData.LastTrans0;
    gallitemDivListItems[1].innerHTML=languageData.LastTrans1;

    gallItemPa.innerHTML=languageData.gallItempTrans;
    spicialP.innerHTML=languageData.specialP;

    mobileGalleryTits[0].innerHTML=languageData.firstTitle;
    mobileGalleryTits[1].innerHTML=languageData.secondTitle;
    mobileGalleryTits[2].innerHTML=languageData.thirdTitle;
    mobileGalleryTits[3].innerHTML=languageData.fourthTitle;
    mobileGalleryTits[4].innerHTML=languageData.fifthTitle;

    mobileBtnView[0].innerHTML = languageData.firstbtn;
    mobileBtnView[1].innerHTML = languageData.secondbtn;
    mobileBtnView[2].innerHTML = languageData.thirdbtn;
    mobileBtnView[3].innerHTML = languageData.fourthbtn;
    mobileBtnView[4].innerHTML = languageData.fifthbtn;

    readmorelistItems[0].innerHTML = languageData.firstitemlist;
    readmorelistItems[1].innerHTML = languageData.seconditemlist;
    readmorelistItems[2].innerHTML = languageData.thirditemlist;
    readmorelistItems[3].innerHTML = languageData.fourthitemlist;
    readmorelistItems[4].innerHTML = languageData.fifthitemlist;
    readmorelistItems[5].innerHTML = languageData.sixthitemlist;
    readmorelistItems[6].innerHTML = languageData.seventhitemlist;
    readmorelistItems[7].innerHTML = languageData.eighthitemlist;
    readmorelistItems[8].innerHTML = languageData.ninthitemlist;
    readmorelistItems[9].innerHTML = languageData.tenthitemlist;
    readmorelistItems[10].innerHTML = languageData.elevenitemlist;

    readmorepargraph[0].innerHTML=languageData.firstParg;
    readmorepargraph[1].innerHTML=languageData.secondParg;

    mobilereadmorebtn[0].innerHTML=languageData.readBtn;
    mobilereadmorebtn[1].innerHTML=languageData.readBtn;
    mobilereadmorebtn[2].innerHTML=languageData.readBtn;
    mobilereadmorebtn[3].innerHTML=languageData.readBtn;
    mobilereadmorebtn[4].innerHTML=languageData.readBtn;

    titlelist.innerHTML=languageData.headeritemlist2;

    readmorlistItems[0].innerHTML=languageData.firstitemlist2;
    readmorlistItems[1].innerHTML=languageData.seconditemlistitemlist2;
    readmorlistItems[2].innerHTML=languageData.thirditemlist2;
    readmorlistItems[3].innerHTML=languageData.fourthitemlist2;
    readmorlistItems[4].innerHTML=languageData.fifthitemlist2;
    readmorlistItems[5].innerHTML=languageData.sixthitemlist2;
    readmorlistItems[6].innerHTML=languageData.seventhitemlist2;
    document.querySelector(".ssparg").innerHTML=languageData.LastTrans0;
    document.querySelector(".special-pargraph-child").innerHTML=languageData.LastTrans1;
    sers.innerHTML=languageData.pargdesctr;

    Specpargraphtitles[0].innerHTML=languageData.span0;
    Specpargraphtitles[1].innerHTML=languageData.span1;

    hello.innerHTML=languageData.par;

    orderListItem[0].innerHTML=languageData.oltrans0;
    orderListItem[1].innerHTML=languageData.oltrans1;

    rewq.innerHTML=languageData.pTrans;

    retyt.innerHTML=languageData.secondParg;
    uuu.innerHTML=languageData.specialP;
    ddd.innerHTML=languageData.gallItempTrans;
    titleUrinary.innerHTML=languageData.pargtittr;



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




