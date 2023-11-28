import json
import matplotlib.pyplot as plt
file = json.load(open('out.json','r'))
data = file['roundResults']
loc = []
for round in data:
        loc.append(round['plantLocation'])
x_values = [point['x'] for point in loc]
y_values = [-point['y'] for point in loc]

# Creating a scatter plot
plt.scatter(x_values, y_values)
plt.xlabel('X values')
plt.ylabel('Y values')
plt.title('Scatter Plot')
plt.axis('off')  # Hides the axis
plt.gca().set_aspect('equal', adjustable='box') 
plt.show()