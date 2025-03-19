import pandas as pd

def readCSV():
  df = pd.read_csv("example/path/here.csv")
  print(df.head())

readCSV()
