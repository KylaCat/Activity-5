function displayName(name){
    alert("Your Name is " + name);
    document.write("Your Name is "+ name);
    console.log("Your Name is "+ name);
}

function sumOfTwoNumbers(a,b,d){
    let c = a + b;
    document.getElementById(d).innerHTML = "The sum of 2 Numbers is: " + c;
    //document.write("The sum of 2 Number is: "+c);

}
function product(a,b,c){
    document.getElementsByClassName(c)[0].innerHTML = "The Product is: "+ (a*b);
}

function inputTwoNumbers(){
    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));
    let sum = num1+num2;
    alert("The sum of the two numbers is: "+sum);

}

//INPUT TWO NUMBER
function inputTwoNumbers(){
    let name = prompt("Enter your name: ");
    let totalScore = parseInt(prompt("Enter total score: "));
    let totalItem = parseInt(prompt("Enter total item: "));
    let compute =parseFloat ((-4*(totalScore/totalItem)+5).toFixed(2));
    var remarks = checkRemarks(compute);
    return "Hello" + name + ", your grade is: "+ compute;
    
}
function checkRemarks(grade){
    var remarks =(grade > 3.0)? "Failed" : "Passed";
    return remarks;
}

function calculateGrade() {
    let name = prompt("Enter your name: ");
    let totalItem = parseFloat(prompt("Enter Total Items: "));
    let totalScore = parseFloat(prompt("Enter Total Score: "));
    let compute = (-4 * (totalScore / totalItem) + 5).toFixed(2); 
    var remarks = checkRemarks(compute);
    document.write("Hello "  + name + ",  your grade is: " + compute + " (" + remarks + ")");
    document.write("<br><br>");
    document.write("Your Name is: "+name+"<br><br>"+ 
                    "Your Total Score is: "+ totalScore+"<br><br>"+
                    "Your remark is: "+remarks+"<br><br>");
   
}


