/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * solution: https://youtu.be/XIdigk956u0
 */

let list1 = [1, 2, 4]
let list2 = [1, 3, 4]
// Output: [1,1,2,3,4,4]

let listTwo = []
let listTwo2 = []
// Output: []


var mergeTwoLists = function (list1, list2) {
    // do this problem in (leetcode) https://leetcode.com/problems/merge-two-sorted-lists/
    if (list1 == null)
        return list2;
    if (list2 == null)
        return list1;

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

console.log(mergeTwoLists(list1, list2))
console.log(mergeTwoLists(listTwo1, listTwo2))
