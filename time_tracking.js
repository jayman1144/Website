let types_activities = [];
let durations = [];
const daily_button = document.getElementById("daily");
const weekly_button = document.getElementById("weekly");
const monthly_button = document.getElementById("monthly");
const current_displays = document.querySelectorAll(".current");
const previous_displays = document.querySelectorAll(".previous");

fetch("data.json").then(response => response.json()).then(value => value.forEach((values,i) => {
    types_activities[i] = values.title;
    durations[i] = values.timeframes;
    i++;
}))

daily_button.addEventListener("click",() => {
    for(i=0;i<types_activities.length;i++){
        current_displays[i].textContent = `${durations[i].daily.current}hrs`;
        previous_displays[i].textContent = `${durations[i].daily.previous}hrs`;   
    }
})
weekly_button.addEventListener("click",() => {
    for(i=0;i<types_activities.length;i++){
        current_displays[i].textContent = `${durations[i].weekly.current}hrs`;
        previous_displays[i].textContent = `${durations[i].weekly.previous}hrs`;   
    }
})
monthly_button.addEventListener("click",() => {
    for(i=0;i<types_activities.length;i++){
        current_displays[i].textContent = `${durations[i].monthly.current}hrs`;
        previous_displays[i].textContent = `${durations[i].monthly.previous}hrs`;   
    }
})


