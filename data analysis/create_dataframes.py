import json
import pandas as pd

# The player we want to get data for
target_puuid = "pgcDR10ayvJkq6TlWJFPosJJVhXTa-MMHF75j6KXV8yCco5PtabFGKjAE8CnDVNfqUSqSUjH_u8TlQ"
file_path = 'organizedOutputGage.json'

###################################################################################### Functions

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
    metadata_df = pd.DataFrame(player_data)
    return metadata_df

# GET player's DATA (all rounds in game), outputs to a dataframe
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

def get_player_headshots_by_round(round_dataframes, target_puuid):
    player_damage = get_player_damage(round_dataframes, target_puuid)
    headshots_by_round = []

    for round_damage in player_damage:
        round_headshots = 0
        for damage in round_damage:
            round_headshots += damage["headshots"]
        headshots_by_round.append(round_headshots)
    return headshots_by_round

def get_player_damage_by_round(round_dataframes, target_puuid):
    player_damage = get_player_damage(round_dataframes, target_puuid)
    damage_by_round = []

    for round_damage in player_damage:
        round_damage_total = 0
        for damage in round_damage:
            round_damage_total += damage["damage"]
        damage_by_round.append(round_damage_total)
    return damage_by_round

def get_player_legshots_by_round(round_dataframes, target_puuid):
    player_damage = get_player_damage(round_dataframes, target_puuid)
    legshots_by_round = []
    for round_damage in player_damage:
        round_legshots = 0
        for damage in round_damage:
            round_legshots += damage["legshots"]
        legshots_by_round.append(round_legshots)
    return legshots_by_round

def get_player_bodyshots_by_round(round_dataframes, target_puuid):
    player_damage = get_player_damage(round_dataframes, target_puuid)
    bodyshots_by_round = []
    for round_damage in player_damage:
        round_bodyshots = 0
        for damage in round_damage:
            round_bodyshots += damage["bodyshots"]
        bodyshots_by_round.append(round_bodyshots)
    return bodyshots_by_round

# GETS PLAYER Ability STATS from get_player_combined_data, outputs to a list
def get_player_ability(round_dataframes, target_puuid):
    target_player_combined_data = get_player_combined_data(round_dataframes, target_puuid)

    if not target_player_combined_data.empty:
        player_ability = target_player_combined_data["player1_ability"].values
        return player_ability
    else:
        print(f"Player with puuid {target_puuid} not found while calling get_player_ability")
        return [], 0

def get_grenadeEffects(round_dataframes, target_puuid):
    player_ability = get_player_ability(round_dataframes, target_puuid)
    grenadeEffects = []

    for round_ability in player_ability:
            if "grenadeEffects" in round_ability:
                grenadeEffects.append(round_ability["grenadeEffects"])
    return grenadeEffects

def get_ability1Effects(round_dataframes, target_puuid):
    player_ability = get_player_ability(round_dataframes, target_puuid)
    ability1Effects = []

    for round_ability in player_ability:
            if "ability1Effects" in round_ability:
                ability1Effects.append(round_ability["ability1Effects"])
    return ability1Effects

def get_ability2Effects(round_dataframes, target_puuid):
    player_ability = get_player_ability(round_dataframes, target_puuid)
    ability2Effects = []

    for round_ability in player_ability:
            if "ability2Effects" in round_ability:
                ability2Effects.append(round_ability["ability2Effects"])
    return ability2Effects

def get_ultimateEffects(round_dataframes, target_puuid):
    player_ability = get_player_ability(round_dataframes, target_puuid)
    ultimateEffects = []

    for round_ability in player_ability:
            if "ultimateEffects" in round_ability:
                ultimateEffects.append(round_ability["ultimateEffects"])
    return ultimateEffects

def get_player_economy(round_dataframes, target_puuid):
    target_player_combined_data = get_player_combined_data(round_dataframes, target_puuid)

    if not target_player_combined_data.empty:
        player_economy = target_player_combined_data["player1_economy"].values
        return player_economy
    else:
        print(f"Player with puuid {target_puuid} not found while calling get_player_economy")
        return [], 0

def get_loadout_values(round_dataframes, target_puuid):
    player_economy = get_player_economy(round_dataframes, target_puuid)
    loadout_values = []

    for round_economy in player_economy:
            if "loadoutValue" in round_economy:
                loadout_values.append(round_economy["loadoutValue"])
    return loadout_values

def get_weapon(round_dataframes, target_puuid):
    player_economy = get_player_economy(round_dataframes, target_puuid)
    weapon = []

    for round_economy in player_economy:
            if "weapon" in round_economy:
                weapon.append(round_economy["weapon"])
    return weapon

def get_armor(round_dataframes, target_puuid):
    player_economy = get_player_economy(round_dataframes, target_puuid)
    armor = []

    for round_economy in player_economy:
            if "armor" in round_economy:
                armor.append(round_economy["armor"])
    return armor

def get_remaining(round_dataframes, target_puuid):
    player_economy = get_player_economy(round_dataframes, target_puuid)
    remaining = []

    for round_economy in player_economy:
            if "remaining" in round_economy:
                remaining.append(round_economy["remaining"])
    return remaining


################################################################################


# INITIALIZE ROUND DATAFRAMES
with open(file_path, 'r') as file:
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
            f"player{i + 1}_score": player_stat.get("score", "N/A"), 
            f"player{i + 1}_economy": player_stat.get("economy", "N/A"),
            f"player{i + 1}_ability": player_stat.get("ability", "N/A"), }

        round_data.update(player_data)


    ###
    round_df = pd.DataFrame([round_data])
    round_dataframes.append(round_df)

# print(round_dataframes[0]) # this is the complete data for the first round

# Example usages:

#print(f"\nget_match_info: {get_match_info(file_path)}\n\n")
#print(f"\nget_player_metadata: {get_player_metadata(file_path)}\n\n")
#print(get_player_combined_data(round_dataframes, target_puuid))


print("score by round: ", get_player_scores(round_dataframes, target_puuid))
print("player's total score: ", sum(get_player_scores(round_dataframes, target_puuid)))


#print("get_player damage called: ", "\n\n", get_player_damage(round_dataframes, target_puuid))
print("Headshots by round:", get_player_headshots_by_round(round_dataframes, target_puuid))
print("Total headshots in game: ", sum(get_player_damage_by_round(round_dataframes, target_puuid)))
print("Damage by round:", get_player_damage_by_round(round_dataframes, target_puuid))
print("Total damage in game: ", sum(get_player_damage_by_round(round_dataframes, target_puuid)))
print("Legshots by round:", get_player_legshots_by_round(round_dataframes, target_puuid))
print("Total legshots in game: ", sum(get_player_legshots_by_round(round_dataframes, target_puuid)))
print("Bodyshots by round:", get_player_bodyshots_by_round(round_dataframes, target_puuid))
print("Total bodyshots in game: ", sum(get_player_bodyshots_by_round(round_dataframes, target_puuid)))

#print("\nget_player economy called: ", "\n\n", get_player_economy(round_dataframes, target_puuid))
print("\nloadout values: ", "\n", get_loadout_values(round_dataframes, target_puuid))
print("\nweapon: ", "\n", get_weapon(round_dataframes, target_puuid))
print("\narmor: ", "\n", get_armor(round_dataframes, target_puuid))
print("\nremaining: ", "\n", get_remaining(round_dataframes, target_puuid))
print("\nspent: ", "\n", get_remaining(round_dataframes, target_puuid))

#print("\nget_player ability called: ", "\n\n", get_player_ability(round_dataframes, target_puuid))
print("\ngrenadeEffects: ", "\n", get_grenadeEffects(round_dataframes, target_puuid))
print("\nability1Effects: ", "\n", get_ability1Effects(round_dataframes, target_puuid))
print("\nability2Effects: ", "\n", get_ability2Effects(round_dataframes, target_puuid))
print("\nultimateEffects: ", "\n", get_ultimateEffects(round_dataframes, target_puuid))

'''
currently, all i have implemented is the data shown here:

            "playerStats": [
                {
                    "puuid": "pgcDR10ayvJkq6TlWJFPosJJVhXTa-MMHF75j6KXV8yCco5PtabFGKjAE8CnDVNfqUSqSUjH_u8TlQ",
                    "kills": [],
                    "damage": [
                        {
                            "receiver": "dn2-cq9gJDnq16kTAZnqr3u6tpTNbUTqZ2994yh9BQcUKnUFrg35hxaknPVU6lg6nmd9ryONYwRA3A",
                            "damage": 26,
                            "legshots": 0,
                            "bodyshots": 1,
                            "headshots": 0
                        }
                    ],
                    "score": 26,
                    "economy": {
                        "loadoutValue": 0,
                        "weapon": "29A0CFAB-485B-F5D5-779A-B59F85E204A8",
                        "armor": "",
                        "remaining": 800,
                        "spent": 0
                    },
                    "ability": {
                        "grenadeEffects": null,
                        "ability1Effects": null,
                        "ability2Effects": null,
                        "ultimateEffects": null
                    }
                },

There's plenty more to do, such as:

                {
                    "puuid": "5ALIKCJ9LJCa90M1_Nlczu86qbmgnrojMyTKlMrkotiOFyeWKgiDM1EFiR9xK2DqPhIzPgIPk6uvmg",
                    "kills": [
                        {
                            "timeSinceGameStartMillis": 131953,
                            "timeSinceRoundStartMillis": 22049,
                            "killer": "5ALIKCJ9LJCa90M1_Nlczu86qbmgnrojMyTKlMrkotiOFyeWKgiDM1EFiR9xK2DqPhIzPgIPk6uvmg",
                            "victim": "yp0xbYe8fqzGy9dNppiycd1n9hriwMfFoiO_jctHZlnIgOA52Aeq0CRey8shgNJCezHOB82So0orWg",
                            "victimLocation": {
                                "x": 6835,
                                "y": -5090
                            },
                            "assistants": [
                                "JWxyOVmij8k3lci_akybVNM4OxJApdaOE75fmtkObi5m9xxKFofr6hEDJlZeW1F1cT_vAKSN1g-mgw"
                            ],
                            "playerLocations": [
                                {
                                    "puuid": "pgcDR10ayvJkq6TlWJFPosJJVhXTa-MMHF75j6KXV8yCco5PtabFGKjAE8CnDVNfqUSqSUjH_u8TlQ",
                                    "viewRadians": 3.6290014,
                                    "location": {
                                        "x": 9619,
                                        "y": 1275
                                    }
                                },
                                {
                                    "puuid": "8Kd30t7_DzoV0D00JM_oeBSIlVkfvrHh3YOJk1JxNTgM6KSToDrFwHnMZgtuG3jpfZdnHbzF79uVnA",
                                    "viewRadians": 0,
                                    "location": {
                                        "x": 850,
                                        "y": 225
                                    }
                                },
                                {
                                    "puuid": "5ALIKCJ9LJCa90M1_Nlczu86qbmgnrojMyTKlMrkotiOFyeWKgiDM1EFiR9xK2DqPhIzPgIPk6uvmg",
                                    "viewRadians": 4.533583,
                                    "location": {
                                        "x": 7153,
                                        "y": -3218
                                    }
                                },
                                {
                                    "puuid": "F3BwOT_B8VWdORl3df3UNw2XKtyMMxxLdz8NNKdRKr8FQJIdDAPemGuNUpiAf2S4OjV_HYwc3hdEGA",
                                    "viewRadians": 5.8787913,
                                    "location": {
                                        "x": 5593,
                                        "y": -1952
                                    }
                                },
                                {
                                    "puuid": "dn2-cq9gJDnq16kTAZnqr3u6tpTNbUTqZ2994yh9BQcUKnUFrg35hxaknPVU6lg6nmd9ryONYwRA3A",
                                    "viewRadians": 4.598586,
                                    "location": {
                                        "x": 12986,
                                        "y": -2448
                                    }
                                },
                                {
                                    "puuid": "JWxyOVmij8k3lci_akybVNM4OxJApdaOE75fmtkObi5m9xxKFofr6hEDJlZeW1F1cT_vAKSN1g-mgw",
                                    "viewRadians": 2.8799517,
                                    "location": {
                                        "x": 6592,
                                        "y": -3229
                                    }
                                },
                                {
                                    "puuid": "Wv3uxhr22pAs5kq62YXwb-TJr9OF-TiX_e7J_RENpR715fx3VRL_IsSyjsX5REoe5LakSeFD47NPYg",
                                    "viewRadians": 0.035952676,
                                    "location": {
                                        "x": 6397,
                                        "y": -3146
                                    }
                                },
                                {
                                    "puuid": "g9wAJ7vdENfaKp3WwqGJDplS9oQSBisL64oqn8ZpSIjW_EPobfV9CfL1lY7Szr4Jcm1Q1WMG6hKlJg",
                                    "viewRadians": 1.7518069,
                                    "location": {
                                        "x": 7146,
                                        "y": -6757
                                    }
                                }
                            ],
                            "finishingDamage": {
                                "damageType": "Weapon",
                                "damageItem": "29A0CFAB-485B-F5D5-779A-B59F85E204A8",
                                "isSecondaryFireMode": false
                            }
                        }, etc...
'''