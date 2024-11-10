MD5 Hash Algorithm
This repository contains an implementation of the MD5 (Message Digest Algorithm 5) hash algorithm. MD5 is a widely used cryptographic hash function that produces a 128-bit (16-byte) hash value. It's commonly used to verify data integrity but is no longer recommended for cryptographic security due to vulnerabilities.

How It Works
The MD5 algorithm processes input data in 512-bit blocks, producing a 128-bit hash value. The algorithm goes through multiple steps, including:

Padding: Adds bits to the input so it matches the block size.
Initialization: Sets initial values for four 32-bit variables.
Main Loop: Processes each 512-bit block with bitwise operations and mathematical functions.
Finalization: Outputs a 128-bit hash (usually represented as a 32-character hexadecimal number).

Limitations
MD5 is no longer secure for cryptographic purposes due to susceptibility to collision attacks. Use SHA-256 or stronger algorithms for sensitive applications.

License
This project is open-source and available under the MIT License. Contributions are welcome!
