const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long' })); // true

// object.keys(source) make an array from source arg
//.every() loop the array and get callback and return bool
// in every first of all i check i  have source property in obj (first arg ) property 
// if Top line was true we check theire value of that property 
// hasOwnProperty loop in the obj property and return bool