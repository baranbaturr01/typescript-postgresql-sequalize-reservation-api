module.exports = {
    sumDate: (date1: Date, date2: Date): string => {
        let hour = 0;
        let minute = 0;
        let second = 0;


        const splitDate1 = date1.toLocaleString().split(":");
        const splitDate2 = date2.toLocaleString().split(":");

        hour = parseInt(splitDate1[0]) + parseInt(splitDate2[0]);
        minute = parseInt(splitDate1[1]) + parseInt(splitDate2[1]);
        hour = minute >= 60 ? hour + minute / 60 : hour;
        minute = minute >= 60 ? minute % 60 : minute;
        // second = parseInt(splitDate1[2]) + parseInt(splitDate2[2]);
        // minute = minute + second / 60;
        // second = second % 60;

        const newHour = (hour < 10 ? "0" + hour : hour).toString();
        const newMinute = (minute < 10 ? "0" + minute : minute).toString();
        return `${newHour}:${newMinute}`;
    }
}