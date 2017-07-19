
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
var summaryPhoneText = document.createTextNode(resumeData.summary.phone);
summaryPhone.appendChild(summaryPhoneText);

var summaryEmail = document.getElementById('email');
var summaryEmailText = document.createTextNode(resumeData.summary.email);
summaryEmail.appendChild(summaryEmailText);
/*-- /Summary --*/

/*-- Skills --*/
var skillsList = document.getElementById('skills-list');

var skillOne = document.createElement('li');
var skillOneText = document.createTextNode(resumeData.skills[0]);
skillOne.appendChild(skillOneText);
skillsList.appendChild(skillOne);

var skillTwo = document.createElement('li');
var skillTwoText = document.createTextNode(resumeData.skills[1]);
skillTwo.appendChild(skillTwoText);
skillsList.appendChild(skillTwo);

var skillThree = document.createElement('li');
var skillThreeText = document.createTextNode(resumeData.skills[2]);
skillThree.appendChild(skillThreeText);
skillsList.appendChild(skillThree);

var brElemOne = document.createElement('br');
skillsList.appendChild(brElemOne);

var skillFour = document.createElement('li');
var skillFourText = document.createTextNode(resumeData.skills[3]);
skillFour.appendChild(skillFourText);
skillsList.appendChild(skillFour);

var skillFive = document.createElement('li');
var skillFiveText = document.createTextNode(resumeData.skills[4]);
skillFive.appendChild(skillFiveText);
skillsList.appendChild(skillFive);

var skillSix = document.createElement('li');
var skillSixText = document.createTextNode(resumeData.skills[5]);
skillSix.appendChild(skillSixText);
skillsList.appendChild(skillSix);

var brElemTwo = document.createElement('br');
skillsList.appendChild(brElemTwo);

var skillSeven = document.createElement('li');
var skillSevenText = document.createTextNode(resumeData.skills[6]);
skillSeven.appendChild(skillSevenText);
skillsList.appendChild(skillSeven);

var skillEight = document.createElement('li');
var skillEightText = document.createTextNode(resumeData.skills[7]);
skillEight.appendChild(skillEightText);
skillsList.appendChild(skillEight);

var skillNine = document.createElement('li');
var skillNineText = document.createTextNode(resumeData.skills[8]);
skillNine.appendChild(skillNineText);
skillsList.appendChild(skillNine);
/*-- /Skills --*/

/*-- Experience --*/
var experience = document.getElementById('experience');

var entryOne = document.createElement('div');
entryOne.className = "entryOne";

var entryOneTitle = '<h1>'+resumeData.experience[0].title+'</h1>';
var entryOneOrganization = '<h2>'+resumeData.experience[0].organization+'</h2>';
var entryOneYears = '<h1 class="text-right"><small>'+resumeData.experience[0].startYear+' - '+resumeData.experience[0].endYear+'</small></h1>';
var entryOneDescriptionOne = '<li>'+resumeData.experience[0].descriptions[0]+'</li>';
var entryOneDescriptionTwo = '<li>'+resumeData.experience[0].descriptions[1]+'</li>';

var entryOneDescriptions = '<ul>'+entryOneDescriptionOne+entryOneDescriptionTwo+'</ul>';

var entryOneHTML = 
	'<div class="entry">'+
	'<div class="row">'+
		'<div class="col-md-9">'+entryOneTitle+entryOneOrganization+'</div>'+
		'<div class="col-md-3">'+entryOneYears+'</div>'+
	'</div>'+
	'<div class="row">'+entryOneDescriptions+'<hr /></div>'+
	'</div>'+
	'<br />';

entryOne.innerHTML = entryOneHTML;
experience.appendChild(entryOne);

var entryTwo = document.createElement('div');
entryTwo.className = "entryTwo";

var entryTwoTitle = '<h1>'+resumeData.experience[1].title+'</h1>';
var entryTwoOrganization = '<h2>'+resumeData.experience[1].organization+'</h2>';
var entryTwoYears = '<h1 class="text-right"><small>'+resumeData.experience[1].startYear+' - '+resumeData.experience[1].endYear+'</small></h1>';
var entryTwoDescriptionOne = '<li>'+resumeData.experience[1].descriptions[0]+'</li>';
var entryTwoDescriptionTwo = '<li>'+resumeData.experience[1].descriptions[1]+'</li>';
var entryTwoDescriptionThree = '<li>'+resumeData.experience[1].descriptions[2]+'</li>';
var entryTwoDescriptionFour = '<li>'+resumeData.experience[1].descriptions[3]+'</li>';

var entryTwoDescriptions = '<ul>'+entryTwoDescriptionOne+entryTwoDescriptionTwo+entryTwoDescriptionThree+entryTwoDescriptionFour+'</ul>';

var entryTwoHTML = 
	'<div class="entry">'+
	'<div class="row">'+
		'<div class="col-md-9">'+entryTwoTitle+entryTwoOrganization+'</div>'+
		'<div class="col-md-3">'+entryTwoYears+'</div>'+
	'</div>'+
	'<div class="row">'+entryTwoDescriptions+'<hr /></div>'+
	'</div>'+
	'<br />';

entryTwo.innerHTML = entryTwoHTML;
experience.appendChild(entryTwo);

var entryThree = document.createElement('div');
entryThree.className = "entryThree";

var entryThreeTitle = '<h1>'+resumeData.experience[2].title+'</h1>';
var entryThreeOrganization = '<h2>'+resumeData.experience[2].organization+'</h2>';
var entryThreeYears = '<h1 class="text-right"><small>'+resumeData.experience[2].startYear+' - '+resumeData.experience[2].endYear+'</small></h1>';
var entryThreeDescriptionOne = '<li>'+resumeData.experience[2].descriptions[0]+'</li>';
var entryThreeDescriptionTwo = '<li>'+resumeData.experience[2].descriptions[1]+'</li>';
var entryThreeDescriptionThree = '<li>'+resumeData.experience[2].descriptions[2]+'</li>';
var entryThreeDescriptionFour = '<li>'+resumeData.experience[2].descriptions[3]+'</li>';

var entryThreeDescriptions = '<ul>'+entryThreeDescriptionOne+entryThreeDescriptionTwo+entryThreeDescriptionThree+entryThreeDescriptionFour+'</ul>';

var entryThreeHTML = 
	'<div class="entry">'+
	'<div class="row">'+
		'<div class="col-md-9">'+entryThreeTitle+entryThreeOrganization+'</div>'+
		'<div class="col-md-3">'+entryThreeYears+'</div>'+
	'</div>'+
	'<div class="row">'+entryThreeDescriptions+'<hr /></div>'+
	'</div>'+
	'<br />';

entryThree.innerHTML = entryThreeHTML;
experience.appendChild(entryThree);

var entryFour = document.createElement('div');
entryFour.className = "entryFour";

var entryFourTitle = '<h1>'+resumeData.experience[3].title+'</h1>';
var entryFourOrganization = '<h2>'+resumeData.experience[3].organization+'</h2>';
var entryFourYears = '<h1 class="text-right"><small>'+resumeData.experience[3].startYear+' - '+resumeData.experience[3].endYear+'</small></h1>';
var entryFourDescriptionOne = '<li>'+resumeData.experience[3].descriptions[0]+'</li>';
var entryFourDescriptionTwo = '<li>'+resumeData.experience[3].descriptions[1]+'</li>';
var entryFourDescriptionThree = '<li>'+resumeData.experience[3].descriptions[2]+'</li>';

var entryFourDescriptions = '<ul>'+entryFourDescriptionOne+entryFourDescriptionTwo+entryFourDescriptionThree+'</ul>';

var entryFourHTML = 
	'<div class="entry">'+
	'<div class="row">'+
		'<div class="col-md-9">'+entryFourTitle+entryFourOrganization+'</div>'+
		'<div class="col-md-3">'+entryFourYears+'</div>'+
	'</div>'+
	'<div class="row">'+entryFourDescriptions+'<hr /></div>'+
	'</div>'+
	'<br />';

entryFour.innerHTML = entryFourHTML;
experience.appendChild(entryFour);

var entryFive = document.createElement('div');
entryFive.className = "entryFive";

var entryFiveTitle = '<h1>'+resumeData.experience[4].title+'</h1>';
var entryFiveOrganization = '<h2>'+resumeData.experience[4].organization+'</h2>';
var entryFiveYears = '<h1 class="text-right"><small>'+resumeData.experience[4].startYear+' - '+resumeData.experience[4].endYear+'</small></h1>';
var entryFiveDescriptionOne = '<li>'+resumeData.experience[4].descriptions[0]+'</li>';
var entryFiveDescriptionTwo = '<li>'+resumeData.experience[4].descriptions[1]+'</li>';
var entryFiveDescriptionThree = '<li>'+resumeData.experience[4].descriptions[2]+'</li>';
var entryFiveDescriptionFour = '<li>'+resumeData.experience[4].descriptions[3]+'</li>';
var entryFiveDescriptionFive = '<li>'+resumeData.experience[4].descriptions[4]+'</li>';
var entryFiveDescriptionSix = '<li>'+resumeData.experience[4].descriptions[5]+'</li>';
var entryFiveDescriptionSeven = '<li>'+resumeData.experience[4].descriptions[6]+'</li>';
var entryFiveDescriptionEight = '<li>'+resumeData.experience[4].descriptions[7]+'</li>';

var entryFiveDescriptions = '<ul>'+entryFiveDescriptionOne+entryFiveDescriptionTwo+entryFiveDescriptionThree+entryFiveDescriptionFour+entryFiveDescriptionFive+entryFiveDescriptionSix+entryFiveDescriptionSeven+entryFiveDescriptionEight+'</ul>';

var entryFiveHTML = 
	'<div class="entry">'+
		'<div class="row">'+
			'<div class="col-md-9">'+entryFiveTitle+entryFiveOrganization+'</div>'+
			'<div class="col-md-3">'+entryFiveYears+'</div>'+
		'</div>'+
		'<div class="row">'+entryFiveDescriptions+'<hr /></div>'+
	'</div>'+
	'<br />';

entryFive.innerHTML = entryFiveHTML;
experience.appendChild(entryFive);

var entrySix = document.createElement('div');
entrySix.className = "entrySix";

var entrySixTitle = '<h1>'+resumeData.experience[5].title+'</h1>';
var entrySixOrganization = '<h2>'+resumeData.experience[5].organization+'</h2>';
var entrySixYears = '<h1 class="text-right"><small>'+resumeData.experience[5].startYear+' - '+resumeData.experience[5].endYear+'</small></h1>';
var entrySixDescriptionOne = '<li>'+resumeData.experience[5].descriptions[0]+'</li>';
var entrySixDescriptionTwo = '<li>'+resumeData.experience[5].descriptions[1]+'</li>';
var entrySixDescriptionThree = '<li>'+resumeData.experience[5].descriptions[2]+'</li>';
var entrySixDescriptionFour = '<li>'+resumeData.experience[5].descriptions[3]+'</li>';
var entrySixDescriptionFive = '<li>'+resumeData.experience[5].descriptions[4]+'</li>';
var entrySixDescriptionSix = '<li>'+resumeData.experience[5].descriptions[5]+'</li>';
var entrySixDescriptionSeven = '<li>'+resumeData.experience[5].descriptions[6]+'</li>';
var entrySixDescriptionEight = '<li>'+resumeData.experience[5].descriptions[7]+'</li>';
var entrySixDescriptionNine = '<li>'+resumeData.experience[5].descriptions[8]+'</li>';

var entrySixDescriptions = '<ul>'+entrySixDescriptionOne+entrySixDescriptionTwo+entrySixDescriptionThree+entrySixDescriptionFour+entrySixDescriptionFive+entrySixDescriptionSix+entrySixDescriptionSeven+entrySixDescriptionEight+entrySixDescriptionNine+'</ul>';

var entrySixHTML = 
	'<div class="entry">'+
	'<div class="row">'+
		'<div class="col-md-9">'+entrySixTitle+entrySixOrganization+'</div>'+
		'<div class="col-md-3">'+entrySixYears+'</div>'+
	'</div>'+
	'<div class="row">'+entrySixDescriptions+'<hr /></div>'+
	'</div>'+
	'<br />';

entrySix.innerHTML = entrySixHTML;
experience.appendChild(entrySix);

/*-- /Experience --*/

/*-- Education --*/
var education = document.getElementById('education');

var entryEight = document.createElement('div');
entryEight.className = "entryEight";

var entryEightTitle = '<h1>'+resumeData.education[0].title+'</h1>';
var entryEightOrganization = '<h2>'+resumeData.education[0].organization+'</h2>';
var entryEightYears = '<h1 class="text-right"><small>'+resumeData.education[0].startYear+' - '+resumeData.education[0].endYear+'</small></h1>';
var entryEightDescriptionOne = '<li>'+resumeData.education[0].descriptions[0]+'</li>';
var entryEightDescriptionTwo = '<li>'+resumeData.education[0].descriptions[1]+'</li>';
var entryEightDescriptionThree = '<li>'+resumeData.education[0].descriptions[2]+'</li>';

var entryEightDescriptions = '<ul>'+entryEightDescriptionOne+entryEightDescriptionTwo+entryEightDescriptionThree+'</ul>';

var entryEightHTML = 
	'<div class="entry">'+
	'<div class="row">'+
		'<div class="col-md-9">'+entryEightTitle+entryEightOrganization+'</div>'+
		'<div class="col-md-3">'+entryEightYears+'</div>'+
	'</div>'+
	'<div class="row">'+entryEightDescriptions+'<hr /></div>'+
	'</div>'+
	'<br />';

entryEight.innerHTML = entryEightHTML;
education.appendChild(entryEight);

var entryNine = document.createElement('div');
entryNine.className = "entryNine";

var entryNineTitle = '<h1>'+resumeData.education[1].title+'</h1>';
var entryNineOrganization = '<h2>'+resumeData.education[1].organization+'</h2>';
var entryNineYears = '<h1 class="text-right"><small>'+resumeData.education[1].startYear+' - '+resumeData.education[1].endYear+'</small></h1>';
var entryNineDescriptionOne = '<li>'+resumeData.education[1].descriptions[0]+'</li>';
var entryNineDescriptionTwo = '<li>'+resumeData.education[1].descriptions[1]+'</li>';
var entryNineDescriptionThree = '<li>'+resumeData.education[1].descriptions[2]+'</li>';
var entryNineDescriptionFour = '<li>'+resumeData.education[1].descriptions[3]+'</li>';

var entryNineDescriptions = '<ul>'+entryNineDescriptionOne+entryNineDescriptionTwo+entryNineDescriptionThree+entryNineDescriptionFour+'</ul>';

var entryNineHTML = 
	'<div class="entry">'+
	'<div class="row">'+
		'<div class="col-md-9">'+entryNineTitle+entryNineOrganization+'</div>'+
		'<div class="col-md-3">'+entryNineYears+'</div>'+
	'</div>'+
	'<div class="row">'+entryNineDescriptions+'<hr /></div>'+
	'</div>'+
	'<br />';

entryNine.innerHTML = entryNineHTML;
education.appendChild(entryNine);
/*-- /Education --*/



// /*-- Experience --*/
// // Step 1: Create Elements
// var thrive = document.createElement('li');
// var northwest = document.createElement('li');
// var leisureland = document.createElement('li');
// var quantAlgorithms = document.createElement('li');
// var beyondSoft = document.createElement('li');
// var lionBridge = document.createElement('li');


// // Step 2: Integrate Data into Elements


// // Step 3: Get and/or Create Parent Element(s)

// // Step 4: Append Child Elements to Parent Element(s)

// /*-- /Experience --*/

// /*-- Education --*/
// // Step 1: Create Elements

// // Step 2: Integrate Data into Elements

// // Step 3: Get and/or Create Parent Element(s)

// // Step 4: Append Child Elements to Parent Element(s)

// /*-- /Education --*/