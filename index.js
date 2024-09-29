
// Given batteryBatches array
const batteryBatches = [4, 5, 3, 4, 4, 6, 5]; 

// Use reduce to sum all battery amounts
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries); // This should log the total number of batteries
