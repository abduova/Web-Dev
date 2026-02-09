/* alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4


alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16


alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


let s = "my" + "string";
alert(s); // mystring



alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"



alert('1' + 2 + 2); // "122" and not "14"



let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings





let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4





let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14






let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3





let counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same






let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once */