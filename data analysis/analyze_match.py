import pandas as pd
import requests
import json

match_id = "b879593f-9ab2-4ada-915c-bae2fb24da62"
url = "https://na.api.riotgames.com/val/match/v1/matches/"+match_id+"?api_key=RGAPI-663a7a7a-8389-473f-b10a-5681c7882f0a"
data = requests.get(url).json()
for d in data:
    print(d)
#print(data)