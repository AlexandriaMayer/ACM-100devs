class WaterlooMetroLines{
    agency_id = 138
    constructor(
        agency_id, 
        route_id, 
        route_short_name,
        route_long_name,
        route_nickname,
        route_type,
        route_url,
        route_color,
        route_text_color, 
        display_picture, 
        desc_text,
        construction_starts,
        opening_dates,
        date_reroute,
        date_ended,
        active_route,
        rush_hour,
        weekend,
        late_night,
        holiday){
            this.agency = agency_id;
            this.id = route_id;
            this.shortName = route_short_name;
            this.longName = route_long_name;
            this.nickname = route_nickname;
            this.type = route_type;
            this.url = route_url;
            this.color = route_color;
            this.textColor = route_text_color
            this.displayPicture = display_picture
            this.descript = desc_text
            this.opening = first_opening;
            this.constStarts = construction_starts
            this.openings = opening_dates 
            this.latestRoute = date_reroute
            this.endingDate = date_ended
            this.active = active_route
            this.rushHourOnly = rush_hour
            this.weekendService = weekend,
            this.allNighter = late_night // come home
            this.holiday_service = holiday
            // construction starts and opening dates are arrays with numbers inside
            // reroute is when the current alignment was made. this is most relevant for buses, but also
            // can apply to the regional and rapid transit routes
            // endingDate is an optional number for routes or alignments no longer in service
            // this is useful for displaying changes over time in a webmap
            // active is a bool, tells whether the route is running or not
            // rush hour only = is the route only running during rush hour (6-9am, 4pm-6:30pm)?
            // weekend = does the route run on the weekends?
            // allNighter = Is this route part of the 24/7 network? 0 for no, 1 for yes, 2 for late night only
            // holiday_service = Does the route run on holidays?
            if (agency_id !==  undefined){
                this.agency = agency_id
            }
    }
}
// the years are just going to be numbers for now, not full date strings
const metroLine1 = new WaterlooMetroLines(138, 
        1, 
        "M1",
        "Metro Line 1",
        "Main Street",
        "Heavy Rail Metro", 
        "",
        "#eb1400",
        "#ffffff", 
        "m1.jpg", 
        "",
        1972,
        [1978, 1986, 1988, 1992, 1994, 1998, 2007],
        1989,
        undefined,
        true,
        "no",
        "yes",
        "no",
        "yes")
const metroLine2 = new WaterlooMetroLines(138, 
        2, 
        "M2",
        "Metro Line 2",
        "Westside",
        "Heavy Rail Metro", 
        "",
        "#169c31",
        "#ffffff", 
        "m2.jpg", 
        "",
        1989,
        [1990, 1993, 2010, 2011, 2012, 2013, 2014, 2014],
        2016,
        undefined,
        true,
        "no",
        "yes",
        "no",
        "yes")
const metroLine3 = new WaterlooMetroLines(138, 
        3, 
        "M3",
        "Metro Line 3",
        "Liberty",
        "Heavy Rail Metro", 
        "",
        "#121cde",
        "#ffffff", 
        "m3.jpg", 
        "",
        1992,
        [1993, 1994, 1995, 1997, 1998, 1998, 1999, 2003, 2012, 2013, 2018],
        2018,
        undefined,
        true,
        "no",
        "yes",
        "no",
        "yes")

const metroLine4 = new WaterlooMetroLines(138, 
        4, 
        "M4",
        "Metro Line 4",
        "Research",
        "Heavy Rail Metro", 
        "",
        "#4806d6",
        "#ffffff", 
        "m4.jpg", 
        "",
        1996,
        [1999, 2001, 2007, 2009, 2012],
        2012,
        undefined,
        true,
        "no",
        "yes",
        "yes",
        "yes")
const metroLine5 = new WaterlooMetroLines(138, 
        5, 
        "M5",
        "Metro Line 5",
        "University",
        "Heavy Rail Metro", 
        "",
        "#bf5700",
        "#ffffff", 
        "m5.jpg", 
        "",
        2008,
        [2010, 2011, 2014, 2009, 2012, 2014, 2017, 2018],
        2018,
        undefined,
        true,
        "no",
        "yes",
        "no",
        "yes")
const metroLine6 = new WaterlooMetroLines(138, 
        6, 
        "M6",
        "Metro Line 6",
        "Justice",
        "Heavy Rail Metro", 
        "",
        "#df04ccff",
        "#000000ff", 
        "m6.jpg", 
        "",
        2015,
        [2017, 2018, 2020, 2022],
        2022,
        undefined,
        true,
        "no",
        "yes",
        "no",
        "yes")
const metroLine7 = new WaterlooMetroLines(138, 
        7, 
        "M7",
        "Metro Line 7",
        "Crosstown",
        "Light Rail Metro", 
        "",
        "#d6c806",
        "#000", 
        "m7.jpg", 
        "",
        2014,
        [2016, 2018, 2021, 2022],
        2022,
        undefined,
        true,
        "no",
        "yes",
        "no",
        "yes")

let wmL = [metroLine1, metroLine2, metroLine3, metroLine4, metroLine5, metroLine6, metroLine7]

function toJson(arr){
    let wmlJSON = []
    for (let i = 0; arr.length; i++){
        wmlJSON.push(JSON.stringify(arr[i]))
    }
    console.log(wmlJSON);
    return wmlJSON;
}
toJson(wmL)