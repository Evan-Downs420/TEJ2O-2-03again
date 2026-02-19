/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan
 * Created on: Feb 2020
 * This program will do basic math
*/

basic.clearScreen();
basic.pause(1000);

// Display dimensions
basic.showString("A rectangle has dimensions 5 cm & 3 cm.");

// Calculate and display perimeter: P = 2 * (L + W)
basic.showString("The perimeter would be: ");
basic.showNumber(2 * (5 + 3));
basic.showString(" cm.");

// Calculate and display area: A = L * W
basic.showString("The area would be: ");
basic.showNumber(5 * 3);
basic.showString(" cm^2.");