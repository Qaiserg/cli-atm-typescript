#! /usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";
import ListPrompt from "inquirer/lib/prompts/list.js";

let myBalance = 100000;

let myPin = 1234;

const answer = await inquirer.prompt([{

    name: "userinput",
    message: "Please enter your pin",
    type: "number",
    
}
]);

if (answer.userinput === myPin) {
    console.log("Successfully verified");

    let answer2 = await inquirer.prompt([{

        name: "userchoice",
        message: "What would you like to do",
        type: "list",
        choices: ["Withdraw", "Fastcash", "Checkbalance", "Transfer"]
         
    },
    ]);
    
    if (answer2.userchoice === "Withdraw") {
        
        let amount = await inquirer.prompt([{

            name: "amount",
            message: "Please enter the amount",
            type: "number",

        }]);

        if (amount.amount <= myBalance) {
            myBalance -= amount.amount;
            console.log("Withdrawl successful your remaining balance is: " + myBalance);
            console.log("Thank you choosing our atm see you again");
        } else {
            console.log("Insufficient funds");
        }

        

    } else if (answer2.userchoice === "Checkbalance") {
        console.log("Your balance is: " + myBalance);

    } else if (answer2.userchoice === "Fastcash") {

        let fast = await inquirer.prompt([{

            name: "cash",
            message: "Please select the amount",
            type: "list",
            choices: ["5,000", "10,000", "20,000", "25,000"]
        }]);

        let selectedAmount = parseInt(fast.cash.replace(",", ""));
    if (selectedAmount <= myBalance) {
        myBalance -= selectedAmount;
        console.log(`Withdrawal successful. Your remaining balance is: ${myBalance}`);
        console.log("Thank you for using our atm");
    } else {
        console.log("Insufficient funds");
    }
        
    } else if (answer2.userchoice === "Transfer") {

        let transfer = await inquirer.prompt([{

            name: "transfer",
            message: "Who would you like transfer money?",
            type: "list",
            choices: ["Qaiser Gill", "Isfhan Ahmed", "Shahmeer", "Hamza Syed", "Ariba Memon", "Sadia Altaf", "Manahil Jameel"]
        }]);

        
        let transferAmount = await inquirer.prompt([{

            name: "transfer",
            message: "Please enter the amount you like to transfer",
            type: "number",
    
        }]);

        if (transferAmount.transfer <= myBalance) {
            myBalance -= transferAmount.transfer;
            console.log("Transfer successful your remaining balance is: " + myBalance);
            console.log("Thank you for using our service");
        } else {
            console.log("Insufficient funds");
        }
       
    }
    
} 

else {
    console.log("Incorrect pin");
}

