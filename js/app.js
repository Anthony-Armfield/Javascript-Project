
/*-- Summary --*/
var summary = document.getElementById('summary');
summary.setAttribute('style', 'background-image: url("'+resumeData.summary.background+'")');

var profile = document.getElementById('profile');
profile.setAttribute('src', resumeData.summary.profile);

var summaryName = document.getElementById('name');
var summaryNameText = document.createTextNode(resumeData.summary.name);
summaryName.appendChild(summaryNameText);

var summaryTitle = document.getElementById('title');
var summaryTitleText = document.createTextNode(resumeData.summary.title);
summaryTitle.appendChild(summaryTitleText);

var summaryLocation = document.getElementById('location');
var summaryLocationText = document.createTextNode(resumeData.summary.location);
summaryLocation.appendChild(summaryLocationText);

var summaryPhone = document.getElementById('phone');
var summaryPhoneLink = document.createElement('a');
summaryPhoneLink.setAttribute('href', 'tel:1-' + resumeData.summary.phone);
summaryPhoneLink.appendChild(document.createTextNode(resumeData.summary.phone));
summaryPhone.appendChild(summaryPhoneLink);

var summaryEmail = document.getElementById('email');
var summaryEmailLink = document.createElement('a');
summaryEmailLink.setAttribute('href', 'mailto:' + resumeData.summary.email);
summaryEmailLink.appendChild(document.createTextNode(resumeData.summary.email));
summaryEmail.appendChild(summaryEmailLink);
/*-- /Summary --*/