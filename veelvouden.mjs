import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let start =  parseFloat(await userInput.question('eerste getal: '))
let end = parseFloat(await userInput.question('laatste getal: '))
let deler1 = parseFloat(await userInput.question('eerste deler: '))
let deler2 = parseFloat(await userInput.question('tweede deler: '))

   while((start < end)){
    if((!(start == 0))&& ((!(start % deler1)) && (!(start % deler2)))){
        console.log(start)
        start++ 
    } else {
        start++ 
    }
   }
   process.exit()