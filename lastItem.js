// complete this function so that it will return
// the last item in the input array

var getLastItem = function(array){
	return array[array.length - 1]
}

console.assert(getLastItem(['lannister','baratheon','tyrell']) === 'tyrell')
console.assert(getLastItem([8,6,7,5,3,0,9]) === 9)
console.assert(getLastItem([1]) === 1)
// wait for it ....
console.assert(getLastItem('professor x') === 'x')
