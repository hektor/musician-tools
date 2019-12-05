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

/**
 * Generate major scale
 * @param {Number} key
 * 
 */
const majorScale = key => {
    const majorScaleIntervals =[0, 2, 4, 5, 7, 9, 11];
    let scale = []
    for(let i = 0; i < majorScaleIntervals.length; i++){
        scale.push(chromaFlat[(key + majorScaleIntervals[i])%(chromaFlat.length)])
    };
    return scale;
}

console.log(majorScale(1))

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