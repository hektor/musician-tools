// 12 note chromatic numbering system (0 = C, 1 = C#, ... 11 = B);
// TODO: Automatic Accidentals
    // CONDITIONS
    // All sharps & all flats if possible
    // Fewest accidentals possible
    // Unique note letters

const chromaSharp = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ];
const chromaFlat = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B' ];

// following circle of fifths
const majorKeyAccidentalType = {
    'flat' : ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'],
    'sharp' : ['G', 'D', 'A', 'E', 'B', 'F#', 'C#'],
    'natural'  : ['C']
}
// add a harmonic equivalent option
// toggle between default (least amount '#' & 'b'), '#' and 'b'
// - harmonic equivalents are used as it is common practice to use 1 type of accidental in a composition
const accidentals = ['bb', 'b', '', '#', '##'];

// TODO: Make a Scale class and use these functions as subclasses

// generates major scale from interval pattern
function majorScale(key) {
    if(typeof key === 'string') {
        console.log(`You entered a string, currently only chromatic numbers can be used as a parameter`);
    } else {
        const majorScaleIntervals = [0, 2, 4, 5, 7, 9, 11];
        for(let i = 0; i < majorScaleIntervals.length; i++){
            const majorScale = chromaFlat[(key + majorScaleIntervals[i])%(chromaFlat.length)];
            //console.log(majorScale);
        };
    }
}
majorScale(1);

class Scale {
    constructor(key, type) {
    }
    // generate major scale from interval pattern
    major(key) {
        const majorIntervals = [0, 2, 4, 5, 7, 9, 11];
        for(let i = 0; i < majorIntervals.length; i++){
            return chromaFlat[(key + majorIntervals[i])%(chromaFlat.length)];
        };
    }
    // generates minor scale from interval pattern
    minor(key) {
        // OPTIONS
        // work from mode perspective
        // work again with steps
    }
}

class Mode extends Scale {

}

const cMajScale = new Scale();
console.log(cMajScale.major(0));





const Note = (note, octave) => {

}
