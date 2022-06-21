// Primitive types vs objects

// Primitive data types - immutable data represented at the lowest level
// - Boolean
// - Null
// - Undefined
// - Number
// - BigInt
// - String
// - Symbol

// When comparing Primitives the values are compared
123 === 123   // true
'123' === 123 // false
'123' == 123  // true

const a = { id: 123, text: '123' };
const b = { id: 123, text: '123' };

a == b  // false
a === b // false

const c = a;
c === a // true
a.id = 456;
console.log(c.id); // 456

// `a` and `c` "reference" the same object

// when objects are compared javascript checks to see if the variables reference the same object

const d = {...a};
a.id = 789;
console.log(d.id); // 456

// `d` is a copy of `a`

// Deep scanning objects to check for equality is far more costly to performance* and more complicated than creating new objects

// This is the linchpin of react and why mutating data is "bad"...react won't know that values inside of the object have changed