"use strict";
var LeapYearChecker = /** @class */ (function () {
    function LeapYearChecker(year) {
        this.year = year;
    }
    LeapYearChecker.prototype.checkIfLeapYear = function () {
        if ((this.year % 4 === 0) && (this.year % 100 !== 0)) {
            return true;
        }
        else if (this.year % 400 === 0) {
            return true;
        }
        return false;
    };
    LeapYearChecker.prototype.getBooleanIdentifier = function (bool) {
        return 'Year ' + this.year + ' ' + (bool === true ? ' is a leap year' : 'is not a leap year');
    };
    LeapYearChecker.prototype.isLeapYear = function () {
        return this.getBooleanIdentifier(this.checkIfLeapYear());
    };
    return LeapYearChecker;
}());
document.getElementById('submit').addEventListener("click", function () {
    var htmlInput = document.getElementById("input").value;
    var leapYearChecker = new LeapYearChecker(htmlInput);
    document.getElementById("result").innerHTML = leapYearChecker.isLeapYear();
});
//# sourceMappingURL=index.js.map