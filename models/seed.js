const opuses = [
    {
        title: "Piano Sonata No. 1 in F minor, Op. 2, No. 1",
        composer: "Beethoven-Ludwig-van",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Adagio", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Menuetto. Allegretto", movementPrice: 30},
            {movementNumber: 4, movementTitle: "IV. Prestissimo", movementPrice: 90}
        ],
        instrumentation: ["piano"],
        price: 175
    },
    {
        title: "Sonata No. 2 in E-flat major for Clarinet and Piano, Op. 120, No. 2",
        composer: "Brahms-Johannes",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro amabile", movementPrice: 75},
            {movementNumber: 2, movementTitle: "II. Allegro appassionato", movementPrice: 75},
            {movementNumber: 3, movementTitle: "III. Andante con moto", movementPrice: 60}
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
            {movementNumber: 1, movementTitle: "I. En sourdine", movementPrice: 30},
            {movementNumber: 2, movementTitle: "II. Clair de lune", movementPrice: 30},
            {movementNumber: 3, movementTitle: "III. Fantoches", movementPrice: 45}
        ],
        instrumentation: ["voice", "piano"],
        price: 90
    },
    {
        title: "Concerto in B minor for Cello and Orchestra, Op. 104",
        composer: "Dvorák-Antonin",
        movements: [
            {movementNumber: 1, movementTitle: "I. Allegro", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Adagio ma non troppo", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Allegro moderato", movementPrice: 90}
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
            {movementNumber: 1, movementTitle: "I. Molto allegro ed agitato", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Andante con moto tranquillo", movementPrice: 45},
            {movementNumber: 3, movementTitle: "III. Scherzo. Leggiero e vivace", movementPrice: 90},
            {movementNumber: 4, ovementTitle: "IV. Finale. Allegro assai appassionato", movementPrice: 90}
        ],
        instrumentation: ["piano", "violin", "cello"],
        price: 300
    },
    {
        title: "Don Giovanni, K. 527",
        composer: "Mozart-Wolfgang-Amadeus",
        movements: [
            {movementNumber: 1, movementTitle: "Madamina", movementPrice: 30},
            {movementNumber: 2, movementTitle: "Ho capito", movementPrice: 20},
            {movementNumber: 3, movementTitle: "Là ci darem la mano", movementPrice: 15},
            {movementNumber: 4, movementTitle: "Ah fuggi il traditor", movementPrice: 20},
            {movementNumber: 5, movementTitle: "Or sai, chi l'onore", movementPrice: 20},
            {movementNumber: 6, movementTitle: "Dalla sua pace", movementPrice: 15},
            {movementNumber: 7, movementTitle: "Finch'han dal vino", movementPrice: 20},
            {movementNumber: 8, movementTitle: "Batti, batti o bel Masetto", movementPrice: 30},
            {movementNumber: 9, movementTitle: "Deh, vieni alla finestra", movementPrice: 15},
            {movementNumber: 10, movementTitle: "Vedrai, carino", movementPrice: 15},
            {movementNumber: 11, movementTitle: "Il mio tesoro intanto", movementPrice: 20},
            {movementNumber: 12, movementTitle: "Mi tradì quell'alma ingrata", movementPrice: 20},
            {movementNumber: 13, movementTitle: "Non mi dir", movementPrice: 20}
        ],
        instrumentation: ["voice", "orchestra"],
        price: 400
    },
    {
        title: "Sextet for Flute, Oboe, Clarinet, Bassoon, Horn, and Piano",
        composer: "Poulenc-Francis",
        movements: [
            {movementNumber: 1, movementTitle: "I. Très vite et emporté", movementPrice: 90},
            {movementNumber: 2, movementTitle: "II. Divertissement. Andantino", movementPrice: 60},
            {movementNumber: 3, movementTitle: "III. Finale. Prestissimo", movementPrice: 120}
        ],
        instrumentation: ["flute", "oboe", "clarinet", "bassoon", "horn", "piano"],
        price: 250
    },
    {
        title: "4 Pieces, Op. 4",
        composer: "Prokofiev-Sergei",
        movements: [
            {movementNumber: 4, movementTitle: "IV. Suggestion diabolique", movementPrice: 150}
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