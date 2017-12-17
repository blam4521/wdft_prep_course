// Exercise #1
// Write your solution below
for (var i='#'; i.length<8; i=i+'#')
    console.log(i);

/* 
Write your explanation for Exercise #1 here
// We can use a for loop for this problem since it looks like the hashtag string pattern is 
// incrementing one up on every new line.  We first set the inital string value '#' then we set the
// use the .length method to find the length of the string to see if it is less then 8.  Next we set the
// increment to add one string value of '#'.  So on the next iteration of the loop it will add one more hashtag character.
// The loop iterates over until the length of the hastag characters no longer meets the condition, thus exiting the for loop
*/





// Exercise #2
// Write your solution below
function isEven(number) {
    if (number % 2 == 0) {
        console.log('the number is even!')
    }
    else {
        console.log('the number is odd!')
    } 
	// console.log('the number is even!')
	// console.log('the number is odd!')
};

isEven(8)
isEven(11)
/* 
Write your explanation for Exercise #2 here
// the number % 2 == 0 method allows the function to test if there are any remainder after dividing the user input by 2
// if the remainder is 0 then we know the number must be even otherwise it is a odd number.

*/
