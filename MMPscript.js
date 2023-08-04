document.addEventListener("DOMContentLoaded", function() {
    var galleryDiv = document.getElementById("image-gallery");

    var gen1 = [
        "Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise",
        "Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate",
        "Spearow","Fearow","Ekans","Arbok","Pichu","Pikachu","Raichu","Sandshrew","Sandslash","NidoranF","Nidorina","Nidoqueen",
        "NidoranM","Nidorino","Nidoking","Cleffa","Clefairy","Clefable","Vulpix","Ninetales","Igglybuff","Jigglypuff","Wigglytuff",
        "Zubat","Golbat","Crobat","Oddish","Gloom","Vileplume","Bellossom","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio",
        "Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Politoed",
        "Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel",
        "Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Slowking","Magnemite","Magneton","Farfetch'd",
        "Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Steelix",
        "Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak",
        "Tyrogue","Hitmonlee","Hitmonchan","Hitmontop","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Blissey",
        "Tangela","Kangaskhan","Horsea","Seadra","Kingdra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Scizor",
        "Smoochum","Jynx","Elekid","Electabuzz","Magby","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto",
        "Eevee","Vaporeon","Jolteon","Flareon","Espeon","Umbreon","Porygon","Porygon2","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl",
        "Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"
    ];

    var gen2 = [
        "Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion","Totodile","Croconaw","Feraligatr",
        "Sentret","Furret","Hoothoot","Noctowl","Ledyba","Ledian","Spinarak","Ariados","Chinchou","Lanturn",
        "Togepi","Togetic","Natu","Xatu","Mareep","Flaaffy","Ampharos","Azurill","Marill","Azumarill","Sudowoodo",
        "Hoppip","Skiploom","Jumpluff","Aipom","Sunkern","Sunflora","Yanma","Wooper","Quagsire",
        "Murkrow","Misdreavus","Unown","Wynaut","Wobbuffet","Girafarig","Pineco","Forretress","Dunsparce","Gligar",
        "Snubbull","Granbull","Qwilfish","Shuckle","Heracross","Sneasel","Teddiursa","Ursaring","Slugma","Magcargo",
        "Swinub","Piloswine","Corsola","Remoraid","Octillery","Delibird","Mantine","Skarmory","Houndour","Houndoom",
        "Phanpy","Donphan","Stantler","Smeargle","Miltank","Raikou","Entei","Suicune","Larvitar","Pupitar","Tyranitar",
        "Lugia","Ho-oh","Celebi"
    ];

    var gen3 = [
        "Treecko","Grovyle","Sceptile","Torchic","Combusken","Blaziken","Mudkip","Marshtomp","Swampert",
        "Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox",
        "Lotad","Lombre","Ludicolo","Seedot","Nuzleaf","Shiftry","Taillow","Swellow","Wingull","Pelipper",
        "Ralts","Kirlia","Gardevoir","Surskit","Masquerain","Shroomish","Breloom","Slakoth","Vigoroth","Slaking",
        "Nincada","Ninjask","Shedinja","Whismur","Loudred","Exploud","Makuhita","Hariyama","Nosepass",
        "Skitty","Delcatty","Sableye","Mawile","Aron","Lairon","Aggron","Meditite","Medicham","Electrike","Manectric",
        "Plusle","Minun","Volbeat","Illumise","Roselia","Gulpin","Swalot","Carvanha","Sharpedo","Wailmer","Wailord",
        "Numel","Camerupt","Torkoal","Spoink","Grumpig","Spinda","Trapinch","Vibrava","Flygon","Cacnea","Cacturne",
        "Swablu","Altaria","Zangoose","Seviper","Lunatone","Solrock","Barboach","Whiscash","Corphish","Crawdaunt",
        "Baltoy","Claydol","Lileep","Cradily","Anorith","Armaldo","Feebas","Milotic","Castform","Kecleon",
        "Shuppet","Banette","Duskull","Dusclops","Tropius","Chimecho","Absol","Snorunt","Glalie",
        "Spheal","Sealeo","Walrein","Clamperl","Huntail","Gorebyss","Relicanth","Luvdisc","Bagon","Shelgon","Salamence",
        "Beldum","Metang","Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon","Rayquaza",
        "Jirachi","Deoxys"
    ];

    // Objeto que mapea elementos a sus rutas de imagen
    var elementImageMap = {
        "Pichu": "images/Gen2/Pichu.png","Cleffa": "images/Gen2/Cleffa.png","Igglybuff": "images/Gen2/Igglybuff.png","Crobat": "images/Gen2/Crobat.png","Bellossom": "images/Gen2/Bellossom.png",
        "Politoed": "images/Gen2/Politoed.png","Slowking": "images/Gen2/Slowking.png","Steelix": "images/Gen2/Steelix.png","Tyrogue": "images/Gen2/Tyrogue.png","Hitmontop": "images/Gen2/Hitmontop.png",
        "Blissey": "images/Gen2/Blissey.png","Kingdra": "images/Gen2/Kingdra.png","Scizor": "images/Gen2/Scizor.png","Smoochum": "images/Gen2/Smoochum.png","Elekid": "images/Gen2/Elekid.png",
        "Magby": "images/Gen2/Magby.png","Espeon": "images/Gen2/Espeon.png","Umbreon": "images/Gen2/Umbreon.png","Porygon2": "images/Gen2/Porygon2.png",
        "Azurill": "images/Gen3/Azurill.png","Wynaut": "images/Gen3/Wynaut.png",
        // Agrega más elementos y rutas de imagen aquí
    };

    // Mover elementos repetidos de gen2 a gen1 y actualizar el objeto elementImageMap
    for (var i = 0; i < gen2.length; i++) {
        var element = gen2[i];
        if (gen1.indexOf(element) !== -1) {
            gen1.push(gen2.splice(i, 1)[0]);
            i--; // Ajustar el índice debido a la eliminación
            elementImageMap[element] = "images/Gen1/" + element + ".png";
        }
    }

    var allStuff = gen1.concat(gen2).concat(gen3); // Combinar los arrays en uno solo

    for (var i = 0; i < allStuff.length; i++) {
        var container = document.createElement("div");
        container.className = "pokemon-container"; // Asignar la clase para el estilo

        var img = document.createElement("img");
        var element = allStuff[i];
        var imagePath = elementImageMap[element];

        if (imagePath) {
            img.src = imagePath;
        } else if (gen1.indexOf(element) !== -1) {
            img.src = "images/Gen1/" + element + ".png";
        } else if (gen2.indexOf(element) !== -1) {
            img.src = "images/Gen2/" + element + ".png";
        } else if (gen3.indexOf(element) !== -1) {
            img.src = "images/Gen3/" + element + ".png";
        }

        var name = document.createElement("p");
        name.className = "pokemon-name"; // Asignar la clase para el estilo
        name.textContent = allStuff[i]; // Texto del nombre del Pokémon

        img.width = 64;
        img.height = 64;
        container.appendChild(img);
        container.appendChild(name); // Agregar el nombre al contenedor
        galleryDiv.appendChild(container); // Agregar el contenedor a la galería
    }
});