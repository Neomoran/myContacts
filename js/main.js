//alert('hey');

//get the search input element
let searchme=document.getElementById('search');
//add event listener keyup for typing
searchme.addEventListener('keyup',searchNames);

function searchNames() {
	//get input values
	let searchValue=document.getElementById('search').value.toUpperCase();
	//get  name on ul
	let ul=document.getElementById('names');
	//get contact names from names
	let li=ul.querySelectorAll('li.list-group-item');

	//loop through contact names li s
	for(let i=0;i<li.length;i++){
		let a=li[i].getElementsByTagName('a')[0];
		//if matched
		if (a.innerHTML.toUpperCase().indexOf(searchValue)>-1) {
			li[i].style.display='';
		}
		else{
			li[i].style.display='none';
		}

	}
}
