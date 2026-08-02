const Y=["USD","GBP","EUR","CAD","AUD","SGD","JPY","MXN","IDR"],K={US:"USD",GB:"GBP",AT:"EUR",BE:"EUR",HR:"EUR",CY:"EUR",EE:"EUR",FI:"EUR",FR:"EUR",DE:"EUR",GR:"EUR",IE:"EUR",IT:"EUR",LV:"EUR",LT:"EUR",LU:"EUR",MT:"EUR",NL:"EUR",PT:"EUR",SK:"EUR",SI:"EUR",ES:"EUR",CA:"CAD",AU:"AUD",SG:"SGD",JP:"JPY",MX:"MXN",ID:"IDR"};function Ae(e){return e&&K[e]||null}const v=[{name:"United States",code:"US",dial:"1",flag:"🇺🇸"},{name:"United Kingdom",code:"GB",dial:"44",flag:"🇬🇧"},{name:"Canada",code:"CA",dial:"1",flag:"🇨🇦"},{name:"Australia",code:"AU",dial:"61",flag:"🇦🇺"},{name:"Singapore",code:"SG",dial:"65",flag:"🇸🇬"},{name:"Japan",code:"JP",dial:"81",flag:"🇯🇵"},{name:"Mexico",code:"MX",dial:"52",flag:"🇲🇽"},{name:"Indonesia",code:"ID",dial:"62",flag:"🇮🇩"},{name:"Germany",code:"DE",dial:"49",flag:"🇩🇪"},{name:"France",code:"FR",dial:"33",flag:"🇫🇷"},{name:"Italy",code:"IT",dial:"39",flag:"🇮🇹"},{name:"Spain",code:"ES",dial:"34",flag:"🇪🇸"},{name:"Netherlands",code:"NL",dial:"31",flag:"🇳🇱"},{name:"Belgium",code:"BE",dial:"32",flag:"🇧🇪"},{name:"Ireland",code:"IE",dial:"353",flag:"🇮🇪"},{name:"Portugal",code:"PT",dial:"351",flag:"🇵🇹"},{name:"Greece",code:"GR",dial:"30",flag:"🇬🇷"},{name:"Austria",code:"AT",dial:"43",flag:"🇦🇹"},{name:"Switzerland",code:"CH",dial:"41",flag:"🇨🇭"},{name:"Sweden",code:"SE",dial:"46",flag:"🇸🇪"},{name:"Norway",code:"NO",dial:"47",flag:"🇳🇴"},{name:"Denmark",code:"DK",dial:"45",flag:"🇩🇰"},{name:"Finland",code:"FI",dial:"358",flag:"🇫🇮"},{name:"Poland",code:"PL",dial:"48",flag:"🇵🇱"},{name:"Czech Republic",code:"CZ",dial:"420",flag:"🇨🇿"},{name:"Slovakia",code:"SK",dial:"421",flag:"🇸🇰"},{name:"Hungary",code:"HU",dial:"36",flag:"🇭🇺"},{name:"Romania",code:"RO",dial:"40",flag:"🇷🇴"},{name:"Bulgaria",code:"BG",dial:"359",flag:"🇧🇬"},{name:"Croatia",code:"HR",dial:"385",flag:"🇭🇷"},{name:"Slovenia",code:"SI",dial:"386",flag:"🇸🇮"},{name:"Slovakia",code:"SK",dial:"421",flag:"🇸🇰"},{name:"Lithuania",code:"LT",dial:"370",flag:"🇱🇹"},{name:"Latvia",code:"LV",dial:"371",flag:"🇱🇻"},{name:"Estonia",code:"EE",dial:"372",flag:"🇪🇪"},{name:"Luxembourg",code:"LU",dial:"352",flag:"🇱🇺"},{name:"Malta",code:"MT",dial:"356",flag:"🇲🇹"},{name:"Cyprus",code:"CY",dial:"357",flag:"🇨🇾"},{name:"Iceland",code:"IS",dial:"354",flag:"🇮🇸"},{name:"Russia",code:"RU",dial:"7",flag:"🇷🇺"},{name:"Ukraine",code:"UA",dial:"380",flag:"🇺🇦"},{name:"Belarus",code:"BY",dial:"375",flag:"🇧🇾"},{name:"Turkey",code:"TR",dial:"90",flag:"🇹🇷"},{name:"China",code:"CN",dial:"86",flag:"🇨🇳"},{name:"Hong Kong",code:"HK",dial:"852",flag:"🇭🇰"},{name:"Taiwan",code:"TW",dial:"886",flag:"🇹🇼"},{name:"South Korea",code:"KR",dial:"82",flag:"🇰🇷"},{name:"North Korea",code:"KP",dial:"850",flag:"🇰🇵"},{name:"India",code:"IN",dial:"91",flag:"🇮🇳"},{name:"Pakistan",code:"PK",dial:"92",flag:"🇵🇰"},{name:"Bangladesh",code:"BD",dial:"880",flag:"🇧🇩"},{name:"Sri Lanka",code:"LK",dial:"94",flag:"🇱🇰"},{name:"Nepal",code:"NP",dial:"977",flag:"🇳🇵"},{name:"Bhutan",code:"BT",dial:"975",flag:"🇧🇹"},{name:"Maldives",code:"MV",dial:"960",flag:"🇲🇻"},{name:"Thailand",code:"TH",dial:"66",flag:"🇹🇭"},{name:"Vietnam",code:"VN",dial:"84",flag:"🇻🇳"},{name:"Malaysia",code:"MY",dial:"60",flag:"🇲🇾"},{name:"Philippines",code:"PH",dial:"63",flag:"🇵🇭"},{name:"Cambodia",code:"KH",dial:"855",flag:"🇰🇭"},{name:"Laos",code:"LA",dial:"856",flag:"🇱🇦"},{name:"Myanmar",code:"MM",dial:"95",flag:"🇲🇲"},{name:"Brunei",code:"BN",dial:"673",flag:"🇧🇳"},{name:"Mongolia",code:"MN",dial:"976",flag:"🇲🇳"},{name:"Kazakhstan",code:"KZ",dial:"7",flag:"🇰🇿"},{name:"Uzbekistan",code:"UZ",dial:"998",flag:"🇺🇿"},{name:"Turkmenistan",code:"TM",dial:"993",flag:"🇹🇲"},{name:"Kyrgyzstan",code:"KG",dial:"996",flag:"🇰🇬"},{name:"Tajikistan",code:"TJ",dial:"992",flag:"🇹🇯"},{name:"Afghanistan",code:"AF",dial:"93",flag:"🇦🇫"},{name:"Iran",code:"IR",dial:"98",flag:"🇮🇷"},{name:"Iraq",code:"IQ",dial:"964",flag:"🇮🇶"},{name:"Saudi Arabia",code:"SA",dial:"966",flag:"🇸🇦"},{name:"United Arab Emirates",code:"AE",dial:"971",flag:"🇦🇪"},{name:"Qatar",code:"QA",dial:"974",flag:"🇶🇦"},{name:"Kuwait",code:"KW",dial:"965",flag:"🇰🇼"},{name:"Bahrain",code:"BH",dial:"973",flag:"🇧🇭"},{name:"Oman",code:"OM",dial:"968",flag:"🇴🇲"},{name:"Yemen",code:"YE",dial:"967",flag:"🇾🇪"},{name:"Jordan",code:"JO",dial:"962",flag:"🇯🇴"},{name:"Lebanon",code:"LB",dial:"961",flag:"🇱🇧"},{name:"Syria",code:"SY",dial:"963",flag:"🇸🇾"},{name:"Israel",code:"IL",dial:"972",flag:"🇮🇱"},{name:"Palestine",code:"PS",dial:"970",flag:"🇵🇸"},{name:"Georgia",code:"GE",dial:"995",flag:"🇬🇪"},{name:"Armenia",code:"AM",dial:"374",flag:"🇦🇲"},{name:"Azerbaijan",code:"AZ",dial:"994",flag:"🇦🇿"},{name:"Moldova",code:"MD",dial:"373",flag:"🇲🇩"},{name:"Serbia",code:"RS",dial:"381",flag:"🇷🇸"},{name:"Bosnia and Herzegovina",code:"BA",dial:"387",flag:"🇧🇦"},{name:"Montenegro",code:"ME",dial:"382",flag:"🇲🇪"},{name:"North Macedonia",code:"MK",dial:"389",flag:"🇲🇰"},{name:"Albania",code:"AL",dial:"355",flag:"🇦🇱"},{name:"Kosovo",code:"XK",dial:"383",flag:"🇽🇰"},{name:"Andorra",code:"AD",dial:"376",flag:"🇦🇩"},{name:"Monaco",code:"MC",dial:"377",flag:"🇲🇨"},{name:"Liechtenstein",code:"LI",dial:"423",flag:"🇱🇮"},{name:"San Marino",code:"SM",dial:"378",flag:"🇸🇲"},{name:"Vatican City",code:"VA",dial:"379",flag:"🇻🇦"},{name:"Gibraltar",code:"GI",dial:"350",flag:"🇬🇮"},{name:"Faroe Islands",code:"FO",dial:"298",flag:"🇫🇴"},{name:"Greenland",code:"GL",dial:"299",flag:"🇬🇱"},{name:"New Zealand",code:"NZ",dial:"64",flag:"🇳🇿"},{name:"Fiji",code:"FJ",dial:"679",flag:"🇫🇯"},{name:"Papua New Guinea",code:"PG",dial:"675",flag:"🇵🇬"},{name:"Solomon Islands",code:"SB",dial:"677",flag:"🇸🇧"},{name:"Vanuatu",code:"VU",dial:"678",flag:"🇻🇺"},{name:"Samoa",code:"WS",dial:"685",flag:"🇼🇸"},{name:"Tonga",code:"TO",dial:"676",flag:"🇹🇴"},{name:"Kiribati",code:"KI",dial:"686",flag:"🇰🇮"},{name:"Marshall Islands",code:"MH",dial:"692",flag:"🇲🇭"},{name:"Micronesia",code:"FM",dial:"691",flag:"🇫🇲"},{name:"Palau",code:"PW",dial:"680",flag:"🇵🇼"},{name:"Nauru",code:"NR",dial:"674",flag:"🇳🇷"},{name:"Tuvalu",code:"TV",dial:"688",flag:"🇹🇻"},{name:"Cook Islands",code:"CK",dial:"682",flag:"🇨🇰"},{name:"Niue",code:"NU",dial:"683",flag:"🇳🇺"},{name:"Egypt",code:"EG",dial:"20",flag:"🇪🇬"},{name:"Libya",code:"LY",dial:"218",flag:"🇱🇾"},{name:"Tunisia",code:"TN",dial:"216",flag:"🇹🇳"},{name:"Algeria",code:"DZ",dial:"213",flag:"🇩🇿"},{name:"Morocco",code:"MA",dial:"212",flag:"🇲🇦"},{name:"Western Sahara",code:"EH",dial:"212",flag:"🇪🇭"},{name:"Mauritania",code:"MR",dial:"222",flag:"🇲🇷"},{name:"Mali",code:"ML",dial:"223",flag:"🇲🇱"},{name:"Niger",code:"NE",dial:"227",flag:"🇳🇪"},{name:"Chad",code:"TD",dial:"235",flag:"🇹🇩"},{name:"Sudan",code:"SD",dial:"249",flag:"🇸🇩"},{name:"South Sudan",code:"SS",dial:"211",flag:"🇸🇸"},{name:"Eritrea",code:"ER",dial:"291",flag:"🇪🇷"},{name:"Djibouti",code:"DJ",dial:"253",flag:"🇩🇯"},{name:"Ethiopia",code:"ET",dial:"251",flag:"🇪🇹"},{name:"Somalia",code:"SO",dial:"252",flag:"🇸🇴"},{name:"Kenya",code:"KE",dial:"254",flag:"🇰🇪"},{name:"Uganda",code:"UG",dial:"256",flag:"🇺🇬"},{name:"Tanzania",code:"TZ",dial:"255",flag:"🇹🇿"},{name:"Rwanda",code:"RW",dial:"250",flag:"🇷🇼"},{name:"Burundi",code:"BI",dial:"257",flag:"🇧🇮"},{name:"Democratic Republic of the Congo",code:"CD",dial:"243",flag:"🇨🇩"},{name:"Republic of the Congo",code:"CG",dial:"242",flag:"🇨🇬"},{name:"Central African Republic",code:"CF",dial:"236",flag:"🇨🇫"},{name:"Cameroon",code:"CM",dial:"237",flag:"🇨🇲"},{name:"Gabon",code:"GA",dial:"241",flag:"🇬🇦"},{name:"Equatorial Guinea",code:"GQ",dial:"240",flag:"🇬🇶"},{name:"São Tomé and Príncipe",code:"ST",dial:"239",flag:"🇸🇹"},{name:"Nigeria",code:"NG",dial:"234",flag:"🇳🇬"},{name:"Benin",code:"BJ",dial:"229",flag:"🇧🇯"},{name:"Togo",code:"TG",dial:"228",flag:"🇹🇬"},{name:"Ghana",code:"GH",dial:"233",flag:"🇬🇭"},{name:"Ivory Coast",code:"CI",dial:"225",flag:"🇨🇮"},{name:"Burkina Faso",code:"BF",dial:"226",flag:"🇧🇫"},{name:"Liberia",code:"LR",dial:"231",flag:"🇱🇷"},{name:"Sierra Leone",code:"SL",dial:"232",flag:"🇸🇱"},{name:"Guinea",code:"GN",dial:"224",flag:"🇬🇳"},{name:"Guinea-Bissau",code:"GW",dial:"245",flag:"🇬🇼"},{name:"The Gambia",code:"GM",dial:"220",flag:"🇬🇲"},{name:"Senegal",code:"SN",dial:"221",flag:"🇸🇳"},{name:"Cape Verde",code:"CV",dial:"238",flag:"🇨🇻"},{name:"Angola",code:"AO",dial:"244",flag:"🇦🇴"},{name:"Zambia",code:"ZM",dial:"260",flag:"🇿🇲"},{name:"Zimbabwe",code:"ZW",dial:"263",flag:"🇿🇼"},{name:"Malawi",code:"MW",dial:"265",flag:"🇲🇼"},{name:"Mozambique",code:"MZ",dial:"258",flag:"🇲🇿"},{name:"Botswana",code:"BW",dial:"267",flag:"🇧🇼"},{name:"Namibia",code:"NA",dial:"264",flag:"🇳🇦"},{name:"South Africa",code:"ZA",dial:"27",flag:"🇿🇦"},{name:"Lesotho",code:"LS",dial:"266",flag:"🇱🇸"},{name:"Eswatini",code:"SZ",dial:"268",flag:"🇸🇿"},{name:"Madagascar",code:"MG",dial:"261",flag:"🇲🇬"},{name:"Mauritius",code:"MU",dial:"230",flag:"🇲🇺"},{name:"Comoros",code:"KM",dial:"269",flag:"🇰🇲"},{name:"Seychelles",code:"SC",dial:"248",flag:"🇸🇨"},{name:"Argentina",code:"AR",dial:"54",flag:"🇦🇷"},{name:"Brazil",code:"BR",dial:"55",flag:"🇧🇷"},{name:"Chile",code:"CL",dial:"56",flag:"🇨🇱"},{name:"Colombia",code:"CO",dial:"57",flag:"🇨🇴"},{name:"Peru",code:"PE",dial:"51",flag:"🇵🇪"},{name:"Venezuela",code:"VE",dial:"58",flag:"🇻🇪"},{name:"Bolivia",code:"BO",dial:"591",flag:"🇧🇴"},{name:"Paraguay",code:"PY",dial:"595",flag:"🇵🇾"},{name:"Uruguay",code:"UY",dial:"598",flag:"🇺🇾"},{name:"Ecuador",code:"EC",dial:"593",flag:"🇪🇨"},{name:"Guyana",code:"GY",dial:"592",flag:"🇬🇾"},{name:"Suriname",code:"SR",dial:"597",flag:"🇸🇷"},{name:"Costa Rica",code:"CR",dial:"506",flag:"🇨🇷"},{name:"Panama",code:"PA",dial:"507",flag:"🇵🇦"},{name:"Guatemala",code:"GT",dial:"502",flag:"🇬🇹"},{name:"Honduras",code:"HN",dial:"504",flag:"🇭🇳"},{name:"El Salvador",code:"SV",dial:"503",flag:"🇸🇻"},{name:"Nicaragua",code:"NI",dial:"505",flag:"🇳🇮"},{name:"Belize",code:"BZ",dial:"501",flag:"🇧🇿"},{name:"Cuba",code:"CU",dial:"53",flag:"🇨🇺"},{name:"Dominican Republic",code:"DO",dial:"1",flag:"🇩🇴"},{name:"Haiti",code:"HT",dial:"509",flag:"🇭🇹"},{name:"Jamaica",code:"JM",dial:"1",flag:"🇯🇲"},{name:"Bahamas",code:"BS",dial:"1",flag:"🇧🇸"},{name:"Barbados",code:"BB",dial:"1",flag:"🇧🇧"},{name:"Trinidad and Tobago",code:"TT",dial:"1",flag:"🇹🇹"},{name:"Grenada",code:"GD",dial:"1",flag:"🇬🇩"},{name:"Saint Lucia",code:"LC",dial:"1",flag:"🇱🇨"},{name:"Saint Vincent and the Grenadines",code:"VC",dial:"1",flag:"🇻🇨"},{name:"Antigua and Barbuda",code:"AG",dial:"1",flag:"🇦🇬"},{name:"Dominica",code:"DM",dial:"1",flag:"🇩🇲"},{name:"Saint Kitts and Nevis",code:"KN",dial:"1",flag:"🇰🇳"},{name:"Puerto Rico",code:"PR",dial:"1",flag:"🇵🇷"},{name:"Guam",code:"GU",dial:"1",flag:"🇬🇺"},{name:"United States Virgin Islands",code:"VI",dial:"1",flag:"🇻🇮"},{name:"Northern Mariana Islands",code:"MP",dial:"1",flag:"🇲🇵"},{name:"American Samoa",code:"AS",dial:"1",flag:"🇦🇸"},{name:"Bermuda",code:"BM",dial:"1",flag:"🇧🇲"},{name:"Cayman Islands",code:"KY",dial:"1",flag:"🇰🇾"},{name:"Turks and Caicos Islands",code:"TC",dial:"1",flag:"🇹🇨"},{name:"British Virgin Islands",code:"VG",dial:"1",flag:"🇻🇬"},{name:"Anguilla",code:"AI",dial:"1",flag:"🇦🇮"},{name:"Montserrat",code:"MS",dial:"1",flag:"🇲🇸"},{name:"Falkland Islands",code:"FK",dial:"500",flag:"🇫🇰"},{name:"Saint Helena",code:"SH",dial:"290",flag:"🇸🇭"},{name:"Tristan da Cunha",code:"TA",dial:"290",flag:"🇹🇦"},{name:"Aruba",code:"AW",dial:"297",flag:"🇦🇼"},{name:"Curaçao",code:"CW",dial:"599",flag:"🇨🇼"},{name:"Sint Maarten",code:"SX",dial:"1",flag:"🇸🇽"},{name:"Bonaire, Sint Eustatius and Saba",code:"BQ",dial:"599",flag:"🇧🇶"},{name:"New Caledonia",code:"NC",dial:"687",flag:"🇳🇨"},{name:"French Polynesia",code:"PF",dial:"689",flag:"🇵🇫"},{name:"Wallis and Futuna",code:"WF",dial:"681",flag:"🇼🇫"},{name:"French Guiana",code:"GF",dial:"594",flag:"🇬🇫"},{name:"Guadeloupe",code:"GP",dial:"590",flag:"🇬🇵"},{name:"Martinique",code:"MQ",dial:"596",flag:"🇲🇶"},{name:"Mayotte",code:"YT",dial:"262",flag:"🇾🇹"},{name:"Réunion",code:"RE",dial:"262",flag:"🇷🇪"},{name:"Saint Pierre and Miquelon",code:"PM",dial:"508",flag:"🇵🇲"},{name:"Saint Barthélemy",code:"BL",dial:"590",flag:"🇧🇱"},{name:"Saint Martin (French)",code:"MF",dial:"590",flag:"🇲🇫"},{name:"Christmas Island",code:"CX",dial:"61",flag:"🇨🇽"},{name:"Cocos (Keeling) Islands",code:"CC",dial:"61",flag:"🇨🇨"},{name:"Norfolk Island",code:"NF",dial:"672",flag:"🇳🇫"},{name:"Tokelau",code:"TK",dial:"690",flag:"🇹🇰"},{name:"Pitcairn Islands",code:"PN",dial:"64",flag:"🇵🇳"},{name:"Aland Islands",code:"AX",dial:"358",flag:"🇦🇽"},{name:"Svalbard and Jan Mayen",code:"SJ",dial:"47",flag:"🇸🇯"},{name:"Bouvet Island",code:"BV",dial:"47",flag:"🇧🇻"},{name:"Heard Island and McDonald Islands",code:"HM",dial:"672",flag:"🇭🇲"},{name:"South Georgia and the South Sandwich Islands",code:"GS",dial:"500",flag:"🇬🇸"},{name:"British Indian Ocean Territory",code:"IO",dial:"246",flag:"🇮🇴"},{name:"United States Minor Outlying Islands",code:"UM",dial:"1",flag:"🇺🇲"},{name:"Antarctica",code:"AQ",dial:"672",flag:"🇦🇶"}];function C(e){return v.find(a=>a.code===e)||null}function ke(e){if(!e)return v;const a=e.toLowerCase();return v.filter(n=>n.name.toLowerCase().includes(a)||n.code.toLowerCase().includes(a)||("+"+n.dial).includes(a))}const D={USD:{symbol:"$",locale:"en-US"},GBP:{symbol:"£",locale:"en-GB"},EUR:{symbol:"€",locale:"de-DE"},CAD:{symbol:"C$",locale:"en-CA"},AUD:{symbol:"A$",locale:"en-AU"},SGD:{symbol:"S$",locale:"en-SG"},JPY:{symbol:"¥",locale:"ja-JP"},MXN:{symbol:"Mex$",locale:"es-MX"},IDR:{symbol:"Rp",locale:"id-ID"},CHF:{symbol:"CHF",locale:"de-CH"},CNY:{symbol:"¥",locale:"zh-CN"},INR:{symbol:"₹",locale:"hi-IN"},BRL:{symbol:"R$",locale:"pt-BR"},ZAR:{symbol:"R",locale:"en-ZA"},NGN:{symbol:"₦",locale:"en-NG"},AED:{symbol:"د.إ",locale:"ar-AE"},SAR:{symbol:"﷼",locale:"ar-SA"},RUB:{symbol:"₽",locale:"ru-RU"},TRY:{symbol:"₺",locale:"tr-TR"},KRW:{symbol:"₩",locale:"ko-KR"},THB:{symbol:"฿",locale:"th-TH"},PLN:{symbol:"zł",locale:"pl-PL"},SEK:{symbol:"kr",locale:"sv-SE"},NOK:{symbol:"kr",locale:"nb-NO"},DKK:{symbol:"kr",locale:"da-DK"},NZD:{symbol:"NZ$",locale:"en-NZ"},HKD:{symbol:"HK$",locale:"zh-HK"},TWD:{symbol:"NT$",locale:"zh-TW"},MYR:{symbol:"RM",locale:"ms-MY"},PHP:{symbol:"₱",locale:"en-PH"},VND:{symbol:"₫",locale:"vi-VN"},EGP:{symbol:"E£",locale:"ar-EG"},KES:{symbol:"KSh",locale:"sw-KE"},GHS:{symbol:"GH₵",locale:"en-GH"},ARS:{symbol:"$",locale:"es-AR"},CLP:{symbol:"$",locale:"es-CL"},COP:{symbol:"Col$",locale:"es-CO"},PEN:{symbol:"S/",locale:"es-PE"},UAH:{symbol:"₴",locale:"uk-UA"},ILS:{symbol:"₪",locale:"he-IL"},PKR:{symbol:"₨",locale:"ur-PK"},BDT:{symbol:"৳",locale:"bn-BD"},CZK:{symbol:"Kč",locale:"cs-CZ"},HUF:{symbol:"Ft",locale:"hu-HU"},RON:{symbol:"lei",locale:"ro-RO"},BGN:{symbol:"лв",locale:"bg-BG"},HRK:{symbol:"kn",locale:"hr-HR"},ISK:{symbol:"kr",locale:"is-IS"},JOD:{symbol:"JD",locale:"ar-JO"},QAR:{symbol:"﷼",locale:"ar-QA"},KWD:{symbol:"د.ك",locale:"ar-KW"},BHD:{symbol:"BD",locale:"ar-BH"},OMR:{symbol:"﷼",locale:"ar-OM"},MAD:{symbol:"د.م.",locale:"ar-MA"},DZD:{symbol:"د.ج",locale:"ar-DZ"},TND:{symbol:"د.ت",locale:"ar-TN"},LBP:{symbol:"ل.ل",locale:"ar-LB"},IQD:{symbol:"ع.د",locale:"ar-IQ"},LKR:{symbol:"Rs",locale:"si-LK"},NRS:{symbol:"रू",locale:"ne-NP"},UGX:{symbol:"USh",locale:"sw-UG"},TZS:{symbol:"TSh",locale:"sw-TZ"},ETB:{symbol:"Br",locale:"am-ET"},XOF:{symbol:"CFA",locale:"fr-SN"},XAF:{symbol:"FCFA",locale:"fr-CM"},GEL:{symbol:"₾",locale:"ka-GE"},AZN:{symbol:"₼",locale:"az-AZ"},AMD:{symbol:"֏",locale:"hy-AM"},BYN:{symbol:"Br",locale:"be-BY"},UZS:{symbol:"soʻm",locale:"uz-UZ"},KZT:{symbol:"₸",locale:"kk-KZ"},RSD:{symbol:"дин",locale:"sr-RS"},MKD:{symbol:"ден",locale:"mk-MK"},ALL:{symbol:"L",locale:"sq-AL"},BAM:{symbol:"KM",locale:"bs-BA"},VEF:{symbol:"Bs",locale:"es-VE"},BOB:{symbol:"Bs",locale:"es-BO"},PYG:{symbol:"₲",locale:"es-PY"},UYU:{symbol:"$U",locale:"es-UY"},DOP:{symbol:"RD$",locale:"es-DO"},GTQ:{symbol:"Q",locale:"es-GT"},HNL:{symbol:"L",locale:"es-HN"},NIO:{symbol:"C$",locale:"es-NI"},CRC:{symbol:"₡",locale:"es-CR"},PAB:{symbol:"B/.",locale:"es-PA"},GTQ2:{symbol:"Q",locale:"es-GT"}},V=[...new Set([...Y,...Object.keys(D)])],x=[{code:"en",name:"English",native:"English"},{code:"es",name:"Spanish",native:"Español"},{code:"fr",name:"French",native:"Français"},{code:"de",name:"German",native:"Deutsch"},{code:"it",name:"Italian",native:"Italiano"},{code:"pt",name:"Portuguese",native:"Português"},{code:"nl",name:"Dutch",native:"Nederlands"},{code:"ru",name:"Russian",native:"Русский"},{code:"ar",name:"Arabic",native:"العربية"},{code:"zh",name:"Chinese",native:"中文"},{code:"ja",name:"Japanese",native:"日本語"},{code:"ko",name:"Korean",native:"한국어"},{code:"hi",name:"Hindi",native:"हिन्दी"},{code:"bn",name:"Bengali",native:"বাংলা"},{code:"ur",name:"Urdu",native:"اردو"},{code:"fa",name:"Persian",native:"فارسی"},{code:"tr",name:"Turkish",native:"Türkçe"},{code:"id",name:"Indonesian",native:"Bahasa Indonesia"},{code:"ms",name:"Malay",native:"Bahasa Melayu"},{code:"th",name:"Thai",native:"ไทย"},{code:"vi",name:"Vietnamese",native:"Tiếng Việt"},{code:"pl",name:"Polish",native:"Polski"},{code:"uk",name:"Ukrainian",native:"Українська"},{code:"cs",name:"Czech",native:"Čeština"},{code:"sk",name:"Slovak",native:"Slovenčina"},{code:"hu",name:"Hungarian",native:"Magyar"},{code:"ro",name:"Romanian",native:"Română"},{code:"bg",name:"Bulgarian",native:"Български"},{code:"hr",name:"Croatian",native:"Hrvatski"},{code:"sr",name:"Serbian",native:"Српски"},{code:"sl",name:"Slovenian",native:"Slovenščina"},{code:"sv",name:"Swedish",native:"Svenska"},{code:"da",name:"Danish",native:"Dansk"},{code:"fi",name:"Finnish",native:"Suomi"},{code:"no",name:"Norwegian",native:"Norsk"},{code:"is",name:"Icelandic",native:"Íslenska"},{code:"el",name:"Greek",native:"Ελληνικά"},{code:"he",name:"Hebrew",native:"עברית"},{code:"sw",name:"Swahili",native:"Kiswahili"},{code:"am",name:"Amharic",native:"አማርኛ"},{code:"ha",name:"Hausa",native:"Hausa"},{code:"yo",name:"Yoruba",native:"Yorùbá"},{code:"ig",name:"Igbo",native:"Igbo"},{code:"zu",name:"Zulu",native:"isiZulu"},{code:"xh",name:"Xhosa",native:"isiXhosa"},{code:"af",name:"Afrikaans",native:"Afrikaans"},{code:"ta",name:"Tamil",native:"தமிழ்"},{code:"te",name:"Telugu",native:"తెలుగు"},{code:"mr",name:"Marathi",native:"मराठी"},{code:"gu",name:"Gujarati",native:"ગુજરાતી"},{code:"kn",name:"Kannada",native:"ಕನ್ನಡ"},{code:"ml",name:"Malayalam",native:"മലയാളം"},{code:"pa",name:"Punjabi",native:"ਪੰਜਾਬੀ"},{code:"ne",name:"Nepali",native:"नेपाली"},{code:"si",name:"Sinhala",native:"සිංහල"},{code:"my",name:"Burmese",native:"ဗမာ"},{code:"km",name:"Khmer",native:"ខ្មែរ"},{code:"lo",name:"Lao",native:"ລາວ"},{code:"ka",name:"Georgian",native:"ქართული"},{code:"hy",name:"Armenian",native:"Հայերեն"},{code:"az",name:"Azerbaijani",native:"Azərbaycan"},{code:"kk",name:"Kazakh",native:"Қазақ"},{code:"uz",name:"Uzbek",native:"Oʻzbek"},{code:"ky",name:"Kyrgyz",native:"Кыргызча"},{code:"tg",name:"Tajik",native:"Тоҷикӣ"},{code:"tk",name:"Turkmen",native:"Türkmen"},{code:"mn",name:"Mongolian",native:"Монгол"},{code:"et",name:"Estonian",native:"Eesti"},{code:"lv",name:"Latvian",native:"Latviešu"},{code:"lt",name:"Lithuanian",native:"Lietuvių"},{code:"ga",name:"Irish",native:"Gaeilge"},{code:"cy",name:"Welsh",native:"Cymraeg"},{code:"eu",name:"Basque",native:"Euskara"},{code:"ca",name:"Catalan",native:"Català"},{code:"gl",name:"Galician",native:"Galego"},{code:"mt",name:"Maltese",native:"Malti"},{code:"sq",name:"Albanian",native:"Shqip"},{code:"mk",name:"Macedonian",native:"Македонски"},{code:"bs",name:"Bosnian",native:"Bosanski"},{code:"be",name:"Belarusian",native:"Беларуская"},{code:"fo",name:"Faroese",native:"Føroyskt"},{code:"lb",name:"Luxembourgish",native:"Lëtzebuergesch"},{code:"rm",name:"Romansh",native:"Rumantsch"},{code:"fy",name:"Frisian",native:"Frysk"},{code:"oc",name:"Occitan",native:"Occitan"},{code:"la",name:"Latin",native:"Latina"},{code:"eo",name:"Esperanto",native:"Esperanto"},{code:"jv",name:"Javanese",native:"Basa Jawa"},{code:"su",name:"Sundanese",native:"Basa Sunda"},{code:"tl",name:"Filipino",native:"Filipino"},{code:"ceb",name:"Cebuano",native:"Cebuano"},{code:"mg",name:"Malagasy",native:"Malagasy"},{code:"sm",name:"Samoan",native:"Gagana Samoa"},{code:"to",name:"Tongan",native:"Lea Faka-Tonga"},{code:"mi",name:"Maori",native:"Māori"},{code:"qu",name:"Quechua",native:"Runa Simi"},{code:"gn",name:"Guarani",native:"Avañeẽ"},{code:"ay",name:"Aymara",native:"Aymar aru"},{code:"ht",name:"Haitian Creole",native:"Kreyòl Ayisyen"},{code:"yi",name:"Yiddish",native:"ייִדיש"},{code:"ku",name:"Kurdish",native:"Kurdî"},{code:"ps",name:"Pashto",native:"پښتو"},{code:"sd",name:"Sindhi",native:"سنڌي"},{code:"dv",name:"Dhivehi",native:"ދިވެހި"},{code:"wo",name:"Wolof",native:"Wolof"},{code:"st",name:"Sesotho",native:"Sesotho"},{code:"tn",name:"Setswana",native:"Setswana"},{code:"rw",name:"Kinyarwanda",native:"Kinyarwanda"},{code:"rn",name:"Kirundi",native:"Ikirundi"},{code:"ln",name:"Lingala",native:"Lingala"},{code:"sg",name:"Sango",native:"Sängö"},{code:"ee",name:"Ewe",native:"Eʋegbe"},{code:"tt",name:"Tatar",native:"Татар"},{code:"ba",name:"Bashkir",native:"Башҡорт"},{code:"ce",name:"Chechen",native:"Нохчийн"},{code:"os",name:"Ossetian",native:"Ирон"}],_={US:"en",GB:"en",AU:"en",NZ:"en",CA:"en",IE:"en",ZA:"en",NG:"en",GH:"en",KE:"sw",TZ:"sw",UG:"sw",ES:"es",MX:"es",AR:"es",CO:"es",CL:"es",PE:"es",VE:"es",BO:"es",PY:"es",UY:"es",CR:"es",PA:"es",GT:"es",HN:"es",SV:"es",NI:"es",CU:"es",DO:"es",EC:"es",GQ:"es",FR:"fr",BE:"fr",LU:"fr",MC:"fr",HT:"fr",SN:"fr",CI:"fr",ML:"fr",BF:"fr",NE:"fr",TG:"fr",BJ:"fr",GA:"fr",CG:"fr",CD:"fr",MG:"fr",CM:"fr",DE:"de",AT:"de",CH:"de",LI:"de",IT:"it",SM:"it",VA:"it",PT:"pt",BR:"pt",AO:"pt",MZ:"pt",CV:"pt",GW:"pt",TL:"pt",NL:"nl",BE2:"nl",RU:"ru",BY:"ru",KZ:"ru",KG:"ru",AR2:"ar",SA:"ar",AE:"ar",EG:"ar",DZ:"ar",MA:"ar",TN:"ar",LY:"ar",SY:"ar",JO:"ar",LB:"ar",IQ:"ar",KW:"ar",QA:"ar",BH:"ar",OM:"ar",YE:"ar",SD:"ar",MR:"ar",DJ:"ar",SO:"ar",KM:"ar",CN:"zh",TW:"zh",HK:"zh",SG2:"zh",JP:"ja",KR:"ko",KP:"ko",IN:"hi",PK:"ur",BD:"bn",LK:"si",NP:"ne",IR:"fa",AF:"fa",TR:"tr",AZ:"az",UZ:"uz",TM:"tk",KZ2:"kk",KG2:"ky",ID:"id",MY:"ms",BN:"ms",TH:"th",VN:"vi",KH:"km",LA:"lo",MM:"my",PL:"pl",CZ:"cs",SK:"sk",HU:"hu",RO:"ro",BG:"bg",HR:"hr",SR:"sr",SI:"sl",MK:"mk",BA:"bs",SE:"sv",DK:"da",FI:"fi",NO:"no",IS:"is",UA:"uk",EL:"el",GR:"el",CY:"el",IL:"he",ET:"am",GE:"ka",AM:"hy"},A={US:"America/New_York",GB:"Europe/London",IE:"Europe/Dublin",FR:"Europe/Paris",DE:"Europe/Berlin",IT:"Europe/Rome",ES:"Europe/Madrid",PT:"Europe/Lisbon",NL:"Europe/Amsterdam",BE:"Europe/Brussels",LU:"Europe/Luxembourg",CH:"Europe/Zurich",AT:"Europe/Vienna",SE:"Europe/Stockholm",NO:"Europe/Oslo",DK:"Europe/Copenhagen",FI:"Europe/Helsinki",IS:"Atlantic/Reykjavik",PL:"Europe/Warsaw",CZ:"Europe/Prague",SK:"Europe/Bratislava",HU:"Europe/Budapest",RO:"Europe/Bucharest",BG:"Europe/Sofia",HR:"Europe/Zagreb",SI:"Europe/Ljubljana",SR:"Europe/Belgrade",GR:"Europe/Athens",CY:"Europe/Nicosia",MT:"Europe/Malta",RU:"Europe/Moscow",UA:"Europe/Kyiv",BY:"Europe/Minsk",MD:"Europe/Chisinau",LT:"Europe/Vilnius",LV:"Europe/Riga",EE:"Europe/Tallinn",CA:"America/Toronto",US2:"America/Chicago",US3:"America/Denver",US4:"America/Los_Angeles",US5:"America/Anchorage",US6:"Pacific/Honolulu",MX:"America/Mexico_City",BR:"America/Sao_Paulo",AR:"America/Argentina/Buenos_Aires",CL:"America/Santiago",CO:"America/Bogota",PE:"America/Lima",VE:"America/Caracas",BO:"America/La_Paz",PY:"America/Asuncion",UY:"America/Montevideo",EC:"America/Guayaquil",GY:"America/Guyana",SR:"America/Paramaribo",CR:"America/Costa_Rica",PA:"America/Panama",GT:"America/Guatemala",HN:"America/Tegucigalpa",SV:"America/El_Salvador",NI:"America/Managua",BZ:"America/Belize",CU:"America/Havana",DO:"America/Santo_Domingo",HT:"America/Port-au-Prince",JM:"America/Jamaica",BS:"America/Nassau",BB:"America/Barbados",TT:"America/Port_of_Spain",PR:"America/Puerto_Rico",AU:"Australia/Sydney",NZ:"Pacific/Auckland",FJ:"Pacific/Fiji",PG:"Pacific/Port_Moresby",SB:"Pacific/Guadalcanal",VU:"Pacific/Efate",WS:"Pacific/Apia",TO:"Pacific/Tongatapu",KI:"Pacific/Tarawa",CN:"Asia/Shanghai",HK:"Asia/Hong_Kong",TW:"Asia/Taipei",JP:"Asia/Tokyo",KR:"Asia/Seoul",KP:"Asia/Pyongyang",IN:"Asia/Kolkata",PK:"Asia/Karachi",BD:"Asia/Dhaka",LK:"Asia/Colombo",NP:"Asia/Kathmandu",BT:"Asia/Thimphu",MV:"Indian/Maldives",TH:"Asia/Bangkok",VN:"Asia/Ho_Chi_Minh",MY:"Asia/Kuala_Lumpur",SG:"Asia/Singapore",PH:"Asia/Manila",KH:"Asia/Phnom_Penh",LA:"Asia/Vientiane",MM:"Asia/Yangon",BN:"Asia/Brunei",ID:"Asia/Jakarta",TL:"Asia/Dili",MN:"Asia/Ulaanbaatar",KZ:"Asia/Almaty",UZ:"Asia/Tashkent",TM:"Asia/Ashgabat",KG:"Asia/Bishkek",TJ:"Asia/Dushanbe",AF:"Asia/Kabul",IR:"Asia/Tehran",IQ:"Asia/Baghdad",SY:"Asia/Damascus",JO:"Asia/Amman",LB:"Asia/Beirut",IL:"Asia/Jerusalem",PS:"Asia/Gaza",SA:"Asia/Riyadh",AE:"Asia/Dubai",QA:"Asia/Qatar",KW:"Asia/Kuwait",BH:"Asia/Bahrain",OM:"Asia/Muscat",YE:"Asia/Aden",TR:"Europe/Istanbul",GE:"Asia/Tbilisi",AM:"Asia/Yerevan",AZ:"Asia/Baku",EG:"Africa/Cairo",LY:"Africa/Tripoli",TN:"Africa/Tunis",DZ:"Africa/Algiers",MA:"Africa/Casablanca",EH:"Africa/El_Aaiun",MR:"Africa/Nouakchott",ML:"Africa/Bamako",NE:"Africa/Niamey",TD:"Africa/Ndjamena",SD:"Africa/Khartoum",SS:"Africa/Juba",ER:"Africa/Asmara",DJ:"Africa/Djibouti",ET:"Africa/Addis_Ababa",SO:"Africa/Mogadishu",KE:"Africa/Nairobi",UG:"Africa/Kampala",TZ:"Africa/Dar_es_Salaam",RW:"Africa/Kigali",BI:"Africa/Bujumbura",CD:"Africa/Kinshasa",CG:"Africa/Brazzaville",CF:"Africa/Bangui",CM:"Africa/Douala",GA:"Africa/Libreville",GQ:"Africa/Malabo",ST:"Africa/Sao_Tome",AO:"Africa/Luanda",ZM:"Africa/Lusaka",ZW:"Africa/Harare",MW:"Africa/Lilongwe",MZ:"Africa/Maputo",BW:"Africa/Gaborone",NA:"Africa/Windhoek",ZA:"Africa/Johannesburg",LS:"Africa/Maseru",SZ:"Africa/Mbabane",MG:"Indian/Antananarivo",MU:"Indian/Mauritius",SC:"Indian/Mahe",KM:"Indian/Comoro",RE:"Indian/Reunion",YT:"Indian/Mayotte",GH:"Africa/Accra",NG:"Africa/Lagos",BJ:"Africa/Porto-Novo",TG:"Africa/Lome",CI:"Africa/Abidjan",BF:"Africa/Ouagadougou",SL:"Africa/Freetown",LR:"Africa/Monrovia",GN:"Africa/Conakry",GW:"Africa/Bissau",SN:"Africa/Dakar",GM:"Africa/Banjul",CV:"Atlantic/Cape_Verde"};let l={country:"US",countryName:"United States",flag:"🇺🇸",language:"en",currency:"USD",timezone:"America/New_York",city:null,region:null,isVPN:!1,detectionSource:"default"},h=[];const z="kco_locale";function m(){try{localStorage.setItem(z,JSON.stringify(l))}catch{}}function j(){try{const e=localStorage.getItem(z);if(e){const a=JSON.parse(e);return l={...l,...a},!0}}catch{}return!1}function J(){const e=(navigator.language||navigator.userLanguage||"en").slice(0,2).toLowerCase();return x.find(n=>n.code===e)?e:"en"}function s(){try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone;if(e)return e}catch{}return null}function L(e){return A[e]||A[e+"2"]||"UTC"}function W(e){return _[e]||"en"}function H(e){return K[e]||"USD"}async function $(){const e=["https://ipapi.co/json/","https://ipwho.is/","https://get.geojs.io/v1/ip/geo.json"];for(const n of e)try{const t=new AbortController,i=setTimeout(()=>t.abort(),5e3),c=await fetch(n,{signal:t.signal});if(clearTimeout(i),!c.ok)continue;const o=await c.json();let d,g,f,b,y,p;if(n.includes("ipapi.co")?(d=o.country_code,g=o.country_name,f=o.city,b=o.region,y=o.timezone,p=!1):n.includes("ipwho.is")?(d=o.country_code,g=o.country,f=o.city,b=o.region,y=o.timezone?.id,p=o.security?.vpn||o.security?.proxy||!1):n.includes("geojs.io")&&(d=o.country_code,g=o.country,f=o.city,b=o.region,y=o.timezone,p=!1),d&&d.length===2){const N=C(d);return{country:d,countryName:N?.name||g||d,flag:N?.flag||"🏳️",city:f||null,region:b||null,timezone:y||s()||L(d),isVPN:!!p,detectionSource:"geo"}}}catch{continue}const a=s();if(a){const n=Object.entries(A).find(([,t])=>t===a);if(n){const t=n[0].replace(/\d+$/,""),i=C(t);if(i)return{country:t,countryName:i.name,flag:i.flag,city:null,region:null,timezone:a,isVPN:!1,detectionSource:"timezone"}}}return{country:"US",countryName:"United States",flag:"🇺🇸",city:null,region:null,timezone:s()||"America/New_York",isVPN:!1,detectionSource:"default"}}async function Q(){const e=j();if(!e){const a=await $(),n=J(),t=s();l={...l,...a,language:n,timezone:t||a.timezone||L(a.country),currency:H(a.country)},m()}if(!e||!l.timezoneManuallySet){const a=s();a&&(l.timezone=a)}return u(),l}function k(){return{...l}}function Se(){return l.language}function X(e){const a=C(e);a&&(l.country=e,l.countryName=a.name,l.flag=a.flag,l.currency=H(e),l.languageManuallySet||(l.language=W(e)),l.timezoneManuallySet||(l.timezone=L(e)),m(),u())}function q(e){l.language=e,l.languageManuallySet=!0,m(),u(),window.dispatchEvent(new CustomEvent("kco-language-changed",{detail:{language:e}}))}function ee(e){l.currency=e,l.currencyManuallySet=!0,m(),u(),window.dispatchEvent(new CustomEvent("kco-currency-changed",{detail:{currency:e}}))}function ae(e){l.timezone=e,l.timezoneManuallySet=!0,m(),u()}function oe(e){return h.push(e),()=>{h=h.filter(a=>a!==e)}}function u(){h.forEach(e=>{try{e(l)}catch{}}),window.dispatchEvent(new CustomEvent("kco-locale-changed",{detail:l}))}function ne(){try{return Intl.supportedValuesOf("timeZone").sort()}catch{return Object.values(A).filter((a,n,t)=>t.indexOf(a)===n).sort()}}function ie(e){return D[e]||{symbol:e,locale:"en-US"}}const le={default:{lang:"en-US",gender:"female",accent:"US English",rate:1,pitch:1.05}};function te(e){const a=x.find(i=>i.code===e);return a?{lang:{en:"en-US",es:"es-ES",fr:"fr-FR",de:"de-DE",it:"it-IT",pt:"pt-PT",nl:"nl-NL",ru:"ru-RU",ar:"ar-SA",zh:"zh-CN",ja:"ja-JP",ko:"ko-KR",hi:"hi-IN",bn:"bn-IN",ur:"ur-PK",fa:"fa-IR",tr:"tr-TR",id:"id-ID",ms:"ms-MY",th:"th-TH",vi:"vi-VN",pl:"pl-PL",uk:"uk-UA",cs:"cs-CZ",sk:"sk-SK",hu:"hu-HU",ro:"ro-RO",bg:"bg-BG",hr:"hr-HR",sr:"sr-RS",sv:"sv-SE",da:"da-DK",fi:"fi-FI",no:"nb-NO",el:"el-GR",he:"he-IL",sw:"sw-KE",am:"am-ET",ta:"ta-IN",te:"te-IN",mr:"mr-IN",gu:"gu-IN",kn:"kn-IN",ml:"ml-IN",pa:"pa-IN",ne:"ne-NP",si:"si-LK",my:"my-MM",km:"km-KH",lo:"lo-LA",ka:"ka-GE",hy:"hy-AM",az:"az-AZ",kk:"kk-KZ",uz:"uz-UZ"}[e]||"en-US",gender:"female",accent:a.native,rate:1,pitch:1.05}:le.default}function Ee(e){if(!("speechSynthesis"in window))return null;const a=window.speechSynthesis.getVoices();if(!a.length)return null;const t=te(e).lang.toLowerCase();let i=a.find(c=>c.lang.toLowerCase()===t);if(!i){const c=t.split("-")[0];i=a.find(o=>o.lang.toLowerCase().startsWith(c))}if(i){const c=a.find(o=>o.lang.toLowerCase()===i.lang.toLowerCase()&&(o.name.toLowerCase().includes("female")||o.name.toLowerCase().includes("woman")||o.name.toLowerCase().includes("samantha")||o.name.toLowerCase().includes("google")||o.name.toLowerCase().includes("zira")||o.name.toLowerCase().includes("karen")||o.name.toLowerCase().includes("moira")||o.name.toLowerCase().includes("tessa")||o.name.toLowerCase().includes("fiona")));c&&(i=c)}return i||a[0]}let w=!1;function ce(){if(document.getElementById("kco-loc-styles"))return;const e=document.createElement("style");e.id="kco-loc-styles",e.textContent=`
    @keyframes kcoLocPulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
    @keyframes kcoLocSlideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
    @keyframes kcoLocFadeIn { from { opacity:0; } to { opacity:1; } }
    .kco-loc-fab { animation: kcoLocFadeIn 0.4s ease; }
    .kco-loc-modal { animation: kcoLocSlideUp 0.3s ease; }
    .kco-loc-overlay { animation: kcoLocFadeIn 0.2s ease; }
    .kco-loc-dot { animation: kcoLocPulse 2s ease-in-out infinite; }
    .kco-loc-search:focus { border-color: rgba(59,130,246,0.5); box-shadow: 0 0 0 2px rgba(59,130,246,0.15); }
    .kco-loc-list::-webkit-scrollbar { width: 6px; }
    .kco-loc-list::-webkit-scrollbar-track { background: transparent; }
    .kco-loc-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }
    .kco-loc-list::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.25); }
    .kco-loc-item:hover { background: rgba(59,130,246,0.1); }
    .kco-loc-tab { transition: all 0.2s ease; }
    .kco-loc-tab.active { background: rgba(59,130,246,0.15); border-color: rgba(59,130,246,0.4); color: #60a5fa; }
  `,document.head.appendChild(e)}function de(){if(document.getElementById("kco-loc-fab"))return;const e=document.createElement("button");e.id="kco-loc-fab",e.className="kco-loc-fab fixed bottom-5 left-5 z-[55] flex items-center gap-2 px-3 py-2.5 rounded-xl text-white text-xs font-semibold shadow-lg transition-all hover:scale-105",e.style.background="#1e293b",e.style.border="1px solid rgba(255,255,255,0.12)",e.setAttribute("aria-label","Change location, language, or currency"),e.innerHTML='<span id="kco-loc-flag" class="text-base leading-none">🇺🇸</span><span id="kco-loc-lang" class="text-[11px] uppercase tracking-wide text-gray-300">EN</span><i data-lucide="chevron-up" class="w-3.5 h-3.5 text-gray-500"></i>',e.onclick=ge,document.body.appendChild(e),window.lucide&&lucide.createIcons()}function R(){const e=k(),a=document.getElementById("kco-loc-flag"),n=document.getElementById("kco-loc-lang");a&&(a.textContent=e.flag),n&&(n.textContent=e.language.toUpperCase())}function re(){if(document.getElementById("kco-loc-modal"))return;const e=document.createElement("div");e.id="kco-loc-modal",e.className="kco-loc-overlay fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4",e.style.display="none",e.innerHTML=`
    <div class="kco-loc-modal w-full sm:max-w-md bg-slate-900 border border-blue-500/20 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-3 border-b border-white/10" style="background:linear-gradient(135deg,#1e1e2e 0%,#1a1a2e 50%,#16213e 100%)">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:rgba(59,130,246,0.15)">
            <i data-lucide="globe" class="w-4 h-4 text-blue-400"></i>
          </div>
          <h3 class="text-sm font-bold text-white">Your Location</h3>
        </div>
        <button id="kco-loc-close" class="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition" aria-label="Close">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <!-- VPN notice -->
      <div id="kco-loc-vpn" class="px-4 py-2.5 bg-amber-500/10 border-b border-amber-500/20 hidden">
        <div class="flex items-start gap-2">
          <i data-lucide="shield-alert" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
          <p class="text-[11px] text-amber-200 leading-relaxed">We detected you may be using a VPN or proxy. Your detected location may differ from your actual location. Please confirm or manually select your preferred country, language, timezone, and currency.</p>
        </div>
      </div>

      <!-- Detected location info -->
      <div id="kco-loc-detected" class="px-4 py-3 border-b border-white/10">
        <div class="flex items-center gap-2 text-xs text-gray-400">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-blue-400"></i>
          <span id="kco-loc-detected-text">Detecting your location…</span>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-1.5 px-4 py-3 border-b border-white/10">
        <button class="kco-loc-tab active flex-1 text-[11px] font-semibold py-2 px-2 rounded-lg border border-blue-500/20 text-gray-300 flex items-center justify-center gap-1.5" data-tab="country"><i data-lucide="flag" class="w-3.5 h-3.5"></i>Country</button>
        <button class="kco-loc-tab flex-1 text-[11px] font-semibold py-2 px-2 rounded-lg border border-white/10 text-gray-300 flex items-center justify-center gap-1.5" data-tab="language"><i data-lucide="languages" class="w-3.5 h-3.5"></i>Language</button>
        <button class="kco-loc-tab flex-1 text-[11px] font-semibold py-2 px-2 rounded-lg border border-white/10 text-gray-300 flex items-center justify-center gap-1.5" data-tab="currency"><i data-lucide="dollar-sign" class="w-3.5 h-3.5"></i>Currency</button>
        <button class="kco-loc-tab flex-1 text-[11px] font-semibold py-2 px-2 rounded-lg border border-white/10 text-gray-300 flex items-center justify-center gap-1.5" data-tab="timezone"><i data-lucide="clock" class="w-3.5 h-3.5"></i>Timezone</button>
      </div>

      <!-- Search -->
      <div class="px-4 py-2.5 border-b border-white/10">
        <div class="relative">
          <i data-lucide="search" class="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"></i>
          <input id="kco-loc-search" type="text" placeholder="Search…" class="kco-loc-search w-full bg-slate-800/80 text-sm text-gray-200 placeholder-gray-500 rounded-lg pl-9 pr-3 py-2 border border-white/10 focus:outline-none transition">
        </div>
      </div>

      <!-- List -->
      <div id="kco-loc-list" class="kco-loc-list flex-1 overflow-y-auto px-2 py-2">
      </div>

      <!-- Live clock footer -->
      <div class="px-4 py-2.5 border-t border-white/10 bg-slate-900/80">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="kco-loc-dot w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
            <span id="kco-loc-clock" class="text-[11px] text-gray-400 font-mono"></span>
          </div>
          <span id="kco-loc-tz" class="text-[10px] text-gray-600"></span>
        </div>
      </div>
    </div>
  `,document.body.appendChild(e),window.lucide&&lucide.createIcons(),document.getElementById("kco-loc-close").onclick=G,e.addEventListener("click",n=>{n.target===e&&G()}),document.querySelectorAll(".kco-loc-tab").forEach(n=>{n.onclick=()=>O(n.dataset.tab)});const a=document.getElementById("kco-loc-search");a.addEventListener("input",()=>S(M,a.value))}let M="country";function O(e){M=e,document.querySelectorAll(".kco-loc-tab").forEach(n=>{n.classList.toggle("active",n.dataset.tab===e)});const a=document.getElementById("kco-loc-search");a&&(a.value=""),S(e,""),window.lucide&&lucide.createIcons()}function S(e,a){const n=document.getElementById("kco-loc-list");if(!n)return;const t=k(),i=a.toLowerCase().trim();n.innerHTML="";let c=[];e==="country"?(c=v.map(o=>({id:o.code,label:`${o.flag} ${o.name}`,sub:o.code,active:o.code===t.country})),i&&(c=c.filter(o=>o.label.toLowerCase().includes(i)||o.sub.toLowerCase().includes(i)))):e==="language"?(c=x.map(o=>({id:o.code,label:o.native,sub:o.name,active:o.code===t.language})),i&&(c=c.filter(o=>o.label.toLowerCase().includes(i)||o.sub.toLowerCase().includes(i)))):e==="currency"?(c=V.map(o=>{const d=ie(o);return{id:o,label:`${d.symbol||o} ${o}`,sub:d.locale||"",active:o===t.currency}}),i&&(c=c.filter(o=>o.id.toLowerCase().includes(i)||o.label.toLowerCase().includes(i)))):e==="timezone"&&(c=ne().map(d=>({id:d,label:d.replace(/_/g," "),sub:"",active:d===t.timezone})),i&&(c=c.filter(d=>d.label.toLowerCase().includes(i)))),c.forEach(o=>{const d=document.createElement("button");d.className=`kco-loc-item w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition ${o.active?"bg-blue-500/15 border border-blue-500/30":"border border-transparent"}`,d.innerHTML=`
      <div class="min-w-0">
        <p class="text-sm text-gray-200 truncate">${o.label}</p>
        ${o.sub?`<p class="text-[10px] text-gray-500 truncate">${o.sub}</p>`:""}
      </div>
      ${o.active?'<i data-lucide="check" class="w-4 h-4 text-blue-400 shrink-0"></i>':""}
    `,d.onclick=()=>se(e,o.id),n.appendChild(d)}),c.length||(n.innerHTML='<p class="text-center text-xs text-gray-500 py-8">No results found</p>'),window.lucide&&lucide.createIcons()}function se(e,a){e==="country"?X(a):e==="language"?q(a):e==="currency"?ee(a):e==="timezone"&&ae(a),S(e,document.getElementById("kco-loc-search")?.value||""),B()}function B(){const e=k(),a=document.getElementById("kco-loc-detected-text"),n=document.getElementById("kco-loc-vpn"),t=document.getElementById("kco-loc-tz");if(a){let i=[`${e.flag} ${e.countryName}`];e.city&&i.push(e.city),e.region&&i.push(e.region),a.textContent=i.join(" · ")}n&&n.classList.toggle("hidden",!e.isVPN),t&&(t.textContent=e.timezone?.replace(/_/g," ")||"")}let r=null;function me(){const e=document.getElementById("kco-loc-clock");if(!e)return;function a(){const n=k();try{e.textContent=new Intl.DateTimeFormat(n.language,{timeZone:n.timezone,weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).format(new Date)}catch{e.textContent=new Date().toLocaleString()}}a(),r&&clearInterval(r),r=setInterval(a,1e3)}function ue(){r&&(clearInterval(r),r=null)}function ge(){re();const e=document.getElementById("kco-loc-modal");e.style.display="flex",w=!0,O("country"),B(),me(),setTimeout(()=>document.getElementById("kco-loc-search")?.focus(),200)}function G(){const e=document.getElementById("kco-loc-modal");e&&(e.style.display="none"),w=!1,ue()}function fe(){ce(),de(),R(),oe(()=>{R(),w&&(B(),S(M,document.getElementById("kco-loc-search")?.value||""))})}async function P(){try{await Q(),fe()}catch(e){console.warn("Localization init failed:",e)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",P):P();const I="kco_live_stream_mode";let E=!1;const be=`
/* ── Live Stream Mode: enlarged, broadcast-friendly ── */
body.kco-live-mode .showroom-card {
  border-width: 2px !important;
  border-radius: 16px !important;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5), 0 0 24px rgba(249,115,22,0.08) !important;
}
body.kco-live-mode .showroom-card:hover {
  border-color: rgba(249,115,22,0.6) !important;
  box-shadow: 0 12px 40px rgba(0,0,0,0.6), 0 0 32px rgba(249,115,22,0.15) !important;
}
body.kco-live-mode .showroom-card img {
  transition: transform 0.4s ease !important;
}
body.kco-live-mode .showroom-card:hover img {
  transform: scale(1.08) !important;
}
/* Larger card titles */
body.kco-live-mode .showroom-card h3 {
  font-size: 15px !important;
  line-height: 1.3 !important;
  margin-bottom: 6px !important;
}
/* Larger prices — most important for live viewers */
body.kco-live-mode .showroom-card .text-orange-500,
body.kco-live-mode .showroom-card [class*="text-orange"] {
  font-size: 20px !important;
  font-weight: 900 !important;
  text-shadow: 0 2px 8px rgba(249,115,22,0.3) !important;
}
/* Larger spec text */
body.kco-live-mode .showroom-card .text-gray-500,
body.kco-live-mode .showroom-card .text-gray-400 {
  font-size: 13px !important;
}
/* Larger status badges */
body.kco-live-mode .showroom-card .absolute.top-1.5 {
  font-size: 11px !important;
  padding: 3px 8px !important;
  border-radius: 8px !important;
}
/* Larger buttons */
body.kco-live-mode .showroom-card button {
  font-size: 13px !important;
  padding: 10px 12px !important;
  border-radius: 10px !important;
  font-weight: 800 !important;
}
body.kco-live-mode .showroom-card button i {
  width: 16px !important;
  height: 16px !important;
}
/* Larger rating stars */
body.kco-live-mode .showroom-card [class*="star"] {
  width: 16px !important;
  height: 16px !important;
}
body.kco-live-mode .showroom-card [class*="text-gray-300"],
body.kco-live-mode .showroom-card [class*="text-gray-600"] {
  font-size: 13px !important;
}

/* ── Section headers: bigger, bolder ── */
body.kco-live-mode .showroom-section h3 {
  font-size: 22px !important;
  font-weight: 900 !important;
  letter-spacing: -0.02em !important;
}
body.kco-live-mode .showroom-section h4 {
  font-size: 16px !important;
  font-weight: 700 !important;
}
body.kco-live-mode .showroom-section .text-gray-500 {
  font-size: 14px !important;
}

/* ── Search bar: bigger, more visible ── */
body.kco-live-mode #smart-search-container input {
  font-size: 16px !important;
  padding: 14px 12px !important;
}
body.kco-live-mode #smart-search-container button {
  font-size: 14px !important;
  padding: 10px 20px !important;
}

/* ── Category pills: larger touch targets ── */
body.kco-live-mode .category-pill,
body.kco-live-mode [class*="category"] button {
  font-size: 14px !important;
  padding: 10px 16px !important;
  border-radius: 12px !important;
}

/* ── Header brand: more prominent ── */
body.kco-live-mode header span.text-\\[13px\\],
body.kco-live-mode header span.text-\\[15px\\],
body.kco-live-mode header span.text-\\[17px\\] {
  font-size: 20px !important;
}

/* ── Footer: larger text ── */
body.kco-live-mode footer {
  font-size: 14px !important;
}
body.kco-live-mode footer a {
  font-size: 13px !important;
}

/* ── Details page: larger product info ── */
body.kco-live-mode .text-2xl,
body.kco-live-mode .text-3xl {
  font-size: 28px !important;
}
body.kco-live-mode .text-xl {
  font-size: 22px !important;
}

/* ── Smooth scroll for broadcast ── */
body.kco-live-mode {
  scroll-behavior: smooth !important;
}
body.kco-live-mode * {
  -webkit-tap-highlight-color: transparent;
}

/* ── LIVE badge overlay ── */
@keyframes kcoLivePulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
@keyframes kcoLiveRing {
  0% { box-shadow: 0 0 0 0 rgba(239,68,68,0.5); }
  70% { box-shadow: 0 0 0 8px rgba(239,68,68,0); }
  100% { box-shadow: 0 0 0 0 rgba(239,68,68,0); }
}
#kco-live-badge {
  animation: kcoLiveRing 2s infinite;
}
#kco-live-badge .kco-live-dot {
  animation: kcoLivePulse 1.5s ease-in-out infinite;
}

/* ── Live mode toggle button ── */
@keyframes kcoLiveBtnGlow {
  0%, 100% { box-shadow: 0 0 12px rgba(239,68,68,0.3); }
  50% { box-shadow: 0 0 20px rgba(239,68,68,0.5); }
}
#kco-live-toggle {
  animation: kcoLiveBtnGlow 3s ease-in-out infinite;
}
#kco-live-toggle.active {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%) !important;
  animation: kcoLiveBtnGlow 1.5s ease-in-out infinite;
}
`;function ye(){if(document.getElementById("kco-live-styles"))return;const e=document.createElement("style");e.id="kco-live-styles",e.textContent=be,document.head.appendChild(e)}function pe(){if(document.getElementById("kco-live-badge"))return;const e=document.createElement("div");e.id="kco-live-badge",e.className="fixed top-3 right-3 z-[80] hidden items-center gap-2 px-3 py-1.5 rounded-full bg-red-500 text-white text-xs font-black uppercase tracking-wider shadow-lg",e.innerHTML=`
    <span class="kco-live-dot w-2.5 h-2.5 bg-white rounded-full"></span>
    <span>LIVE</span>
  `,document.body.appendChild(e)}function he(){if(document.getElementById("kco-live-toggle"))return;const e=document.createElement("button");e.id="kco-live-toggle",e.className="fixed bottom-5 left-5 z-[55] hidden items-center gap-2 px-3 py-2.5 rounded-xl text-white text-xs font-bold shadow-lg transition-all hover:scale-105",e.style.background="#1e293b",e.style.border="1px solid rgba(239,68,68,0.3)",e.setAttribute("aria-label","Toggle Live Stream Mode"),e.innerHTML=`
    <span class="w-2 h-2 bg-red-500 rounded-full"></span>
    <span>Live Mode</span>
  `,e.onclick=Z,document.body.appendChild(e)}function ve(){const e=window.location.pathname;return!(e.includes("admin")||e.includes("auth")||e.includes("privacy")||e.includes("terms")||e.includes("refund")||e.includes("shipping-policy"))}function T(){E=!0,document.body.classList.add("kco-live-mode"),localStorage.setItem(I,"1");const e=document.getElementById("kco-live-badge");e&&(e.style.display="flex");const a=document.getElementById("kco-live-toggle");a&&(a.classList.add("active"),a.querySelector("span:last-child").textContent="Live ON"),window.dispatchEvent(new CustomEvent("kco-live-mode",{detail:{active:!0}}))}function F(){E=!1,document.body.classList.remove("kco-live-mode"),localStorage.setItem(I,"0");const e=document.getElementById("kco-live-badge");e&&(e.style.display="none");const a=document.getElementById("kco-live-toggle");a&&(a.classList.remove("active"),a.querySelector("span:last-child").textContent="Live Mode"),window.dispatchEvent(new CustomEvent("kco-live-mode",{detail:{active:!1}}))}function Z(){E?F():T()}function U(){if(ye(),pe(),he(),ve()){const e=document.getElementById("kco-live-toggle");e&&(e.style.display="flex")}localStorage.getItem(I)==="1"&&T()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",U):U();window.kcoLiveStream={enable:T,disable:F,toggle:Z,isActive:()=>E};export{v as C,Y as S,Se as a,te as b,Ee as c,Ae as d,C as g,ke as s};
