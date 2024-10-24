// Codon table for RNA to amino acids
const codonTable = {
    'UUU': 'Phenylalanine (Phe)', 'UUC': 'Phenylalanine (Phe)',
    'UUA': 'Leucine (Leu)', 'UUG': 'Leucine (Leu)',
    'CUU': 'Leucine (Leu)', 'CUC': 'Leucine (Leu)',
    'AUG': 'Methionine (Met)',  // Start codon
    'GGU': 'Glycine (Gly)', 'GGC': 'Glycine (Gly)',
    'UAA': 'Stop', 'UAG': 'Stop', 'UGA': 'Stop',
    'CCU': 'Proline (Pro)', 'CCC': 'Proline (Pro)',
    'ACU': 'Threonine (Thr)', 'ACC': 'Threonine (Thr)',
    // Add the remaining codons to complete the table
};

// Function to convert DNA to RNA
function convertToRNA(dna) {
    return dna.replace(/T/g, 'U');
}

// Function to convert RNA to amino acids using the codon table
function convertToAminoAcids() {
    // Get the DNA sequence from the input field
    let dnaSequence = document.getElementById('dna-sequence').value.toUpperCase();

    // Check if the input contains only valid characters (A, T, G, C)
    if (!/^[ATGC]+$/.test(dnaSequence)) {
        document.getElementById('rna-output').innerHTML = "Invalid input. DNA sequence must contain only A, T, G, C.";
        document.getElementById('acid-output').innerHTML = "";
        return;
    }

    // Convert DNA to RNA
    let rnaSequence = convertToRNA(dnaSequence);

    // Display RNA sequence
    document.getElementById('rna-output').innerHTML = "RNA Sequence: " + rnaSequence;

    // Split RNA sequence into codons (groups of three)
    let codons = rnaSequence.match(/.{1,3}/g);
    if (!codons) {
        document.getElementById('acid-output').innerHTML = "Invalid RNA sequence.";
        return;
    }

    // Convert codons to amino acids
    let aminoAcidSequence = codons.map(codon => codonTable[codon] || 'Unknown').join(' - ');

    // Display the amino acid sequence
    document.getElementById('acid-output').innerHTML = "Amino Acid Sequence: " + aminoAcidSequence;
}
