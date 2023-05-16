// Write your solution in this file!
const employee = {
    name: "Joey",
    address: "101 main",
}

function updateEmployeeWithKeyAndValue(emp, key, val) {
    return {
        ...emp,
        [key]:val,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, val) {
    emp[key] = val;
    return emp;
}

function deleteFromEmployeeByKey(emp, key) {
    const temp = {...emp};
    delete temp[key];
    return temp;
}

function destructivelyDeleteFromEmployeeByKey(emp, key) {
    delete emp[key];
    return emp;
}