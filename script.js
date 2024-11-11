import { wordList } from "./wordlist";
function getRandomWord(list) {
    return list[Math.floor(Math.random() * wordList.length)];
}
