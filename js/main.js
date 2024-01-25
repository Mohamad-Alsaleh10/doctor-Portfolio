let currentLanguage = localStorage.getItem('language') || 'en';

const languageButton = document.getElementById('languageButton');
languageButton.addEventListener('click', toggleLanguage);

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLanguage);
    updateInterface();
}

function updateInterface() {
    fetch(`https://back.drhoranclinic.com/api/services?lang=${currentLanguage}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayData(data.data);
            } else {
                console.error('Failed to fetch services data');
            }
        })
        .catch(error => console.error('Error fetching services data:', error));
}

function displayData(data) {
    const servicesContainer = document.getElementById('servicesContainer');
    servicesContainer.innerHTML = '';

    data.forEach(service => {
        const serviceName = service.name[currentLanguage];
        const serviceImage = service.image;
        const explanations = service.explanations.map(explanation => explanation.explanation[currentLanguage]);

        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';

        const serviceOverlay = document.createElement('div');
        serviceOverlay.className = 'service-overlay';
        serviceOverlay.innerHTML = '<i class="fa fa-arrow-right" aria-hidden="true"></i>';

        const ul = document.createElement('ul');
        explanations.forEach(explanation => {
            const li = document.createElement('li');
            li.textContent = explanation;
            ul.appendChild(li);
        });

        serviceOverlay.appendChild(ul);
        serviceCard.appendChild(serviceOverlay);

        const serviceCardDesc = document.createElement('div');
        serviceCardDesc.className = 'sevice-card-desc';

        const img = document.createElement('img');
        img.src = serviceImage;
        img.alt = serviceName;

        const span = document.createElement('span');
        span.textContent = serviceName;

        serviceCardDesc.appendChild(img);
        serviceCardDesc.appendChild(span);
        serviceCard.appendChild(serviceCardDesc);

        servicesContainer.appendChild(serviceCard);
    });
}

window.addEventListener('load', updateInterface);




