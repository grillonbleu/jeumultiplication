arithmepique.scripts = {};

arithmepique.scripts.portes = {
    "4-5-plus": {
        pos: [5, 24], //x, y
        nbEtoiles: 6
    },
    "5-6-plus": {
        pos: [6, 45],
        nbEtoiles: 14
    },
    "6-7-plus": {
        pos: [21, 35],
        nbEtoiles: 22
    },
    "7-8-plus": {
        pos: [23, 16],
        nbEtoiles: 30
    },
    "8-9-plus": {
        pos: [18, 2],
        nbEtoiles: 38
    },
    "9-10-plus": {
        pos: [14, 17],
        nbEtoiles: 50
    }
};

arithmepique.scripts.scenes = [
    {
        titre: "Monde 1, les plaines : fois 10",
        
        id: "fois-10",
        posCarte: "9,2", //top, left

        operations: [
            "1 * 10",
            "10 * 2",
            "10 * 3",
            "4 * 10",
            "10 * 5",
            "10 * 6",
            "7 * 10",
            "10 * 8",
            "10 * 9",
            "10 * 10"
            
        ],
        monstres: {
            "*": ["coccinelle", "abeille"]
        },
        chrono: false
    },
    {
        titre: "Monde 1, les plaines : fois 5",
        id: "fois-5",
        posCarte: "14,2",
        operations: [
            "5 * 1",
            "5 * 2",
            "3 * 5",
            "5 * 4",
            "5 * 5",
            "5 * 6",
            "7 * 5",
            "5 * 8",
            "9 * 5",
            "10 * 5"
        ],
        monstres: {
            "*": ["coccinelle", "abeille"]
        },
        chrono: false
    },
    {
        titre: "Monde 1, les plaines : fois 5 et 10",
        id: "fois-5-10",
        posCarte: "18,2",
        operations: [
            "5 * 2",
            "3 * 5",
            "5 * 4",
            "5 * 5",
            "5 * 6",
            "7 * 5",
            "5 * 8",
            "9 * 5",
            "10 * 2",
            "10 * 3",
            "4 * 10",
            "10 * 5",
            "10 * 6",
            "7 * 10",
            "10 * 8",
            "10 * 9"
        ],
        monstres: {
            "*": ["coccinelle", "abeille"]
        },
        chrono: false
    },
    {
        titre: "Monde 1, les plaines : forteresse",
        id: "fois-5-10-chrono",
        posCarte: "22,3",
        operations: [
            "5 * 2",
            "3 * 5",
            "5 * 4",
            "5 * 5",
            "5 * 6",
            "7 * 5",
            "5 * 8",
            "9 * 5",
            "10 * 2",
            "10 * 3",
            "4 * 10",
            "10 * 5",
            "10 * 6",
            "7 * 10",
            "10 * 8",
            "10 * 9"
        ],
        monstres: {
            "*": [ "fantome", "chauve-souris" ]
        },
        chrono: true,
        
        estBoss: true
    },
    {
        titre: "Monde 2, la forêt : fois 2",
        id: "fois-2",
        posCarte: "28,5",
        operations: [
            "2 * 1",
            "2 * 2",
            "2 * 3",
            "4 * 2",
            "2 * 5",
            "6 * 2",
            "2 * 7",
            "2 * 8",
            "9 * 2"
        ],
        monstres: {
            "*": [ "escargot", "araignee" ]
        },
        chrono: false
    },
    {
        titre: "Monde 2, la forêt : fois 3",
        id: "fois-3",
        posCarte: "30,2",
        operations: [
            "3 * 1",
            "3 * 2",
            "3 * 3",
            "4 * 3",
            "3 * 5",
            "3 * 6",
            "7 * 3",
            "3 * 8",
            "3 * 9",
            "10 * 3"
        ],
        monstres: {
            "*": [ "escargot", "araignee" ]
        },
        chrono: false   
    },
    {
        titre: "Monde 2, la forêt : fois 4",
        id: "fois-4",
        posCarte: "32,7",
        operations: [
            "4 * 1",
            "2 * 4",
            "4 * 3",
            "4 * 4",
            "5 * 4",
            "4 * 6",
            "7 * 4",
            "4 * 8",
            "9 * 4",
            "4 * 10"
        ],
        monstres: {
            "*": [ "escargot", "araignee" ]
        },
        chrono: false
    },
    {
        titre: "Monde 2, la forêt : fois 2, 3 et 4 chrono!",
        id: "fois-2-3-4",
        posCarte: "38,6",
        operations: [
            "2 * 2",
            "2 * 5",
            "6 * 2",
            "2 * 7",
            "2 * 8",
            
            "3 * 2",
            "3 * 3",
            "3 * 5",
            "3 * 6",
            "7 * 3",
            "3 * 8",
            "3 * 9",

            "2 * 4",
            "4 * 3",
            "4 * 4",
            "5 * 4",
            "4 * 6",
            "7 * 4",
            "4 * 8",
            "9 * 4"            
        ],
        monstres: {
            "*": [ "escargot", "araignee" ]
        },
        chrono: true
    },
    {
        titre: "Monde 2, la forêt : forteresse",
        id: "fois-2-3-4-chrono",
        posCarte: "45,5",
        operations: [

            "2 * 2",
            "2 * 5",
            "6 * 2",
            "2 * 7",
            "2 * 8",
            
            "3 * 2",
            "3 * 3",
            "3 * 5",
            "3 * 6",
            "7 * 3",
            "3 * 8",
            "3 * 9",

            "2 * 4",
            "4 * 3",
            "4 * 4",
            "5 * 4",
            "4 * 6",
            "7 * 4",
            "4 * 8",
            "9 * 4"        
        ],
        monstres: {
            "*": [ "fantome", "chauve-souris" ]
        },
        chrono: true,
        
        estBoss: true
    },
    {
        titre: "Monde 3, le désert : fois 6 (partie 1)",
        id: "fois-6-1",
        posCarte: "46,9",
        operations: [
            "6 * 1",
            "6 * 2",
            "6 * 3",
            "6 * 4",
            "6 * 5",            
            "6 * 6",
            
            "2 * 6",
            "3 * 6",
            "4 * 6"
        ],
        monstres: {
            "*": [ "serpent", "araignee" ]
        },
        chrono: false
    },
    {
        titre: "Monde 3, le désert : fois 6 (partie 2)",
        id: "fois-6-2",
        posCarte: "46,13",
        operations: [
            "6 * 7",
            "6 * 8",
            "6 * 9",
            "6 * 10",
            
            "7 * 6",
            "8 * 6",
            "9 * 6",
            "10 * 6"
        ],
        monstres: {
            "*": [ "serpent", "araignee" ]
        },
        chrono: false
    },
    {
        titre: "Monde 3, le désert : fois 6",
        id: "fois-6",
        posCarte: "45,16",
        operations: [
            "6 * 1",
            "6 * 2",
            "6 * 3",
            "6 * 4",
            "6 * 5",            
            "6 * 6",
            "6 * 7",
            "6 * 8",
            "6 * 9",
            "6 * 10"            
        ],
        monstres: {
            "*": [ "serpent", "araignee" ]
        },
        chrono: false
    },
    {
        titre: "Monde 3, le désert : fois 6 chrono!",
        id: "fois-6-chrono",
        posCarte: "44,21",
        operations: [
            "6 * 1",
            "6 * 2",
            "6 * 3",
            "6 * 4",
            "6 * 5",            
            "6 * 6",
            "6 * 7",
            "6 * 8",
            "6 * 9",
            "6 * 10"
        ],
        monstres: {
            "*": [ "serpent", "araignee" ]
        },
        chrono: true
    },
    {
        titre: "Monde 3, le désert : forteresse",
        id: "fois-6-chrono-recap",
        posCarte: "39,19",
        operations: [
            "6 * 2",
            "6 * 3",
            "6 * 4",
            "6 * 5",            
            "6 * 6",
            "6 * 7",
            "6 * 8",
            "6 * 9",

            //recap
            "5 * 4",
            "7 * 5",
            "3 * 9",
            "2 * 2",
            "10 * 6",
            "4 * 2"
        ],
        monstres: {
            "*": [ "fantome", "chauve-souris" ]
        },
        chrono: true,
        
        estBoss: true
    },
    {
        titre: "Monde 4, le grand lac : fois 7 (partie 1)",
        id: "fois-7-1",
        posCarte: "30,20",
        operations: [
            "7 * 1",
            "7 * 2",
            "7 * 3",
            "7 * 4",
            "7 * 5",
            "7 * 6",
            
            "1 * 7",
            "2 * 7",
            "3 * 7",
            "4 * 7",
            "5 * 7",
            "6 * 7"
        ],
        monstres: {
            "*": [ "poisson", "grenouille" ]
        },
        porte: {
            nbEtoilesMinimum: 14,
            posPorte: ""
        },
        chrono: false
    },
    {
        titre: "Monde 4, le grand lac : fois 7 (partie 2)",
        id: "fois-7-2",
        posCarte: "30,23",
        operations: [
            "7 * 7",
            "7 * 8",
            "7 * 9",
            "7 * 10",
            
            "8 * 7",
            "9 * 7",
            "10 * 7"
        ],
        monstres: {
            "*": [ "poisson", "grenouille" ]
        },
        chrono: false   },
    {
        titre: "Monde 4, le grand lac : fois 7",
        id: "fois-7",
        posCarte: "25,23",
        operations: [
        ],
        monstres: {
            "*": [ "poisson", "grenouille" ]
        },
        chrono: false
    },
    {
        titre: "Monde 4, le grand lac : fois 7 chrono!",
        id: "fois-7-chrono",
        posCarte: "21,23",
        operations: [
            "7 * 1",
            "7 * 2",
            "7 * 3",
            "7 * 4",
            "7 * 5",
            "7 * 6",
            "7 * 7",
            "7 * 8",
            "7 * 9",
            "7 * 10"
        ],
        monstres: {
            "*": [ "poisson", "grenouille" ]
        },
        chrono: true
    },
    {
        titre: "Monde 4, le grand lac : forteresse",
        id: "fois-7-chrono-recap",
        posCarte: "17,21",
        operations: [
            "7 * 1",
            "7 * 2",
            "7 * 3",
            "7 * 4",
            "7 * 5",
            "7 * 6",
            "7 * 7",
            "7 * 8",
            "7 * 9",
            "7 * 10",
            //recap
            "3 * 3",
            "6 * 4",
            "2 * 1",
            "6 * 8",
            "1 * 1"
        ],
        monstres: {
            "*": [ "fantome", "chauve-souris" ]
        },
        chrono: true,
        
        estBoss: true
    },
    
    
    
    
    {
        titre: "Monde 5, le village : fois 8 (partie 1)",
        id: "fois-8-1", 
        posCarte: "10,23",
        operations: [
            "8 * 1",
            "8 * 2",
            "8 * 3",
            "8 * 4",
            "8 * 5",
            "8 * 6",
            
            "1 * 8",
            "2 * 8",
            "3 * 8",
            "4 * 8",
            "5 * 8",
            "6 * 8"
        ],
        monstres: {
            "*": [ "mouche", "engrenage" ]
        },
        chrono: false
    },
    {
        titre: "Monde 5, le village : fois 8 (partie 2)",
        id: "fois-8-2",
        posCarte: "10,19",
        operations: [
            "8 * 7",
            "8 * 8",
            "8 * 9",
            "8 * 10",
            
            "7 * 8",
            "9 * 8",
            "10 * 8"
        ],
        monstres: {
            "*": [ "mouche", "engrenage" ]
        },
        chrono: false
    },
    {
        titre: "Monde 5, le village : fois 8",
        id: "fois-8",
        posCarte: "6,19",
        operations: [
            "8 * 1",
            "8 * 2",
            "8 * 3",
            "8 * 4",
            "8 * 5",
            "8 * 6",
            "8 * 7",
            "8 * 8",
            "8 * 9",
            "8 * 10"
        ],
        monstres: {
            "*": [ "mouche", "engrenage" ]
        },
        chrono: false
    },
    {
        titre: "Monde 5, le village : fois 8 chrono!",
        id: "fois-8-chrono",
        posCarte: "5,23",
        operations: [
            "8 * 1",
            "8 * 2",
            "8 * 3",
            "8 * 4",
            "8 * 5",
            "8 * 6",
            "8 * 7",
            "8 * 8",
            "8 * 9",
            "8 * 10"
        ],
        monstres: {
            "*": [ "mouche", "engrenage" ]
        },
        chrono: true
    },
    {
        titre: "Monde 5, le village : forteresse",
        id: "fois-8-chrono-recap",
        posCarte: "2,23",
        operations: [
            "8 * 1",
            "8 * 2",
            "8 * 3",
            "8 * 4",
            "8 * 5",
            "8 * 6",
            "8 * 7",
            "8 * 8",
            "8 * 9",
            "8 * 10",

            //recap
            "4 * 2",
            "5 * 5",
            "3 * 6",
            "4 * 9",
            "10 * 1",
            "6 * 9"
        ],
        monstres: {
            "*": [ "fantome", "chauve-souris" ]
        },
        chrono: true,
        
        estBoss: true
    },
    
    
    
    
    
    
    
    

    {
        titre: "Monde 6, la caverne : fois 9 (partie 1)",
        id: "fois-9-1",
        posCarte: "2,13",
        operations: [
            "9 * 1",
            "9 * 2",
            "9 * 3",
            "9 * 4",
            "9 * 5",
            "9 * 6",
            
            "1 * 9",
            "2 * 9",
            "3 * 9",
            "4 * 9",
            "5 * 9",
            "6 * 9"
        ],
        monstres: {
            "*": [ "mouche", "engrenage" ]
        },
        chrono: false
    },
    {
        titre: "Monde 6, la caverne : fois 9 (partie 2)",
        id: "fois-9-2",
        posCarte: "6,13",
        operations: [
            "9 * 7",
            "9 * 8",
            "9 * 9",
            "9 * 10",
            
            "7 * 9",
            "8 * 9",
            "10 * 10"
        ],
        monstres: {
            "*": [ "mouche", "engrenage" ]
        },
        chrono: false
    },
    {
        titre: "Monde 6, la caverne : fois 9",
        id: "fois-9",
        posCarte: "6,10",
        operations: [
            "9 * 1",
            "9 * 2",
            "9 * 3",
            "9 * 4",
            "9 * 5",
            "9 * 6",
            "9 * 7",
            "9 * 8",
            "9 * 9",
            "9 * 10"
        ],
        monstres: {
            "*": [ "mouche", "engrenage" ]
        },
        chrono: false
    },
    {
        titre: "Monde 6, la caverne : fois 9 chrono!",
        id: "fois-9-chrono",
        posCarte: "10,11",
        operations: [
            "9 * 1",
            "9 * 2",
            "9 * 3",
            "9 * 4",
            "9 * 5",
            "9 * 6",
            "9 * 7",
            "9 * 8",
            "9 * 9",
            "9 * 10"
        ],
        monstres: {
            "*": [ "mouche", "engrenage" ]
        },
        chrono: true
    },
    
    {
        titre: "Monde 6, la caverne : forteresse",
        id: "fois-9-chrono-recap",
        posCarte: "13,14",
        operations: [
            "9 * 2",
            "9 * 3",
            "9 * 4",
            "9 * 5",
            "9 * 6",
            "9 * 7",
            "9 * 8",
            "9 * 9",
            
            //recap
            "4 * 4",
            "10 * 10",
            "6 * 6",
            "7 * 7",
            "8 * 8",
            "3 * 7",
            "1 * 6",
            "2 * 3",
            "5 * 6"
        ],
        monstres: {
            "*": [ "fantome", "chauve-souris" ]
        },
        chrono: true,
        
        estBoss: true
    },


    
    
    

    {
        titre: "Monde 8, le gâteau : fois 2, 3, 4, 5 et 10",
        id: "fois-2-3-4-5-10",
        posCarte: "21,14",
        operations: [
            "2 * 1",
            "2 * 2",
            "2 * 3",
            "2 * 4",
            "2 * 5",
            "2 * 6",
            "2 * 7",
            "2 * 8",
            "2 * 9",
            "2 * 10",
            
            "3 * 1",
            "3 * 3",
            "3 * 4",
            "3 * 5",
            "3 * 6",
            "3 * 7",
            "3 * 8",
            "3 * 9",
            "3 * 10",
            
            "4 * 1",
            "4 * 4",
            "4 * 5",
            "4 * 6",
            "4 * 7",
            "4 * 8",
            "4 * 9",
            "4 * 10",
            
            "5 * 1",
            "5 * 5",
            "5 * 6",
            "5 * 7",
            "5 * 8",
            "5 * 9",
            "5 * 10",

            "10 * 1",
            "10 * 6",
            "10 * 7",
            "10 * 8",
            "10 * 9",
            "10 * 10"
        ],
        monstres: {
            "*": [ "slimeVert", "slimeRose" ]
        },
        chrono: false
    },
    {
        titre: "Monde 8, le gâteau : fois-6-7",
        id: "fois-6-7",
        posCarte: "21,10",
        operations: [
            "6 * 1",
            "6 * 2",
            "6 * 3",
            "6 * 4",
            "6 * 5",
            "6 * 6",
            "6 * 7",
            "6 * 8",
            "6 * 9",
            "6 * 10",
            
            "7 * 1",
            "7 * 2",
            "7 * 3",
            "7 * 4",
            "7 * 5",
            "7 * 7",
            "7 * 8",
            "7 * 9",
            "7 * 10"
        ],
        monstres: {
            "*": [ "slimeVert", "slimeRose" ]
        },

        chrono: false   
    },
    
    {
        titre: "Monde 8, le gâteau : fois-8-9",
        id: "fois-8-9",
        posCarte: "27,10",
        operations: [
            "8 * 1",
            "8 * 2",
            "8 * 3",
            "8 * 4",
            "8 * 5",
            "8 * 6",
            "8 * 7",
            "8 * 8",
            "8 * 9",
            "8 * 10",
            
            "9 * 1",
            "9 * 2",
            "9 * 3",
            "9 * 4",
            "9 * 5",
            "9 * 6",
            "9 * 7",
            "9 * 9",
            "9 * 10"
        ],
        monstres: {
            "*": [ "slimeVert", "slimeRose" ]
        },
        chrono: false
    },
    {
        titre: "Monde 8, le gâteau : total!",
        id: "total",
        posCarte: "25,17",
        operations: [
            "2 * 2",
            "2 * 3",
            "2 * 4",
            "2 * 5",
            "2 * 6",
            "2 * 7",
            "2 * 8",
            "2 * 9",
            "2 * 10",
            
            "3 * 3",
            "3 * 4",
            "3 * 5",
            "3 * 6",
            "3 * 7",
            "3 * 8",
            "3 * 9",
            "3 * 10",
            
            "4 * 4",
            "4 * 5",
            "4 * 6",
            "4 * 7",
            "4 * 8",
            "4 * 9",
            "4 * 10",
            
            "5 * 5",
            "5 * 6",
            "5 * 7",
            "5 * 8",
            "5 * 9",
            "5 * 10",
            
            "6 * 6",
            "6 * 7",
            "6 * 8",
            "6 * 9",
            "6 * 10",
            
            "7 * 7",
            "7 * 8",
            "7 * 9",
            "7 * 10",

            "8 * 8",
            "8 * 9",
            "8 * 10",
            
            "9 * 9",
            "9 * 10"
        ],
        monstres: {
            "*": [ "slimeVert", "slimeRose" ]
        },
        chrono: true
    },


    {
        titre: "Monde 8, le gâteau : grande forteresse",
        id: "total-chrono",
        posCarte: "25,13",
        operations: [
            "2 * 2",
            "2 * 3",
            "2 * 4",
            "2 * 5",
            "2 * 6",
            "2 * 7",
            "2 * 8",
            "2 * 9",
            "2 * 10",
            
            "3 * 3",
            "3 * 4",
            "3 * 5",
            "3 * 6",
            "3 * 7",
            "3 * 8",
            "3 * 9",
            "3 * 10",
            
            "4 * 4",
            "4 * 5",
            "4 * 6",
            "4 * 7",
            "4 * 8",
            "4 * 9",
            "4 * 10",
            
            "5 * 5",
            "5 * 6",
            "5 * 7",
            "5 * 8",
            "5 * 9",
            "5 * 10",
            
            "6 * 6",
            "6 * 7",
            "6 * 8",
            "6 * 9",
            "6 * 10",
            
            "7 * 7",
            "7 * 8",
            "7 * 9",
            "7 * 10",

            "8 * 8",
            "8 * 9",
            "8 * 10",
            
            "9 * 9",
            "9 * 10"
        ],
        monstres: {
            "*": [ "fantome", "chauve-souris" ]
        },
        chrono: true,
        
        estBoss: true
    }



];