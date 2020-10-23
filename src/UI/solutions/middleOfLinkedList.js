import React from "react";
import classes from "./index.module.css";
import CodeBlock from "../../HOC/codeBlock/codeBlock";

const solution1 = `
void findMiddle() 
{ 
    ListNode node = head;  
    int count = 0;
    while (node != null) 
    { 
        count++;
        node = node.next;
    } 
    for(int i=0; i<count/2;i++) {
        head = head.next;
    }
    return head;
}
`.trim();


const solution2 = `
void findMiddle() 
{ 
    count = 0;

    // ListNode is representation of the linked list.
    ArrayList<ListNode> list = new ArrayList<>(); 

    while(head != null) {
        list.add(head);
        count++;
        head = head.next;
    }

    // if linked list was empty return null
    return count == 0 ? null : list.get(count/2);
}
`.trim();

const solution3 = `
void findMiddle() 
{ 
    ListNode slow = head;
    ListNode fast = head;
    
    while(fast!=null && fast.next!=null)
    {
        slow=slow.next;
        fast= fast.next.next;
    }
    
    return slow;
}
`.trim();

export default function middleOfLinkedList() {
    return (
        <div className={classes.Content}>
            <div className={classes.Question}>Middle of the Linked List</div>
            <div className={classes.QuestionDesc}>
                Given a singly linked list, find middle of the linked list.
                For example, if given linked list is 1->2->3->4->5 then output should be 3.
                If there are even nodes, then there would be two middle nodes,
                we need to print second middle element. For example,
                if given linked list is 1->2->3->4->5->6 then output should be 4.
            </div>

            <div className={classes.SolutionBlock}>
                <div className={classes.Solution}>Solution 1:</div>
                <div className={classes.Answer}>
                    Traverse the whole linked list and count the no. of nodes.
                    Now traverse the list again till count/2 and return the node at count/2.
                    </div>
                <div>
                    <CodeBlock>
                        {solution1}
                    </CodeBlock>
                </div>
                <div className={classes.Answer}>
                    <b>
                        Time Complexity: O(n + n/2)
                    </b>
                </div>
            </div>
            <div className={classes.SolutionBlock}>
                <div className={classes.Solution}>Solution 2:</div>
                <div className={classes.Answer}>
                    <b>Using ArrayList:</b> &nbsp; Traverse the whole linked list.
                    Increment the count and add the node to array list.
                    Return the node at count/2 position in ArrayList
                </div>
                <div>
                    <CodeBlock>
                        {solution2}
                    </CodeBlock>
                </div>
                <div className={classes.Answer}>
                    <b>Time Complexity: O(n)</b><br />
                    <b>Space Complexity: O(n)</b>
                </div>
            </div>
            <div className={classes.SolutionBlock}>
                <div className={classes.Solution}>Solution 3:</div>
                <div className={classes.Answer}>
                    <b>Using 2 pointers:</b> Use a slow and fast pointer.
                    Slow pointer will move ahead by 1 node and fast pointeer will move ahead by 2 nodes.
                    When fast pointer reaches the end of the list slow pointer will be at the middle node.
                </div>
                <div>
                    <CodeBlock>
                        {solution3}
                    </CodeBlock>
                </div>
                <div className={classes.Answer}>
                    <b>Time Complexity: O(n) </b><br />
                    <b>Space Complexity: O(1) </b> We do not use any extra space.
                </div>
            </div>
        </div>
    );
}
