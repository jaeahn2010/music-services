const opuses = [
    {
        title: "Piano Sonata No. 1 in F minor, Op. 2, No. 1",
        composer: "Beethoven-Ludwig-van",
        movements: [
            {movementTitle: "I. Allegro", price: 30},
            {movementTitle: "II. Adagio", price: 30},
            {movementTitle: "III. Menuetto. Allegretto", price: 30},
            {movementTitle: "IV. Prestissimo", price: 90}
        ],
        instrumentation: ["piano"],
        price: 175
    },
    {
        title: "Sonata No. 2 in E-flat major for Clarinet and Piano, Op. 120, No. 2",
        composer: "Brahms-Johannes",
        movements: [
            {movementTitle: "I. Allegro amabile", price: 75},
            {movementTitle: "II. Allegro appassionato", price: 75},
            {movementTitle: "III. Andante con moto", price: 60}
        ],
        instrumentation: ["clarinet", "viola", "piano"],
        price: 175
    },
    {
        title: "Scherzo No. 2 in B-flat major, Op. 31",
        composer: "Chopin-Frederic",
        movements: [],
        instrumentation: ["piano"],
        price: 240
    },
    {
        title: "Fêtes galantes",
        composer: "Debussy-Claude",
        movements: [
            {movementTitle: "I. En sourdine", price: 30},
            {movementTitle: "II. Clair de lune", price: 30},
            {movementTitle: "III. Fantoches", price: 45}
        ],
        instrumentation: ["voice", "piano"],
        price: 90
    },
    {
        title: "Concerto in B minor for Cello and Orchestra, Op. 104",
        composer: "Dvorák-Antonin",
        movements: [
            {movementTitle: "I. Allegro", price: 90},
            {movementTitle: "II. Adagio ma non troppo", price: 60},
            {movementTitle: "III. Allegro moderato", price: 90}
        ],
        instrumentation: ["cello", "orchestra"],
        price: 225
    },
    {
        title: "Totentanz (arr. Ahn-Benton)",
        composer: "Liszt-Franz",
        movements: [],
        instrumentation: ["piano"],
        price: 300
    },
    {
        title: "Trio No. 1 in D minor for Violin, Cello, and Piano, Op. 49",
        composer: "Mendelssohn-Felix",
        movements: [
            {movementTitle: "I. Molto allegro ed agitato", price: 90},
            {movementTitle: "II. Andante con moto tranquillo", price: 45},
            {movementTitle: "III. Scherzo. Leggiero e vivace", price: 90},
            {movementTitle: "IV. Finale. Allegro assai appassionato", price: 90}
        ],
        instrumentation: ["piano", "violin", "cello"],
        price: 300
    },
    {
        title: "Don Giovanni, K. 527",
        composer: "Mozart-Wolfgang-Amadeus",
        movements: [
            {movementTitle: "Madamina", price: 30},
            {movementTitle: "Ho capito", price: 20},
            {movementTitle: "Là ci darem la mano", price: 15},
            {movementTitle: "Ah fuggi il traditor", price: 20},
            {movementTitle: "Or sai, chi l'onore", price: 20},
            {movementTitle: "Dalla sua pace", price: 15},
            {movementTitle: "Finch'han dal vino", price: 20},
            {movementTitle: "Batti, batti o bel Masetto", price: 30},
            {movementTitle: "Deh, vieni alla finestra", price: 15},
            {movementTitle: "Vedrai, carino", price: 15},
            {movementTitle: "Il mio tesoro intanto", price: 20},
            {movementTitle: "Mi tradì quell'alma ingrata", price: 20},
            {movementTitle: "Non mi dir", price: 20}
        ],
        instrumentation: ["voice", "orchestra"],
        price: 400
    },
    {
        title: "Sextet for Flute, Oboe, Clarinet, Bassoon, Horn, and Piano",
        composer: "Poulenc-Francis",
        movements: [
            {movementTitle: "I. Très vite et emporté", price: 90},
            {movementTitle: "II. Divertissement. Andantino", price: 60},
            {movementTitle: "III. Finale. Prestissimo", price: 120}
        ],
        instrumentation: ["flute", "oboe", "clarinet", "bassoon", "horn", "piano"],
        price: 250
    },
    {
        title: "4 Pieces, Op. 4",
        composer: "Prokofiev-Sergei",
        movements: [
            {movementTitle: "IV. Suggestion diabolique", price: 150}
        ],
        instrumentation: ["piano"],
        price: 300
    },
    {
        title: "Остров мертвых (Isle of the Dead), Op. 29 (arr. Kirkor)",
        composer: "Rachmaninov-Sergei",
        movements: [],
        instrumentation: ["orchestra"],
        price: 420
    }
]

//seed data -> models/index.js
module.exports = opuses;