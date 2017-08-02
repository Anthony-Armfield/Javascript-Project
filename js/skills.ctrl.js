/*-- Skills Controller --*/
(function() {
	'use strict';

	activate();

	///////////////////////////////////////////////

	function activate(){
		var skillsList = document.getElementById('skills-list');

		for (var i = 0; i < resumeData.skills.length; i++) {
			createSkillItem();
			if((i + 1) % 3 === 0){
				createBreakPoint();
			}
		}
		
		function createSkillItem() {
			var skillListItem = document.createElement('li');
			var skillTextItem = document.createTextNode(resumeData.skills[i]);
			skillListItem.appendChild(skillTextItem);
			skillsList.appendChild(skillListItem);
			return skillListItem
		}
		function createBreakPoint() {
			var brElem = document.createElement('br');
			skillsList.appendChild(brElem);
		}
	}

})();
/*-- /Skills --*/