import pandas as pd
import json

f = open('data.json')

data = json.load(f)
for d in data:
    print(d)
print(data)
f.close()