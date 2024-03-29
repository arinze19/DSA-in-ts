interface LLNode {
  value: number;
  next: LLNode | null;
}

class LinkedList {
  head: LLNode | null;

  constructor(node: LLNode) {
    this.head = node;
  }

  add(node: LLNode) {
    let current = this.head;
    let previous = null;

    while (current !== null) {
      previous = current;
      current = current.next;
    }

    if (!previous) return -1;

    previous.next = node;
    return 1;
  }

  delete(value: number) {
    let current = this.head;
    let previous = null;

    while (current !== null) {
      if (current.value === value) {
        if (!previous) {
          this.head = current.next ?? null;
        } else {
          previous.next = current.next;
        }

        return 1;
      } else {
        previous = current;
        current = current.next;
      }
    }

    return -1;
  }

  search(value: number) {
    let current = this.head;

    while (current !== null && current.value !== value) {
      current = current.next;
    }

    if (current === null) return -1;

    return current;
  }

  display() {
    let string = '';
    let current = this.head;

    while (current !== null) {
      string += `${current.value} -> `;
      current = current.next;
    }

    string += `null`;

    return string;
  }

  middle() {
    let length = 0;
    let middle = null;
    let current = this.head;

    while (current !== null) {
      length += 1;
      if (length % 2 === 1) {
        middle = middle ? middle.next : this.head;
      }

      current = current.next;
    }

    return middle ? middle.value : null;
  }

  reverse(node?: LLNode): null | LLNode {
    const current = node ? node : this.head;

    if (current === null || current.next === null) {
      return current;
    }

    const first = this.reverse(current.next);
    current.next.next = current;
    current.next = null;

    return first;
  }
  reverseTwo() {
    let current = this.head;
    let previous = null;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }
}

const list = new LinkedList({ value: 5, next: null });
list.add({ value: 10, next: null });
list.add({ value: 20, next: null });
list.add({ value: 30, next: null });
