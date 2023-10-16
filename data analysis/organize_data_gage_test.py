import pandas as pd
import requests
import json
import numpy as np

matches = requests.get("https://na.api.riotgames.com/val/match/v1/matchlists/by-puuid/Wv3uxhr22pAs5kq62YXwb-TJr9OF-TiX_e7J_RENpR715fx3VRL_IsSyjsX5REoe5LakSeFD47NPYg?api_key=RGAPI-663a7a7a-8389-473f-b10a-5681c7882f0a").json()
match_ids = [x["matchId"] for x in matches['history']]

#print(match_ids)


# Prettify JSON file

max_matches = 1
out = []
for match_id in match_ids[:max_matches]: 
    url = "https://na.api.riotgames.com/val/match/v1/matches/"+match_id+"?api_key=RGAPI-663a7a7a-8389-473f-b10a-5681c7882f0a"
    data = requests.get(url).json()
    out.append({match_id:data})
    #print(data, "This is a status message")
file=open('./organizedOutputGage.json','w')
file.write(json.dumps(data, indent=4))


#print(match_ids)
#print(out)



'''
with open('organizedOutputGage.json', 'r') as file:
    inputData = json.load(file)
players_data = []
for i in inputData.items():
    for j in i:
        for k in j:
            print(k)
'''
