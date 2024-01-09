import sha256 from 'crypto-js/sha256';

export function hash(input: string): string {
    return sha256(input).toString();
}