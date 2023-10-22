import pandas as pd
import requests
import json

matches = requests.get("https://na.api.riotgames.com/val/match/v1/matchlists/by-puuid/Wv3uxhr22pAs5kq62YXwb-TJr9OF-TiX_e7J_RENpR715fx3VRL_IsSyjsX5REoe5LakSeFD47NPYg?api_key=RGAPI-663a7a7a-8389-473f-b10a-5681c7882f0a").json()

match_ids = [x["matchId"] for x in matches['history']]
out = []

match_id = match_ids[0]

# Make an API request to fetch the most recent match data
url = "https://na.api.riotgames.com/val/match/v1/matches/" + match_id + "?api_key=RGAPI-663a7a7a-8389-473f-b10a-5681c7882f0a"
data = requests.get(url).json()
# out.append({match_id:data})
# file=open('./output.json','w')
# file.write(json.dumps(out))
# file.close()

# init playerlist based off how many people in match
playerList = []
for playerNum in range(len(data['roundResults'][0]['playerStats'])):
    playerList.append(data['roundResults'][0]['playerStats'][playerNum]['puuid'])

# zero list for first bloods of each player
playerFK = [0] * (playerNum+1)
playerFD = [0] * (playerNum+1)

# loop per round
for roundNum in range(len(data['roundResults'])):
    firstKill = 999999999 #large time value to check for earliest kills
    killa = -1 # in case of no first blood in a round

    # loop per player in a round
    for playerNum in range(len(data['roundResults'][roundNum]['playerStats'])):
        
        # if player got a kill in a round, can read list otherwise error - checks only their first kill that round, try to recursively check the earliest first blood
        if data['roundResults'][roundNum]['playerStats'][playerNum]['kills']:
            if data['roundResults'][roundNum]['playerStats'][playerNum]['kills'][0]['timeSinceRoundStartMillis'] < firstKill:
                firstKill = data['roundResults'][roundNum]['playerStats'][playerNum]['kills'][0]['timeSinceRoundStartMillis']
                killa = playerNum
                dedge = data['roundResults'][roundNum]['playerStats'][playerNum]['kills'][0]['victim'] #different approach to FD count vs the FK count
    
    # assign first blood to player
    if killa != -1:
        playerFK[killa] += 1
    
    # loop to find who died (FD) and assign
    for i in range(len(playerList)):
        if playerList[i] == dedge:
            playerFD[i] += 1

# assigning ids to names based off of how the rounds worked (is pretty sloppy, will look at it later if needed)
for user in range(len(playerList)):
    for i in range(len(data['players'])):
        if playerList[user] == data['players'][i]['puuid']:
            playerList[user] = (data['players'][i]['gameName'] + ' #' + data['players'][i]['tagLine'])

# output formatting
for i in range(len(playerList)):
    print(f'{playerList[i]}\n - FK: {playerFK[i]}, FD: {playerFD[i]}\n')