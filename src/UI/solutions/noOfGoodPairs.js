import React from "react";
import classes from "../../containers/content/content.module.css";
import problemImage from "../../assets/problems/no-of-good-pairs.png";
import CodeBlock from "../../HOC/codeBlock/codeBlock";

export default function noOfGoodPairs() {
  return (
    <div className={classes.Content}>
      <div className={classes.Question}>Number of Good Pairs</div>
      <img
        alt="Number of Good Pairs"
        className={classes.ProblemImage}
        src={problemImage}
      ></img>
      <div className={classes.SolutionBlock}>
        <div className={classes.Solution}>Solution 1:</div>
        <div className={classes.Answer}>
          Brute force approach. For every index loop through the array to find a
          match. Increment the count if 2 index have same value.
        </div>
        <div>
          <CodeBlock>
            <code>
              {`public int numIdenticalPairs(int[] Arr) {
  int n = Arr.length;
  int count = 0;

  for(int i=1;i<n-1;i++){
      for(int j=i+1;j<n;j++){
        if(Arr[i] == Arr[j]) {
            //increase count if both the elements are same.//
            count++;  
        }
      }
  }

  return count;
}`}
            </code>
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
          In this approach we will first sort the array. Then we will compare
          each index with the next index. Arr[i] == Arr[i+1]. If both are same
          then we will increae the tempCount by 1. If both are different then we
          will the number of pairs that can be formed using the temp count and
          add it to the finalCount.{" "}
          <code>(tempCount * (tempCount - 1)) / 2</code>. Then we will set
          tempCount to 1.
        </div>
        <div>
          <CodeBlock>
            <code>
              {`public int numIdenticalPairs(int[] Arr) {
  int n = Arr.length;
  int finalCount = 0;
  int tempCount = 1;
  Arrays.sort(Arr);

  for(int i=0;i<n-1;i++){
    if(Arr[i] == Arr[i+1]){
        tempCount++;
    } else {
        finalCount += (tempCount * (tempCount - 1)) / 2;
        tempCount = 1;
    }
  }

  /* if tempCount is > 1 then we need to 
  add the no of pairs to the finalCount */
  finalCount += (tempCount * (tempCount - 1)) / 2;
  return finalCount;
}`}
            </code>
          </CodeBlock>
        </div>
        <div className={classes.Answer}>
          <b>Time Complexity: O(nlogn) </b>Best sorting algorith has time
          complexity of O(nlogn). After sorting we iterate over the array once
          so O(n). Hence the final complexity will be O(nlogn).
        </div>
      </div>
      <div className={classes.SolutionBlock}>
        <div className={classes.Solution}>Solution 3:</div>
        <div className={classes.Answer}>
          For this solution we need to create an frequency array that counts the
          number of occurence of a number. At every iteration we add the count
          of the number in that index to the final count.
          <code> finalCount += frequency[Arr[i]];</code>
        </div>
        <div>
          <CodeBlock>
            <code>
              {`public int countSum(int[] Arr) {
  int finalCount = 0;
  int[] frequency = new int[101];

  for(int i=0;i<Arr.length;i++){

      // add the count of the number at index i to the final count //
      finalCount += frequency[Arr[i]];

      // increment the number in the frequency array //
      frequency[Arr[i]]++;
  }

  return finalCount;
}`}
            </code>
          </CodeBlock>
        </div>
        <div className={classes.Answer}>
          <b>Time Complexity: O(n) </b>Since we iterate over each element of
          array once the time complexity will be O(n).
        </div>
      </div>
    </div>
  );
}
