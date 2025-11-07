# The 21. Merge Two Sorted List Problem
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

> [!WARNING]
> 1. The number of nodes in both lists is in the range [0, 50].
>
> 2. -100 <= Node.val <= 100
>
> 3. Both list1 and list2 are sorted in non-decreasing order.

### The Approach
I use a dummy node first and create a new dynamic variable to serve as a node builder that will move each along the list and create a dynamic pointer like linked list would be. I used 2 variables, which output as a head pointer (pointing to the head of the lists after dummy) and current as the node builder. The output variable just stay in state after first iteration, but the current will move along the list until it's null. Return the output.next which is pointing to the value pointer after dummy so excluded the dummy state.