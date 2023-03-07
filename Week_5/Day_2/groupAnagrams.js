/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * solution: https://youtu.be/vzdNOK2oB2E
 * https://leetcode.com/problems/group-anagrams/
 */

const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"]
const Output1 = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

const strs2 = [""]
const Output2 = [[""]]


const strs3 = ["a"]
const Output3 = [["a"]]
var groupAnagrams = function (strs) {
    let obj = {};

    for (let str of strs) {
        let key = [...str].sort().join('');

        if (!obj[key]) {
            obj[key] = [];
        }

        obj[key].push(str);
    }

    return Object.values(obj);
};


console.log(groupAnagrams(strs1))
console.log(groupAnagrams(strs2))
console.log(groupAnagrams(strs3))