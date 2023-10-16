import pandas as pd
import requests
import json

matches = requests.get("https://na.api.riotgames.com/val/match/v1/matchlists/by-puuid/Wv3uxhr22pAs5kq62YXwb-TJr9OF-TiX_e7J_RENpR715fx3VRL_IsSyjsX5REoe5LakSeFD47NPYg?api_key=RGAPI-663a7a7a-8389-473f-b10a-5681c7882f0a").json()

match_ids = [x["matchId"] for x in matches['history']]

#print(match_ids)

max_matches = 1
out = []
for match_id in match_ids[:max_matches]: 
    url = "https://na.api.riotgames.com/val/match/v1/matches/"+match_id+"?api_key=RGAPI-663a7a7a-8389-473f-b10a-5681c7882f0a"
    data = requests.get(url).json()
    out.append({match_id:data})
    #print(data, "This was a status message")
file=open('./outputGage.json','w')
file.write(json.dumps(out))


#print(match_ids) ####################################
#print(out)


with open('outputGage.json', 'r') as dataFile:
    data = json.load(dataFile)
    #print(json.dumps(data, indent=4))

file=open('./organizedOutputGage.json','w')
file.write(json.dumps(data, indent=4))


for match_dict in dataFile:
    # Extract matchInfo from the current match
    match_info = match_dict.get("matchInfo", {})
    match_id = match_info.get("matchId", "N/A")
    map_id = match_info.get("mapId", "N/A")
    game_version = match_info.get("gameVersion", "N/A")

    # Extract player data for this match
    players = match_dict.get("players", [])

    for player_data in players:
        puuid = player_data.get("puuid", "N/A")
        game_name = player_data.get("gameName", "N/A")
        tag_line = player_data.get("tagLine", "N/A")
        team_id = player_data.get("teamId", "N/A")

        # Extract more player-specific data as needed
        stats = player_data.get("stats", {})
        score = stats.get("score", "N/A")
        rounds_played = stats.get("roundsPlayed", "N/A")
        kills = stats.get("kills", "N/A")
        deaths = stats.get("deaths", "N/A")
        assists = stats.get("assists", "N/A")
        playtime_millis = stats.get("playtimeMillis", "N/A")
        ability_casts = stats.get("abilityCasts", {})

        # Continue extracting other data you need

        # Now you can process and store these values or perform any other desired actions

        # Print data as an example
        print(f"Match ID: {match_id}, Player Name: {game_name}, Kills: {kills}, Deaths: {deaths}")

# You can use the extracted data as needed for further analysis or other tasks.