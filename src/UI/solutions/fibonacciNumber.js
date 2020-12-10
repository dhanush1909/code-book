import React from "react";
import classes from "./index.module.css";
import problemImage from "../../assets/problems/fibonacci-number.png";
import CodeBlock from "../../HOC/codeBlock/codeBlock";
import fibTreeImage from "../../assets/solutions/fibonacciNumber/fib-tree.png"
import fibTreeDpImage from "../../assets/solutions/fibonacciNumber/fib-tree-dp.png"

const solution1 = `
public int fib(int N) {
    if (N <= 1) {
        return N;
    }
    return fib(N-1) + fib(N-2);
}
`.trim();

const solution2 = `
public int fib(int N) {
    int[] dp = new int[N+1];
    return rec(N,dp);
}

public int rec(int n, int[] dp) {
    if(n == 0) return 0;
    if(n == 1) return 1;
    if(dp[n] != 0) return dp[n];
    
    dp[n] = rec(n - 1,dp) + rec(n - 2,dp);
    return dp[n];
}
`.trim();

const solution3 = `
public int fib(int N) {
    if (N <= 1) {
        return N;
    }
    return memoize(N);
}

public int memoize(int N) {
  int[] cache = new int[N + 1];
  cache[1] = 1;

  for (int i = 2; i <= N; i++) {
      cache[i] = cache[i-1] + cache[i-2];
  }
  return cache[N];
}
`.trim();




export default function fibonacciNumber() {
    return (
        <div className={classes.Content}>
            <div className={classes.Question}>Fibonacci number</div>
            <img
                alt="Fibonacci number"
                className={classes.ProblemImage}
                src={problemImage}
            ></img>
            <div className={classes.SolutionBlock}>
                <div className={classes.Solution}>Solution 1:</div>
                <div className={classes.Answer}>
                    Use recursion to compute the Fibonacci number of a given integer.
                    <ul>
                        <li>
                            Check if the provided input value, N, is less than or equal to 1. If true, return N.
                        </li>
                        <li>
                            Otherwise, the function fib(int N) calls itself, with the result of the 2 previous numbers being added to each other, passed in as the argument.
                            This is derived directly from the recurrence relation: fib(n) = fib(n - 1) + fib(n - 2);
                        </li>
                        <li>
                            Do this until all numbers have been computed, then return the resulting answer.
                        </li>
                    </ul>
                    <img
                        alt="Fibonacci number"
                        className={classes.SolutionImage}
                        src={fibTreeImage}
                    ></img>
                </div>
                <div>
                    <CodeBlock>
                        {solution1}
                    </CodeBlock>
                </div>
                <div className={classes.Answer}>
                    <b>
                        Time Complexity: O(2<sup>n</sup>){" "}
                    </b>
                    We start the computation from the top node and go down the tree until we reach the base case. From the recursive tree,
                    we can notice that at each level the number of nodes is equal to twice the number of nodes in the previous level. At root,
                    there is only 1 node but at the 1st level there are 2 nodes and then 4,8,16 and so on.
                    For fib of 10 the time complexities will be 2¹⁰ since we need to go 10 levels deep and at each level the number of nodes
                    doubles because of the branching logic.
                    From this pattern, we can conclude that the time complexity is O(2<sup>n</sup>).
                    <b>Space Complexity: O(n) </b>
                </div>
            </div>

            <div className={classes.SolutionBlock}>
                <div className={classes.Solution}>Solution 2:</div>
                <div className={classes.Answer}>
                    Optimizing a brute force recursive problem starts by identifying the repeating subproblems.
                    From the above recursive chart, we can notice that the 4th, 3rd, 2nd Fibonacci numbers
                    are computed more than once. If we store the result of these computations
                    we can avoid finding the value more than once. <br></br>
                    <img
                        alt="Fibonacci number"
                        className={classes.SolutionImage}
                        src={fibTreeDpImage}
                    ></img><br />
                    In the above diagram, all nodes in blue are computed once,
                    the nodes in yellow are reused and the nodes in red are not computed. <br />
                    By using an array to store the already computed values reduces the number of recursive calls made.
                    This reduces the time complexity from exponential to linear.
                </div>
                <div>
                    <CodeBlock>
                        {solution2}
                    </CodeBlock>
                </div>
                <div className={classes.Answer}>
                    <b>Time Complexity: O(n) </b>The number of recursive calls made is reduced to 2 x n which reduces the time complexity to O(2n),
                    by eliminating the constant the time complexity is O(n)<br />
                    <b>Space Complexity: O(n) </b>
                </div>
            </div>
            <div className={classes.SolutionBlock}>
                <div className={classes.Solution}>Solution 3:</div>
                <div className={classes.Answer}>
                    <ul>
                        <li>
                            If N is less than or equal to 1, return N
                        </ li>
                        <li>
                            Otherwise, iterate through N, storing each computed answer in an array along the way.
                        </li>
                        <li>
                            Use this array as a reference to the 2 previous numbers to calculate the current Fibonacci number.
                        </li>
                        <li>
                            Once we've reached the last number, return it's Fibonacci number.
                        </li>
                    </ul>
                </div>
                <div>
                    <CodeBlock>
                        {solution3}
                    </CodeBlock>
                </div>
                <div className={classes.Answer}>
                    <b>Time Complexity: O(n) </b><br></br>
                    <b>Space Complexity: O(n) </b> We use array to store the values.
                </div>
            </div>
        </div>
    );
}
