const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

    if (temperature > 90) {
    console.log("Watering on");
} else {
    console.log("Watering Off");
}

    if (timeOfDay === "evening" || timeOfDay === "night") {
    console.log("Lights on");
} else {
    console.log("Lights off");
}

while (soilMoisture < 40) {
    soilMoisture = soilMoisture + 5;
    if (soilMoisture === 40) {
        console.log(40);
    }
}
