let count=0;
function calc(){
	count++;
	document.getElementById("out").innerHTML="You have clicked the button	"+count+" times"
	const studentsPerCourse = document.getElementById("perc").value
	const coursesPerTerm = document.getElementById("pert").value
	const countOfTerms = document.getElementById("cot").value
	if(studentsPerCourse.length==0){
		document.getElementById("calculate").innerHTML="empty"
	}
	localStorage.setItem("studentsPerCourse",studentsPerCourse)
	localStorage.setItem("coursesPerTerm",coursesPerTerm)
	localStorage.setItem("countOfTerms",countOfTerms)
	localStorage.getItem("studentsPerCourse")
	localStorage.getItem("coursesPerTerm")
	localStorage.getItem("countOfTerms")
	tot = totalst(studentsPerCourse,coursesPerTerm,countOfTerms)
	localStorage.setItem("total",tot)
	localStorage.getItem("total")
	document.getElementById("calculate").innerHTML= tot
  }
function totalst(studentsPerCourse,coursesPerTerm,countOfTerms){
	return parseInt(studentsPerCourse)*parseInt(coursesPerTerm)*parseInt(countOfTerms)
}

function rem(){
	count=0;
	document.getElementById("out").innerHTML="local storage is cleared"
	localStorage.clear()
}