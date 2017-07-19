/*-- Skills Controller --*/
/*-- Skills --*/
var skillsList = document.getElementById('skills-list');

for (i = 0; i < resumeData.skills.length; i++) {

/*-- Why won't this code work in combination with an if statement? 
	var skillListItem = document.createElement('li');
	var skillTextItem = document.createTextNode(resumeData.skills[i]);
	skillListItem.appendChild(skillTextItem);
	skillsList.appendChild(skillListItem);
--*/
	
	if (i == 2) {
		var skillListItem = document.createElement('li');
		var skillTextItem = document.createTextNode(resumeData.skills[i]);
		skillListItem.appendChild(skillTextItem);
		skillsList.appendChild(skillListItem);
		var brElemOne = document.createElement('br');
		skillsList.appendChild(brElemOne);
	}	else if (i == 5){
		var skillListItem = document.createElement('li');
		var skillTextItem = document.createTextNode(resumeData.skills[i]);
		skillListItem.appendChild(skillTextItem);
		skillsList.appendChild(skillListItem);
		var brElemTwo = document.createElement('br');
		skillsList.appendChild(brElemTwo);
	}	else {
		var skillListItem = document.createElement('li');
		var skillTextItem = document.createTextNode(resumeData.skills[i]);
		skillListItem.appendChild(skillTextItem);
		skillsList.appendChild(skillListItem);
		}
}
/*-- /Skills --*/