class LeapYearChecker {
    year: number;

    constructor(year: number) {
        this.year = year;
    }

    checkIfLeapYear(): boolean {
        if ((this.year % 4 === 0) && (this.year % 100 !== 0)) {
            return true;
        }
        else if(this.year % 400 === 0) {
            return true;
        }
        return false;
    }

    getBooleanIdentifier(bool: boolean): string {
        return 'Year ' + this.year + ' ' + (bool === true ? ' is a leap year' : 'is not a leap year');
    }

    isLeapYear(): string {
        return this.getBooleanIdentifier(this.checkIfLeapYear());
    }
}


document.getElementById('submit').addEventListener("click", () => {
    const htmlInput = document.getElementById("input").value;
    const leapYearChecker = new LeapYearChecker(htmlInput);
    document.getElementById("result").innerHTML = leapYearChecker.isLeapYear();
});