import json
import pandas as pd



# OVERALL MATCH INFO

with open('organizedOutputGage.json', 'r') as file:
    data1 = json.load(file)
match_info = data1.get("matchInfo", {})
match_info_data = {
    "matchId": match_info.get("matchId", "N/A"),
    "mapId": match_info.get("mapId", "N/A"),
    "gameVersion": match_info.get("gameVersion", "N/A"),
    "gameLengthMillis": match_info.get("gameLengthMillis", "N/A"),
    "region": match_info.get("region", "N/A"),
    "gameStartMillis": match_info.get("gameStartMillis", "N/A"),
    "provisioningFlowId": match_info.get("provisioningFlowId", "N/A"),
    "isCompleted": match_info.get("isCompleted", "N/A"),
    "customGameName": match_info.get("customGameName", "N/A"),
    "queueId": match_info.get("queueId", "N/A"),
    "gameMode": match_info.get("gameMode", "N/A"),
    "isRanked": match_info.get("isRanked", "N/A"),
    "seasonId": match_info.get("seasonId", "N/A")
}
match_info_df = pd.DataFrame([match_info_data])
print(match_info_df)



# PLAYER METADATA

with open('organizedOutputGage.json', 'r') as file:
    data2 = json.load(file)
players = data2.get("players", [])
player_data = []
for player in players:
    player_info = {
        "puuid": player.get("puuid", "N/A"),
        "game_name": player.get("gameName", "N/A"),
        "tag_line": player.get("tagLine", "N/A"),
        "team_id": player.get("teamId", "N/A"),
        "party_id": player.get("partyId", "N/A"),
        "character_id": player.get("characterId", "N/A")
    }
    player_data.append(player_info)
metadataDF = pd.DataFrame(player_data)
print(metadataDF)



# ROUND RESULTS

with open('organizedOutputGage.json', 'r') as file:
    data3 = json.load(file)
round_results = data3.get("roundResults", [])
round_dataframes = []

for round_result in round_results:
    # Create a DataFrame for each round result
    round_data = {
        "roundNum": round_result.get("roundNum", "N/A"),
        "roundResult": round_result.get("roundResult", "N/A"),
        "roundCeremony": round_result.get("roundCeremony", "N/A"),
        "winningTeam": round_result.get("winningTeam", "N/A"),
        "bombPlanter": round_result.get("bombPlanter", "N/A"),
        "bombDefuser": round_result.get("bombDefuser", "N/A"),
        "plantRoundTime": round_result.get("plantRoundTime", "N/A"),
        "plantLocationX": round_result.get("plantLocation", {}).get("x", "N/A"),
        "plantLocationY": round_result.get("plantLocation", {}).get("y", "N/A"),
        "plantSite": round_result.get("plantSite", "N/A"),
        "defuseRoundTime": round_result.get("defuseRoundTime", "N/A"),
        "defuseLocationX": round_result.get("defuseLocation", {}).get("x", "N/A"),
        "defuseLocationY": round_result.get("defuseLocation", {}).get("y", "N/A"),
    }

    player_stats = round_result.get("playerStats", [])
    for i, player_stat in enumerate(player_stats):
        player_data = {
            f"player{i + 1}_puuid": player_stat.get("puuid", "N/A"),
            f"player{i + 1}_kills": player_stat.get("kills", "N/A"),
            f"player{i + 1}_damage": player_stat.get("damage", "N/A"),
            f"player{i + 1}_score": player_stat.get("score", "N/A"),
            f"player{i + 1}_economy": player_stat.get("economy", "N/A"),
            f"player{i + 1}_ability": player_stat.get("ability", "N/A"),

        }
        round_data.update(player_data)

    # Create a DataFrame for the round data
    round_df = pd.DataFrame([round_data])
    round_dataframes.append(round_df)

'''
for i, round_df in enumerate(round_dataframes): # prints dataframes for each round
    print(f"\nRound {i + 1}:\n")
    print(round_df)
'''

print("\nround 1: \n\n", round_dataframes[0]) # this is the complete data for the first round