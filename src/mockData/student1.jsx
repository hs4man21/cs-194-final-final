export const studentData = {
    username: "sample1",
    userType: "student",
    name: "First Last",
    courses: ["geometry", "apush", "physics", "history"],
    courseURLs: ["/dashboard", "/dashboard", "/dashboard", "/dashboard"],
    tutors: ["janedoe", "joeschmoe"],
    img: "profile",
    paymentMethod: "todo",
    upcoming: [ {tutor: "janedoe", course: "apush", hours: 1, date: "3/18/2021", time: "5 PM PST"}, 
                {tutor: "joeschmoe", course: "physics", hours: 2, date: "3/19/2021", time: "1 PM PST"}, 
                {tutor: "joeschmoe", course: "physics", hours: 2, date: "3/20/2021", time: "7 PM PST"},
            ],
    past: [{tutor: "janedoe", course: "geometry", hours: 2, date: "2/20/2021", time: "3 PM PST", rating: 4}, 
            {tutor: "janedoe", course: "apush", hours: 1, date: "2/18/2021", time: "4 PM PST", rating: 5}, 
            {tutor: "joeschmoe", course: "physics", hours: 1, date: "2/16/2021", time: "11 AM PST", rating: 5},
            {tutor: "joeschmoe", course: "history", hours: 1, date: "2/16/2021", time: "12 PM PST", rating: 3}
        ],
}
// upcoming session entry: ["username", "course", hours, [MM, DD, YYYY], [Hour, "PM or AM", "Time Zone"]]
// past session entry: ["username", "course", hours, [MM, DD, YYYY], [Hour, "PM or AM", "Time Zone"], rating_out_of_5]

// TODO: make a class to store everything lol
