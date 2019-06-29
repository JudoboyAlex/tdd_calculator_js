function add(num1,num2) {
    return num1 + num2
}

function subtract(num1,num2) {
    return num1 - num2
}

function sum(nums) {
    return nums.reduce((a, b) => a + b, 0)

}

module.exports = {add, subtract, sum}