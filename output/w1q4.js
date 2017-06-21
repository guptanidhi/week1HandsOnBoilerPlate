/*Q4:  Write a Javascript program to calculate the number of days left 
	untill your next New year? 
*/

// Declare 5 variables like newYearMonth, newYearDate, today, newYearDay, diff and days

// Initialize 'newYearMonth' to 1 for Jan

// Initialize 'newYearDate' to 1

// define variable 'today' with current date

// define 'newYearDay' with new Date(today full year, newYearMonth-1, newYearDate) (month-1 because month starting from 0 index)

// Put Condition if today getTime is greater than bday getTime 
// than setFullYear for 'newYearDay' to +1 so we can calculate for next year birthday

// Define variable 'diff' from newYearDay getTime and today getTime

// Define variable 'days' by dividing it by (1000*60*60*24) 
// i.e (milliseconds, seconds, minutes, hours) & rounding to floor

// Print number of days untill next new year

module.exports = 0;