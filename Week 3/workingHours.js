function workingHours(input) {

    let hour = Number(input[0]);
    let day = input[1];

    if (hour >=10 && hour <= 18) {
        if(day === "Monday" || day === "Tuesday" 
        || day === "Wednesday" || day === "Thursday" 
        || day === "Friday" || day === "Saturday") {
            console.log("open");
        }

        if (day === "Sunday") {
            console.log("closed");
        }

    } else {

        console.log("closed");
    }
}
workingHours(["11",
"Sunday"])


