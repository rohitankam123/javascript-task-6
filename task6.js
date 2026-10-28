 // Part 1: Array Higher-Order Methods

// Q1. Use forEach() to print each number.
let numbers1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numbers1.forEach(function(number) {
    console.log(number);
});

// Output: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

// Q2. Use map() to multiply every number by 5.
let numbers2 = [1, 2, 3, 4, 5];

let multipliedNumbers = numbers2.map(function(number) {
    return number * 5;
});

console.log(multipliedNumbers);
// Output: [5, 10, 15, 20, 25]

// Q3. Use filter() to get numbers greater than 20.
let numbers3 = [10, 25, 15, 30, 40, 5];

let greaterNumbers = numbers3.filter(function(number) {
    return number > 20;
});

console.log(greaterNumbers);
// Output: [25, 30, 40]

// Q4. Display employees whose salary is <= ₹300,000.
let employees = [
    { name: "Rohith", salary: 250000 },
    { name: "Arun", salary: 350000 },
    { name: "Kumar", salary: 200000 },
    { name: "Rahul", salary: 400000 }
];

let filteredEmployees = employees.filter(function(employee) {
    return employee.salary <= 300000;
});

console.log(filteredEmployees);
// Output: Rohith (250000), Kumar (200000)

// Q5. Find the first employee whose salary is > ₹200,000.
let selectedEmployee = employees.find(function(employee) {
    return employee.salary > 200000;
});

console.log(selectedEmployee);
// Output: { name: "Rohith", salary: 250000 }


// Q6. Use reduce() to calculate the total.
let numbers4 = [10, 20, 30, 40, 50];

let total = numbers4.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log(total);
// Output: 150


// Q7. Use some() to check whether at least one number is even.
let numbers5 = [1, 3, 5, 8, 9];

let hasEvenNumber = numbers5.some(function(number) {
    return number % 2 === 0;
});

console.log(hasEvenNumber);
// Output: true


// Q8. Use every() to check whether all numbers are positive.
let numbers6 = [10, 20, 30, 40, 50];

let allPositive = numbers6.every(function(number) {
    return number > 0;
});

console.log(allPositive);
// Output: true


// Q9. Sort numbers in ascending order.
let numbers7 = [50, 10, 40, 20, 30];

numbers7.sort(function(a, b) {
    return a - b;
});

console.log(numbers7);
// Output: [10, 20, 30, 40, 50]


// Q10. Sort numbers in descending order.
let numbers8 = [50, 10, 40, 20, 30];

numbers8.sort((a, b) => b - a);

console.log(numbers8);
// Output: [50, 40, 30, 20, 10]

// ----------Part 2: String Methods-------------

// Q11. Print the character at index 4 using charAt().
let text1 = "javascript";

console.log(text1.charAt(4));
// Output: s


// Q12. Find the character code at index 2 using charCodeAt().
let text2 = "javascript";

console.log(text2.charCodeAt(2));
// Output: 118


// Q13. Remove extra spaces using trim().
let text3 = "   Hello JavaScript   ";

console.log(text3.trim());
// Output: Hello JavaScript


// Q14. Convert a string to uppercase and lowercase.
let text4 = "JavaScript";

console.log(text4.toUpperCase());
// Output: JAVASCRIPT

console.log(text4.toLowerCase());
// Output: javascript


// Q15. Check whether a string contains "script".
let text5 = "I am learning javascript";

console.log(text5.includes("script"));
// Output: true


// Q16. Check whether a string starts with "Java"
// and ends with "Script".
let text6 = "JavaScript";

console.log(text6.startsWith("Java"));
// Output: true

console.log(text6.endsWith("Script"));
// Output: true


// Q17. Replace every occurrence of "java" with "python".
let text7 = "java is easy and java is popular";

console.log(text7.replaceAll("java", "python"));
// Output: python is easy and python is popular


// Q18. Split a string into an array using split().
let text8 = "html-css-javascript-react";

let languages = text8.split("-");

console.log(languages);
// Output: ["html", "css", "javascript", "react"]


// Q19. Convert an array of names into a string using join().
let names = ["Rohith", "Arun", "Kumar"];

console.log(names.join(","));
// Output: Rohith,Arun,Kumar


// Q20. Extract a portion of a string using slice().
let text9 = "JavaScript";

console.log(text9.slice(0, 4));
// Output: Java

// Part 3: Date Methods

// Q21. Print the current year, month, date, and day.
let today = new Date();

console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Date:", today.getDate());
console.log("Day:", today.getDay());

// Output: Depends on the current date.
// Month is 1-12; day is 0 (Sunday) to 6 (Saturday).


// Q22. Display the current month name using getMonth().
let months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

let currentMonth = new Date().getMonth();

console.log("Current Month:", months[currentMonth]);
// Output: Depends on the current month.


// Q23. Print current hours, minutes, and seconds.
let currentTime = new Date();

console.log("Hours:", currentTime.getHours());
console.log("Minutes:", currentTime.getMinutes());
console.log("Seconds:", currentTime.getSeconds());

// Output: Depends on the current time.


// Q24. Change the year, month, and date using setter methods.
let myDate = new Date();

myDate.setFullYear(2003);
myDate.setMonth(0);
myDate.setDate(30);

console.log("Updated Date:", myDate);
// Output: A date in January 2003, on or around January 30.
// If the original day was 31, the date can roll into February.


// Part 4: Asynchronous JavaScript

// Q25. Print a message after 3 seconds.
setTimeout(function() {
    console.log("Welcome to JavaScript");
}, 3000);

// Output after 3 seconds: Welcome to JavaScript


// Q26 and Q27. Print every 2 seconds and stop after 8 seconds.
let interval = setInterval(function() {
    console.log("Learning JavaScript");
}, 2000);

setTimeout(function() {
    clearInterval(interval);
    console.log("Interval stopped");
}, 8000);

// Output: Learning JavaScript every 2 seconds,
// then Interval stopped after 8 seconds.


// Q28. Observe the output order.
function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

function three() {
    console.log("Three");
}

one();
setTimeout(two, 0);
three();

// Output:
// One
// Three
// Two

// Part 5: Promises and API Fetching

// Q29. Create a Promise that resolves with "Login successful".
let promise1 = new Promise(function(resolve, reject) {
    resolve("Login successful");
});

promise1.then(function(result) {
    console.log(result);
});

// Output: Login successful


// Q30. Create a Promise that rejects with "Invalid password".
let promise2 = new Promise(function(resolve, reject) {
    reject("Invalid password");
});

promise2.catch(function(error) {
    console.log(error);
});

// Output: Invalid password


// Q31. Use finally() to print "Process completed".
let promise3 = new Promise(function(resolve, reject) {
    resolve("Task successful");
});

promise3
    .then(function(result) {
        console.log(result);
    })
    .finally(function() {
        console.log("Process completed");
    });

// Output:
// Task successful
// Process completed


// Q32. Fetch product titles from the Fake Store API.
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        products.forEach(function(product) {
            console.log(product.title);
        });
    });

// Output: Prints all product titles from the API.


// Q33. Print each product's title, price, and category.
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        products.forEach(function(product) {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
        });
    });

// Output: Prints the title, price, and category of each product.


// Q34. Handle API errors using catch() and console.warn().
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        if (!response.ok) {
            throw new Error("API request failed");
        }
        return response.json();
    })
    .then(function(products) {
        console.log("Products received:", products.length);
    })
    .catch(function(error) {
        console.warn("Error:", error.message);
    });

// Output: Prints the product count or a warning if an error occurs.


// Q35. Use finally() after the fetch process.
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        if (!response.ok) {
            throw new Error("API request failed");
        }
        return response.json();
    })
    .then(function(products) {
        console.log("Products received:", products.length);
    })
    .catch(function(error) {
        console.warn("Error:", error.message);
    })
    .finally(function() {
        console.log("API call completed");
    });

// Output: API call completed
// This prints whether the request succeeds or fails.

// Part 6: Real-Time Mini Tasks

// Q36. Employee salary report.
let employees36 = [
    { name: "Arun", salary: 250000 },
    { name: "Kumar", salary: 350000 },
    { name: "Priya", salary: 280000 },
    { name: "Rahul", salary: 400000 }
];

let selectedEmployees36 = employees36.filter(function(employee) {
    return employee.salary < 300000;
});

selectedEmployees36.forEach(function(employee) {
    console.log("Name:", employee.name, "Salary:", employee.salary);
});

// Output:
// Name: Arun Salary: 250000
// Name: Priya Salary: 280000


// Q37. Product price calculator.
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        let productDetails37 = products.map(function(product) {
            return {
                title: product.title,
                price: product.price
            };
        });

        console.log("Product titles and prices:", productDetails37);
    })
    .catch(function(error) {
        console.warn("Q37 Error:", error.message);
    });

// Output: Array containing product titles and prices.


// Q38. Product search by category.
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        let category38 = "jewelery";

        let filteredProducts38 = products.filter(function(product) {
            return product.category === category38;
        });

        console.log("Category:", category38);
        console.log("Matching products:", filteredProducts38);
    })
    .catch(function(error) {
        console.warn("Q38 Error:", error.message);
    });

// Output: Products belonging to the jewelery category.


// Q39. Number analysis.
let numbers39 = [5, 10, 15, 20, 25];

let doubledNumbers39 = numbers39.map(function(number) {
    return number * 2;
});
console.log("Doubled:", doubledNumbers39);

let greaterNumbers39 = numbers39.filter(function(number) {
    return number > 10;
});
console.log("Greater than 10:", greaterNumbers39);

let total39 = numbers39.reduce(function(sum, number) {
    return sum + number;
}, 0);
console.log("Total:", total39);

let hasEven39 = numbers39.some(function(number) {
    return number % 2 === 0;
});
console.log("Has an even number:", hasEven39);

let allPositive39 = numbers39.every(function(number) {
    return number > 0;
});
console.log("All numbers are positive:", allPositive39);

// Output:
// Doubled: [10, 20, 30, 40, 50]
// Greater than 10: [15, 20, 25]
// Total: 75
// Has an even number: true
// All numbers are positive: true


// Q40. Product listing with error handling.
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        if (!response.ok) {
            throw new Error("API request failed");
        }
        return response.json();
    })
    .then(function(products) {
        products.forEach(function(product) {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
        });
    })
    .catch(function(error) {
        console.warn("Q40 Error:", error.message);
    })
    .finally(function() {
        console.log("Q40: Product listing completed");
    });

// Output: Product details followed by the completion message.