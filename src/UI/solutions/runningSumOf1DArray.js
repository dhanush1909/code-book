import React from "react";
import classes from "../../containers/content/content.module.css";
import problemImage from "../../assets/problems/running_sum_1d_array.png";
import CodeBlock from "../../HOC/codeBlock/codeBlock";

const solution1 = `
public int[] countSum(int[] Arr) {
  int n = Arr.length;
  for(int i=1;i<n;i++){
    Arr[i]=Arr[i]+Arr[i-1];
  }
  return Arr;
}
`
  .trim();
export default function runningSumOf1DArray() {
  return (
    <div className={classes.Content}>
      <div className={classes.Question}>
        Caluculate running sum of the array
      </div>
      <img
        alt="Running sum of 1d array"
        className={classes.ProblemImage}
        src={problemImage}
      ></img>
      <div className={classes.Solution}>Solution 1:</div>
      <div className={classes.Answer}>
        We will use the input array and modify it, and return it as the
        solution. That way, we don’t have to create a new array. For every index
        of the array we need to add it with the previous index. Arr[i] = Arr[i]
        + Arr[i-1].
      </div>
      <div>
        <CodeBlock>
          {solution1}
        </CodeBlock>
      </div>
      <div className={classes.Answer}>
        <b>Time Complexity: O(n) </b>Since we iterate over each element of array
        once the time complexity will be O(n).
      </div>
    </div>
  );
}
