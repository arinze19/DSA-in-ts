# First Non-Repeating Character

Write a function that takes a string in lowercase englishalphabets and
returns the index of the strings first non-repeating character.
if the string doesn't have a reapeting character, your function should return -1

**Sample Input**

```javascript
const string = 'abcdcaf';
```

**Sample Output**

```javascript
1;
```

**Time and Space Complexity**

```bash
O(n) | O(1)
```

**UPDATE**

Updated solution since `indexOf` actually runs in `O(n)` (see [here](https://stackoverflow.com/questions/19287033/what-is-the-time-complexity-of-javascripts-array-indexof)) making the previous solution actually `O(n)^2`