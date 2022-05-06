// Solução - Exercício - Pesquisa Binária

function binarySearch (list, value) {
  // Valores iniciais para início, meio e fim
  let start = 0
  let stop = list.length - 1
  let middle = Math.floor((start + stop) / 2)

  // Enquanto o meio não é o que estamos procurando e a lista não tem um único item
  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1
    } else {
      start = middle + 1
    }

    // Recalcular o meio em cada iteração
    middle = Math.floor((start + stop) / 2)
  }

  // Se o item do meio atual for o que estamos procurando, retorne ao índice, senão retorne -1
  return (list[middle] !== value) ? -1 : middle
}

// Lista para testar o algoritmo 
const list = [2, 5, 8, 9, 13, 45, 67, 99]

// 7 -> retorna o índice do item
console.log(binarySearch(list, 99)) 