

// start translate header 
var languageData;
var isEnglish = true; // تحديد اللغة الافتراضية
let selectedLanguage = localStorage.getItem('selectedLanguage') || 'EN';
isEnglish = selectedLanguage === 'EN'; // Update isEnglish based on selectedLanguage

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
    var blogcontainer = document.querySelector('.blog-container');
    var blogcontentbtn = document.querySelector('.blog-content button');
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
        if (blogcontainer) blogcontainer.style.textAlign = 'right';
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
        if (blogcontainer) blogcontainer.style.textAlign = 'left';
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





// Event listener for changing the language
document.addEventListener('DOMContentLoaded', function () {
    // Define the API endpoint based on the selected language
    const apiUrl = selectedLanguage === 'AR' ? 'https://back.drhoranclinic.com/api/posts/ar' : 'https://back.drhoranclinic.com/api/posts';

    // Fetch data based on the selected language
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayBlogContent(data.data);
            } else {
                console.error('Failed to fetch posts data');
            }
        })
        .catch(error => console.error('Error fetching posts data:', error));

    document.querySelector('.lang').addEventListener('click', function () {
        // Toggle between 'AR' and 'EN'
        selectedLanguage = selectedLanguage === 'AR' ? 'EN' : 'AR';
        isEnglish = selectedLanguage === 'EN'; // Update isEnglish when language is toggled

        // حفظ قيمة اللغة المحددة في Local Storage
        localStorage.setItem('selectedLanguage', selectedLanguage);

        // Define the API endpoint based on the selected language
        const apiUrl = selectedLanguage === 'AR' ? 'https://back.drhoranclinic.com/api/posts/ar' : 'https://back.drhoranclinic.com/api/posts';

        // Fetch data based on the selected language
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    displayBlogContent(data.data);
                } else {
                    console.error('Failed to fetch posts data');
                }
            })
            .catch(error => console.error('Error fetching posts data:', error));
    });
});

// Event listener for changing the language when clicking on the language button

function displayBlogContent(posts) {
    const blogContainer = document.querySelector('.blog-container');

    // Remove existing blog items
    blogContainer.innerHTML = '';

    posts.forEach(post => {
        const blogItem = document.createElement('div');
        blogItem.className = 'blog-item';

        const imgBlogContainer = document.createElement('div');
        imgBlogContainer.className = 'img-blog-container';

        const img = document.createElement('img');
        img.src = post.image;
        img.alt = post.title;

        imgBlogContainer.appendChild(img);

        const blogContent = document.createElement('div');
        blogContent.className = 'blog-content';

        const blogContentTitle = document.createElement('div');
        blogContentTitle.className = 'blog-content-title';
        blogContentTitle.textContent = post.title;

        const previewParagraphs = document.createElement('p');
        const previewText = extractPreviewText(post.body, 3); // Extract first 3 paragraphs
        previewParagraphs.innerHTML = previewText;

        const readMoreButton = document.createElement('button');
        readMoreButton.textContent = isEnglish ? 'Read More' : 'المزيد';


        const lessButton = document.createElement('button');
        lessButton.textContent = isEnglish ? 'Read Less' : 'عرض أقل';
        lessButton.style.display = 'none'; // Hide the "Less" button initially


        readMoreButton.addEventListener('click', () => {
            // Replace the preview with the full content
            previewParagraphs.innerHTML = post.body;
            readMoreButton.style.display = 'none'; // Hide "Read More" button after clicking
            lessButton.style.display = 'block'; // Show "Less" button after clicking "Read More"
        });

        lessButton.addEventListener('click', () => {
            // Replace the full content with the preview
            previewParagraphs.innerHTML = previewText;
            lessButton.style.display = 'none'; // Hide "Less" button after clicking
            readMoreButton.style.display = 'block'; // Show "Read More" button after clicking "Less"
        });



        blogContent.appendChild(blogContentTitle);
        blogContent.appendChild(previewParagraphs);
        blogContent.appendChild(readMoreButton);
        blogContent.appendChild(lessButton); // Append the "Less" button to the blog content


        blogItem.appendChild(imgBlogContainer);
        blogItem.appendChild(blogContent);

        blogContainer.appendChild(blogItem);
    });
}

function extractPreviewText(body, paragraphCount) {
    const paragraphs = body.split('</p>').filter(Boolean);
    const previewParagraphs = paragraphs.slice(0, paragraphCount).join('</p>');
    return previewParagraphs;
}
