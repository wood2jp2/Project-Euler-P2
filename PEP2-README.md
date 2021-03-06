PEP2-README.md

Project Euler - Problem #2

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

PERSONAL NOTES:

Took a bit longer than problem 1...Solved by assigning two variables. The first was an array that I named fib, short for fibonacci of course. I only assigned the first two numbers [1, 2], and I let the actual function take care of the rest. Using a while loop, as we knew to end once 4,000,000 was hit, I embedded an if statement to check if the latest value in the array was even (using module). If it was, I added that to 'evenTotal', printed the result, and then populated the next value of the fibonacci sequence. Capping it off with the else statement, I simply had the value populate the next fib value, as opposed to adding it. After the function runs, you'll see that the evenTotal variable now has a value of 4,613,732.