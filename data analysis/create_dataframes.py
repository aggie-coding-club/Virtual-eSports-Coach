import json
import pandas as pd

# The player we want to get data for
target_puuid = "97vCAvToxInr_weD4U648mBTj8GDGdHZ-oEZUELEGH96Nc0uhuc4juDG-cUPXrlX51etgv6ysS4RVg"
file_path = 'organizedOutputGage.json'

# GETS OVERALL MATCH INFO
def get_match_info(file_path):
    with open(file_path, 'r') as file:
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
    return match_info_df

# GETS ALL PLAYER METADATA
def get_player_metadata(file_path):
    with open(file_path, 'r') as file:
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
    return metadataDF

# GET ALL PLAYERS' DATA (all rounds in game), outputs to a dataframe
def get_player_combined_data(round_dataframes, target_puuid):
    player_data_list = []
    
    for round_df in round_dataframes:
        if target_puuid in round_df.values:
            target_player_data = round_df[round_df['player1_puuid'] == target_puuid]
            player_data_list.append(target_player_data)

    if player_data_list:
        target_player_combined_data = pd.concat(player_data_list, ignore_index=True)
        return target_player_combined_data
    else:
        print(f"Player with puuid {target_puuid} not found")
        return [], 0  # Return empty list and 0 for total score if the player is not found

# GETS PLAYER SCORES from get_player_combined_data, outputs to a list
def get_player_scores(round_dataframes, target_puuid):
    target_player_combined_data = get_player_combined_data(round_dataframes, target_puuid)
    if not target_player_combined_data.empty:
        player_score = target_player_combined_data["player1_score"].values
        return player_score
    else:
        print(f"Player with puuid {target_puuid} not found while calling get_player_scores")
        return [], 0  # Return empty list and 0 for total score if the player is not found

# GETS PLAYER DAMAGE STATS from get_player_combined_data, outputs to a list
def get_player_damage(round_dataframes, target_puuid):
    target_player_combined_data = get_player_combined_data(round_dataframes, target_puuid)

    if not target_player_combined_data.empty:
        player_damage = target_player_combined_data["player1_damage"].values
        return player_damage
    else:
        print(f"Player with puuid {target_puuid} not found while calling get_player_damage")
        return [], 0

def get_player_legshots(round_dataframes, target_puuid):
    player_damage = get_player_damage(round_dataframes, target_puuid)
    legshots = 0
    for round_damage in player_damage:
        for damage in round_damage:
            legshots += damage["legshots"]
    return legshots


def get_player_bodyshots(round_dataframes, target_puuid):
    player_damage = get_player_damage(round_dataframes, target_puuid)
    bodyshots = 0
    for round_damage in player_damage:
        for damage in round_damage:
            bodyshots += damage["bodyshots"]
    return bodyshots

def get_player_headshots(round_dataframes, target_puuid):
    player_damage = get_player_damage(round_dataframes, target_puuid)
    headshots = 0
    for round_damage in player_damage:
        for damage in round_damage:
            headshots += damage["headshots"]
    return headshots

def get_player_damage_done(round_dataframes, target_puuid):
    player_damage = get_player_damage(round_dataframes, target_puuid)
    damage_done = 0
    for round_damage in player_damage:
        for damage in round_damage:
            damage_done += damage["damage"]
    return damage_done

# INITIALIZE ROUND DATAFRAMES
with open('organizedOutputGage.json', 'r') as file:
    data3 = json.load(file)
round_results = data3.get("roundResults", [])
round_dataframes = []

for round_result in round_results: # creates a dictionary for each round
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
            f"player{i + 1}_score": player_stat.get("score", "N/A"), }

        ability_data = player_stat.get("ability", {})
        for ability_key, ability_value in ability_data.items():
            player_data[f"player{i + 1}_ability_{ability_key}"] = ability_value

        economy_data = player_stat.get("economy", {})
        for economy_key, economy_value in economy_data.items():
            player_data[f"player{i + 1}_economy_{economy_key}"] = economy_value

        round_data.update(player_data)


    ###
    round_df = pd.DataFrame([round_data])
    round_dataframes.append(round_df)
# print(round_dataframes[0]) # this is the complete data for the first round

# Example usages:

#print(f"\nget_match_info: {get_match_info(file_path)}\n\n")

#print(f"\nget_player_metadata: {get_player_metadata(file_path)}\n\n")

#print(get_player_combined_data(round_dataframes, target_puuid))

#print("player round scores: ", get_player_scores(round_dataframes, target_puuid))
print("player total score: ", sum(get_player_scores(round_dataframes, target_puuid)))

#print(get_player_damage(round_dataframes, target_puuid))
print("total legshots: ", get_player_legshots(round_dataframes, target_puuid))
print("total bodyshots: ", get_player_bodyshots(round_dataframes, target_puuid))
print("total headshots: ", get_player_headshots(round_dataframes, target_puuid))
print("total damage done: ", get_player_damage_done(round_dataframes, target_puuid))
