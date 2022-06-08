// Epoch timestamp to which day of the week (Monday)
export const epochConversion = (timestamp) => {
    const time = new Date(timestamp*1000);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = days[time.getDay()];
    return day;
}

// Timestamp Converter to Date (Ex: Sat Nov 6 2021)
export const timeConvert = (date) => {
    let dateFull = new Date(Number(date));
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let yyyy = dateFull.getFullYear();
    let mm = months[dateFull.getMonth()];
    let dd = String(dateFull.getDate()).padStart(2, '0');
    let dayOfWeek = days[dateFull.getDay()];

    let time = `${dayOfWeek} ${mm} ${dd} ${yyyy}`;
    return time;
}

//Time Conversion for New Comments (Ex: 1 minute ago...)
export const timeSince = (date) => {
    var seconds = Math.floor(((new Date() - date) / 1000) + 2); // +2 is to compesate for how fast requests are made for new comments(showed -1second ago)
    var intervalType;

    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        intervalType = 'year';
    } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
        intervalType = 'month';
        } else {
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
            intervalType = 'day';
        } else {
            interval = Math.floor(seconds / 3600);
            if (interval >= 1) {
            intervalType = "hour";
            } else {
            interval = Math.floor(seconds / 60);
            if (interval >= 1) {
                intervalType = "minute";
            } else {
                interval = seconds;
                intervalType = "second";
            }
            }
        }
        }
    }

    if (interval > 1 || interval === 0) {
        intervalType += 's';
    }

    return interval + ' ' + intervalType + ' ago';
};