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
        titre: "Monde 1, les plaines : 10",
        
        id: "fois-10",
        posCarte: "9,2", //top, left

        operations: [
            "10 * 1",
            "10 * 2",
            "10 * 3",
            "10 * 4",
            "10 * 5",
            "10 * 6",
            "10 * 7",
            "10 * 8",
            "10 * 9"
        ],
        monstres: {
            "+": "coccinelle",
            "-": "abeille",
            "*": ["coccinelle", "abeille"]
        },
        chrono: false
    },
    {
        titre: "Monde 1, les plaines : moins",
        id: "1-2-3-moins",
        posCarte: "14,2",
        operations: [
            "1 - 0",
            "1 - 1",
            "2 - 0",
            "2 - 1",
            "2 - 2",
            "3 - 0",
            "3 - 1",
            "3 - 2",
            "3 - 3"
        ],
        monstres: {
            "+": "coccinelle",
            "-": "abeille"
        },
        chrono: false
    },
    {
        titre: "Monde 1, les plaines : plus et moins",
        id: "1-2-3-plus-moins",
        posCarte: "18,2",
        operations: [
            "0 + 1",
            "1 + 0",
            "0 + 2",
            "1 + 1",
            "2 + 0",
            "0 + 3",
            "1 + 2",
            "2 + 1",
            "3 + 0",
            "1 - 0",
            "1 - 1",
            "2 - 0",
            "2 - 1",
            "2 - 2",
            "3 - 0",
            "3 - 1",
            "3 - 2",
            "3 - 3"
        ],
        monstres: {
            "+": "coccinelle",
            "-": "abeille"
        },
        chrono: false
    },
    {
        titre: "Monde 1, les plaines : forteresse",
        id: "1-2-3-plus-moins-chrono",
        posCarte: "22,3",
        operations: [
            "0 + 1",
            "1 + 0",
            "0 + 2",
            "1 + 1",
            "2 + 0",
            "0 + 3",
            "1 + 2",
            "2 + 1",
            "3 + 0",
            "1 - 0",
            "1 - 1",
            "2 - 0",
            "2 - 1",
            "2 - 2",
            "3 - 0",
            "3 - 1",
            "3 - 2",
            "3 - 3"
        ],
        monstres: {
            "+": "fantome",
            "-": "chauve-souris"
        },
        chrono: true,
        
        estBoss: true
    },
    {
        titre: "Monde 2, la forêt : plus",
        id: "4-5-plus",
        posCarte: "28,5",
        operations: [
            "0 + 4",
            "1 + 3",
            "2 + 2",
            "3 + 1",
            "4 + 0",
            "0 + 5",
            "1 + 4",
            "2 + 3",
            "3 + 2",
            "4 + 1",
            "5 + 0"
        ],
        monstres: {
            "+": "escargot",
            "-": "araignee"
        },
        chrono: false
    },
    {
        titre: "Monde 2, la forêt : moins",
        id: "4-5-moins",
        posCarte: "30,2",
        operations: [
            "4 - 0",
            "4 - 1",
            "4 - 2",
            "4 - 3",
            "4 - 4",
            "5 - 0",
            "5 - 1",
            "5 - 2",
            "5 - 3",
            "5 - 4",
            "5 - 5"
        ],
        monstres: {
            "+": "escargot",
            "-": "araignee"
        },
        chrono: false   },
    {
        titre: "Monde 2, la forêt : plus et moins",
        id: "4-5-plus-moins",
        posCarte: "32,7",
        operations: [
            "4 - 0",
            "4 - 1",
            "4 - 2",
            "4 - 3",
            "4 - 4",
            "5 - 0",
            "5 - 1",
            "5 - 2",
            "5 - 3",
            "5 - 4",
            "5 - 5",
            "0 + 4",
            "1 + 3",
            "2 + 2",
            "3 + 1",
            "4 + 0",
            "0 + 5",
            "1 + 4",
            "2 + 3",
            "3 + 2",
            "4 + 1",
            "5 + 0"
        ],
        monstres: {
            "+": "escargot",
            "-": "araignee"
        },
        chrono: false
    },
    {
        titre: "Monde 2, la forêt : plus et moins chrono",
        id: "4-5-plus-moins-chrono",
        posCarte: "38,6",
        operations: [
            "4 - 0",
            "4 - 1",
            "4 - 2",
            "4 - 3",
            "4 - 4",
            "5 - 0",
            "5 - 1",
            "5 - 2",
            "5 - 3",
            "5 - 4",
            "5 - 5",
            "0 + 4",
            "1 + 3",
            "2 + 2",
            "3 + 1",
            "4 + 0",
            "0 + 5",
            "1 + 4",
            "2 + 3",
            "3 + 2",
            "4 + 1",
            "5 + 0"
        ],
        monstres: {
            "+": "escargot",
            "-": "araignee"
        },
        chrono: true
    },
    {
        titre: "Monde 2, la forêt : forteresse",
        id: "4-5-plus-moins-chrono-recap",
        posCarte: "45,5",
        operations: [
            "4 - 0",
            "4 - 1",
            "4 - 2",
            "4 - 3",
            "4 - 4",
            "5 - 0",
            "5 - 1",
            "5 - 2",
            "5 - 3",
            "5 - 4",
            "5 - 5",
            "0 + 4",
            "1 + 3",
            "2 + 2",
            "3 + 1",
            "4 + 0",
            "0 + 5",
            "1 + 4",
            "2 + 3",
            "3 + 2",
            "4 + 1",
            "5 + 0",
            //recap (2, 3)
            "1 + 1",
            "1 + 2",
            "2 + 1",
            "2 - 1",
            "3 - 1",
            "3 - 2"
        ],
        monstres: {
            "+": "fantome",
            "-": "chauve-souris"
                    //TODO autres monstres pour recap
        },
        chrono: true,
        
        estBoss: true
    },
    {
        titre: "Monde 3, le désert : plus",
        id: "5-6-plus",
        posCarte: "46,9",
        operations: [
            "0 + 5",
            "1 + 4",
            "2 + 3",
            "3 + 2",
            "4 + 1",
            "5 + 0",
            "0 + 6",
            "1 + 5",
            "2 + 4",
            "3 + 3",
            "4 + 2",
            "5 + 1",
            "6 + 0"
        ],
        monstres: {
            "+": "serpent",
            "-": "araignee"
        },
        chrono: false
    },
    {
        titre: "Monde 3, le désert : moins",
        id: "5-6-moins",
        posCarte: "46,13",
        operations: [
            "5 - 0",
            "5 - 1",
            "5 - 2",
            "5 - 3",
            "5 - 4",
            "5 - 5",
            "6 - 0",
            "6 - 1",
            "6 - 2",
            "6 - 3",
            "6 - 4",
            "6 - 5",
            "6 - 6"
        ],
        monstres: {
            "+": "serpent",
            "-": "araignee"
        },
        chrono: false   },
    {
        titre: "Monde 3, le désert : plus et moins",
        id: "5-6-plus-moins",
        posCarte: "45,16",
        operations: [
            "5 - 0",
            "5 - 1",
            "5 - 2",
            "5 - 3",
            "5 - 4",
            "5 - 5",
            "6 - 0",
            "6 - 1",
            "6 - 2",
            "6 - 3",
            "6 - 4",
            "6 - 5",
            "6 - 6",
            "0 + 5",
            "1 + 4",
            "2 + 3",
            "3 + 2",
            "4 + 1",
            "5 + 0",
            "0 + 6",
            "1 + 5",
            "2 + 4",
            "3 + 3",
            "4 + 2",
            "5 + 1",
            "6 + 0"
        ],
        monstres: {
            "+": "serpent",
            "-": "araignee"
        },
        chrono: false
    },
    {
        titre: "Monde 3, le désert : plus et moins chrono",
        id: "5-6-plus-moins-chrono",
        posCarte: "44,21",
        operations: [
            "5 - 0",
            "5 - 1",
            "5 - 2",
            "5 - 3",
            "5 - 4",
            "5 - 5",
            "6 - 0",
            "6 - 1",
            "6 - 2",
            "6 - 3",
            "6 - 4",
            "6 - 5",
            "6 - 6",
            "0 + 5",
            "1 + 4",
            "2 + 3",
            "3 + 2",
            "4 + 1",
            "5 + 0",
            "0 + 6",
            "1 + 5",
            "2 + 4",
            "3 + 3",
            "4 + 2",
            "5 + 1",
            "6 + 0"
        ],
        monstres: {
            "+": "serpent",
            "-": "araignee"
        },
        chrono: true
    },
    {
        titre: "Monde 3, le désert : forteresse",
        id: "5-6-plus-moins-chrono-recap",
        posCarte: "39,19",
        operations: [
            "5 - 0",
            "5 - 1",
            "5 - 2",
            "5 - 3",
            "5 - 4",
            "5 - 5",
            "6 - 0",
            "6 - 1",
            "6 - 2",
            "6 - 3",
            "6 - 4",
            "6 - 5",
            "6 - 6",
            "0 + 5",
            "1 + 4",
            "2 + 3",
            "3 + 2",
            "4 + 1",
            "5 + 0",
            "0 + 6",
            "1 + 5",
            "2 + 4",
            "3 + 3",
            "4 + 2",
            "5 + 1",
            "6 + 0",
            //recap (4)
            "4 - 1",
            "4 - 2",
            "4 - 3",
            "1 + 3",
            "2 + 2",
            "3 + 1"

        ],
        monstres: {
            "+": "fantome",
            "-": "chauve-souris"
                    //TODO autres monstres pour recap
        },
        chrono: true,
        
        estBoss: true
    },
    {
        titre: "Monde 4, le grand lac : plus",
        id: "6-7-plus",
        posCarte: "30,20",
        operations: [
            "0 + 6",
            "1 + 5",
            "2 + 4",
            "3 + 3",
            "4 + 2",
            "5 + 1",
            "6 + 0",
            "0 + 7",
            "1 + 6",
            "2 + 5",
            "3 + 4",
            "4 + 3",
            "5 + 2",
            "6 + 1",
            "7 + 0"
        ],
        monstres: {
            "+": "poisson",
            "-": "grenouille"
        },
        porte: {
            nbEtoilesMinimum: 14,
            posPorte: ""
        },
        chrono: false
    },
    {
        titre: "Monde 4, le grand lac : moins",
        id: "6-7-moins",
        posCarte: "30,23",
        operations: [
            "6 - 0",
            "6 - 1",
            "6 - 2",
            "6 - 3",
            "6 - 4",
            "6 - 5",
            "6 - 6",
            "7 - 0",
            "7 - 1",
            "7 - 2",
            "7 - 3",
            "7 - 4",
            "7 - 5",
            "7 - 6",
            "7 - 7"
        ],
        monstres: {
            "+": "poisson",
            "-": "grenouille"
        },
        chrono: false   },
    {
        titre: "Monde 4, le grand lac : plus et moins",
        id: "6-7-plus-moins",
        posCarte: "25,23",
        operations: [
            "6 - 0",
            "6 - 1",
            "6 - 2",
            "6 - 3",
            "6 - 4",
            "6 - 5",
            "6 - 6",
            "7 - 0",
            "7 - 1",
            "7 - 2",
            "7 - 3",
            "7 - 4",
            "7 - 5",
            "7 - 6",
            "7 - 7",
            "0 + 6",
            "1 + 5",
            "2 + 4",
            "3 + 3",
            "4 + 2",
            "5 + 1",
            "6 + 0",
            "0 + 7",
            "1 + 6",
            "2 + 5",
            "3 + 4",
            "4 + 3",
            "5 + 2",
            "6 + 1",
            "7 + 0"
        ],
        monstres: {
            "+": "poisson",
            "-": "grenouille"
        },
        chrono: false
    },
    {
        titre: "Monde 4, le grand lac : plus et moins chrono",
        id: "6-7-plus-moins-chrono",
        posCarte: "21,23",
        operations: [
            "6 - 0",
            "6 - 1",
            "6 - 2",
            "6 - 3",
            "6 - 4",
            "6 - 5",
            "6 - 6",
            "7 - 0",
            "7 - 1",
            "7 - 2",
            "7 - 3",
            "7 - 4",
            "7 - 5",
            "7 - 6",
            "7 - 7",
            "0 + 6",
            "1 + 5",
            "2 + 4",
            "3 + 3",
            "4 + 2",
            "5 + 1",
            "6 + 0",
            "0 + 7",
            "1 + 6",
            "2 + 5",
            "3 + 4",
            "4 + 3",
            "5 + 2",
            "6 + 1",
            "7 + 0"


        ],
        monstres: {
            "+": "poisson",
            "-": "grenouille"
        },
        chrono: true
    },
    {
        titre: "Monde 4, le grand lac : forteresse",
        id: "6-7-plus-moins-chrono-recap",
        posCarte: "17,21",
        operations: [
            "6 - 0",
            "6 - 1",
            "6 - 2",
            "6 - 3",
            "6 - 4",
            "6 - 5",
            "6 - 6",
            "7 - 0",
            "7 - 1",
            "7 - 2",
            "7 - 3",
            "7 - 4",
            "7 - 5",
            "7 - 6",
            "7 - 7",
            "0 + 6",
            "1 + 5",
            "2 + 4",
            "3 + 3",
            "4 + 2",
            "5 + 1",
            "6 + 0",
            "0 + 7",
            "1 + 6",
            "2 + 5",
            "3 + 4",
            "4 + 3",
            "5 + 2",
            "6 + 1",
            "7 + 0",
            //recap (4, 5)
            "4 - 1",
            "4 - 2",
            "4 - 3",
            "5 - 1",
            "5 - 2",
            "5 - 3",
            "5 - 4",
            "1 + 3",
            "2 + 2",
            "3 + 1",
            "1 + 4",
            "2 + 3",
            "3 + 2",
            "4 + 1"

        ],
        monstres: {
            "+": "fantome",
            "-": "chauve-souris"
                    //TODO autres monstres pour recap
        },
        chrono: true,
        
        estBoss: true
    },
    
    
    
    
    {
        titre: "Monde 5, le village : plus",
        id: "7-8-plus",
        posCarte: "10,23",
        operations: [
            "1 + 6",
            "2 + 5",
            "3 + 4",
            "4 + 3",
            "5 + 2",
            "6 + 1",
            "1 + 7",
            "2 + 6",
            "3 + 5",
            "4 + 4",
            "5 + 3",
            "6 + 2",
            "7 + 1"
        ],
        monstres: {
            "+": "mouche",
            "-": "engrenage"
        },
        chrono: false
    },
    {
        titre: "Monde 5, le village : moins",
        id: "7-8-moins",
        posCarte: "10,19",
        operations: [
            "7 - 1",
            "7 - 2",
            "7 - 3",
            "7 - 4",
            "7 - 5",
            "7 - 6",
            "8 - 1",
            "8 - 2",
            "8 - 3",
            "8 - 4",
            "8 - 5",
            "8 - 6",
            "8 - 7"
        ],
        monstres: {
            "+": "mouche",
            "-": "engrenage"
        },
        chrono: false   },
    {
        titre: "Monde 5, le village : plus et moins",
        id: "7-8-plus-moins",
        posCarte: "6,19",
        operations: [
            "1 + 6",
            "2 + 5",
            "3 + 4",
            "4 + 3",
            "5 + 2",
            "6 + 1",
            "1 + 7",
            "2 + 6",
            "3 + 5",
            "4 + 4",
            "5 + 3",
            "6 + 2",
            "7 + 1",
            "7 - 1",
            "7 - 2",
            "7 - 3",
            "7 - 4",
            "7 - 5",
            "7 - 6",
            "8 - 1",
            "8 - 2",
            "8 - 3",
            "8 - 4",
            "8 - 5",
            "8 - 6",
            "8 - 7"
        ],
        monstres: {
            "+": "mouche",
            "-": "engrenage"
        },
        chrono: false
    },
    {
        titre: "Monde 5, le village : plus et moins chrono",
        id: "7-8-plus-moins-chrono",
        posCarte: "5,23",
        operations: [
            "1 + 6",
            "2 + 5",
            "3 + 4",
            "4 + 3",
            "5 + 2",
            "6 + 1",
            "1 + 7",
            "2 + 6",
            "3 + 5",
            "4 + 4",
            "5 + 3",
            "6 + 2",
            "7 + 1",
            "7 - 1",
            "7 - 2",
            "7 - 3",
            "7 - 4",
            "7 - 5",
            "7 - 6",
            "8 - 1",
            "8 - 2",
            "8 - 3",
            "8 - 4",
            "8 - 5",
            "8 - 6",
            "8 - 7"
        ],
        monstres: {
            "+": "mouche",
            "-": "engrenage"
        },
        chrono: true
    },
    {
        titre: "Monde 5, le village : forteresse",
        id: "7-8-plus-moins-chrono-recap",
        posCarte: "2,23",
        operations: [
            "1 + 6",
            "2 + 5",
            "3 + 4",
            "4 + 3",
            "5 + 2",
            "6 + 1",
            "1 + 7",
            "2 + 6",
            "3 + 5",
            "4 + 4",
            "5 + 3",
            "6 + 2",
            "7 + 1",
            "7 - 1",
            "7 - 2",
            "7 - 3",
            "7 - 4",
            "7 - 5",
            "7 - 6",
            "8 - 1",
            "8 - 2",
            "8 - 3",
            "8 - 4",
            "8 - 5",
            "8 - 6",
            "8 - 7",
            //recap (5, 6)
            "6 - 2",
            "6 - 3",
            "6 - 4",
            "2 + 4",
            "3 + 3",
            "4 + 2",
            "5 - 2",
            "5 - 3",
            "2 + 3",
            "3 + 2"
        ],
        monstres: {
            "+": "fantome",
            "-": "chauve-souris"
                    //TODO autres monstres pour recap
        },
        chrono: true,
        
        estBoss: true
    },
    
    
    
    
    
    
    
    

    {
        titre: "Monde 6, la caverne : plus",
        id: "8-9-plus",
        posCarte: "2,13",
        operations: [
            "1 + 7",
            "2 + 6",
            "3 + 5",
            "4 + 4",
            "5 + 3",
            "6 + 2",
            "7 + 1",
            
            "1 + 8",
            "2 + 7",
            "3 + 6",
            "4 + 5",
            "5 + 4",
            "6 + 3",
            "7 + 2",
            "8 + 1"
        ],
        monstres: {
            "+": "mouche",
            "-": "engrenage"
        },
        chrono: false
    },
    {
        titre: "Monde 6, la caverne : moins",
        id: "8-9-moins",
        posCarte: "6,13",
        operations: [
            "8 - 1",
            "8 - 2",
            "8 - 3",
            "8 - 4",
            "8 - 5",
            "8 - 6",
            "8 - 7",
            
            "9 - 1",
            "9 - 2",
            "9 - 3",
            "9 - 4",
            "9 - 5",
            "9 - 6",
            "9 - 7",
            "9 - 8"
        ],
        monstres: {
            "+": "mouche",
            "-": "engrenage"
        },
        chrono: false   },
    {
        titre: "Monde 6, la caverne : plus et moins",
        id: "8-9-plus-moins",
        posCarte: "6,10",
        operations: [
            "1 + 7",
            "2 + 6",
            "3 + 5",
            "4 + 4",
            "5 + 3",
            "6 + 2",
            "7 + 1",
            
            "1 + 8",
            "2 + 7",
            "3 + 4",
            "4 + 3",
            "5 + 4",
            "6 + 3",
            "7 + 2",
            "8 + 1",
            
            "8 - 1",
            "8 - 2",
            "8 - 3",
            "8 - 4",
            "8 - 5",
            "8 - 6",
            "8 - 7",
            
            "9 - 1",
            "9 - 2",
            "9 - 3",
            "9 - 4",
            "9 - 5",
            "9 - 6",
            "9 - 7",
            "9 - 8"            
        ],
        monstres: {
            "+": "mouche",
            "-": "engrenage"
        },
        chrono: false
    },
    {
        titre: "Monde 6, la caverne : plus et moins chrono",
        id: "8-9-plus-moins-chrono",
        posCarte: "10,11",
        operations: [
            "1 + 7",
            "2 + 6",
            "3 + 5",
            "4 + 4",
            "5 + 3",
            "6 + 2",
            "7 + 1",
            
            "1 + 8",
            "2 + 7",
            "3 + 6",
            "4 + 5",
            "5 + 4",
            "6 + 3",
            "7 + 2",
            "8 + 1",
            
            "8 - 1",
            "8 - 2",
            "8 - 3",
            "8 - 4",
            "8 - 5",
            "8 - 6",
            "8 - 7",
            
            "9 - 1",
            "9 - 2",
            "9 - 3",
            "9 - 4",
            "9 - 5",
            "9 - 6",
            "9 - 7",
            "9 - 8"
        ],
        monstres: {
            "+": "mouche",
            "-": "engrenage"
        },
        chrono: true
    },
    
    {
        titre: "Monde 6, la caverne : forteresse",
        id: "8-9-plus-moins-chrono-recap",
        posCarte: "13,14",
        operations: [
            "1 + 7",
            "2 + 6",
            "3 + 5",
            "4 + 4",
            "5 + 3",
            "6 + 2",
            "7 + 1",
            
            "1 + 8",
            "2 + 7",
            "3 + 6",
            "4 + 5",
            "5 + 4",
            "6 + 3",
            "7 + 2",
            "8 + 1",
            
            "8 - 1",
            "8 - 2",
            "8 - 3",
            "8 - 4",
            "8 - 5",
            "8 - 6",
            "8 - 7",
            
            "9 - 1",
            "9 - 2",
            "9 - 3",
            "9 - 4",
            "9 - 5",
            "9 - 6",
            "9 - 7",
            "9 - 8",
            //recap (6, 7)
            "6 - 2",
            "6 - 3",
            "6 - 4",
            "2 + 4",
            "3 + 3",
            "4 + 2",
            
            "7 - 2",
            "7 - 3",
            "7 - 4",
            "7 - 5",
            "2 + 5",
            "3 + 4"
        ],
        monstres: {
            "+": "fantome",
            "-": "chauve-souris"
                    //TODO autres monstres pour recap
        },
        chrono: true,
        
        estBoss: true
    },


    
    
    

    {
        titre: "Monde 8, le gâteau : plus",
        id: "9-10-plus",
        posCarte: "21,14",
        operations: [
            "1 + 8",
            "2 + 7",
            "3 + 6",
            "4 + 5",
            "5 + 4",
            "6 + 3",
            "7 + 2",
            "8 + 1",
            
            "1 + 9",
            "2 + 8",
            "3 + 7",
            "4 + 6",
            "5 + 5",
            "6 + 4",
            "7 + 3",
            "8 + 2",
            "9 + 1"
        ],
        monstres: {
            "+": "slimeVert",
            "-": "slimeRose"
        },
        chrono: false
    },
    {
        titre: "Monde 8, le gâteau : moins",
        id: "9-10-moins",
        posCarte: "21,10",
        operations: [
            "9 - 1",
            "9 - 2",
            "9 - 3",
            "9 - 4",
            "9 - 5",
            "9 - 6",
            "9 - 7",
            "9 - 8",
            
            "10 - 1",
            "10 - 2",
            "10 - 3",
            "10 - 4",
            "10 - 5",
            "10 - 6",
            "10 - 7",
            "10 - 8",
            "10 - 9"
        ],
        monstres: {
            "+": "slimeVert",
            "-": "slimeRose"
        },

        chrono: false   
    },
    
    {
        titre: "Monde 8, le gâteau : plus et moins",
        id: "9-10-plus-moins",
        posCarte: "27,10",
        operations: [
            "1 + 8",
            "2 + 7",
            "3 + 6",
            "4 + 5",
            "5 + 4",
            "6 + 3",
            "7 + 2",
            "8 + 1",
            
            "1 + 9",
            "2 + 8",
            "3 + 7",
            "4 + 6",
            "5 + 5",
            "6 + 4",
            "7 + 3",
            "8 + 2",
            "9 + 1",
            
            "9 - 1",
            "9 - 2",
            "9 - 3",
            "9 - 4",
            "9 - 5",
            "9 - 6",
            "9 - 7",
            "9 - 8",
            
            "10 - 1",
            "10 - 2",
            "10 - 3",
            "10 - 4",
            "10 - 5",
            "10 - 6",
            "10 - 7",
            "10 - 8",
            "10 - 9"            
        ],
        monstres: {
            "+": "slimeVert",
            "-": "slimeRose"
        },
        chrono: false
    },
    {
        titre: "Monde 8, le gâteau : plus et moins chrono",
        id: "9-10-plus-moins-chrono",
        posCarte: "25,17",
        operations: [
            "1 + 8",
            "2 + 7",
            "3 + 6",
            "4 + 5",
            "5 + 4",
            "6 + 3",
            "7 + 2",
            "8 + 1",
            
            "1 + 9",
            "2 + 8",
            "3 + 7",
            "4 + 6",
            "5 + 5",
            "6 + 4",
            "7 + 3",
            "8 + 2",
            "9 + 1",
            
            "9 - 1",
            "9 - 2",
            "9 - 3",
            "9 - 4",
            "9 - 5",
            "9 - 6",
            "9 - 7",
            "9 - 8",
            
            "10 - 1",
            "10 - 2",
            "10 - 3",
            "10 - 4",
            "10 - 5",
            "10 - 6",
            "10 - 7",
            "10 - 8",
            "10 - 9"            
        ],
        monstres: {
            "+": "slimeVert",
            "-": "slimeRose"
        },
        chrono: true
    },


    {
        titre: "Monde 8, le gâteau : forteresse",
        id: "9-10-plus-moins-chrono-recap",
        posCarte: "25,13",
        operations: [
            "1 + 8",
            "2 + 7",
            "3 + 6",
            "4 + 5",
            "5 + 4",
            "6 + 3",
            "7 + 2",
            "8 + 1",
            
            "1 + 9",
            "2 + 8",
            "3 + 7",
            "4 + 6",
            "5 + 5",
            "6 + 4",
            "7 + 3",
            "8 + 2",
            "9 + 1",
            
            "9 - 1",
            "9 - 2",
            "9 - 3",
            "9 - 4",
            "9 - 5",
            "9 - 6",
            "9 - 7",
            "9 - 8",
            
            "10 - 1",
            "10 - 2",
            "10 - 3",
            "10 - 4",
            "10 - 5",
            "10 - 6",
            "10 - 7",
            "10 - 8",
            "10 - 9",       
            //recap (7, 8)
            "7 - 2",
            "7 - 3",
            "7 - 4",
            "7 - 5",
            "2 + 5",
            "3 + 4",
            
            "8 - 2",
            "8 - 3",
            "8 - 4",
            "8 - 5",
            "2 + 6",
            "3 + 5",
            "4 + 4"
        ],
        monstres: {
            "+": "fantome",
            "-": "chauve-souris"
                    //TODO autres monstres pour recap
        },
        chrono: true,
        
        estBoss: true
    }



];