import json
import pandas as pd

target_puuid = "6QYvvWRJ7TGeQC0S-5Ml-qoJZ68mbSLfHiIZIlLITnIgcXm8q8DVoP5xK21KmtapHUuLgEHCW_xvCw"
file_path = 'organizedOutputGage.json'

with open(file_path, 'r') as file:
    data = json.load(file)
    players = data.get("players", [])
    puuids = [player.get("puuid") for player in players]

print("List of puuid values in the JSON data:", puuids)