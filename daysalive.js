function DateObject(weekday, day, month, year) {
    console.log("DateObject instantiated.")
    this.weekday = weekday;
    this.day = day;
    this.month = month;
    this.year = year;
    this.CheckIfIsLeapYear();
    this.GetNumDaysThisMonth();

    console.log("weekday=" + this.weekday);
    console.log("day=" + this.day);
    console.log("month=" + this.month);
    console.log("year=" + this.year);
    console.log("Leap Year?" + this.isLeapYear);
    console.log("Num days this month?" + this.numDaysInThisMonth);
}

DateObject.prototype.CheckIfIsLeapYear = function() {
    //A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
    if (this.year % 4 === 0 && !(this.year % 100 === 0 && this.year % 400 != 0))
        this.isLeapYear = true;
    else
        this.isLeapYear = false;
}
DateObject.prototype.GetNumDaysThisMonth = function() {
    if (this.month === 2) {
        if (this.isLeapYear)
            this.numDaysInThisMonth = 29;
        else
            this.numDaysInThisMonth = 28;
    }
        
    //Angry Jungle Snakes Nibble!
    else if (this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11)
        this.numDaysInThisMonth = 30;
    else
        this.numDaysInThisMonth = 31;
}
DateObject.prototype.NextDay = function () {
    this.weekday = (this.weekday === 7) ? 1 : this.weekday + 1;

    if (this.day != this.numDaysInThisMonth)
        this.day++;
    else {
        this.day = 1;
        if (this.month != 12)
            this.month++;
        else {
            this.month = 1;
            this.year++;
            this.CheckIfIsLeapYear();
        }
        this.GetNumDaysThisMonth();
    }
}
DateObject.prototype.PreviousDay = function () {
    this.weekday = (this.weekday === 1) ? 7 : this.weekday - 1;

    if (this.day != 1)
        this.day--;
    else {
        if (this.month != 1)
            this.month--;
        else {
            this.month = 12;
            this.year--;
            this.CheckIfIsLeapYear();
        }
        this.GetNumDaysThisMonth();
        this.day = this.numDaysInThisMonth;
    }
}
DateObject.prototype.toString = function() {
    return this.day.toString() + " " + this.month.toString() + " " + this.year.toString();
}

function CalculateDaysAlive() {
    var birth_day = document.getElementById("birth_day").value;
    var birth_month = document.getElementById("birth_month").value;
    var birth_year = document.getElementById("birth_year").value;

    var today = new Date();
    document.getElementById("output1").innerHTML = "Today is:  " + today.toDateString();

    var dateObj = new DateObject(today.getDay() + 1, today.getDate() + 1, today.getMonth() + 1, today.getFullYear());

    var i = 0;
    for (i = 0; true; i++) {
        if (dateObj.year > birth_year || dateObj.month > birth_month || dateObj.day > birth_day) {
            dateObj.PreviousDay();
        }
        else {
            document.getElementById("output2").innerHTML = "You have been alive for " + i + " days.";
            break;
        }
    }
}