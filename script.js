// Codon table for RNA to amino acids
const codonTable = {
   'UUU': 'Phenylalanine (Phe)',
     'UUC': 'Phenylalanine (Phe)',
     'UUA': 'Leucine (Leu)',
     'UUG': 'Leucine (Leu)',
     'CUU': 'Leucine (Leu)',
     'CUC': 'Leucine (Leu)',
     'CUA': 'Leucine (Leu)',
     'CUG': 'Leucine (Leu)',
     'AUU': 'Isoleucine (Ile)',
     'AUC': 'Isoleucine (Ile)',
     'AUA': 'Isoleucine (Ile)',
     'AUG': 'Methionine (Met)',
     'GUU': 'Valine (Val)',
     'GUC': 'Valine (Val)',
     'GUA': 'Valine (Val)',
     'GUG': 'Valine (Val)',
     'UCU': 'Serine (Ser)',
     'UCC': 'Serine (Ser)',
     'UCA': 'Serine (Ser)',
     'UCG': 'Serine (Ser)',
     'CCU': 'Proline (Pro)',
     'CCC': 'Proline (Pro)',
     'CCA': 'Proline (Pro)',
     'CCG': 'Proline (Pro)',
     'ACU': 'Threonine (Thr)',
     'ACC': 'Threonine (Thr)',
     'ACA': 'Threonine (Thr)',
     'ACG': 'Threonine (Thr)',
     'GCU': 'Alanine (Ala)',
     'GCC': 'Alanine (Ala)',
     'GCA': 'Alanine (Ala)',
     'GCG': 'Alanine (Ala)',
     'UAU': 'Tyrosine (Tyr)',
     'UAC': 'Tyrosine (Tyr)',
     'UAA': 'Stop',
     'UAG': 'Stop',
     'CAU': 'Histidine (His)',
     'CAC': 'Histidine (His)',
     'CAA': 'Glutamine (Gln)',
     'CAG': 'Glutamine (Gln)',
     'AAU': 'Asparagine (Asn)',
     'AAC': 'Asparagine (Asn)',
     'AAA': 'Lysine (Lys)',
     'AAG': 'Lysine (Lys)',
     'GAU': 'Aspartic acid (Asp)',
     'GAC': 'Aspartic acid (Asp)',
     'GAA': 'Glutamic acid (Glu)',
     'GAG': 'Glutamic acid (Glu)',
     'UGU': 'Cysteine (Cys)',
     'UGC': 'Cysteine (Cys)',
     'UGA': 'Stop',
     'UGG': 'Tryptophan (Trp)',
     'CGU': 'Arginine (Arg)',
     'CGC': 'Arginine (Arg)',
     'CGA': 'Arginine (Arg)',
     'CGG': 'Arginine (Arg)',
     'AGU': 'Serine (Ser)',
     'AGC': 'Serine (Ser)',
     'AGA': 'Arginine (Arg)',
     'AGG': 'Arginine (Arg)',
     'GGU': 'Glycine (Gly)',
     'GGC': 'Glycine (Gly)',
     'GGA': 'Glycine (Gly)',
     'GGG': 'Glycine (Gly)'
};
// Function to convert DNA to RNA
function convertToRNA() {
    let dnaSequence = document.getElementById('dna-sequence').value.toUpperCase();

    // Validate DNA sequence
    if (!/^[ATGC]+$/.test(dnaSequence)) {
        document.getElementById('rna-output').innerHTML = "Invalid input. DNA sequence must contain only A, T, G, C.";
        document.getElementById('acid-output').innerHTML = ""; // Clear amino acid output
        return;
    }

    // Replace T with U
    let rnaSequence = dnaSequence.replace(/T/g, 'U');

    // Display the RNA sequence
    document.getElementById('rna-output').innerHTML = "RNA Sequence: " + rnaSequence;
    document.getElementById('acid-output').innerHTML = ""; // Clear amino acid output
}

// Function to convert RNA to amino acids using the codon table
function convertToAminoAcids() {
    let rnaSequence = document.getElementById('rna-output').textContent.replace("RNA Sequence: ", "").trim();

    // Validate that RNA sequence is available
    if (!rnaSequence || !/^[AUGC]+$/.test(rnaSequence)) {
        document.getElementById('acid-output').innerHTML = "Please convert DNA to RNA first.";
        return;
    }

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
