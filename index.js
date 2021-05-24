let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
let lang1 = language.slice(0,1) + language.slice(language.indexOf("S"),(language.indexOf("S")+1));
console.log(lang1);
console.log(language.slice(0,1)+language.slice(4,5));


//b) Without using .slice(), use method chaining to accomplish the same thing.
lang2 = language.replace("ava","").replace("cript","");
console.log(lang2);

//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for ${language} is ${lang1}.`)


//d) Just for fun, try chaining 3 or more methods together, and then print the result.

lang3 = language.replace("ava","").replace("cript","").trim();
console.log(lang3);