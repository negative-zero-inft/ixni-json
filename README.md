# ixni-json
the ixni dictionary, jsonified for your api pleasure
## word structure
words are built like this:
```json
{
    "w": "ixni word",
    "t": {
        "en": [ "english translations of the word" ],
        "ol": [ 
            { "language": [ "translations in a non-english language" ] } 
        ]
    },
    "d": {
        "en": "the explanation in english",
        "ol": [
            { "language": "explanation in a non-english language" }
        ]
    },
    "e": [
        { "ixni": "example in ixni", "en": "english translation of the example" }
    ],
    "o": {
        "en": "the origin story of the word, in english",
        "ol": [
            { "language": "the origin story of the word in a non-english language" }
        ]
    },
    "n": {
        "en": [ "examples of a word being reversed with the use of the ne- prefix in english" ],
        "ol": [
            { "language": [ "examples of a word being reversed with the use of the ne- prefix in a non-english language" ] }
        ]
    }
}
```