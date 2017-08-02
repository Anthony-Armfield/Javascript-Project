/*-- Summary --*/
(function(){
	'use strict';

	activate();

	/////////////////////////////////////////

	function activate(){
		for(var s in resumeData.summary){
		var elem;
			if(s === 'background'){
				elem = document.getElementById('summary');
				elem.setAttribute('style', 'background-image: url("'+resumeData.summary.background+'")');
			} else {
				elem = document.getElementById(s);
				if (s === 'profile'){
					elem.setAttribute('src', resumeData.summary.profile);
				} else if(s === 'phone'){
					var aPhone = document.createElement('a');
					var elemPhone = document.createTextNode(resumeData.summary.phone);
					aPhone.setAttribute('href', 'tel:1-' + resumeData.summary.phone);
					aPhone.appendChild(elemPhone);
					elem.appendChild(aPhone);
				} else if(s === 'email'){
					var aEmail = document.createElement('a');
					var elemEmail = document.createTextNode(resumeData.summary.email);
					aEmail.setAttribute('href', 'mailto:' + resumeData.summary.email);
					aEmail.appendChild(elemEmail);
					elem.appendChild(aEmail);
				} else {
					var elemText = document.createTextNode(resumeData.summary[s]);
					elem.appendChild(elemText);
				}
			}
		}
	}
})();

/*-- /Summary --*/