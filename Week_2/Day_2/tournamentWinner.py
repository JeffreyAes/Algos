competitions1 = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]
results1 = [0, 0, 1]
expected1 = "Python"

competitions2 = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]
]
results2 = [0, 1, 1]
expected2 = "Java"

competitions3 = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"]
]
results3 = [0, 1, 1, 1, 0, 1]
expected3 = "C#"

competitions4 = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"],
    ["SQL", "C#"],
    ["HTML", "SQL"],
    ["SQL", "Python"],
    ["SQL", "Java"]
]
results4 = [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]
expected4 = "C#"

competitions5 = [
    ["Bulls", "Eagles"]
]
results5 = [1]
expected5 = "Bulls"

# dont overcomplicate this problem - john
# this is not a problem on free leetcode (is a problem from algo expert or on the paid version of leetcode)
# does not have a video but its not to complicated


def tournamentWinner(competitions, results):
    i = 0
    obj = {}
    winner = ""
    while i < len(competitions):
        if results[i] == 0:
            match = competitions[i][1]
        else:
            match = competitions[i][0]
        if match not in obj:
            obj[match] = 3
        else:
            obj[match] += 3
        if winner == "" or obj[winner] < obj[match]:
            winner = match
        i += 1
    return winner;


print(tournamentWinner(competitions1, results1))
print("-------------------")
print(tournamentWinner(competitions2, results2))
print("-------------------")
print(tournamentWinner(competitions3, results3))
print("-------------------")
print(tournamentWinner(competitions4, results4))
print("-------------------")
print(tournamentWinner(competitions5, results5))
