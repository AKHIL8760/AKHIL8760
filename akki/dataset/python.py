import pandas as pd

# Sample data
data = {'Gender': ['Male', 'Female', 'Female', 'Male', 'Female', 'Male', 'Female', 'Male', 'Female', 'Male']}
df = pd.DataFrame(data)
import matplotlib.pyplot as plt
import seaborn as sns

# Count the occurrences of each category
gender_counts = df['Gender'].value_counts()

# Plot the bar chart
plt.figure(figsize=(8, 6))
sns.barplot(x=gender_counts.index, y=gender_counts.values, palette='pastel')
plt.title('Gender Distribution')
plt.xlabel('Gender')
plt.ylabel('Count')
plt.show()
import matplotlib.pyplot as plt
import seaborn as sns

# Count the occurrences of each category
gender_counts = df['Gender'].value_counts()

# Plot the bar chart
plt.figure(figsize=(8, 6))
sns.barplot(x=gender_counts.index, y=gender_counts.values, palette='pastel')
plt.title('Gender Distribution')
plt.xlabel('Gender')
plt.ylabel('Count')
plt.show()
import pandas as pd
import numpy as np

# Generate random ages for the sample dataset
np.random.seed(42)
data = {'Age': np.random.randint(18, 60, size=100)}
df = pd.DataFrame(data)
import matplotlib.pyplot as plt
import seaborn as sns

# Plot the histogram
plt.figure(figsize=(8, 6))
sns.histplot(df['Age'], bins=10, kde=False, color='skyblue')
plt.title('Age Distribution')
plt.xlabel('Age')
plt.ylabel('Frequency')
plt.show()


