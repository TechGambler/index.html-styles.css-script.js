#include <stdio.h>
#include <string.h>

void convertToRNA(char dna[]) {
    int i;
    for (i = 0; i < strlen(dna); i++) {
        if (dna[i] == 'T') {
            dna[i] = 'U';
        }
    }
    printf("RNA Sequence: %s\n", dna);
}

int main() {
    char dna[100];
    
    // Input DNA sequence from user
    printf("Enter the DNA sequence (only A, T, G, C): ");
    scanf("%s", dna);

    // Validate the input to ensure it contains only A, T, G, C
    for (int i = 0; i < strlen(dna); i++) {
        if (dna[i] != 'A' && dna[i] != 'T' && dna[i] != 'G' && dna[i] != 'C') {
            printf("Invalid input. DNA sequence must contain only A, T, G, C.\n");
            return 1;
        }
    }

    // Convert DNA to RNA and print
    convertToRNA(dna);
    
    return 0;
}
