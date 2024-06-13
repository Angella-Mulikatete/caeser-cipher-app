export function Logic(text: string, key: number, mode: 'encrypt' | 'decrypt'): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const shiftedAlphabet = alphabet.slice(key % 26) + alphabet.substring(0, key % 26);

  const result = text.split('').map(char => {
    if (char.match(/[a-zA-Z]/)) {
      const index = alphabet.indexOf(char.toLowerCase());
      const newChar = shiftedAlphabet[index];
      return char.toUpperCase() ? newChar.toUpperCase() : newChar;
    } else {
      return char;
    }
  }).join('');

  return mode === 'encrypt' ? result : result.split('').reverse().join(''); // Reverse for decryption
}
