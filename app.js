/* Chapter # 01 Assignment */

// window.alert("Welcome to website");
// window.alert("Error! Pleaser enter a valid password");
// window.alert("Welcome to JS Land...\nHappy Coding!");

/* Chapter # 02 Assignment */
// 2.1
// var username;
// var myname = "Muhammad Taha";
// var message = "Hello World";
// window.alert(message);

// 2.2
// var name = "Taha";
// var age = "I am 22 years old";
// var certification = "Certified Mobile Application Development";
// window.alert(name);
// window.alert(age);
// window.alert(certification);

// 2.3
// var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP";
// window.alert(pizza);

// 2.4
// var email = "tahawork@gmail.com";
// window.alert("My email address is " + email)

// 2.5

// var book = "A smarter way to learn JAVA SCRIPT";
// window.alert("I am trying to learn from the book " + book);

// 2.6
// var emoji = "▬▬▬▬▬▬▬▬▬▬💻▬▬▬▬▬▬▬▬▬"
// window.alert(emoji);

/* Chapter # 03*/

// 3.1
// var age;
// age = "i am 22 years old";
// window.alert(age);

// 3.2
// var visits = "you have visited thios site 15 times";
// window.alert(visits);

//3.3 
// var birthYear;
// birthYear = 1998;
// document.write("My birth year is " + birthYear);
// document.write("<br/>Data type of my decleared vairable is number");

// 3.4
// var customerInfo;
// customerInfo = "Muhammad Taha ordered 10 T-shirts on XYZ clothing store";
// document.write(customerInfo);

/* Chapter # 04*/

// 4.1
// var a,b,c;
// 4.2
/*Legal variables*/
// var $time;
// var javaScript;
// var aacount_info;
// var varAlert;
// var document_write;

/* Illegal Variables*/

// var -acount_info;
// var java - script;
// var 4 time;
// var +myName;
// var !date;

// 4.3
// var heading = "Rules of naming JS variables"

// document.write(heading.bold());

// document.write("<br/> <br/>Variables name can only contain, number, $ and _. For example: $my_1stvariable");
// document.write("<br/>Variables must begin with a letter, $ or _. For example: $name, _name, or name");
// document.write("<br/>Variable names are case sensitive");
// document.write("<br/>Variable should not be JS keywords");

/* Chapter # 05 */

//  5.1

// var a = prompt("Enter value of a ");
// var b = prompt("Enter value of b ");
// var c = a + b;
// document.write("Sum of  " + a + " and " + b + "is " + c);

//5.2
// var a = prompt("Enter value of a ");
// var b = prompt("Enter value of b ");
// var c = a - b;
// document.write("Result of  " + a + " and " + b + "is " + c);

// var a = prompt("Enter value of a ");
// var b = prompt("Enter value of b ");
// var c = a * b;
// document.write("Result of  " + a + " and " + b + "is " + c);

// var a = prompt("Enter value of a ");
// var b = prompt("Enter value of b ");
// var c = a / b;
// document.write("Result of  " + a + " and " + b + "is " + c);

// var a = prompt("Enter value of a ");
// var b = prompt("Enter value of b ");
// var c = a % b;
// document.write("Result of  " + a + " and " + b + "is " + c);

// // 5.3 
// var a;
// document.write("value after variable decleration is " + a)
// a = 4;
// document.write("<br/>Initial Value = " + a);
// a++;
// document.write("<br/>Value after increment is: " + a);
// a += 7;
// document.write("<br/>Value after addition of 7 is: " + a);
// a--;
// document.write("<br/>Value after decrement is: " + a);
// b = a % 3;
// document.write("<br/>The Reminder is: " + b);

// 5.4

// var ticketPrice = 600;
// var noOfTickets = 5 * ticketPrice;
// document.write("Total cost of but 5 tickets to a movie is " + noOfTickets + "PKR");

// 5.5
// document.write("Table of 2")
// var num = 2;
// var a;
// for (a = 1; a < 11; a++) {
//     document.write("<br/>2 * " + a + " = " + (a * num))
// }

// 5.6

// var celcius = 25;
// document.write(celcius + " C " + " is " + ((celcius * (9 / 5)) + 32) + "F");

// var fahrenheit = 70;
// document.write("<br/>" + fahrenheit + " F " + " is " + ((fahrenheit - 32) * 5 / 9) + "C")

// 5.7

// var priceOfItem1 = 650;
// var priceOfItem2 = 100;

// var quantityOfItem1 = 3;
// var quantityOfItem2 = 7;

// var shippingCharges = 100;

// var totalCost = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2);

// document.write("Price of item 1 is " + priceOfItem1);
// document.write("<br/>Quantity of item 1 is " + quantityOfItem1);
// document.write("<br/>Price of item 2 is " + priceOfItem2);
// document.write("<br/>Quantity of item 2 is" + quantityOfItem2)
// document.write("<br/>Shipping charges " + shippingCharges)
// document.write("<br/><br/>Total cost of your order is " + (totalCost + shippingCharges))

// 5.8

// var totalMarks = 980;
// var obtainedMarks = 804;

// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("Total marks: " + totalMarks);
// document.write("<br/>Obtained marks: " + obtainedMarks);
// document.write("<br/>Percentage: " + percentage);

// 5.9

// var USDollar = 104.80;
// var saudiRiyal = 28;

// var currencyInPKR = (10 * USDollar) + (25 * saudiRiyal)
// document.write("Total currency in PKR: " + currencyInPKR);

// 5.10
// var number = 10;
// number += 5;
// number *= 10;
// number /= 2;

// document.write("Result is " + number);

// 5.11
// var currentYear = 2020;
// var birthYear = 1998;
// var possibleage1 = currentYear - birthYear;
// var possibleage2 = currentYear - 1997;
// document.write("Current Year " + currentYear);
// document.write("<br/>Birth Year " + birthYear);
// document.write("<br/>They are either " + possibleage1 + " or " + possibleage2 + " years old");

// 5.12

// var radiusOfCircle = 20;
// var ValueOfPie = 3.142;
// var circumferenceOfCircle = (2 * ValueOfPie * radiusOfCircle);
// var areaOfCircle = (ValueOfPie * radiusOfCircle * radiusOfCircle);

// document.write("Radiius " + radiusOfCircle);
// document.write("<br/>The circumference is " + circumferenceOfCircle);
// document.write("<br/>The area is " + areaOfCircle);

// 5.13

// var favoriteSnacks = "Lays";
// var currentAge = 15;
// var maxAge = 65;
// var amountPerDay = 3;
// var snackCalculation = (maxAge - currentAge) * 365 * amountPerDay;
// document.write("Favorite Snack: " + favoriteSnacks);
// document.write("<br/>Current Age " + currentAge);
// document.write("<br/>Estimated Maximum Age " + maxAge);
// document.write("<br/>Amount of snacks per day " + amountPerDay);
// document.write("<br/>You will need  " + snackCalculation + " lays to last you until the ripe old age of " + maxAge);

/* Chapter # 06 to 09 tasks */

// 6.1

// var a = prompt("Enter a number")
// document.write("Result")
// document.write("<br/>The value of a is " + a);

// document.write("<br/><br/>The value of ++a is " + (++a));
// document.write("<br/>Now the value of a is " + a)

// document.write("<br/><br/>The value of a++ is " + (a++));
// document.write("<br/>Now the value of a is " + a)

// document.write("<br/><br/>The value of --a is " + (--a));
// document.write("<br/>Now the value of a is " + a)

// document.write("<br/><br/>The value of a-- is " + (a--));
// document.write("<br/>Now the value of a is " + a)

// 6.2

// var a = 2,
//     b = 1;
// var result = (--a) - (--b) + (++b) + (b--);

// // --a is a pre decrememt first i minus 1 from value then prints
// --a;
// // --a - --b first 1 is decrement form and 1 is decreemrnt from b and then subtraction
// (--a) - (--b);
// // --a - --b first 1 is decrement form and 1 is decreemrnt from b and then 1 will increment in b and then addition
// (--a) - (--b) + (++b);
// // --a - --b first 1 is decrement form and 1 is decreemrnt from b and then 1 will increment in b and then addition then value of b decremet after printing because it is post decremnt
// (--a) - (--b) + (++b) + (b--);

// document.write("Vale of a " + a);
// document.write("<br/>Value of b " + b)
// document.write("<br/>Result " + result);

// 6.3

// var userName = prompt("Enter your name");
// document.write("We welcome you here " + userName);

// 6.4

// var nunmber = prompt("Enter a number ");
// var a;
// if (nunmber != 0) {
//     for (a = 1; a < 11; a++) {
//         document.write("<br/>" + nunmber + " * " + a + " = " + (nunmber * a))
//     }
// } else {
//     for (a = 1; a < 11; a++) {
//         document.write("<br/>" + "5 * " + a + " = " + (5 * a))
//     }
// }

// 6.5
// var subject1 = prompt("Enter 1 Subject name");
// var subject2 = prompt("Enter 2 Subject name")
// var subject3 = prompt("Enter 3 Subject name")

// var marksForEachSubject = 100;

// var obtainedMarksOfSubject1 = +prompt("Enter subject 1 obtained marks ");
// var obtainedMarksOfSubject2 = +prompt("Enter subject 2 obtained marks ");
// var obtainedMarksOfSubject3 = +prompt("Enter subject 3 obtained marks ");

// var totalMarks = 300;
// var obtainedMarks = (obtainedMarksOfSubject1 + obtainedMarksOfSubject2 + obtainedMarksOfSubject3);
// var percentage = (obtainedMarks / totalMarks) * 100;
// document.write(percentage);

// Chapter # 9 till 11

// 9.1
// var cityName = prompt("Enter city name")
// if (cityName == "karachi" || "Karachi" || "KARACHI") {
//     document.write("Welcome to city of lights")
// } else {
//     document.write("Wrong city name")
// }

// 9.2

// var gender = prompt("Enter yopur gender ")
// if (gender == "male") {
//     document.write("Good morning Sir.")
// } else if (gender == "female") {
//     document.write("Good morning Ma'am.")
// }

// 9.3

// var trafficSignalColor = prompt("Enter signal color ")
// if (trafficSignalColor == "red") {
//     document.write("Must Stop")
// } else if (trafficSignalColor == "yellow") {
//     document.write("Ready to move")
// } else if (trafficSignalColor == "green") {
//     document.write("Move now")
// }

// 9.4
// var remainingFuel = prompt("Enter remaining fuel ");
// if (remainingFuel < 0.25) {
//     document.write("Please refill the fuel in car")
// } else {
//     document.write("Fuel is enough")
// }

// 9.5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// below condition in not generating alert 
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// Only condition 2 and 4 is true
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// Below code snippet is true 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// 9.6
// var markOfSubject1 = +prompt("Enter 1 subject marks");
// var markOfSubject2 = +prompt("Enter 2 subject marks");
// var markOfSubject3 = +prompt("Enter 3 subject marks");

// var totalObtainedMarks = markOfSubject1 + markOfSubject2 + markOfSubject3;
// var totalMarks = 300;
// var percentage = (totalObtainedMarks / totalMarks) * 100;
// document.write("Total Marks: " + totalMarks);
// document.write("<br/>Obtained Marks: " + totalObtainedMarks);
// document.write("<br/>Percentage: " + percentage);
// if (percentage >= 80) {
//     document.write("<br/>Grade: A-one");
//     document.write("<br/>Remarks: Excellent");
// } else if (percentage >= 70) {
//     document.write("<br/>Grade: A");
//     document.write("<br/>Remarks: Good");
// } else if (percentage >= 60) {
//     document.write("<br/>Grade: B");
//     document.write("<br/>Remarks: You need to improve");
// } else if (percentage < 60) {
//     document.write("<br/>Grade: Fail");
//     document.write("<br/>Remarks: Sorry");
// }

9.7
// var secretNumber = 3;
// var userGuess = +prompt("Guess the secret number: ");
// if (secretNumber == userGuess) {
//     document.write("Bingo! Correct Answer");
// } else if (userGuess == secretNumber + 1) {
//     document.write("Close enough to the correct answer");
// } else {
//     document.write("Better Luck Next Time")
// }

// 9.8
// var userNum = +prompt("Enter a number: ");
// if (userNum % 3 == 0) {
//     document.write("Divisible by 3")
// } else {
//     document.write("Not divisible by 3")
// }

// 9.9
// var evenOddNum = +prompt("Enter a number: ");
// if (evenOddNum % 2 == 0) {
//     document.write("Even Number")
// } else {
//     document.write("Odd number")
// }

// 9.10
// var temperature = +prompt("Enter temperature: ");
// if (temperature > 40) {
//     document.write("It is too hot outside.")

// } else if (temperature > 30) {
//     document.write("The Weather today is Normal.")
// } else if (temperature > 20) {
//     document.write("Today’s Weather is cool.")
// } else if (temperature > 10) {
//     document.write("OMG! Today’s weather is so Cool.")
// }

// 9.11

// var x = +prompt("Enter first number: ")
// var y = +prompt("Enter second number: ")
// var operation = prompt("Enter oeration eg. + , - , * , / , %: ")
// if (operation == "+") {
//     document.write("Addition of x and y is: " + (x + y))
// } else if (operation == "/") {
//     document.write("Division of x and y is: " + (x / y))
// } else if (operation == "-") {
//     document.write("Substraction of x and y is: " + (x - y))
// } else if (operation == "*") {
//     document.write("Multiplication of x and y is: " + (x * y))
// } else if (operation == "%") {
//     document.write("Reminder of x and y is: " + (x % y))
// }

/* Chapter no 12 and 13 tasks*/
// 12.1
// var checkValue = prompt("Enter a character(Number or string)");
// if (checkValue >= 65 && <= 90) {
//     document.write("Upper case letter")
// } else if (checkValue >= 97 && <= 122) {
//     document.write("Lower case letter")
// } else if (checkValue < 65 || > 122) {
//     document.write("Number or special character")
// }
// // 12.2
// var integerA = +prompt("Enter value of A");
// var integerB = +prompt("Enter value of B");
// if (integerA < integerB) {
//     document.write(integerB + " is greater")
// } else if (integerB < integerA) {
//     document.write(integerA + " is greater")
// } else if (integerA == integerB) {
//     document.write("Both are equal")
// }

// 12.3
// var numCheck = +prompt("Enter a number");
// if (numCheck < 0) {
//     document.write("Negative Number")
// } else if (numCheck > 0) {
//     document.write("Positive Number")
// } else if (numCheck == 0) {
//     document.write("Zero");
// }

// 12.4
// var charCheck = prompt("Enter a single character ");
// if (charCheck == ("a" || "e" || "i" || "o" || "u") || ("A" || "E" || "I" || "O" || "U")) {
//     document.write("It is a vowel")
// } else {
//     document.write("Not a vowel");
// }

// // 12.5
// var password = 12345;
// var userPassword = +prompt("Enter Password")
// if (userPassword == 0) {
//     document.write("Please enter your password")
// } else if (userPassword == password) {
//     document.write("Correct! The password you entered matches the original password");
// } else if (userPassword != password) {
//     document.write("Incorrect Password");
// }

// 12.6

// var greeting;

// var hour = 13;
// if (hour < 18) {
//     greeting = "Good Day"
//     document.write(greeting)
// } else {
//     greeting = "Good evening";
//     document.write(greeting)
// }

12.7

// var timeInput = +prompt("Enter time in 24 hour format eg. 1500")
// if (timeInput >= 0000 && timeInput < 1200) {
//     document.write("Good Morninig");
// } else if (timeInput >= 1200 && timeInput < 1700) {
//     document.write("Good Afternoon")
// } else if (timeInput >= 1700 && timeInput < 2100) {
//     document.write("Good Evening")
// } else if (timeInput >= 2100 && timeInput < 2359) {
//     document.write("Good Night")
// }

/* Chapter 14 till 16 tasks */

// 14.1

// var studentNames = [];
// // 14.2
// var stdNames = {};
// // 14.3
// var str = ["Taha", "Bilal"];
// // 14.4
// var numberArray = [1, 2, 3, 4, 5]
//     // 14.5
// var boleanArray = [true, false]

// // 14.6
// var mixedArray = [1, "taha", true];

// 14.7
// var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write("Qualifications:")
// for (var i = 0; i < education.length; i++) {
//     document.write("<br/>" + [i] + ") " + education[i])
// }

// 14.8

// var studentName = ["Bilal", "Faraz", "Taha"];
// var studentMarks = [320, 230, 480];
// var totalMarks = 500;
// for (var i = 0; i < studentName.length; i++) {
//     document.write("<br/>Score of " + studentName[i] + " is " + studentMarks[i] + " Percentage: " + (studentMarks[i] / totalMarks) * 100 + " %")
// }

// // 14.9
// var colorNames = ["Blue", "Black", "Green", "Grey", "Pink"];
// document.write("List before addition: " + colorNames);
// var colorAdd = prompt("Which color you want to add at the begining of array: ");
// colorNames.unshift(colorAdd);
// document.write("<br/>List after color addition: " + colorNames)
// var colorAdd1 = prompt("Which color you want to add at the end of array: ");
// colorNames.push(colorAdd1);
// document.write("<br/>List after color addition:" + colorNames);
// var colorAdd2 = prompt(" Add two more color to the begining of array. Add 1st color ");
// var colorAdd3 = prompt(" Add two more color to the begining of array. Add 2nd color ");
// colorNames.unshift(colorAdd2, colorAdd3);
// document.write("<br/>List after updation 2 colors: " + colorNames)
// colorNames.shift();
// document.write("<br/>List after deleting firt element: " + colorNames);
// colorNames.pop()
// document.write("<br/>List after deleting last element: " + colorNames);

// var startIndex = +prompt("Add starting index to add a color");
// var colorAdd4 = prompt("Write the name of color to add : ");
// colorNames.splice(startIndex, 0, colorAdd4);
// document.write("<br/>Color names after adding: " + colorNames);

// var startIndex1 = +prompt("At which index you want to delete colors: ");
// var noOfColor = +prompt("How many color you want to delete: ");
// colorNames.splice(startIndex1, noOfColor);
// document.write("<br/>List after deleting the colors: " + colorNames);

// 14.10
// var studentScores = [320, 230, 480, 120]
// document.write("Score of student before sorting: " + studentScores)
// studentScores.sort();
// document.write("<br/>Score of student after sorting: " + studentScores)

// 14.11

// var cityArray = ["Karachi", "Lahore", "Islamabad", "Multan", "Faisalabad"];
// var copyCities = cityArray.slice(1, 4)
// document.write("Cities List: " + cityArray);
// document.write("<br/>Selected Cities: " + copyCities)

// 14.12

// var arr = ["This", "is", "my", "cat"];
// var arrString = arr.join(" ");
// document.write(arrString);

// 14.13

// var devices = []
// devices[0] = "Keyboard"
// devices[1] = "Mouse"
// devices[2] = "Printer"
// devices[3] = "Monitor"

// document.write(devices)

// document.write(`"<br/>" ${ devices[0] } "<br/>" ${ devices[1] } "<br/>" ${ devices[2] } "<br/>" ${ devices[3] } `);

// 14.14

// var devices1 = [];
// devices1[0] = "Keyboard"
// devices1[1] = "Mouse"
// devices1[2] = "Printer"
// devices1[3] = "Monitor"

// document.write("Devices: " + devices1);
// document.write(`"<br/>" ${ devices1[3] } "<br/>" ${ devices1[2] } "<br/>" ${ devices1[1] } "<br/>" ${ devices1[0] } `);

// 14.15

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>" + "<option>" + manufacturers[0] + "<option/>" + "<option>" + manufacturers[1] + "<option/>" + "<option>" + manufacturers[2] + "<option/>" + "<option>" + manufacturers[3] + "<option/>" + "<option>" + manufacturers[4] + "<option/>" + "<option>" + manufacturers[5] + "<option/>" + "<select/>");

/* Chapter 17-20 tasks */

// 17.1
// var salary = [
//     [],
//     [],
//     [],
//     [],
// ];
// 17.2

// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1],
// ];
// for (var i = 0; i < 4; i++) {
//     for (var j = 0; j < 4; j++) {
//         document.write(matrix[i][j])
//     }
// }

// // 17.3
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br/>")
// }

// 17.4

// var tableNum = +prompt("Enter a number to show its multiplication table: ");
// var tableLength = +prompt("Enter the length of table: ");
// for (var i = 1; i <= tableLength; i++) {
//     document.write(tableNum + " * " + i + " = " + (tableNum * i) + "<br/>");
// }

// 17.5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// document.write("Fruits list" + fruits + "<br/>");
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at " + i + " index is " + fruits[i] + "<br/>");
// }

// 17.6
// document.write("Counting<br/>")
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ",")
// }

// document.write("<br/>Reverse Counting<br/>")
// for (var i = 15; i >= 0; i--) {
//     document.write(i + ",")
// }

// document.write("<br/>Even Numbers<br/>")
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ",")
// }

// document.write("<br/>Odd Numbers<br/>")
// for (var i = 1; i <= 20; i += 2) {
//     document.write(i + ",")
// }

// document.write("<br/>Even Numbers<br/>")
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "K,")
// }

// 17.7

// var items = ["cake", "applePie", "cookie", "chips", "patties"];
// var itemSearch = prompt("Welcome to ABC bakery. What do you want ot order?");
// for (var i = 0; i < items.length; i++) {
//     if (items[i] == itemSearch) {
//         document.write(itemSearch + " is available at " + items[i] + " index in our bakery.")
//     }
// }

// 17.8
// var array = [24, 53, 78, 91, 12];
// var largest = 0;

// for (i = 0; i <= largest; i++) {
//     if (array[i] > largest) {
//         var largest = array[i];
//     }
// }
// document.write(largest);

// 17.9
// var arr = [24, 53, 78, 91, 12];
// var smallest = arr[0];

// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }
// }

// document.write(smallest);

// 17.10
// document.write("Multiple of five<br/>")
// for (var i = 5; i <= 100; i += 5) {
//     document.write(i + ",")
// }


/* Chapter 21-25  */
// // 21.1
// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName + lastName
// document.write("Welcome to the JavaScript course " + fullName)

// 21.2
// var favMobile = prompt("Enter your favorite mobile model")
// document.write("My favorite mobile model is: " + favMobile);
// document.write("<br/>String length is: " + favMobile.length)

// // 21.3
// var country = "Pakistani";
// var index = country.indexOf("n");
// document.write("String: " + country);
// document.write("<br/>Index of 'n': " + index);

// 21.4
// var greet = "Hello World";
// var index = greet.lastIndexOf("l");
// document.write("String: " + greet);
// document.write("<br/>Last Index of 'n': " + index);

// 21.5
// var nationality = "Pakistani";
// var indexOfChar = nationality.charAt(3);
// document.write("String: " + nationality);
// document.write("<br/>Character at 3 index: " + indexOfChar)

// // 21.6
// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName.concat(lastName)
// document.write("Welcome to the JavaScript course " + fullName);

// 21.7
// var city = "Hyderabad";
// var change = city.replace("Hyder", "Islam");
// document.write("City: " + city);
// document.write("<br/>After replacement: " + change);

// 21.8

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var replacing = message.replace(/and/g, "&");
// document.write("After replacing: " + replacing);

// 21.9

// var str = "472"
// var strType = parseInt(str);
// var strToNum = parseInt("472")
// document.write("Value: " + str);
// document.write("<br/>Type:" + typeof(str))
// document.write("<br/>Value: " + str);
// document.write("<br/>Type:" + typeof(strToNum))

// 21.10

// var strUpper = prompt("Enter and string: ");
// document.write("User Input: " + strUpper);
// document.write("<br/>Upper Case: " + strUpper.toUpperCase())

// 21.11

// var strTitle = prompt("Enter and string: ");
// var convertingToTitle = strTitle.charAt(0).toUpperCase();
// var slc = strTitle.slice(1, strTitle.length).toLowerCase();
// var joiningString = convertingToTitle + slc
// document.write("User Input: " + strTitle);
// document.write("<br/>Title Case: " + joiningString)

// 21.12
// var num = 35.36;
// document.write("Number: " + num);
// document.write("<br/>Result: " + num.toString().replace(".", ""))

// 21.13

// var userName = prompt("Enter User name");
// if (userName == "@" || "." || "!" || ",") {
//     alert("Please enter a valid username")
// }

// 21.14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var user = prompt("Welcome to ABC bakery. What do you want to order: ")
// var insensitive = user.toLowerCase();
// for (var i = 0; i < A.length; i++) {
//     if (insensitive == A[i]) {
//         document.write(insensitive + " is available at our bakery")
//     } else {
//         document.write("We are sorry " + insensitive + " is not available at our bakery")
//         break;
//     }
// }

// 21.16
// var university = "University of Karachi";
// var splt = university.split(" ");
// document.write(splt)

// 21.17

// var userInput = prompt("Enter any string: ")
// var lastChar = userInput.charAt(userInput.length - 1);
// document.write("user Input: " + userInput);
// document.write("<br/>Last Character: " + lastChar);

// // 21.18
// var sentence = "the quick brown fox jumps over the lazy dog"
// var occurances = (sentence.match(/the/g)).length;
// document.write("Sentence: " + sentence);
// document.write("<br/>There is " + occurances + " occurances(s) of word 'the'")

// /*Chapter no 26-30 */

// 26.1

// var numberInput = +prompt("Enter any positive integer: ");
// var roundOff = Math.round(numberInput)
// var numCeil = Math.ceil(numberInput);
// var numFloor = Math.floor(numberInput)
// document.write("Number: " + numberInput);
// document.write("<br/>Round Off: " + roundOff)
// document.write("<br/>Ceil Value: " + numCeil)
// document.write("<br/>Floor Value: " + numFloor)

// 26.2
// var numberInput = +prompt("Enter any negative floating value: ");
// var roundOff = Math.round(numberInput)
// var numCeil = Math.ceil(numberInput);
// var numFloor = Math.floor(numberInput)
// document.write("Number: " + numberInput);
// document.write("<br/>Round Off: " + roundOff)
// document.write("<br/>Ceil Value: " + numCeil)
// document.write("<br/>Floor Value: " + numFloor)

// 26.3

// var absoluteValue = prompt("Enter any integer: ");
// document.write("Absolute value of" + absoluteValue + " is " + Math.abs(absoluteValue));

// 26.4
// var randomValue = 6;
// document.write("Random Value: " + randomValue)
// document.write("<br/>Random dice value: " + Math.floor(Math.random(randomValue) * 10));

// 26.5
// var toss = 6;
// var coinToss = Math.floor(Math.random(toss) * 3)
// if (coinToss === 1) {
//     document.write("Value: " + coinToss)
//     document.write("<br/>Random coin value: Tails")
// } else if (coinToss === 2) {
//     document.write("Value: " + coinToss)
//     document.write("<br/>Random coin value: Heads")
// }

// // 26.6
// var randomNumber = Math.floor(Math.random() * 100);
// document.write("Random number between 1 and 100: " + randomNumber);

// 26.7
// var weight = prompt("Enter your weight in kilograms: ")
// var parsing = parseInt(weight)
// document.write("The weight of user is: " + parsing + " Kliograms")

// 26.8

// var secretNumber = 6;
// var userGuess = +prompt("Enter a number between 1 to 10: ");
// if (userGuess == secretNumber) {
//     window.alert("Congratulations")
// } else {
//     window.alert("Try Again!")
// }

/* Chapter # 31-34 */
// 31.1
// var today = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var months = new Array(12);
// months[0] = "Jan";
// months[1] = "Feb";
// months[2] = "Mar";
// months[3] = "Apr";
// months[4] = "May";
// months[5] = "June";
// months[6] = "July";
// months[7] = "Aug";
// months[8] = "Sep";
// months[9] = "Oct";
// months[10] = "Nov";
// months[11] = "Dec";

// var date = weekday[today.getDay()] + " " + months[today.getMonth()] + " " + today.getDate() + " " + today.getFullYear();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " GMT +0500(PKT)";
// var dateTime = date + ' ' + time;
// document.write(dateTime)

// 31.2
// var today = new Date();
// var months = new Array(12);
// months[0] = "Jan";
// months[1] = "Feb";
// months[2] = "Mar";
// months[3] = "Apr";
// months[4] = "May";
// months[5] = "June";
// months[6] = "July";
// months[7] = "Aug";
// months[8] = "Sep";
// months[9] = "Oct";
// months[10] = "Nov";
// months[11] = "Dec";

// window.alert("Current Month: " + months[today.getMonth()]);

// 31.3
// var today = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sun";
// weekday[1] = "Mon";
// weekday[2] = "Tues";
// weekday[3] = "Wed";
// weekday[4] = "Thu";
// weekday[5] = "Fri";
// weekday[6] = "Sat";
// window.alert("Today is: " + weekday[today.getDay()]);

// 31.4
// var today = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sun";
// weekday[1] = "Mon";
// weekday[2] = "Tues";
// weekday[3] = "Wed";
// weekday[4] = "Thu";
// weekday[5] = "Fri";
// weekday[6] = "Sat";

// if (weekday[today.getDay()] == "Sat" || weekday[today.getDay] == "Sun") {
//     document.write("Its a funday")
// } else {
//     document.write("Workday!")
// }
// 31.5
// var today = new Date();
// if (today.getDate() < 16) {
//     document.write("First fifteen days of month")
// } else {
//     document.write("last days of month")
// }

// 31.6

// 31.7
// var today = new Date();
// if (today.getTime() < 12) {
//     window.alert("Its AM")
// } else {
//     window.alert("Its PM")
// }

// 31.8
// var today = new Date(2020, 12, 31);
// var laterDate = today.getDay();
// alert(laterDate)

/* Chapter no 35 to 38 Tasks */
// 35.1
// function date() {
//     var today = new Date();
//     document.write(today)
// }
// date();

// 31.9

// var date1 = new Date("05/24/2020");
// var date2 = new Date("07/21/2020");

// var Difference_In_Time = date2.getTime() - date1.getTime();

// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// document.write(Difference_In_Days + " Days have passed by 1st Ramadan 2020 ");

// 31.10
// function seconds(d) {
//     return Math.floor(d / 1000);
// }

// // Driver Code 
// var d = new Date(2015, 1, 1, 22, 00, 00, 00);
// var sec = seconds(d);
// document.write("On reference Date " + d +
//     sec + " seconds had passed since begining of 2015.");

// 31.11

// var todayDate = new Date();
// document.write("Current Date and time: " + todayDate);

// var twoHoursBefore = new Date();
// document.write("<br>")
// document.write(todayDate.getHours() - 2);

// 31.13

// function getAge(d1, d2) {
//     d2 = d2 || new Date();
//     var diff = d2.getTime() - d1.getTime();
//     return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
// }
// console.log(getAge(new Date(1998, 1, 1)));

// 31.14

// var cName = prompt("Customer Name: ")
// var cMonth = prompt("Current Month: ")
// var cUnits = prompt("Enter Units: ")
// var chargesPerUnit = 16;
// var latePayment = 350;

// document.write("K-Electric Bill")
// document.write("<br>Customer Name: " + cName);
// document.write("<br>Bill Month: " + cMonth);
// document.write("<br>Number of Units: " + cUnits)
// document.write("<br>Charges per Unit: " + chargesPerUnit)
// document.write("<br>Net Amount Payable(Within due date): " + (cUnits * chargesPerUnit));
// document.write("<br>late Payment Surcharge: " + latePayment)
// document.write("<br>Gross Amount Payable(After due date): " + ((cUnits * chargesPerUnit) + latePayment));

//35.2
// var fName = prompt("Enter First name");
// var LName = prompt("Enter Last name");

// function name(fName, LName) {
//     var fullName = fName + LName;
//     document.write(fullName);
// }
// name(fName, LName);

//35.3
// var fNum = +prompt('Enter 1st num')
// var sNum = +prompt('Enter 2nd num')

// function add(fNum, sNum) {
//     var sum = fNum + sNum;
//     document.write("Sum = " + sum)
// }
// add(fNum, sNum)

//35.4
// var num1 = +prompt("Enter 1st value")
// var num2 = +prompt("Enter 2nd value")
// var operator = prompt("Enter Operator")

// function calculator(num1, num2, operator) {
//     var operation;
//     if (operator == "+") {
//         operation = num1 + num2
//         document.write("Addition: " + operation);
//     } else if (operator == '-') {
//         operation = num1 - num2;
//         document.write("Substraction: " + operation);
//     } else if (operator == "/") {
//         operation = num1 / num2;
//         document.write("Division: " + operation);
//     } else if (operator == "*") {
//         operation = num1 * num2;
//         document.write("Multiplication: " + operation);
//     } else {
//         document.write("Invalid operator")
//     }
// }

// calculator(num1, num2, operator);

// 35.5
// var val = +prompt("Enter a value to find its square");

// function square(val) {
//     var sq = val * val;
//     document.write("Square of num is: " + sq);
// }
// square(val);

// 35.6

// var num = +prompt("Enter Number for its factorial")
// var fact = 1;
// var i;

// function factorial(num) {
//     for (i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     document.write("Factorial of " + num + " is " + fact)
// }
// factorial(num);

// 35.7

// var start = +prompt("Start num for counting")
// var end = +prompt("End num for counting")
// var i;

// function counting(start, end) {
//     document.write("Counting: ")
//     for (i = start; i <= end; i++)
//         document.write(i + ",")
// }
// counting(start, end)

35.8

// function calculateHypotenuse() {

//     function calculateSquare(base, perp) {
//         var perpSq = perp * perp;
//         var baseSq = base * base;
//         document.write(perpSq, baseSq);
//     }
//     var hypo = perpSq + baseSq;
//     calculateSquare(2, 4);
// }
// calculateHypotenuse();
// 35.9
// var area;

// function area(width, height) {
//     area = width * height;
//     document.write("Area of triangle: " + area)
// }
// area(6, 2);

// 35.10
// var palindromeSt = prompt("Enter a string");
// var i;
// var palString = "";
// var stlength = palindromeSt.length;

// function palindrome(palindromeSt) {
//     for (i = stlength - 1; i >= 0; i--) {
//         palString = palString + palindromeSt.charAt(i);
//     }
//     document.write(palString + "<br>")
//     if (palString == palindromeSt) {
//         document.write("String is palindrome ")
//     } else if (palindromeSt != palString) {
//         document.write("String is not palindrome")

//     }
// }
// palindrome(palindromeSt);

// 35.11
// function uppercase(str) {
//     var array1 = str.split(' ');
//     var newarray1 = [];

//     for (var x = 0; x < array1.length; x++) {
//         newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
//     }
//     return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

// 35.12
// function longestWord(text) {
//     var wordArray = text.split(' ')
//     var maxLength = 0
//     var result = ''

//     for (var i = 0; i < wordArray.length; i++) {
//         if (wordArray[i].length > maxLength) {
//             maxLength = wordArray[i].length
//             result = wordArray[i]
//         }
//     }

//     return result
// }
// document.write(longestWord('Web Development Tutorial'))
// 35.13
// function charCount(str, letter) {
//     var letterCount = 0;
//     for (var position = 0; position < str.length; position++) {
//         if (str.charAt(position) == letter) {
//             letterCount += 1;
//         }
//     }
//     return letterCount;
// }

// document.write("Total num of specified character: " + charCount('JS Resources.com', 'o'));


// 35.14

// var pi = 3.142;

// function calcCircumference(radius) {
//     var circumference = 2 * pi * radius;
//     document.write("Circumference of circle is: " + circumference)
// }

// function calcArea(radius) {
//     var area = pi * radius * radius;
//     document.write("<br>Area is: " + area);
// }
// calcCircumference(4);
// calcArea(2);

/* Chapter 38 to 42 */

// 38.1
// function power(a, b) {
//     var result = 1;
//     while (b != 0) {
//         result = result * a;
//         b--;
//     }
//     document.write("REsult: " + result);
// }
// power(3, 3);

// 38.2
// var leap = prompt("Enter a year to check is it a leap year or not: ")

// function leapYear(leap) {

//     return (((leap % 4 == 0) && (leap % 100 != 0)) || leap % 400 == 0)
// }
// document.write("Result: " + leapYear(leap));

// 38.3
// var area;

// function areaOfTriangle(a, b, c) {
//     var s;
//     s = (a + b + c) / 2;
//     area = s * (s - a) * (s - b) * (s - c);
//     return area;
// }
// document.write("Area of triangle: " + areaOfTriangle(2, 2, 2));

// 38.4
// var marks1 = 40;
// var marks2 = 50;
// var marks3 = 60;
// var avg;
// var per;
// var totalMarks = 300;

// function mainFunction() {

//     document.write("Average: " + average(marks1, marks2, marks3))
//     document.write("<br>Percentage" + percentage(marks1, marks2, marks3) + "%")

// }

// function average(marks1, marks2, marks3) {
//     avg = (marks1 + marks2 + marks3) / 3;
//     return avg;
// }

// function percentage(marks1, marks2, marks3) {
//     per = ((marks1 + marks2 + marks3) / 300) * 100;
//     return per;
// }
// mainFunction();

// 38.5
// 38.6
// var string = "heelloo world";
// var vowel = ["a", "e", "i", "o", "u"];

// function vowels() {
//     var i;
//     for (i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for (j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//                 j--;
//                 secondLoop--;
//             }

//         }
//     }
// }
// vowels();
// document.write("String without vowels: " + string)

// 38.7
// const def = "Pleases read this application and give me gratuity";
// const answer = getResult(def);
// document.write('The vowels in succetion are ' + answer + ' times');

// function getResult(input) {
//     const words = input.split(' ');
//     let finalResult = 0;
//     words.forEach((word) => {
//         if (countVowelPair(word) > 0) {
//             finalResult++;
//         }
//     });

//     return finalResult;
// }

// function countVowelPair(word) {
//     let count = 0;
//     for (let i = 1; i < word.length; i++) {
//         if (isVowel(word[i]) && isVowel(word[i - 1])) {
//             count++;
//         }
//     }
//     return count;
// }

// function isVowel(char) {
//     let result = false;
//     switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             result = true;
//             break;

//         default:
//             break;
//     }

//     return result;
// }

// 38.8
// var km = +prompt("Enter Distance in KM: ");

// function meters(km) {
//     var meters = km * 1000;
//     document.write("Meters: " + meters)
// }

// function feet(km) {
//     var feet = km * 3280.84;
//     document.write("<br>Feet: " + feet)
// }

// function inches(km) {
//     var inches = km * 39370.1;
//     document.write("<br>Inches: " + inches);
// }

// function centimeters(km) {
//     var centimeters = km * 100000;
//     document.write("<br>Centimeters: " + centimeters)
// }
// meters(km);
// feet(km);
// inches(km);
// centimeters(km);

// 38.9
// var rate = 12.00;
// var hours = prompt("Enter no of hours of overtime: ")

// function overTime(hours) {
//     var oTime = hours * rate;
//     document.write("Over time pay is : " + oTime)
// }
// overTime(hours);

//38.10
// function currencyDenomination() {
//     var cash = prompt("Enter Amount to withdraw: ");
//     var hundred = parseInt(cash / 100);
//     var fifty = parseInt((cash % 100) / 50);
//     var ten = parseInt(((cash % 100) % 50) / 10);
//     document.writeln('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

// }
// currencyDenomination();


/* Chapter 43 to 48 */
// 43.1
// function showNot() {
//     window.alert("This is a on click event")
// }

// 43.2
// function purchase() {
//     window.alert("Thanks for purchasing a phone from us")
// }

// 43.3
// function SomeDeleteRowFunction(o) {
//     var p = o.parentNode.parentNode;
//     p.parentNode.removeChild(p);
// }
// 43.4
// function changePic1() {
//     document.getElementById("myImg").src = "spic.jpg";
// }
// function changePic2() {
//     document.getElementById("myImg").src = "fpic.jpg";
// }

// 43.5
// var counter = 0;

// function onClick() {
//     counter += 1;
//     document.getElementById("counter").innerHTML = counter;
// };

// function decrease() {
//     counter -= 1;
//     document.getElementById("decCounter").innerHTML = counter;
// }

/*Chapter 49 to 52 */

// 49.1

// function getInputValue() {
//     var fname = document.getElementById("fname").value;
//     var lname = document.getElementById("lname").value;
//     var password = document.getElementById("password").value;

//     document.write("First Name: " + fname);
//     document.write("<br>Last Name: " + lname);
//     document.write("<br>Password: " + password);
// }

// 49.2
// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// 49.3
// function addRow(tableID) {

//     var table = document.getElementById(tableID);

//     var rowCount = table.rows.length;
//     var row = table.insertRow(rowCount);

//     var cell1 = row.insertCell(0);
//     var element1 = document.createElement("input");
//     element1.type = "checkbox";
//     element1.name = "chkbox[]";
//     cell1.appendChild(element1);

//     var cell2 = row.insertCell(1);
//     cell2.innerHTML = rowCount + 1;

//     var cell3 = row.insertCell(2);
//     var element2 = document.createElement("input");
//     element2.type = "text";
//     element2.name = "txtbox[]";
//     cell3.appendChild(element2);


// }

// function deleteRow(tableID) {
//     try {
//         var table = document.getElementById(tableID);
//         var rowCount = table.rows.length;

//         for (var i = 0; i < rowCount; i++) {
//             var row = table.rows[i];
//             var chkbox = row.cells[0].childNodes[0];
//             if (null != chkbox && true == chkbox.checked) {
//                 table.deleteRow(i);
//                 rowCount--;
//                 i--;
//             }


//         }
//     } catch (e) {
//         alert(e);
//     }
// }

/*Chapter 58 to 67 */
// Task i
// function getElement() {
//     var d = document.getElementById("main-content");
//     console.log(d)
// }

//Task ii
// function childElement() {
//     var d = document.getElementById("main-content");
//     console.log(d.childNodes)
// }

// Task iii