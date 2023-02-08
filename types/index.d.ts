export class ReplaceNonEnglish {
    #latinLettersMap: {
        [key: string]: string;
    };

    replace(str: string): string;
}

declare const replaceNonEnglish: ReplaceNonEnglish;

export default replaceNonEnglish;