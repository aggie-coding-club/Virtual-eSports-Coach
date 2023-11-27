import pandas as pd
import requests
import json

matches = requests.get("https://na.api.riotgames.com/val/match/v1/matchlists/by-puuid/Wv3uxhr22pAs5kq62YXwb-TJr9OF-TiX_e7J_RENpR715fx3VRL_IsSyjsX5REoe5LakSeFD47NPYg?api_key=RGAPI-663a7a7a-8389-473f-b10a-5681c7882f0a").json()
match_ids = [x["matchId"] for x in matches['history']]

max_matches = 1

out = []
for match_id in match_ids[:max_matches]:
    url = "https://na.api.riotgames.com/val/match/v1/matches/"+match_id+"?api_key=RGAPI-663a7a7a-8389-473f-b10a-5681c7882f0a"
    data = requests.get(url).json()
    out.append({match_id:data})
    print(data)
file=open('./output.json','w')
file.write(json.dumps(out))
file.close()

print(match_ids)
print(out)