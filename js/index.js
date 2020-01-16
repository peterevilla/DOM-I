const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navigation = document.querySelectorAll('a');



// nav bar 
navigation[0].textContent = siteContent["nav"]["nav-item-1"]
navigation[1].textContent = siteContent["nav"]["nav-item-2"]
navigation[2].textContent = siteContent["nav"]["nav-item-3"]
navigation[3].textContent = siteContent["nav"]["nav-item-4"]
navigation[4].textContent = siteContent["nav"]["nav-item-5"]
navigation[5].textContent = siteContent["nav"]["nav-item-6"]

navigation.forEach(element => { element.style.color = 'green'})

let newElement1 = document.createElement('a');

newElement1.textContent = 'Resume';

const parentElement = document.querySelector('nav');



parentElement.append(newElement1);


let newElement2 = document.createElement('a');
newElement2.textContent = 'Social';

parentElement.prepend(newElement2);

newElement1.style.color = 'green';
newElement2.style.color = 'green';
newElement1.style.textDecoration = 'none';
newElement2.style.textDecoration = 'none';





// image and title
let image = document.getElementById("cta-img");
image.setAttribute('src', siteContent['cta']['img-src'])


let title = document.querySelector('h1')
title.textContent = siteContent["cta"]["h1"];

let box = document.querySelector('.cta');

box.style.display = 'flex';

//button
let buttonDom = document.querySelector('button');

buttonDom.textContent = siteContent['cta']['button'];


//top content

let content = document.querySelector('.top-content')

content.style.display = 'flex';



let content1 = document.querySelectorAll('h4')

content1[0].textContent = siteContent['main-content']['features-h4'];
content1[1].textContent = siteContent['main-content']['about-h4'];


let content2 = document.querySelectorAll('p')

content2[0].textContent = siteContent['main-content']['features-content']
content2[1].textContent = siteContent['main-content']['about-content']

//image2

let image2 = document.getElementById("middle-img");
image2.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//botton content

let content3 = document.querySelector('.bottom-content')

content3.style.display = 'flex';

content1[2].textContent = siteContent['main-content']['services-h4'];
content1[3].textContent = siteContent['main-content']['product-h4'];
content1[4].textContent = siteContent['main-content']['vision-h4'];

content2[2].textContent = siteContent['main-content']['services-content']
content2[3].textContent = siteContent['main-content']['product-content']
content2[4].textContent = siteContent['main-content']['vision-content']


//contact 

content1[5].textContent = siteContent['contact']['contact-h4'];
content2[5].textContent = siteContent['contact']['address']
content2[6].textContent = siteContent['contact']['phone']
content2[7].textContent = siteContent['contact']['email']


//footer 

content2[8].textContent = siteContent['footer']['copyright']

































