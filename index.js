const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter temperature in Celsius: ', temp => {
    const fahrenheit = (temp * 9/5) + 32;
    console.log(`${temp}°C is ${fahrenheit}°F`);
    readline.close();
  });
  