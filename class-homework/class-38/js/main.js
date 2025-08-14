class WaterlooMetroLines{
    constructor(
        agency_id, 
        route_id, 
        route_short_name,
        route_long_name,
        route_type,
        route_url,
        route_color,
        route_text_color, 
        display_picture, 
        desc_text,
        construction_starts,
        opening_dates){
            this.agency = agency_id;
            this.id = route_id;
            this.shortName = route_short_name;
            this.longName = route_long_name;
            this.type = route_type;
            this.url = route_url;
            this.color = route_color;
            this.textColor = route_text_color
            this.displayPicture = display_picture
            this.descript = desc_text
            this.opening = first_opening;
            this.constStarts = construction_starts
            this.openings = opening_dates 
            // construction starts and opening dates are arrays with numbers inside
    }
}