import React from "react";
import classes from "./index.module.css";
import problemImage from "../../assets/problems/find-the-duplicate-number.png";
import CodeBlock from "../../HOC/codeBlock/codeBlock";

const solution1 = `
public int findDuplicate(int[] Arr) {
  int n = Arr.length;

  for(int i=0;i<n;i++){
    int count = 0;
    for(int j=0;j<n;j++){ 
      if(Arr[j] == Arr[i])
        count++; 
    }    
    if(count == 2)
        return Arr[i];
  }
  return -1;
}
`.trim();

const solution2 = `
public int findDuplicate(int[] Arr) {
  int n = Arr.length;
  HashSet<Integer> numbers = new HashSet<>();

  for(int i=0;i<n;i++){
    if(!numbers.contains(Arr[i])) {
        numbers.add(Arr[i]);  //Add to HashSet
    } else {
        return Arr[i]; //duplicate number
    }
  } 
  return -1;
}
`.trim();

const solution3 = `
public static int findDuplicate(int[] Arr) 
{ 
    // Find the intersection  
    // point of the slow and fast. 
    int slow = arr[0]; 
    int fast = arr[0]; 
    
    do {
        slow = Arr[slow];
        fast = Arr[fast];
    } while (slow != fast);
    
    // Find the "entrance" 
    // to the cycle. 
    int slow = arr[0]; 
    while (slow != fast)  
    { 
        slow = arr[slow]; 
        fast = arr[fast]; 
    } 
  
    return slow; 
} 
`.trim();


export default function findTheDuplicateNumber() {
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
                    Brute force approach. Use 2 loops, for every index
                    check if the number present in the array twice.
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
                    <b>Using HashSet:</b> &nbsp; Loop through the array once.
                    If number is not present in the HashSet add it to the set.
                    If the number is  already present in the list it's a duplicate number.
                </div>
                <div>
                    <CodeBlock>
                        {solution2}
                    </CodeBlock>
                </div>
                <div className={classes.Answer}>
                    <b>Time Complexity: O(n) </b>we iterate over the array once so O(n).
                    Hence the final complexity will be O(nlogn).<br />
                    <b>Space Complexity: O(n) </b>
                </div>
            </div>
            <div className={classes.SolutionBlock}>
                <div className={classes.Solution}>Solution 3:</div>
                <div className={classes.Answer}>
                    Firstly, the constraints of this problem imply that a cycle must exist.
                    Because each number in an array arr[] is between 1 and n, it will necessarily point to an index that exists.
                    Therefore, the list can be traversed infinitely, which implies that there is a cycle.
                    Additionally, because 0 cannot appear as a value in an array arr[], arr[0] cannot be part of the cycle.
                    Therefore, traversing the array in this manner from arr[0] is equivalent to traversing a cyclic linked list.
                </div>
                <div>
                    <CodeBlock>
                        {solution3}
                    </CodeBlock>
                </div>
                <div className={classes.Answer}>
                    <b>Time Complexity: O(n) </b>we iterate over the array once so O(n).
                    Hence the final complexity will be O(nlogn).<br />
                    <b>Space Complexity: O(1) </b> We do not use any extra space.
                </div>
            </div>
        </div>
    );
}
