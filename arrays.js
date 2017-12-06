var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArr = [element, ...array]
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}
