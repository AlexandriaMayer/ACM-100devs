from datetime import datetime
import pandas as pd
import pytz

# had to close and re-open vscode

# this is really dirty, am going to refactor it following kouhai's advice



def load ():
    print("sleepy times")
    df = pd.read_csv("C:/Users/alexi/OneDrive/Documents/sleep_times.csv")
    print(df.head())
    return df

df = load()

def assign_tz(self):
    todaynow = datetime.now(tz=pytz.timezone('US/Central'))
    print(todaynow)

assign_tz(df)

def toDateTime (self):

    # decided to find/replace CST/MST with the actual timezone names 

    # for now, I am coding WET and FAST. I can refactor it later with classes/constructors to
    # make the code dry.

    wakeup1 = self["date"] +" "+ self["wakeup1"] +" "+ self["wu1_tz"]

    wakeup1_dt = pd.to_datetime(wakeup1, format='%m/%d/%Y %I:%M%p %z')

    back_to_bed = self["date"] + " " + self["backToBed"] + " " + self["btb_tz"]
    back_to_bed_dt = pd.to_datetime(back_to_bed, format='%m/%d/%Y %I:%M%p %z')

    wakeup2 = self["date"] +" "+ self["wakeup2"] + " " + self["wu2_tz"]
    wakeup2_dt = pd.to_datetime(wakeup2, format='%m/%d/%Y %I:%M%p %z')

    bedtime = self["date"] +" "+self["bedtime"] + " " + self["bt_tz"]
    bedtime_dt = pd.to_datetime(bedtime, format='%m/%d/%Y %I:%M%p %z')
    self["sleep_time_1"] = 0
    self["sleep_time_2"] = 0
    self["sleep_time_1"][1:] = wakeup1_dt.values[1:] - bedtime_dt.values[:-1]
    self["sleep_time_2"][1:] = wakeup2_dt.values[1:] - back_to_bed_dt.values[:-1]
    self["sleep_total_time"] = 0
    self["sleep_total_time"] = self["sleep_time_1"] + self["sleep_time_2"]
    # tbh I think I need to do this wet, then figure out how to make it dry

    print(f'Wakeup 1: {wakeup1_dt}')
    print(f'Back to Bed: {back_to_bed_dt}')
    print(f'Wakeup 2: {wakeup2_dt}')
    print(f'Bedtime: {bedtime_dt}')
    print(f'Sleep 1 time: {self["sleep_time_1"]}')
    print(f'Sleep 2 time: {self["sleep_time_2"]}')
    print(f'Total Sleep Time: {self["sleep_total_time"]}')

    #for e in self.itertuples():
    #    print(e)

    # it's working, but I'll need to figure out how to do conditionals for excluding NaT values

toDateTime(df)
