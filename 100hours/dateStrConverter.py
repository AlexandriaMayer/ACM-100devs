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

def assign_tz(self):
    cst = timezone('US/Central')
    mst = timezone('US/Mountain')
assign_tz(df)

def toDateTime (self):

    # decided to find/replace CST/MST with the actual timezone names 

    wakeup1 = self["date"] +" "+ self["wakeup1"] # + self[wu1_tz]

    wakeup1_dt = pd.to_datetime(wakeup1, format='%m/%d/%Y %I:%M%p')

    # tbh I think I need to do this wet, then figure out how to make it dry

    print(wakeup1_dt)

toDateTime(df)
