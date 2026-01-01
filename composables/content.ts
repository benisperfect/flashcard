export interface Flashcard {
    id: number;
    word: string;
    pos: "n" | "v" | "adj" | "adv" | "prep" | "conj" | "interj";
    meaning: string;
}
