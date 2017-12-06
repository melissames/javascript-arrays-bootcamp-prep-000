var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArr = [element, ...array]
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array[1] = array[0]
  array[0] = element
  return array
}

function addElementToEndOfArray(array, element){
  array[array.length] = element
  return array
}
