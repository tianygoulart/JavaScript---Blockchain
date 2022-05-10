// Solução - Exercício - Insertion Sort

function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let value = items[i]

    // Armazena o valor do item atual para que ele possa ser colocado à direita
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      // Loop sobre os itens na matriz ordenada e cópia de cada item para o próximo
      items[j + 1] = items[j]
    }
    // O último item que alcançamos agora deve conter o valor do item atualmente classificado
    items[j + 1] = value
  }

  return list
}

// Lista para testar o algoritmo 
const list = [54, 26, 93, 17, 77, 31, 44, 55, 20]

// Resultado: [17, 20, 26, 31, 44, 54, 55, 77, 93]
console.log(insertionSort(list)) 