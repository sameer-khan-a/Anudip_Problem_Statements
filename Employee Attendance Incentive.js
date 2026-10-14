const employeeId = 'EMP101';
const totalWorkingDays = 20;
const daysPresent = 0;
const employeeCategory = 'Full Time';

const attendancePercentage = (daysPresent / totalWorkingDays) * 100;

let incentiveStatus;
if(attendancePercentage >= 90){
    incentiveStatus = "Full Attendance Incentive";
} else if(attendancePercentage >=75 && attendancePercentage < 90){
    incentiveStatus = "Partial Attendance Incentive";
} else {
    incentiveStatus = "No Attendance Incentive";
}

let managementReview;
if (attendancePercentage < 60) {
    managementReview = 'Yes';
} else {
    managementReview = 'No';
}

let remarks;
if(attendancePercentage < 60) {
    remarks = "Attendance below 60%, Management review required";
} else if(attendancePercentage <75) {
    remarks = "attendance below incentive eligibility";
} else {
    remarks = "Employee meets attendance incentive criteria";
}

console.log("------ Employee Attendance Report ------");
console.log("Employee ID: ", employeeId);
console.log("Total working days: ", totalWorkingDays);
console.log("Days present: ", daysPresent);
console.log("Attendance percentage: ", attendancePercentage.toFixed(2) , "%");
console.log("Incentive Status: ", incentiveStatus);
console.log("Management Review Required: ", managementReview);
console.log("Remarks: ", remarks);
