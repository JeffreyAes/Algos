/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 * 
 * 
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
 * The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of 
bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of 
them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.
 */

const piles = [3, 6, 7, 11]
const h = 8
// Output: 4

const piles2 = [30, 11, 23, 4, 20]
const h2 = 5
// Output: 30

const piles3 = [30, 11, 23, 4, 20]
const h3 = 6
// Output: 23

var minEatingSpeed = function (piles, h) {
    let l = 1
    let r = Math.max(...piles)
    res = r

    while (l <= r) {
        let k = Math.floor((l + r) / 2)
        let hours = 0
        for (p in piles) {
            hours += Math.ceil(piles[p] / k)
        }
        if (hours <= h) {
            res = Math.min(res, k)
            r = k - 1
        }
        else {
            l = k +1
        }
    }
    return res
};

console.log(minEatingSpeed(piles, h))
console.log(minEatingSpeed(piles2, h2))
console.log(minEatingSpeed(piles3, h3))