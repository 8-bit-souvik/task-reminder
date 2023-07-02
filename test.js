// obj = {
//     id: "",
//     title: "",
//     description: "",
//     timeSchedule: "",
//     repeat: "",
//     lastUpdate: "",

// }


// const date = new Date().toString();

const date = new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toUTCString();


console.log(date);