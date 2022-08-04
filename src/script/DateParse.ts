export default {
    sumDate: (startDate: Date, endDate: Date) => {
        let hour = 0;
        let minute = 0;
        const splitDate1 = startDate.toLocaleString().split(":");
        const splitDate2 = endDate.toLocaleString().split(":");

        hour = parseInt(splitDate1[0]) + parseInt(splitDate2[0]);
        minute = parseInt(splitDate1[1]) + parseInt(splitDate2[1]);
        hour = minute >= 60 ? hour + minute / 60 : hour;
        minute = minute >= 60 ? minute % 60 : minute;

        const newHour = (hour < 10 ? "0" + hour : hour).toString();
        const newMinute = (minute < 10 ? "0" + minute : minute).toString();
        return `${newHour}:${newMinute}`;
    }
}