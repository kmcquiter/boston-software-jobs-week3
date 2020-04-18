// May need to declare one or more other variable(s) 

// Create array of company objects
let companies = [{
	name: 'LogMeIn',
	logo: 'http://www.codesquad-test.org/bootcamp/LogMeIn_logo.png',
	blurb: "Simplifying how people interact with each other and the world around them to drive meaningful insight, deeper relationships and better outcomes for all has helped LogMeIn grow to become one of the world's top 10 SaaS companies with a leadership position in every one of our markets."
}, {
	name: 'TripAdvisor',
	logo: 'https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg',
	blurb: 'Tripadvisor helps nearly a half a billion travelers each month make every trip their best trip. Use the Tripadvisor site and app to browse hundreds of millions of reviews and opinions of accommodations, restaurants, experiences, airlines and cruises.'
}, {
	name: 'Agero',
	logo: 'https://www.agero.com/sites/all/themes/agero/images/logo_header.png',
	blurb: "Agero's mission is to transform the entire driving experience through an unmatched combination of innovative technology and human-powered solutions."
}];

// Create object constructor for new company
function Company(name, logo, blurb) {
	this.name = name;
	this.logo = logo;
	this.blurb = blurb;
}


// Listen for user click on "Display list" button
document.querySelector('#displayAll').addEventListener('click', function(){
	displayAll();
});
document.querySelector('#clear').addEventListener('click', function(){
	clear();
});
document.querySelector('#addCompany').addEventListener('click', function(){
	document.querySelector('#validation').innerHTML  = addCompany();
});
document.querySelector('#sortLlist').addEventListener('click', function(){
	sortLlist();
});


function clear(){
	document.querySelector('#compName').value = "";
	document.querySelector('#compUrl').value = "";
	document.querySelector('#compBlurb').value = "";
}

function addCompany(){
	var name = document.querySelector('#compName');
	var logo = document.querySelector('#compUrl');
	var blurb = document.querySelector('#compBlurb');

	if(!name.checkValidity())
	{
		clear();
		return 'Please, Enter name';
	}
	if(!logo.checkValidity())
	{
		clear();
		return 'Please, Enter correct url';
	}
	if(!blurb.checkValidity())
	{
		clear();
		return "Please, Enter blurb";
	}

	companies.push({ 
        "name" : name.value,
        "logo"  : logo.value,
        "blurb" : blurb.value 
    });

    return 'added successfully.';
}

function sortLlist(){
	companies.sort(function(a, b) {
	  return compare(a.name, b.name);
	});
	displayAll();
}


function displayAll(){
	
	document.querySelector('#list').innerHTML ="";
	var div = '<div class="col col-lg-2"><div class="card" style="width: 18rem;"><img src="[src]" class="card-img-top" style="width:150px;"><div class="card-body"><h5 class="card-title">[name]</h5><p class="card-text">[blurb]</p></div></div></div>';
	var card="<div class='row flex-container'>";
	
	for(var i = 0; i < companies.length; i++) {
		var obj = companies[i];
    	card += div.replace(/\[src\]/, obj.logo).replace(/\[name\]/,obj.name).replace(/\[blurb\]/, obj.blurb); 
	}

	card +="</div>";

	document.querySelector('#list').innerHTML = card;
}


function compare(a, b) { 
	// create new variables to isolate the name keys
	a = a.toLowerCase();
  	b = b.toLowerCase();
  	return (a < b) ? -1 : (a > b) ? 1 : 0;
	// compare two companies from the array; if a is greater (i.e. closer to end of alphabet), comparison variable = 1, if b is greater, comparison = -1

}
