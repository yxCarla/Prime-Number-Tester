function testPrime() { 
            
var prime = true; 
var n = document.form.n.value;
var output = document.getElementById('output');

for(i = 2; i < n; i++) 
    if (n % i == 0) { 
      prime = false; 
      break; 
    } 
    if (n == 1) {
      prime = false;
    }
    if (n == 0) {
      prime = false;
    }
    if (prime == true) 
      output.innerHTML =  n + ' is prime';
    else
      output.innerHTML =  n + ' is not prime';
 }
