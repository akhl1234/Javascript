const now = new Date();
// Get the current time in that mostly uses 
const currentTimeString = now.toLocaleTimeString();

// Get the current time's components
const currentHour = now.getHours();
const currentMinute = now.getMinutes();
const currentSecond = now.getSeconds();
const currentMillisecond = now.getMilliseconds();

// Display the current time
console.log(`Current Time (milliseconds): ${currentTimeMillis}`);
console.log(`Current Time (string): ${currentTimeString}`);

