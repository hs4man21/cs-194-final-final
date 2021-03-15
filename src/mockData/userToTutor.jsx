// export const userToProfile = {
//     "sample1": "student1.jsx",
//     "tutor1": "tutor1.jsx",
//     "tutor2": "tutor2.jsx"
// }

// for privacy purposes, maybe we only have tutor profiles here

export const userToTutor = {
    "key_list": ["janedoe", "joeschmoe", "marysmith", "johnappleseed", "albertwilson"],
    "janedoe": {
        username: "janedoe",
        userType: "tutor",
        name: "Jane Doe",
        courses: ["geometry", "apush", "apcalc"],
        courseRatings: {"geometry": 4.92, "apush": 4.78, "apcalc": 4.41},
        overallRating: 4.75,
        students: ["sample1"],
        url: "/sampleTutor",
        img: "profile",
        paymentMethod: "todo"
    },
    "joeschmoe": {
        username: "joeschmoe",
        userType: "tutor",
        name: "Joe Schmoe",
        courses: ["physics", "history",  "spanish"],
        courseRatings: {"physics": 4.97, "history": 4.75, "spanish": 4.68},
        overallRating: 4.81,
        students: ["sample1"],
        url: "/sampleTutor2",
        img: "profile",
        paymentMethod: "todo"
    },
    "marysmith": {
        username: "marysmith",
        userType: "tutor",
        name: "Mary Smith",
        courses: [],
        courseRatings: {},
        overallRating: 4.98,
        students: [],
        url: "/sampleTutor3",
        img: "profile",
        paymentMethod: "todo"
    },
    "johnappleseed": {
        username: "johnappleseed",
        userType: "tutor",
        name: "John Appleseed",
        courses: [],
        courseRatings: {},
        overallRating: 4.50,
        students: [],
        url: "/sampleTutor4",
        img: "profile",
        paymentMethod: "todo"
    },
    "albertwilson": {
        username: "albertwilson",
        userType: "tutor",
        name: "Albert Wilson",
        courses: [],
        courseRatings: {},
        overallRating: 4.76,
        students: [],
        url: "/sampleTutor5",
        img: "profile",
        paymentMethod: "todo"
    }
}