![commits](https://img.shields.io/github/last-commit/AntonOshurek/replaceNonEnglish?style=plastic)
![lang](https://img.shields.io/github/languages/top/AntonOshurek/replaceNonEnglish)


# Replace Non-English :writing_hand:

Replace Non-English is a JavaScript NPM library that provides a function to replace non-English characters in a string with their English counterparts. This is useful for applications that need to convert names, addresses, or other text fields into a common format for processing or storage.

## Installation :floppy_disk:
**To install Replace Non-English, simply run the following command in your terminal: :point_down:**

```
npm i --save-dev replacenonenglish
```

## Usage
**To use Replace Non-English in your project, you can import the replaceNonEnglish function like this: :point_down:**

```
import replaceNonEnglish from 'replacenonenglish';
```

## Then, you can use the replaceNonEnglish function to replace non-English characters in a string. For example: :point_down:

```
const inputString = 'Привет, мир!';
const result = replaceNonEnglish.replace(inputString);
console.log(result); // Output: "Privet, mir!"
```

or:

```
const testString = 'Poznań Gorzów';
console.log(replaceNonEnglish.replace(testString)); // Output: "Poznan, Gorzow!"
```

## Support :earth_americas: 
Replace Non-English supports the following non-English characters:

Russian
Polish
Ukrainian
German
French
Spanish
Portuguese
Italian
License

### Replace Non-English is released under the MIT license.

### If you have any proposal for this library or any questions, send email on my adress - oshurekweb@gmail.com :)
