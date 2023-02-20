import math
# @param {number[]} piles
# @param {number} h
# @return {number}
# Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
# The guards have gone and will come back in h hours.

# Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of
# bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of
# them instead and will not eat any more bananas during this hour.

# Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return .

# Return the minimum integer k such that she can eat all the bananas within h hours.

piles = [3, 6, 7, 11]
h = 8
# Output: 4

piles2 = [30, 11, 23, 4, 20]
h2 = 5
# Output: 30

piles3 = [30, 11, 23, 4, 20]
h3 = 6
# Output: 23

def minEatingSpeed(piles,h):
    l = 1
    r = max(piles)
    res = r
    while l <= r:
        k = (l + r) //2
        hours = 0
        for p in piles:
            hours += math.ceil(p/k)
        if hours <= h:
            res = min(res, k)
            r = k - 1
        else:
            l = k + 1
    return res



print(minEatingSpeed(piles,h))
print(minEatingSpeed(piles2,h2))
print(minEatingSpeed(piles3,h3))