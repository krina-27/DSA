# DSA Quick Revision: Time & Space Complexity

## 1. Time Complexity

Measures how the number of operations grows as input size `n` increases. It is not actual execution time in seconds.


*Conceptual graph — shows how growth rates compare.*

| Complexity | Example |
|---|---|
| `O(1)` | Array index access |
| `O(log n)` | Binary search |
| `O(n)` | Linear search |
| `O(n log n)` | Merge sort |
| `O(n²)` | Two nested loops |
| `O(2ⁿ)` | Naive recursive Fibonacci |
| `O(n!)` | Generate all permutations |

**Growth order:** `O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)`

## 2. Linear Search vs Binary Search

| | Linear Search | Binary Search |
|---|---|---|
| Approach | Check one by one | Eliminate half each step |
| Best case | `O(1)` | `O(1)` |
| Average case | `O(n)` | `O(log n)` |
| Worst case | `O(n)` | `O(log n)` |
| Sorted array? | Not required | Required |

### Linear Search — `O(n)`

```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch([10, 20, 30, 40], 30)); // 2
```

**Why?** It checks elements one by one. In the worst case, it checks all `n` elements.

### Binary Search — `O(log n)`

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50], 40)); // 3
```

**Why?** Every iteration removes approximately half the remaining elements.

Example: `100 → 50 → 25 → 12 → 6 → 3 → 1`

Approximately 7 steps instead of checking up to 100 elements.

**Interview tip:** Binary search works only when the data is sorted.

## 3. Rules to Find Time Complexity

```javascript
// One loop: O(n)
for (let i = 0; i < n; i++) {}

// Two separate loops: O(n)
for (let i = 0; i < n; i++) {}
for (let j = 0; j < n; j++) {}

// Two nested loops: O(n²)
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {}
}

// Halving each time: O(log n)
while (n > 1) {
  n = Math.floor(n / 2);
}
```

Remember:
- Drop constants: `O(2n)` → `O(n)`
- Keep the fastest-growing term: `O(n² + n)` → `O(n²)`
- Sequential loops: add their costs.
- Nested loops: multiply iteration counts when both run `n` times.

## 4. Space Complexity

Measures memory usage. **Auxiliary space** means extra memory used by the algorithm.

| Example | Auxiliary Space |
|---|---|
| A few variables | `O(1)` |
| New array of `n` elements | `O(n)` |
| `n × n` matrix | `O(n²)` |

```javascript
// Time: O(n), Auxiliary space: O(1)
function findMax(arr) {
  let max = arr[0];

  for (const num of arr) {
    if (num > max) max = num;
  }

  return max;
}
```

The loop checks every element, but only one extra variable stores the maximum.

## 5. Interview Questions

**Q1. What is time complexity?**

It describes how an algorithm's operation count grows with input size.

**Q2. Why is binary search `O(log n)`?**

Because it halves the search space at each step.

**Q3. What is the difference between `O(n)` and `O(n²)`?**

`O(n)` grows linearly; `O(n²)` grows quadratically. Two nested loops often produce `O(n²)`.

**Q4. Can time be `O(n)` and auxiliary space be `O(1)`?**

Yes. Finding the maximum in an array is one example.

**Q5. What are best, average and worst cases?**

- Best: minimum work.
- Average: expected work under an assumed input distribution.
- Worst: maximum work for a given input size.

## Last-Minute Revision

- One loop → `O(n)`
- Nested loops → often `O(n²)`
- Halving repeatedly → `O(log n)`
- Direct array access → `O(1)`
- Linear search → works on unsorted arrays
- Binary search → requires sorted arrays
- Extra variable → `O(1)` auxiliary space
- New array → `O(n)` auxiliary space
- Big O Notation → symbol to represent the worst case time or space complexity

