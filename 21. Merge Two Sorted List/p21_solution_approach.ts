/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const output = new ListNode();
    let current = output; // build as a node builder, will be used as a pointer to a first head

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1; // output var as a first head
            list1 = list1.next;
        } else {
            current.next = list2; // output var as a first head
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return output.next; // first value written
}
