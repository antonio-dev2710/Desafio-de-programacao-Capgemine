import handlePassword from "./handlePassword.js";
import pyramidEsc from "./pyramidEsc.js";
import anagrams from './anagrams.js';
import io from "console-read-write";

async function main() {

  const questao = await io.ask(
    "Escreva o numero da questão que deseja testar (1, 2 ou 3):\n"
  );

  switch (questao) {
    case "1":
      pyramidEsc(await io.ask("digite o numero\n"));
      break;
    case "2":
      console.log(handlePassword(await io.ask("digite a string de teste\n")));
      break;
    case "3":
      console.log(anagrams(await io.ask("digite a string de teste\n")));
    default:
      return;
  }
}

main();
