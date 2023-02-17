# * Definition for singly-linked list.
# * function ListNode(val, next) {
# *     this.val = (val===undefined ? 0 : val)
# *     this.next = (next===undefined ? null : next)
# * }
# * @param {ListNode} head
# * @return {ListNode}
# *
# * Given the head of a singly linked list, reverse the list, and return the reversed list.
# *
# * https://leetcode.com/problems/reverse-linked-list/
# * solution: https://youtu.be/G0_I-ZF0S38
#

head1 = [1, 2, 3, 4, 5]
expected1 = [5, 4, 3, 2, 1]
# // Example 2:


head2 = [1, 2]
expected2 = [2, 1]
# // Example 3:

head3 = []
expected3 = []


def reverseList(head):
    prev = None
    current = head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev

print(reverseList(head1))
print(reverseList(head2))
print(reverseList(head3))
