from datetime import datetime
import pandas as pd
import pytz

# had to close and re-open vscode

def load ():
    print("sleepy times")
    df = pd.read_csv("C:/Users/alexi/OneDrive/Documents/sleep_times.csv")
    print(df.head())
    return df

df = load()

def toDateTime (self):

    wakeup1 = self["date"] +" "+ self["wakeup1"]

    wakeup1_dt = datetime.strptime(wakeup1, '%m/%d/%Y %I:%M%p')

    # tbh I think I need to do this wet, then figure out how to make it dry

    print(wakeup1_dt)

toDateTime(df)
