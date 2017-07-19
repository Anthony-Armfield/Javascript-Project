/*-- Education Controller --*/
/*-- Education --*/
var education = document.getElementById('education');
for (i = 0; i < resumeData.education.length; i++){
	entryDescriptions = [];
	var educationEntryDiv = document.createElement('div');
	educationEntryDiv.className = "educationEntryDiv";
	var entryTitle = '<h1>'+resumeData.education[i].title+'</h1>';
	var entryOrganization = '<h2>'+resumeData.education[i].organization+'</h2>';
	var entryYears = '<h1 class="text-right"><small>'+resumeData.education[i].startYear+' - '+resumeData.education[i].endYear+'</small></h1>';
	var entryDescriptions = document.createElement('ul');
	for (j = 0; j < resumeData.education[i].descriptions.length; j++){
		var entryDescItem = document.createElement('li');
		var entrydesc = document.createTextNode(resumeData.education[i].descriptions[j]);
		entryDescItem.appendChild(entrydesc)
		entryDescriptions.appendChild(entryDescItem);
	}
	var entryHTML = 
			'<div class="entry">'+
			'<div class="row">'+
				'<div class="col-md-9">'+entryTitle+entryOrganization+'</div>'+
				'<div class="col-md-3">'+entryYears+'</div>'+
			'</div>'+
			'<div class="row"><ul>'+entryDescriptions.innerHTML+'</ul><hr /></div>'+
			'</div>'+
			'<br />';
	educationEntryDiv.innerHTML = entryHTML;
	education.appendChild(educationEntryDiv);
}
/*-- /Education --*/