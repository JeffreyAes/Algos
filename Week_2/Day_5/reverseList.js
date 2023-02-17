/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * https://leetcode.com/problems/reverse-linked-list/
 * solution: https://youtu.be/G0_I-ZF0S38
 */

const head1 = [1, 2, 3, 4, 5]
const expected1 = [5, 4, 3, 2, 1]
// Example 2:


const head2 = [1, 2]
const expected2 = [2, 1]
// Example 3:

const head3 = []
const expected3 = []

var reverseList = function (head) {
    let prev = null
    let current = head

    while (current) {
        let next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    }
    return prev

};


console.log(reverseList(head1))
console.log(reverseList(head2))
console.log(reverseList(head3))