import React from "react";
import classes from "./index.module.css";
import problemImage from "../../assets/problems/maximum-subarray.png";
import CodeBlock from "../../HOC/codeBlock/codeBlock";

const solution1 = `
public int maximumSubarray(int[] Arr) {'{'}
  int n = Arr.length;
  int max = Integer.MIN_VALUE;

  for(int i=1;i<n-1;i++){
    int sum = 0;
    for(int j=i;j<n;j++){ //start the loop from ith index
      sum += Arr[j]; 
    }    
    max = Math.max(max,sum);
  }
  return max;
}
`.trim();

const solution2 = `
public int numIdenticalPairs(int[] Arr) {
  int n = Arr.length;
  int max = Integer.MIN_VALUE;
  int sum = 0;

  for(int i=0;i<n;i++){
    sum = sum + a[i]; //add the current element to the sum.

    if (max < sum) //Update max to store curreent maximum sum
      max = sum; 

    if (sum < 0) //if sum is negative set it to zero
      sum = 0; 
  } 
  return max;
}
`.trim();

export default function maximumSubarray() {
  return (
    <div className={classes.Content}>
      <div className={classes.Question}>Maximum Subarray</div>
      <img
        alt="Maximum Subarray"
        className={classes.ProblemImage}
        src={problemImage}
      ></img>
      <div className={classes.SolutionBlock}>
        <div className={classes.Solution}>Solution 1:</div>
        <div className={classes.Answer}>
          Brute force approach. Find the sum of all the sub arrays and update
          maxSum. For every index loop through the array and calculate the
          maxSum. Check for max after calculating sum of each subarray.
        </div>
        <div>
          <CodeBlock>
            {solution1}
          </CodeBlock>
        </div>
        <div className={classes.Answer}>
          <b>
            Time Complexity: O(n<sup>2</sup>){" "}
          </b>
          Since we use 2 for loops time complexity will be O(n<sup>2</sup>).
        </div>
      </div>
      <div className={classes.SolutionBlock}>
        <div className={classes.Solution}>Solution 2:</div>
        <div className={classes.Answer}>
          <b>Kadane's algorithm: </b>In this algorithm we use 2 variables to
          store maximum_sum and sum_so_far. We iterate over the array once, at
          each iteration we add the number to sum_so_far and update max if{" "}
          <code>max &lt; sum_so_far</code>. Then we check if{" "}
          <code>sum_so_far &lt; 0</code> then we set sum_so_far to 0.
        </div>
        <div>
          <CodeBlock>
            {solution2}
          </CodeBlock>
        </div>
        <div className={classes.Answer}>
          <b>Time Complexity: O(n) </b>we iterate over the array once so O(n).
          Hence the final complexity will be O(nlogn).
        </div>
      </div>
    </div>
  );
}
