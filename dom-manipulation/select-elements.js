// Four ways to select elements

// 1. By ID

const element = document.getElementById('one');
element.innerText = 'I accessed the element by id and changed the innerText';

/* ******************************************************************************************** */
// 2. By Classname

const eleByClass = document.getElementsByClassName('block2');

Array.prototype.forEach.call(eleByClass, (ele) => {
	ele.innerText = 'I accessed the element by its classname and changed the innerText';
  ele.style.color = 'blue';
});

/* ******************************************************************************************** */
// 3. By Tagname (element)

const eleByTag = document.getElementsByTagName('div');
Array.prototype.forEach.call(eleByTag, (ele) => {
	ele.innerText = 'I accessed the element by its Tagname and changed its innerText';
  ele.style.color = 'red';
});

/* ******************************************************************************************** */
// 4. By QuerySelector (with any css selector)
//		4.1 QuerySelector returns first element that matches the selector

const eleByQS = document.querySelector('#three');
eleByQS.innerText = 'I accessed the element by query selector with id and changed its innerText';

//		4.2 QuerySelector returns all the elements that matches the selector

const elesByQSAll = document.querySelectorAll('button');
Array.prototype.forEach.call(elesByQSAll, (ele) => {
	ele.style.background = 'red';
  /* ele.style.color = 'blue' */;
});





