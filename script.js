function convertToRNA() {
    // Get the DNA sequence from the input field
    let dnaSequence = document.getElementById('dna-sequence').value.toUpperCase();

    // Check if the input contains only valid characters
    if (!/^[ATGC]+$/.test(dnaSequence)) {
        document.getElementById('output').innerHTML = "Invalid input. DNA sequence must contain only A, T, G, C.";
        return;
    }

    // Replace 'T' with 'U' to convert DNA to RNA
    let rnaSequence = dnaSequence.replace(/T/g, 'U');

    // Display the RNA sequence
    document.getElementById('output').innerHTML = "RNA Sequence: " + rnaSequence;
}
