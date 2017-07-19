/*---- Experience Controller----*/
/*---- Experience ----*/
var experience = document.getElementById('experience');
for (i = 0; i < resumeData.experience.length; i++){
	entryDescriptions = [];
	var experienceEntryDiv = document.createElement('div');
	experienceEntryDiv.className = "experienceEntryDiv";
	var entryTitle = '<h1>'+resumeData.experience[i].title+'</h1>';
	var entryOrganization = '<h2>'+resumeData.experience[i].organization+'</h2>';
	var entryYears = '<h1 class="text-right"><small>'+resumeData.experience[i].startYear+' - '+resumeData.experience[i].endYear+'</small></h1>';
	var entryDescriptions = document.createElement('ul');
	for (j = 0; j < resumeData.experience[i].descriptions.length; j++){
		var entryDescItem = document.createElement('li');
		var entrydesc = document.createTextNode(resumeData.experience[i].descriptions[j]);
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
	experienceEntryDiv.innerHTML = entryHTML;
	experience.appendChild(experienceEntryDiv);
}
/*---- /Experience ----*/