// Solução - Exercício - Merge Sort

function mergeSort (arr) {
  if (arr.length === 1) {
    // Retornar uma vez que atingimos um array com um único item
    return arr
  }

  // Obter o item do meio do array arredondado para baixo
  const middle = Math.floor(arr.length / 2) 

  // Itens no lado esquerdo
  const left = arr.slice(0, middle) 

  // Itens no lado direito
  const right = arr.slice(middle) 

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// Comparar as matrizes item por item e retornar o resultado concatenado
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      // O método push () adiciona um novo item ao final de um array e retorna o novo tamanho de um array.
      result.push(left[indexLeft])
      indexLeft++
    } else {
      // O método push () adiciona um novo item ao final de um array e retorna o novo tamanho de um array.
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

// Lista para testar o algoritmo 
const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]

// Resultado: [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
console.log(mergeSort(list)) 