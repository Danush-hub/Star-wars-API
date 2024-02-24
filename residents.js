// Residents data from SWAPI
const residentsData = {
    "Tatooine": [
        {
            "name": "Luke Skywalker", 
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male"
        },
        {
            "name": "C-3PO", 
            "height": "167", 
            "mass": "75", 
            "hair_color": "n/a", 
            "skin_color": "gold", 
            "eye_color": "yellow", 
            "birth_year": "112BBY", 
            "gender": "n/a",
        },
            
        {
            "name": "Darth Vader", 
            "height": "202", 
            "mass": "136", 
            "hair_color": "none", 
            "skin_color": "white", 
            "eye_color": "yellow", 
            "birth_year": "41.9BBY", 
            "gender": "male",
        },
        
        {
            "name": "Owen Lars", 
            "height": "178", 
            "mass": "120", 
            "hair_color": "brown, grey", 
            "skin_color": "light", 
            "eye_color": "blue", 
            "birth_year": "52BBY", 
            "gender": "male",
        },
        
        {
            "name": "Beru Whitesun lars", 
            "height": "165", 
            "mass": "75", 
            "hair_color": "brown", 
            "skin_color": "light", 
            "eye_color": "blue", 
            "birth_year": "47BBY", 
            "gender": "female",
        },
        
        {
            "name": "R5-D4", 
            "height": "97", 
            "mass": "32", 
            "hair_color": "n/a", 
            "skin_color": "white, red", 
            "eye_color": "red", 
            "birth_year": "unknown", 
            "gender": "n/a",
        },
        
        {
            "name": "Biggs Darklighter", 
            "height": "183", 
            "mass": "84", 
            "hair_color": "black", 
            "skin_color": "light", 
            "eye_color": "brown", 
            "birth_year": "24BBY", 
            "gender": "male",
        },
        
        {
            "name": "Anakin Skywalker", 
            "height": "188", 
            "mass": "84", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "41.9BBY", 
            "gender": "male", 
        },
        
        {
            "name": "Shmi Skywalker", 
            "height": "163", 
            "mass": "unknown", 
            "hair_color": "black", 
            "skin_color": "fair", 
            "eye_color": "brown", 
            "birth_year": "72BBY", 
            "gender": "female",
        },
        
        {
            "name": "Cliegg Lars", 
            "height": "183", 
            "mass": "unknown", 
            "hair_color": "brown", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "82BBY", 
            "gender": "male",
        },
        
    ],
    "Alderaan": [
        {
            "name": "Leia Organa", 
            "height": "150", 
            "mass": "49", 
            "hair_color": "brown", 
            "skin_color": "light", 
            "eye_color": "brown", 
            "birth_year": "19BBY", 
            "gender": "female",
        },
        {
            "name": "Bail Prestor Organa", 
            "height": "191", 
            "mass": "unknown", 
            "hair_color": "black", 
            "skin_color": "tan", 
            "eye_color": "brown", 
            "birth_year": "67BBY", 
            "gender": "male", 
        },
        
        {
            "name": "Raymus Antilles", 
            "height": "188", 
            "mass": "79", 
            "hair_color": "brown", 
            "skin_color": "light", 
            "eye_color": "brown", 
            "birth_year": "unknown", 
            "gender": "male", 
        },
        
    ],

    "Yavin IV": [
        {"name": "No data"}
    ],

    "Hoth": [
        {"name": "No data"},
    ],

    "Dagobah": [
        {"name": "No data"},
    ],

    "Bespin" : [
        {
            "name": "Lobot", 
            "height": "175", 
            "mass": "79", 
            "hair_color": "none", 
            "skin_color": "light", 
            "eye_color": "blue", 
            "birth_year": "37BBY", 
            "gender": "male", 
        },  

    ],

    "Endor":[
        {
            "name": "Wicket Systri Warrick", 
            "height": "88", 
            "mass": "20", 
            "hair_color": "brown", 
            "skin_color": "brown", 
            "eye_color": "brown", 
            "birth_year": "8BBY", 
            "gender": "male",
        },  

    ],
    
    "Naboo":[
        {
            "name": "R2-D2", 
            "height": "96", 
            "mass": "32", 
            "hair_color": "n/a", 
            "skin_color": "white, blue", 
            "eye_color": "red", 
            "birth_year": "33BBY", 
            "gender": "n/a", 
        },
        
        {
            "name": "Palpatine", 
            "height": "170", 
            "mass": "75", 
            "hair_color": "grey", 
            "skin_color": "pale", 
            "eye_color": "yellow", 
            "birth_year": "82BBY", 
            "gender": "male", 
        },
        
        {
            "name": "Padmé Amidala", 
            "height": "185", 
            "mass": "45", 
            "hair_color": "brown", 
            "skin_color": "light", 
            "eye_color": "brown", 
            "birth_year": "46BBY", 
            "gender": "female", 
        },
        
        {
            "name": "Jar Jar Binks", 
            "height": "196", 
            "mass": "66", 
            "hair_color": "none", 
            "skin_color": "orange", 
            "eye_color": "orange", 
            "birth_year": "52BBY", 
            "gender": "male", 
        },
        
        {
            "name": "Roos Tarpals", 
            "height": "224", 
            "mass": "82", 
            "hair_color": "none", 
            "skin_color": "grey", 
            "eye_color": "orange", 
            "birth_year": "unknown", 
            "gender": "male", 
        },,
        
        {
            "name": "Dormé", 
            "height": "165", 
            "mass": "unknown", 
            "hair_color": "brown", 
            "skin_color": "light", 
            "eye_color": "brown", 
            "birth_year": "unknown", 
            "gender": "female", 
        },
         

    ],

    "Coruscant":[
        {
            "name": "Finis Valorum", 
            "height": "170", 
            "mass": "unknown", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "91BBY", 
            "gender": "male", 
        },
        
        {
            "name": "Adi Gallia", 
            "height": "184", 
            "mass": "50", 
            "hair_color": "none", 
            "skin_color": "dark", 
            "eye_color": "blue", 
            "birth_year": "unknown", 
            "gender": "female", 
        },
        
        {
            "name": "Jocasta Nu", 
            "height": "167", 
            "mass": "unknown", 
            "hair_color": "white", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "unknown", 
            "gender": "female", 
        },
         

    ],

    "Kamino":[
        {
            "name": "Boba Fett", 
            "height": "183", 
            "mass": "78.2", 
            "hair_color": "black", 
            "skin_color": "fair", 
            "eye_color": "brown", 
            "birth_year": "31.5BBY", 
            "gender": "male", 
        },
        
        {
            "name": "Lama Su", 
            "height": "229", 
            "mass": "88", 
            "hair_color": "none", 
            "skin_color": "grey", 
            "eye_color": "black", 
            "birth_year": "unknown", 
            "gender": "male", 
        },
        
        {
            "name": "Taun We", 
            "height": "213", 
            "mass": "unknown", 
            "hair_color": "none", 
            "skin_color": "grey", 
            "eye_color": "black", 
            "birth_year": "unknown", 
            "gender": "female", 
        }, 

    ],
};

// Residents data Display
const planetResidentsTable = document.getElementById('planet-residents').getElementsByTagName('tbody')[0];

for (const planetName in residentsData) {
    if (residentsData.hasOwnProperty(planetName)) {
        const residents = residentsData[planetName];
        
        residents.forEach(resident => {
            const row = planetResidentsTable.insertRow();
            row.insertCell(0).textContent = planetName;
            row.insertCell(1).textContent = resident.name;
            row.insertCell(2).textContent = resident.height;
            row.insertCell(3).textContent = resident.mass;
            row.insertCell(4).textContent = resident.hair_color;
            row.insertCell(5).textContent = resident.skin_color;
            row.insertCell(6).textContent = resident.eye_color;
            row.insertCell(7).textContent = resident.birth_year;
            row.insertCell(8).textContent = resident.gender;
        });
    }
}