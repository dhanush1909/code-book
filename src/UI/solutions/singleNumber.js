import React from "react";
import classes from "./index.module.css";
import problemImage from "../../assets/problems/single-number.png";
import CodeBlock from "../../HOC/codeBlock/codeBlock";

const solution1 = `
public int maximumSubarray(int[] Arr) {
  int n = Arr.length;

  for(int i=1;i<n-1;i++){
    for(int j=i;j<n;j++){ 
      if(!search(Arr, Arr[i],i,n))
        return Arr[i];
    }    
  }
  return 0;
}

public Boolean search(int[] Arr, int number, int index,int n) {
    for(int i=0;i<n;i++) {
        if(i == index)
            continue;
        if(Arr[i] == num)
            return true;
    }
    return false;
}
`.trim();

const solution2 = `
public int singleNumber(int[] nums) {
    HashMap<Integer, Integer> hash_table = new HashMap<>();

    for (int i : nums) {
      hash_table.put(i, hash_table.getOrDefault(i, 0) + 1);
    }
    for (int i : nums) {
      if (hash_table.get(i) == 1) {
        return i;
      }
    }
    return 0;
}
`.trim();

const solution3 = `
class Solution {
    public int singleNumber(int[] nums) {
      int sumOfSet = 0, sumOfNums = 0;
      Set<Integer> set = new HashSet();
  
      for (int num : nums) {
        if (!set.contains(num)) {
          set.add(num);
          sumOfSet += num;
        }
        sumOfNums += num;
      }
      return 2 * sumOfSet - sumOfNums;
    }
}
`.trim();

const solution4 = `
public int singleNumber(int[] nums) {
    int a = 0;
    for (int i : nums) {
      a ^= i;
    }
    return a;
}
`.trim();

export default function singleNumber() {
    return (
        <div className={classes.Content}>
            <div className={classes.Question}>Single Number</div>
            <img
                alt="Single Number"
                className={classes.ProblemImage}
                src={problemImage}
            ></img>
            <div className={classes.SolutionBlock}>
                <div className={classes.Solution}>Solution 1:</div>
                <div className={classes.Answer}>
                    Brute force approach. Use 2 loops. For each index loop through the
                    entire array to check if number exists only once.
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
                    Using HashMap: Iterate over the array. For every index check if the number existes in the map.
                    If it does not exist in the set then add it to the map and set value to 1.
                    If it exists then increase the value by 1.
                    Iterate through the map keys and reeturn the key that has value 1.
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
            <div className={classes.SolutionBlock}>
                <div className={classes.Solution}>Solution 3:</div>
                <div className={classes.Answer}>
                    using math: concept - 2 ∗ (a+b+c) − (a+a+b+b+c) = c. <br />
                    use HashSet to keep track of the number that is already added.
                </div>
                <div>
                    <CodeBlock>
                        {solution3}
                    </CodeBlock>
                </div>
                <div className={classes.Answer}>
                    <b>Time Complexity: O(n) </b>we iterate over the array once so O(n).
                    <br />
                    <b>Space Complexity: O(n) </b> set needs space for the elements in nums.
                </div>
            </div>
            <div className={classes.SolutionBlock}>
                <div className={classes.Solution}>Solution 4:</div>
                <div className={classes.Answer}>
                    using XOR: concept - a^a = 0, &nbsp; a^b^a = b<br />
                    Loop through the array and do XOR operation on each index.
                </div>
                <div>
                    <CodeBlock>
                        {solution4}
                    </CodeBlock>
                </div>
                <div className={classes.Answer}>
                    <b>Time Complexity: O(n) </b>we iterate over the array once so O(n).
                    <br />
                    <b>Space Complexity: O(1) </b> We use constant extra space.
                </div>
            </div>
        </div>
    );
}
