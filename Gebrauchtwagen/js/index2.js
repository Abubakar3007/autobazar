
let index = 1;

const on = (listener, query, fn) => {
	document.querySelectorAll(query).forEach(item => {
		item.addEventListener(listener, el => {
			fn(el);
		})
	})
}

on('click', '.selectBtn', item => {
	const next = item.target.nextElementSibling;
	next.classList.toggle('toggle');
	next.style.zIndex = index++;
});
on('click', '.option', item => {
	item.target.parentElement.classList.remove('toggle');

	const parent = item.target.closest('.select').children[0];
	parent.setAttribute('data-type', item.target.getAttribute('data-type'));
	parent.innerText = item.target.innerText;
})

let navbarHide = document.querySelector(".navbarHideInner")
let seacrhClick = document.getElementById("clickSearch");
let seacrhClick2 = document.getElementById("clickSearch2");
seacrhClick.addEventListener("click", function () {
	navbarHide.style.display = "block";
	this.style.display = "none";
	seacrhClick2.style.display = "block"
	seacrhClick2.addEventListener("click", function () {
		navbarHide.style.display = "none";
		seacrhClick2.style.display = "none";
		seacrhClick.style.display = "block"
	})
})



