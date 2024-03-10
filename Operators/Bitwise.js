// Bitwise AND ( & )
let resultAND = 5 & 3; // Binary: 0101 & 0011 = 0001 (Decimal: 1)

// Bitwise OR ( | )
let resultOR = 5 | 3; // Binary: 0101 | 0011 = 0111 (Decimal: 7)

// Bitwise XOR ( ^ )
let resultXOR = 5 ^ 3; // Binary: 0101 ^ 0011 = 0110 (Decimal: 6)

// Bitwise NOT ( ~ )
let resultNOT = ~5; // Binary: ~0101 = 1010 (Two's complement: -6)

// Left Shift ( << )
let resultLeftShift = 5 << 1; // Binary: 0101 << 1 = 1010 (Decimal: 10)

// Right Shift ( >> )
let resultRightShift = 5 >> 1; // Binary: 0101 >> 1 = 0010 (Decimal: 2)

// Unsigned Right Shift ( >>> )
let resultUnsignedRightShift = -5 >>> 1; // Binary: 11111111111111111111111111111011 >>> 1 = 01111111111111111111111111111101 (Decimal: 2147483645)

// Output the results
console.log("Bitwise AND:", resultAND);
console.log("Bitwise OR:", resultOR);
console.log("Bitwise XOR:", resultXOR);
console.log("Bitwise NOT:", resultNOT);
console.log("Left Shift:", resultLeftShift);
console.log("Right Shift:", resultRightShift);
console.log("Unsigned Right Shift:", resultUnsignedRightShift);
