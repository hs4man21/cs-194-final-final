// the idea is that multiple tutors will have different classes they teach
// so we have a unique code for each tutor class (just in case a subject is repeated)

export const courseData = {
    key_list: ["geometry", "history", "physics", "apcalc", "apush", "spanish"],
    "geometry": {
        name: "Geometry",
        url: "/courses",
        tutor: "janedoe"
    }, 
    "history": {
        name: "History",
        url: "/courses",
        tutor: "joeschmoe"
    },  
    "physics": {
        name: "Physics",
        url: "/courses",
        tutor: "joeschmoe"
    }, 
    "apcalc": {
        name: "AP Calculus",
        url: "/courses",
        tutor: "janedoe"
    }, 
    "apush": {
        name: "APUSH",
        url: "/courses",
        tutor: "janedoe"
    }, 
    "spanish": {
        name: "Spanish",
        url: "/courses",
        tutor: "joeschmoe"
    }, 
    ratings: {
        1: "⭑☆☆☆☆",
        2: "⭑⭑☆☆☆",
        3: "⭑⭑⭑☆☆",
        4: "⭑⭑⭑⭑☆",
        5: "⭑⭑⭑⭑⭑"
    }
}