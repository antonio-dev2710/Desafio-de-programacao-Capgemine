export default function anagrams(palavra) {
  let qtdanagramas = 0;
  for (
    let indexLetraAtual = 0;
    indexLetraAtual < palavra.length;
    indexLetraAtual++
  ) {
    qtdanagramas += anagramas(palavra, indexLetraAtual);
  }
  return qtdanagramas;
}

function anagramas(palavra, indexLetraAtual) {
  let qtdanagramas = 0;
  let qtdIgnorar = 0;
  let temRepetida = true;

  while (temRepetida) {
    let proximoIndex = indexLetraRepetida(indexLetraAtual, palavra, qtdIgnorar);
    if (proximoIndex !== -1) {
      if (indexLetraAtual + 1 === proximoIndex) {
        //ovo
        qtdanagramas++;
        qtdIgnorar++;
      } else {
        qtdanagramas++;
        let subString = palavra.substring(indexLetraAtual, proximoIndex + 1);
        let qtdElementosEntreIndices = subString.length - 2;

        if (qtdElementosEntreIndices % 2 !== 0) {
          // let letraMeio = subString[(subString.length-1)/2]
          let primeiraMetade = subString.substring(
            0,
            ((subString.length - 1) / 2) + 1
          );
          let segundaMetade = subString.substring(
            (subString.length - 1) / 2,
            subString.length
          );
          let qtdIncludes = 0;

          for (let index = 0; index < primeiraMetade.length; index++) {
            if (segundaMetade.includes(primeiraMetade[index])) {
              qtdIncludes++;
            } else {
              break;
            }
          }
          if (qtdIncludes === primeiraMetade.length) {
            qtdanagramas++;
          }

          qtdIgnorar++;
        }

        if (qtdElementosEntreIndices % 2 === 0) {
          let primeiraMetade2 = subString.substring(0, subString.length / 2);
          let segundaMetade2 = subString.substring(
            subString.length / 2 - 1,
            subString.length
          );
          let qtdIncludes2 = 0;

          for (let index = 0; index < primeiraMetade2.length; index++) {
            if (segundaMetade2.includes(primeiraMetade2[index])) {
              qtdIncludes2++;
            } else {
              break;
            }
          }
          if (qtdIncludes2 === primeiraMetade2.length) {
            qtdanagramas++;
          }

          qtdIgnorar++;
        }
      }
    } else {
      temRepetida = false;
    }
  }
  return qtdanagramas;
}

// retorna o próximo índice da letra repetida
// se não houver (mais) letra repetida ou qtdIgnorar===palavra.length-1 retorna -1
function indexLetraRepetida(indexLetraAtual, palavra, qtdIgnorar) {
  if (qtdIgnorar === palavra.length - 1) {
    return -1;
  }
  if (
    !palavra.substring(indexLetraAtual + 1).includes(palavra[indexLetraAtual])
  ) {
    return -1;
  }

  let palavraAPartirDoIndex = palavra.substring(indexLetraAtual);
  const letraProcurando = palavraAPartirDoIndex[0];

  for (let i = 1; i < palavraAPartirDoIndex.length; i++) {
    if (letraProcurando === palavraAPartirDoIndex[i]) {
      if (qtdIgnorar > 0) {
        qtdIgnorar--;
      } else {
        return i + indexLetraAtual;
      }
    }
  }

  return -1;
}
