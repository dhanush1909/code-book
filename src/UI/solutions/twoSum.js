import React from "react";
import classes from "./index.module.css";
import problemImage from "../../assets/problems/two-sum.png";
import CodeBlock from "../../HOC/codeBlock/codeBlock";

const solution1 = `
public int maximumSubarray(int[] Arr, int target) {
  int n = Arr.length;

  for(int i=0;i<n;i++){
    for(int j=i+1;j<n;j++){ 
      if(Arr[i] + Arr[j] == target)
        return new int[] {j, i};
    }    
  }
  return new int[] {-1,-1};
}
`.trim();

const solution2 = `
public int singleNumber(int[] nums, int target) {
    int n = nums.length;
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if(map.containsKey(complement))
            return new int[] {map.get(complement), i};
        map.put(nums[i], i);
    }
}
`.trim();

export default function twoSum() {
    return (
        <div className={classes.Content}>
            <div className={classes.Question}>Two Sum</div>
            <img
                alt="Single Number"
                className={classes.ProblemImage}
                src={problemImage}
            ></img>
            <div className={classes.SolutionBlock}>
                <div className={classes.Solution}>Solution 1:</div>
                <div className={classes.Answer}>
                    Brute force approach. Use 2 loops. For each index find
                    if it's complement is present in the array.
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
                    Using HashMap: Iterate over the array. For every index check if the
                    compliment of the number existes in the map.
                    If it does not then return the array of value and i.
                    else add the number as key and index as value to the Map.
                </div>
                <div>
                    <CodeBlock>
                        {solution2}
                    </CodeBlock>
                </div>
                <div className={classes.Answer}>
                    <b>Time Complexity: O(n) </b>we iterate over the array once so O(n).
                    <br />
                    <b>Space Complexity: O(n) </b>The space required by hashmap
                    is equal to the number of elements in the array.
                </div>
            </div>
        </div>
    );
}
