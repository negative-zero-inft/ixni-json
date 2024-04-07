# ixni-json
the ixni dictionary, jsonified for your api pleasure
## word structure
words are built like this:
```json
{
    "word": "ixni word",
    "translations": {
        "en": [ "english translations of the word" ],
        "otherLanguages": [ 
            { "language": [ "translations in a non-english language" ] } 
        ]
    },
    "explanation": {
        "en": "the explanation in english",
        "otherLanguages": [
            { "language": "explanation in a non-english language" }
        ]
    },
    "examples": [
        { "ixni": "example in ixni", "en": "english translation of the example" }
    ],
    "origin": {
        "en": "the origin story of the word, in english",
        "otherLanguages": [
            { "language": "the origin story of the word in a non-english language" }
        ]
    },
    "reversals": {
        "en": [ "examples of a word being reversed with the use of the ne- prefix in english" ],
        "otherLanguages": [
            { "language": [ "examples of a word being reversed with the use of the ne- prefix in a non-english language" ] }
        ]
    }
}
```