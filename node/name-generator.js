#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default function Main(){ 
    console.log('Generation yourself Nickname for game or another enjoy');
    const answer 

function string() {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; 
}

function generationName(){
    let name1 = ["curious", "sir", "cute", "dark", "drab", "distinct", "dull", "elegant", "fancy", "glamorous", "gleaming", "graceful", "light", "misty", "motionless", "muddy", "famous", "fragile", "guitly", "nameless", "faceless", "ugly", "mad", "poor", "powerful", "evil", "foolish", "small", "smart", "slim", "selfish", "worried", "young", "old", "wild", "worm", "cyber", "magical", "this", "yellow", "black", "bloodly", "snowy"];
    let name2 = ["man", "boy", "dog", "cat", "pussy", "robot", "punk", "person", "jhon", "cucumber", "banana", "pants", "wood", "mcChicken", "computer", "car", "basket", "fag", "poison", "photo", "salt", "tobacco", "grandmother", "grandfather", "user", "world","dangy", "resident", "fish", "energy", "advice", "train", "dig", "hole", "roll", "bear", "wolf", "ass", "smile", "double", "roshan", "head", "general", "heavy", "something"];

    let name = string(name1[getRandomInt(0, name1.length)]) + ' ' + string(name2[getRandomInt(0, name2.length)]);
    return name;

}
 }
