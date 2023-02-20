# Definition for singly-linked list.
# function ListNode(val, next) {
#     this.val = (val ===undefined ? 0: val)
#     this.next = (next ===undefined ? null: next)
# }


# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
# https: leetcode.comproblemsmerge-two-sorted-lists
# solution: https: youtu.beXIdigk956u0


list1 = [1, 2, 4]
list2 = [1, 3, 4]
#  Output: [1,1,2,3,4,4]

listTwo = []
listTwo2 = []
#  Output: []

def mergeTwoLists(list1, list2) :
    if list1 == None:
        return list2

    if list2 == None:
        return list1

    if list1.val < list2.val:
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    else:
        list2.next = mergeTwoLists(list1,list2.next)
        return list2
    
    # non recursively:
            # dummy = ListNode()
            # prev = dummy

            # while list1 and list2:
            #     if list1.val <= list2.val:
            #         prev.next = list1
            #         list1 = list1.next
            #     else:
            #         prev.next = list2
            #         list2 = list2.next
                
            #     prev = prev.next

            # if list1 != None:
            #     prev.next = list1
            # else:
            #     prev.next = list2

            # return dummy.next

print(mergeTwoLists(list1,list2))
print(mergeTwoLists(listTwo,listTwo2))