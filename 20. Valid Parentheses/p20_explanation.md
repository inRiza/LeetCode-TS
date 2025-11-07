# The 20. Valid Parentheses Problem
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
```
Input: s = "()"
Output: true
```

Example 2:
```
Input: s = "()[]{}"
Output: true
```

Example 3:
```
Input: s = "(]"
Output: false
```

Example 4:
```
Input: s = "([])"
Output: true
```

Example 5:
```
Input: s = "([)]"
Output: false
```

> [!WARNING]
> 1 <= s.length <= 104
> 
> s consists of parentheses only '()[]{}'.

## The Approach
My approach was use object-literal a built-in-map class where I search first the top value then iterate and check is the last value are equal to the key. The iteration requires pushing and popping a stack, so the end result if the input was true then the stack should be empty.
