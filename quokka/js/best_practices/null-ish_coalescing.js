//! Before
const printOR = (val) => val || "Missing";

printOR(undefined); // 'Missing'
printOR(null); // 'Missing'

printOR(0); // 'Missing'
printOR(""); // 'Missing'
printOR(false); // 'Missing'
printOR(NaN); // 'Missing'

/********************************************/
//* After
//* null coalescing operator '??'
const printNullish = (val) => val ?? "Missing";

printNullish(undefined) // 'Missing'
printNullish(null) // 'Missing'

printNullish(0) // 0
printNullish('') // ''
printNullish(false) // false
printNullish(NaN) // NaN