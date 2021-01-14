/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let first = new ListNode(null, head);
    let p = first;
    let q = p;
    while (p !== null) {
        if (p.val === val) {
            q.next = p.next;
            p = q.next;
            continue;
        }
        q = p;
        p = p.next;

    }
    return first.next;
};
/**
 * @param arr {number[]}
 * @return {ListNode}
 */
var createList = function (arr) {
    if (arr.length <= 0) {
        return null;
    }
    let head = new ListNode(arr[0], undefined);
    let p = head;
    for (let n of arr.slice(1)) {
        p.next = new ListNode(n, undefined);
        p = p.next;
    }

    return head;
}

/**
 * @param head {ListNode}
 */
var printList = function (head) {
    let p = head
    while (p !== null) {
        console.log(p.val);
        p = p.next;
    }
}

let nums = [1, 1];
let list = createList(nums);
list = removeElements(list, 1);
printList(list);