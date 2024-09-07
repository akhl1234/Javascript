/**
 * Truthy and Falsy Values in JavaScript
 * 
 * In JavaScript, every value is inherently either truthy or falsy.
 * Falsy values in JavaScript:
 * 1. false
 * 2. 0
 * 3. -0
 * 4. 0n (BigInt zero)
 * 5. ""
 * 6. null
 * 7. undefined
 * 8. NaN
 * 
 * All other values are truthy.
 */

const values = [
    false,       // Falsy
    0,           // Falsy
    -0,          // Falsy
    0n,          // Falsy
    "",          // Falsy
    null,        // Falsy
    undefined,   // Falsy
    NaN,         // Falsy
    true,        // Truthy
    1,           // Truthy
    -1,          // Truthy
    42,          // Truthy
    "0",         // Truthy
    "false",     // Truthy
    {},          // Truthy
    [],          // Truthy
    function() {}, // Truthy
    Symbol(),    // Truthy
    new Date(),  // Truthy
    Infinity,    // Truthy
    -Infinity    // Truthy
];

values.forEach((value) => {
    console.log(`Value: ${value}, Type: ${typeof value}, Truthy/Falsy: ${value ? 'Truthy' : 'Falsy'}`);
});


