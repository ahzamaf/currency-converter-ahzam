#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n welcome to codewithahzam - currency convertor\n"));
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "GBP": 113,
    "JPY": 1.3,
    "AUD": 1.65,
    "PKR": 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "From Currency",
        choices: ["USD", "EUR", "GBP", "JPY", "AUD", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: "To Currency",
        choices: ["USD", "EUR", "GBP", "JPY", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: "Enter Amount",
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`converted amount = ${converted_amount}`);
