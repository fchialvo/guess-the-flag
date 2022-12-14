const URL = "https://flagcdn.com/w1280/"
const countryListAlpha2EN = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AD": "Andorra",
    "AO": "Angola",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BR": "Brazil",
    "BN": "Brunei",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CO": "Colombia",
    "KM": "The Comoros",
    "CD": "Democratic Republic of the Congo",
    "CG": "The Congo",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "CI": "Côte d'Ivoire",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GR": "Greece",
    "GD": "Grenada",
    "GT": "Guatemala",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "North Korea",
    "KR": "South Korea",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "MX": "Mexico",
    "FM": "Micronesia",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "The Netherlands",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "North Macedonia",
    "RO": "Romania",
    "RU": "Russia",
    "RW": "Rwanda",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syria",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
};

const countryListAlpha2ES = {
    "AF": "Afganistán",
    "AL": "Albania",
    "DZ": "Argelia",
    "AD": "Andorra",
    "AO": "Angola",
    "AG": "Antigua y Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaiyán",
    "BS": "Bahamas",
    "BH": "Baréin",
    "BD": "Bangladés",
    "BB": "Barbados",
    "BY": "Bielorrusia",
    "BE": "Bélgica",
    "BZ": "Belice",
    "BJ": "Benín",
    "BM": "Bermudas",
    "BT": "Bután",
    "BO": "Bolivia",
    "BA": "Bosnia y Herzegovina",
    "BW": "Botsuana",
    "BR": "Brasil",
    "BN": "Brunéi",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Camboya",
    "CM": "Camerún",
    "CA": "Canadá",
    "CF": "República Centroafricana",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CO": "Colombia",
    "KM": "Las Comoras",
    "CD": "República Democrática del Congo",
    "CG": "El Congo",
    "CR": "Costa Rica",
    "HR": "Croacia",
    "CU": "Cuba",
    "CY": "Chipre",
    "CZ": "Chequia",
    "CI": "Costa de Marfil",
    "DK": "Dinamarca",
    "DJ": "Yibuti",
    "DM": "Dominica",
    "DO": "República Dominicana",
    "EC": "Ecuador",
    "EG": "Egipto",
    "SV": "El Salvador",
    "GQ": "Guinea Ecuatorial",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Esuatini",
    "ET": "Etiopía",
    "FJ": "Fiyi",
    "FI": "Finlandia",
    "FR": "Francia",
    "GA": "Gabón",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Alemania",
    "GH": "Ghana",
    "GR": "Grecia",
    "GD": "Granada",
    "GT": "Guatemala",
    "GN": "Guinea",
    "GW": "Guinea-Bisáu",
    "GY": "Guyana",
    "HT": "Haití",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungría",
    "IS": "Islandia",
    "IN" : "India",
    "ID": "Indonesia",
    "IR": "Irán",
    "IQ": "Irak",
    "IE": "Irlanda",
    "IL": "Israel",
    "IT": "Italia",
    "JM": "Jamaica",
    "JP": "Japón",
    "JO": "Jordania",
    "KZ": "Kazajstán",
    "KE": "Kenia",
    "KI": "Kiribati",
    "KP": "Corea del Norte",
    "KR": "Corea del Sur",
    "KW": "Kuwait",
    "KG": "Kirguistán",
    "LV": "Letonia",
    "LB": "Líbano",
    "LS": "Lesoto",
    "LR": "Liberia",
    "LY": "Libia",
    "LI": "Liechtenstein",
    "LT": "Lituania",
    "LU": "Luxemburgo",
    "MG": "Madagascar",
    "MW": "Malaui",
    "MY": "Malasia",
    "MV": "Maldivas",
    "ML": "Malí",
    "MT": "Malta",
    "MH": "Islas Marshall",
    "MR": "Mauritania",
    "MU": "Mauricio",
    "MX": "México",
    "FM": "Micronesia",
    "MD": "Moldavia",
    "MC": "Mónaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MA": "Marruecos",
    "MZ": "Mozambique",
    "MM": "Birmania",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Países Bajos",
    "NZ": "Nueva Zelanda",
    "NI": "Nicaragua",
    "NE": "Níger",
    "NG": "Nigeria",
    "NO": "Noruega",
    "OM": "Omán",
    "PK": "Pakistán",
    "PW": "Palaus",
    "PS": "Palestina",
    "PA": "Panamá",
    "PG": "Papúa Nueva Guinea",
    "PY": "Paraguay",
    "PE": "Perú",
    "PH": "Filipinas",
    "PL": "Polonia",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Catar",
    "MK": "Macedonia del Norte",
    "RO": "Rumanía",
    "RU": "Rusia",
    "RW": "Ruanda",
    "KN": "San Cristóbal y Nieves",
    "LC": "Santa Lucía",
    "VC": "San Vicente y las Granadinas",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Santo Tomé y Príncipe",
    "SA": "Arabia Saudita",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leona",
    "SG": "Singapur",
    "SK": "Eslovaquia",
    "SI": "Eslovenia",
    "SB": "Islas Salomón",
    "SO": "Somalia",
    "ZA": "Sudáfrica",
    "SS": "Sudán del Sur",
    "ES": "España",
    "LK": "Sri Lanka",
    "SD": "Sudán",
    "SR": "Surinam",
    "SE": "Suecia",
    "CH": "Suiza",
    "SY": "Siria",
    "TW": "Taiwán",
    "TJ": "Tayikistán",
    "TZ": "Tanzania",
    "TH": "Tailandia",
    "TL": "Timor Oriental",
    "TG": "Togo",
    "TO": "Tonga",
    "TT": "Trinidad y Tobago",
    "TN": "Túnez",
    "TR": "Turquía",
    "TM": "Turkmenistán",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ucrania",
    "AE": "Emiratos Árabes Unidos",
    "GB": "Reino Unido",
    "US": "Estados Unidos",
    "UY": "Uruguay",
    "UZ": "Uzbekistán",
    "VU": "Vanuatu",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabue",
}

let flags = []; 


const countryNames = [];
if(document.documentElement.lang == 'en'){
    countryCodes = Object.keys(countryListAlpha2EN);
    for (var key1 in countryListAlpha2EN) {
        const countryCodes = [];
        countryNames.push(countryListAlpha2EN[key1])
    }
}
else{
    countryCodes = Object.keys(countryListAlpha2ES);
    for (var key1 in countryListAlpha2ES) {
        const countryCodes = [];
        countryNames.push(countryListAlpha2ES[key1])
    }
}


function randomizeAnswers(answers){
    for(var i =answers.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) ); //random index
        [answers[i],answers[j]]=[answers[j],answers[i]]; // swap
    }
    return answers  
}



countryCodes.forEach(function(code, index){
    let flag = URL + code.toLowerCase() + ".png"; //generates each flag img

    //creates array with random answers, the first one being the correct one
    let answers = [countryNames[index], countryNames[Math.floor(Math.random() * countryNames.length)],countryNames[Math.floor(Math.random() * countryNames.length)], countryNames[Math.floor(Math.random() * countryNames.length)]] ;

    //if there is duplicated answers:
    const uniqueAnswers= [];
    answers.forEach((answer)=>{
    	//pushes only unique element
        if(!uniqueAnswers.includes(answer)){
    		uniqueAnswers.push(answer);
    	}
        else{
            //replaces with new answer
            uniqueAnswers.push(countryNames[Math.floor(Math.random() * countryNames.length)])
        }
    })
    //mixes the order of answers
    let randomAnswers = randomizeAnswers(uniqueAnswers);

    //creates flag object
    flags.push({
        flag: flag,
        countryName : countryNames[index],
        answers: uniqueAnswers,
        correctAnswer: (randomAnswers.indexOf(countryNames[index]) + 1)
    });
})
