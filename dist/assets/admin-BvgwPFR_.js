import"./modulepreload-polyfill-B5Qt9EMX.js";import{_ as Ma}from"./preload-helper-CLcXU_4U.js";import{supabase as g}from"./supabase-client-nvpjTmO6.js";import{patchLocalShowroomListing as Nt,getLocalShowroomListingById as Ye,removeLocalShowroomListing as Ze,upsertLocalShowroomListing as Rt,listLocalShowroomListings as wt}from"./local-showroom-store-mzP0nSoS.js";import{s as Fe,S as ie,l as Zt,g as xt,i as Ri,r as Di,P as Ba,a as Na,T as Ra,M as Da,b as Fi}from"./promo-backgrounds-BdKW_fjp.js";import{i as Fa,D as Ui}from"./site-content-IdVPnjT2.js";import{M as Oi,n as ji,a as qi}from"./categories-BEuiwWw5.js";import{l as Hi,v as Gi}from"./video-frames-mPOUp41n.js";/* empty css                                       */import"./supabase-lazy-Cjdrb32H.js";const Vi=["USD","GBP","EUR","CAD","AUD","SGD","JPY","MXN","IDR"],zi={US:"USD",GB:"GBP",AT:"EUR",BE:"EUR",HR:"EUR",CY:"EUR",EE:"EUR",FI:"EUR",FR:"EUR",DE:"EUR",GR:"EUR",IE:"EUR",IT:"EUR",LV:"EUR",LT:"EUR",LU:"EUR",MT:"EUR",NL:"EUR",PT:"EUR",SK:"EUR",SI:"EUR",ES:"EUR",CA:"CAD",AU:"AUD",SG:"SGD",JP:"JPY",MX:"MXN",ID:"IDR"},Pe=[{name:"United States",code:"US",dial:"1",flag:"🇺🇸"},{name:"United Kingdom",code:"GB",dial:"44",flag:"🇬🇧"},{name:"Canada",code:"CA",dial:"1",flag:"🇨🇦"},{name:"Australia",code:"AU",dial:"61",flag:"🇦🇺"},{name:"Singapore",code:"SG",dial:"65",flag:"🇸🇬"},{name:"Japan",code:"JP",dial:"81",flag:"🇯🇵"},{name:"Mexico",code:"MX",dial:"52",flag:"🇲🇽"},{name:"Indonesia",code:"ID",dial:"62",flag:"🇮🇩"},{name:"Germany",code:"DE",dial:"49",flag:"🇩🇪"},{name:"France",code:"FR",dial:"33",flag:"🇫🇷"},{name:"Italy",code:"IT",dial:"39",flag:"🇮🇹"},{name:"Spain",code:"ES",dial:"34",flag:"🇪🇸"},{name:"Netherlands",code:"NL",dial:"31",flag:"🇳🇱"},{name:"Belgium",code:"BE",dial:"32",flag:"🇧🇪"},{name:"Ireland",code:"IE",dial:"353",flag:"🇮🇪"},{name:"Portugal",code:"PT",dial:"351",flag:"🇵🇹"},{name:"Greece",code:"GR",dial:"30",flag:"🇬🇷"},{name:"Austria",code:"AT",dial:"43",flag:"🇦🇹"},{name:"Switzerland",code:"CH",dial:"41",flag:"🇨🇭"},{name:"Sweden",code:"SE",dial:"46",flag:"🇸🇪"},{name:"Norway",code:"NO",dial:"47",flag:"🇳🇴"},{name:"Denmark",code:"DK",dial:"45",flag:"🇩🇰"},{name:"Finland",code:"FI",dial:"358",flag:"🇫🇮"},{name:"Poland",code:"PL",dial:"48",flag:"🇵🇱"},{name:"Czech Republic",code:"CZ",dial:"420",flag:"🇨🇿"},{name:"Slovakia",code:"SK",dial:"421",flag:"🇸🇰"},{name:"Hungary",code:"HU",dial:"36",flag:"🇭🇺"},{name:"Romania",code:"RO",dial:"40",flag:"🇷🇴"},{name:"Bulgaria",code:"BG",dial:"359",flag:"🇧🇬"},{name:"Croatia",code:"HR",dial:"385",flag:"🇭🇷"},{name:"Slovenia",code:"SI",dial:"386",flag:"🇸🇮"},{name:"Slovakia",code:"SK",dial:"421",flag:"🇸🇰"},{name:"Lithuania",code:"LT",dial:"370",flag:"🇱🇹"},{name:"Latvia",code:"LV",dial:"371",flag:"🇱🇻"},{name:"Estonia",code:"EE",dial:"372",flag:"🇪🇪"},{name:"Luxembourg",code:"LU",dial:"352",flag:"🇱🇺"},{name:"Malta",code:"MT",dial:"356",flag:"🇲🇹"},{name:"Cyprus",code:"CY",dial:"357",flag:"🇨🇾"},{name:"Iceland",code:"IS",dial:"354",flag:"🇮🇸"},{name:"Russia",code:"RU",dial:"7",flag:"🇷🇺"},{name:"Ukraine",code:"UA",dial:"380",flag:"🇺🇦"},{name:"Belarus",code:"BY",dial:"375",flag:"🇧🇾"},{name:"Turkey",code:"TR",dial:"90",flag:"🇹🇷"},{name:"China",code:"CN",dial:"86",flag:"🇨🇳"},{name:"Hong Kong",code:"HK",dial:"852",flag:"🇭🇰"},{name:"Taiwan",code:"TW",dial:"886",flag:"🇹🇼"},{name:"South Korea",code:"KR",dial:"82",flag:"🇰🇷"},{name:"North Korea",code:"KP",dial:"850",flag:"🇰🇵"},{name:"India",code:"IN",dial:"91",flag:"🇮🇳"},{name:"Pakistan",code:"PK",dial:"92",flag:"🇵🇰"},{name:"Bangladesh",code:"BD",dial:"880",flag:"🇧🇩"},{name:"Sri Lanka",code:"LK",dial:"94",flag:"🇱🇰"},{name:"Nepal",code:"NP",dial:"977",flag:"🇳🇵"},{name:"Bhutan",code:"BT",dial:"975",flag:"🇧🇹"},{name:"Maldives",code:"MV",dial:"960",flag:"🇲🇻"},{name:"Thailand",code:"TH",dial:"66",flag:"🇹🇭"},{name:"Vietnam",code:"VN",dial:"84",flag:"🇻🇳"},{name:"Malaysia",code:"MY",dial:"60",flag:"🇲🇾"},{name:"Philippines",code:"PH",dial:"63",flag:"🇵🇭"},{name:"Cambodia",code:"KH",dial:"855",flag:"🇰🇭"},{name:"Laos",code:"LA",dial:"856",flag:"🇱🇦"},{name:"Myanmar",code:"MM",dial:"95",flag:"🇲🇲"},{name:"Brunei",code:"BN",dial:"673",flag:"🇧🇳"},{name:"Mongolia",code:"MN",dial:"976",flag:"🇲🇳"},{name:"Kazakhstan",code:"KZ",dial:"7",flag:"🇰🇿"},{name:"Uzbekistan",code:"UZ",dial:"998",flag:"🇺🇿"},{name:"Turkmenistan",code:"TM",dial:"993",flag:"🇹🇲"},{name:"Kyrgyzstan",code:"KG",dial:"996",flag:"🇰🇬"},{name:"Tajikistan",code:"TJ",dial:"992",flag:"🇹🇯"},{name:"Afghanistan",code:"AF",dial:"93",flag:"🇦🇫"},{name:"Iran",code:"IR",dial:"98",flag:"🇮🇷"},{name:"Iraq",code:"IQ",dial:"964",flag:"🇮🇶"},{name:"Saudi Arabia",code:"SA",dial:"966",flag:"🇸🇦"},{name:"United Arab Emirates",code:"AE",dial:"971",flag:"🇦🇪"},{name:"Qatar",code:"QA",dial:"974",flag:"🇶🇦"},{name:"Kuwait",code:"KW",dial:"965",flag:"🇰🇼"},{name:"Bahrain",code:"BH",dial:"973",flag:"🇧🇭"},{name:"Oman",code:"OM",dial:"968",flag:"🇴🇲"},{name:"Yemen",code:"YE",dial:"967",flag:"🇾🇪"},{name:"Jordan",code:"JO",dial:"962",flag:"🇯🇴"},{name:"Lebanon",code:"LB",dial:"961",flag:"🇱🇧"},{name:"Syria",code:"SY",dial:"963",flag:"🇸🇾"},{name:"Israel",code:"IL",dial:"972",flag:"🇮🇱"},{name:"Palestine",code:"PS",dial:"970",flag:"🇵🇸"},{name:"Georgia",code:"GE",dial:"995",flag:"🇬🇪"},{name:"Armenia",code:"AM",dial:"374",flag:"🇦🇲"},{name:"Azerbaijan",code:"AZ",dial:"994",flag:"🇦🇿"},{name:"Moldova",code:"MD",dial:"373",flag:"🇲🇩"},{name:"Serbia",code:"RS",dial:"381",flag:"🇷🇸"},{name:"Bosnia and Herzegovina",code:"BA",dial:"387",flag:"🇧🇦"},{name:"Montenegro",code:"ME",dial:"382",flag:"🇲🇪"},{name:"North Macedonia",code:"MK",dial:"389",flag:"🇲🇰"},{name:"Albania",code:"AL",dial:"355",flag:"🇦🇱"},{name:"Kosovo",code:"XK",dial:"383",flag:"🇽🇰"},{name:"Andorra",code:"AD",dial:"376",flag:"🇦🇩"},{name:"Monaco",code:"MC",dial:"377",flag:"🇲🇨"},{name:"Liechtenstein",code:"LI",dial:"423",flag:"🇱🇮"},{name:"San Marino",code:"SM",dial:"378",flag:"🇸🇲"},{name:"Vatican City",code:"VA",dial:"379",flag:"🇻🇦"},{name:"Gibraltar",code:"GI",dial:"350",flag:"🇬🇮"},{name:"Faroe Islands",code:"FO",dial:"298",flag:"🇫🇴"},{name:"Greenland",code:"GL",dial:"299",flag:"🇬🇱"},{name:"New Zealand",code:"NZ",dial:"64",flag:"🇳🇿"},{name:"Fiji",code:"FJ",dial:"679",flag:"🇫🇯"},{name:"Papua New Guinea",code:"PG",dial:"675",flag:"🇵🇬"},{name:"Solomon Islands",code:"SB",dial:"677",flag:"🇸🇧"},{name:"Vanuatu",code:"VU",dial:"678",flag:"🇻🇺"},{name:"Samoa",code:"WS",dial:"685",flag:"🇼🇸"},{name:"Tonga",code:"TO",dial:"676",flag:"🇹🇴"},{name:"Kiribati",code:"KI",dial:"686",flag:"🇰🇮"},{name:"Marshall Islands",code:"MH",dial:"692",flag:"🇲🇭"},{name:"Micronesia",code:"FM",dial:"691",flag:"🇫🇲"},{name:"Palau",code:"PW",dial:"680",flag:"🇵🇼"},{name:"Nauru",code:"NR",dial:"674",flag:"🇳🇷"},{name:"Tuvalu",code:"TV",dial:"688",flag:"🇹🇻"},{name:"Cook Islands",code:"CK",dial:"682",flag:"🇨🇰"},{name:"Niue",code:"NU",dial:"683",flag:"🇳🇺"},{name:"Egypt",code:"EG",dial:"20",flag:"🇪🇬"},{name:"Libya",code:"LY",dial:"218",flag:"🇱🇾"},{name:"Tunisia",code:"TN",dial:"216",flag:"🇹🇳"},{name:"Algeria",code:"DZ",dial:"213",flag:"🇩🇿"},{name:"Morocco",code:"MA",dial:"212",flag:"🇲🇦"},{name:"Western Sahara",code:"EH",dial:"212",flag:"🇪🇭"},{name:"Mauritania",code:"MR",dial:"222",flag:"🇲🇷"},{name:"Mali",code:"ML",dial:"223",flag:"🇲🇱"},{name:"Niger",code:"NE",dial:"227",flag:"🇳🇪"},{name:"Chad",code:"TD",dial:"235",flag:"🇹🇩"},{name:"Sudan",code:"SD",dial:"249",flag:"🇸🇩"},{name:"South Sudan",code:"SS",dial:"211",flag:"🇸🇸"},{name:"Eritrea",code:"ER",dial:"291",flag:"🇪🇷"},{name:"Djibouti",code:"DJ",dial:"253",flag:"🇩🇯"},{name:"Ethiopia",code:"ET",dial:"251",flag:"🇪🇹"},{name:"Somalia",code:"SO",dial:"252",flag:"🇸🇴"},{name:"Kenya",code:"KE",dial:"254",flag:"🇰🇪"},{name:"Uganda",code:"UG",dial:"256",flag:"🇺🇬"},{name:"Tanzania",code:"TZ",dial:"255",flag:"🇹🇿"},{name:"Rwanda",code:"RW",dial:"250",flag:"🇷🇼"},{name:"Burundi",code:"BI",dial:"257",flag:"🇧🇮"},{name:"Democratic Republic of the Congo",code:"CD",dial:"243",flag:"🇨🇩"},{name:"Republic of the Congo",code:"CG",dial:"242",flag:"🇨🇬"},{name:"Central African Republic",code:"CF",dial:"236",flag:"🇨🇫"},{name:"Cameroon",code:"CM",dial:"237",flag:"🇨🇲"},{name:"Gabon",code:"GA",dial:"241",flag:"🇬🇦"},{name:"Equatorial Guinea",code:"GQ",dial:"240",flag:"🇬🇶"},{name:"São Tomé and Príncipe",code:"ST",dial:"239",flag:"🇸🇹"},{name:"Nigeria",code:"NG",dial:"234",flag:"🇳🇬"},{name:"Benin",code:"BJ",dial:"229",flag:"🇧🇯"},{name:"Togo",code:"TG",dial:"228",flag:"🇹🇬"},{name:"Ghana",code:"GH",dial:"233",flag:"🇬🇭"},{name:"Ivory Coast",code:"CI",dial:"225",flag:"🇨🇮"},{name:"Burkina Faso",code:"BF",dial:"226",flag:"🇧🇫"},{name:"Liberia",code:"LR",dial:"231",flag:"🇱🇷"},{name:"Sierra Leone",code:"SL",dial:"232",flag:"🇸🇱"},{name:"Guinea",code:"GN",dial:"224",flag:"🇬🇳"},{name:"Guinea-Bissau",code:"GW",dial:"245",flag:"🇬🇼"},{name:"The Gambia",code:"GM",dial:"220",flag:"🇬🇲"},{name:"Senegal",code:"SN",dial:"221",flag:"🇸🇳"},{name:"Cape Verde",code:"CV",dial:"238",flag:"🇨🇻"},{name:"Angola",code:"AO",dial:"244",flag:"🇦🇴"},{name:"Zambia",code:"ZM",dial:"260",flag:"🇿🇲"},{name:"Zimbabwe",code:"ZW",dial:"263",flag:"🇿🇼"},{name:"Malawi",code:"MW",dial:"265",flag:"🇲🇼"},{name:"Mozambique",code:"MZ",dial:"258",flag:"🇲🇿"},{name:"Botswana",code:"BW",dial:"267",flag:"🇧🇼"},{name:"Namibia",code:"NA",dial:"264",flag:"🇳🇦"},{name:"South Africa",code:"ZA",dial:"27",flag:"🇿🇦"},{name:"Lesotho",code:"LS",dial:"266",flag:"🇱🇸"},{name:"Eswatini",code:"SZ",dial:"268",flag:"🇸🇿"},{name:"Madagascar",code:"MG",dial:"261",flag:"🇲🇬"},{name:"Mauritius",code:"MU",dial:"230",flag:"🇲🇺"},{name:"Comoros",code:"KM",dial:"269",flag:"🇰🇲"},{name:"Seychelles",code:"SC",dial:"248",flag:"🇸🇨"},{name:"Argentina",code:"AR",dial:"54",flag:"🇦🇷"},{name:"Brazil",code:"BR",dial:"55",flag:"🇧🇷"},{name:"Chile",code:"CL",dial:"56",flag:"🇨🇱"},{name:"Colombia",code:"CO",dial:"57",flag:"🇨🇴"},{name:"Peru",code:"PE",dial:"51",flag:"🇵🇪"},{name:"Venezuela",code:"VE",dial:"58",flag:"🇻🇪"},{name:"Bolivia",code:"BO",dial:"591",flag:"🇧🇴"},{name:"Paraguay",code:"PY",dial:"595",flag:"🇵🇾"},{name:"Uruguay",code:"UY",dial:"598",flag:"🇺🇾"},{name:"Ecuador",code:"EC",dial:"593",flag:"🇪🇨"},{name:"Guyana",code:"GY",dial:"592",flag:"🇬🇾"},{name:"Suriname",code:"SR",dial:"597",flag:"🇸🇷"},{name:"Costa Rica",code:"CR",dial:"506",flag:"🇨🇷"},{name:"Panama",code:"PA",dial:"507",flag:"🇵🇦"},{name:"Guatemala",code:"GT",dial:"502",flag:"🇬🇹"},{name:"Honduras",code:"HN",dial:"504",flag:"🇭🇳"},{name:"El Salvador",code:"SV",dial:"503",flag:"🇸🇻"},{name:"Nicaragua",code:"NI",dial:"505",flag:"🇳🇮"},{name:"Belize",code:"BZ",dial:"501",flag:"🇧🇿"},{name:"Cuba",code:"CU",dial:"53",flag:"🇨🇺"},{name:"Dominican Republic",code:"DO",dial:"1",flag:"🇩🇴"},{name:"Haiti",code:"HT",dial:"509",flag:"🇭🇹"},{name:"Jamaica",code:"JM",dial:"1",flag:"🇯🇲"},{name:"Bahamas",code:"BS",dial:"1",flag:"🇧🇸"},{name:"Barbados",code:"BB",dial:"1",flag:"🇧🇧"},{name:"Trinidad and Tobago",code:"TT",dial:"1",flag:"🇹🇹"},{name:"Grenada",code:"GD",dial:"1",flag:"🇬🇩"},{name:"Saint Lucia",code:"LC",dial:"1",flag:"🇱🇨"},{name:"Saint Vincent and the Grenadines",code:"VC",dial:"1",flag:"🇻🇨"},{name:"Antigua and Barbuda",code:"AG",dial:"1",flag:"🇦🇬"},{name:"Dominica",code:"DM",dial:"1",flag:"🇩🇲"},{name:"Saint Kitts and Nevis",code:"KN",dial:"1",flag:"🇰🇳"},{name:"Puerto Rico",code:"PR",dial:"1",flag:"🇵🇷"},{name:"Guam",code:"GU",dial:"1",flag:"🇬🇺"},{name:"United States Virgin Islands",code:"VI",dial:"1",flag:"🇻🇮"},{name:"Northern Mariana Islands",code:"MP",dial:"1",flag:"🇲🇵"},{name:"American Samoa",code:"AS",dial:"1",flag:"🇦🇸"},{name:"Bermuda",code:"BM",dial:"1",flag:"🇧🇲"},{name:"Cayman Islands",code:"KY",dial:"1",flag:"🇰🇾"},{name:"Turks and Caicos Islands",code:"TC",dial:"1",flag:"🇹🇨"},{name:"British Virgin Islands",code:"VG",dial:"1",flag:"🇻🇬"},{name:"Anguilla",code:"AI",dial:"1",flag:"🇦🇮"},{name:"Montserrat",code:"MS",dial:"1",flag:"🇲🇸"},{name:"Falkland Islands",code:"FK",dial:"500",flag:"🇫🇰"},{name:"Saint Helena",code:"SH",dial:"290",flag:"🇸🇭"},{name:"Tristan da Cunha",code:"TA",dial:"290",flag:"🇹🇦"},{name:"Aruba",code:"AW",dial:"297",flag:"🇦🇼"},{name:"Curaçao",code:"CW",dial:"599",flag:"🇨🇼"},{name:"Sint Maarten",code:"SX",dial:"1",flag:"🇸🇽"},{name:"Bonaire, Sint Eustatius and Saba",code:"BQ",dial:"599",flag:"🇧🇶"},{name:"New Caledonia",code:"NC",dial:"687",flag:"🇳🇨"},{name:"French Polynesia",code:"PF",dial:"689",flag:"🇵🇫"},{name:"Wallis and Futuna",code:"WF",dial:"681",flag:"🇼🇫"},{name:"French Guiana",code:"GF",dial:"594",flag:"🇬🇫"},{name:"Guadeloupe",code:"GP",dial:"590",flag:"🇬🇵"},{name:"Martinique",code:"MQ",dial:"596",flag:"🇲🇶"},{name:"Mayotte",code:"YT",dial:"262",flag:"🇾🇹"},{name:"Réunion",code:"RE",dial:"262",flag:"🇷🇪"},{name:"Saint Pierre and Miquelon",code:"PM",dial:"508",flag:"🇵🇲"},{name:"Saint Barthélemy",code:"BL",dial:"590",flag:"🇧🇱"},{name:"Saint Martin (French)",code:"MF",dial:"590",flag:"🇲🇫"},{name:"Christmas Island",code:"CX",dial:"61",flag:"🇨🇽"},{name:"Cocos (Keeling) Islands",code:"CC",dial:"61",flag:"🇨🇨"},{name:"Norfolk Island",code:"NF",dial:"672",flag:"🇳🇫"},{name:"Tokelau",code:"TK",dial:"690",flag:"🇹🇰"},{name:"Pitcairn Islands",code:"PN",dial:"64",flag:"🇵🇳"},{name:"Aland Islands",code:"AX",dial:"358",flag:"🇦🇽"},{name:"Svalbard and Jan Mayen",code:"SJ",dial:"47",flag:"🇸🇯"},{name:"Bouvet Island",code:"BV",dial:"47",flag:"🇧🇻"},{name:"Heard Island and McDonald Islands",code:"HM",dial:"672",flag:"🇭🇲"},{name:"South Georgia and the South Sandwich Islands",code:"GS",dial:"500",flag:"🇬🇸"},{name:"British Indian Ocean Territory",code:"IO",dial:"246",flag:"🇮🇴"},{name:"United States Minor Outlying Islands",code:"UM",dial:"1",flag:"🇺🇲"},{name:"Antarctica",code:"AQ",dial:"672",flag:"🇦🇶"}];function pt(e){return Pe.find(t=>t.code===e)||null}const Wi={USD:{symbol:"$",locale:"en-US"},GBP:{symbol:"£",locale:"en-GB"},EUR:{symbol:"€",locale:"de-DE"},CAD:{symbol:"C$",locale:"en-CA"},AUD:{symbol:"A$",locale:"en-AU"},SGD:{symbol:"S$",locale:"en-SG"},JPY:{symbol:"¥",locale:"ja-JP"},MXN:{symbol:"Mex$",locale:"es-MX"},IDR:{symbol:"Rp",locale:"id-ID"},CHF:{symbol:"CHF",locale:"de-CH"},CNY:{symbol:"¥",locale:"zh-CN"},INR:{symbol:"₹",locale:"hi-IN"},BRL:{symbol:"R$",locale:"pt-BR"},ZAR:{symbol:"R",locale:"en-ZA"},NGN:{symbol:"₦",locale:"en-NG"},AED:{symbol:"د.إ",locale:"ar-AE"},SAR:{symbol:"﷼",locale:"ar-SA"},RUB:{symbol:"₽",locale:"ru-RU"},TRY:{symbol:"₺",locale:"tr-TR"},KRW:{symbol:"₩",locale:"ko-KR"},THB:{symbol:"฿",locale:"th-TH"},PLN:{symbol:"zł",locale:"pl-PL"},SEK:{symbol:"kr",locale:"sv-SE"},NOK:{symbol:"kr",locale:"nb-NO"},DKK:{symbol:"kr",locale:"da-DK"},NZD:{symbol:"NZ$",locale:"en-NZ"},HKD:{symbol:"HK$",locale:"zh-HK"},TWD:{symbol:"NT$",locale:"zh-TW"},MYR:{symbol:"RM",locale:"ms-MY"},PHP:{symbol:"₱",locale:"en-PH"},VND:{symbol:"₫",locale:"vi-VN"},EGP:{symbol:"E£",locale:"ar-EG"},KES:{symbol:"KSh",locale:"sw-KE"},GHS:{symbol:"GH₵",locale:"en-GH"},ARS:{symbol:"$",locale:"es-AR"},CLP:{symbol:"$",locale:"es-CL"},COP:{symbol:"Col$",locale:"es-CO"},PEN:{symbol:"S/",locale:"es-PE"},UAH:{symbol:"₴",locale:"uk-UA"},ILS:{symbol:"₪",locale:"he-IL"},PKR:{symbol:"₨",locale:"ur-PK"},BDT:{symbol:"৳",locale:"bn-BD"},CZK:{symbol:"Kč",locale:"cs-CZ"},HUF:{symbol:"Ft",locale:"hu-HU"},RON:{symbol:"lei",locale:"ro-RO"},BGN:{symbol:"лв",locale:"bg-BG"},HRK:{symbol:"kn",locale:"hr-HR"},ISK:{symbol:"kr",locale:"is-IS"},JOD:{symbol:"JD",locale:"ar-JO"},QAR:{symbol:"﷼",locale:"ar-QA"},KWD:{symbol:"د.ك",locale:"ar-KW"},BHD:{symbol:"BD",locale:"ar-BH"},OMR:{symbol:"﷼",locale:"ar-OM"},MAD:{symbol:"د.م.",locale:"ar-MA"},DZD:{symbol:"د.ج",locale:"ar-DZ"},TND:{symbol:"د.ت",locale:"ar-TN"},LBP:{symbol:"ل.ل",locale:"ar-LB"},IQD:{symbol:"ع.د",locale:"ar-IQ"},LKR:{symbol:"Rs",locale:"si-LK"},NRS:{symbol:"रू",locale:"ne-NP"},UGX:{symbol:"USh",locale:"sw-UG"},TZS:{symbol:"TSh",locale:"sw-TZ"},ETB:{symbol:"Br",locale:"am-ET"},XOF:{symbol:"CFA",locale:"fr-SN"},XAF:{symbol:"FCFA",locale:"fr-CM"},GEL:{symbol:"₾",locale:"ka-GE"},AZN:{symbol:"₼",locale:"az-AZ"},AMD:{symbol:"֏",locale:"hy-AM"},BYN:{symbol:"Br",locale:"be-BY"},UZS:{symbol:"soʻm",locale:"uz-UZ"},KZT:{symbol:"₸",locale:"kk-KZ"},RSD:{symbol:"дин",locale:"sr-RS"},MKD:{symbol:"ден",locale:"mk-MK"},ALL:{symbol:"L",locale:"sq-AL"},BAM:{symbol:"KM",locale:"bs-BA"},VEF:{symbol:"Bs",locale:"es-VE"},BOB:{symbol:"Bs",locale:"es-BO"},PYG:{symbol:"₲",locale:"es-PY"},UYU:{symbol:"$U",locale:"es-UY"},DOP:{symbol:"RD$",locale:"es-DO"},GTQ:{symbol:"Q",locale:"es-GT"},HNL:{symbol:"L",locale:"es-HN"},NIO:{symbol:"C$",locale:"es-NI"},CRC:{symbol:"₡",locale:"es-CR"},PAB:{symbol:"B/.",locale:"es-PA"},GTQ2:{symbol:"Q",locale:"es-GT"}},Ki=[...new Set([...Vi,...Object.keys(Wi)])],N=1,Q=5e6,Yi=[{id:"prod-smartphone",listingType:"product",category:"Phones",subcategory:"Smartphones",label:"Flagship Smartphone",brand:"Global Mobile",model:"X Pro",color:"Midnight Black",size:"6.7-inch",condition:"New",features:["5G connectivity","OLED display","Fast charging","Unlocked","Premium cameras"],highlights:["Retail-ready packaging","Strong search demand","Ideal for global shipping"],keywords:["smartphone","mobile phone","5g"],descriptionType:"phone"},{id:"prod-laptop",listingType:"product",category:"Computers & Laptops",subcategory:"Laptops",label:"Performance Laptop",brand:"NorthBridge",model:"Studio 14",color:"Silver",size:"14-inch",condition:"New",features:["Fast processor","SSD storage","Long battery life","Portable chassis","Business-ready design"],highlights:["Suitable for work and study","Premium margin band","Global audience appeal"],keywords:["laptop","notebook","computer"],descriptionType:"laptop"},{id:"prod-tv",listingType:"product",category:"Electronics",subcategory:"Smart TVs",label:"4K Smart TV",brand:"VistaHome",model:"UltraView",color:"Black",size:"65-inch",condition:"New",features:["4K panel","Streaming apps","HDR support","Voice control","Slim bezel"],highlights:["Living-room centerpiece","Popular premium electronics segment"],keywords:["tv","smart tv","home electronics"],descriptionType:"electronics"},{id:"prod-watch",listingType:"product",category:"Watches",subcategory:"Luxury Watches",label:"Luxury Wristwatch",brand:"Aurelius",model:"Chrono 8",color:"Gold / Black",size:"42mm",condition:"New",features:["Precision movement","Premium case","Gift-ready presentation","Water resistance","Collector appeal"],highlights:["High perceived value","Strong gifting category"],keywords:["watch","luxury watch","timepiece"],descriptionType:"luxury"},{id:"prod-jewelry",listingType:"product",category:"Jewelry",subcategory:"Fine Jewelry",label:"Fine Jewelry Set",brand:"Maison Valeur",model:"Signature Set",color:"Gold",size:"Adjustable",condition:"New",features:["Premium finish","Gift packaging","Occasion-ready","Elegant styling"],highlights:["High-value presentation","Wedding and celebration demand"],keywords:["jewelry","necklace","bracelet"],descriptionType:"luxury"},{id:"prod-handbag",listingType:"product",category:"Bags & Accessories",subcategory:"Designer Bags",label:"Designer Handbag",brand:"Rue Maison",model:"Carry All",color:"Tan",size:"Medium",condition:"New",features:["Structured silhouette","Premium hardware","Travel-friendly storage","Retail-ready finish"],highlights:["Fashion-forward listing","Broad international demand"],keywords:["handbag","designer bag","accessories"],descriptionType:"fashion"},{id:"prod-sneakers",listingType:"product",category:"Shoes",subcategory:"Premium Sneakers",label:"Premium Sneakers",brand:"RunNorth",model:"Air Flex",color:"White",size:"EU 42",condition:"New",features:["Comfort cushioning","Streetwear styling","Durable outsole","Daily wear ready"],highlights:["High-conversion category","Easy multi-country merchandising"],keywords:["sneakers","shoes","fashion"],descriptionType:"fashion"},{id:"prod-sofa",listingType:"product",category:"Furniture",subcategory:"Living Room",label:"Luxury Sofa Set",brand:"Grand Habitat",model:"Residence 3-Piece",color:"Sand Beige",size:"3-Piece Set",condition:"New",features:["Premium upholstery","Statement living-room piece","Comfort seating","Interior-ready styling"],highlights:["Large-ticket home category","Ideal for premium households"],keywords:["sofa","furniture","living room"],descriptionType:"home"},{id:"prod-generator",listingType:"product",category:"Home & Kitchen",subcategory:"Power Solutions",label:"Backup Power Generator",brand:"VoltWorks",model:"SilentMax",color:"Graphite",size:"7.5kVA",condition:"New",features:["Reliable backup power","Low-noise housing","Residential and business use","Heavy-duty build"],highlights:["Practical high-demand utility item","Useful in many markets"],keywords:["generator","power","backup power"],descriptionType:"industrial"},{id:"prod-drone",listingType:"product",category:"Cameras & Photography",subcategory:"Drones",label:"Pro Camera Drone",brand:"SkyFrame",model:"Aerial 4K",color:"Gray",size:"Foldable",condition:"New",features:["4K stabilized video","GPS return home","Portable folding frame","Creator-ready footage"],highlights:["Strong visual listing appeal","Premium creator equipment"],keywords:["drone","camera drone","aerial"],descriptionType:"electronics"},{id:"prod-grocery",listingType:"product",category:"Food & Groceries",subcategory:"Family Essentials",label:"Family Grocery Bundle",brand:"Market Select",model:"Household Pack",color:"Mixed",size:"Bulk Pack",condition:"New",features:["Everyday essentials","Bulk value","Family sized","Easy repeat orders"],highlights:["Fast-moving everyday goods","Useful across broad regions"],keywords:["groceries","food bundle","household essentials"],descriptionType:"daily"},{id:"prod-scale-house",listingType:"product",category:"Home & Kitchen",subcategory:"Model Houses",label:"Architectural Model House",brand:"Studio Form",model:"Estate Miniature",color:"Natural Wood",size:"1:50 Scale",condition:"New",features:["Collector display piece","Detailed craftsmanship","Interior decor appeal","Gift-ready packaging"],highlights:["Supports the model-house use case","Works for decor and collector audiences"],keywords:["model house","architectural model","collector decor"],descriptionType:"home"},{id:"veh-sedan",listingType:"product",category:"Cars",subcategory:"Sedans",label:"Executive Sedan",brand:"Summit Motors",model:"S Line",color:"Pearl White",size:"Mid-size",condition:"Used - Like New",features:["Comfortable cabin","Road-trip ready","Well-maintained presentation","Family and executive appeal"],highlights:["Vehicle posts support 24-image galleries","Map-ready listing"],keywords:["car","sedan","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-suv",listingType:"product",category:"Cars",subcategory:"SUVs",label:"Family SUV",brand:"Frontier Auto",model:"Terrain X",color:"Obsidian",size:"7-Seater",condition:"Used - Like New",features:["Spacious seating","Utility-focused cargo room","Suitable for families","Road and city versatility"],highlights:["High-demand automotive segment","Works well with showroom map"],keywords:["suv","family car","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-luxury",listingType:"product",category:"Luxury Cars",subcategory:"Luxury Vehicles",label:"Luxury Performance Car",brand:"Regal Automotive",model:"Imperium GT",color:"Metallic Black",size:"Coupe",condition:"Used - Like New",features:["Prestige brand positioning","Performance styling","Collector-level appeal","Premium interior"],highlights:["Supports the requested high-ticket range","Designed for showroom-style luxury listings"],keywords:["luxury car","sports car","supercar"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-motorcycle",listingType:"product",category:"Motorcycles",subcategory:"Street Bikes",label:"Sport Motorcycle",brand:"Velocity Moto",model:"R 900",color:"Red",size:"900cc",condition:"Used - Like New",features:["Agile handling","Performance design","Lifestyle buyer appeal","Weekend-ready machine"],highlights:["Automotive category with image-rich display"],keywords:["motorcycle","bike","sport bike"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-commercial",listingType:"product",category:"Commercial Vehicles",subcategory:"Utility Vehicles",label:"Commercial Utility Vehicle",brand:"FleetCore",model:"CargoPro",color:"White",size:"Long wheelbase",condition:"Used - Good",features:["Business-ready load space","Fleet-friendly purchase","Service history presentation","Commercial utility"],highlights:["Suitable for business buyers","Map-ready logistics listing"],keywords:["commercial vehicle","cargo van","fleet"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-boat",listingType:"product",category:"Boats & Marine",subcategory:"Leisure Boats",label:"Leisure Boat",brand:"BlueHarbor",model:"Coastline 28",color:"Navy / White",size:"28 ft",condition:"Used - Like New",features:["Marina-ready presentation","Leisure and charter appeal","Premium leisure category"],highlights:["Large-format gallery support","High-ticket recreational listing"],keywords:["boat","marine","yacht"],requiredImageCount:24,descriptionType:"vehicle"}],Ji=[{id:"prop-apartment",listingType:"property",category:"Real Estate",subcategory:"Apartments",label:"City Apartment",propertyType:"Apartment",bedrooms:2,bathrooms:2,buildingSize:"1,150 sqft",landSize:"",furnished:"Furnished",features:["Secure access","Modern kitchen","Prime urban access","Balcony or city views"],highlights:["Strong urban demand","Good for short and long stay buyers"],keywords:["apartment","real estate","city home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-condo",listingType:"property",category:"Real Estate",subcategory:"Condos",label:"Modern Condo",propertyType:"Condo",bedrooms:3,bathrooms:2,buildingSize:"1,450 sqft",landSize:"",furnished:"Furnished",features:["Managed building","Amenity access","Contemporary finish","Secure parking"],highlights:["Works across major global markets"],keywords:["condo","property","home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-townhouse",listingType:"property",category:"Real Estate",subcategory:"Townhouses",label:"Townhouse Residence",propertyType:"Townhouse",bedrooms:4,bathrooms:3,buildingSize:"2,000 sqft",landSize:"0.08 acres",furnished:"Unfurnished",features:["Multi-level layout","Family-ready plan","Private entry","Parking included"],highlights:["Popular residential ownership format"],keywords:["townhouse","residence","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-villa",listingType:"property",category:"Real Estate",subcategory:"Villas",label:"Private Villa",propertyType:"Villa",bedrooms:5,bathrooms:5,buildingSize:"4,800 sqft",landSize:"0.4 acres",furnished:"Furnished",features:["Private outdoor space","Premium architecture","Luxury entertaining zones","Prestige location potential"],highlights:["Premium property tier","Designed for international buyers"],keywords:["villa","luxury property","real estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-mansion",listingType:"property",category:"Real Estate",subcategory:"Mansions",label:"Luxury Mansion",propertyType:"Mansion",bedrooms:8,bathrooms:10,buildingSize:"12,000 sqft",landSize:"1.2 acres",furnished:"Furnished",features:["Grand entrance","High-end interior finishes","Staff or guest quarters","Statement curb appeal"],highlights:["Matches the mansion requirement directly","Supports high-ticket luxury listings"],keywords:["mansion","estate","luxury home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-beach",listingType:"property",category:"Real Estate",subcategory:"Beach Houses",label:"Beachfront House",propertyType:"Beach House",bedrooms:4,bathrooms:4,buildingSize:"3,600 sqft",landSize:"0.25 acres",furnished:"Furnished",features:["Waterfront views","Outdoor leisure space","Vacation-rental appeal","Premium lifestyle positioning"],highlights:["Ideal for tourism and lifestyle markets"],keywords:["beach house","waterfront home","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-farm",listingType:"property",category:"Real Estate",subcategory:"Farm Houses",label:"Farm House Estate",propertyType:"Farm House",bedrooms:4,bathrooms:3,buildingSize:"3,100 sqft",landSize:"5 acres",furnished:"Unfurnished",features:["Land-rich asset","Agricultural potential","Quiet residential use","Outbuilding opportunity"],highlights:["Suitable for rural and suburban regions"],keywords:["farm house","landed property","estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-commercial",listingType:"property",category:"Real Estate",subcategory:"Commercial Buildings",label:"Commercial Building",propertyType:"Commercial Building",bedrooms:0,bathrooms:4,buildingSize:"8,500 sqft",landSize:"0.35 acres",furnished:"Unfurnished",features:["Business district potential","Mixed-use flexibility","Visible frontage","Investor-ready asset class"],highlights:["Attractive for business buyers and investors"],keywords:["commercial building","office","investment property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-hotel",listingType:"property",category:"Real Estate",subcategory:"Hotels",label:"Boutique Hotel",propertyType:"Hotel",bedrooms:18,bathrooms:20,buildingSize:"15,000 sqft",landSize:"0.75 acres",furnished:"Furnished",features:["Hospitality-ready layout","Guest-focused amenities","Tourism and corporate appeal","Revenue asset potential"],highlights:["Supports hospitality listings globally"],keywords:["hotel","hospitality","investment"],requiredImageCount:24,descriptionType:"property"},{id:"prop-land",listingType:"property",category:"Real Estate",subcategory:"Land",label:"Development Land",propertyType:"Land",bedrooms:0,bathrooms:0,buildingSize:"",landSize:"10 acres",furnished:"",features:["Development potential","Flexible use case","Long-term investment appeal","Location-led value"],highlights:["Useful for land banking and development"],keywords:["land","plot","development"],requiredImageCount:24,descriptionType:"property"}],Ua=[...Yi,...Ji];function ea(e){return zi[e]||"USD"}function Oa(e,t){return Ua.filter(a=>a.listingType!==e?!1:t?a.category===t:!0)}function Qi(e,t){const a=Math.max(N,Math.min(Q,Number(e)||N));return new Intl.NumberFormat("en-US",{style:"currency",currency:t,maximumFractionDigits:0}).format(a)}function Xi(e,t,a,i,n){const o=Qi(i,a);return e.descriptionType==="vehicle"?`${e.label} listed at ${o}. This template is intended to present a complete automotive post with exterior, interior, condition, performance, and gallery details in a clean showroom-style format.`:e.descriptionType==="property"?`${e.label} located in ${n}. Offered at ${o}, this property template is designed for a complete real-estate presentation with map-ready location data, rich visual gallery coverage, and buyer-friendly highlights covering layout, lifestyle, and investment value.`:e.descriptionType==="phone"?`${e.label} listed at ${o}. The template focuses on a clean premium device presentation with brand, model, condition, core features, and strong online merchandising copy.`:e.descriptionType==="laptop"?`${e.label} listed at ${o}. Built for marketplace listings that need clear performance positioning, specification highlights, and an easy-to-scan description for students, professionals, and remote workers.`:e.descriptionType==="luxury"?`${e.label} listed at ${o}. This template supports high-value presentation with polished positioning, premium selling points, and a strong showroom-style description.`:e.descriptionType==="fashion"?`${e.label} listed at ${o}. This product template highlights styling, quality, and day-to-day appeal while keeping the listing easy to customize.`:e.descriptionType==="home"?`${e.label} listed at ${o}. The listing copy is structured for shoppers looking for quality presentation, reliable detail, and visual merchandising support.`:e.descriptionType==="industrial"?`${e.label} listed at ${o}. This template emphasizes practical use, dependable performance, and business or household value in a straightforward format.`:e.descriptionType==="daily"?`${e.label} listed at ${o}. The copy is designed for repeat-buy categories with clear value messaging and broad buyer appeal.`:`${e.label} listed at ${o}. This template generates a clean, marketable listing with ready-made highlights, keywords, and presentation details.`}function ja({templateId:e,listingType:t,category:a,countryCode:i,currency:n,price:o}){const r=Ua.find(p=>p.id===e&&p.listingType===t);if(!r)return null;const d=pt(i)||Pe[0],s=n||ea(d.code),c=[d.name].filter(Boolean).join(", "),u={category:r.category||a||(t==="property"?"Real Estate":"Other"),subcategory:r.subcategory||r.label,title:t==="property"?`${r.label} in ${d.name}`:r.label,description:Xi(r,d,s,o,c),currency:s,features:[...r.features],highlights:[...r.highlights||[]],seo_keywords:[...new Set([r.category,r.subcategory,r.label,...t==="property"?[d.name]:[],...r.keywords||[]].filter(Boolean))],requiredImageCount:r.requiredImageCount||0};return t==="property"?{...u,country:d.name,country_code:d.code,product_location:d.name,property_type:r.propertyType||r.label,bedrooms:r.bedrooms??null,bathrooms:r.bathrooms??null,building_size:r.buildingSize||"",land_size:r.landSize||"",furnished:r.furnished||""}:{...u,brand:r.brand||"",model:r.model||"",color:r.color||"",size:r.size||"",condition:r.condition||"New"}}const qa="kco_payment_settings_v1",Zi=[{currency:"USD",currencyName:"United States Dollar",flag:"US",country:"United States",bankName:"Citibank",transferType:"Local & International",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"70589490002447647",accountType:"Checking",iban:"",swift:"CITIUS33",routing:"031100209",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:"111 Wall Street, New York, NY 10043, USA"},{currency:"GBP",currencyName:"British Pound",flag:"GB",country:"United Kingdom",bankName:"Citibank",transferType:"Local & International",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"56468624",accountType:"",iban:"GB94CITI18500856468624",swift:"CITIGB2L",routing:"",sortCode:"185008",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:"Canada Square, Canary Wharf, London E14 5LB, United Kingdom"},{currency:"EUR",currencyName:"Euro",flag:"EU",country:"Eurozone",bankName:"Citibank",transferType:"Local & International",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"",accountType:"",iban:"IE70CITI99005171297018",swift:"CITIIE2X",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:"1 North Wall Quay, IFSC, Dublin 1, Ireland"},{currency:"CAD",currencyName:"Canadian Dollar",flag:"CA",country:"Canada",bankName:"Citibank NA Canadian Branch",transferType:"Local Transfer",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"3001440544",accountType:"Checking",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"0328",transitNumber:"20012",bsbCode:"",address:"123 Front St. West, Toronto, ON M5J 2M3, Canada"},{currency:"AUD",currencyName:"Australian Dollar",flag:"AU",country:"Australia",bankName:"Citibank",transferType:"Local & International",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"10674571",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"248024",address:"2 Park Street, Sydney NSW 2000, Australia"},{currency:"SGD",currencyName:"Singapore Dollar",flag:"SG",country:"Singapore",bankName:"Citibank N.A. Singapore Branch",transferType:"Local & International",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"44990709533",accountType:"",iban:"",swift:"CITISGSG",routing:"",sortCode:"",bankCode:"7214",branchCode:"001",institutionNumber:"",transitNumber:"",bsbCode:"",address:"8 Marina View, #17-01 Asia Square Tower 1, Singapore 018960"},{currency:"JPY",currencyName:"Japanese Yen",flag:"JP",country:"Japan",bankName:"MUFG Bank Ltd.",transferType:"Local Transfer",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"4682719",accountType:"Savings / Futsu",iban:"",swift:"",routing:"",sortCode:"",bankCode:"0005",branchCode:"869",institutionNumber:"",transitNumber:"",bsbCode:"",address:"7-1 Marunouchi 2-Chome, Chiyoda-ku, Tokyo, Japan"},{currency:"MXN",currencyName:"Mexican Peso",flag:"MX",country:"Mexico",bankName:"Sistema de Transferencias y Pagos",transferType:"Local Transfer",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"646010504200345127",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"646",branchCode:"010",institutionNumber:"",transitNumber:"",bsbCode:"",address:"Av. Insurgentes Sur 1425, Ciudad de México, México"},{currency:"IDR",currencyName:"Indonesian Rupiah",flag:"ID",country:"Indonesia",bankName:"Deutsche Bank AG Jakarta Branch",transferType:"Local Transfer",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"974400000904",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"0670304",institutionNumber:"",transitNumber:"",bsbCode:"",address:"Jl. Imam Bonjol 80, Jakarta 10310, Indonesia"}];function ta(e){if(!e||e.length!==2)return"🏦";const t=e.toUpperCase().split("").map(a=>127462+a.charCodeAt(0)-65);try{return String.fromCodePoint(...t)}catch{return"🏦"}}function en(){try{const e=localStorage.getItem(qa);return e?JSON.parse(e):null}catch{return null}}function tn(e){try{localStorage.setItem(qa,JSON.stringify(e))}catch{}}function mt(e,t=0){const a=e.country_code||e.flag||(e.currency==="EUR"?"EU":"US"),i=e.country||pt(a)?.name||"",n=(e.currency||"USD").toUpperCase();return{id:e.id||`bank-${t+1}`,currency:n,currencyName:e.currencyName||e.currency_name||n,flag:e.flag&&e.flag.length>2?e.flag:ta(a),country:i,country_code:a,bankName:e.bankName||e.bank_name||"",transferType:e.transferType||e.transfer_type||"Bank Transfer",beneficiary:e.beneficiary||e.accountName||e.account_name||"",accountNumber:e.accountNumber||e.account_number||"",accountType:e.accountType||e.account_type||"",iban:e.iban||"",swift:e.swift||"",routing:e.routing||"",sortCode:e.sortCode||e.sort_code||"",bankCode:e.bankCode||e.bank_code||"",branchCode:e.branchCode||e.branch_code||"",institutionNumber:e.institutionNumber||e.institution_number||"",transitNumber:e.transitNumber||e.transit_number||"",bsbCode:e.bsbCode||e.bsb_code||"",address:e.address||""}}function an(e=[]){return e.map((t,a)=>mt(t,a)).filter(t=>t.currency&&(t.accountNumber||t.iban||t.swift||t.routing||t.sortCode||t.bankCode||t.branchCode||t.institutionNumber||t.transitNumber||t.bsbCode))}function nn(e={}){const t=[];return(e.bank1_account_name||e.bank1_account_number||e.bank1_bank_name)&&t.push(mt({id:"bank-1",currency:e.bank1_currency||"USD",country:e.bank1_country||pt("US")?.name||"United States",country_code:e.bank1_country_code||"US",bank_name:e.bank1_bank_name,transfer_type:e.bank1_transfer_type,account_name:e.bank1_account_name,account_number:e.bank1_account_number,sort_code:e.bank1_sort_code},0)),(e.bank2_account_name||e.bank2_account_number||e.bank2_bank_name)&&t.push(mt({id:"bank-2",currency:e.bank2_currency||"USD",country:e.bank2_country||pt("US")?.name||"United States",country_code:e.bank2_country_code||"US",bank_name:e.bank2_bank_name,transfer_type:e.bank2_transfer_type,account_name:e.bank2_account_name,account_number:e.bank2_account_number,sort_code:e.bank2_sort_code},1)),t}function on(e={}){const t=an(e.manual_payment_accounts||[]);if(t.length>0)return t;const a=nn(e);return a.length>0?a:Zi.map((i,n)=>mt(i,n))}function rn(e={}){return e.manual_payment_instructions||"Transfer the exact order amount to the bank account shown below. After payment, upload your receipt for verification. Once your receipt is verified, your goods will be shipped immediately."}let Mt=null;async function sn(){return Mt||(Mt=Ma(()=>import("./pdf-ksa_hnld.js"),[]).then(e=>{try{e.GlobalWorkerOptions.workerSrc=new URL("/assets/pdf.worker.min-yatZIOMy.mjs",import.meta.url).toString()}catch{}return e})),Mt}function ln(e,t){return e.toDataURL("image/jpeg",t)}async function dn(e,t){const a=e.getViewport({scale:1}),i=Math.min(3,Math.max(.5,t/Math.max(a.width,a.height))),n=e.getViewport({scale:i}),o=document.createElement("canvas");o.width=Math.max(1,Math.round(n.width)),o.height=Math.max(1,Math.round(n.height));const r=o.getContext("2d",{alpha:!1});return r.fillStyle="#ffffff",r.fillRect(0,0,o.width,o.height),await e.render({canvasContext:r,viewport:n}).promise,ln(o,.78)}async function cn(e,{maxDim:t=1300,maxPages:a=0,onProgress:i=()=>{}}={}){const o=await(await sn()).getDocument({url:e,useSystemFonts:!0,isEvalSupported:!1}).promise,r=o.numPages,d=a>0?Math.min(r,a):r,s=[];try{for(let c=1;c<=d;c++){i(c,d);const u=await o.getPage(c);s.push(await dn(u,t))}}finally{try{await o.destroy()}catch{}}return s}function et(e){const t=String(e||"").toLowerCase();return t.endsWith(".pdf")||t.includes(".pdf?")||t.includes(".pdf#")}const Ha="weverseonlineshop@gmail.com",Ga="Weverse Online Shop",Va="GLOBAL SHOPPING â€¢ WORLDWIDE DELIVERY",un="https://wttnvwpoqmbxryivcerf.supabase.co".replace(/\/$/,""),pn=`${un}/functions/v1/ai-admin-assistant`,mn=[{group:"Main",items:[{id:"dashboard",label:"Dashboard",icon:"layout-dashboard"},{id:"products",label:"Products",icon:"package"},{id:"content-settings",label:"Content Settings",icon:"file-cog"},{id:"properties",label:"Properties",icon:"home"},{id:"catalog",label:"Catalog Manager",icon:"boxes"},{id:"orders",label:"Orders",icon:"shopping-bag"},{id:"customers",label:"Customers",icon:"users"},{id:"reviews",label:"Reviews",icon:"star"},{id:"messages",label:"Messages",icon:"message-circle"},{id:"coupons",label:"Coupons",icon:"ticket"},{id:"ads",label:"Advertisements",icon:"megaphone"},{id:"notifications",label:"Notifications",icon:"bell"}]},{group:"Configuration",items:[{id:"ai",label:"AI Assistant",icon:"sparkles"},{id:"payment-settings",label:"Payment Settings",icon:"credit-card"},{id:"ai-settings",label:"AI Settings",icon:"bot"},{id:"homepage-branding",label:"Homepage Branding",icon:"image"},{id:"promo-bg",label:"Promo & Backgrounds",icon:"image"},{id:"brand",label:"Brand Manager",icon:"palette"},{id:"content",label:"Content Manager",icon:"file-text"},{id:"seo",label:"SEO Manager",icon:"search"},{id:"email",label:"Email Settings",icon:"mail"},{id:"analytics",label:"Analytics",icon:"bar-chart-3"},{id:"security",label:"Security",icon:"shield"},{id:"activity",label:"Activity Logs",icon:"activity"},{id:"backup",label:"Backup & Restore",icon:"database"},{id:"settings",label:"Settings",icon:"settings"},{id:"publish",label:"Publish & Deploy",icon:"rocket"}]}],gn={dashboard:"Dashboard",products:"Products Manager",properties:"Properties Manager",catalog:"Catalog Manager",orders:"Orders Manager",customers:"Customers Manager",reviews:"Reviews Manager",messages:"Messages & Support",coupons:"Coupons Manager",ads:"Advertisement Manager","ai-settings":"AI Settings",content:"Content Manager","content-settings":"Content Settings",ai:"AI Assistant","homepage-branding":"Homepage Branding","promo-bg":"Promo & Backgrounds",brand:"Brand Manager","payment-settings":"Payment Settings",seo:"SEO Manager",email:"Email Settings",analytics:"Analytics",security:"Security",activity:"Activity Logs",backup:"Backup & Restore",settings:"Settings",publish:"Publish & Deploy"},za=[...Ki].sort();let A={user:null,section:"dashboard"};function l(e){if(e==null)return"";const t=document.createElement("div");return t.textContent=String(e),t.innerHTML}function Wa(e,t="USD"){return`${(parseFloat(e)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})} ${t}`}function ne(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"â€”"}function xe(e){return e?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"â€”"}function aa(){return"W-"+String(Date.now()).slice(-6)+Math.floor(Math.random()*1e3).toString().padStart(3,"0")}const bn=["id","property_id","listing_type","category","subcategory","title","description","price","price_period","currency","country","country_code","state","city","town","product_location","latitude","longitude","bedrooms","bathrooms","building_size","land_size","parking_spaces","property_type","furnished","listing_status","images","features","tags","highlights","seo_keywords","specifications","brand","color","size","condition","warranty","shipping_info","delivery_estimate","weight","dimensions","storage_options","ram_options","color_options","availability_status","stock_quantity","sku","is_active","is_featured","is_ai_generated","ai_generated_fields","rating","rating_count","favorite_count","review_count","video","video_url","approval_status","published_at","created_at","updated_at","real_price","year_built","year_renovated","half_bathrooms","floors","garage","zip_code","address","landmarks","interior_features","exterior_features","home_systems","legal_info","risk_notes","floor_plan","nearby_area","verification_status","verification_date","inspection_info","documents","language_info"];function ve(e){const t={};if(!e||typeof e!="object")return t;for(const a of bn)a in e&&(t[a]=e[a]);return t}function m(e,t="success"){const a=document.getElementById("toast"),i=document.getElementById("toast-msg"),n=a.querySelector("i[data-lucide]");if(!a||!i)return;i.textContent=e;const o={success:"check-circle",error:"alert-circle",info:"info"},r={success:"text-emerald-400",error:"text-red-400",info:"text-blue-400"};n&&(n.setAttribute("data-lucide",o[t]||"info"),n.className=`w-4 h-4 shrink-0 ${r[t]||"text-blue-400"}`),a.style.transform="translateY(0)",a.style.opacity="1",window.lucide&&lucide.createIcons(),clearTimeout(a._t),a._t=setTimeout(()=>{a.style.transform="translateY(20px)",a.style.opacity="0"},3e3)}function Ne(e){return!e||typeof e!="string"||e.startsWith("blob:")||e.startsWith("data:")?!1:/\.(mp4|webm|mov|avi|mkv)(\?|#|$)/i.test(e)}function Re(e){return e&&e.type&&e.type.startsWith("video/")}function Y(e){const t={pending_verification:["bg-amber-500/10 text-amber-400 border-amber-500/20","Pending"],approved:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Approved"],rejected:["bg-red-500/10 text-red-400 border-red-500/20","Rejected"],payment_approved:["bg-blue-500/10 text-blue-400 border-blue-500/20","Paid"],order_placed:["bg-amber-500/10 text-amber-400 border-amber-500/20","Placed"],processing:["bg-indigo-500/10 text-indigo-400 border-indigo-500/20","Processing"],shipped:["bg-violet-500/10 text-violet-400 border-violet-500/20","Shipped"],in_transit:["bg-violet-500/10 text-violet-400 border-violet-500/20","In Transit"],out_for_delivery:["bg-cyan-500/10 text-cyan-400 border-cyan-500/20","Out for Delivery"],delivered:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Delivered"],cancelled:["bg-red-500/10 text-red-400 border-red-500/20","Cancelled"],active:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],inactive:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"],sale:["bg-blue-500/10 text-blue-400 border-blue-500/20","For Sale"],rent:["bg-violet-500/10 text-violet-400 border-violet-500/20","For Rent"],true:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],false:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"]},[a,i]=t[String(e)]||["bg-gray-500/10 text-gray-400 border-gray-500/20",l(e)||"â€”"];return`<span class="badge ${a}">${i}</span>`}function ce(){document.getElementById("modal-container").innerHTML=""}function U(e){document.getElementById("modal-container").innerHTML=e,window.lucide&&lucide.createIcons()}window.closeModal=ce;window.openModal=U;function G(e,t,a,i,n=""){const o={blue:"bg-blue-500/10 text-blue-400 border-blue-500/15",amber:"bg-amber-500/10 text-amber-400 border-amber-500/15",emerald:"bg-emerald-500/10 text-emerald-400 border-emerald-500/15",red:"bg-red-500/10 text-red-400 border-red-500/15",violet:"bg-violet-500/10 text-violet-400 border-violet-500/15",blue:"bg-blue-500/10 text-blue-400 border-blue-500/15"};return`<div class="stat-card glass-soft border border-blue-500/15 rounded-3xl p-5">
    <div class="flex items-start justify-between mb-3">
      <div class="p-3 ${o[i]||o.blue} rounded-2xl border"><i data-lucide="${a}" class="w-5 h-5"></i></div>
    </div>
    <p class="text-3xl font-black text-white">${l(t)}</p>
    <p class="text-xs text-gray-500 uppercase tracking-wide mt-1 font-bold">${l(e)}</p>
    ${n?`<p class="text-xs text-gray-600 mt-1">${l(n)}</p>`:""}
  </div>`}function Ue(){return'<div class="flex items-center justify-center py-24"><div class="flex items-center gap-3 text-gray-500 text-sm"><i data-lucide="loader-2" class="w-5 h-5 animate-spin text-blue-400"></i> Loadingâ€¦</div></div>'}function Se(e,t,a,i=""){return`<div class="flex flex-col items-center justify-center py-20 text-center"><div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4"><i data-lucide="${e}" class="w-8 h-8 text-blue-400"></i></div><h3 class="text-base font-black text-white mb-1">${l(t)}</h3><p class="text-sm text-gray-500 max-w-xs">${l(a)}</p>${i?`<div class="mt-5">${i}</div>`:""}</div>`}function Ka(){const e=document.getElementById("sidebar-nav");e&&(e.innerHTML=mn.map(t=>`
    <div>
      <span class="section-label">${t.group}</span>
      ${t.items.map(a=>`
        <button class="nav-item ${A.section===a.id?"active":""} w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold rounded-xl" onclick="navigate('${a.id}')">
          <i data-lucide="${a.icon}" class="w-4 h-4 shrink-0"></i>
          <span>${a.label}</span>
        </button>`).join("")}
    </div>`).join(""),window.lucide&&lucide.createIcons())}window.navigate=function(e){A.section=e;const t=gn[e]||e,a=document.getElementById("page-title");a&&(a.textContent=t),Ka(),closeSidebar();const i=document.getElementById("content");i&&(i.innerHTML=Ue()),window.lucide&&lucide.createIcons(),({dashboard:Cn,products:S,properties:Pt,catalog:Ge,orders:xi,customers:bo,reviews:it,messages:_i,coupons:Et,ads:He,notifications:ho,ai:yn,"ai-settings":Pi,"homepage-branding":Ct,"promo-bg":Xe,content:$o,"content-settings":Ii,seo:Mo,email:Bo,analytics:Lo,security:It,activity:No,brand:Tt,"payment-settings":Xt,backup:Ro,settings:Do,publish:Lt}[e]||(()=>{const r=document.getElementById("content");r&&(r.innerHTML=Se("construction","Coming Soon",`${t} is being built.`))}))()};async function yn(){const e=document.getElementById("content");e&&(e.innerHTML=`
    <div class="space-y-4 fade-in">
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 class="text-xl font-black text-white">AI Assistant</h2>
          <p class="text-xs text-gray-500 mt-1">Use AI to manage products, including adding products after configuring your provider keys.</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="navigate('ai-settings')" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition">AI Settings</button>
          <a href="/admin-ai.html" target="_blank" rel="noopener" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition">Open Fullscreen</a>
        </div>
      </div>

<div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
        <iframe src="/admin-ai.html" title="AI Assistant" class="w-full" style="height: calc(100vh - 230px); min-height: 680px; border: 0;"></iframe>
      </div>
    </div>`,window.lucide&&lucide.createIcons())}window.openSidebar=()=>{document.getElementById("sidebar").classList.add("open"),document.getElementById("sidebar-overlay").classList.remove("hidden")};window.closeSidebar=()=>{document.getElementById("sidebar").classList.remove("open"),document.getElementById("sidebar-overlay").classList.add("hidden")};document.getElementById("close-sidebar")?.addEventListener("click",closeSidebar);const Le="kco_admin_remember",ia="kco_login_attempts",Dt=5,fn=15*60*1e3;function q(e){const t=document.getElementById("login-error"),a=document.getElementById("login-error-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-success")?.classList.add("hidden"),window.lucide&&lucide.createIcons())}function hn(e){const t=document.getElementById("login-success"),a=document.getElementById("login-success-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-error")?.classList.add("hidden"))}function _t(){document.getElementById("login-error")?.classList.add("hidden"),document.getElementById("login-success")?.classList.add("hidden")}function tt(e){return String(e||"").trim().toLowerCase()}function vn(){try{const e=JSON.parse(localStorage.getItem(Le)||"{}");e?.email&&!tt(e.email)&&localStorage.removeItem(Le)}catch{localStorage.removeItem(Le)}}function wn(){try{const e=JSON.parse(localStorage.getItem(Le)||"{}");return tt(e?.email)}catch{return""}}function na(){vn();const e=wn(),t=document.getElementById("login-email");t&&(t.value=e||t.value||Ha,t.removeAttribute("readonly"));const a=document.getElementById("reset-email");a&&(a.value=e||a.value||"",a.removeAttribute("readonly"))}function xn(){return`${window.location.origin}/admin.html`}function Ee(e){const t=document.getElementById("login-header-title"),a=document.getElementById("login-header-icon");document.getElementById("login-form")?.classList.toggle("hidden",e!=="login"),document.getElementById("twofa-form")?.classList.toggle("hidden",e!=="2fa"),document.getElementById("forgot-form")?.classList.toggle("hidden",e!=="forgot"),_t(),e==="login"&&(t&&(t.textContent="Admin Access"),a&&a.setAttribute("data-lucide","shield-check")),e==="2fa"&&(t&&(t.textContent="Two-Factor Auth"),a&&a.setAttribute("data-lucide","smartphone")),e==="forgot"&&(t&&(t.textContent="Reset Password"),a&&a.setAttribute("data-lucide","mail")),window.lucide&&lucide.createIcons()}function D(e,t,a=""){const i=document.getElementById(e);i&&(i.disabled=t,t?i.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block mr-1"></i> Please waitâ€¦':a&&(i.innerHTML=a),window.lucide&&lucide.createIcons())}function Ya(){try{return JSON.parse(localStorage.getItem(ia)||'{"count":0}')}catch{return{count:0}}}function Ja(){const e=Ya();return e.count=(e.count||0)+1,e.count>=Dt&&(e.lockedUntil=Date.now()+fn),localStorage.setItem(ia,JSON.stringify(e)),e}function Qa(){localStorage.removeItem(ia)}function Xa(){const e=Ya();if(!e.lockedUntil)return null;const t=e.lockedUntil-Date.now();return t<=0?(Qa(),null):Math.ceil(t/6e4)}async function se(e,t,a={}){try{await g.from("admin_security_logs").insert({user_id:e,event_type:t,ip_address:await _n(),user_agent:navigator.userAgent.slice(0,200),...a})}catch{}}async function _n(){try{return(await(await fetch("https://api64.ipify.org?format=json",{signal:AbortSignal.timeout(3e3)})).json()).ip||"unknown"}catch{return"unknown"}}async function Za(e){if(!e)return!1;let t=!1,a=!1;try{const{data:i}=await g.rpc("is_current_user_admin");t=!0,a=!!i}catch{t=!1}return t?a:tt(e.email)===Ha}async function kn(){const e=window.location.hash;if(e.includes("type=recovery")||e.includes("access_token")){gt(),In();return}const{data:{session:t}}=await g.auth.getSession();if(t?.user&&await Za(t.user)){const{data:{currentUser:i}}=await g.auth.getUser(),n=await g.auth.mfa.getAuthenticatorAssuranceLevel(),o=n.data?.currentLevel;if(n.data?.nextLevel==="aal2"&&o!=="aal2"){A.user=t.user,gt(),Ee("2fa"),oa();return}A.user=t.user,kt();return}Sn()}function gt(){const e=document.getElementById("login-screen");e&&(e.style.display="flex")}function Sn(){gt(),Ee("login"),na(),ei(),ti(),oa(),$n();const e=Xa();e&&(q(`Too many failed attempts. Try again in ${e} minute${e>1?"s":""}.`),document.getElementById("login-btn").disabled=!0)}function $n(){document.getElementById("toggle-pw")?.addEventListener("click",()=>{const e=document.getElementById("login-password"),t=document.querySelector("#toggle-pw i");e&&(e.type=e.type==="password"?"text":"password",t&&t.setAttribute("data-lucide",e.type==="password"?"eye":"eye-off"),window.lucide&&lucide.createIcons())})}function ei(){const e=document.getElementById("login-form");!e||e._bound||(e._bound=!0,e.addEventListener("submit",Pn),document.getElementById("forgot-pw-btn")?.addEventListener("click",()=>Ee("forgot")))}async function Pn(e){e.preventDefault();const t=Xa();if(t){q(`Account locked. Try again in ${t} minute${t>1?"s":""}.`);return}const a=document.getElementById("login-email"),i=tt(a?.value);if(!i){q("Enter your admin email address."),D("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const n=document.getElementById("login-password").value,o=document.getElementById("remember-me")?.checked;D("login-btn",!0),_t();const{data:r,error:d}=await g.auth.signInWithPassword({email:i,password:n});if(d||!r.user){const y=String(d?.message||"").toLowerCase();if(y.includes("missing supabase credentials")||y.includes("authentication service is unavailable")){q("Authentication is temporarily unavailable due to configuration. Please contact support."),D("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(y.includes("failed to fetch")||y.includes("network request failed")){q("Network error while signing in. Check your connection and try again."),D("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(y.includes("email not confirmed")){q("Your admin email is not confirmed yet. Open your verification email and confirm first."),D("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const h=Ja(),b=Dt-h.count,f=h.lockedUntil?`Account locked for 15 minutes after ${Dt} failed attempts.`:`Invalid email or password. ${b>0?b+" attempt"+(b!==1?"s":"")+" remaining.":""}`;q(f),D("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),r?.user&&await se(r.user.id,"login_failed",{metadata:{reason:"wrong_password"}});return}if(!await Za(r.user)){await g.auth.signOut(),q(`Access denied for ${r.user.email}. This account is signed in but does not have administrator privileges.`),D("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),await se(r.user.id,"login_denied",{metadata:{reason:"not_admin"}});return}if(o?localStorage.setItem(Le,JSON.stringify({email:i,ts:Date.now()})):localStorage.removeItem(Le),Qa(),A.user=r.user,(await g.auth.mfa.getAuthenticatorAssuranceLevel()).data?.nextLevel==="aal2"){D("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),Ee("2fa"),oa(),setTimeout(()=>document.getElementById("totp-code")?.focus(),100);return}await se(r.user.id,"login_success"),D("login-btn",!1),kt()}function oa(){const e=document.getElementById("verify-2fa-btn");e&&!e._bound&&(e._bound=!0,e.addEventListener("click",wa));const t=document.getElementById("totp-code");t&&!t._bound&&(t._bound=!0,t.addEventListener("input",i=>{i.target.value=i.target.value.replace(/\D/g,"").slice(0,6),i.target.value.length===6&&wa()})),document.getElementById("cancel-2fa-btn")?.addEventListener("click",async()=>{await g.auth.signOut(),A.user=null,Ee("login")}),document.getElementById("use-backup-btn")?.addEventListener("click",()=>{document.getElementById("backup-code-wrap")?.classList.toggle("hidden");const n=document.getElementById("backup-code");n&&n.focus()});const a=document.getElementById("verify-backup-btn");a&&!a._bound&&(a._bound=!0,a.addEventListener("click",En))}async function wa(){const e=document.getElementById("totp-code")?.value?.trim();if(!e||e.length!==6){q("Enter the 6-digit code from your authenticator app.");return}D("verify-2fa-btn",!0),_t();try{const{data:t}=await g.auth.mfa.listFactors(),a=(t?.totp||[])[0];if(!a){q("No 2FA factor found. Please re-login."),D("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In');return}const{data:i,error:n}=await g.auth.mfa.challenge({factorId:a.id});if(n)throw n;const{error:o}=await g.auth.mfa.verify({factorId:a.id,challengeId:i.id,code:e});if(o)throw o;await se(A.user.id,"login_2fa_success"),D("verify-2fa-btn",!1),kt()}catch(t){Ja(),q(t.message?.includes("Invalid")?"Incorrect code. Check your authenticator and try again.":t.message),D("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In'),document.getElementById("totp-code").value="",document.getElementById("totp-code").focus()}}async function En(){const e=document.getElementById("backup-code")?.value?.trim().toUpperCase().replace(/\s/g,"");if(!e){q("Enter a backup recovery code.");return}D("verify-backup-btn",!0);try{const{data:t}=await g.from("admin_2fa").select("backup_codes").eq("user_id",A.user.id).maybeSingle();if(!t?.backup_codes?.length){q("No backup codes found."),D("verify-backup-btn",!1,"Use Backup Code");return}if(!t.backup_codes.find(n=>(n.code||n).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")&&!n.used)){q("Backup code not found or already used."),D("verify-backup-btn",!1,"Use Backup Code");return}const i=t.backup_codes.map(n=>(n.code||n).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")?{...typeof n=="object"?n:{code:n},used:!0}:n);await g.from("admin_2fa").update({backup_codes:i}).eq("user_id",A.user.id),await se(A.user.id,"login_backup_code_used"),kt()}catch(t){q(t.message),D("verify-backup-btn",!1,"Use Backup Code")}}function ti(){document.getElementById("back-to-login")?.addEventListener("click",()=>Ee("login")),document.getElementById("send-reset-btn")?.addEventListener("click",An)}async function An(){const e=document.getElementById("reset-email"),t=tt(e?.value);if(!t){q("Enter your admin email address to receive a reset link.");return}D("send-reset-btn",!0),_t();const{error:a}=await g.auth.resetPasswordForEmail(t,{redirectTo:xn()});if(D("send-reset-btn",!1,'<i data-lucide="mail" class="w-4 h-4 inline mr-1"></i> Send Reset Link'),a){q(a.message);return}hn("Reset link sent! Check your inbox and open it from this device to continue.")}function In(){const e=document.getElementById("login-screen");if(!e)return;const t=e.querySelector(".login-card");t&&(t.innerHTML=`
    <div class="flex items-center gap-3 mb-6">
      <div class="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shrink-0"><i data-lucide="lock" class="w-5 h-5 text-white"></i></div>
      <div><h1 class="text-lg font-black text-white">Set New Password</h1><p class="text-[10px] text-blue-400 font-bold uppercase tracking-wider">Weverse Admin</p></div>
    </div>
    <div id="reset-pw-error" class="hidden mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs"></div>
    <div class="space-y-4">
      <div>
        <label class="lbl">New Password</label>
        <input type="password" id="new-pw-reset" class="input-field" placeholder="At least 8 characters" minlength="8">
      </div>
      <div>
        <label class="lbl">Confirm New Password</label>
        <input type="password" id="confirm-pw-reset" class="input-field" placeholder="Repeat password">
      </div>
      <button id="set-pw-btn" onclick="handlePasswordResetSubmit()" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2">
        <i data-lucide="check" class="w-4 h-4"></i> Set New Password
      </button>
    </div>`,window.lucide&&lucide.createIcons())}window.handlePasswordResetSubmit=async function(){const e=document.getElementById("new-pw-reset")?.value,t=document.getElementById("confirm-pw-reset")?.value,a=document.getElementById("reset-pw-error");if(e!==t){a&&(a.textContent="Passwords do not match.",a.classList.remove("hidden"));return}if((e||"").length<8){a&&(a.textContent="Password must be at least 8 characters.",a.classList.remove("hidden"));return}const{error:i}=await g.auth.updateUser({password:e});if(i){a&&(a.textContent=i.message,a.classList.remove("hidden"));return}m("Password updated! Please log in with your new password."),window.location.hash="",setTimeout(()=>window.location.reload(),1500)};function kt(){const e=document.getElementById("login-screen");e&&(e.style.display="none");const t=document.getElementById("admin-user-email");t&&A.user&&(t.textContent=A.user.email||"Admin"),na(),navigate("dashboard")}window.adminSignOut=async function(){A.user&&await se(A.user.id,"logout"),await g.auth.signOut(),A.user=null,gt(),Ee("login"),na(),ei(),ti()};window.logoutAllDevices=async function(){confirm("This will sign you out on ALL devices. Continue?")&&(A.user&&await se(A.user.id,"logout_all_devices"),await g.auth.signOut({scope:"global"}),A.user=null,m("Signed out from all devices."),setTimeout(()=>window.location.reload(),1200))};async function Cn(){const e=document.getElementById("content");try{const[t,a,i,n]=await Promise.all([g.from("showroom_listings").select("id,listing_type,is_active,price",{count:"exact"}),g.from("payment_receipts").select("id,order_number,amount,status,created_at",{count:"exact"}).order("created_at",{ascending:!1}).limit(200),g.from("profiles").select("user_id,created_at",{count:"exact"}),g.from("product_reviews").select("id,is_approved",{count:"exact"})]),o=t.data||[],r=a.data||[],d=r.filter(v=>["approved","payment_approved","delivered"].includes(v.status)).reduce((v,C)=>v+(parseFloat(C.amount)||0),0),s=r.filter(v=>["pending","pending_verification","processing"].includes(v.status)).length,c=o.filter(v=>v.listing_type!=="property").length,u=o.filter(v=>v.listing_type==="property").length,p=o.filter(v=>v.listing_type!=="property"&&v.is_active).length,y=i.count||0,h=n.count||0,b=(n.data||[]).filter(v=>!v.is_approved).length,f=new Date,x=r.filter(v=>{const C=new Date(v.created_at);return C.getMonth()===f.getMonth()&&C.getFullYear()===f.getFullYear()}).filter(v=>["approved","payment_approved","delivered"].includes(v.status)).reduce((v,C)=>v+(parseFloat(C.amount)||0),0),k=r.slice(0,6);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-black text-white">Good ${Rn()}, Admin</h2>
            <p class="text-sm text-gray-500 mt-0.5">${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</p>
          </div>
          <button onclick="navigate('products')" class="btn-press hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Product
          </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          ${G("Total Revenue",`$${d.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald",`$${x.toLocaleString("en-US",{maximumFractionDigits:0})} this month`)}
          ${G("Total Orders",r.length,"shopping-bag","blue",`${s} pending`)}
          ${G("Customers",y,"users","violet")}
          ${G("Products",c,"package","amber",`${p} active`)}
          ${G("Properties",u,"home","blue")}
          ${G("Reviews",h,"star","blue",`${b} pending`)}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="trending-up" class="w-4 h-4 text-blue-400"></i> Revenue Overview</h3>
            <canvas id="chart-revenue" height="200"></canvas>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-bold text-white flex items-center gap-2"><i data-lucide="clock" class="w-4 h-4 text-blue-400"></i> Recent Orders</h3>
              <button onclick="navigate('orders')" class="text-xs text-blue-400 hover:text-blue-300 font-medium transition">View all</button>
            </div>
            ${k.length===0?'<p class="text-xs text-gray-500 text-center py-8">No orders yet</p>':k.map(v=>`
                <div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
                  <div class="min-w-0">
                    <p class="text-xs font-bold text-white truncate">${l(v.order_number||v.id?.slice(0,8))}</p>
                    <p class="text-[10px] text-gray-500">${xe(v.created_at)}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0 ml-2">
                    <span class="text-xs font-bold text-emerald-400">$${parseFloat(v.amount||0).toLocaleString("en-US",{maximumFractionDigits:0})}</span>
                    ${Y(v.status)}
                  </div>
                </div>`).join("")}
          </div>
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="zap" class="w-4 h-4 text-amber-400"></i> Quick Actions</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            ${[{icon:"plus-circle",label:"Add Product",fn:"navigate('products')"},{icon:"home",label:"Add Property",fn:"navigate('properties')"},{icon:"shopping-bag",label:"View Orders",fn:"navigate('orders')"},{icon:"star",label:"Reviews",fn:"navigate('reviews')"},{icon:"ticket",label:"Coupons",fn:"navigate('coupons')"},{icon:"settings",label:"Settings",fn:"navigate('settings')"}].map(v=>`
              <button onclick="${v.fn}" class="btn-press flex flex-col items-center gap-2 p-3 glass-soft border border-blue-500/15 rounded-xl hover:border-blue-500/30 transition">
                <i data-lucide="${v.icon}" class="w-5 h-5 text-blue-400"></i>
                <span class="text-[11px] font-bold text-gray-300">${v.label}</span>
              </button>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),ni(r)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${l(t.message)}</div>`)}}async function S(){const e=document.getElementById("content");try{const{data:t,error:a}=await g.from("showroom_listings").select("*").neq("listing_type","property").order("created_at",{ascending:!1}),i=new Set,n=[];for(const c of a?[]:t||[])c&&c.property_id&&!i.has(c.property_id)&&(i.add(c.property_id),n.push(c));for(const c of wt().filter(u=>u.listing_type!=="property"))c&&c.property_id&&!i.has(c.property_id)&&(i.add(c.property_id),n.push(c));if(Array.isArray(ie))for(const c of ie.filter(u=>u.listing_type!=="property"&&u.property_id))i.has(c.property_id)||(i.add(c.property_id),n.push(c));const o=[...Ba,...Na,...Ra,...Da];for(const c of o)c&&c.property_id&&c.listing_type!=="property"&&!i.has(c.property_id)&&(i.add(c.property_id),n.push(c));n.sort((c,u)=>new Date(u.created_at||0)-new Date(c.created_at||0));try{await Zt()}catch{}const r=new Set(xt());if(r.size)for(let c=n.length-1;c>=0;c--)n[c]&&n[c].property_id&&r.has(n[c].property_id)&&n.splice(c,1);const d=[...new Set(n.map(c=>c.category).filter(Boolean))].sort((c,u)=>c.localeCompare(u)),s=[...new Set(n.flatMap(c=>Array.isArray(c.tags)?c.tags:[]).filter(Boolean))].sort((c,u)=>c.localeCompare(u));window._productFilters||(window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"}),window._productSelection||(window._productSelection=new Set),e.innerHTML=`
      <div class="space-y-5 fade-in">

        <div class="glass-soft border border-blue-500/20 rounded-2xl p-5 sm:p-6">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-blue-300/80">Product Showroom</p>
              <h2 class="text-3xl font-black text-white mt-1">Professional Product Showroom</h2>
              <p class="text-sm text-gray-400 mt-1">Unlimited products, smooth infinite scrolling layout, and clean auto-aligned cards.</p>
            </div>
            <div class="flex items-center gap-2.5 flex-wrap">
              <button onclick="showAddProductStep1()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-black px-6 py-3.5 rounded-2xl transition shadow-xl shadow-blue-700/25">
                <i data-lucide="plus" class="w-5 h-5"></i> Add Product
              </button>
              <button onclick="openGeneralAiScanner()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition shadow-xl shadow-violet-700/25" title="Scan product photos with AI â€” detect, analyze and add products to your manager">
                <i data-lucide="scan-search" class="w-5 h-5"></i> General AI Scanner
              </button>
              <button onclick="openGeneralAiScanner(true)" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition shadow-xl shadow-amber-700/25" title="Scan every product that has no price â€” AI reads the photo, fills the form and assigns a fair price automatically">
                <i data-lucide="dollar-sign" class="w-5 h-5"></i> Scan Missing Prices
              </button>
              <button onclick="clearAllProducts()" class="btn-press flex items-center justify-center gap-2 bg-rose-600/90 hover:bg-rose-500 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition" title="Delete every product from the manager & database. Your showroom catalog stays.">
                <i data-lucide="trash-2" class="w-5 h-5"></i> Clear All Products
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3">
          ${G("Total Products",n.length,"package","blue")}
          ${G("Published",n.filter(c=>!!c.is_active).length,"badge-check","emerald")}
          ${G("Draft / Hidden",n.filter(c=>!c.is_active).length,"file-clock","amber")}
          ${G("Featured",n.filter(c=>!!c.is_featured).length,"sparkles","violet")}
          ${G("Inventory Units",n.reduce((c,u)=>c+(parseInt(u.stock_quantity,10)||0),0),"boxes","blue")}
          ${G("Avg Price",`$${Math.round(n.reduce((c,u)=>c+(parseFloat(u.price)||0),0)/Math.max(n.length,1)).toLocaleString()}`,"dollar-sign","blue")}
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 sm:p-4 space-y-3">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-2.5">
            <div class="xl:col-span-2 relative">
              <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
              <input id="prod-search" type="search" class="input-field pl-9" placeholder="Search by name, SKU, brand, category..." value="${l(window._productFilters.search||"")}" oninput="filterProducts()">
            </div>
            <select id="prod-cat-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Categories</option>
              ${(d.length?d:we).map(c=>`<option value="${l(c)}" ${(window._productFilters.category||"")===c?"selected":""}>${l(c)}</option>`).join("")}
            </select>
            <select id="prod-tag-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Tags</option>
              ${s.map(c=>`<option value="${l(c)}" ${(window._productFilters.tag||"")===c?"selected":""}>${l(c)}</option>`).join("")}
            </select>
            <select id="prod-status-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Status</option>
              <option value="active" ${(window._productFilters.status||"")==="active"?"selected":""}>Published</option>
              <option value="inactive" ${(window._productFilters.status||"")==="inactive"?"selected":""}>Unpublished</option>
              <option value="archived" ${(window._productFilters.status||"")==="archived"?"selected":""}>Archived</option>
            </select>
            <select id="prod-featured-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Visibility</option>
              <option value="featured" ${(window._productFilters.featured||"")==="featured"?"selected":""}>Featured</option>
              <option value="standard" ${(window._productFilters.featured||"")==="standard"?"selected":""}>Standard</option>
            </select>
            <select id="prod-sort" class="input-field" onchange="filterProducts()">
              <option value="newest" ${(window._productFilters.sort||"")==="newest"?"selected":""}>Newest</option>
              <option value="oldest" ${(window._productFilters.sort||"")==="oldest"?"selected":""}>Oldest</option>
              <option value="price-high" ${(window._productFilters.sort||"")==="price-high"?"selected":""}>Price: High to Low</option>
              <option value="price-low" ${(window._productFilters.sort||"")==="price-low"?"selected":""}>Price: Low to High</option>
              <option value="sales-high" ${(window._productFilters.sort||"")==="sales-high"?"selected":""}>Sales: High to Low</option>
              <option value="views-high" ${(window._productFilters.sort||"")==="views-high"?"selected":""}>Views: High to Low</option>
            </select>
          </div>

<div class="flex flex-wrap items-center gap-2.5">
            <button onclick="toggleSelectAllProducts(true)" class="btn-press px-4 py-2.5 text-sm font-bold rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-300 hover:bg-blue-500/15 transition">Select Visible</button>
            <button onclick="toggleSelectAllProducts(false)" class="btn-press px-4 py-2.5 text-sm font-bold rounded-xl border border-gray-500/20 bg-gray-500/10 text-gray-300 hover:bg-gray-500/15 transition">Clear Selection</button>
            <button onclick="resetProductFilters()" class="btn-press px-4 py-2.5 text-sm font-bold rounded-xl border border-gray-500/20 bg-transparent text-gray-300 hover:bg-white/5 transition">Reset Filters</button>
            <div class="ml-auto flex items-center gap-1.5">
              <span class="text-sm text-gray-400">View:</span>
<button onclick="setProductView('card')" id="view-card-btn" class="view-toggle ${!window._productView||window._productView==="card"?"active":""}"><i data-lucide="layout-grid" class="w-4 h-4"></i> Cards</button>
              <button onclick="setProductView('table')" id="view-table-btn" class="view-toggle ${window._productView==="table"?"active":""}"><i data-lucide="table" class="w-4 h-4"></i> Table</button>
            </div>
            <span class="text-sm text-gray-400 ml-2"><span id="products-result-count">0</span> shown</span>
          </div>
        </div>

        <div id="bulk-actions" class="hidden items-center gap-2.5 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
          <span id="bulk-count" class="text-sm font-bold text-blue-300">0 selected</span>
          <button onclick="bulkToggleActive(true)" class="btn-press text-sm font-bold text-emerald-300 hover:text-emerald-200 px-4 py-2.5 rounded-xl bg-emerald-500/15 transition">Publish</button>
          <button onclick="bulkToggleActive(false)" class="btn-press text-sm font-bold text-amber-300 hover:text-amber-200 px-4 py-2.5 rounded-xl bg-amber-500/15 transition">Unpublish</button>
          <button onclick="bulkDuplicateProducts()" class="btn-press text-sm font-bold text-gray-200 hover:text-white px-4 py-2.5 rounded-xl bg-white/10 transition">Duplicate</button>
          <button onclick="bulkArchive()" class="btn-press text-sm font-bold text-red-300 hover:text-red-200 px-4 py-2.5 rounded-xl bg-red-500/15 transition">Archive</button>
          <button onclick="bulkDeleteProducts()" class="btn-press text-sm font-bold text-red-200 hover:text-white px-4 py-2.5 rounded-xl bg-red-600/20 transition">Delete</button>
        </div>

<div class="space-y-4">
          <div id="products-grid" class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 items-stretch"></div>
          <div id="products-more" class="flex justify-center pt-1"></div>
          <div id="products-table-wrap" class="hidden overflow-x-auto scrollbar-thin rounded-2xl border border-blue-500/15">
            <table class="w-full dt">
              <thead><tr>
                <th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th><th>Date</th><th>Actions</th>
              </tr></thead>
              <tbody id="products-table-body"></tbody>
            </table>
          </div>
          <div id="products-empty" class="hidden">${Se("package-search","No matching products","Try different filters or add a new product.",'<button onclick="showAddProductStep1()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl">Add Product</button>')}</div>
          <div class="text-center text-[11px] text-gray-500 py-2">Scroll to explore all products. Layout auto-rearranges as products are added, edited, moved, or removed.</div>
        </div>
      </div>`,window._productsData=n,window._productsCardLimit=60,ai(n),filterProducts(),updateBulkBar(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${l(t.message)}</div>`)}}function fe(e){const t=parseFloat(e);return Number.isFinite(t)?t:0}function Ft(e){return Array.isArray(e.tags)?e.tags.filter(Boolean):[]}function Tn(e){const t=fe(e.price),a=parseFloat(e.real_price);if(Number.isFinite(a)&&a>0&&a>t)return`${Math.round((1-t/a)*100)}% OFF`;const i=parseFloat(e.discount_percent??e.discount??0);return Number.isFinite(i)&&i>0?`${Math.round(i)}% OFF`:"No discount"}function Ln(e){const t=fe(e.price),a=parseFloat(e.real_price),i=`$${t.toLocaleString()}`;return Number.isFinite(a)&&a>0&&a>t?`<span class="block text-xs text-gray-400 price-strike line-through">$${a.toLocaleString()}</span><span class="text-emerald-300 font-black">$${t.toLocaleString()}</span>`:i}function ra(e){return e.is_archived||e.availability_status==="Archived"?"archived":e.is_active?"active":"inactive"}function Ut(e){return parseInt(e.views??e.view_count??0,10)||0}function Ot(e){return parseInt(e.sales??e.sales_count??0,10)||0}function sa(e){return e.sku||e.property_id||"N/A"}function Mn(e){const t=e.images&&e.images[0]?e.images[0]:"/fallback.svg",a=Ft(e),i=ra(e),n=window._productSelection?.has(e.property_id),o=Y(i==="archived"?"inactive":i==="active"?"active":"inactive"),r=ne(e.created_at),d=!!e.is_featured,s=e.is_active?`unpublishProduct('${e.property_id}')`:`publishProduct('${e.property_id}')`,c=e.is_active?"Unpublish":"Publish",u=e.is_active?"bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25";return`<article data-id="${e.property_id}" data-cat="${l(e.category||"")}" data-status="${i}" data-featured="${d?"featured":"standard"}" onclick="editProduct('${e.property_id}')" title="Tap anywhere to edit this product" class="prod-card glass-soft border ${n?"border-blue-400/60":"border-blue-500/15"} rounded-3xl p-5 flex flex-col gap-4 transition hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer select-none active:scale-[.99]">
    <div class="flex items-start gap-4">
      <input type="checkbox" class="prod-check accent-blue-500 w-5 h-5 mt-1 shrink-0" value="${e.property_id}" ${n?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${e.property_id}', this.checked)">
      <div class="relative w-24 h-24 rounded-2xl overflow-hidden border border-blue-500/20 shrink-0 bg-[#0b1124]">
        <img src="${l(t)}" alt="${l(e.title||"Product")}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'">
        ${d?'<span class="absolute top-1.5 left-1.5 text-[10px] font-black px-2 py-0.5 rounded-lg bg-amber-400 text-[#111827]">Featured</span>':""}
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="text-lg font-black text-white leading-snug line-clamp-2">${l(e.title||"Untitled Product")}</h3>
        <p class="text-xs text-gray-500 font-mono mt-1">SKU: ${l(sa(e))}</p>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          ${o}
          <span class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20">${l(e.category||"Uncategorized")}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2.5 text-sm">
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5">
        <span class="text-gray-400 text-xs">Price</span>
        <p class="text-emerald-300 font-black text-base">
          ${Ln(e)}
        </p>
      </div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Discount</span><p class="text-amber-300 font-bold">${l(Tn(e))}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Stock</span><p class="text-gray-200 font-bold">${e.stock_quantity!=null?l(e.stock_quantity):"Unlimited"}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Brand</span><p class="text-gray-200 font-bold truncate">${l(e.brand||"N/A")}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Views</span><p class="text-blue-300 font-bold">${Ut(e).toLocaleString()}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Sales</span><p class="text-cyan-300 font-bold">${Ot(e).toLocaleString()}</p></div>
    </div>

    <div class="flex items-center justify-between text-xs text-gray-500 border-t border-blue-500/10 pt-3">
      <span>Date Added: ${l(r)}</span>
      <span>${(e.images||[]).length} images</span>
    </div>

    <div class="flex flex-wrap gap-2 mt-auto">
      <button onclick="event.stopPropagation();editProduct('${e.property_id}')" class="btn-press flex-1 min-w-[9.5rem] px-5 py-3.5 rounded-2xl text-sm font-black bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition shadow-lg shadow-blue-600/15">Edit Product</button>
      <button onclick="event.stopPropagation();quickEditProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-indigo-500/15 text-indigo-200 hover:bg-indigo-500/25 transition">Quick Edit</button>
      <button onclick="event.stopPropagation();previewProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-sky-500/15 text-sky-200 hover:bg-sky-500/25 transition">Preview</button>
      <button onclick="event.stopPropagation();${s}" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold ${u} transition">${c}</button>
      <button onclick="event.stopPropagation();duplicateProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-white/10 text-gray-200 hover:bg-white/20 transition">Duplicate</button>
      <button onclick="event.stopPropagation();archiveProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-red-500/15 text-red-200 hover:bg-red-500/25 transition">Archive</button>
      <button onclick="event.stopPropagation();shareProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-violet-500/15 text-violet-200 hover:bg-violet-500/25 transition">Share</button>
      <button onclick="event.stopPropagation();deleteProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-rose-600/15 text-rose-200 hover:bg-rose-600/25 transition">Delete</button>
      <button onclick="event.stopPropagation();openProductMoreActions('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-gray-600/20 text-gray-200 hover:bg-gray-600/35 transition">More</button>
    </div>

    ${a.length?`<div class="flex flex-wrap gap-1.5">${a.slice(0,6).map(p=>`<span class="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200">${l(p)}</span>`).join("")}</div>`:'<div class="text-xs text-gray-500">No tags</div>'}
  </article>`}function Bn(e,t){const a=[...e],i=n=>new Date(n||0).getTime()||0;return t==="oldest"?a.sort((n,o)=>i(n.created_at)-i(o.created_at)):t==="price-high"?a.sort((n,o)=>fe(o.price)-fe(n.price)):t==="price-low"?a.sort((n,o)=>fe(n.price)-fe(o.price)):t==="sales-high"?a.sort((n,o)=>Ot(o)-Ot(n)):t==="views-high"?a.sort((n,o)=>Ut(o)-Ut(n)):a.sort((n,o)=>i(o.created_at)-i(n.created_at)),a}function ai(e){const t=document.getElementById("products-grid"),a=document.getElementById("products-empty"),i=document.getElementById("products-result-count");if(!t)return;const n=window._productsCardLimit||60,o=e.slice(0,n);t.innerHTML=o.map(Mn).join(""),i&&(i.textContent=String(e.length));const r=document.getElementById("products-more");if(r){const d=e.length-o.length;d>0?r.innerHTML=`<button onclick="loadMoreProducts()" class="btn-press px-8 py-4 rounded-2xl text-base font-black bg-blue-500/15 text-blue-200 hover:bg-blue-500/25 border border-blue-500/25 transition">Show ${Math.min(60,d)} more (${d} left)</button>`:r.innerHTML=e.length>60?'<span class="text-sm text-gray-500">All products shown</span>':""}a&&a.classList.toggle("hidden",e.length>0),updateBulkBar(),window.lucide&&lucide.createIcons()}window.loadMoreProducts=function(){window._productsCardLimit=(window._productsCardLimit||60)+60,filterProducts(!0)};function ii(e){const t=document.getElementById("products-table-body"),a=document.getElementById("products-result-count");t&&(t.innerHTML=e.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-10">No products found.</td></tr>':e.map(i=>{const n=i.images&&i.images[0]?i.images[0]:"/fallback.svg",o=ra(i),r=window._productSelection?.has(i.property_id),d=i.is_active?`unpublishProduct('${i.property_id}')`:`publishProduct('${i.property_id}')`,s=i.is_active?"Unpublish":"Publish";return`<tr class="prod-table-row" data-id="${i.property_id}" style="cursor:pointer">
          <td>
            <div class="flex items-center gap-2.5" onclick="editProduct('${i.property_id}')">
              <input type="checkbox" class="prod-check accent-blue-500" value="${i.property_id}" ${r?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${i.property_id}', this.checked)">
              <img src="${l(n)}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
              <div class="min-w-0">
                <p class="text-xs font-bold text-white truncate max-w-[160px]">${l(i.title||"Untitled Product")}</p>
                <p class="text-[10px] font-mono text-gray-500">${l(sa(i))}</p>
              </div>
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${l(i.category||"Uncategorized")}</span></td>
          <td>
            <div class="text-xs">
              ${(()=>{const c=fe(i.price),u=parseFloat(i.real_price);return Number.isFinite(u)&&u>0&&u>c?`<span class="text-[10px] text-gray-500 price-strike line-through block">$${u.toLocaleString()}</span><span class="font-bold text-emerald-400">$${c.toLocaleString()}</span>`:`<span class="font-bold text-emerald-400">$${c.toLocaleString()}</span>`})()}
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${i.stock_quantity!=null?l(i.stock_quantity):"Unlimited"}</span></td>
          <td>${Y(o==="archived"?"inactive":o==="active"?"active":"inactive")}</td>
          <td><span class="text-xs text-gray-500">${ne(i.created_at)}</span></td>
          <td>
            <div class="flex gap-1">
              <button onclick="editProduct('${i.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
              <button onclick="quickEditProduct('${i.property_id}')" class="btn-press p-1.5 text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition" title="Quick Edit"><i data-lucide="sliders-horizontal" class="w-3.5 h-3.5"></i></button>
              <button onclick="${d}" class="btn-press p-1.5 ${i.is_active?"text-amber-400 hover:bg-amber-500/10":"text-emerald-400 hover:bg-emerald-500/10"} rounded-lg transition" title="${s}"><i data-lucide="${i.is_active?"eye-off":"eye"}" class="w-3.5 h-3.5"></i></button>
              <button onclick="archiveProduct('${i.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Archive"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
            </div>
          </td>
        </tr>`}).join(""),a&&(a.textContent=String(e.length)),window.lucide&&lucide.createIcons())}window.setProductView=function(e){window._productView=e==="table"?"table":"card";const t=document.getElementById("products-grid"),a=document.getElementById("products-table-wrap"),i=document.getElementById("view-card-btn"),n=document.getElementById("view-table-btn"),o=document.getElementById("products-empty"),r=window._productsData||[];t&&t.classList.toggle("hidden",e==="table"),a&&(a.classList.toggle("hidden",e!=="table"),e==="table"&&ii(r)),i&&i.classList.toggle("active",e!=="table"),n&&n.classList.toggle("active",e==="table"),o&&o.classList.toggle("hidden",r.length>0)};window.filterProducts=function(e){const t=window._productFilters||{};t.search=(document.getElementById("prod-search")?.value||"").trim().toLowerCase(),t.category=document.getElementById("prod-cat-filter")?.value||"",t.tag=document.getElementById("prod-tag-filter")?.value||"",t.status=document.getElementById("prod-status-filter")?.value||"",t.featured=document.getElementById("prod-featured-filter")?.value||"",t.sort=document.getElementById("prod-sort")?.value||"newest",window._productFilters=t;const a=(window._productsData||[]).filter(n=>{const o=[n.title,n.brand,n.category,sa(n),Ft(n).join(" "),n.description].join(" ").toLowerCase();return!(t.search&&!o.includes(t.search)||t.category&&(n.category||"")!==t.category||t.tag&&!Ft(n).includes(t.tag)||t.status&&ra(n)!==t.status||t.featured&&t.featured==="featured"!=!!n.is_featured)}),i=Bn(a,t.sort);e||(window._productsCardLimit=60),ai(i),window._productView==="table"&&ii(i)};window.resetProductFilters=function(){window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"},["prod-search","prod-cat-filter","prod-tag-filter","prod-status-filter","prod-featured-filter","prod-sort"].forEach(t=>{const a=document.getElementById(t);a&&(t==="prod-sort"?a.value="newest":a.value="")}),filterProducts()};window.toggleProductSelection=function(e,t){window._productSelection||(window._productSelection=new Set),t?window._productSelection.add(e):window._productSelection.delete(e),updateBulkBar()};window.toggleSelectAll=function(e,t){document.querySelectorAll("."+t).forEach(a=>{a.checked=e.checked;const i=a.value;window._productSelection||(window._productSelection=new Set),e.checked?window._productSelection.add(i):window._productSelection.delete(i)}),updateBulkBar()};window.toggleSelectAllProducts=function(e){document.querySelectorAll(".prod-check").forEach(t=>{t.checked=!!e,window._productSelection||(window._productSelection=new Set),e?window._productSelection.add(t.value):window._productSelection.delete(t.value)}),updateBulkBar()};window.updateBulkBar=function(){const e=window._productSelection?window._productSelection.size:0,t=document.getElementById("bulk-actions"),a=document.getElementById("bulk-count");t&&(t.classList.toggle("hidden",e===0),e>0&&t.classList.add("flex")),a&&(a.textContent=`${e} selected`)};function St(){return window._productSelection?[...window._productSelection]:[]}function X(e){const t=String(e?.message||e?.code||"").toLowerCase();return t.includes("row-level security")||t.includes("permission denied")||t.includes("permission denied for table")||t.includes("new row violates row-level security")||t.includes("not permitted")||t.includes("rls policy")}function Nn(e,t,a){return e&&X(e)?(m(`âš ï¸ ${a} blocked: Your account is signed in but the database admin role is not active. Re-run the admin permission migration, or contact the owner.`,"error"),!0):e?(t&&t(),m(`${a} saved locally (DB unavailable): ${e.message||"unknown error"}`,"info"),!0):!1}function Bt(e,t){if(!e)return`${t} failed for an unknown reason. Please try again.`;const a=String(e.message||""),i=e.code||"";return X(e)?`${t} was BLOCKED: your account is signed in but the database admin role is not active. Re-run the admin permission migration (or contact the owner), then press Publish again.`:String(i)==="401"||/jwt|token|not authenticated|unauthorized|invalid api key/i.test(a)?`${t} failed: your sign-in session expired or is invalid. Please sign out and sign back in, then try again. Your changes are still in the form.`:String(i)==="23505"||/duplicate key|unique constraint/i.test(a)?`${t} failed: a duplicate-record conflict occurred in the database. Refresh the page and try again.`:String(i)==="23503"||/foreign key/i.test(a)?`${t} failed: the database rejected a reference (foreign key). Refresh the page, re-open the product and try again.`:String(i)==="42P01"||/column .* does not exist|relation .* does not exist/i.test(a)?`${t} failed: the database schema is out of date. Run the latest database migration, then try again.`:String(i)==="23502"||/null value in column .* violates/i.test(a)?`${t} failed: a required field was rejected by the database. Fill in every required field, then try again.`:/failed to fetch|networkerror|network request|fetch failed|load failed|offline|ERR_NAME|ERR_CONNECTION|timeout/i.test(a)?`${t} failed: no connection to the server. Check your internet connection and press Publish again. Your changes are still in the form.`:String(i)==="42501"||/permission denied|row-level security/i.test(a)?`${t} was BLOCKED by database permissions. Re-run the admin permission migration (or contact the owner), then try again.`:/rate limit|too many requests/i.test(a)?`${t} failed: too many requests were sent at once. Wait a few seconds and press Publish again.`:`${t} failed: ${a||"an unexpected database error occurred"}. Nothing was saved — your changes are still in the form, so you can press Publish again.`}async function xa(e){try{let{data:{session:a}}=await g.auth.getSession();if(!a){const{data:o}=await g.auth.getSession();a=o?.session}if(!a)return{error:new Error("Your sign-in session has expired. Please sign out and sign back in, then press Publish again.")};const{data:{user:i},error:n}=await g.auth.getUser();if(n||!i)return{error:new Error("Your sign-in session is invalid. Please sign out and sign back in, then press Publish again.")}}catch(a){return console.error("[safePublishShowroom] Auth check failed:",a),{error:new Error("Could not verify your sign-in status. Check your internet connection and try again.")}}const t={...e,updated_at:new Date().toISOString()};if(t.property_id){const{error:a}=await g.from("showroom_listings").upsert(t,{onConflict:"property_id"});if(!a)return{error:null};console.warn("[safePublishShowroom] Direct upsert failed, trying RPC fallback:",a?.message||a)}else{const{error:a}=await g.from("showroom_listings").insert(t);if(!a)return{error:null};console.warn("[safePublishShowroom] Direct insert failed, trying RPC fallback:",a?.message||a)}try{const a={...t};delete a.id;const{data:i,error:n}=await g.rpc("publish_showroom_upsert",{p_data:[a]});return n?(console.error("[safePublishShowroom] RPC fallback also failed:",n),{error:new Error(`Database write failed: ${n.message||"unknown error"}. Your changes are preserved in the form — please try again.`)}):(console.log("[safePublishShowroom] RPC fallback succeeded, rows affected:",i),{error:null})}catch(a){return console.error("[safePublishShowroom] RPC exception:",a),{error:new Error(`Database write failed: ${a.message||"network error"}. Your changes are preserved in the form — please try again.`)}}}window.bulkToggleActive=async function(e){const t=St();if(!t.length)return;const a=await Promise.all(t.map(o=>{const r=ve((window._productsData||[]).find(d=>d.property_id===o));return g.from("showroom_listings").upsert({...r,property_id:o,is_active:e},{onConflict:"property_id"})}));if(a.some(o=>o.error&&X(o.error))){m(`âš ï¸ ${t.length} products NOT ${e?"published":"unpublished"}: database admin role blocked the write. Re-run the admin permission migration.`,"error"),window._productSelection=new Set,S();return}const n=a.filter(o=>o.error).length;m(`${t.length-n}/${t.length} products ${e?"published":"unpublished"}${n?` (${n} failed: ${a.find(o=>o.error)?.error?.message||"error"})`:""}`,n?"error":"success"),window._productSelection=new Set,S()};window.bulkDuplicateProducts=async function(){const e=St();if(e.length){for(const t of e)await duplicateProduct(t,!0);m(`${e.length} products duplicated`),window._productSelection=new Set,S()}};window.bulkArchive=async function(){const e=St();if(!e.length||!confirm(`Archive ${e.length} products? They will be hidden but not deleted.`))return;const t=await Promise.all(e.map(n=>g.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",n)));if(t.some(n=>n.error&&X(n.error))){m("âš ï¸ Archive blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,S();return}const i=t.filter(n=>n.error).length;m(`${e.length-i}/${e.length} products archived${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,S()};window.bulkDeleteProducts=async function(){const e=St();if(!e.length||!confirm(`Delete ${e.length} products permanently? This action cannot be undone.`))return;const t=await Promise.all(e.map(n=>g.from("showroom_listings").delete().eq("property_id",n)));if(t.some(n=>n.error&&X(n.error))){m("âš ï¸ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,S();return}const i=t.filter(n=>n.error).length;m(`${e.length-i}/${e.length} products deleted${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,S()};window.previewProduct=async function(e){const t=await g.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(i=>i.property_id===e)||t.data;if(!a)return m("Product not found","error");U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Product Live Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="space-y-2">
            <img src="${l((a.images||[])[0]||"/fallback.svg")}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
            <div class="flex flex-wrap gap-2">${(a.images||[]).slice(0,8).map(i=>`<img src="${l(i)}" class="w-12 h-12 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">`).join("")}</div>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-black text-white">${l(a.title||"Untitled Product")}</h4>
            <div class="flex items-center gap-2">${Y(a.is_active?"active":"inactive")}${a.is_featured?'<span class="badge bg-amber-500/15 text-amber-200 border-amber-500/30">Featured</span>':""}</div>
            <p class="text-xs text-gray-400">${l(a.description||"No description")}</p>
            <div class="grid grid-cols-2 gap-2 text-xs mt-2">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${fe(a.price).toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${a.stock_quantity!=null?l(a.stock_quantity):"Unlimited"}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${l(a.brand||"N/A")}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Category</span><p class="text-gray-200 font-bold">${l(a.category||"N/A")}</p></div>
            </div>
            <div class="pt-2 flex gap-2">
              <button onclick="editProduct('${a.property_id}');closeModal();" class="btn-press px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl">Edit</button>
              <button onclick="shareProduct('${a.property_id}')" class="btn-press px-3 py-2 bg-violet-600/70 hover:bg-violet-500 text-white text-xs font-bold rounded-xl">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.quickEditProduct=async function(e){const t=await g.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(n=>n.property_id===e)||t.data;if(!a)return m("Product not found","error");const i=Array.isArray(a.images)?a.images:[];U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-black text-white">Quick Edit Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">Back</button>
        </div>
        <form onsubmit="saveQuickEditProduct(event,'${a.property_id}')" class="space-y-4">
          <div><label class="lbl">Title</label><input name="title" class="input-field" value="${l(a.title||"")}"></div>
          <div class="grid grid-cols-2 gap-3">
            <div><label class="lbl">Real Price</label><input type="number" step="0.01" name="real_price" class="input-field" value="${l(a.real_price??a.specifications?.real_price??"")}" placeholder="Original price (crossed out)"></div>
            <div><label class="lbl">Discount Price</label><input type="number" step="0.01" name="price" class="input-field" value="${l(a.price||0)}" placeholder="Price customers pay"></div>
          </div>
          <div><label class="lbl">Availability</label><select name="availability_status" class="input-field">${["In Stock","Out of Stock","Pre-order","Limited Stock","Archived"].map(n=>`<option value="${n}" ${a.availability_status===n?"selected":""}>${n}</option>`).join("")}</select></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Featured</span><input type="checkbox" name="is_featured" ${a.is_featured?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Published</span><input type="checkbox" name="is_active" ${a.is_active?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div>
            <label class="lbl">Gallery Images & Videos (up to 24)</label>
            <div id="drop-zone" class="drop-zone" onclick="pickMediaForForm('img-upload')">
              <i data-lucide="image-plus" class="w-10 h-10 text-blue-400 mx-auto mb-2"></i>
              <p class="text-base font-bold text-gray-300">Tap to add photos or videos (up to 24)</p>
              <p class="text-sm text-gray-500 mt-1">PNG, JPG, WEBP, MP4, WebM. First item is the cover.</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*,video/mp4,video/webm,video/*,application/pdf" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${i.map((n,o)=>Ae(n,o)).join("")}
            </div>
            <div id="image-url-inputs">${i.map((n,o)=>`<input type="hidden" name="images" id="img-url-${o}" value="${l(n)}">`).join("")}</div>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
          </div>
          <button type="submit" class="btn-press w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-base font-bold">Save Quick Edit</button>
        </form>
      </div>
    </div>`),la(),da(),Oe(),Ie(),window.lucide&&lucide.createIcons()};window.saveQuickEditProduct=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=[...document.querySelectorAll("#image-preview .img-thumb")].map(u=>u.dataset.url||(u.querySelector("img")?u.querySelector("img").getAttribute("src"):"")).filter(u=>u&&!String(u).startsWith("blob:")),n={title:a.get("title")||"Untitled Product",price:Math.max(N,Math.min(Q,parseFloat(a.get("price"))||0)),stock_quantity:a.get("stock_quantity")===""?null:parseInt(a.get("stock_quantity"),10),availability_status:a.get("availability_status")||"In Stock",is_featured:a.get("is_featured")==="on",is_active:a.get("is_active")==="on"||i.length>=24,images:i},o=String(a.get("real_price")||"").trim(),r=o===""?null:parseFloat(o);if(r!=null&&!Number.isFinite(r)){m("Real Price must be a number.","error");return}const d=ve((window._productsData||[]).find(u=>u.property_id===t)),s=d.specifications&&typeof d.specifications=="object"?d.specifications:{};n.specifications={...s,real_price:r!=null&&r>0?Math.round(r):null};const{error:c}=await g.from("showroom_listings").upsert({...d,...n,property_id:t},{onConflict:"property_id"});if(c){if(X(c)){m("âš ï¸ Save blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),ce(),S();return}Nt(t,n),m("Quick edit saved locally","info")}else m(n.is_active?"Saved & published â€” your showroom shows it now":"Quick edit saved (draft)");ce(),S()};window.publishProduct=function(e){return toggleProductActive(e,!0)};window.unpublishProduct=function(e){return toggleProductActive(e,!1)};window.shareProduct=async function(e){const t=`${window.location.origin}/details.html?id=${encodeURIComponent(e)}`;try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(t),m("Product link copied to clipboard");return}}catch{}window.prompt("Copy product link:",t)};window.deleteProduct=async function(e){if(!confirm("Delete this product permanently? This action cannot be undone."))return;const t=(window._productsData||[]).find(i=>i.property_id===e)||(window._propertiesData||[]).find(i=>i.property_id===e)||Ye(e),{error:a}=await g.from("showroom_listings").delete().eq("property_id",e);if(a&&!X(a))return m("Delete failed: "+a.message,"error");Ze(e);try{const i=await Fe(e,!0);i&&i.error&&X(i.error)?m("âš ï¸ Deleted, but the site-wide hidden list could not be saved: database admin role rejected the write. Re-run the admin permission migration.","error"):m("Product deleted")}catch{m("Product deleted")}t&&t.listing_type==="property"?Pt():S()};window.clearAllProducts=async function(){const e=(window._productsData||[]).length;if(!confirm(`Delete ALL ${e} product(s) from the Product Manager and the database now?

This is permanent and cannot be undone. Your built-in showroom catalog will stay.`))return;const{error:t}=await g.from("showroom_listings").delete().neq("property_id","__none__");if(t)return X(t)?m("âš ï¸ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"):m("Clear failed: "+t.message,"error");try{localStorage.removeItem("kco_local_showroom_listings_v1")}catch{}m("All products deleted. The manager now shows your showroom catalog."),S()};window.openProductMoreActions=function(e){U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">More Actions</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="grid grid-cols-1 gap-2">
          <button onclick="previewProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Live Preview</button>
          <button onclick="quickEditProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Quick Edit</button>
          <button onclick="duplicateProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Duplicate</button>
          <button onclick="archiveProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-sm font-semibold text-red-200">Archive</button>
        </div>
      </div>
    </div>`)};function Rn(){const e=new Date().getHours();return e<12?"morning":e<17?"afternoon":"evening"}function ni(e){const t=document.getElementById("chart-revenue");if(!t)return;const a=[],i=new Date;for(let o=5;o>=0;o--){const r=new Date(i.getFullYear(),i.getMonth()-o,1);a.push({label:r.toLocaleString("default",{month:"short"}),month:r.getMonth(),year:r.getFullYear()})}const n=a.map(o=>e.filter(r=>{const d=new Date(r.created_at);return d.getMonth()===o.month&&d.getFullYear()===o.year&&["approved","payment_approved","delivered"].includes(r.status)}).reduce((r,d)=>r+(parseFloat(d.amount)||0),0));new Chart(t,{type:"bar",data:{labels:a.map(o=>o.label),datasets:[{label:"Revenue (USD)",data:n,backgroundColor:"rgba(59,130,246,.6)",borderColor:"rgb(59,130,246)",borderWidth:1,borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"#64748b",callback:o=>"$"+o.toLocaleString()},grid:{color:"rgba(59,130,246,.05)"}},x:{ticks:{color:"#64748b"},grid:{display:!1}}}}})}const we=Oi.map(e=>e.name),oi=qi,M={default:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Phones:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"storage",label:"Storage (e.g. 128GB)",type:"text"},{key:"ram",label:"RAM (e.g. 8GB)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],"Computers & Laptops":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"processor",label:"Processor (CPU)",type:"text"},{key:"ram",label:"RAM",type:"text"},{key:"storage",label:"Storage",type:"text"},{key:"display",label:"Display Size",type:"text"},{key:"graphics",label:"Graphics Card",type:"text"},{key:"os",label:"Operating System",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Electronics:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model Number",type:"text"},{key:"color",label:"Color",type:"text"},{key:"voltage",label:"Voltage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Shoes:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Jewelry:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"material",label:"Material (e.g. 14k Gold)",type:"text"},{key:"gemstone",label:"Gemstone",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Watches:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"movement",label:"Movement (Quartz/Automatic)",type:"text"},{key:"case_material",label:"Case Material",type:"text"},{key:"water_resistance",label:"Water Resistance",type:"text"},{key:"color",label:"Dial Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"description",label:"Description",type:"textarea",span:2}],Gaming:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"platform",label:"Platform (PS5, Xbox, PCâ€¦)",type:"text"},{key:"model",label:"Game / Model",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],"Sports & Fitness":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]};["Men's Fashion","Women's Fashion","Fashion"].forEach(e=>M[e]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (T-Shirt, Dressâ€¦)",type:"text"},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]);M["Bags & Accessories"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Handbag, Backpack, Luggageâ€¦)",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"material",label:"Material (e.g. Leather)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];M["Beauty & Skincare"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Serum, Cream, Makeupâ€¦)",type:"text"},{key:"size",label:"Size (ml / g)",type:"text"},{key:"skin_type",label:"Skin Type",type:"text"},{key:"ingredients",label:"Key Ingredients",type:"text"},{key:"color",label:"Color / Shade",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Home & Kitchen"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"type",label:"Type (Appliance, Cookware, Decorâ€¦)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"voltage",label:"Voltage / Power",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];M.Furniture=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Sofa, Table, Chairâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"assembly",label:"Assembly Required",type:"select",options:["","Yes","No"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];M["Garden & Outdoor"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Mower, Grill, Furnitureâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"weatherproof",label:"Weatherproof",type:"select",options:["","Yes","No"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Toys & Games"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model / Set Name",type:"text"},{key:"age_range",label:"Age Range",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Food & Groceries"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Snack, Beverage, Pantryâ€¦)",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"shelf_life",label:"Shelf Life",type:"text"},{key:"storage",label:"Storage Instructions",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","New (Sealed)","Open Box"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Baby & Kids"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Stroller, Clothing, Toyâ€¦)",type:"text"},{key:"age_range",label:"Age Range",type:"text"},{key:"size",label:"Size",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];M["Health & Medical"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Device, Supplement, Careâ€¦)",type:"text"},{key:"size",label:"Size / Quantity",type:"text"},{key:"usage",label:"Usage / Dosage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];M["Books & Education"]=[{key:"title",label:"Title / Book Name",type:"text",required:!0,span:2},{key:"author",label:"Author",type:"text"},{key:"publisher",label:"Publisher",type:"text"},{key:"language",label:"Language",type:"text"},{key:"format",label:"Format (Hardcover, Paperback, E-book)",type:"text"},{key:"isbn",label:"ISBN",type:"text"},{key:"pages",label:"Pages",type:"text"},{key:"edition",label:"Edition",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Like New","Very Good","Good","Fair"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Office & Stationery"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Notebook, Pen, Printerâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"quantity",label:"Quantity / Pack Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Pet Supplies"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Food, Toy, Bed, Collarâ€¦)",type:"text"},{key:"pet_type",label:"Pet Type (Dog, Cat, Birdâ€¦)",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Musical Instruments"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"type",label:"Type (Guitar, Piano, Drumsâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color / Finish",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];M["Cameras & Photography"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"lens",label:"Lens",type:"text"},{key:"sensor",label:"Sensor",type:"text"},{key:"megapixels",label:"Megapixels",type:"text"},{key:"video",label:"Video Recording",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];M["Software & Digital"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand / Developer",type:"text"},{key:"type",label:"Type (Software, App, Licenseâ€¦)",type:"text"},{key:"platform",label:"Platform",type:"text"},{key:"license",label:"License Type",type:"text"},{key:"version",label:"Version",type:"text"},{key:"language",label:"Language",type:"text"},{key:"format",label:"Format",type:"text"},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M.Services=[{key:"title",label:"Service Title",type:"text",required:!0,span:2},{key:"type",label:"Service Type",type:"text"},{key:"duration",label:"Duration",type:"text"},{key:"location",label:"Location / Coverage",type:"text"},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Social Media Accounts"]=[{key:"title",label:"Account Title",type:"text",required:!0,span:2},{key:"type",label:"Platform (Instagram, TikTokâ€¦)",type:"text"},{key:"followers",label:"Followers",type:"text"},{key:"engagement",label:"Engagement Rate",type:"text"},{key:"niche",label:"Niche",type:"text"},{key:"condition",label:"Status",type:"select",options:["Active","Verified","Suspended"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];oi.forEach(e=>M[e]=[{key:"title",label:"Vehicle Title",type:"text",required:!0,span:2,placeholder:"e.g. 2023 Toyota Land Cruiser V8 Turbo Diesel"},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"model_year",label:"Model Year",type:"text",placeholder:"e.g. 2023"},{key:"body_type",label:"Body Type",type:"select",options:["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"]},{key:"mileage",label:"Mileage",type:"text",placeholder:"e.g. 15,000 mi or 0 (new)"},{key:"engine",label:"Engine",type:"text",placeholder:"e.g. 4.0L V8 Turbo Diesel"},{key:"horsepower",label:"Horsepower (HP)",type:"text",placeholder:"e.g. 500 HP"},{key:"transmission",label:"Transmission",type:"select",options:["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"]},{key:"drive_type",label:"Drive Type",type:"select",options:["FWD","RWD","AWD","4WD"]},{key:"fuel_type",label:"Fuel Type",type:"select",options:["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"]},{key:"seating_capacity",label:"Seating Capacity",type:"text",placeholder:"e.g. 5 seats"},{key:"doors",label:"Number of Doors",type:"text",placeholder:"e.g. 4"},{key:"safety_features",label:"Safety Features (comma separated)",type:"text",placeholder:"ABS, Airbags, Lane Assist, Traction Controlâ€¦"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}]);for(const e of Object.keys(M))M[e]=M[e].flatMap(t=>t.key!=="price"?[t]:[{key:"real_price",label:"Real Price (USD) â€” crossed out when a discount is active",type:"number",placeholder:"e.g. 250000 â€” original price before discount"},{...t,label:"Discount Price (USD) â€” the price customers pay",placeholder:"e.g. 200000 â€” the price customers actually pay"}]);function ri(e=""){return Pe.map(t=>`<option value="${t.code}" ${e===t.code?"selected":""}>${t.flag} ${t.name}</option>`).join("")}function si(e="USD"){return za.map(t=>`<option value="${t}" ${e===t?"selected":""}>${t}</option>`).join("")}function jt(e){return String(e||"").split(",").map(t=>t.trim()).filter(Boolean)}function E(e,t){const a=document.querySelector(`[name="${e}"]`);!a||t==null||(a.value=t)}function qt(e){const t=document.getElementById(e);t&&(t.min=String(N),t.max=String(Q),t.placeholder=`Price (${N} - ${Q})`)}function _a(e){const t=document.getElementById(`${e}-country_code`),a=document.getElementById(`${e}-country`),i=document.getElementById(`${e}-currency`);if(!t)return;const n=Pe.find(o=>o.code===t.value);a&&n&&(a.value=n.name),i&&n&&(i.value=ea(n.code))}function bt(e,t){const a=document.getElementById(`${e}-image-requirement`),i=document.getElementById(`${e}-required_image_count`);i&&(i.value=t?String(t):""),a&&(t>0?(a.textContent=`This template fits up to ${t} images. Fewer images are perfectly fine â€” you can save and publish anytime.`,a.classList.remove("hidden")):(a.textContent="",a.classList.add("hidden")))}function Ht(e,t="full"){const a=document.getElementById("pf-catalog_template_id")?.value||"",i=document.getElementById("pf-currency")?.value||"USD",n=parseFloat(document.getElementById("pf-price")?.value)||N,o=ja({templateId:a,listingType:"product",category:e,countryCode:"US",currency:i,price:n});if(!o){bt("pf",oi.includes(e)?24:0);return}bt("pf",o.requiredImageCount||0),E("currency",o.currency),E("subcategory",o.subcategory),E("features_text",o.features.join(", ")),E("highlights_text",o.highlights.join(", ")),E("seo_keywords_text",o.seo_keywords.join(", ")),t==="full"?(E("title",o.title),E("description",o.description),E("brand",o.brand||""),E("model",o.model||""),E("color",o.color||""),E("size",o.size||""),E("condition",o.condition||"New")):E("description",o.description)}function Gt(e="full"){const t=document.getElementById("ppf-catalog_template_id")?.value||"",a=document.getElementById("ppf-country_code")?.value||"US",i=document.getElementById("ppf-currency")?.value||"USD",n=parseFloat(document.getElementById("ppf-price")?.value)||N,o=ja({templateId:t,listingType:"property",category:"Real Estate",countryCode:a,currency:i,price:n});if(!o){bt("ppf",0);return}bt("ppf",o.requiredImageCount||0),E("country",o.country),E("country_code",o.country_code),E("currency",o.currency),E("subcategory",o.subcategory),E("product_location",o.product_location),E("features_text",o.features.join(", ")),E("highlights_text",o.highlights.join(", ")),E("seo_keywords_text",o.seo_keywords.join(", ")),e==="full"?(E("title",o.title),E("description",o.description),E("property_type",o.property_type||""),E("bedrooms",o.bedrooms??""),E("bathrooms",o.bathrooms??""),E("building_size",o.building_size||""),E("land_size",o.land_size||""),E("furnished",o.furnished||"")):E("description",o.description)}window.applyProductCatalogTemplate=function(e,t="full"){Ht(e,t)};window.applyPropertyCatalogTemplate=function(e="full"){Gt(e)};function Dn(e){return M[e]||M.default}function Fn(e,t={},a=!1){return Dn(e).map(n=>{const o=t[n.key]||"",r=n.span===2?"sm:col-span-2":"",d=!a&&n.required?"required":"",s=n.placeholder||n.label;let c="";if(n.type==="select")c=`<select class="input-field" name="${n.key}" id="pf-${n.key}" ${d}>
        <option value="">Selectâ€¦</option>
        ${n.options.map(u=>`<option value="${u}" ${o===u?"selected":""}>${u}</option>`).join("")}
      </select>`;else if(n.type==="textarea")c=`<textarea class="input-field" name="${n.key}" id="pf-${n.key}" rows="3" placeholder="Write a detailed descriptionâ€¦">${l(o)}</textarea>`;else{const p=["brand","model","color","size","material","platform"].includes(n.key)?`pf-list-${n.key}`:"",h=({brand:["Apple","Samsung","Sony","LG","HP","Dell","Lenovo","Asus","Nike","Adidas","Puma","Gucci","Rolex","Toyota","Mercedes","BMW","Tesla"],model:["Pro","Ultra","Max","SE","Standard","Plus","Series 1","Series 2"],color:["Black","White","Silver","Blue","Red","Green","Gold","Gray","Pink","Brown"],size:["XS","S","M","L","XL","XXL","32","34","36","38","40","42"],material:["Cotton","Leather","Stainless Steel","Aluminum","Wood","Glass","Plastic"],platform:["PS5","Xbox Series X","Nintendo Switch","PC","Android","iOS"]}[n.key]||[]).map(b=>`<option value="${l(b)}"></option>`).join("");c=`<input type="${n.type}" class="input-field" name="${n.key}" id="pf-${n.key}" value="${l(o)}" placeholder="${s}" ${p?`list="${p}"`:""} ${d}>${p?`<datalist id="${p}">${h}</datalist>`:""}`}return`<div class="${r}"><label class="lbl">${n.label}${n.required?a?"":" *":""}</label>${c}</div>`}).join("")}window.showAddProductStep1=function(){U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Add New Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>

        <!-- Scan first â€” let AI pick the category -->
        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3 mb-4">
          <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> Scan First â€” let AI pick the category</p>
          <p class="text-[11px] text-gray-500">Upload your product photos, press SCAN WITH AI. It detects EVERY distinct product (a photo with a bag + watch + shoes + phone gives four separate listings; each detection fills its own listing). Review each detection, then the correct category form opens filled for you. Nothing is published automatically.</p>
          <div id="s1-drop-zone" class="drop-zone" onclick="pickMediaForForm('s1-img-upload')">
            <i data-lucide="image-plus" class="w-6 h-6 text-blue-400 mx-auto mb-2"></i>
            <p class="text-xs font-bold text-gray-300">Click or drag & drop product images or videos</p>
            <input type="file" id="s1-img-upload" class="hidden" multiple accept="image/*,video/mp4,video/webm,video/*,application/pdf" onclick="event.stopPropagation()" onchange="handleStep1ImageUpload(event)">
          </div>
          <div id="s1-image-preview" class="flex flex-wrap gap-2"></div>
          <button type="button" id="btn-s1-scan" onclick="scanFirstWithAI()" disabled class="btn-press w-full px-4 py-3 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2" style="opacity:0.5">
            <i data-lucide="sparkles" class="w-4 h-4"></i> SCAN WITH AI
          </button>
          <div id="s1-scan-status" class="hidden text-xs font-medium"></div>
        </div>

        <div class="flex items-center gap-3 mb-3">
          <div class="flex-1 h-px bg-gray-800"></div>
          <span class="text-[11px] font-bold text-gray-500 uppercase tracking-wide">or choose a category manually</span>
          <div class="flex-1 h-px bg-gray-800"></div>
        </div>

        <p class="text-xs text-gray-400 mb-3">Choose the category that best matches your product. The form will show smart fields automatically.</p>
        <div class="relative mb-3">
          <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
          <input id="product-category-search" type="search" class="input-field pl-9" placeholder="Search category..." oninput="filterProductCategoryChoices(this.value)">
        </div>
        <div id="product-category-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-96 overflow-y-auto scrollbar-thin pr-1">
          ${we.map(e=>`
            <button data-category="${l(e).toLowerCase()}" onclick="showAddProductStep2('${e.replace(/'/g,"\\'")}')" class="btn-press flex items-center gap-3 p-4 glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-2xl transition text-left">
              <i data-lucide="tag" class="w-5 h-5 text-blue-400 shrink-0"></i>
              <span class="text-sm font-semibold text-gray-200">${l(e)}</span>
            </button>`).join("")}
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()};window.filterProductCategoryChoices=function(e){const t=String(e||"").trim().toLowerCase();document.querySelectorAll("#product-category-grid [data-category]").forEach(a=>{const i=!t||a.dataset.category.includes(t);a.classList.toggle("hidden",!i)})};window.showAddProductStep2=function(e,t={}){const a=!!t.property_id,i=Oa("product",e),n=t.currency||"USD";U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeProductFormModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between gap-3 mb-6">
          <div class="min-w-0">
            <h3 class="text-2xl font-black text-white">${a?"Edit Product":"Add Product"} â€” ${l(e)}</h3>
            <p class="text-sm text-gray-500 mt-1 truncate">${a?`Editing: ${l(t.property_id)}`:"Fill in the product details below"}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${a?'<button type="button" onclick="closeProductFormModal()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Product Manager</button>':'<button type="button" onclick="showAddProductStep1()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5" title="Change category"><i data-lucide="arrow-left" class="w-4 h-4"></i> Category</button>'}
            <button type="button" onclick="closeProductFormModal()" class="btn-press px-4 h-11 flex items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-white hover:bg-gray-800 transition" title="Close (X) â€” return to Product Manager">
              <i data-lucide="x" class="w-4 h-4 mr-1.5"></i>Back
            </button>
          </div>
        </div>

        <form id="product-form" onsubmit="saveProduct(event,'${l(e)}','${a?t.property_id:""}')" class="space-y-6">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-sm font-bold text-white uppercase tracking-wide">Global Catalog Autofill</p>
                <p class="text-sm text-gray-500 mt-1">Pick a template, country, and currency to auto-build the listing title, description, and metadata.</p>
              </div>
              <button type="button" onclick="applyProductCatalogTemplate('${l(e)}')" class="btn-press px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition">Refresh Template</button>
            </div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Catalog Template</label><select class="input-field" name="catalog_template_id" id="pf-catalog_template_id" onchange="applyProductCatalogTemplate('${l(e)}')"><option value="">Choose a template...</option>${i.map(o=>`<option value="${o.id}">${l(o.label)} - ${l(o.subcategory||o.category)}</option>`).join("")}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Currency</label><select class="input-field" name="currency" id="pf-currency" onchange="applyProductCatalogTemplate('${l(e)}')">${si(n)}</select></div>
            </div>
            <p id="pf-image-requirement" class="hidden text-sm text-amber-300"></p>
            <input type="hidden" name="required_image_count" id="pf-required_image_count" value="">
          </div>

          <div id="product-autosave-note" class="hidden p-4 rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-sm text-emerald-200"></div>

          <!-- Step 1: Image Upload -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <label class="lbl !mb-0">Step 1: Upload Product Images or Videos</label>
              <span class="text-sm text-gray-500">Upload one or multiple images before publishing</span>
            </div>
            <div id="drop-zone" class="drop-zone" onclick="pickMediaForForm('img-upload')">
              <i data-lucide="image-plus" class="w-12 h-12 text-blue-400 mx-auto mb-3"></i>
              <p class="text-lg font-bold text-gray-300">Click or drag & drop images or videos here</p>
              <p class="text-sm text-gray-500 mt-1">PNG, JPG, WEBP, MP4, WebM. First item = cover.</p>
<input type="file" id="img-upload" class="hidden" multiple accept="image/*,video/mp4,video/webm,video/*,application/pdf" onclick="event.stopPropagation()" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${(t.images||[]).map((o,r)=>Ae(o,r)).join("")}
            </div>
            <p class="text-sm text-gray-500 mt-1">Drag to reorder â€¢ âœ• deletes any image (even the main/cover â€” the next image becomes the cover) â€¢ â†» replaces â€¢ Upload up to 24 gallery images + videos</p>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
            <div id="image-url-inputs">
              ${(t.images||[]).map((o,r)=>`<input type="hidden" name="images" id="img-url-${r}" value="${l(o)}">`).join("")}
            </div>
          </div>

          <!-- AI Product Scanner (manual only â€” never auto-scans on upload) -->
          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="min-w-0">
                <p class="text-sm font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> AI Product Scanner</p>
                <p class="text-xs text-gray-500 mt-1">Upload a product image or video, then press SCAN WITH AI — it reads your photo and fills this form for you in one go. No extra clicks or review screens; just review the filled details and press Publish. Powered by Google Gemini free tier â€” add your FREE key in AI Settings if not set.</p>
              </div>
              <button type="button" id="btn-scan-ai" onclick="scanProductWithAI()" class="btn-press px-5 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold rounded-xl transition flex items-center gap-2 shrink-0">
                <i data-lucide="sparkles" class="w-4 h-4"></i> SCAN WITH AI
              </button>
            </div>
            <div id="scan-ai-status" class="hidden text-sm mt-3 font-medium"></div>
          </div>

          <!-- Step 2: Product Details -->
          <div class="text-sm text-blue-200 font-bold uppercase tracking-wide">Step 2: Product Details</div>
          <div class="form-grid form-grid-2">
            ${Fn(e,t,a)}
          </div>

          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${l(t.subcategory||"")}" placeholder="e.g. Smartphones, SUVs, Model Houses"></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${l((t.features||[]).join(", "))}" placeholder="5G connectivity, OLED display, fast charging"></div>
            <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${l((t.highlights||[]).join(", "))}" placeholder="Retail-ready packaging, premium demand, strong presentation"></div>
            <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${l((t.seo_keywords||[]).join(", "))}" placeholder="smartphone, unlocked, global shipping"></div>
          </div>

          <!-- Tags / Badges -->
          <div>
            <label class="lbl">Product Tags / Badges</label>
            <div class="flex flex-wrap gap-2.5">
              ${["New Arrival","Best Seller","Hot Deal","Featured","Limited Stock"].map(o=>`
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="tags" value="${o}" ${(t.tags||[]).includes(o)?"checked":""} class="accent-blue-500 w-5 h-5">
                  <span class="text-sm text-gray-300">${o}</span>
                </label>`).join("")}
            </div>
          </div>

          <!-- Availability -->
          <div class="form-grid form-grid-2">
            <div>
              <label class="lbl">Availability Status</label>
              <select class="input-field" name="availability_status" id="pf-availability_status">
                ${["In Stock","Out of Stock","Pre-order","Limited Stock"].map(o=>`<option value="${o}" ${t.availability_status===o?"selected":""}>${o}</option>`).join("")}
              </select>
            </div>
            <div class="p-4 glass-soft border border-blue-500/15 rounded-2xl">
              <p class="text-sm font-bold text-white">Global Price Range</p>
              <p class="text-sm text-gray-500 mt-1">Allowed price range is ${N} to ${Q} in the selected currency.</p>
            </div>
          </div>

          <!-- Featured -->
          <div class="flex items-center justify-between p-4 glass-soft border border-blue-500/15 rounded-2xl">
            <div>
              <p class="text-sm font-bold text-white">Featured Product</p>
              <p class="text-sm text-gray-500">Show in featured sections</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" name="is_featured" ${t.is_featured?"checked":""}>
              <span class="toggle-slider"></span>
            </label>
          </div>

          <!-- Active -->
          <div class="flex items-center justify-between p-4 glass-soft border border-blue-500/15 rounded-2xl">
            <div>
              <p class="text-sm font-bold text-white">Published / Active</p>
              <p class="text-sm text-gray-500">Visible to customers on the website</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" name="is_active" ${a?t.is_active?"checked":"":"checked"}>
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4" id="product-review-panel">
            <p class="text-sm font-bold text-white">Quick Review Before Publish</p>
            <div class="text-sm text-gray-400 mt-1" id="product-review-content">Fill in product details to preview your publish summary.</div>
          </div>

          <div class="flex gap-3 pt-2">
            <button type="button" onclick="previewProductDraft()" class="btn-press px-6 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-2xl text-base transition">
              Live Preview
            </button>
            <button type="submit" name="action" value="publish" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 rounded-2xl text-base transition shadow-lg shadow-blue-600/15">
              ${a?"One-Click Publish Changes":"One-Click Publish Product"}
            </button>
            <button type="submit" name="action" value="draft" class="btn-press px-7 bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-2xl text-base transition">
              Save Draft
            </button>
          </div>
        </form>
      </div>
    </div>`),la(),da(),qt("pf-price"),qt("pf-real_price"),Ht(e,"pricing"),document.getElementById("pf-price")?.addEventListener("input",()=>Ht(e,"pricing")),Vn(e,t.property_id||""),window._pfEscapeHandler=o=>{o.key==="Escape"&&closeProductFormModal()},document.addEventListener("keydown",window._pfEscapeHandler)};window.closeProductFormModal=function(){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),window._productPublishInFlight=!1,te=-1,ce(),S()};window.switchProductFormCategory=function(e){const t=document.getElementById("product-form");if(!t)return;const a={},i=new FormData(t);for(const[n,o]of i.entries())n==="images"?(a.images=a.images||[],o&&!String(o).startsWith("blob:")&&a.images.push(String(o))):n==="tags"?(a.tags=a.tags||[],a.tags.push(o)):a[n]=o;a.is_featured=t.querySelector('[name="is_featured"]')?.checked||!1,a.is_active=t.querySelector('[name="is_active"]')?.checked||!1,a.property_id&&String(a.property_id).trim()?showAddProductStep2(e,a):showAddProductStep2(e,{images:a.images||[],...a})};function Ae(e,t){const a=et(e),i=Ne(e);let n;return a?n='<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-300 select-none"><span class="text-2xl leading-none">📄</span><span class="text-[10px] font-bold mt-1">PDF</span></div>':i?n=`<video src="${l(e)}" muted loop preload="metadata" playsinline class="w-full h-full object-cover" onerror="this.style.display='none'"></video>
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow"><svg class="w-4 h-4 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:n=`<img src="${l(e)}" onerror="this.src='/fallback.svg'">`,`<div class="img-thumb ${t===0?"cover-img":""}" data-index="${t}" data-url="${l(e)}" title="${t===0?"Cover (main)":(i?"Video ":"Image ")+(t+1)}">
    ${n}
    <button class="rm" onclick="removeImage(${t})" type="button" title="Delete">✕</button>
    <button class="rp" onclick="document.getElementById('rp-input-${t}').click()" type="button" title="Replace">↻</button>
    <input type="file" accept="image/*,video/mp4,video/webm,video/*,application/pdf" class="rp-input" id="rp-input-${t}" onchange="replaceImage(${t}, this)">
  </div>`}function la(){const e=document.getElementById("drop-zone");e&&(e.addEventListener("dragover",t=>{t.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>e.classList.remove("drag-over")),e.addEventListener("drop",t=>{t.preventDefault(),e.classList.remove("drag-over"),Un(t.dataTransfer.files)}))}function da(){const e=document.getElementById("image-preview");!e||!window.Sortable||new Sortable(e,{animation:150,onEnd:()=>Oe()})}window.handleImageUpload=async function(e){await ca(e.target.files)};async function Un(e){await ca(e)}async function li(e,t,a){const i=new Array(e.length);let n=0;const o=Array.from({length:Math.min(Math.max(t,1),e.length)},async()=>{for(;n<e.length;){const r=n++;try{i[r]=await a(e[r],r)}catch{i[r]=null}}});return await Promise.all(o),i}function On(e,t,a,i,n=9e4){return new Promise(o=>{let r=!1;const d=setTimeout(()=>{r||(r=!0,o({error:{message:`Upload timed out after ${Math.round(n/1e3)}s — the network is too slow for this file size.`}}))},n);g.storage.from(e).upload(t,a,i).then(s=>{r||(r=!0,clearTimeout(d),o(s))})})}async function jn(e,t=1920,a=.82){const i=URL.createObjectURL(e);try{const n=new Image;await new Promise((p,y)=>{n.onload=p,n.onerror=y,n.src=i});const o=Math.min(1,t/Math.max(n.width,n.height)),r=Math.max(1,Math.round(n.width*o)),d=Math.max(1,Math.round(n.height*o)),s=document.createElement("canvas");s.width=r,s.height=d,s.getContext("2d").drawImage(n,0,0,r,d);const c=await new Promise(p=>s.toBlob(p,"image/jpeg",a));if(!c||!c.size)return null;const u=(e.name||"photo.jpg").replace(/\.[^.]+$/i,"")+".jpg";return new File([c],u,{type:"image/jpeg"})}catch{return null}finally{URL.revokeObjectURL(i)}}async function ca(e){const t=document.getElementById("image-preview");if(!t)return;const a=[];for(const n of e){const o=n.type==="application/pdf"||et(n.name),r=Re(n);if(!(!n.type.startsWith("image/")&&!o&&!r)){if(r&&n.size>100*1024*1024){m("Video must be under 100 MB.","error");continue}a.push(n)}}if(!a.length)return;const i=a.map(()=>{const n=document.createElement("div");return n.className="img-thumb uploading",n.style.cssText="min-width:90px;min-height:80px;",n.innerHTML='<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-400"><div class="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-1.5"></div><span class="text-[10px] font-bold">Uploading…</span></div>',t.appendChild(n),n});await li(a,3,async(n,o)=>{const r=i[o],d=await ua(n);setTimeout(()=>{if(!(!r||!r.isConnected)){if(r.remove(),d){const s=document.createElement("div");s.innerHTML=Ae(d,o);const c=s.firstElementChild,u=r.nextSibling;u?t.insertBefore(c,u):t.appendChild(c)}else m(`Failed to upload ${Re(n)?"video":"image"}. Try a smaller file.`,"error");Oe(),at(),Ie(),window.lucide&&lucide.createIcons()}},0)})}async function ua(e){try{const{data:{session:t}}=await g.auth.getSession(),a=String(e.type||"").startsWith("image/"),i=Re(e);let n=e;if(a&&e.size>250*1024){const s=await jn(e);s&&s.size&&(n=s)}const o=n.type==="image/jpeg"?"jpg":(e.name||"photo.jpg").split(".").pop()||"jpg",r=`products/${Date.now()}-${Math.random().toString(36).slice(2)}`,d=i?18e4:9e4;for(let s=0;s<2;s++){const c=`${r}${s?"-"+Math.random().toString(36).slice(2,7):""}.${o}`,{error:u}=await On("product-images",c,n,{contentType:n.type||e.type,upsert:!1},d);if(u)console.warn("product-images upload failed (attempt "+(s+1)+"):",u.message||u);else{const{data:p}=g.storage.from("product-images").getPublicUrl(c);if(p&&p.publicUrl)return p.publicUrl}}try{const s=await F._downscaleImage(n,1200);if(s)return s}catch{}return URL.createObjectURL(e)}catch{return URL.createObjectURL(e)}}async function qn(){if(!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform()))return null;try{const{Camera:e,MediaTypeSelection:t}=await Ma(async()=>{const{Camera:n,MediaTypeSelection:o}=await import("@capacitor/camera");return{Camera:n,MediaTypeSelection:o}},[]),{results:a}=await e.chooseFromGallery({mediaType:t.All,allowMultipleSelection:!0,includeMetadata:!0}),i=[];for(const n of a||[])if(n.webPath)try{const o=n.type===1,r=(n.metadata&&n.metadata.format||(o?"mp4":"jpg")).toLowerCase().replace(/^jpeg$/,"jpg"),d=await fetch(n.webPath).then(s=>s.blob());i.push(new File([d],`gallery-${Date.now()}-${Math.random().toString(36).slice(2)}.${r}`,{type:d.type||(o?"video/mp4":"image/jpeg")}))}catch{}return i}catch(e){return console.warn("Native gallery picker unavailable:",e),null}}window.pickMediaForForm=async function(e){if(!!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform())){document.getElementById(e)?.click();return}const a=await qn();!a||!a.length||(e==="s1-img-upload"?await handleStep1Files(a):await ca(a))};window.removeImage=function(e){const t=document.getElementById("image-preview");if(!t)return;const a=[...t.children];a[e]&&a[e].remove(),Oe(),at(),Ie()};window.replaceImage=async function(e,t){const a=document.getElementById("image-preview");if(!a||!t||!t.files||!t.files[0])return;const i=t.files[0],n=i.type==="application/pdf"||et(i.name),o=Re(i);if(!i.type.startsWith("image/")&&!n&&!o){m("Please choose an image, video, or PDF file.","error");return}if(o&&i.size>100*1024*1024){m("Video must be under 100 MB.","error");return}const r=await ua(i);if(!r)return;const s=[...a.querySelectorAll(".img-thumb")][e];s&&(s.outerHTML=Ae(r,e),Oe(),at(),Ie(),m(n?"Document replaced. Save to apply.":o?"Video replaced. Save to apply.":"Image replaced. Save to apply.","info"))};function Oe(){const e=document.getElementById("image-preview"),t=document.getElementById("image-url-inputs");!e||!t||(t.innerHTML="",[...e.querySelectorAll(".img-thumb")].forEach((a,i)=>{const n=a.dataset.url||(a.querySelector("img")?a.querySelector("img").src:"");if(!n)return;const o=document.createElement("input");o.type="hidden",o.name="images",o.id=`img-url-${i}`,o.value=n,t.appendChild(o),a.dataset.index=i;const r=a.querySelector(".rm");r&&r.setAttribute("onclick",`removeImage(${i})`);const d=a.querySelector(".rp");d&&d.setAttribute("onclick",`document.getElementById('rp-input-${i}').click()`);const s=a.querySelector(".rp-input");s&&(s.id=`rp-input-${i}`,s.onchange=()=>replaceImage(i,s))}))}function at(){const e=document.getElementById("image-preview");e&&[...e.querySelectorAll(".img-thumb")].forEach((t,a)=>{t.classList.toggle("cover-img",a===0);const i=Ne(t.dataset.url);t.title=a===0?"Cover (main)":(i?"Video ":"Image ")+(a+1)})}function Ie(){const e=document.getElementById("image-preview"),t=document.getElementById("gallery-counter");if(!e||!t)return;const a=[...e.querySelectorAll(".img-thumb")],i=a.length,n=a.filter(r=>Ne(r.dataset.url)).length,o=i-n;if(i===0)t.textContent="No media yet — you can still save and publish anytime";else{const r=[];o>0&&r.push(`${o} image${o>1?"s":""}`),n>0&&r.push(`${n} video${n>1?"s":""}`),t.textContent=`${r.join(" + ")} — you can save and publish anytime`}t.className="text-sm mt-1 font-bold text-gray-400"}function Me(e,t){return`kco_product_form_autosave_${e}_${t||"new"}`}function Hn(e){const t=new FormData(e),a={images:[],tags:[],fields:{}};for(const[i,n]of t.entries())i==="images"?n&&!String(n).startsWith("blob:")&&a.images.push(String(n)):i==="tags"?a.tags.push(String(n)):a.fields[i]=String(n);return a.fields.is_featured=e.querySelector('[name="is_featured"]')?.checked?"on":"",a.fields.is_active=e.querySelector('[name="is_active"]')?.checked?"on":"",a}function Gn(e,t){if(!t||typeof t!="object")return!1;const a=t.fields||{};Object.entries(a).forEach(([n,o])=>{const r=e.querySelector(`[name="${n}"]`);r&&(r.type==="checkbox"?r.checked=o==="on"||o===!0:r.value=o==null?"":String(o))});const i=Array.isArray(t.tags)?t.tags:[];if(e.querySelectorAll('input[name="tags"]').forEach(n=>{n.checked=i.includes(n.value)}),Array.isArray(t.images)){const n=document.getElementById("image-preview");n&&(n.innerHTML=t.images.map((o,r)=>Ae(o,r)).join(""),Oe(),at(),Ie())}return!0}function Vt(){const e=document.getElementById("product-review-content"),t=document.getElementById("product-form");if(!e||!t)return;const a=t.querySelector('[name="title"]')?.value||"Untitled Product",i=t.querySelector('[name="brand"]')?.value||"N/A",n=parseFloat(t.querySelector('[name="price"]')?.value||"0")||0,o=parseFloat(t.querySelector('[name="real_price"]')?.value||"0")||0,r=t.querySelector('[name="stock_quantity"]')?.value,d=r===""||r==null?"Unlimited":r,s=A.section==="products"&&document.querySelector("#product-form")?.dataset?.category||"",c=[...t.querySelectorAll('input[name="tags"]:checked')].map(y=>y.value),u=document.querySelectorAll("#image-preview .img-thumb").length,p=t.querySelector('[name="is_active"]')?.checked;e.innerHTML=`
    <div class="grid grid-cols-2 gap-2">
      <div><span class="text-gray-500">Title</span><p class="text-white font-semibold">${l(a)}</p></div>
      <div><span class="text-gray-500">Brand</span><p class="text-white font-semibold">${l(i)}</p></div>
      <div><span class="text-gray-500">Price</span><p class="text-emerald-300 font-semibold">${o>n?`<span class="line-through text-gray-500 mr-1">$${o.toLocaleString()}</span>`:""}$${n.toLocaleString()}</p></div>
      <div><span class="text-gray-500">Stock</span><p class="text-white font-semibold">${l(d)}</p></div>
      <div><span class="text-gray-500">Media</span><p class="text-white font-semibold">${u}</p></div>
      <div><span class="text-gray-500">Status</span><p class="${p?"text-emerald-300":"text-amber-300"} font-semibold">${p?"Published":"Draft / Hidden"}</p></div>
    </div>
    <div class="mt-2 text-gray-400">Tags: ${c.length?l(c.join(", ")):"No tags selected"}</div>
    ${s?`<div class="text-gray-500 mt-1">Category: ${l(s)}</div>`:""}
  `}window.previewProductDraft=function(){const e=document.getElementById("product-form");if(!e)return;const t=document.querySelector("#image-preview img")?.src||"/fallback.svg",a=e.querySelector('[name="title"]')?.value||"Untitled Product",i=e.querySelector('[name="description"]')?.value||"No description yet.",n=e.querySelector('[name="brand"]')?.value||"N/A",o=parseFloat(e.querySelector('[name="price"]')?.value||"0")||0,r=parseFloat(e.querySelector('[name="real_price"]')?.value||"0")||0,d=e.dataset.category||"Product",s=e.querySelector('[name="stock_quantity"]')?.value||"Unlimited",c=e.querySelector('[name="is_active"]')?.checked;U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Live Draft Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="${l(t)}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
          <div class="space-y-2">
            <h4 class="text-xl font-black text-white">${l(a)}</h4>
            <div class="flex items-center gap-2">${Y(c?"active":"inactive")}<span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${l(d)}</span></div>
            <p class="text-sm text-gray-400">${l(i)}</p>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">${r>o?`<span class="text-xs line-through text-gray-500 mr-1">$${r.toLocaleString()}</span>`:""}$${o.toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${l(s)}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2 col-span-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${l(n)}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>`)};function Vn(e,t){const a=document.getElementById("product-form");if(!a)return;a.dataset.category=e;const i=Me(e,t),n=document.getElementById("product-autosave-note");if(!t)try{const s=localStorage.getItem(i);if(s){const c=JSON.parse(s);Gn(a,c)&&n&&(n.textContent="Autosave restored from your last session.",n.classList.remove("hidden"))}}catch{}const o=()=>{try{localStorage.setItem(i,JSON.stringify(Hn(a))),n&&(n.textContent=`Auto saved at ${new Date().toLocaleTimeString()}`,n.classList.remove("hidden"))}catch{}Vt()};let r;const d=()=>{clearTimeout(r),r=setTimeout(o,500)};a.querySelectorAll("input, textarea, select").forEach(s=>{s.addEventListener("input",d),s.addEventListener("change",d)}),Vt(),Ie()}const zn=["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],Wn=["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"],Kn=["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"],Yn=["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"],Jn=["FWD","RWD","AWD","4WD"],di=new Set(["price","real_price","stock_quantity","currency","images","tags","verification_status","is_featured","is_active","sku"]);function ka(e){const t=e.id?`label[for="${e.id}"]`:null,a=t?document.querySelector(t):null;if(a)return a.textContent.replace(/\s+/g," ").trim().slice(0,60);const i=e.closest("div");if(i){const n=i.querySelector("label");if(n)return n.textContent.replace(/\s+/g," ").trim().slice(0,60)}return String(e.name||"").replace(/_/g," ")}function Qn(e){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return[];const a=new Set,i=[];return t.querySelectorAll("input[name], select[name], textarea[name]").forEach(n=>{const o=String(n.name||"");if(!o||o==="images"||a.has(o)||["hidden","file","submit","button"].includes(n.type))return;if(a.add(o),n.type==="checkbox"){const d=[...t.querySelectorAll(`input[name="${o}"]`)];i.push({key:o,label:ka(n),type:"checkbox-group",options:d.map(s=>s.value).filter(Boolean),required:n.required});return}if(n.type==="radio")return;const r=n.tagName==="SELECT"?"select":n.tagName==="TEXTAREA"?"textarea":n.type==="number"?"number":"text";i.push({key:o,label:ka(n),type:r,options:n.tagName==="SELECT"?[...n.options].map(d=>d.value).filter(Boolean):null,required:!!n.required})}),i}function Xn(e){return!e||!e.length?"":`
THE COMPLETE LIST OF FORM FIELDS (every single one MUST be accounted for):
${e.filter(a=>!di.has(a.key)).map(a=>{let i=a.type;return a.type==="select"&&a.options&&a.options.length<=24?i+=` [options: ${a.options.join(" | ")}]`:a.type==="checkbox-group"&&a.options&&a.options.length?i+=` [multi-select: ${a.options.join(" | ")}]`:a.type==="number"?i="number":a.type==="textarea"&&(i="long text"),`- "${a.key}" (${a.label}) — ${i}`}).join(`
`)}
`}const Zn=/^(n\/?a|none|unknown|not (available|specified|found|visible|applicable)|null|undefined|-{1,}|no data)$/i;function Sa(e,t){const a={...t||{}},i=new Set(Array.isArray(a.estimated)?a.estimated.map(u=>String(u)):[]),n=new Set(Array.isArray(a.missing_fields)?a.missing_fields.map(u=>String(u)):[]),o=[],r=[],d=u=>{if(u==null)return"";Array.isArray(u)&&(u=u.filter(y=>y!=null&&String(y).trim()!=="").join(", "));let p=String(u).replace(/\s+/g," ").trim();return p=p.replace(/^(answer|value|result|extracted)\s*[:\-]\s*/i,""),p},s=u=>{const p=d(u).replace(/[^0-9.,\-]/g,"").replace(/,(?=\d{3}\b)/g,"").replace(",","."),y=parseFloat(p);return Number.isFinite(y)?y:NaN};for(const u of e||[]){if(di.has(u.key))continue;const p={key:u.key,label:u.label,status:"empty-ok",value:null,note:""};if(u.type==="checkbox-group"){const b=Array.isArray(a[u.key])?a[u.key].map(d).filter(Boolean):[],f=u.options&&u.options.length?b.filter(w=>u.options.includes(w)):b;f.length?(a[u.key]=f,p.status="filled",p.value=f.join(", ")):(delete a[u.key],b.length&&(p.status="flagged",p.note="values not in the allowed badge list were dropped",r.push(`${u.label}: invalid selection ignored`))),o.push(p);continue}if(!(a[u.key]!=null&&d(a[u.key])!=="")){p.status=n.has(u.key)?"missing":"empty-ok",o.push(p);continue}if(Zn.test(d(a[u.key]))){delete a[u.key],n.add(u.key),p.status="missing",p.note="document/AI said the value is unavailable",o.push(p);continue}if(u.type==="number"){const b=d(a[u.key]),f=s(a[u.key]);if(!Number.isFinite(f)){delete a[u.key],n.add(u.key),p.status="flagged",p.note=`"${b}" is not a valid number`,r.push(`${u.label}: not a valid number`),o.push(p);continue}if(/year/.test(u.key)&&(f<1800||f>new Date().getFullYear()+2)){delete a[u.key],n.add(u.key),p.status="flagged",p.note=`${f} is outside the plausible range`,r.push(`${u.label}: implausible value ${f}`),o.push(p);continue}a[u.key]=f,p.status="filled",p.value=String(f),i.has(u.key)&&(p.status="estimated",p.note="AI estimate â€” confirm"),o.push(p);continue}if(u.type==="select"&&u.options&&u.options.length){const b=ui({options:u.options.map(f=>({value:f}))},d(a[u.key]));if(b==null){p.status="flagged",p.note=`"${d(a[u.key])}" does not match any option â€” left empty`,r.push(`${u.label}: no matching option`),delete a[u.key],n.add(u.key),o.push(p);continue}a[u.key]=b,p.status="filled",p.value=b,b!==d(t?.[u.key])&&(p.note="matched to the closest option"),o.push(p);continue}let h=d(a[u.key]);u.type!=="textarea"&&u.type!=="text-long"&&h.length>120&&!["title"].includes(u.key)&&(p.status="flagged",p.note="unusually long â€” check it landed in the right field",r.push(`${u.label}: suspiciously long value`)),a[u.key]=h,p.status="filled",p.value=h.length>48?h.slice(0,48)+"â€¦":h,i.has(u.key)&&(p.status="estimated",p.note="AI estimate â€” confirm"),o.push(p)}if(e&&e.length){const u=new Set([...e.map(p=>p.key),"estimated","missing_fields","features","highlights","seo_keywords"]);Object.keys(a).forEach(p=>{u.has(p)||delete a[p]})}a.missing_fields=o.filter(u=>u.status==="missing").map(u=>u.key),a.estimated=o.filter(u=>u.status==="estimated").map(u=>u.key);const c={total:o.length,filled:o.filter(u=>u.status==="filled").length,estimated:o.filter(u=>u.status==="estimated").length,flagged:o.filter(u=>u.status==="flagged").length,missing:o.filter(u=>u.status==="missing").length};return{specs:a,checklist:o,flags:r,summary:c}}function ci(e,t){if(!e||!e.length)return"";const a={filled:'<span class="text-emerald-400 font-bold">âœ“</span>',estimated:'<span class="text-blue-300 font-bold">â‰ˆ</span>',flagged:'<span class="text-red-400 font-bold">!</span>',missing:'<span class="text-gray-500">â€”</span>',"empty-ok":'<span class="text-gray-700">Â·</span>'},i=e.filter(o=>o.status!=="empty-ok").map(o=>`<li class="flex items-start gap-2"><span class="shrink-0 w-4">${a[o.status]||""}</span><span><b>${l(o.label)}</b> <span class="text-gray-600">(${l(o.key)})</span>${o.value?` â€” <span class="text-gray-300">${l(String(o.value))}</span>`:""}${o.note?` <span class="text-gray-500">${l(o.note)}</span>`:""}</span></li>`).join(""),n=t.total-t.filled-t.estimated-t.flagged-t.missing;return`<details class="mt-2 rounded-xl border border-violet-500/20 bg-violet-500/5 p-3">
    <summary class="cursor-pointer text-[11px] font-bold text-violet-300 select-none">Field checklist â€” ${t.filled} filled Â· ${t.missing} not present in document Â· ${t.flagged} need review${t.estimated?` Â· ${t.estimated} estimates`:""}${n>0?` Â· ${n} not applicable to this listing type`:""}</summary>
    <ul class="mt-2 space-y-1.5 text-[11px] text-gray-300 max-h-64 overflow-y-auto pr-1">${i||'<li class="text-gray-500">No applicable fields found.</li>'}</ul>
  </details>`}const Je={activeProvider:"gemini",maxImages:4,PROVIDERS:{gemini:{label:"Google Gemini (Free Tier)",scan:async(e,t)=>{const a=typeof t.onProgress=="function"?t.onProgress:()=>{};a(1,"Identifying the exact product from your imagesâ€¦");const i=await F.identifyProduct(e,t);if(!i||i.identified===!1)return{identification:i,specs:null,price:null};a(2,"Completing specifications and estimating a fair market priceâ€¦");const n=await F.completeSpecsAndPrice(e,i,t).catch(()=>null);return{identification:i,specs:n?n.specs:null,price:n?n.price:null}}}},async scan(e,t){const a=this.PROVIDERS[this.activeProvider];if(!a)throw new Error(`Scanner provider "${this.activeProvider}" is not configured.`);return a.scan(e||[],t)}};function ui(e,t){const a=[...e.options||[]].map(r=>r.value).filter(Boolean);if(a.includes(String(t)))return String(t);const i={petrol:"Gasoline",gas:"Gasoline",gasoline:"Gasoline",unleaded:"Gasoline",ev:"Electric",electric:"Electric","fully electric":"Electric",hybrid:"Hybrid","hybrid electric":"Hybrid","plug-in hybrid":"Plug-in Hybrid",phev:"Plug-in Hybrid",auto:"Automatic",automatic:"Automatic","automatic transmission":"Automatic",manual:"Manual","manual transmission":"Manual",cvt:"CVT","continuously variable":"CVT","dual clutch":"Dual-Clutch",dct:"Dual-Clutch",fwd:"FWD","front-wheel drive":"FWD","front wheel drive":"FWD",rwd:"RWD","rear-wheel drive":"RWD","rear wheel drive":"RWD",awd:"AWD","all-wheel drive":"AWD","all wheel drive":"AWD","4wd":"4WD","four-wheel drive":"4WD","four wheel drive":"4WD","4x4":"4WD",sedan:"Sedan",saloon:"Sedan",suv:"SUV",hatchback:"Hatchback",coupe:"Coupe","coupÃ©":"Coupe",convertible:"Convertible",wagon:"Wagon",estate:"Wagon",pickup:"Pickup","pick up":"Pickup",van:"Van",truck:"Truck","sports car":"Sports Car",motorcycle:"Motorcycle",yacht:"Yacht","like new":"Used - Like New","used - like new":"Used - Like New"},n=String(t).toLowerCase().trim();return i[n]?i[n]:a.find(r=>r.toLowerCase().includes(n)||n.includes(r.toLowerCase()))||null}function $a(e){const t=[];return e.year&&t.push(e.year),e.brand&&t.push(e.brand),e.model&&t.push(e.model),!e.model&&e.body_type&&t.push(e.body_type),t.join(" ")||e.detected_name||""}const eo=new Set(["images","tags","currency","catalog_template_id","country_code","listing_type","category","property_id","id","slug","user_id","latitude","longitude","cover_image","video_url"]);function pi(e,{titleFallback:t="Product",descriptionFallback:a=""}={}){const i=document.querySelector(e);if(!i)return 0;let n=0;return i.querySelectorAll("input, textarea, select").forEach(o=>{const r=String(o.name||"").trim();if(!r||eo.has(r))return;const d=String(o.type||"").toLowerCase();if(!["hidden","checkbox","radio","file","submit","button","image","password"].includes(d)&&!o.disabled&&String(o.value||"").trim()===""){if(r==="price"||r==="real_price"){const s=Number.isFinite(Number(N))?Number(N):1;o.value=String(s),n++;return}if(r==="stock_quantity"){o.value="1",n++;return}if(r==="title"){o.value=t,n++;return}if(r==="description"){o.value=a||`${t} â€” full details to be confirmed by the seller. Review and edit everything before publishing.`,n++;return}if(d==="number"||d==="range"||d==="tel"){o.value="0",n++;return}if(o.tagName==="SELECT"&&![...o.options].some(s=>s.value==="Not specified")){const s=document.createElement("option");s.value="Not specified",s.textContent="Not specified",o.appendChild(s)}o.value="Not specified",n++}}),n}function to(e){const t=e&&e.identification&&e.identification.identified!==!1?e.identification:{},a=e&&e.specs?e.specs:{},i=e&&e.price?e.price:null,n=[],o=$=>Array.isArray($)?$.join(", "):String($??"").trim(),r=($,R,J)=>{if(R==null||o([R])==="")return;const ue=document.querySelector(`#product-form [name="${$}"]`);if(!ue)return;let O=String(R);if(J&&!J.includes(O)){const B=ui(ue,O);if(B===null)return;O=B}ue.value=O,n.push($)};r("brand",t.brand),r("model",t.model),r("color",t.color),r("condition",t.condition,zn),r("subcategory",t.subcategory),r("body_type",t.body_type||a.body_type,Wn),r("model_year",a.model_year||t.year),r("title",a.title||$a(t)),r("description",a.description),r("engine",a.engine),r("transmission",a.transmission,Kn),r("fuel_type",a.fuel_type,Yn),r("drive_type",a.drive_type,Jn),r("horsepower",a.horsepower),r("mileage",a.mileage),r("seating_capacity",a.seating_capacity),r("doors",a.doors),r("safety_features",o(a.safety_features)),r("storage",a.storage),r("ram",a.ram),r("processor",a.processor),r("display",a.display),r("graphics",a.graphics),r("os",a.os),r("material",a.material),r("size",a.size),r("gender",a.gender),r("platform",a.platform),r("type",a.type||t.type),r("age_range",a.age_range),r("skin_type",a.skin_type),r("ingredients",a.ingredients),r("dimensions",a.dimensions),r("author",a.author),r("publisher",a.publisher),r("language",a.language),r("format",a.format),r("isbn",a.isbn),r("pages",a.pages),r("edition",a.edition),r("quantity",a.quantity),r("pet_type",a.pet_type),r("lens",a.lens),r("sensor",a.sensor),r("megapixels",a.megapixels),r("video",a.video),r("license",a.license),r("version",a.version),r("duration",a.duration),r("followers",a.followers),r("engagement",a.engagement),r("niche",a.niche),r("usage",a.usage),r("shelf_life",a.shelf_life),r("assembly",a.assembly),r("weatherproof",a.weatherproof),r("warranty",a.warranty||t.warranty),r("availability_status",a.availability_status),r("features_text",o(a.features)),r("highlights_text",o(t.highlights||a.highlights)),r("seo_keywords_text",o(a.seo_keywords));const d=new Set((Array.isArray(a.tags)?a.tags:[]).map($=>String($).trim()));document.querySelectorAll('#product-form input[name="tags"]').forEach($=>{d.has($.value)&&($.checked=!0,n.push("tags"))});const s=Number(a.stock_quantity);Number.isFinite(s)&&s>0&&r("stock_quantity",s);const c=new Set((Array.isArray(a.missing_fields)?a.missing_fields:[]).map($=>String($))),u=new Set(["title","description","price","real_price","stock_quantity","images","features","highlights","seo_keywords","tags","safety_features"]);c.forEach($=>{if(u.has($))return;const R=document.querySelector(`#product-form [name="${$}"]`);if(!(!R||R.type==="checkbox"||R.type==="radio"||R.type==="number")&&String(R.value||"").trim()===""){if(R.tagName==="SELECT"&&![...R.options].some(J=>J.value==="Not specified")){const J=document.createElement("option");J.value="Not specified",J.textContent="Not specified",R.appendChild(J)}R.value="Not specified",n.push(`${$} (Not specified)`)}});const p=document.querySelector('#product-form [name="price"]'),y=document.querySelector('#product-form [name="real_price"]'),h=i?Number(i.estimated_price):NaN,b=i?Number(i.suggested_discount_price):NaN,f=Number.isFinite(Number(N))?Number(N):0,w=Number.isFinite(Number(Q))?Number(Q):999999999,x=$=>Math.max(f,Math.min(w,Math.round($)));if(Number.isFinite(h)&&h>0){y&&(y.value=String(x(h)),n.push("real_price"));const $=Number.isFinite(b)&&b>0&&b<h?b:h;p&&(p.value=String(x($)),n.push("price"))}const k=$a(t)||t.detected_name||"Product",v=a.description||`${k} for sale on Weverse Online Shop. Review the details below and edit anything before publishing.`,C=pi("#product-form",{titleFallback:k,descriptionFallback:v});return C&&n.push(`${C} auto-completed (Not specified / safe defaults)`),Vt(),{filled:n}}function je(e){const t=String(e||"").trim().toLowerCase(),a=we.find(r=>r.toLowerCase()===t);if(a)return{category:a,listing_type:null};if(/(house|villa|apartment|condo|mansion|land|estate|real estate|property|building|bungalow|townhouse|ranch|farmhouse)/.test(t))return{category:null,listing_type:"property"};const i={bag:"Fashion",bags:"Fashion",handbag:"Fashion",handbags:"Fashion",backpack:"Fashion",backpacks:"Fashion",purse:"Fashion",wallet:"Fashion",wallets:"Fashion",luggage:"Travel & Luggage",sneaker:"Fashion",sneakers:"Fashion",shoe:"Fashion",shoes:"Fashion",boot:"Fashion",boots:"Fashion",footwear:"Fashion",sandal:"Fashion",sandals:"Fashion",heel:"Fashion",heels:"Fashion",phone:"Phones",smartphone:"Phones",smartphones:"Phones",iphone:"Phones","mobile phone":"Phones",laptop:"Computers",laptops:"Computers",computer:"Computers",notebook:"Computers",macbook:"Computers",pc:"Computers",desktop:"Computers",electronics:"Electronics",electronic:"Electronics",gadget:"Electronics",gadgets:"Electronics",tv:"Electronics",television:"Electronics",headphones:"Electronics",speaker:"Electronics",speakers:"Electronics",soundbar:"Electronics",tablet:"Electronics",earbuds:"Electronics",camera:"Cameras & Photography",cameras:"Cameras & Photography",dslr:"Cameras & Photography",drone:"Cameras & Photography",jewelry:"Jewelry",jewellery:"Jewelry",ring:"Jewelry",necklace:"Jewelry",earring:"Jewelry",earrings:"Jewelry",bracelet:"Jewelry",watch:"Watches & Accessories",watches:"Watches & Accessories",wristwatch:"Watches & Accessories","smart watch":"Watches & Accessories",clothing:"Fashion",clothes:"Fashion",fashion:"Fashion",shirt:"Fashion",shirts:"Fashion",dress:"Fashion",dresses:"Fashion",jacket:"Fashion",jackets:"Fashion",hoodie:"Fashion",jeans:"Fashion","t-shirt":"Fashion",tshirt:"Fashion",apparel:"Fashion","men's fashion":"Men","mens fashion":"Men","women's fashion":"Women","womens fashion":"Women",car:"Cars",cars:"Cars",vehicle:"Cars",vehicles:"Cars",automobile:"Cars",suv:"Cars",sedan:"Cars","luxury car":"Cars","luxury cars":"Cars",truck:"Trucks",trucks:"Trucks",trailer:"Trucks",bus:"Trucks",motorcycle:"Motorcycles",motorbike:"Motorcycles","motor bike":"Motorcycles",bicycle:"Bicycles",bicycles:"Bicycles",cycling:"Bicycles",bike:"Bicycles",motorhome:"RV & Camper Accessories",motorhomes:"RV & Camper Accessories",camper:"RV & Camper Accessories",rv:"RV & Camper Accessories",boat:"Marine & Boating",boats:"Marine & Boating",yacht:"Marine & Boating",jet:"Marine & Boating",beauty:"Beauty",skincare:"Beauty",cosmetics:"Beauty",makeup:"Beauty",perfume:"Beauty",kitchen:"Kitchen",appliance:"Home Appliances",appliances:"Home Appliances",blender:"Kitchen",kettle:"Kitchen",cookware:"Kitchen",vacuum:"Home Appliances",furniture:"Furniture",sofa:"Furniture",chair:"Furniture",chairs:"Furniture",table:"Furniture",tables:"Furniture",bed:"Furniture",mattress:"Furniture",desk:"Furniture",toy:"Toys & Hobbies",toys:"Toys & Hobbies",game:"Gaming",games:"Gaming",gaming:"Gaming",console:"Gaming",food:"Food & Groceries",groceries:"Food & Groceries",snack:"Food & Groceries",snacks:"Food & Groceries",beverage:"Food & Groceries",baby:"Baby",kids:"Kids",stroller:"Baby",health:"Health & Medical",medical:"Health & Medical",supplement:"Health & Medical",fitness:"Sports",sport:"Sports",sports:"Sports",gym:"Sports",dumbbell:"Sports",book:"Books",books:"Books",textbook:"Books",novel:"Books",stationery:"Office",office:"Office",printer:"Office",pen:"Office",pet:"Pets",pets:"Pets",dog:"Pets",cat:"Pets",musical:"Musical Instruments",guitar:"Musical Instruments",piano:"Musical Instruments",instrument:"Musical Instruments",drum:"Musical Instruments",software:"Software & Digital Products",digital:"Software & Digital Products",account:"Software & Digital Products",accounts:"Software & Digital Products",instagram:"Software & Digital Products",tiktok:"Software & Digital Products",camping:"Camping & Hiking",tent:"Camping & Hiking",hiking:"Camping & Hiking",flower:"Flowers & Gifts",flowers:"Flowers & Gifts",gift:"Flowers & Gifts",gifts:"Flowers & Gifts",wedding:"Wedding Supplies",party:"Party & Event Supplies",coin:"Coins & Bullion",coins:"Coins & Bullion",art:"Arts & Crafts",painting:"Arts & Crafts",craft:"Arts & Crafts"},n=i[t]||i[t.replace(/s$/,"")]||i[t.replace(/\s+/g," ")];if(n)return{category:n,listing_type:null};for(const r of we)if(t.includes(r.toLowerCase())||t.length>2&&r.toLowerCase().includes(t))return{category:r,listing_type:null};return{category:ji(t)||"Other",listing_type:null}}function ao(e){const t=String(e||"").toLowerCase().trim();if(!t)return null;const a=Kt.find(n=>n.toLowerCase()===t);return a||Kt.find(n=>n.toLowerCase().includes(t)||t.includes(n.toLowerCase()))||null}let yt=null;window._resolveScanConfirm=function(e,t){typeof yt=="function"&&yt({choice:e,category:t})};let _=[],me=[],ee="",te=-1;const zt="scanner-scan-status";let V=!1,mi=0,be=0,K=0,ke=!1,Pa=0,io=0,gi=0,Be=0;function $t(e,t){const i=(Array.isArray(e.image_indices)?e.image_indices:[]).map(n=>t[n]).filter(Boolean);return i.length?i:t}function pa(e,t,a,i){const n=je(e.category),o=e.listing_type==="property"||n&&n.listing_type==="property",r=o?"Real Estate":n.category||e.category||"Other",d=e.confidence||"medium",s={high:"bg-emerald-500/10 text-emerald-400 border-emerald-500/20",medium:"bg-amber-500/10 text-amber-400 border-amber-500/20",low:"bg-red-500/10 text-red-400 border-red-500/20"}[d]||"bg-amber-500/10 text-amber-400 border-amber-500/20",c=$t(e,me).slice(0,3);return`
  <div class="scan-review-card rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 space-y-2 fade-in" data-i="${t}">
    <div class="flex items-center justify-between gap-2 flex-wrap">
      <p class="text-xs font-bold text-white">${t+1}. ${l(e.detected_name||"Detected product")}</p>
      <span class="inline-flex items-center gap-1">
        ${e._photoNotRead?'<span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border bg-red-500/10 text-red-300 border-red-500/20" title="The AI could not read the photos for this card - it was created from saved details only.">PHOTO NOT READ</span>':""}
        ${a?'<span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border bg-orange-500/10 text-orange-300 border-orange-500/20" title="This product appears more than once — consider deleting the duplicate.">DUPLICATE</span>':""}
        <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${s}">${l(d).toUpperCase()}</span>
      </span>
    </div>
    <div class="flex items-center gap-2 flex-wrap">
      ${c.map(u=>`<img src="${l(u)}" class="w-10 h-10 rounded-lg object-cover border border-violet-500/20" onerror="this.src='/fallback.svg'">`).join("")}
      <span class="text-[11px] text-gray-400">${o?"Real Estate":l(r)} &middot; ${(e.image_indices||[]).length||1} image(s)</span>
    </div>
    <div class="flex flex-wrap gap-2">
      ${i?`<button type="button" onclick="scanStreamPublish(${t})" class="btn-press px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition" title="Open this product, fill it with the AI scan and publish it right now with one click">Publish Now</button>`:""}
      <button type="button" onclick="scanReviewContinue(${t})" class="btn-press px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg transition">Continue to ${o?"Properties Manager":"its form"}</button>
      <button type="button" onclick="scanReviewEdit(${t})" class="btn-press px-4 py-2 bg-gray-700/60 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg transition">Edit</button>
      <button type="button" onclick="scanReviewDelete(${t})" class="btn-press px-3 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg transition" title="Permanently delete this product from the database">Delete</button>
      <button type="button" onclick="scanReviewRemove(${t})" class="btn-press px-4 py-2 bg-red-900/40 hover:bg-red-800/60 text-red-200 text-xs font-bold rounded-lg transition">Remove</button>
      <button type="button" onclick="scanReviewCancel()" class="btn-press px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 text-xs font-bold rounded-lg transition">Cancel</button>
    </div>
  </div>`}window.scanReviewRender=function(){if(ee==="scanner-scan-status"){scanStreamRender();return}const e=document.getElementById(ee);if(!e)return;if(e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),!_.length){e.classList.add("text-gray-400"),e.textContent="All detected products were removed — nothing was changed.";return}const t={};for(const a of _){const i=j(a.brand),n=j(a.model),o=j(a.detected_name),r=i&&n?`${i}::${n}`:o||`${i}::${n}`;r&&(t[r]=(t[r]||0)+1)}e.classList.add("text-gray-100"),e.innerHTML=`
    <div class="space-y-3">
      <div>
        <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="list-checks" class="w-4 h-4 text-violet-400"></i> ${_.length} distinct product${_.length>1?"s":""} detected</p>
        <p class="text-[11px] text-gray-400 mt-1">Review each card below. Edit, remove or delete duplicates as needed, then press Continue to open each product's form and publish it.</p>
      </div>
      ${_.map((a,i)=>{const n=j(a.brand),o=j(a.model),r=j(a.detected_name),d=n&&o?`${n}::${o}`:r||`${n}::${o}`;return pa(a,i,d&&t[d]>1)}).join("")}
    </div>`,window.lucide&&lucide.createIcons()};window.scanReviewContinue=async function(e){const t=_[e];if(!t)return;te=e;const a=$t(t,me),i=je(t.category);if(t.listing_type==="property"||i&&i.listing_type==="property"){(ee==="s1-scan-status"||ee==="scanner-scan-status")&&(ce(),ge=[]),oo(t,a);return}const o=i.category||t.category||"Other";if(ee==="s1-scan-status"||ee==="scanner-scan-status"){try{localStorage.removeItem(Me(o,""))}catch{}ge=[];let r=t.property_id?$e[t.property_id]:null;r&&r.specifications&&typeof r.specifications=="object"&&(r={...r,...r.specifications}),showAddProductStep2(o,r?{...r,images:a}:{images:a}),await Qe(t,a,o)}else{const r=document.getElementById("product-form"),d=r&&r.dataset.category||"";if(o!==d){try{localStorage.removeItem(Me(o,""))}catch{}switchProductFormCategory(o);const s=document.getElementById(ee);s&&(s.classList.remove("hidden"),s.classList.add("text-blue-300"),s.textContent=`Category changed to ${o} â€” finishing the scanâ€¦`),window.lucide&&lucide.createIcons()}await Qe(t,a,o)}};window.scanReviewEdit=function(e){const t=_[e];if(!t)return;const a=document.querySelector(`.scan-review-card[data-i="${e}"]`);if(!a)return;const i=je(t.category),o=t.listing_type==="property"||i&&i.listing_type==="property"?"Real Estate":i.category||t.category||"Other",r=we.map(d=>`<option value="${l(d)}" ${d===o?"selected":""}>${l(d)}</option>`).join("");a.innerHTML=`
    <p class="text-xs font-bold text-white">Edit detected product #${e+1}</p>
    <div class="space-y-2">
      <input id="sr-name-${e}" class="input-field !py-2 !text-xs" value="${l(t.detected_name||"")}" placeholder="Product name">
      <input id="sr-brand-${e}" class="input-field !py-2 !text-xs" value="${l(t.brand||"")}" placeholder="Brand">
      <input id="sr-model-${e}" class="input-field !py-2 !text-xs" value="${l(t.model||"")}" placeholder="Model">
      <select id="sr-cat-${e}" class="input-field !py-2 !text-xs">${r}</select>
    </div>
    <div class="flex flex-wrap gap-2">
      <button type="button" onclick="scanReviewApplyEdit(${e})" class="btn-press px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition">Apply</button>
      <button type="button" onclick="scanReviewRender()" class="btn-press px-4 py-2 bg-gray-700/60 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg transition">Back</button>
    </div>`};window.scanReviewApplyEdit=function(e){const t=_[e];if(!t)return;const a=document.getElementById(`sr-name-${e}`)?.value,i=document.getElementById(`sr-brand-${e}`)?.value,n=document.getElementById(`sr-model-${e}`)?.value,o=document.getElementById(`sr-cat-${e}`)?.value;a&&(t.detected_name=a),i&&(t.brand=i),n&&(t.model=n),o&&(t.category=o),scanReviewRender()};window.scanReviewRemove=function(e){_.splice(e,1),scanReviewRender()};window.scanReviewDelete=async function(e){const t=_[e];if(!t)return;const a=t.property_id;if(!a){_.splice(e,1),scanReviewRender();return}if(confirm(`Permanently delete "${t.detected_name||"this product"}" from the database and showroom?`)){try{await g.from("showroom_listings").delete().eq("property_id",a),Ze(a);try{await Fe(a,!0)}catch{}}catch{}_.splice(e,1),scanReviewRender(),m(`${t.detected_name||"Product"} deleted`)}};window.scanReviewCancel=function(){const e=document.getElementById(ee);e&&(e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300"),e.classList.add("text-gray-400"),e.textContent="Scan cancelled — nothing was changed.")};function j(e){return String(e||"").toLowerCase().replace(/[^a-z0-9]/g,"").trim()}let Z=[],le=[],de=[];function bi(){const e=document.getElementById(zt);if(!e)return;e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),e.classList.add("text-gray-100");const t=le.reduce((a,i)=>a+i.length-1,0);e.innerHTML=`
    <div class="space-y-3">
      <div class="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3">
        <p class="text-xs font-bold text-rose-300 flex items-center gap-2"><i data-lucide="copy" class="w-4 h-4"></i> ${le.length} duplicate product group${le.length>1?"s":""} found — ${t} extra listing${t>1?"s":""} to delete</p>
        <p class="text-[11px] text-gray-400 mt-1">The AI found products that look the same (same brand + model or name). Review each group below — keep one copy, delete the rest. You can also delete entire groups.</p>
      </div>
      ${Z.map((a,i)=>{const n=je(a[0].category),o=n&&!n.listing_type&&(n.category||a[0].category)||"Other";return`
        <div class="rounded-xl border border-amber-500/25 bg-amber-500/8 p-3 space-y-2">
          <p class="text-[11px] font-bold text-amber-300 uppercase tracking-wide">Group ${i+1}: ${l(a[0].detected_name||"Unknown product")} (${o})</p>
          ${a.map((r,d)=>{const s=de.indexOf(r);return`
            <div class="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 p-2">
              <img src="${l((r.image_indices||[0]).map(c=>me[c]).filter(Boolean)[0]||"")}" class="w-10 h-10 rounded-lg object-cover border border-white/10" onerror="this.src='/fallback.svg'">
              <div class="flex-1 min-w-0">
                <p class="text-[11px] font-bold text-white truncate">${l(r.detected_name||"Product")}</p>
                <p class="text-[10px] text-gray-400">${l(r.brand||"—")} ${l(r.model||"")} · ${l(r.property_id||"")}</p>
              </div>
              ${r._photoNotRead?'<span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-500/15 text-red-300 border border-red-500/20">NOT READ</span>':""}
              <button type="button" onclick="dupReviewDelete(${i},${d},${s})" class="btn-press px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-bold rounded-lg transition shrink-0">Delete</button>
            </div>`}).join("")}
          <button type="button" onclick="dupReviewDeleteGroup(${i})" class="btn-press w-full px-3 py-1.5 bg-rose-900/40 hover:bg-rose-800/60 text-red-200 text-[11px] font-bold rounded-lg transition">Delete ALL ${a.length} in this group</button>
        </div>`}).join("")}
      <div class="flex flex-wrap gap-2 pt-1">
        <button type="button" onclick="dupReviewFinish()" class="btn-press flex-1 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition">Keep & continue publishing</button>
        <button type="button" onclick="dupReviewDeleteAll()" class="btn-press px-4 py-2.5 bg-rose-600/20 hover:bg-rose-600/30 text-rose-200 text-xs font-bold rounded-xl transition">Delete ALL duplicates</button>
      </div>
    </div>`,window.lucide&&lucide.createIcons()}window.dupReviewDelete=async function(e,t,a){const i=Z[e],n=i[t];if(!n)return;const o=n.property_id;if(!confirm(`Permanently delete "${n.detected_name||"this product"}" from the database and showroom?`))return;if(o)try{await g.from("showroom_listings").delete().eq("property_id",o),Ze(o);try{await Fe(o,!0)}catch{}}catch{}i.splice(t,1),i.length<2&&Z.splice(e,1),le=Z.filter(d=>d.length>1),de.splice(a,1),Z=[];const r={};for(const d of de){const s=j(d.brand),c=j(d.model),u=j(d.detected_name),p=s&&c?`${s}::${c}`:u||`${s}::${c}`;p&&(r[p]=r[p]||[]).push(d)}if(Z=Object.values(r).filter(d=>d.length>1),le=Z,m(`${l(n.detected_name||"Product")} deleted`),!le.length){dupReviewFinish();return}bi()};window.dupReviewDeleteGroup=async function(e){const t=Z[e];if(!t||!confirm(`Permanently delete ${t.length-1} duplicate listing${t.length-1>1?"s":""} in this group from the database and showroom?`))return;for(let i=t.length-1;i>=1;i--){const n=t[i],o=n.property_id;if(o)try{await g.from("showroom_listings").delete().eq("property_id",o),Ze(o);try{await Fe(o,!0)}catch{}}catch{}const r=de.indexOf(n);r>=0&&de.splice(r,1)}m(`Deleted ${t.length-1} duplicate${t.length>2?"s":""} from group ${e+1}`),Z=[];const a={};for(const i of de){const n=j(i.brand),o=j(i.model),r=j(i.detected_name),d=n&&o?`${n}::${o}`:r||`${n}::${o}`;d&&(a[d]=a[d]||[]).push(i)}if(Z=Object.values(a).filter(i=>i.length>1),le=Z,!le.length){dupReviewFinish();return}bi()};window.dupReviewDeleteAll=async function(){const e=le.reduce((a,i)=>a+i.length-1,0);if(!confirm(`Permanently delete ALL ${e} duplicate listing${e!==1?"s":""} from the database and showroom? This cannot be undone.`))return;let t=0;for(const a of Z)for(let i=a.length-1;i>=1;i--){const n=a[i],o=n.property_id;if(o)try{await g.from("showroom_listings").delete().eq("property_id",o),Ze(o);try{await Fe(o,!0)}catch{}}catch{}const r=de.indexOf(n);r>=0&&de.splice(r,1),t++}m(`Deleted ${t} duplicate listing${t!==1?"s":""}`),dupReviewFinish()};window.dupReviewFinish=function(){if(_=de.slice(),Z=[],le=[],de=[],S(),_.length){const e=document.getElementById(zt);e&&(e.classList.remove("hidden","text-red-400","text-amber-300","text-blue-300","text-gray-400"),e.classList.add("text-gray-100"),e.innerHTML=`
        <div class="space-y-3">
          <div class="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-3">
            <p class="text-xs font-bold text-emerald-300 flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4"></i> Duplicates cleaned — ${_.length} unique product${_.length>1?"s":""} ready to publish</p>
          </div>
          ${_.map((t,a)=>pa(t,a)).join("")}
        </div>`,window.lucide&&lucide.createIcons())}else{const e=document.getElementById(zt);e&&(e.classList.remove("hidden","text-blue-300","text-amber-300"),e.classList.add("text-gray-400"),e.textContent="All duplicates removed — nothing left to publish."),m("All duplicates removed.","info")}};function yi(e){const t=e&&e.identification&&e.identification.identified!==!1?e.identification:{},a=e&&e.specs?e.specs:{},i=e&&e.price?e.price:null,n=[],o=P=>Array.isArray(P)?P.join(", "):String(P??"").trim(),r=(P,T)=>{if(T==null||o([T])==="")return;const W=document.querySelector(`#property-form [name="${P}"]`);W&&(W.value=String(T),n.push(P))},d=t.property_type||a.property_type;if(d){const P=ao(d);P&&r("property_type",P)}r("title",a.title||t.detected_name),r("description",a.description),r("subcategory",t.subcategory||a.subcategory);const s=t.bedrooms??a.bedrooms;s!=null&&s!==""&&r("bedrooms",parseInt(s,10)||s);const c=t.bathrooms??a.bathrooms;c!=null&&c!==""&&r("bathrooms",parseInt(c,10)||c),r("building_size",t.building_size||a.building_size),r("land_size",t.land_size||a.land_size);const u=t.parking_spaces??a.parking_spaces;u!=null&&u!==""&&r("parking_spaces",parseInt(u,10)||u);const p=String(t.furnished||a.furnished||"").toLowerCase();/furnished|yes/.test(p)?r("furnished","Furnished"):/unfurnished|no|empty/.test(p)&&r("furnished","Unfurnished");const y=String(t.listing_status||a.listing_status||"").toLowerCase();/rent|lease/.test(y)?r("listing_status","rent"):/sale|buy|purchase/.test(y)&&r("listing_status","sale");const h=t.area||a.area;h&&!(t.town||a.town)&&r("town",h),r("town",t.town||a.town),r("city",t.city||a.city),r("state",t.state||a.state);const b=t.country||a.country;if(r("country",b),b){const P=(Pe||[]).find(T=>String(T.name||"").toLowerCase()===String(b).toLowerCase()||String(T.code||"").toLowerCase()===String(b).toLowerCase());if(P&&P.code){const T=document.querySelector('#property-form [name="country_code"]');T&&(T.value=P.code,n.push("country_code"))}}const f=t.address||a.address;r("product_location",f||[h||t.town||a.town,t.city||a.city,t.state||a.state,b].filter(Boolean).join(", ")),r("address",t.address||a.address),r("zip_code",t.zip_code||a.zip_code);const w=Number(t.latitude??a.latitude),x=Number(t.longitude??a.longitude);Number.isFinite(w)&&w>=-90&&w<=90&&w!==0&&r("latitude",String(w)),Number.isFinite(x)&&x>=-180&&x<=180&&x!==0&&r("longitude",String(x)),r("features_text",o(a.features)),r("highlights_text",o(t.highlights||a.highlights)),r("seo_keywords_text",o(a.seo_keywords));const k=t.half_bathrooms??a.half_bathrooms;k!=null&&k!==""&&r("half_bathrooms",parseInt(k,10)||k);const v=t.floors??a.floors;v!=null&&v!==""&&r("floors",parseInt(v,10)||v),r("garage",t.garage||a.garage);const C=t.year_built??a.year_built;C!=null&&C!==""&&r("year_built",parseInt(C,10)||C);const $=t.year_renovated??a.year_renovated;$!=null&&$!==""&&r("year_renovated",parseInt($,10)||$);const R=t.condition||a.condition,J=["New Construction","Like New","Excellent","Good","Fair","Needs Renovation"];if(R){const P=String(R).toLowerCase(),T=J.find(W=>P.includes(W.toLowerCase())||W.toLowerCase().includes(P));T&&r("condition",T)}r("interior_features_text",o(a.interior_features)),r("exterior_features_text",o(a.exterior_features)),r("home_systems_text",o(a.home_systems));const ue=o(t.landmarks||a.landmarks);ue&&r("landmarks_text",ue);const O=a.floor_plan;if(O&&typeof O=="object"){O.image&&r("floor_plan_image",O.image),O.levels&&r("floor_plan_levels",O.levels),O.total_area&&r("floor_plan_total_area",O.total_area);const P=Array.isArray(O.rooms)?O.rooms.map(T=>{const W=String(T).match(/^(.*?):\s*(.*)$/);return W?`${W[1].trim()}: ${W[2].trim()}`:String(T)}):[];P.length&&r("floor_plan_rooms",P.join(", "))}const B=a.nearby_area;B&&typeof B=="object"&&(Array.isArray(B.schools)&&B.schools.length&&r("nearby_schools_text",B.schools.join(", ")),Array.isArray(B.hospitals)&&B.hospitals.length&&r("nearby_hospitals_text",B.hospitals.join(", ")),Array.isArray(B.shopping)&&B.shopping.length&&r("nearby_shopping_text",B.shopping.join(", ")),Array.isArray(B.transportation)&&B.transportation.length&&r("nearby_transportation_text",B.transportation.join(", ")),Array.isArray(B.distances)&&B.distances.length&&r("nearby_distances_text",B.distances.join(", ")));const ot=Array.isArray(a.legal_info)?a.legal_info.join(", "):o(a.legal_info);ot&&r("legal_info_text",ot),a.inspection_info&&r("inspection_info",a.inspection_info),a.risk_notes&&r("risk_notes",a.risk_notes);const Ve=document.querySelector('#property-form [name="verification_status"]');Ve&&(Ve.value="Not verified",n.push("verification_status"));const Te=new Set((Array.isArray(a.missing_fields)?a.missing_fields:[]).map(P=>String(P))),rt=new Set(["title","description","price","real_price","features","highlights","seo_keywords","country","country_code","state","city","town","product_location","area","address","zip_code","latitude","longitude","landmarks_text","interior_features_text","exterior_features_text","home_systems_text","floor_plan_image","floor_plan_levels","floor_plan_total_area","floor_plan_rooms","nearby_schools_text","nearby_hospitals_text","nearby_shopping_text","nearby_transportation_text","nearby_distances_text","legal_info_text","inspection_info","risk_notes","documents_text","verification_date","verification_status"]);Te.forEach(P=>{if(rt.has(P))return;const T=document.querySelector(`#property-form [name="${P}"]`);if(!(!T||T.type==="checkbox"||T.type==="radio"||T.type==="number")&&String(T.value||"").trim()===""){if(T.tagName==="SELECT"&&![...T.options].some(W=>W.value==="Not specified")){const W=document.createElement("option");W.value="Not specified",W.textContent="Not specified",T.appendChild(W)}T.value="Not specified",n.push(`${P} (Not specified)`)}});const I=Number.isFinite(Number(N))?Number(N):0,z=Number.isFinite(Number(Q))?Number(Q):999999999,st=P=>Math.max(I,Math.min(z,Math.round(P))),_e=i?Number(i.estimated_price):NaN,lt=i?Number(i.suggested_discount_price):NaN;if(Number.isFinite(_e)&&_e>0){const P=document.querySelector('#property-form [name="real_price"]');P&&(P.value=String(st(_e)),n.push("real_price"));const T=Number.isFinite(lt)&&lt>0&&lt<_e?lt:_e;r("price",String(st(T)))}const ha=String(a.title||t.detected_name||"Property").trim()||"Property",Ni=a.description||`${ha} available on Weverse Online Shop. Review the details below and edit anything before publishing.`,va=pi("#property-form",{titleFallback:ha,descriptionFallback:Ni});return va&&n.push(`${va} auto-completed (Not specified / safe defaults)`),typeof window.refreshPropertyMapFromForm=="function"&&window.refreshPropertyMapFromForm(),{filled:n}}const Ea=["brand","model","year","year_estimated","body_type","color","condition","subcategory","property_type","bedrooms","bathrooms","half_bathrooms","building_size","land_size","floors","garage","parking_spaces","furnished","year_built","year_renovated","area","address","zip_code","landmarks","town","city","state","country","latitude","longitude","listing_status"];function fi(){return Date.now()<(typeof F<"u"&&F._geminiQuotaUntil||0)?'<p class="text-[11px] text-amber-300 mt-1">⚠ Your Gemini key hit its FREE rate limit during this scan — parts were completed from saved details only. Wait ~1 minute and scan again for full AI reading.</p>':""}function qe(){try{return localStorage.getItem("weverse_scan_verify")==="on"}catch{return!1}}function no(e){try{localStorage.setItem("weverse_scan_verify",e?"on":"off")}catch{}}window.scanVerifyPassEnabled=qe;window.setScanVerifyPass=no;async function hi(e){F.beginScanSession();try{const t=await F.preflight(),a=t.gemini,i=t.groq;a&&a.ok&&i&&i.ok?e(`<span class="inline-flex items-center gap-1"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-300"></i> AI ready — Gemini primary + Groq backup verified (${l(a.model||"")}).</span>`,"text-emerald-300"):a&&a.ok?e(`AI ready via Gemini${a.model?` (${l(a.model)})`:""}. Groq backup not available${i&&i.error?": "+l(i.error):"."} Scans continue on Gemini alone.`,"text-emerald-300"):i&&i.ok?e(`Gemini unavailable${a&&a.error?" ("+l(a.error)+")":""} — scans will run on the Groq backup only.`,"text-amber-300"):t.error?e(`AI service unreachable (${l(t.error)}) — results will be filled from saved details only, clearly marked.`,"text-red-400"):e("No working vision provider found. Add a Google Gemini key (primary) and optionally a Groq key (backup) in AI Settings.","text-red-400")}catch{e("AI preflight failed — continuing anyway.","text-amber-300")}}async function ma({imageUrls:e,identification:t,category:a,formSelector:i,verify:n=qe()}){const o=Qn(i),r=Xn(o),d=await F.completeSpecsAndPrice(e,t,{category:a||"",maxImages:Je.maxImages,fieldsSchema:r}),s=d?d.price:null,c=d&&d.specs||{};let u={};for(const f of Ea)t&&t[f]!=null&&t[f]!==""&&(u[f]=t[f]);u={...u,...c};let p=Sa(o,u),y=!1;const h=`${d&&d.specs&&d.specs._aiProvider||""} ${d&&d.specs&&d.specs._aiModel||""}`,b=!/pollinations|free ai/i.test(h);if(n&&b)try{const f=await F.verifyExtraction(e,t,p.specs,o,{maxImages:Je.maxImages});if(f){const w=f.corrections&&typeof f.corrections=="object"?f.corrections:{},x=Object.keys(w);if(x.length){const k={...p.specs};for(const[v,C]of Object.entries(w))o.some($=>$.key===v)&&(C==null||String(Array.isArray(C)?C.join(", "):C).trim()===""||(k[v]=C));for(const[v,C]of Array.isArray(f.wrong_mapping)?f.wrong_mapping:[])k[v]!=null&&(k[C]==null||String(k[C]).trim()==="")&&(k[C]=k[v],delete k[v]);p=Sa(o,k),t={...t};for(const v of x)Ea.includes(v)&&p.specs[v]!=null&&(t[v]=p.specs[v])}y=!0,p.verificationNotes=Array.isArray(f.notes)?f.notes.slice(0,4):[]}}catch{}return{specs:p.specs,price:s,checklist:p.checklist,summary:p.summary,verified:y,verificationNotes:p.verificationNotes||[],identification:t,visionUsed:b,verifyRequested:!!n,providerLabel:h.trim()||"unknown"}}async function Qe(e,t,a){const i=document.getElementById("scan-ai-status"),n=(o,r)=>{i&&(i.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),r&&i.classList.add(r),i.innerHTML=o)};try{n("Scanning your photo into the formâ€¦","text-blue-300");let o=e;const r=await ma({imageUrls:t,identification:o,category:a,formSelector:"#product-form",verify:V?qe():!1});o=r.identification||o;const d=to({identification:o,specs:r.specs,price:r.price}),s=[o.year,o.brand,o.model].filter(Boolean).join(" ")||o.detected_name||"the product";let c=`<span class="inline-flex items-center gap-1"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-300"></i></span> ${l(s)} — ${d.filled.length} field${d.filled.length>1?"s":""} filled.`;r.visionUsed||(c+=' <span class="text-red-300">(Photo not read — values from saved details. Re-scan when the key is available.)</span>'),r.summary&&r.summary.flagged&&(c+=` Review ${r.summary.flagged} flagged value${r.summary.flagged>1?"s":""}.`),c+=V?" Publishing automatically now.":" Your uploaded photo stays attached. Press SAVE / UPDATE to publish.",n(c,"text-emerald-300"),m(V?`Filled for ${s} — publishing automatically.`:`Form filled for ${s} — review and press SAVE / UPDATE.`,"success")}catch(o){const r=String(o?.message||o),d=/key|api|configured|settings|vision/i.test(r);n(d?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${r}`,"text-red-400"),m("AI scan failed.","error")}window.lucide&&lucide.createIcons()}window.scanProductWithAI=async function(){const e=document.getElementById("product-form");if(!e){m("Open the product form first.","error");return}const t=document.getElementById("btn-scan-ai"),a=document.getElementById("scan-ai-status"),i=[...document.querySelectorAll('#image-url-inputs [name="images"]')||[]].map(s=>s.value).filter(Boolean);if(!i.length){m("Upload at least one product image before scanning.","error");return}const n=t?t.innerHTML:"",o=(s,c)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),c&&a.classList.add(c),a.innerHTML=s)};try{F.beginScanSession()}catch{}o("Scanning your photo and filling the formâ€¦","text-blue-300"),t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),a&&a.classList.remove("hidden");let r;try{r=await F.detectProducts(i,{category:e.dataset.category||"",maxImages:Je.maxImages})}catch(s){const c=String(s?.message||s),u=/key|api|configured|settings|vision/i.test(c);o(u?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${c}`,"text-red-400"),m("AI scan failed.","error"),t&&(t.disabled=!1,t.innerHTML=n);return}let d=r&&r.identified!==!1&&Array.isArray(r.products)&&r.products.length?r.products:[];d.length||(d=[{detected_name:"Product from your photos",category:e.dataset.category||"Other",listing_type:"product",confidence:"low",image_indices:i.map((s,c)=>c)}],o("Photo read partially — the form was filled with the best available details. Review, then press Publish.","text-amber-300"));try{await Qe(d[0],i,d[0].category||e.dataset.category||"Other")}finally{t&&(t.disabled=!1,t.innerHTML=n)}};function oo(e,t){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),showAddPropertyModal();const a=document.getElementById("image-preview"),i=document.getElementById("image-url-inputs");a&&i&&(a.innerHTML=t.map((r,d)=>Ae(r,d)).join(""),i.innerHTML=t.map((r,d)=>`<input type="hidden" name="images" id="img-url-${d}" value="${l(r)}">`).join(""),at(),Ie());const n=document.getElementById("scan-ai-prop-status"),o=(r,d)=>{n&&(n.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300"),d&&n.classList.add(d),n.innerHTML=r)};o("Reading every page, completing property details and valueâ€¦","text-blue-300"),(async()=>{try{const r=await ma({imageUrls:t,identification:e,category:"Real Estate",formSelector:"#property-form"}),d=r.identification||e,s=yi({identification:d,specs:r.specs,price:r.price});let c;r.price?c=`${l(d.detected_name||"Property")} â€” ${s.filled.length} field${s.filled.length>1?"s":""} ready for you. Review and edit everything, then press Publish Property.`:c=`${l(d.detected_name||"Property")} â€” ${s.filled.length} fields ready. Price estimate skipped â€” set the price manually, then press Publish Property.`,r.visionUsed?r.verifyRequested&&(c+=r.verified?'<p class="text-[11px] text-gray-400 mt-1">✓ Second-pass verification completed — every value was re-checked against your document.</p>':'<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run — values come from the first pass.</p>'):c+=`<p class="text-[11px] text-red-300 mt-1">⚠ Photo was NOT read by AI (${l(r.providerLabel||"text fallback")}) — these values did NOT come from your images.</p>`,c+=fi(),c+=ci(r.checklist,r.summary),o(c,r.price?"text-emerald-300":"text-amber-300"),m("Review the property details, then press Publish Property.","success"),window.lucide&&lucide.createIcons()}catch(r){const d=/key|api|configured|settings|vision/i.test(String(r?.message||r));o(d?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${String(r?.message||r)}`,"text-red-400"),m("AI scan failed.","error")}})()}window.scanPropertyWithAI=async function(){if(!document.getElementById("property-form")){m("Open the property form first.","error");return}const t=document.getElementById("btn-scan-ai-prop"),a=document.getElementById("scan-ai-prop-status"),i=[...document.querySelectorAll('#image-url-inputs [name="images"]')||[]].map(s=>s.value).filter(Boolean);if(!i.length){m("Upload at least one property image before scanning.","error");return}const n=t?t.innerHTML:"",o=(s,c)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),c&&a.classList.add(c),a.innerHTML=s)};await hi(o),t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),o("Identifying this property from your imagesâ€¦","text-blue-300");let r;try{r=await F.identifyProduct(i,{category:"Real Estate",maxImages:Je.maxImages})}catch(s){const c=String(s?.message||s),u=/key|api|configured|settings|vision/i.test(c);o(u?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${c}`,"text-red-400"),m("AI scan failed.","error"),t&&(t.disabled=!1,t.innerHTML=n);return}if(!r||r.identified===!1){o(r&&r.reason?`Could not identify the property: ${l(r.reason)}`:"The property could not be read from these images. Make sure the photos clearly show it, then try again.","text-amber-300"),m("The property could not be identified from the images.","error"),t&&(t.disabled=!1,t.innerHTML=n);return}t&&(t.disabled=!1,t.innerHTML=n);const d=await new Promise(s=>{yt=y=>{yt=null,s(y)};const c=document.getElementById("scan-ai-prop-status");if(!c){s({choice:"continue"});return}if(!window._propFormDirty){s({choice:"continue"});return}c.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300");const u=r.confidence||"medium",p={high:"text-emerald-400 border-emerald-500/20",medium:"text-amber-400 border-amber-500/20",low:"text-red-400 border-red-500/20"}[u]||"text-amber-400 border-amber-500/20";c.innerHTML=`
      <div class="rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 space-y-2 fade-in">
        <p class="text-xs font-bold text-white">AI identified: <span class="text-violet-300">${l(r.detected_name||"this property")}</span></p>
        <p class="text-[11px] text-gray-400">
          ${r.property_type?"Type: "+l(r.property_type)+" â€¢ ":""}${r.bedrooms?l(r.bedrooms)+" bed â€¢ ":""}${r.bathrooms?l(r.bathrooms)+" bath â€¢ ":""}${[r.city,r.state,r.country].filter(Boolean).join(", ")||"location not visible"}
          <span class="ml-1 inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${p}">${l(u).toUpperCase()} confidence</span>
        </p>
        <div class="flex flex-wrap gap-2">
          <button type="button" onclick="_resolveScanConfirm('continue')" class="btn-press px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg transition">Fill the property form</button>
          <button type="button" onclick="_resolveScanConfirm('cancel')" class="btn-press px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 text-xs font-bold rounded-lg transition">Cancel</button>
        </div>
      </div>`});if(!d||d.choice==="cancel"){o("Scan cancelled â€” nothing was changed.","text-gray-400"),m("Scan cancelled.","info");return}try{o("Reading every page, completing property details and market valueâ€¦","text-blue-300");const s=await ma({imageUrls:i,identification:r,category:"Real Estate",formSelector:"#property-form"}),c=s.identification||r,u=yi({identification:c,specs:s.specs,price:s.price});let p=`${l(c.detected_name||"Property")} â€” ${u.filled.length} field${u.filled.length>1?"s":""} ready for you. Review and edit everything, then press Publish Property.`;s.visionUsed?s.verifyRequested&&(p+=s.verified?'<p class="text-[11px] text-gray-400 mt-1">âœ“ Second-pass verification completed â€” every value was re-checked against your document.</p>':'<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run â€” values come from the first pass.</p>'):p+=`<p class="text-[11px] text-red-300 mt-1">⚠ Photo was NOT read by AI (${l(s.providerLabel||"text fallback")}) — these values did NOT come from your images.</p>`,p+=fi(),p+=ci(s.checklist,s.summary),o(p,"text-emerald-300"),m("Review the property details, then press Publish Property.","success")}catch(s){const c=String(s?.message||s),u=/key|api|configured|settings|vision/i.test(c);o(u?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${c}`,"text-red-400"),m("AI scan failed.","error")}window.lucide&&lucide.createIcons()};let ge=[];window.handleStep1Files=async function(e){const t=Array.from(e||[]).slice(0,24);if(!t.length)return;const a=document.getElementById("s1-image-preview"),i=[],n=[];for(const o of t){const r=o.type==="application/pdf"||et(o.name),d=Re(o);if(!o.type.startsWith("image/")&&!r&&!d)continue;if(d&&o.size>100*1024*1024){m("Video must be under 100 MB.","error");continue}i.push(o);const s=document.createElement("div");s.className="img-thumb uploading",s.style.cssText="min-width:90px;min-height:80px;",s.innerHTML='<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-400"><div class="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-1.5"></div><span class="text-[10px] font-bold">Uploading…</span></div>',a&&a.appendChild(s),n.push(s)}i.length&&(Wt(),await li(i,3,async(o,r)=>{const d=await ua(o),s=n[r];setTimeout(()=>{if(!(!s||!s.isConnected)){if(s.remove(),d){ge.push(d);const c=document.createElement("div");c.innerHTML=vi(d,ge.length-1);const u=c.firstElementChild,p=s.nextSibling;p?a.insertBefore(u,p):a.appendChild(u)}else m(`Failed to upload ${Re(o)?"video":"image"}. Try a smaller file.`,"error");Wt(),window.lucide&&lucide.createIcons()}},0)}))};window.handleStep1ImageUpload=async function(e){await window.handleStep1Files(e.target.files||[]),e.target.value=""};window.removeStep1Image=function(e){ge.splice(e,1),ro()};function vi(e,t){const i=Ne(e)?`<video src="${l(e)}" muted loop preload="metadata" playsinline class="w-full h-full object-cover"></video>
       <div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center"><svg class="w-3.5 h-3.5 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:`<img src="${l(e)}" onerror="this.src='/fallback.svg'">`;return`<div class="img-thumb ${t===0?"cover-img":""}" data-index="${t}">
    ${i}
    <button class="rm" onclick="removeStep1Image(${t})" type="button">✕</button>
  </div>`}function Wt(){const e=document.getElementById("btn-s1-scan");e&&(e.disabled=ge.length===0,e.style.opacity=ge.length?"":"0.5")}function ro(){const e=document.getElementById("s1-image-preview");e&&(e.innerHTML=ge.map((t,a)=>vi(t,a)).join(""),Wt(),window.lucide&&lucide.createIcons())}window.scanFirstWithAI=async function(){const e=ge.slice();if(!e.length){m("Upload at least one product image before scanning.","error");return}const t=document.getElementById("btn-s1-scan"),a=document.getElementById("s1-scan-status"),i=t?t.innerHTML:"",n=(d,s)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),s&&a.classList.add(s),a.innerHTML=d)};await hi(n),t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),n("Detecting every distinct product in your imagesâ€¦","text-blue-300");let o;try{o=await F.detectProducts(e,{category:"",maxImages:Je.maxImages})}catch(d){const s=/key|api|configured|settings|vision/i.test(String(d?.message||d));n(s?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${String(d?.message||d)}`,"text-red-400"),t&&(t.disabled=!1,t.innerHTML=i);return}t&&(t.disabled=!1,t.innerHTML=i);let r=o&&o.identified!==!1&&Array.isArray(o.products)&&o.products.length?o.products:[];r.length||(r=[{detected_name:"Product from your photos",category:"Other",listing_type:"product",confidence:"low",image_indices:e.map((d,s)=>s)}],n("The AI could not confidently read these photos â€” a card was created with all of them. Review, edit the details, then continue to save & publish.","text-amber-300")),_=r,me=e,$e={},ee="s1-scan-status",scanReviewRender(),m(`${r.length} distinct product${r.length>1?"s":""} detected â€” review each one, then continue.`,"info")};let $e={},ye=!1;function so(e){const t=parseFloat(e&&e.price);return!Number.isFinite(t)||t<=0}async function wi(){const e=new Set,t=[],a=i=>{!i||!i.property_id||i.listing_type==="property"||e.has(i.property_id)||!Array.isArray(i.images)||!i.images.length||ye&&!so(i)||(e.add(i.property_id),t.push(i))};try{const{data:i,error:n}=await g.from("showroom_listings").select("*").neq("listing_type","property");(n?[]:i||[]).forEach(a)}catch{}return wt().forEach(a),t}window.returnToScanReviewAfterSave=function(e=te){if(te=-1,!_.length){if(ke)return ct("Published! The scanner keeps working on the remaining products - new results will appear here."),S(),!0;if(V){V=!1;const t=document.getElementById("scanner-scan-status");t&&(t.classList.remove("hidden","text-red-400","text-amber-300","text-blue-300"),t.classList.add("text-emerald-300"),t.innerHTML=`<p class="font-bold">Auto-scan complete: ${be} published, ${K} error${K!==1?"s":""}.</p>`),m(`Auto-scan complete: ${be} published, ${K} error${K!==1?"s":""}.`,be>0?"success":"info"),S()}return!1}if(Number.isInteger(e)&&e>=0&&e<_.length&&(_.splice(e,1),ke&&ee==="scanner-scan-status"&&gi++),!_.length){if(ke)return ct("Published! The scanner keeps working on the remaining products - new results will appear here."),S(),!0;if(me=[],$e={},V){V=!1;const t=document.getElementById("scanner-scan-status");t&&(t.classList.remove("hidden","text-red-400","text-amber-300","text-blue-300"),t.classList.add("text-emerald-300"),t.innerHTML=`<p class="font-bold">Auto-scan complete: ${be} published, ${K} error${K!==1?"s":""}.</p>`),m(`Auto-scan complete: ${be} published, ${K} error${K!==1?"s":""}.`,be>0?"success":"info"),S()}return!1}return V?(We(_[0],0),!0):ke?(ct("Published! The scanner keeps working on the remaining products - new results will appear here."),S(),!0):(ee="scanner-scan-status",U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="scan-search" class="w-5 h-5 text-violet-400"></i> General AI Scanner</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition" title="Close">âœ• Close</button>
        </div>
        <div class="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-3 mb-3">
          <p class="text-xs font-bold text-emerald-300 flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4"></i> Saved & published! Select the next product below to keep going.</p>
        </div>
        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3">
          <label class="flex items-start gap-2 text-[11px] text-gray-400 select-none cursor-pointer">
            <input type="checkbox" class="accent-violet-500 mt-0.5" ${qe()?"checked":""} onchange="setScanVerifyPass(this.checked)">
            <span>Second-pass verification for remaining saves — more accurate, uses about twice the free AI quota.</span>
          </label>
          <div id="scanner-scan-status" class="hidden text-xs font-medium"></div>
        </div>
      </div>
    </div>`),scanReviewRender(),window.lucide&&lucide.createIcons(),!0)};async function We(e,t){const a=$t(e,me),i=je(e.category),n=e.listing_type==="property"||i&&i.listing_type==="property",o=n?"Real Estate":i.category||e.category||"Other",r=mi,d=r-_.length;((c,u)=>{const p=document.getElementById("scanner-scan-status");p&&(p.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),p.classList.add(u),p.innerHTML=c)})(`Processing ${d+1} of ${r}: ${l(e.detected_name||e.title||"product")}â€¦`,"text-blue-300");try{if(n){K++,_.splice(t,1),_.length?We(_[0],0):window.returnToScanReviewAfterSave(-1);return}let c=e.property_id?$e[e.property_id]:null;c&&c.specifications&&typeof c.specifications=="object"&&(c={...c,...c.specifications}),showAddProductStep2(o,c?{...c,images:a}:{images:a}),await new Promise(y=>setTimeout(y,250)),await Qe(e,a,o);const p=document.getElementById("product-form")?.querySelector("[type=submit][name=action][value=publish]");p?(te=t,p.click()):(K++,closeProductFormModal(),_.splice(t,1),_.length?We(_[0],0):window.returnToScanReviewAfterSave(-1))}catch{K++,closeProductFormModal(),_.splice(t,1),_.length?We(_[0],0):window.returnToScanReviewAfterSave(-1)}}window.openGeneralAiScanner=async function(e=!1){ye=!!e;const t=await wi();U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="scan-search" class="w-5 h-5 text-violet-400"></i> ${ye?"AI Price Scanner":"General AI Scanner"}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition" title="Close">× Close</button>
        </div>

        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3">
          <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> ${ye?"Scan products with no price and auto-fill them":"Scan your products with AI"}</p>
          <p class="text-[11px] text-gray-500">${ye?"Every product in your Product Manager that still has no price is scanned: the AI reads its existing photos, identifies the item, assigns a fair current market price, completes the specifications and writes the description. Everything is filled and published automatically — no questions asked. Duplicates are skipped silently.":"The scanner works on the products already in your Product Manager — no image upload needed. Press SCAN ALL WITH AI and it reads each product's existing photos to identify it, complete its specifications, write the description and features, pick the correct category, and suggest a fair price. Everything is filled and published automatically — no questions asked. Duplicates are skipped silently."}</p>
          <div class="flex items-center gap-2 text-[11px] font-bold text-gray-300 bg-white/5 border border-violet-500/20 rounded-xl px-3 py-2.5">
            <i data-lucide="package" class="w-4 h-4 text-violet-400 shrink-0"></i>
            <span>${t.length} product${t.length===1?"":"s"} ready to scan in the Product Manager.</span>
          </div>
          <button type="button" id="btn-scanner-scan" onclick="scanGeneralWithAI()" class="btn-press w-full px-4 py-3 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2">
            <i data-lucide="scan-search" class="w-4 h-4"></i> ${ye?"SCAN & FILL ALL PRICES":"SCAN ALL WITH AI"}
          </button>
          <label class="flex items-start gap-2 text-[11px] text-gray-400 select-none cursor-pointer">
            <input type="checkbox" class="accent-violet-500 mt-0.5" ${qe()?"checked":""} onchange="setScanVerifyPass(this.checked)">
            <span>Second-pass verification — more accurate, uses about twice the free AI quota.</span>
          </label>
          <div id="scanner-scan-status" class="hidden text-xs font-medium"></div>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()};function lo(e,t){const a=Symbol("ai-scan-timeout");return Promise.race([e,new Promise(i=>setTimeout(()=>i(a),t))]).then(i=>{if(i===a)throw new Error("A scan step took too long and timed out.");return i})}window.scanGeneralWithAI=async function(){if(ke||V){m("A scan is already running - wait for it to finish before starting another.","info");return}let e=[];try{e=await lo(wi(),15e3)}catch{e=[]}if(!e.length){m(ye?"No products are missing a price right now — every product already has one.":"No products with photos are in the Product Manager yet — add a product first.","error");return}const t=document.getElementById("btn-scanner-scan"),a=document.getElementById("scanner-scan-status");t&&t.innerHTML;const i=(o,r)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),a.classList.add(r),a.innerHTML=o)};try{const o=await F.getConfig();String(o.gemini_key||o.gemini_api_key||"").trim()||i("No Gemini key found â€” scanning anyway with the FREE built-in AI (no key needed). Products whose photos cannot be read will still be filled from their saved details. For the best photo recognition, add a FREE Gemini key in AI Settings (aistudio.google.com/apikey).","text-blue-300")}catch{}t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),i(`Detecting and completing ${e.length} product${e.length===1?"":"s"}â€¦`,"text-blue-300"),V=!0,mi=e.length,be=0,K=0,ke=!1,_=[],me=[],$e={},ee="scanner-scan-status";let n=0;for(const o of e){const r=(o.images||[]).filter(Boolean),d=[];for(const s of r)me.push(s),d.push(n),n++;$e[o.property_id]=o,_.push({detected_name:o.title||o.property_id||"Product",category:o.category||"Other",listing_type:o.listing_type||"product",brand:o.brand||null,model:o.specifications&&o.specifications.model||o.model||null,confidence:"medium",property_id:o.property_id,image_indices:d})}We(_[0],0)};window.scanStreamRender=function(){const e=document.getElementById("scanner-scan-status");if(!e)return;e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),e.classList.add("text-gray-100");const t=ke,a=Pa,i=Math.min(io,Pa),n=gi,o=_.length,r={};for(const c of _){const u=j(c.brand),p=j(c.model),y=j(c.detected_name),h=u&&p?`${u}::${p}`:y||`${u}::${p}`;h&&(r[h]=(r[h]||0)+1)}let s=`<div class="space-y-3">${t?`<p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="loader-2" class="w-4 h-4 animate-spin text-violet-400"></i> Scanning ${i} of ${a} — results appear below as each product is scanned.</p>`:`<p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="list-checks" class="w-4 h-4 text-violet-400"></i> ${i} product${i===1?"":"s"} processed${n?`, ${n} published`:""}${Be?`, ${Be} error${Be>1?"s":""}`:""}.</p>`}`;o?(s+='<p class="text-[11px] text-gray-400">Each card below can be published with one click — press Publish Now and the scanner keeps working on the rest in the background.</p>',s+=_.map((c,u)=>{const p=j(c.brand),y=j(c.model),h=j(c.detected_name),b=p&&y?`${p}::${y}`:h||`${p}::${y}`;return pa(c,u,b&&r[b]>1,!0)}).join("")):t?s+='<p class="text-[11px] text-gray-500">Waiting for the first product to finish scanning …</p>':s+='<p class="text-[11px] text-gray-500">Nothing to scan yet.</p>',s+="</div>",e.innerHTML=s,window.lucide&&lucide.createIcons()};window.scanStreamPublish=async function(e){const t=_[e];if(!t)return;te=e;const a=$t(t,me),i=je(t.category),n=t.listing_type==="property"||i&&i.listing_type==="property",o=n?"Real Estate":i.category||t.category||"Other";try{if(n){Be++,_.splice(e,1),scanStreamRender();return}let r=t.property_id?$e[t.property_id]:null;r&&r.specifications&&typeof r.specifications=="object"&&(r={...r,...r.specifications}),showAddProductStep2(o,r?{...r,images:a}:{images:a}),await new Promise(c=>setTimeout(c,250)),await Qe(t,a,o);const d=document.getElementById("product-form"),s=d?d.querySelector("[type=submit][name=action][value=publish]"):null;s?(te=e,s.click()):(Be++,closeProductFormModal(),_.splice(e,1),scanStreamRender())}catch(r){Be++,closeProductFormModal(),_.splice(e,1),scanStreamRender(),m("Could not publish this product: "+String(r&&r.message||r),"error")}};function ct(e){ee="scanner-scan-status",U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="scan-search" class="w-5 h-5 text-violet-400"></i> ${ye?"AI Price Scanner":"General AI Scanner"}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition" title="Close">x Close</button>
        </div>
        <div class="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-3 mb-3">
          <p class="text-xs font-bold text-emerald-300 flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4"></i> ${e||"Saved & published! Select the next product below to keep going."}</p>
        </div>
        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3">
          <label class="flex items-start gap-2 text-[11px] text-gray-400 select-none cursor-pointer">
            <input type="checkbox" class="accent-violet-500 mt-0.5" ${qe()?"checked":""} onchange="setScanVerifyPass(this.checked)">
            <span>Second-pass verification for remaining scans — more accurate, uses about twice the free AI quota.</span>
          </label>
          <div id="scanner-scan-status" class="hidden text-xs font-medium"></div>
        </div>
      </div>
    </div>`),scanStreamRender(),window.lucide&&lucide.createIcons()}window.openStreamReviewModal=ct;window.saveProduct=async function(e,t,a){e.preventDefault();const i=e.target,n=i.querySelector("[type=submit][name=action][value=publish]"),o=a?"One-Click Publish Changes":"One-Click Publish Product";if(window._productPublishInFlight)return;window._productPublishInFlight=!0,n&&(n.disabled=!0,n.style.opacity="0.75",n.innerHTML='<span style="display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:_pubspin .7s linear infinite;vertical-align:-2px;margin-right:8px;"></span>Publishing…');try{if(!document.getElementById("_pubspin-style")){const d=document.createElement("style");d.id="_pubspin-style",d.textContent="@keyframes _pubspin{to{transform:rotate(360deg)}}",document.head.appendChild(d)}}catch{}const r=()=>{window._productPublishInFlight=!1,n&&(n.disabled=!1,n.style.opacity="",n.textContent=o)};try{const d=new FormData(i),s={};let c=0;for(const[b,f]of d.entries())if(b==="images"){s.images=s.images||[];const w=String(f);f&&!w.startsWith("blob:")?s.images.push(w):w.startsWith("blob:")&&c++}else b==="tags"?(s.tags=s.tags||[],s.tags.push(f)):s[b]=f;if(c&&!(s.images||[]).length){r(),m("Your images were still uploading â€” please wait a moment and press Publish again (the photos were not saved with the product).","error");return}s.is_featured=i.querySelector('[name="is_featured"]')?.checked?"on":"",s.is_active=i.querySelector('[name="is_active"]')?.checked?"on":"";const u=d.get("action")==="draft",p=b=>jt(b),y=b=>{const f=["model","storage","ram","processor","display","material","gender","platform","voltage","engine","transmission","fuel_type","horsepower","mileage","drive_type","body_type","model_year","seating_capacity","doors","real_price","type","size","age_range","skin_type","ingredients","dimensions","author","publisher","language","format","isbn","pages","edition","quantity","pet_type","lens","sensor","megapixels","video","license","version","duration","followers","engagement","niche","usage","shelf_life","assembly","weatherproof","movement","case_material","water_resistance","gemstone","movement_type","warranty_period"],w={};for(const x of f){const k=b[x];if(x==="real_price"){const v=k!=null&&String(k).trim()!==""?parseFloat(k):null;w[x]=v!=null&&Number.isFinite(v)&&v>0?Math.round(v):null;continue}w[x]=k!=null&&String(k).trim()!==""?k:null}if(b.safety_features){const x=p(b.safety_features);w.safety_features=x.length?x:null}return w};if(a){let b=null;try{const{data:I}=await g.from("showroom_listings").select("*").eq("property_id",a).maybeSingle();I&&(b=ve(I))}catch{}if(b||(b=ve((window._productsData||[]).find(I=>I.property_id===a))),b||(b=ve(Ye?Ye(a):null)),!b)throw new Error("Could not load the current product to compare your changes against. Refresh the page, re-open the product and try again.");const f=(I,z)=>{const st=I===""||I==null?"":I,_e=z===""||z==null?"":z;return String(st).trim()===String(_e).trim()},w={};["title","description","currency","subcategory","brand","color","size","condition","warranty","availability_status"].forEach(I=>{f(s[I],b[I])||(w[I]=s[I]==null||s[I]===""?null:s[I])});const x=s.price===""||s.price==null?null:parseFloat(s.price);f(x,b.price)||(w.price=x==null?b.price:Math.max(N,Math.min(Q,x)));const k=s.stock_quantity===""||s.stock_quantity==null?null:parseInt(s.stock_quantity,10);f(k,b.stock_quantity)||(w.stock_quantity=Number.isFinite(k)?k:null);const v=p(s.features_text);f(v.join("||"),(Array.isArray(b.features)?b.features:[]).join("||"))||(w.features=v);const C=s.tags||[];f(C.join("||"),(Array.isArray(b.tags)?b.tags:[]).join("||"))||(w.tags=C);const $=p(s.highlights_text);f($.join("||"),(Array.isArray(b.highlights)?b.highlights:[]).join("||"))||(w.highlights=$);const R=p(s.seo_keywords_text);f(R.join("||"),(Array.isArray(b.seo_keywords)?b.seo_keywords:[]).join("||"))||(w.seo_keywords=R);const J=s.images||[];f(J.join("||"),(Array.isArray(b.images)?b.images:[]).join("||"))||(w.images=J);const ue=J.find(I=>typeof I=="string"&&Ne(I))||null;f(ue,b.video_url)||(w.video_url=ue);const O=s.is_featured==="on";!!b.is_featured!==O&&(w.is_featured=O);const B=u?!1:s.is_active==="on";!!b.is_active!==B&&(w.is_active=B);const ot=y(s),Ve={...b.specifications&&typeof b.specifications=="object"?b.specifications:{},...ot};if(JSON.stringify(Ve)!==JSON.stringify(b.specifications||{})&&(w.specifications=Ve),Object.keys(w).length===0){if(V){r();try{localStorage.removeItem(Me(t,a))}catch{}const I=te;closeProductFormModal(),S(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(I)&&S();return}m("No changes detected â€” nothing was saved.","info");try{localStorage.removeItem(Me(t,a))}catch{}m("No changes were needed — this product is already published with exactly these details.","info"),r(),closeProductFormModal(),S();return}const Te={...b,...w,property_id:a,updated_at:new Date().toISOString()};delete Te.id;const rt=await xa(Te);if(rt.error){if(V){K++,r();const z=te;closeProductFormModal(),S(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(z)&&S();return}r();const I=Bt(rt.error,u?"Draft save":"Product publish");m(I,"error");try{let z=i.querySelector(".__publish-error-banner");z||(z=document.createElement("div"),z.className="__publish-error-banner mb-3 p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-medium",i.prepend(z)),z.textContent=I}catch{}return}try{Rt(Te)}catch{}try{const I=(window._productsData||[]).findIndex(z=>z.property_id===a);I>=0&&(window._productsData[I]=Te)}catch{}m(u?"Draft saved!":`Published Successfully â€” your product is updated and live in your showroom (${Object.keys(w).length} change${Object.keys(w).length>1?"s":""}).`)}else{if(!s.title||!s.title.trim())throw new Error("A product title is required.");if(s.price===""||s.price==null||!isFinite(parseFloat(s.price)))throw new Error("A price is required.");if(!!i.querySelector('[name="condition"]')&&!s.condition)throw new Error("Please choose the product condition.");const f={listing_type:"product",category:t,subcategory:s.subcategory||null,title:s.title.trim(),description:s.description||"",price:Math.max(N,Math.min(Q,parseFloat(s.price)||0)),currency:s.currency||"USD",country:"",country_code:"",listing_status:"sale",state:"",city:"",product_location:"",latitude:null,longitude:null,is_active:u?!1:s.is_active==="on",is_featured:s.is_featured==="on",brand:s.brand||null,color:s.color||null,size:s.size||null,condition:s.condition||null,warranty:s.warranty||null,availability_status:s.availability_status||"In Stock",stock_quantity:s.stock_quantity?parseInt(s.stock_quantity):null,images:s.images||[],video_url:(s.images||[]).find(k=>typeof k=="string"&&Ne(k))||null,features:p(s.features_text).length?p(s.features_text):s.tags||[],tags:s.tags||[],highlights:p(s.highlights_text),seo_keywords:p(s.seo_keywords_text),is_ai_generated:!!s.catalog_template_id,ai_generated_fields:s.catalog_template_id?["title","description","features","highlights","seo_keywords"]:[],specifications:y(s)},w=aa();f.property_id=w;const x=await xa(f);if(x.error){if(V){K++,r();const v=te;closeProductFormModal(),S(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(v)&&S();return}r();const k=Bt(x.error,"Product publish");m(k,"error");try{let v=i.querySelector(".__publish-error-banner");v||(v=document.createElement("div"),v.className="__publish-error-banner mb-3 p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-medium",i.prepend(v)),v.textContent=k}catch{}return}try{Rt({...f,property_id:f.property_id})}catch{}try{(window._productsData=window._productsData||[]).unshift({...f})}catch{}m(u?"Draft saved!":"Published Successfully! Your product is now live in your showroom.")}V&&be++,r();try{localStorage.removeItem(Me(t,a))}catch{}const h=te;if(closeProductFormModal(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(h)){S();return}S()}catch(d){const s=d&&d.message&&!/failed to fetch|networkerror/i.test(String(d.message))?d.message:Bt(d,"Product publish");if(V&&K++,r(),V){const c=te;closeProductFormModal(),S(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(c)&&S();return}m(s,"error")}};window.editProduct=async function(e){const{data:t,error:a}=await g.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;if(i||(i=Ye(e)),i||(i=(window._productsData||[]).find(n=>n.property_id===e)||null),!i)return m("Product not found","error");i.specifications&&typeof i.specifications=="object"&&(i={...i,...i.specifications}),showAddProductStep2(i.category||"Other",i)};window.toggleProductActive=async function(e,t){let a=null;try{const{data:n}=await g.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();n&&(a=ve(n))}catch{}if(a||(a=ve((window._productsData||[]).find(n=>n.property_id===e))),!a||!a.property_id){Nt(e,{is_active:t,availability_status:t?"In Stock":"Out of Stock"}),m(t?"Product published locally":"Product unpublished locally","info"),S();return}delete a.id,a.property_id=e,a.is_active=t,a.availability_status=t?"In Stock":"Out of Stock";const{error:i}=await g.from("showroom_listings").upsert(a,{onConflict:"property_id"});if(i){if(X(i))return m(`âšï¸ ${t?"Publish":"Unpublish"} blocked: database admin role rejected the write. Re-run the admin permission migration.`,"error");Nt(e,{is_active:t,availability_status:t?"In Stock":"Out of Stock"}),m(t?"Product published locally":"Product unpublished locally","info"),S();return}m(t?"Product published":"Product unpublished"),S()};window.duplicateProduct=async function(e,t=!1){const{data:a}=await g.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();if(!a)return;const{id:i,property_id:n,created_at:o,updated_at:r,...d}=a,s=aa();await g.from("showroom_listings").insert({...d,property_id:s,title:a.title+" (Copy)",is_active:!1}),t||(m("Product duplicated"),S())};window.archiveProduct=async function(e){confirm("Archive this product? It will be hidden from the website but can be restored.")&&(await g.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",e),m("Product archived"),S())};const Kt=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","Commercial Building","Hotel","Land","Other"];async function Pt(){const e=document.getElementById("content");try{const{data:t,error:a}=await g.from("showroom_listings").select("*").eq("listing_type","property").order("created_at",{ascending:!1});let i=a?wt().filter(o=>o.listing_type==="property"):t||[];if(Array.isArray(ie)){const o=new Set(i.map(d=>d.property_id)),r=ie.filter(d=>d.listing_type==="property"&&d.property_id&&!o.has(d.property_id));r.length&&(i=i.concat(r))}i.sort((o,r)=>new Date(r.created_at||0)-new Date(o.created_at||0));try{await Zt()}catch{}const n=new Set(xt());i=i.filter(o=>!(o&&o.property_id&&n.has(o.property_id))),window._propertiesData=i,e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex flex-wrap items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Properties Manager</h2>
          <button onclick="fixPropertyMaps()" class="btn-press flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition" title="Geocode any property that is missing its map coordinates and update its map">
            <i data-lucide="map-pin" class="w-4 h-4"></i> Fix Maps
          </button>
          <button onclick="showAddPropertyModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Property
          </button>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr>
                <th>Property</th><th>Type</th><th class="hidden sm:table-cell">Location</th>
                <th class="hidden md:table-cell">Price</th><th>Status</th><th>Actions</th>
              </tr></thead>
              <tbody>
                ${i.length===0?'<tr><td colspan="6" class="text-center text-gray-500 py-12">No properties yet.</td></tr>':i.map(o=>`<tr>
                    <td>
                      <div class="flex items-center gap-2.5">
                        <img src="${l((o.images||[])[0]||"/fallback.svg")}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
                        <div><p class="text-xs font-bold text-white truncate max-w-[160px]">${l(o.title)}</p><p class="text-[10px] font-mono text-gray-500">${l(o.property_id)}</p></div>
                      </div>
                    </td>
                    <td><span class="text-xs text-gray-300">${l(o.property_type||o.category)}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${l([o.city,o.state,o.country].filter(Boolean).join(", ")||"â€”")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(o.price||0).toLocaleString()}</span></td>
                    <td>${Y(o.listing_status||"sale")} ${Y(o.is_active?"active":"inactive")}</td>
                    <td>
                      <div class="flex gap-1">
                        <button onclick="editProperty('${o.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
                        <button onclick="archiveProduct('${o.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
                        <button onclick="deleteProduct('${o.property_id}')" class="btn-press p-1.5 text-rose-400 hover:bg-rose-500/10 rounded-lg transition"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                      </div>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.showAddPropertyModal=function(e={}){const t=!!e.property_id,a=Oa("property","Real Estate"),i=e.country_code||"US",n=e.currency||ea(i);U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${t?"Edit":"Add"} Property</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <form id="property-form" onsubmit="saveProperty(event,'${t?e.property_id:""}')" class="space-y-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-3">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs font-bold text-white uppercase tracking-wide">Property Catalog Autofill</p>
                <p class="text-[11px] text-gray-500 mt-1">Choose a property template and country to generate a global real-estate listing with map-ready fields.</p>
              </div>
              <button type="button" onclick="applyPropertyCatalogTemplate()" class="btn-press px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold rounded-xl transition">Refresh Template</button>
            </div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Property Template</label><select class="input-field" name="catalog_template_id" id="ppf-catalog_template_id" onchange="applyPropertyCatalogTemplate()"><option value="">Choose a property template...</option>${a.map(r=>`<option value="${r.id}">${l(r.label)} - ${l(r.propertyType||r.subcategory)}</option>`).join("")}</select></div>
              <div><label class="lbl">Country</label><select class="input-field" name="country_code" id="ppf-country_code" onchange="syncPropertyCountry(); applyPropertyCatalogTemplate()">${ri(i)}</select></div>
              <div><label class="lbl">Currency</label><select class="input-field" name="currency" id="ppf-currency" onchange="applyPropertyCatalogTemplate()">${si(n)}</select></div>
            </div>
            <p id="ppf-image-requirement" class="text-[11px] text-gray-400">Any number of images is fine â€” save and publish anytime.</p>
            <input type="hidden" name="required_image_count" id="ppf-required_image_count" value="">
          </div>

          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Property Title *</label><input class="input-field" name="title" value="${l(e.title||"")}" required placeholder="e.g. Cozy 3-Bedroom Family Home"></div>
            <div><label class="lbl">Property Type *</label><select class="input-field" name="property_type" required>
              ${Kt.map(r=>`<option value="${r}" ${e.property_type===r?"selected":""}>${r}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Listing Status</label><select class="input-field" name="listing_status">
              <option value="sale" ${e.listing_status!=="rent"?"selected":""}>For Sale</option>
              <option value="rent" ${e.listing_status==="rent"?"selected":""}>For Rent</option>
            </select></div>
            <div><label class="lbl">Price *</label><input type="number" class="input-field" id="ppf-price" name="price" value="${e.price||""}" required placeholder="0"></div>
            <div><label class="lbl">Real Price (crossed out)</label><input type="number" class="input-field" id="ppf-real_price" name="real_price" value="${e.real_price??e.specifications?.real_price??""}" placeholder="Original price before discount"></div>
            <div><label class="lbl">Country Name *</label><input class="input-field" id="ppf-country" name="country" value="${l(e.country||"")}" required placeholder="United States"></div>
            <div><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${l(e.subcategory||"")}" placeholder="e.g. Villas, Mansions, Hotels"></div>
            <div><label class="lbl">State / Province</label><input class="input-field" name="state" value="${l(e.state||"")}" placeholder="e.g. California"></div>
            <div><label class="lbl">City</label><input class="input-field" name="city" value="${l(e.city||"")}" placeholder="e.g. Los Angeles"></div>
            <div><label class="lbl">Town / Local Area</label><input class="input-field" name="town" value="${l(e.town||"")}" placeholder="Neighborhood or district"></div>
            <div><label class="lbl">Latitude</label><input type="number" step="any" class="input-field" name="latitude" value="${l(e.latitude||"")}" placeholder="40.7128"></div>
            <div><label class="lbl">Longitude</label><input type="number" step="any" class="input-field" name="longitude" value="${l(e.longitude||"")}" placeholder="-74.0060"></div>
            <div class="sm:col-span-2">
              <div class="rounded-xl border border-gray-200 overflow-hidden" style="height:250px;background:#e2e8f0"><div id="property-map-preview" style="width:100%;height:100%"></div></div>
              <div class="flex flex-wrap items-center justify-between gap-2 mt-2">
                <div class="text-[11px] text-gray-500" id="property-map-status">Map preview â€” fill the location fields or click the map to drop a pin.</div>
                <div class="flex items-center gap-2">
                  <button type="button" id="btn-geocode-property" class="btn-press text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-2.5 py-1 hover:bg-blue-100 transition">Locate from fields</button>
                  <a id="btn-open-google-map" href="#" target="_blank" rel="noopener" class="text-[11px] font-bold text-gray-600 bg-gray-100 border border-gray-200 rounded-lg px-2.5 py-1 hover:bg-gray-200 transition">Open in Google Maps</a>
                </div>
              </div>
            </div>
            <div><label class="lbl">Bedrooms</label><input type="number" class="input-field" name="bedrooms" value="${e.bedrooms??""}" placeholder="3"></div>
            <div><label class="lbl">Bathrooms</label><input type="number" class="input-field" name="bathrooms" value="${e.bathrooms??""}" placeholder="2"></div>
            <div><label class="lbl">Building Size</label><input class="input-field" name="building_size" value="${l(e.building_size||"")}" placeholder="e.g. 2,500 sqft"></div>
            <div><label class="lbl">Land Size</label><input class="input-field" name="land_size" value="${l(e.land_size||"")}" placeholder="e.g. 0.5 acres"></div>
            <div><label class="lbl">Parking Spaces</label><input type="number" class="input-field" name="parking_spaces" value="${e.parking_spaces??""}"></div>
            <div><label class="lbl">Furnished</label><select class="input-field" name="furnished">
              <option value="">Not specified</option>
              <option value="Furnished" ${e.furnished==="Furnished"?"selected":""}>Furnished</option>
              <option value="Unfurnished" ${e.furnished==="Unfurnished"?"selected":""}>Unfurnished</option>
            </select></div>
            <div><label class="lbl">Condition</label><select class="input-field" name="condition">
              <option value="">Not specified</option>
              ${["New Construction","Like New","Excellent","Good","Fair","Needs Renovation"].map(r=>`<option value="${r}" ${e.condition===r?"selected":""}>${r}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Year Built</label><input type="number" class="input-field" name="year_built" value="${e.year_built??""}" placeholder="2015"></div>
            <div><label class="lbl">Year Renovated</label><input type="number" class="input-field" name="year_renovated" value="${e.year_renovated??""}" placeholder="2021"></div>
            <div><label class="lbl">Half Bathrooms</label><input type="number" class="input-field" name="half_bathrooms" value="${e.half_bathrooms??""}" placeholder="1"></div>
            <div><label class="lbl">Floors / Levels</label><input type="number" class="input-field" name="floors" value="${e.floors??""}" placeholder="2"></div>
            <div><label class="lbl">Garage</label><input class="input-field" name="garage" value="${l(e.garage||"")}" placeholder="e.g. 2-car attached, None"></div>
            <div class="sm:col-span-2"><label class="lbl">Description</label><textarea class="input-field" name="description" rows="3" placeholder="Describe the propertyâ€¦">${l(e.description||"")}</textarea></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${l((e.features||[]).join(", "))}" placeholder="Swimming Pool, Garden, Garageâ€¦"></div>
            <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${l((e.highlights||[]).join(", "))}" placeholder="Prime location, map-ready post, 24-image gallery"></div>
            <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${l((e.seo_keywords||[]).join(", "))}" placeholder="mansion, villa, property investment"></div>
            <div class="sm:col-span-2"><label class="lbl">Property Location</label><input class="input-field" name="product_location" value="${l(e.product_location||"")}" placeholder="Estate, district, city, landmark"></div>
            <div class="sm:col-span-2"><label class="lbl">Street / Address</label><input class="input-field" name="address" value="${l(e.address||"")}" placeholder="Street and number, e.g. 123 Maple Street"></div>
            <div><label class="lbl">ZIP / Postal Code</label><input class="input-field" name="zip_code" value="${l(e.zip_code||"")}" placeholder="e.g. 10001"></div>
            <div><label class="lbl">Landmarks (comma separated)</label><input class="input-field" name="landmarks_text" value="${l((e.landmarks||[]).join(", "))}" placeholder="City Hall, Central Park, Main Station"></div>
          </div>

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="home" class="w-4 h-4 text-emerald-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Interior &amp; Exterior Features</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Interior Features (comma separated)</label><input class="input-field" name="interior_features_text" value="${l((e.interior_features||[]).join(", "))}" placeholder="Open plan kitchen, Walk-in closet, Fireplaceâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Exterior Features (comma separated)</label><input class="input-field" name="exterior_features_text" value="${l((e.exterior_features||[]).join(", "))}" placeholder="Swimming pool, Garden, Balcony, Patioâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Home Systems (comma separated)</label><input class="input-field" name="home_systems_text" value="${l((e.home_systems||[]).join(", "))}" placeholder="Central heating, Air conditioning, Solar panelsâ€¦"></div>
            </div>
          </div>

          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="layout-dashboard" class="w-4 h-4 text-violet-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Floor Plan</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Floor Plan Image URL</label><input class="input-field" name="floor_plan_image" value="${l(e.floor_plan?.image||"")}" placeholder="https://â€¦/floor-plan.png"></div>
              <div><label class="lbl">Levels</label><input class="input-field" name="floor_plan_levels" value="${l(e.floor_plan?.levels||"")}" placeholder="e.g. Ground + 1"></div>
              <div><label class="lbl">Total Area</label><input class="input-field" name="floor_plan_total_area" value="${l(e.floor_plan?.total_area||"")}" placeholder="e.g. 2,500 sqft"></div>
              <div class="sm:col-span-2"><label class="lbl">Rooms (comma separated â€” Name: dimensions)</label><input class="input-field" name="floor_plan_rooms" value="${l((e.floor_plan?.rooms||[]).map(r=>(r.name||"")+(r.dimensions?": "+r.dimensions:"")).join(", "))}" placeholder="Living Room: 15x12, Kitchen: 10x10â€¦"></div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="school" class="w-4 h-4 text-amber-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Nearby Area</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Schools (comma separated)</label><input class="input-field" name="nearby_schools_text" value="${l((e.nearby_area?.schools||[]).join(", "))}" placeholder="Riverside Elementaryâ€¦"></div>
              <div><label class="lbl">Hospitals / Clinics</label><input class="input-field" name="nearby_hospitals_text" value="${l((e.nearby_area?.hospitals||[]).join(", "))}" placeholder="City General Hospitalâ€¦"></div>
              <div><label class="lbl">Shopping / Markets</label><input class="input-field" name="nearby_shopping_text" value="${l((e.nearby_area?.shopping||[]).join(", "))}" placeholder="Maple Mall, Farmers Marketâ€¦"></div>
              <div><label class="lbl">Transportation</label><input class="input-field" name="nearby_transportation_text" value="${l((e.nearby_area?.transportation||[]).join(", "))}" placeholder="Metro Station, Bus Stopâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Distances (comma separated)</label><input class="input-field" name="nearby_distances_text" value="${l((e.nearby_area?.distances||[]).join(", "))}" placeholder="0.5 mi to school, 1 mi to hospitalâ€¦"></div>
            </div>
          </div>

          <div class="glass-soft border border-blue-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4 text-blue-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Legal, Verification &amp; Trust</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Legal / Financial Info (comma separated â€” add source tag)</label><input class="input-field" name="legal_info_text" value="${l((e.legal_info||[]).map(r=>(r.label||"")+(r.value?": "+r.value:"")+(r.source?` (${r.source})`:"")).join(", "))}" placeholder="Ownership: Clear title (Seller provided), Property taxes: (Not verified)â€¦"></div>
              <div><label class="lbl">Verification Status</label><select class="input-field" name="verification_status">
                <option value="Not verified" ${(e.verification_status||"Not verified")==="Not verified"?"selected":""}>Not verified</option>
                <option value="Pending verification" ${e.verification_status==="Pending verification"?"selected":""}>Pending verification</option>
                <option value="Verified" ${e.verification_status==="Verified"?"selected":""}>Verified</option>
              </select></div>
              <div><label class="lbl">Verification Date</label><input type="date" class="input-field" name="verification_date" value="${l(e.verification_date||"")}"></div>
              <div class="sm:col-span-2"><label class="lbl">Inspection Info</label><input class="input-field" name="inspection_info" value="${l(e.inspection_info||"")}" placeholder="Inspected on date by company â€” result"></div>
              <div class="sm:col-span-2"><label class="lbl">Documents (comma separated URLs)</label><input class="input-field" name="documents_text" value="${l((e.documents||[]).join(", "))}" placeholder="https://â€¦/title.pdf, https://â€¦/inspection.pdf"></div>
              <div class="sm:col-span-2"><label class="lbl">Condition / Risk Notes</label><textarea class="input-field" name="risk_notes" rows="2" placeholder="Any known issues, renovation needs, or risk notesâ€¦">${l(e.risk_notes||"")}</textarea></div>
            </div>
          </div>

          <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/15 rounded-xl">
            <div><p class="text-xs font-bold text-white">Published / Active</p><p class="text-[11px] text-gray-500">Visible on the website</p></div>
            <label class="toggle-switch"><input type="checkbox" name="is_active" ${t?e.is_active?"checked":"":"checked"}><span class="toggle-slider"></span></label>
          </div>

          <div>
            <label class="lbl">Property Images & Videos</label>
            <div id="drop-zone" class="drop-zone" onclick="pickMediaForForm('img-upload')">
              <i data-lucide="image-plus" class="w-7 h-7 text-blue-400 mx-auto mb-2"></i>
              <p class="text-xs font-bold text-gray-300">Click or drag & drop images or videos</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*,video/mp4,video/webm,video/*,application/pdf" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2 mt-3">
              ${(e.images||[]).map((r,d)=>Ae(r,d)).join("")}
            </div>
            <div id="image-url-inputs">
              ${(e.images||[]).map((r,d)=>`<input type="hidden" name="images" id="img-url-${d}" value="${l(r)}">`).join("")}
            </div>
          </div>

          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="min-w-0">
                <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> AI Property Scanner</p>
                <p class="text-[11px] text-gray-500 mt-1">Reads your uploaded images and fills the property form for you. Only runs when you press the button â€” you review everything before publishing.</p>
              </div>
              <button type="button" id="btn-scan-ai-prop" onclick="scanPropertyWithAI()" class="btn-press px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shrink-0">
                <i data-lucide="sparkles" class="w-4 h-4"></i> SCAN WITH AI
              </button>
            </div>
            <div id="scan-ai-prop-status" class="hidden text-xs mt-3 font-medium"></div>
          </div>

          <div class="flex gap-3 pt-2">
            <button type="submit" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition">${t?"ðŸ’¾ Save Changes":"ðŸš€ Publish Property"}</button>
          </div>
        </form>
      </div>
    </div>`),la(),da(),qt("ppf-price"),window._propFormDirty=!!t;const o=document.getElementById("property-form");if(o){const r=()=>{window._propFormDirty=!0};o.addEventListener("input",r),o.addEventListener("change",r)}window.syncPropertyCountry=function(){_a("ppf")},_a("ppf"),Gt("pricing"),document.getElementById("ppf-price")?.addEventListener("input",()=>Gt("pricing")),po()};let ae=null,ut=null,Aa=null;function co(){const e=document.querySelector("#property-form");if(!e)return"";const t=a=>(e.querySelector(`[name="${a}"]`)?.value||"").trim();return[t("product_location"),t("town"),t("city"),t("state"),t("country")].filter(Boolean).join(", ")}function pe(e,t){const a=document.getElementById("property-map-status");a&&(a.textContent=e,a.style.color=t?"#dc2626":"")}function Ke(e,t,{reverse:a=!1}={}){if(!ae||!Number.isFinite(e)||!Number.isFinite(t))return;const i=[e,t];ut?ut.setLatLng(i):ut=L.marker(i,{draggable:!0}).addTo(ae),ae.setView(i,Math.max(ae.getZoom(),13));const n=document.querySelector('#property-form [name="latitude"]'),o=document.querySelector('#property-form [name="longitude"]');n&&(n.value=String(Number(e.toFixed(6)))),o&&(o.value=String(Number(t.toFixed(6)))),a&&uo(e,t);const r=document.getElementById("btn-open-google-map");r&&(r.href=`https://www.google.com/maps?q=${e.toFixed(6)},${t.toFixed(6)}`)}async function ze(){const e=co();if(!e){pe("Enter a location (address, area, city, state, country), then press Locate from fields.");return}pe("Searching locationâ€¦");try{const a=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(e))).json();a&&a[0]?(Ke(parseFloat(a[0].lat),parseFloat(a[0].lon)),pe("Located: "+a[0].display_name)):pe("Could not find that location. Check the spelling or click the map to drop the pin.",!0)}catch{pe("Map lookup failed. You can still drop the pin by clicking the map.",!0)}}async function uo(e,t){const a=document.querySelector("#property-form");if(a)try{const n=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${t}&zoom=16`)).json(),o=n&&n.address||{},r=(h,b)=>{if(!b)return;const f=a.querySelector(`[name="${h}"]`);return f&&!String(f.value||"").trim()?(f.value=b,!0):!1},d=[o.road||"",o.house_number||""].filter(Boolean).join(" "),s=o.suburb||o.neighbourhood||o.quarter||o.district||o.borough||"",c=o.town||o.village||o.municipality||o.city_district||"",u=o.city||o.county||"",p=o.state||o.region||"",y=o.country||"";if(r("product_location",d||s||c),r("town",s||c),r("city",u),r("state",p),y){r("country",y);const h=a.querySelector('[name="country_code"]');if(h){const b=(Pe||[]).find(f=>String(f.name||"").toLowerCase()===String(y).toLowerCase());b&&b.code&&!h.value&&(h.value=b.code)}}pe("Pin set at "+e.toFixed(5)+", "+t.toFixed(5)+(n.display_name?" â€” "+n.display_name:""))}catch{pe("Pin set. Could not reverse-geocode the address.",!0)}}window.refreshPropertyMapFromForm=function(){if(!ae)return;const e=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),t=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);Number.isFinite(e)&&Number.isFinite(t)&&(e||t)?(Ke(e,t),pe("Map updated from coordinates.")):ze()};function po(){const e=document.getElementById("property-map-preview");if(!e||!window.L){pe("Map unavailable right now â€” your location fields still save normally.");return}ae&&(ae.remove(),ae=null,ut=null);const t=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),a=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value),i=Number.isFinite(t)&&Number.isFinite(a)&&(t||a);ae=L.map(e,{scrollWheelZoom:!1}).setView(i?[t,a]:[20,0],i?13:2),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(ae),ae.on("click",n=>Ke(n.latlng.lat,n.latlng.lng,{reverse:!0})),document.getElementById("btn-geocode-property")?.addEventListener("click",ze),["product_location","town","city","state","country","latitude","longitude"].forEach(n=>{const o=document.querySelector(`#property-form [name="${n}"]`);o&&(o.addEventListener("input",()=>{if(n==="latitude"||n==="longitude"){const r=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),d=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);Number.isFinite(r)&&Number.isFinite(d)&&(r||d)&&Ke(r,d);return}clearTimeout(Aa),Aa=setTimeout(ze,900)}),o.addEventListener("change",()=>{n!=="latitude"&&n!=="longitude"&&ze()}))}),i?Ke(t,a):ze()}window.fixPropertyMaps=async function(){const t=(window._propertiesData||[]).filter(n=>{const o=parseFloat(n.latitude),r=parseFloat(n.longitude),d=[n.product_location,n.town,n.city,n.state,n.country].filter(Boolean).join(", ");return!(Number.isFinite(o)&&Number.isFinite(r)&&(o!==0||r!==0))&&!!d});if(!t.length){m("All properties already have map coordinates.","success");return}m(`Fixing maps for ${t.length} propert${t.length>1?"ies":"y"}â€¦`,"success");let a=0,i=0;for(const n of t){const o=[n.product_location,n.town,n.city,n.state,n.country].filter(Boolean).join(", ");try{const d=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(o))).json();if(d&&d[0]){const s={latitude:parseFloat(d[0].lat),longitude:parseFloat(d[0].lon)},{error:c}=await g.from("showroom_listings").update(s).eq("property_id",n.property_id);c?i++:(Object.assign(n,s),a++)}else i++}catch{i++}await new Promise(r=>setTimeout(r,1100))}m(`Map fix done: ${a} updated, ${i} failed.`,i?"error":"success"),Pt()};window.saveProperty=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=Object.fromEntries(a.entries()),n=a.getAll("images").filter(y=>y&&!y.startsWith("blob:")),o=(i.features_text||"").split(",").map(y=>y.trim()).filter(Boolean),r=i.real_price===""||i.real_price==null?null:Math.max(N,Math.min(Q,parseFloat(i.real_price)||0)),d=y=>(y||"").split(",").map(h=>h.trim()).filter(Boolean),s=y=>y===""||y==null||!isFinite(parseInt(y,10))?null:parseInt(y,10),c=d(i.floor_plan_rooms).map(y=>{const h=String(y).match(/^(.*?):\s*(.*)$/);return h?{name:h[1].trim(),dimensions:h[2].trim()}:{name:y,dimensions:""}}),u={listing_type:"property",category:i.property_type||"Real Estate",subcategory:i.subcategory||null,title:i.title,description:i.description||"",price:Math.max(N,Math.min(Q,parseFloat(i.price)||0)),currency:i.currency||"USD",real_price:r,country:i.country||"",country_code:(i.country_code||"").toUpperCase(),state:i.state||"",city:i.city||"",town:i.town||"",address:i.address||"",zip_code:i.zip_code||"",product_location:i.product_location||"",latitude:i.latitude?parseFloat(i.latitude):null,longitude:i.longitude?parseFloat(i.longitude):null,property_type:i.property_type||"",listing_status:i.listing_status||"sale",condition:i.condition||null,bedrooms:i.bedrooms?parseInt(i.bedrooms):null,bathrooms:i.bathrooms?parseInt(i.bathrooms):null,half_bathrooms:s(i.half_bathrooms),building_size:i.building_size||"",land_size:i.land_size||"",floors:s(i.floors),garage:i.garage||"",parking_spaces:i.parking_spaces?parseInt(i.parking_spaces):null,furnished:i.furnished||"",year_built:s(i.year_built),year_renovated:s(i.year_renovated),landmarks:d(i.landmarks_text),interior_features:d(i.interior_features_text),exterior_features:d(i.exterior_features_text),home_systems:d(i.home_systems_text),legal_info:d(i.legal_info_text).map(y=>{const h=String(y).match(/^(.*?):\s*(.*?)\s*\((Seller provided|Not verified|Documented)\)\s*$/i);return h?{label:h[1].trim(),value:h[2].trim(),source:h[3]}:{label:y,value:"",source:"Not verified"}}),risk_notes:i.risk_notes||"",floor_plan:{image:i.floor_plan_image||"",rooms:c,levels:i.floor_plan_levels||"",total_area:i.floor_plan_total_area||""},nearby_area:{schools:d(i.nearby_schools_text),hospitals:d(i.nearby_hospitals_text),shopping:d(i.nearby_shopping_text),transportation:d(i.nearby_transportation_text),distances:d(i.nearby_distances_text)},verification_status:i.verification_status||"Not verified",verification_date:i.verification_date||"",inspection_info:i.inspection_info||"",documents:d(i.documents_text),features:o,images:n,highlights:jt(i.highlights_text),seo_keywords:jt(i.seo_keywords_text),is_ai_generated:!!i.catalog_template_id,ai_generated_fields:i.catalog_template_id?["title","description","features","highlights","seo_keywords","country","country_code","product_location"]:[],is_active:i.is_active==="on"};let p;if(t){u.property_id=t;const y=ve((window._propertiesData||[]).find(h=>h.property_id===t)||(window._productsData||[]).find(h=>h.property_id===t));u.specifications={...y.specifications&&typeof y.specifications=="object"?y.specifications:{},real_price:r},{error:p}=await g.from("showroom_listings").upsert({...y,...u},{onConflict:"property_id"})}else u.property_id=aa(),u.specifications={real_price:r},{error:p}=await g.from("showroom_listings").insert(u);p&&Nn(p,()=>Rt({...u,property_id:t||u.property_id}),t?"Property update":"Property publish")||(m(t?"Property updated!":"Property published!"),ce(),Pt())};window.editProperty=async function(e){const{data:t,error:a}=await g.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;i||(i=Ye(e)),i||(i=(Array.isArray(ie)?ie.find(n=>n.property_id===e):null)||null),i&&showAddPropertyModal(i)};const mo=["pending_verification","payment_received","payment_approved","processing","shipped","in_transit","out_for_delivery","delivered","cancelled","rejected"];async function xi(){const e=document.getElementById("content");try{const{data:t}=await g.from("payment_receipts").select("*").order("created_at",{ascending:!1}).limit(300),a=t||[],i=["All","Pending","Paid","Processing","Shipped","Delivered","Cancelled"];let n="All";e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Orders Manager</h2>
        <div class="flex gap-2 flex-wrap" id="order-tabs">
          ${i.map(o=>`<button class="tab-btn ${o==="All"?"active":""}" onclick="filterOrders('${o}')">${o}</button>`).join("")}
        </div>
        <div class="flex gap-3">
          <div class="flex-1 relative">
            <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
            <input type="search" class="input-field pl-9" placeholder="Search order, email, nameâ€¦" oninput="searchOrders(this.value)">
          </div>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr>
                <th>Order #</th><th>Customer</th><th>Product</th>
                <th class="hidden sm:table-cell">Amount</th><th>Status</th>
                <th class="hidden md:table-cell">Date</th><th>Actions</th>
              </tr></thead>
              <tbody id="orders-tbody">
                ${a.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-12">No orders yet</td></tr>':a.map(o=>go(o)).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._ordersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}function go(e){return`<tr class="order-row" data-status="${e.status}" data-search="${l(e.order_number)} ${l(e.full_name)} ${l(e.email)}">
    <td><span class="font-mono text-xs text-blue-400 font-bold">${l(e.order_number||e.id?.slice(0,8))}</span></td>
    <td>
      <p class="text-xs font-bold text-white">${l(e.full_name||"Guest")}</p>
      <p class="text-[10px] text-gray-500">${l(e.email)}</p>
    </td>
    <td><p class="text-xs text-gray-300 truncate max-w-[140px]">${l(e.listing_title||e.listing_id||"â€”")}</p></td>
    <td class="hidden sm:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(e.amount||0).toLocaleString()}</span></td>
    <td>${Y(e.status)}</td>
    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${ne(e.created_at)}</span></td>
    <td>
      <button onclick="viewOrder('${e.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="View / Update">
        <i data-lucide="eye" class="w-3.5 h-3.5"></i>
      </button>
    </td>
  </tr>`}window.filterOrders=function(e){document.querySelectorAll("#order-tabs .tab-btn").forEach(t=>t.classList.toggle("active",t.textContent===e)),document.querySelectorAll(".order-row").forEach(t=>{const a=t.dataset.status||"",i=e==="All"||e==="Pending"&&["pending_verification","payment_received","order_placed"].includes(a)||e==="Paid"&&["payment_approved"].includes(a)||e==="Processing"&&["processing"].includes(a)||e==="Shipped"&&["shipped","in_transit","out_for_delivery"].includes(a)||e==="Delivered"&&a==="delivered"||e==="Cancelled"&&["cancelled","rejected"].includes(a);t.style.display=i?"":"none"})};window.searchOrders=function(e){const t=e.toLowerCase();document.querySelectorAll(".order-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewOrder=async function(e){const t=(window._ordersData||[]).find(a=>a.id===e);t&&U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Order ${l(t.order_number)}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="space-y-3 text-sm">
          <div class="grid grid-cols-2 gap-3">
            ${[["Customer",t.full_name],["Email",t.email],["Phone",t.phone],["Amount",Wa(t.amount,t.currency)],["Product",t.listing_title||t.listing_id],["Date",xe(t.created_at)]].map(([a,i])=>`<div><p class="text-[10px] text-gray-500 uppercase font-bold mb-0.5">${a}</p><p class="text-xs text-white font-medium">${l(i)||"â€”"}</p></div>`).join("")}
          </div>
          ${t.transaction_reference?`<div class="p-3 glass-soft border border-blue-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Transaction Reference</p><p class="text-xs font-mono text-blue-300">${l(t.transaction_reference)}</p></div>`:""}
          ${t.additional_notes?`<div class="p-3 glass-soft border border-amber-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Notes</p><p class="text-xs text-gray-300">${l(t.additional_notes)}</p></div>`:""}
          <div>
            <label class="lbl">Update Order Status</label>
            <div class="flex gap-2">
              <select id="order-status-select" class="input-field flex-1">
                ${mo.map(a=>`<option value="${a}" ${t.status===a?"selected":""}>${a.replace(/_/g," ")}</option>`).join("")}
              </select>
              <button onclick="updateOrderStatus('${t.id}')" class="btn-press px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.updateOrderStatus=async function(e){const t=document.getElementById("order-status-select")?.value;if(!t)return;const{error:a}=await g.from("payment_receipts").update({status:t}).eq("id",e);if(a){m(a.message,"error");return}m("Order status updated"),ce(),xi()};async function bo(){const e=document.getElementById("content");try{const{data:t}=await g.from("profiles").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Customers Manager</h2>
          <span class="text-sm text-gray-400 font-medium">${a.length} total</span>
        </div>
        <div class="relative">
          <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
          <input type="search" class="input-field pl-9" placeholder="Search customersâ€¦" oninput="searchCustomers(this.value)">
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Customer</th><th class="hidden sm:table-cell">Country</th><th class="hidden md:table-cell">Joined</th><th>Actions</th></tr></thead>
              <tbody id="customers-tbody">
                ${a.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-12">No customers yet</td></tr>':a.map(i=>`<tr class="cust-row" data-search="${l(i.display_name)} ${l(i.user_id)}">
                    <td>
                      <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                          <i data-lucide="user" class="w-4 h-4 text-blue-400"></i>
                        </div>
                        <div>
                          <p class="text-xs font-bold text-white">${l(i.display_name||"Anonymous")}</p>
                          <p class="text-[10px] font-mono text-gray-500">${l(i.user_id?.slice(0,12))}â€¦</p>
                        </div>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-300">${l(i.country_code||"â€”")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${ne(i.created_at)}</span></td>
                    <td>
                      <button onclick="viewCustomer('${i.user_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="eye" class="w-3.5 h-3.5"></i></button>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._customersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.searchCustomers=function(e){const t=e.toLowerCase();document.querySelectorAll(".cust-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewCustomer=async function(e){const t=(window._customersData||[]).find(i=>i.user_id===e);if(!t)return;const{data:a}=await g.from("payment_receipts").select("order_number,amount,currency,status,created_at").eq("user_id",e).order("created_at",{ascending:!1}).limit(20);U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Customer Profile</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="flex items-center gap-4 mb-5 p-4 glass-soft border border-blue-500/15 rounded-xl">
          <div class="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
            <i data-lucide="user" class="w-6 h-6 text-blue-400"></i>
          </div>
          <div>
            <p class="font-black text-white">${l(t.display_name||"Anonymous")}</p>
            <p class="text-xs text-gray-400 mt-0.5">Joined ${ne(t.created_at)} Â· ${l(t.country_code||"Unknown country")}</p>
          </div>
        </div>
        <h4 class="text-xs font-bold text-gray-400 uppercase mb-3">Purchase History</h4>
        ${(a||[]).length===0?'<p class="text-xs text-gray-500 py-4 text-center">No orders yet</p>':(a||[]).map(i=>`<div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
            <div><p class="text-xs font-bold text-white font-mono">${l(i.order_number)}</p><p class="text-[10px] text-gray-500">${xe(i.created_at)}</p></div>
            <div class="flex items-center gap-2">${Y(i.status)}<span class="text-xs font-bold text-emerald-400">$${parseFloat(i.amount).toLocaleString()}</span></div>
          </div>`).join("")}
      </div>
    </div>`)};async function it(){const e=document.getElementById("content");try{const{data:t}=await g.from("product_reviews").select("*, showroom_listings(title, property_id)").order("created_at",{ascending:!1}).limit(200),a=t||[],i=a.filter(d=>!d.is_approved).length,{data:n}=await g.from("site_feedback").select("*").order("created_at",{ascending:!1}).limit(200),o=n||[],r=o.filter(d=>!d.is_approved).length;e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Reviews & Feedback Manager</h2>
          ${i+r>0?`<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${i+r} pending</span>`:""}
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="star" class="w-4 h-4 text-amber-400"></i> Product Reviews</h3>
            <div class="flex gap-2 ml-auto">
              <button onclick="filterReviewTab('all')" class="tab-btn active" id="rtab-all">All Reviews</button>
              <button onclick="filterReviewTab('pending')" class="tab-btn" id="rtab-pending">Pending (${i})</button>
              <button onclick="filterReviewTab('approved')" class="tab-btn" id="rtab-approved">Approved</button>
            </div>
          </div>
          <div class="space-y-3" id="reviews-list">
            ${a.length===0?Se("star","No Reviews","Customer reviews will appear here."):a.map(d=>fo(d)).join("")}
          </div>
        </div>

        <div class="glass-soft border border-emerald-500/15 rounded-2xl p-5 space-y-4">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="message-square-text" class="w-4 h-4 text-emerald-400"></i> Customer Feedback (site-wide)</h3>
            ${r>0?`<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${r} pending</span>`:""}
          </div>
          <p class="text-[11px] text-gray-500">Feedback submitted from the "Feedback" form on every page. Approve to show it in the public "View more Feedback" list.</p>
          <div class="space-y-3" id="feedback-list">
            ${o.length===0?Se("message-square","No Feedback Yet","Site feedback will appear here."):o.map(d=>yo(d)).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}function yo(e){const t=Array.from({length:5},(a,i)=>i<(e.rating||5)?"â˜…":"â˜†").join("");return`<div class="glass-soft border ${e.is_approved?"border-emerald-500/15":"border-amber-500/20"} rounded-xl p-4" data-fb-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs font-black text-white">${l(e.name||"Anonymous shopper")}</span>
          <span class="text-xs text-gray-500">${l(e.email||"no email")} Â· ${ne(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${l(e.feedback||"â€”")}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveFeedback('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteFeedback('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.approveFeedback=async function(e){const{error:t}=await g.from("site_feedback").update({is_approved:!0}).eq("id",e);t?m(t.message,"error"):m("Feedback approved â€” it now shows on every page."),it()};window.deleteFeedback=async function(e){if(!confirm("Delete this feedback permanently?"))return;const{error:t}=await g.from("site_feedback").delete().eq("id",e);t?m(t.message,"error"):m("Feedback deleted."),it()};function fo(e){const t=Array.from({length:5},(a,i)=>i<e.rating?"â˜…":"â˜†").join("");return`<div class="review-card glass-soft border ${e.is_approved?"border-blue-500/15":"border-amber-500/20"} rounded-xl p-4" data-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs text-gray-500">${ne(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending Approval</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${l(e.comment||e.review_text||"â€”")}</p>
        <p class="text-[11px] text-blue-400 mt-1.5">On: ${l(e.showroom_listings?.title||e.listing_id)}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveReview('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteReview('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.filterReviewTab=function(e){["all","pending","approved"].forEach(t=>document.getElementById(`rtab-${t}`)?.classList.toggle("active",t===e)),document.querySelectorAll(".review-card").forEach(t=>{const a=e==="all"||e==="pending"&&t.dataset.approved==="false"||e==="approved"&&t.dataset.approved==="true";t.style.display=a?"":"none"})};window.approveReview=async function(e){await g.from("product_reviews").update({is_approved:!0}).eq("id",e),m("Review approved"),it()};window.deleteReview=async function(e){confirm("Delete this review permanently?")&&(await g.from("product_reviews").delete().eq("id",e),m("Review deleted"),it())};async function _i(){const e=document.getElementById("content");try{const{data:t}=await g.from("support_messages").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Messages & Support</h2>
        <div class="space-y-3">
          ${a.length===0?Se("message-circle","No Messages","Customer support messages will appear here."):a.map(i=>`
              <div class="glass-soft border ${i.is_read?"border-blue-500/10":"border-blue-400/30"} rounded-xl p-4 ${i.is_read?"":"ring-1 ring-blue-500/10"}">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-black text-white">${l(i.full_name||i.name||"Anonymous")}</span>
                      ${i.is_read?"":'<span class="badge bg-blue-500/15 text-blue-400 border-blue-500/20">New</span>'}
                      <span class="text-[10px] text-gray-500 ml-auto">${xe(i.created_at)}</span>
                    </div>
                    <p class="text-[11px] text-blue-400 mb-1">${l(i.email||"â€”")}</p>
                    <p class="text-xs text-gray-300">${l(i.message||i.body||"â€”")}</p>
                    ${i.subject?`<p class="text-[11px] text-gray-500 mt-1">Subject: ${l(i.subject)}</p>`:""}
                  </div>
                  <div class="flex gap-1 shrink-0">
                    <button onclick="markMsgRead('${i.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Mark Read"><i data-lucide="check" class="w-4 h-4"></i></button>
                  </div>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.markMsgRead=async function(e){await g.from("support_messages").update({is_read:!0}).eq("id",e),m("Marked as read"),_i()};async function Et(){const e=document.getElementById("content");try{const{data:t}=await g.from("coupons").select("*").order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Coupons Manager</h2>
          <button onclick="showAddCouponModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Coupon
          </button>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Code</th><th>Type</th><th>Value</th><th class="hidden sm:table-cell">Min Amount</th><th>Status</th><th class="hidden md:table-cell">Expires</th><th>Actions</th></tr></thead>
              <tbody>
                ${a.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-12">No coupons yet</td></tr>':a.map(i=>`<tr>
                    <td><code class="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">${l(i.code)}</code></td>
                    <td><span class="text-xs text-gray-300">${i.discount_type==="percent"?"Percentage":"Fixed Amount"}</span></td>
                    <td><span class="text-xs font-bold text-emerald-400">${i.discount_type==="percent"?i.discount_value+"%":"$"+i.discount_value}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${i.min_amount?"$"+i.min_amount:"â€”"}</span></td>
                    <td>${Y(i.is_active?"active":"inactive")}</td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${ne(i.expires_at)}</span></td>
                    <td>
                      <div class="flex gap-1">
                        <button onclick="toggleCoupon('${i.id}',${!i.is_active})" class="btn-press p-1.5 ${i.is_active?"text-amber-400 hover:bg-amber-500/10":"text-emerald-400 hover:bg-emerald-500/10"} rounded-lg transition"><i data-lucide="${i.is_active?"eye-off":"eye"}" class="w-3.5 h-3.5"></i></button>
                        <button onclick="deleteCoupon('${i.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                      </div>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.showAddCouponModal=function(){U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Create Coupon</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <form id="coupon-form" onsubmit="saveCoupon(event)" class="space-y-4">
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Coupon Code *</label><input class="input-field uppercase" name="code" required placeholder="e.g. SAVE20" style="text-transform:uppercase"></div>
            <div><label class="lbl">Discount Type *</label><select class="input-field" name="discount_type" required>
              <option value="percent">Percentage (%)</option>
              <option value="fixed">Fixed Amount ($)</option>
            </select></div>
            <div><label class="lbl">Discount Value *</label><input type="number" class="input-field" name="discount_value" required min="0" step="0.01" placeholder="e.g. 20"></div>
            <div><label class="lbl">Minimum Order Amount</label><input type="number" class="input-field" name="min_amount" min="0" placeholder="0"></div>
            <div><label class="lbl">Usage Limit</label><input type="number" class="input-field" name="usage_limit" min="1" placeholder="Unlimited"></div>
            <div><label class="lbl">Expiry Date</label><input type="date" class="input-field" name="expires_at"></div>
          </div>
          <button type="submit" class="btn-press w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl text-sm transition">Create Coupon</button>
        </form>
      </div>
    </div>`)};window.saveCoupon=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={code:a.code.toUpperCase(),discount_type:a.discount_type,discount_value:parseFloat(a.discount_value),min_amount:a.min_amount?parseFloat(a.min_amount):null,usage_limit:a.usage_limit?parseInt(a.usage_limit):null,expires_at:a.expires_at||null,is_active:!0},{error:n}=await g.from("coupons").insert(i);if(n){m(n.message,"error");return}m("Coupon created!"),ce(),Et()};window.toggleCoupon=async function(e,t){await g.from("coupons").update({is_active:t}).eq("id",e),m(t?"Coupon activated":"Coupon deactivated"),Et()};window.deleteCoupon=async function(e){confirm("Delete this coupon?")&&(await g.from("coupons").delete().eq("id",e),m("Coupon deleted"),Et())};async function ho(){const e=document.getElementById("content");try{const{data:t}=await g.from("notification_log").select("*").order("created_at",{ascending:!1}).limit(100),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Notifications</h2>
        <div class="space-y-2">
          ${a.length===0?Se("bell","No Notifications","System notifications will appear here."):a.map(i=>`
              <div class="glass-soft border border-blue-500/10 rounded-xl p-3.5 flex items-start gap-3">
                <div class="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="bell" class="w-4 h-4 text-blue-400"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-xs font-bold text-white">${l(i.subject||i.event_type||"Notification")}</span>
                    ${Y(i.status)}
                    <span class="text-[10px] text-gray-500 ml-auto">${xe(i.created_at)}</span>
                  </div>
                  <p class="text-[11px] text-gray-400">${l(i.recipient||i.order_number)}</p>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}const ki=["Featured","Sponsored","Featured Collection","Discover","Promotion"],vo=[{id:"real-estate",name:"Real Estate & Properties"},{id:"marketplace",name:"Marketplace Showroom"}];let dt=null;function wo(e){const t={Featured:"bg-blue-500/10 text-blue-300 border-blue-500/30",Sponsored:"bg-violet-500/10 text-violet-300 border-violet-500/30","Featured Collection":"bg-amber-500/10 text-amber-300 border-amber-500/30",Discover:"bg-emerald-500/10 text-emerald-300 border-emerald-500/30",Promotion:"bg-blue-500/10 text-blue-300 border-blue-500/30"};return`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${t[e]||t.Featured}">${l(e)}</span>`}function xo(e){return!e||!e.link_type||e.link_type==="none"?'<span class="text-[10px] text-gray-500">No link</span>':e.link_type==="product"?`<span class="text-[10px] text-blue-300"><i data-lucide="package" class="w-3 h-3 inline mr-1"></i>Product Â· ${l(e.link_target||"")}</span>`:e.link_type==="category"?`<span class="text-[10px] text-emerald-300"><i data-lucide="tag" class="w-3 h-3 inline mr-1"></i>Category Â· ${l(e.link_target||"")}</span>`:`<span class="text-[10px] text-amber-300"><i data-lucide="layout-grid" class="w-3 h-3 inline mr-1"></i>Section Â· ${l(e.link_target||"")}</span>`}function _o(e){return e.video_url?`<video src="${l(e.video_url)}" ${e.poster_url?`poster="${l(e.poster_url)}"`:""} class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" muted preload="metadata"></video>`:e.image_url?`<img src="${l(e.image_url)}" class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" onerror="this.remove()">`:'<div class="w-24 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="megaphone" class="w-6 h-6 text-blue-400"></i></div>'}async function Si(){if(dt)return dt;const e=[],t=new Set,a=[],i=o=>{if(!o||!o.property_id)return;e.push({id:o.property_id,title:o.title||o.property_id});const r=o.category||"";r&&!t.has(r)&&(t.add(r),a.push(r))};try{ie.forEach(i)}catch{}try{const{data:o,error:r}=await g.from("showroom_listings").select("property_id,title,category").order("created_at",{ascending:!1});!r&&o&&o.forEach(i)}catch{}return["Women","Men","Kids","Home","Sports","Jewellery","Electronics","Cars","Motorcycles","Phones","Computers","Furniture","Beauty","Fashion","Real Estate","Bicycles","Trucks","Land","Kitchen","Food","Pets","Books","Toys","Services"].forEach(o=>{t.has(o)||(t.add(o),a.push(o))}),dt={products:e,categories:a,sections:vo},dt}async function ko(e){try{const{data:{session:t}}=await g.auth.getSession();if(!t)return m("Sign in to upload media","error"),null;const a=(e.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),i=/^(mp4|webm|mov|m4v)$/.test(a)||e.type.startsWith("video/"),n=`ads/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${a}`,{error:o}=await g.storage.from("advertisements").upload(n,e,{contentType:e.type,upsert:!1});if(o)return m("Upload failed: "+o.message,"error"),null;const{data:r}=g.storage.from("advertisements").getPublicUrl(n);return{url:r.publicUrl,isVideo:i}}catch{return m("Upload failed","error"),null}}function ft(e,t){const a=document.getElementById("ad-media-preview");if(!a)return;const i=document.getElementById("ad-hidden-video"),n=document.getElementById("ad-hidden-image");i&&(i.value=t?e:""),n&&(n.value=t?"":e),a.innerHTML=t?`<video src="${l(e)}" class="w-full h-40 object-cover rounded-xl" controls muted playsinline></video>`:`<img src="${l(e)}" class="w-full h-40 object-cover rounded-xl">`,window.lucide&&lucide.createIcons()}window.onAdMediaPicked=async function(e){const t=e.files&&e.files[0];if(!t)return;if(!(t.type.startsWith("image/")||t.type.startsWith("video/"))){m("Choose an image or video file","error");return}const i=await ko(t);if(!i){e.value="";return}ft(i.url,i.isVideo);const n=document.getElementById("ad-media-url");n&&(n.value=i.url)};window.onAdMediaUrl=function(e){const t=(e.value||"").trim();if(!t)return;const a=/\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(t);ft(t,a)};function ga(e,t,a){const i=document.getElementById("ad-link-target-wrap");if(!i)return;if(!t||t==="none"){i.innerHTML='<p class="text-[10px] text-gray-500">This ad is informational and will not be clickable.</p>';return}let n="";t==="product"?n='<option value="">Select a productâ€¦</option>'+e.products.map(o=>`<option value="${l(o.id)}" ${String(a)===String(o.id)?"selected":""}>${l(o.id)} â€” ${l((o.title||"").slice(0,60))}</option>`).join(""):t==="category"?n='<option value="">Select a categoryâ€¦</option>'+e.categories.map(o=>`<option value="${l(o)}" ${a===o?"selected":""}>${l(o)}</option>`).join(""):t==="section"&&(n='<option value="">Select a sectionâ€¦</option>'+e.sections.map(o=>`<option value="${l(o.id)}" ${a===o.id?"selected":""}>${l(o.name)}</option>`).join("")),i.innerHTML=`<label class="lbl">Target</label><select class="input-field" name="link_target">${n}</select>`}function $i(e){return`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${e?"Edit Advertisement":"Add Advertisement"}</h3>
          <button onclick="closeModal()" class="btn-press text-xs font-bold text-gray-400 hover:text-white transition">âœ• Close</button>
        </div>
        <form id="ad-form" onsubmit="saveAd(event)" class="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          <input type="hidden" name="id" value="${e?e.id:""}">
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Title *</label><input class="input-field" name="title" required value="${l(e&&e.title?e.title:"")}" placeholder="e.g. Summer Sale 2026"></div>
            <div><label class="lbl">Ad Label</label>
              <select class="input-field" name="ad_label">
                ${ki.map(t=>`<option value="${t}" ${e&&e.ad_label===t?"selected":""}>${t}</option>`).join("")}
              </select>
            </div>
          </div>
          <div><label class="lbl">Message</label><textarea class="input-field" name="description" rows="2" placeholder="Short message shown on the adâ€¦">${l(e&&e.description?e.description:"")}</textarea></div>

          <div class="glass-soft border border-blue-500/15 rounded-xl p-4 space-y-3">
            <label class="lbl">Image / Video</label>
            <div id="ad-media-preview" class="w-full h-40 rounded-xl bg-black/40 flex items-center justify-center text-gray-600 text-xs border border-dashed border-gray-700"></div>
            <div class="flex items-center gap-2 flex-wrap">
              <label class="btn-press cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
                <i data-lucide="upload" class="w-4 h-4"></i> Upload File
                <input type="file" accept="image/*,video/mp4,video/webm,video/quicktime" class="hidden" onchange="onAdMediaPicked(this)">
              </label>
              <input id="ad-media-url" class="input-field flex-1 min-w-[160px]" placeholder="â€¦or paste media URL" oninput="onAdMediaUrl(this)">
            </div>
            <p class="text-[10px] text-gray-500">Videos play muted in the showcase. Images are cropped to fill (object-fit: cover).</p>
            <input type="hidden" name="image_url" id="ad-hidden-image">
            <input type="hidden" name="video_url" id="ad-hidden-video">
          </div>

          <div class="form-grid form-grid-2">
            <div><label class="lbl">Start Date</label><input type="date" class="input-field" name="start_date" value="${e&&e.start_date?String(e.start_date).slice(0,10):""}"></div>
            <div><label class="lbl">End Date</label><input type="date" class="input-field" name="end_date" value="${e&&e.end_date?String(e.end_date).slice(0,10):""}"></div>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-xl p-4 space-y-3">
            <label class="lbl">Link Destination</label>
            <select class="input-field" name="link_type" onchange="onAdLinkTypeChange()">
              <option value="none" ${!e||!e.link_type||e.link_type==="none"?"selected":""}>No link</option>
              <option value="product" ${e&&e.link_type==="product"?"selected":""}>Link to a product</option>
              <option value="category" ${e&&e.link_type==="category"?"selected":""}>Link to a category</option>
              <option value="section" ${e&&e.link_type==="section"?"selected":""}>Link to a showroom section</option>
            </select>
            <div id="ad-link-target-wrap"></div>
          </div>

          <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/15 rounded-xl">
            <p class="text-xs font-bold text-white">Active</p>
            <label class="toggle-switch"><input type="checkbox" name="is_active" ${!e||e.is_active?"checked":""}><span class="toggle-slider"></span></label>
          </div>
          <button type="submit" class="btn-press w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl text-sm transition">${e?"Save Changes":"Create Advertisement"}</button>
        </form>
      </div>
    </div>`}window.onAdLinkTypeChange=function(){const e=window._adLinkCache||{products:[],categories:[],sections:[]},t=document.querySelector('#ad-form select[name="link_type"]'),a=t?t.value:"none";ga(e,a,"")};window.showAddAdModal=async function(){const e=await Si();window._adLinkCache=e,U($i(null)),ga(e,"none","")};window.showEditAdModal=async function(e){const t=await Si();window._adLinkCache=t;const{data:a}=await g.from("promotions").select("*").eq("id",e).maybeSingle();if(!a){m("Ad not found","error");return}U($i(a)),a.image_url?ft(a.image_url,!1):a.video_url&&ft(a.video_url,!0),ga(t,a.link_type||"none",a.link_target||"")};window.saveAd=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=a.id||"",n={title:a.title,description:a.description||"",ad_label:ki.includes(a.ad_label)?a.ad_label:"Featured",image_url:a.image_url||null,video_url:a.video_url||null,link_type:["none","product","category","section"].includes(a.link_type)?a.link_type:"none",link_target:a.link_target||null,start_date:a.start_date?new Date(a.start_date+"T00:00:00").toISOString():null,end_date:a.end_date?new Date(a.end_date+"T23:59:59").toISOString():null,is_active:a.is_active==="on",promo_type:"banner"};if(!n.image_url&&!n.video_url){m("Add an image or video for the ad","error");return}const o=e.target.querySelector('button[type="submit"]');o&&(o.disabled=!0);try{if(i){const{error:r}=await g.from("promotions").update(n).eq("id",i);if(r)throw r;m("Ad updated!")}else{const{error:r}=await g.from("promotions").insert(n);if(r)throw r;m("Ad created!")}}catch(r){m(r.message||"Save failed","error"),o&&(o.disabled=!1);return}ce(),He()};window.togglePromo=async function(e,t){const{error:a}=await g.from("promotions").update({is_active:t}).eq("id",e);if(a){m(a.message,"error");return}m(t?"Ad activated":"Ad deactivated"),He()};window.moveAd=async function(e,t){try{const{data:a,error:i}=await g.from("promotions").select("id,sort_order").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1});if(i)throw i;const n=a||[],o=n.findIndex(c=>c.id===e),r=o+t;if(o<0||r<0||r>=n.length){m("Already at the edge","info");return}const d=n[o],s=n[r];await g.from("promotions").update({sort_order:s.sort_order}).eq("id",d.id),await g.from("promotions").update({sort_order:d.sort_order}).eq("id",s.id),m("Order updated")}catch(a){m(a.message||"Reorder failed","error")}He()};window.deletePromo=async function(e){if(confirm("Delete this ad? This cannot be undone.")){try{const{data:t}=await g.from("promotions").select("image_url,video_url,poster_url").eq("id",e).maybeSingle();if(t){const i=[t.image_url,t.video_url,t.poster_url].filter(Boolean).map(n=>{const o=/\/object\/public\/advertisements\/(.+)$/.exec(n);return o?decodeURIComponent(o[1]):null}).filter(Boolean);if(i.length)try{await g.storage.from("advertisements").remove(i)}catch{}}const{error:a}=await g.from("promotions").delete().eq("id",e);if(a)throw a;m("Ad deleted")}catch(t){m(t.message||"Delete failed","error")}He()}};async function He(){const e=document.getElementById("content");try{const{data:t}=await g.from("promotions").select("*").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3 flex-wrap">
          <div class="flex-1 min-w-0">
            <h2 class="text-xl font-black text-white">Advertisement Manager</h2>
            <p class="text-xs text-gray-500 mt-0.5">Create professional showcase ads that appear on the homepage â€” with labels, media and product links.</p>
          </div>
          <button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement
          </button>
        </div>
        <div class="grid gap-3">
          ${a.length===0?Se("megaphone","No Ads","Create your first showcase ad â€” add a title, image or video, label, and optional product link.",'<button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"><i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement</button>'):a.map((i,n)=>`
              <div class="glass-soft border border-blue-500/15 rounded-xl p-4 flex items-center gap-4">
                ${_o(i)}
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap">
                    <p class="text-sm font-black text-white truncate">${l(i.title||i.name)}</p>
                    ${wo(i.ad_label||"Featured")}
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${l(i.description||"")}</p>
                  <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${i.is_active?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":"bg-gray-500/10 text-gray-400 border-gray-500/20"}">${i.is_active?"Active":"Inactive"}</span>
                    ${xo(i)}
                    <span class="text-[10px] text-gray-500">${ne(i.start_date)}${i.start_date?" â†’ ":""}${ne(i.end_date)}</span>
                  </div>
                </div>
                <div class="flex gap-1 shrink-0 flex-wrap justify-end">
                  <button onclick="moveAd('${i.id}',-1)" class="btn-press p-1.5 text-gray-400 hover:text-white rounded-lg transition" title="Move up"><i data-lucide="chevron-up" class="w-4 h-4"></i></button>
                  <button onclick="moveAd('${i.id}',1)" class="btn-press p-1.5 text-gray-400 hover:text-white rounded-lg transition" title="Move down"><i data-lucide="chevron-down" class="w-4 h-4"></i></button>
                  <button onclick="togglePromo('${i.id}',${i.is_active?"false":"true"})" class="btn-press p-1.5 ${i.is_active?"text-amber-400":"text-emerald-400"} rounded-lg transition" title="${i.is_active?"Deactivate":"Activate"}"><i data-lucide="${i.is_active?"eye-off":"eye"}" class="w-4 h-4"></i></button>
                  <button onclick="showEditAdModal('${i.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-4 h-4"></i></button>
                  <button onclick="deletePromo('${i.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.renderAds=He;const At=[{id:"gemini",name:"Google Gemini",tag:"FREE",color:"blue",icon:"sparkles",kf:"gemini_key",ph:"AIzaSyâ€¦",signup:"https://aistudio.google.com/apikey",models:["gemini-3-flash-preview","gemini-3.1-flash-lite-preview"],mf:"gemini_model",dm:"gemini-3-flash-preview",desc:"Google's best free AI. Great for coding, writing apps & websites.",free_tier:"15 req/min Â· 1M tokens/day â€” Free forever"}],re={border:{blue:"border-blue-500/50"},bg:{blue:"bg-blue-500/8"},text:{blue:"text-blue-400"},badge:{blue:"bg-blue-500/15 text-blue-300"}};async function Pi(){const e=document.getElementById("content");try{let t=function(o){const r=n===o.id,d=i[o.kf],s=i[o.mf]||o.dm;return`
        <div class="glass-soft border ${r?re.border[o.color]+" "+re.bg[o.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard" id="apc-${o.id}">
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-8 h-8 ${re.bg[o.color]} rounded-lg flex items-center justify-center shrink-0">
                <i data-lucide="${o.icon}" class="w-4 h-4 ${re.text[o.color]}"></i>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h3 class="text-xs font-black text-white">${l(o.name)}</h3>
                  <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full ${re.badge[o.color]}">${o.tag}</span>
                </div>
                <p class="text-[9px] text-emerald-400 font-bold mt-0.5 leading-tight truncate">${l(o.free_tier)}</p>
              </div>
            </div>
            <label class="flex items-center gap-1 cursor-pointer shrink-0">
              <input type="radio" name="active_provider" value="${o.id}" ${r?"checked":""} class="accent-blue-500" onchange="highlightAI('${o.id}')">
              <span class="text-[9px] font-bold ${r?re.text[o.color]:"text-gray-600"}">USE</span>
            </label>
          </div>
          <p class="text-[11px] text-gray-400 leading-relaxed">${l(o.desc)}</p>
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="lbl mb-0">API Key</label>
              <a href="${o.signup}" target="_blank" rel="noopener" class="text-[10px] font-bold ${re.text[o.color]} hover:underline flex items-center gap-0.5">
                <i data-lucide="external-link" class="w-3 h-3"></i>Get Free Key
              </a>
            </div>
            <div class="relative">
              <input type="password" class="input-field pr-16 text-xs" name="${o.kf}"
                placeholder="${d?"â€¢â€¢â€¢â€¢"+d.slice(-4):o.ph}">
              ${d?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>'}
            </div>
          </div>
          <div>
            <label class="lbl">Model</label>
            <select class="input-field text-xs" name="${o.mf}">
              ${o.models.map(c=>`<option value="${c}" ${s===c?"selected":""}>${c}</option>`).join("")}
            </select>
          </div>
        </div>`};const{data:a}=await g.from("ai_settings").select("*").limit(1).maybeSingle(),i=a||{},n=i.active_provider||"gemini";e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white">AI Settings</h2>
          <div class="flex items-center gap-2">
            <button onclick="showAiStatusModal()" class="btn-press flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition">
              <i data-lucide="activity" class="w-3.5 h-3.5"></i> Live Status & Test
            </button>
            <span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs px-3 py-1">Gemini Free</span>
          </div>
        </div>

        <div class="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-xs text-emerald-300 flex items-start gap-3">
          <i data-lucide="gift" class="w-5 h-5 shrink-0 text-emerald-400 mt-0.5"></i>
          <div>
            <p class="font-black mb-0.5">Google Gemini has a FREE tier â€” no payment required to start!</p>
            <p class="text-emerald-400/70">Click "Get Free Key" â†’ sign up at Google AI Studio â†’ paste key below â†’ Save. The key is stored securely in your database.</p>
          </div>
        </div>

        <form id="ai-form" onsubmit="saveAiSettings(event)" class="space-y-5">

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-black text-white mb-3 flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-blue-400"></i> Google Gemini</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${At.map(t).join("")}</div>
          </div>

          <div class="glass-soft border border-orange-500/15 rounded-2xl p-4 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2 flex-wrap">
              <i data-lucide="shield-check" class="w-4 h-4 text-orange-400"></i> Groq Vision
              <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-orange-500/15 text-orange-300">Backup</span>
            </h3>
            <p class="text-[11px] text-gray-400 leading-relaxed">Optional safety net for the Product Scanner. When Gemini fails, times out or hits its free limit, that one request is retried on Groq's vision model — so scans keep producing real photo data instead of empty forms.</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <label class="lbl">Groq API Key</label>
                <input type="password" class="input-field text-xs" name="groq_key"
                  placeholder="${i.groq_key?"••••"+String(i.groq_key).slice(-4):"gsk_…"}">
                ${i.groq_key?'<p class="text-[9px] font-bold text-emerald-500 mt-1">✓ Saved</p>':""}
              </div>
              <div>
                <label class="lbl">Vision Model</label>
                <select class="input-field text-xs" name="groq_vision_model">
                  ${["meta-llama/llama-4-scout-17b-16e-instruct","qwen/qwen3.6-27b"].map(o=>`<option value="${o}" ${(i.groq_vision_model||"meta-llama/llama-4-scout-17b-16e-instruct")===o?"selected":""}>${o}</option>`).join("")}
                </select>
              </div>
            </div>
            <a href="https://console.groq.com/keys" target="_blank" rel="noopener" class="inline-flex items-center gap-0.5 text-[10px] font-bold text-orange-400 hover:underline">
              <i data-lucide="external-link" class="w-3 h-3"></i>Get a free Groq key (generous free tier)
            </a>
          </div>

          <div class="glass-soft border border-purple-500/15 rounded-2xl p-4 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2 flex-wrap">
              <i data-lucide="hard-drive" class="w-4 h-4 text-purple-400"></i> General AI Scanner
              <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300">uses Gemini / Groq</span>
            </h3>
            <p class="text-[11px] text-gray-400 leading-relaxed">The General AI Scanner processes product photos through your Gemini key (primary) with Groq backup — no local software needed. Both keys are already saved above. Works from any device.</p>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="sliders" class="w-4 h-4 text-blue-400"></i> Feature Toggles</h3>
            ${[{key:"product_ai_enabled",label:"AI Product Creation",desc:"AI auto-fills product descriptions",val:i.product_ai_enabled!==!1},{key:"ai_code_assist",label:"AI Code Assistant",desc:"AI helps build and edit your website code",val:i.ai_code_assist!==!1},{key:"ai_moderation",label:"AI Content Moderation",desc:"Auto-approve/reject customer reviews using AI",val:i.ai_moderation}].map(o=>`
              <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
                <div><p class="text-xs font-bold text-white">${o.label}</p><p class="text-[11px] text-gray-500">${o.desc}</p></div>
                <label class="toggle-switch"><input type="checkbox" name="${o.key}" ${o.val?"checked":""}><span class="toggle-slider"></span></label>
              </div>`).join("")}
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            ðŸ’¾ Save AI Settings
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.highlightAI=function(e){At.forEach(t=>{const a=document.getElementById("apc-"+t.id);if(!a)return;const i=t.id===e;a.className=`glass-soft border ${i?re.border[t.color]+" "+re.bg[t.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard`;const n=a.querySelector("input[type=radio] + span");n&&(n.className=`text-[9px] font-bold ${i?re.text[t.color]:"text-gray-600"}`)})};window.saveAiSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={active_provider:a.active_provider||"gemini",product_ai_enabled:a.product_ai_enabled==="on",ai_code_assist:a.ai_code_assist==="on",ai_moderation:a.ai_moderation==="on"};At.forEach(o=>{a[o.mf]&&(i[o.mf]=a[o.mf]);const r=(a[o.kf]||"").trim();r&&!r.startsWith("â€¢â€¢â€¢â€¢")&&r!==""&&(i[o.kf]=r)}),i.gemini_key&&(i.gemini_api_key=i.gemini_key),a.groq_vision_model&&(i.groq_vision_model=a.groq_vision_model);const n=(a.groq_key||"").trim();n&&!/^[•\u2022]{4}/.test(n)&&(i.groq_key=n);try{const{data:o}=await g.from("ai_settings").select("id").limit(1).maybeSingle();let r;if(o?.id?{error:r}=await g.from("ai_settings").update(i).eq("id",o.id):{error:r}=await g.from("ai_settings").insert(i),r){m("Save failed: "+r.message,"error"),console.error("[AI Save]",r);return}await F.reload(),m("âœ… AI settings saved!","success"),setTimeout(()=>Pi(),600)}catch(o){m("Unexpected error: "+o.message,"error"),console.error("[AI Save]",o)}};const F={_cfg:null,async reload(){const{data:e,error:t}=await g.from("ai_settings").select("*").limit(1).maybeSingle();if(t){console.warn("[aiClient] Could not load settings:",t.message),this._cfg={};return}const a=e||{};!a.gemini_key&&a.gemini_api_key&&(a.gemini_key=a.gemini_api_key),this._cfg=a},async getConfig(){return this._cfg||await this.reload(),this._cfg},async freeChat(e,{maxTokens:t=2e3,timeoutMs:a=6e4}={}){const i=await fetch("https://text.pollinations.ai/openai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"openai",messages:e.map(r=>({role:r.role==="assistant"?"assistant":r.role==="system"?"system":"user",content:String(r.content||"").slice(0,12e3)})),max_tokens:t}),signal:AbortSignal.timeout(a)});if(!i.ok)throw new Error(`Free AI provider error (${i.status}).`);const n=await i.json(),o=String(n?.choices?.[0]?.message?.content||"").trim();if(!o)throw new Error("Free AI provider returned an empty reply.");return{text:o,provider:"Free AI (Pollinations)",model:String(n?.model||"openai-fast")}},async chat(e,{maxTokens:t=2e3}={}){const a=await this.getConfig();if(!String(a.gemini_key||"").trim())return this.freeChat(e,{maxTokens:t});const n=e[e.length-1],o={action:"chat",message:String(n?.content||"").trim(),history:e.slice(0,-1).map(r=>({role:r.role,content:String(r.content||"")})),provider_override:"gemini",max_tokens:t};try{const r=await this._callEdge(o);if(r&&r.response)return{text:r.response,provider:"Google Gemini",model:r.model||a.gemini_model};throw new Error(String(r?.error||"Gemini is unavailable."))}catch(r){try{const d=await this.freeChat(e,{maxTokens:t});return d.note="gemini-unavailable",d}catch{throw r}}},async prompt(e,t={}){return this.chat([{role:"user",content:e}],t)},async getStatus(){const e=await this.getConfig();return At.map(t=>({id:t.id,name:t.name,color:t.color,hasKey:!!e[t.kf]?.trim(),isActive:e.active_provider===t.id,isCoolingDown:!1,remainingSec:0}))},async analyzeImages(e,t={}){const a=`You are the AI listing expert for the Weverse Online Shop marketplace. Look carefully at the uploaded product photo(s) and identify exactly what the product is â€” the REAL brand, model and year that actually appear in the photos, never a guessed one.

IDENTIFY THE REAL BRAND & MODEL (most important):
- Find the brand badge, emblem, logo, nameplate or label in the photo and read its exact letters and symbols, character by character.
- For vehicles, cross-check the badge against the design: grille shape, headlight and taillight design, body lines, wheels, interior and steering wheel. A BMW grille/kidney badge, Mercedes three-pointed star, Audi four rings, Toyota, Honda, Ford, Tesla, etc. are visually distinct â€” match what you actually see.
- Use the EXACT brand name that is printed on the product. NEVER swap it for a different brand (e.g. never call a BMW a Mercedes-Benz, never call an iPhone a Samsung).
- If the exact model number is printed (e.g. "X5", "C300", "iPhone 15 Pro Max", "MacBook Pro"), use that exact text.
- The year must come from a visible printed date/serial when present; otherwise give your best estimate from the design era and never invent a specific year you cannot support.

Return a single valid JSON object (no markdown, no extra text) with these keys:
- title (string): a real, professional marketplace product title that matches the actual item (real brand + real model/type + key feature + category). Never use placeholders like "AI Product" or "Premium Item".
- description (string): a detailed, persuasive 2-4 sentence description.
- category (string): the best category from this list: ${we.join(", ")}.
- subcategory (string)
- brand (string): the EXACT brand name that appears on the product or badge â€” read the logo/emblem/nameplate and use that name. If none is readable, identify the make from the design and badge shape.
- model (string): the EXACT model name/number printed on the product or box when visible; otherwise your best professional identification from the design.
- year (string or null): the real model/manufacturing year â€” read the printed year/serial if visible, otherwise your best estimate from the design era. Only null for items with no meaningful year.
- model_year (string or null): same as year when the product has a model year.
- color (string): ALWAYS the dominant color of the item.
- condition (string; from: New, Refurbished, Used - Like New, Used - Good, Used - Fair)
- material, size, storage, ram, processor, display (strings, only if relevant)
- features (array of strings)
- highlights (array of strings)
- seo_keywords (array of strings)
- specifications (object with the relevant spec keys only, e.g. engine, transmission, fuel_type, horsepower, mileage, drive_type, body_type, model_year for vehicles; storage, ram, processor, display for electronics)
- detected_name (string): a short plain-language label of the product, e.g. "white sneakers".

Rules:
- ACCURACY OVER GUESSES: Only state a brand/model/year you can actually see or confidently identify from the design. If you cannot identify the exact model, give the brand and a general body type (e.g. "BMW SUV") instead of inventing a specific model.
- NEVER invent exact specs (price, storage size, RAM, horsepower, serial numbers) that are not visible or printed on the product.
- Respond with valid JSON only.`,i=await this._collectScanImages((e||[]).slice(0,t.maxImages||3));if(!i.length)throw new Error("Could not read the uploaded images.");try{const n=await this._callEdge({action:"vision",images:i,prompt:a,max_tokens:4096});if(n&&n.success&&n.text){const o=Ia(n.text);if(o)return n.provider&&this._noteProvider(n.provider),{...o,_aiProvider:n.provider==="groq"?"Groq vision (backup)":"Gemini vision",_aiModel:n.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(n&&n.error||"Vision service unavailable.")}catch(n){this._noteIssue("identify",`server vision: ${n&&n.message||n}`)}return null},async _runVisionPrompt(e,t,{maxImages:a=5,maxTokens:i=4096,mergeResults:n=null,onProgress:o=()=>{},stageLabel:r="vision"}={}){const d=Math.max(1,Number(a)||5),s=await this._collectScanImages(t,{onProgress:o});if(!s.length)throw new Error("Could not read the uploaded images.");const c=async p=>this._runSingleVisionCall(e,p,{maxTokens:i,stageLabel:r});let u;if(s.length<=d)u=await c(s);else{const p=[];for(let x=0;x<s.length;x+=d)p.push(s.slice(x,x+d));o(0,p.length);const y=3,h=new Array(p.length).fill(null);let b=0;const f=async()=>{for(;b<p.length;){const x=b++;h[x]=await c(p[x]).catch(()=>null),o(Math.min(b,p.length),p.length)}};await Promise.all(Array.from({length:Math.min(y,p.length)},f));const w=[];if(h.forEach((x,k)=>{x&&w.push({result:x,startIndex:k*d})}),!w.length)return null;u=n?n(w,{batchSize:d,totalImages:s.length}):w.reduce((x,k)=>this._mergeJsonResults(x,k.result),null)}return u||null},async _runSingleVisionCall(e,t,{maxTokens:a=4096,stageLabel:i="vision"}={}){if(!await this._waitForQuotaWindow(7e4,i))return null;try{const n=await this._paceGeminiCall(()=>this._callEdge({action:"vision",images:t,prompt:e,max_tokens:a},45e3));if(n&&n.success&&n.text){const o=Ia(n.text);if(o)return n.provider&&this._noteProvider(n.provider),{...o,_aiProvider:n.provider==="groq"?"Groq vision (backup)":"Gemini vision",_aiModel:n.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(n&&n.error||"Vision service unavailable.")}catch(n){this._noteIssue(i,`vision: ${n&&n.message||n}`)}return null},_pdfPageCache:new Map,_videoFrameCache:new Map,async _collectScanImages(e,{onProgress:t=()=>{}}={}){const a=(Array.isArray(e)?e:[e]).map(o=>String(o||"")).filter(Boolean);if(!a.length)return[];const i=await Promise.all(a.map(async o=>{try{if(/^data:application\/pdf/.test(o)||et(o)){let s=this._pdfPageCache.get(o)||null;return s||(s=await cn(o,{maxDim:1300}).catch(()=>[]),s.length&&this._pdfPageCache.set(o,s)),s}let r=null;if(Hi(o))r=o;else if(o.startsWith("blob:"))try{const s=await fetch(o,{signal:AbortSignal.timeout(15e3)}).then(c=>c.blob());s&&s.type&&s.type.startsWith("video/")&&(r=s)}catch{}if(r){let s=this._videoFrameCache.get(o)||null;return s||(s=await Gi(r,{maxFrames:8,maxDim:1024}).catch(()=>[]),s.length&&this._videoFrameCache.set(o,s)),s}const d=await this._fetchImageAsDataUrl(o,1024);return d?[d]:[]}catch{return[]}})),n=[];for(const o of i)n.push(...o);return n},_mergeJsonResults(e,t){if(!e)return t?{...t}:null;if(!t)return e;const a={...e};for(const[i,n]of Object.entries(t))if(!i.startsWith("_")&&!(n==null||typeof n=="string"&&!n.trim())){if(!(i in a)||a[i]==null||a[i]===""){a[i]=n;continue}if(Array.isArray(a[i])||Array.isArray(n)){const o=[...Array.isArray(a[i])?a[i]:[a[i]],...Array.isArray(n)?n:[n]].map(r=>typeof r=="string"?r.trim():r).filter(r=>r!=null&&r!=="");a[i]=[...new Set(o)]}else typeof a[i]=="object"&&typeof n=="object"?a[i]={...a[i],...n}:(String(a[i]).trim(),String(n).trim())}return a},async identifyProduct(e,t={}){const a=`STAGE 1 â€” IDENTIFY THE EXACT PRODUCT.
Look at the photo(s) and state exactly what product is shown. Identification ONLY â€” do not complete any specifications yet.

IDENTIFICATION RULES (accuracy over guesses â€” this is the most important step):
- Read the real brand badge / logo / emblem / nameplate / label in the photo character by character and use the EXACT brand that is printed. NEVER swap brands: a BMW must never be called Mercedes-Benz, an iPhone never Samsung, a Toyota never Honda or any other brand.
- The model must come from a visible nameplate / label / badging when present. Otherwise identify the exact design (grille, headlights, taillights, wheels, body lines, interior, silhouette, box, packaging) and give your best professional identification, or give the brand + product type (e.g. "BMW SUV" or "Levi's jeans") instead of inventing a specific model.
- year: only from a visible printed year, serial, badge or registration. Otherwise estimate from the design era and set "year_estimated": true.
- color: the dominant color clearly visible.
- body_type: only when clearly visible (Sedan, SUV, Hatchback, Coupe, Convertible, Wagon, Pickup, Truck, Van, Sports Car, Luxury Sedan, Motorcycle, Yacht, Other).
- condition: judge from what is visible (New, Refurbished, Used - Like New, Used - Good, Used - Fair).
- listing_type: "property" if the photo shows a house, villa, apartment, condo, mansion, land, estate or any building for sale; "vehicle" for cars, motorcycles, boats and other vehicles; otherwise "product".
- category (for products and vehicles): best match from this list: ${we.join(", ")}. For property photos set category to "Real Estate".
- For properties also give: property_type (House, Villa, Apartment, Condo, Land, Commercial, Farm, Other), bedrooms (number or null), bathrooms (number or null), half_bathrooms (number or null), building_size (string|null), land_size (string|null), floors (number|null), garage (string|null, e.g. "2-car attached"), parking_spaces (number|null), furnished ("Furnished"/"Unfurnished"/null), condition (string|null â€” only from a visible listing sign, seller notes or obvious visible state: "New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation"), year_built (number|null â€” only from a visible year, plaque, cornerstone or listing sign), year_renovated (number|null â€” only if visibly stated), area (neighborhood/district, string|null), address (street + number or landmark when visible in the photo or reliably known, string|null), zip_code (string|null â€” only if visibly printed), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town (string|null), city (string|null), state (string|null), country (string|null), latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null).
- LOCATION RULES: use ONLY location information genuinely visible in the photo or reliably known from it (street signs, landmarks, real estate signs, watermarks). NEVER invent a street address, area, city or coordinates. If you cannot determine a location value, return null for that field â€” the owner will enter it. Latitude/longitude may be derived from a readable address (e.g. a visible street sign); otherwise null.
- confidence: how certain you are about what this is: "high" | "medium" | "low".
- alternate_categories: up to 2 other plausible category matches from the list above, or [].
- detected_name: a short plain label of what you actually see, e.g. "white Toyota Camry sedan", "black leather handbag", "modern 4-bedroom villa".
- If the photo does not clearly show a product, return { "identified": false, "detected_name": "what you see", "reason": "why you cannot identify it" }.

Return ONE valid JSON object (no markdown) with only these keys:
{ "identified": true, "listing_type": "product"|"vehicle"|"property", "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": string|null, "year_built": number|null, "year_renovated": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "confidence": "high"|"medium"|"low", "alternate_categories": string[], "detected_name": string }`;return this._runVisionPrompt(a,e,{maxImages:t.maxImages||5,stageLabel:"identify"})},async detectProducts(e,t={}){const a=`STAGE 0 â€” DETECT EVERY DISTINCT PRODUCT.
Look carefully at ALL of the photo(s) uploaded and detect EVERY distinct product shown.

RULES:
- Every detected product must be its own entry. If one photo shows a bag, a watch, shoes and a phone, that is FOUR separate products.
- Even when multiple photos show the SAME product, create a SEPARATE entry for each detection. Each photo that shows a product must result in its own listing. The owner reviews every single one.
- A single photo can appear in several products' image_indices when it contains several different products.
- If a photo contains no recognizable product, ignore that photo.
- NEVER reject the scan. Even when a photo is blurry, dark, partial or unusual, ALWAYS give your BEST identification of the most likely product in it and set "confidence" to "low" â€” the owner reviews and edits everything afterwards. Only return { "identified": false, "reason": ... } when every single photo truly contains no object at all.

For each distinct product include:
- image_indices: array of the photo indexes (0-based) that show THIS product (used as its own images later). Never combine different products under one entry.
- listing_type: "property" if it is a house, villa, apartment, condo, mansion, land, estate or building; "vehicle" for cars, motorcycles, boats; otherwise "product".
- brand: the real brand printed on the product when visible â€” never swap one brand for another.
- model: real model from a visible label when present, otherwise null.
- year: only from visible text; otherwise null with year_estimated true when estimated from the design.
- body_type, color, condition (New, Refurbished, Used - Like New, Used - Good, Used - Fair).
- category: best match from this list â€” ${we.join(", ")}. For properties set category to "Real Estate".
- subcategory, property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors (number|null), garage (string|null), parking_spaces (number|null), furnished ("Furnished"/"Unfurnished"/null), year_built (number|null â€” only if visible), area (neighborhood/district), address (street + number or landmark when visible/reliably known), zip_code (string|null â€” only if visible), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town, city, state, country, latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null) for properties. LOCATION RULES: only use location genuinely visible in the photo â€” never invent an address or coordinates; return null when unknown.
- confidence: "high" | "medium" | "low" for each product.
- detected_name: a short plain label for each product, e.g. "black leather handbag", "silver wristwatch", "white Nike sneakers", "modern 3-bedroom villa".

Return ONE valid JSON object (no markdown):
{ "identified": true, "products": [ { "image_indices": number[], "listing_type": "product"|"vehicle"|"property", "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": "Furnished"|"Unfurnished"|null, "year_built": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "confidence": "high"|"medium"|"low", "detected_name": string } ] }`;return this._runVisionPrompt(a,e,{maxImages:t.maxImages||5,stageLabel:"detect",mergeResults:i=>{const n=[];for(const{result:o,startIndex:r}of i)for(const d of o&&Array.isArray(o.products)?o.products:[]){const s=Array.isArray(d.image_indices)?[...new Set(d.image_indices.map(c=>parseInt(c,10)).filter(Number.isFinite).map(c=>c+r))]:[r];n.push({...d,image_indices:s})}return{identified:n.length>0,products:n}}})},async completeProductSpecs(e,t,a={}){const i=t||{},n=`STAGE 2 â€” COMPLETE THE STANDARD SPECIFICATIONS.
The product below was identified in STAGE 1 from the photos.

IDENTIFIED PRODUCT:
- listing_type: ${String(i.listing_type||"product")}
- brand: ${String(i.brand||"unknown")}
- model: ${String(i.model||"unknown")}
- year: ${String(i.year||"unknown")}
- body_type: ${String(i.body_type||"unknown")}
- category: ${String(i.category||"unknown")}
- detected_name: ${String(i.detected_name||"unknown")}

Look at the photo(s) again, then complete the standard specifications for THIS EXACT identified product using reliable product/vehicle/property data for that exact brand + model.

ALWAYS fill every relevant specification when you can determine it for the identified product:
- Vehicles: Engine, Transmission, Fuel, Drive type, Horsepower, Seats (seating capacity), Doors, Body type, Model year, Mileage (only if visible/known), Safety features.
- Phones/Computers: storage, ram, processor, display, graphics, os.
- Properties (house/villa/land): property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors, garage, parking_spaces, furnished ("Furnished"/"Unfurnished"/null), condition (string|null â€” "New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation"; only from visible state or a listing sign, never inferred as verified), year_built (number|null â€” only if visible/known), year_renovated (number|null â€” only if visible/known), area (neighborhood/district), address (street + number or landmark when visible/reliably known), zip_code (string|null â€” only if visibly printed), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town, city, state, country, country_code, latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null), interior_features (string[]|null â€” only interior elements actually visible in the photos), exterior_features (string[]|null â€” only exterior elements actually visible), home_systems (string[]|null â€” only systems visibly present, e.g. air conditioning units, solar panels, radiators), nearby_area (only genuinely known from the photo/listing sign: schools/hospitals/shopping/transportation/distances â€” otherwise null), floor_plan (only if a floor plan is actually visible in the photos, otherwise null), legal_info (NEVER claim ownership/title/permits/taxes/legal status as verified from a photo â€” only mention something clearly printed on a visible listing/sign as source "Seller provided", otherwise null), inspection_info (string|null â€” only if visibly stated), verification_status (always null here â€” stays "Not verified" unless the owner verifies), risk_notes (string|null â€” only clearly visible issues). LOCATION RULES: only use location genuinely visible in the photo or reliably known â€” never invent an address, city, coordinates, landmarks or nearby places; return null (and list the key in "missing_fields") when you cannot determine it. latitude/longitude may be derived from a readable address; otherwise null.
- Other product types: fill whatever genuinely applies â€” type (e.g. Handbag, Sneaker, Textbook), material, size, color, brand, model, age_range, skin_type, ingredients, author, publisher, language, format, isbn, pages, edition, quantity, pet_type, lens, sensor, megapixels, video, platform, license, version, duration, followers, engagement, niche, usage, shelf_life, storage, assembly, weatherproof, warranty.
- Also complete the listing content for the exact identified product: highlights (3-6 genuine selling points), seo_keywords (6-10 relevant search keywords for the identified product), tags (from the allowed badge set â€” "New Arrival", "Best Seller", "Hot Deal", "Featured", "Limited Stock" â€” only the ones that genuinely apply to this exact product), warranty (only when the identified product type genuinely carries one, e.g. electronics, vehicles, appliances), availability_status ("In Stock" for a new product, otherwise null if not determinable), and stock_quantity (1 ONLY for unique one-of-a-kind items such as a vehicle, property or single specimen â€” otherwise null, because stock cannot be known from a photo).

HARD RULES:
- ONLY use specifications for the exact brand + model identified above. A Toyota photo must produce TOYOTA specifications. NEVER use specifications from a different brand or model (never a Toyota image â†’ Mercedes specs, never an iPhone image â†’ Samsung specs, never a bag image â†’ car specs).
- If the exact year or trim is uncertain, use the most common / standard specification for that identified model and list that key in "estimated". Do not randomly invent values that are not reasonable for that model.
- Only return specs that exist for the product type: a bag has no engine/transmission/horsepower (leave those null); a phone has no transmission or doors (leave those null); a car has engine/transmission/fuel/drive/horsepower/seats/doors; a house has bedrooms/bathrooms/sizes but no engine or storage.
- Never return price in this stage â€” price is handled in a separate stage.
- "missing_fields" is the ONLY place where uncertainty is recorded: for every field in this JSON that APPLIES to the identified product type but that you genuinely cannot determine or reliably verify (from the photos or reliable product data), list that key in "missing_fields". NEVER guess a value for a field you cannot determine â€” put its key in "missing_fields" instead. NEVER list a field that does not apply to this product type. The owner will see "Not specified" for those fields and can review/edit them before publishing.

DESCRIPTION REQUIREMENTS (the description is a MAJOR part of the listing):
- Write a detailed, professional, natural, trustworthy and enjoyable marketplace description that is clearly about THIS exact identified product and nothing else.
- For vehicles, naturally explain the engine, performance, transmission, drivetrain, fuel type, comfort, interior, exterior, safety, technology and practicality â€” always grounded in the reliable specifications you returned above.
- For properties, describe the home/land, its layout, rooms, size, location, surroundings and notable features â€” grounded in the property details returned above.
- For other product types, cover the product's most relevant, genuine attributes (design, materials, build quality, usability, and key specs) based only on the identified product and its reliable specs.
- Write in smooth, complete sentences and short paragraphs (roughly 3-6 sentences / 60-140 words). Never sound robotic, never use bullet lists, never invent features, prices, bundles or promises that are not true of the identified product, and NEVER mention AI, scanning, estimates, specification lookup or any internal process.

Return ONE valid JSON object (no markdown):
{
  "title": string|null (professional listing title: year + real brand + real model + product type, e.g. "2023 Toyota Camry SE Sedan" or "Black Leather Crossbody Handbag"),
  "description": string|null (the detailed, professional description described above â€” based ONLY on the identified product and its standard specs),
  "engine": string|null, "transmission": string|null, "fuel_type": string|null, "drive_type": string|null,
  "horsepower": string|null, "mileage": string|null, "seating_capacity": string|null, "doors": string|null,
  "body_type": string|null, "model_year": string|null, "safety_features": string[]|null,
  "storage": string|null, "ram": string|null, "processor": string|null, "display": string|null, "graphics": string|null, "os": string|null,
  "material": string|null, "size": string|null, "gender": string|null, "platform": string|null,
  "type": string|null, "color": string|null, "brand": string|null, "model": string|null,
  "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": string|null, "condition": string|null, "year_built": number|null, "year_renovated": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "country_code": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "interior_features": string[]|null, "exterior_features": string[]|null, "home_systems": string[]|null, "nearby_area": { "schools": string[]|null, "hospitals": string[]|null, "shopping": string[]|null, "transportation": string[]|null, "distances": string[]|null }|null, "floor_plan": { "image": string|null, "rooms": string[]|null, "levels": string|null, "total_area": string|null }|null, "legal_info": string[]|null (each item like "Ownership: Clear title (Seller provided)" or "Property taxes (Not verified)" â€” NEVER verified from a photo), "inspection_info": string|null, "risk_notes": string|null,
  "author": string|null, "publisher": string|null, "language": string|null, "format": string|null, "isbn": string|null, "pages": string|null, "edition": string|null, "quantity": string|null, "age_range": string|null, "skin_type": string|null, "ingredients": string|null, "pet_type": string|null, "lens": string|null, "sensor": string|null, "megapixels": string|null, "video": string|null, "license": string|null, "version": string|null, "duration": string|null, "followers": string|null, "engagement": string|null, "niche": string|null, "usage": string|null, "shelf_life": string|null, "assembly": string|null, "weatherproof": string|null, "warranty": string|null,
  "features": string[]|null (notable features, e.g. ["OLED display","5G"] or ["Swimming pool","Double garage"]),
  "highlights": string[]|null (3-6 genuine selling points of this exact product),
  "seo_keywords": string[]|null (6-10 relevant search keywords for this exact product),
  "tags": string[]|null (only from: "New Arrival", "Best Seller", "Hot Deal", "Featured", "Limited Stock" â€” only ones that genuinely apply),
  "availability_status": "In Stock"|"Out of Stock"|"Pre-order"|"Limited Stock"|null,
  "stock_quantity": number|null (1 only for unique one-of-a-kind items, otherwise null),
  "estimated": string[] (keys above that are estimates, e.g. ["engine","horsepower"]),
  "missing_fields": string[] (keys above that APPLY to this product type but could not be determined â€” see HARD RULES)
}`;return this._runVisionPrompt(n,e,{maxImages:a.maxImages||5,stageLabel:"specs"})},async estimateProductPrice(e,t,a={},i={}){const n=t||{},o=a||{},r=`STAGE 3 â€” ESTIMATE THE REAL MARKET PRICE AND A PROMOTIONAL DISCOUNT PRICE.
The exact product below was identified from the photos in STAGE 1, and its standard specifications were completed in STAGE 2.

IDENTIFIED PRODUCT:
- brand: ${String(n.brand||"unknown")}
- model: ${String(n.model||"unknown")}
- year: ${String(n.year||"unknown")}
- body_type: ${String(n.body_type||"unknown")}
- condition: ${String(n.condition||"unknown")}
- category: ${String(n.category||"unknown")}
- detected_name: ${String(n.detected_name||"unknown")}

KNOWN SPECIFICATIONS:
- engine: ${String(o.engine||"unknown")}
- transmission: ${String(o.transmission||"unknown")}
- fuel_type: ${String(o.fuel_type||"unknown")}
- drive_type: ${String(o.drive_type||"unknown")}
- horsepower: ${String(o.horsepower||"unknown")}
- mileage: ${String(o.mileage||"unknown")}
- storage/ram: ${String(o.storage||"")}${o.ram?" / "+o.ram:""}
- property: ${String(n.property_type||o.property_type||"")}${o.bedrooms?` ${o.bedrooms} beds`:""}${o.half_bathrooms?` / ${o.half_bathrooms} half baths`:""}${o.bathrooms?` / ${o.bathrooms} baths`:""}${o.building_size?` / ${o.building_size}`:""}${o.land_size?` / ${o.land_size} land`:""}${o.year_built?` / built ${o.year_built}`:""}${o.condition?` / ${o.condition}`:""}${o.city?` / ${o.city}`:""}

Estimate the reasonable CURRENT MARKET SELLING PRICE (in USD) for THIS EXACT identified product â€” the price a real buyer would realistically pay for it today, in the condition shown in the photo. Use reliable current market data for that exact brand + model + year + condition + trim.

Then suggest a promotional DISCOUNT PRICE: a compelling sale price BELOW the real price (typically 5-20% off) that the customer would actually pay, to make the listing attractive. If a discount does not make sense for this product, set suggested_discount_price to null.

HARD RULES:
- ONLY price the exact product identified above. A Toyota photo must get a TOYOTA price, an iPhone photo an iPhone price, a Gucci bag a Gucci bag price. NEVER use the price of a different brand or model.
- Base the price on the identified product's real market value: for a car use current market value of that model/year/condition (consider trim, engine, mileage, condition); for a house/property use typical values for the identified property type and location when visible; for a bag use the market price of that brand/model/type/condition; for a phone use the current market price of that model/storage/condition.
- If the exact value cannot be determined, give the best reasonable market estimate â€” never 0, never a random invented number, and never a price for a different product.
- Never include currency symbols or commas in the numbers; both prices must be plain numbers (e.g. 24500).
- Never return a price range as the main value.
- suggested_discount_price must be strictly LESS than estimated_price, or null when no discount applies.

Return ONE valid JSON object (no markdown):
{
  "currency": "USD",
  "estimated_price": number (the real market price of this exact product),
  "suggested_discount_price": number|null (the promotional price the customer pays, below the real price),
  "price_range_min": number|null,
  "price_range_max": number|null,
  "confidence": "high" | "medium" | "low",
   "reason": string (one short sentence explaining the estimate)
}`;return this._runVisionPrompt(r,e,{maxImages:i.maxImages||5,stageLabel:"price"})},async completeSpecsAndPrice(e,t,a={}){const i=t||{},n=`STAGES 2+3 â€” COMPLETE THE SPECIFICATIONS AND ESTIMATE THE PRICE IN ONE STEP.
The product below was identified from the photos.

IDENTIFIED PRODUCT:
- listing_type: ${String(i.listing_type||"product")}
- brand: ${String(i.brand||"unknown")}
- model: ${String(i.model||"unknown")}
- year: ${String(i.year||"unknown")}
- body_type: ${String(i.body_type||"unknown")}
- category: ${String(i.category||"unknown")}
- detected_name: ${String(i.detected_name||"unknown")}

Look at the photo(s), then do BOTH jobs for THIS EXACT identified product.

JOB A â€” COMPLETE THE STANDARD SPECIFICATIONS using reliable data for that exact brand + model:
- Vehicles: engine, transmission, fuel_type, drive_type, horsepower, seating_capacity, doors, body_type, model_year, mileage (only if visible/known), safety_features.
- Phones/Computers: storage, ram, processor, display, graphics, os.
- Properties: property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors, garage, parking_spaces, furnished ("Furnished"/"Unfurnished"/null), condition ("New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation" â€” only from visible state or a listing sign, never inferred as verified), year_built/year_renovated (only if visible/known), area, address (ONLY when genuinely visible/reliably known), zip_code (only if visibly printed), landmarks (only clearly indicated ones), town, city, state, country, country_code, latitude, longitude, listing_status ("sale"/"rent"/null). LOCATION RULES: never invent an address, city or coordinates; return null and list the key in "missing_fields" when undeterminable.
- Other product types: type, material, size, color, age_range, skin_type, ingredients, author, publisher, language, format, isbn, pages, edition, quantity, pet_type, lens, sensor, megapixels, video, platform, license, version, duration, followers, engagement, niche, usage, shelf_life, assembly, weatherproof, warranty.
- Listing content: highlights (3-6 genuine selling points), seo_keywords (6-10 keywords), tags (only from "New Arrival", "Best Seller", "Hot Deal", "Featured", "Limited Stock" â€” only ones that genuinely apply), availability_status ("In Stock" for a new product, otherwise null), stock_quantity (1 ONLY for unique one-of-a-kind items such as a vehicle or property, otherwise null).

HARD RULES:
- ONLY use specifications of the exact brand + model identified above. NEVER swap brands or models.
- Only return specs that exist for this product type (a bag has no engine; a phone has no transmission; a car has engine/transmission/fuel/drive/horsepower/seats/doors).
- If the exact year/trim is uncertain use the most common standard spec for that model and list the key in "estimated".
- "missing_fields": every field that APPLIES to this product type but cannot be determined â€” list the key there instead of guessing.
- DESCRIPTION: write a detailed, professional, natural marketplace description (3-6 sentences / 60-140 words) about THIS exact product only, grounded in its real specs. Smooth sentences, no bullet lists, no invented features, never mention AI/scanning/estimates.

JOB B â€” ESTIMATE THE PRICE: the reasonable CURRENT MARKET SELLING price in USD for this exact product today (brand + model + year + condition + trim), then a promotional DISCOUNT price typically 5-20% BELOW it (null when a discount makes no sense). Never 0, never another product's price, plain numbers without symbols or commas.

Return ONE valid JSON object (no markdown):
{
  "title": string|null,
  "description": string|null,
  "engine": string|null, "transmission": string|null, "fuel_type": string|null, "drive_type": string|null,
  "horsepower": string|null, "mileage": string|null, "seating_capacity": string|null, "doors": string|null,
  "body_type": string|null, "model_year": string|null, "safety_features": string[]|null,
  "storage": string|null, "ram": string|null, "processor": string|null, "display": string|null, "graphics": string|null, "os": string|null,
  "material": string|null, "size": string|null, "gender": string|null, "platform": string|null,
  "type": string|null, "color": string|null, "brand": string|null, "model": string|null,
  "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": string|null, "condition": string|null, "year_built": number|null, "year_renovated": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "country_code": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null,
  "author": string|null, "publisher": string|null, "language": string|null, "format": string|null, "isbn": string|null, "pages": string|null, "edition": string|null, "quantity": string|null, "age_range": string|null, "skin_type": string|null, "ingredients": string|null, "pet_type": string|null, "lens": string|null, "sensor": string|null, "megapixels": string|null, "video": string|null, "license": string|null, "version": string|null, "duration": string|null, "followers": string|null, "engagement": string|null, "niche": string|null, "usage": string|null, "shelf_life": string|null, "assembly": string|null, "weatherproof": string|null, "warranty": string|null,
  "features": string[]|null, "highlights": string[]|null, "seo_keywords": string[]|null, "tags": string[]|null,
  "availability_status": string|null, "stock_quantity": number|null,
  "estimated": string[],
  "missing_fields": string[],
  "price": { "currency": "USD", "estimated_price": number, "suggested_discount_price": number|null, "confidence": "high"|"medium"|"low", "reason": string }
}${a.fieldsSchema||""}${a.fieldsSchema?`
FORM-FIELD COMPLETENESS RULE: the form-field list above is binding. EVERY key in that list that is not already covered by the JSON keys above MUST also appear as a top-level key in your returned JSON with its extracted value (or null when genuinely not present anywhere in the document/photos â€” never guess). Use each field's exact quoted key. Match select options exactly.`:""}`,o=await this._runVisionPrompt(n,e,{maxImages:a.maxImages||5,stageLabel:"specs-price"});if(!o)return null;const{price:r,...d}=o,s=r&&typeof r=="object"?r:o.estimated_price!=null?{currency:o.currency||"USD",estimated_price:o.estimated_price,suggested_discount_price:o.suggested_discount_price??null,confidence:o.confidence??null,reason:o.reason??""}:null;if(s&&Number.isFinite(Number(s.estimated_price))){const c=Number(s.estimated_price);c<=0&&(s.estimated_price=N),s.estimated_price=Math.max(N,Math.min(Q,c))}return{specs:Object.keys(d).length?d:null,price:s}},async verifyExtraction(e,t,a,i=[],n={}){if(!await this._waitForQuotaWindow(2e4,"verify"))return null;const o=t||{},r=(i||[]).map(c=>`- "${c.key}" (${c.label})`).join(`
`),d=Object.entries(a||{}).filter(([,c])=>c!=null&&String(Array.isArray(c)?c.join(", "):c).trim()!=="").map(([c,u])=>`"${c}": ${JSON.stringify(Array.isArray(u)?u.join(", "):String(u).slice(0,160))}`).join(`,
`),s=`VERIFICATION PASS â€” CHECK EVERY EXTRACTED VALUE AGAINST THE DOCUMENT.
A first extraction pass produced the values below from these same photo(s)/document page(s). Your job is to RE-READ every page carefully and audit EACH value.

IDENTIFIED ITEM: ${[o.year,o.brand,o.model].filter(Boolean).join(" ")||o.detected_name||"unknown"}

CURRENT EXTRACTED VALUES:
${d||"(none yet)"}

AUDIT INSTRUCTIONS â€” check all of these, one by one:
1. WRONG VALUES: any current value that contradicts what the document actually says (misread digit/letter, wrong model variant, wrong date format, swapped fields like engine size vs horsepower, price in the wrong currency) â†’ put the CORRECT value in "corrections" under that exact key.
2. MISSED VALUES: information present somewhere in the document (any page, including fine print, tables, stamps, serials, labels, footers) that has NO current value above but belongs to one of the known fields â†’ add it under that exact key in "corrections".
3. MISPLACED VALUES ("wrong_mapping"): a value that was put in the wrong FIELD (e.g. VIN stored as mileage, a person's name stored as publisher) â†’ list [wrong_key, right_key] pairs.
4. STILL MISSING: fields that genuinely apply to this item type but have no value and are nowhere in the document â†’ list their keys in "still_missing". NEVER invent or guess a value â€” only report what is actually written in the document.
${r?`
KNOWN FORM FIELDS:
${r}
Use ONLY these keys (or keys already present above) in corrections.
`:""}
Return ONE valid JSON object (no markdown):
{ "corrections": { "<key>": <corrected or newly found value â€” exact JSON type for that field> }, "still_missing": ["key"], "wrong_mapping": [["from_key","to_key"]], "notes": ["short factual observations, e.g. 'VIN appears on page 2 footer'"] }`;try{return await this._runVisionPrompt(s,e,{maxImages:n.maxImages||5,maxTokens:2500,stageLabel:"verify",mergeResults:u=>{const p={corrections:{},still_missing:[],wrong_mapping:[],notes:[]};for(const{result:y}of u){const h=y||{};h.corrections&&typeof h.corrections=="object"&&Object.assign(p.corrections,h.corrections);for(const b of Array.isArray(h.still_missing)?h.still_missing:[]){const f=String(b);f&&!p.still_missing.includes(f)&&p.still_missing.push(f)}for(const b of Array.isArray(h.wrong_mapping)?h.wrong_mapping:[])Array.isArray(b)&&b.length>=2&&!p.wrong_mapping.some(f=>f[0]===b[0]&&f[1]===b[1])&&p.wrong_mapping.push([String(b[0]),String(b[1])]);for(const b of Array.isArray(h.notes)?h.notes:[]){const f=String(b||"").trim();f&&!p.notes.includes(f)&&p.notes.push(f)}}return p}})}catch{return null}},async _callEdge(e,t=6e4){let a="";try{a=(await g.auth.getSession())?.data?.session?.access_token||""}catch{}return await(await fetch(pn,{method:"POST",headers:{"Content-Type":"application/json",...a?{Authorization:`Bearer ${a}`}:{}},body:JSON.stringify(e),signal:AbortSignal.timeout(t)})).json().catch(()=>({}))},_imageCache:new Map,async _fetchImageAsDataUrl(e,t=768){const a=String(e);if(this._imageCache.has(a))return this._imageCache.get(a);const i=(async()=>{try{const o=await fetch(e,{signal:AbortSignal.timeout(15e3)}).then(r=>r.blob());return!o||!o.size?null:o.size<15e4?`data:${o.type||"image/jpeg"};base64,${await So(o)}`:await this._downscaleImage(o,t)}catch{return null}})();this._imageCache.set(a,i);const n=await i;return n||this._imageCache.delete(a),n},async _downscaleImage(e,t){const a=URL.createObjectURL(e);try{const i=new Image;await new Promise((s,c)=>{i.onload=s,i.onerror=c,i.src=a});const n=Math.min(1,t/Math.max(i.width,i.height)),o=Math.max(1,Math.round(i.width*n)),r=Math.max(1,Math.round(i.height*n)),d=document.createElement("canvas");return d.width=o,d.height=r,d.getContext("2d").drawImage(i,0,0,o,r),d.toDataURL("image/jpeg",.72)}finally{URL.revokeObjectURL(a)}},_visionIssues:[],_providerCounts:{},beginScanSession(){this._visionIssues=[],this._providerCounts={},this._lastGoodModel=""},_noteProvider(e){const t=String(e||"").toLowerCase().includes("groq")?"groq":"gemini";this._providerCounts[t]=(this._providerCounts[t]||0)+1,t==="groq"&&this._noteIssue("vision","Gemini did not answer — Groq vision backup handled this request")},_noteIssue(e,t){const a=String(t||"").slice(0,220);if(!a)return;const i=this._visionIssues||(this._visionIssues=[]),n=i[i.length-1];if(n&&n.stage===e&&n.reason===a){n.count=(n.count||1)+1;return}i.push({stage:e,reason:a,count:1})},sessionReport(){return{providers:Object.entries(this._providerCounts||{}).map(([e,t])=>({name:e,count:t})),issues:(this._visionIssues||[]).slice(),lastGoodModel:this._lastGoodModel||""}},async _waitForQuotaWindow(e=7e4,t="vision"){const a=(this._geminiQuotaUntil||0)-Date.now();return a<=0?!0:a>e?(this._noteIssue(t,`quota cooldown ${Math.round(a/1e3)}s > ${Math.round(e/1e3)}s budget — completed without photo reading`),!1):(await new Promise(i=>setTimeout(i,a+300)),!0)},async preflight(){const e={gemini:null,groq:null,error:null};try{const t=await this._callEdge({action:"test_providers"},25e3);t&&t.providers?(e.gemini=t.providers.gemini||null,e.groq=t.providers.groq||null):e.error=t&&t.error||"Unexpected response from the AI service."}catch(t){e.error=String(t&&t.message||t)}return e},_geminiCallChain:Promise.resolve(),_lastGeminiCallAt:0,_paceGeminiCall(e){const a=this._geminiCallChain.then(async()=>{const i=(this._lastGeminiCallAt||0)+6e3-Date.now();return i>0&&await new Promise(n=>setTimeout(n,i)),this._lastGeminiCallAt=Date.now(),e()});return this._geminiCallChain=a.then(()=>{},()=>{}),a}};function So(e){return new Promise(t=>{const a=new FileReader;a.onload=()=>{const i=a.result;if(typeof i=="string"){const n=i.indexOf(",");t(n>=0?i.slice(n+1):i)}else t("")},a.onerror=()=>t(""),a.readAsDataURL(e)})}window.aiClient=F;window.showAiStatusModal=async function(){const e=await F.getStatus(),t=e.filter(a=>a.hasKey);U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="activity" class="w-5 h-5 text-emerald-400"></i> AI Provider Status</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="mb-4 p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          ${t.length===0?"âš  No key configured. Go to AI Settings and add your Google Gemini API key.":"Google Gemini is configured and ready."}
        </div>
        <div class="space-y-2">
          ${e.map(a=>`
            <div class="flex items-center gap-3 p-2.5 glass-soft border ${a.hasKey?"border-blue-500/15":"border-gray-800"} rounded-xl opacity-${a.hasKey?"100":"40"}">
              <span class="w-2.5 h-2.5 rounded-full shrink-0 ${a.hasKey?"bg-emerald-400":"bg-gray-600"}"></span>
              <span class="text-xs font-bold text-white flex-1">${l(a.name)}</span>
              ${a.isActive?'<span class="text-[9px] font-black text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full">ACTIVE</span>':""}
              ${a.hasKey?"":'<span class="text-[9px] text-gray-600">No key</span>'}
              ${a.hasKey?'<span class="text-[9px] text-emerald-400">Ready âœ“</span>':""}
            </div>`).join("")}
        </div>
        <div class="mt-4 p-3 bg-gray-900 rounded-xl">
          <p class="text-[10px] text-gray-400 font-bold uppercase mb-2">Test All Providers</p>
          <button onclick="testScanProviders()" id="btn-test-providers" class="btn-press w-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold py-2 rounded-xl transition flex items-center justify-center gap-1.5">
            <i data-lucide="stethoscope" class="w-3.5 h-3.5"></i> Test Gemini / Groq now
          </button>
          <div id="provider-test-output" class="hidden mt-3 space-y-1.5"></div>
        </div>
        <div class="mt-4 p-3 bg-gray-900 rounded-xl">
          <p class="text-[10px] text-gray-400 font-bold uppercase mb-2">Test AI Response</p>
          <div class="flex gap-2">
            <input id="ai-test-input" class="input-field flex-1 text-xs" placeholder="Type anything, e.g. 'Write hello world in Python'">
            <button onclick="testAiCall()" class="btn-press px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5">
              <i data-lucide="send" class="w-3.5 h-3.5"></i> Test
            </button>
          </div>
          <div id="ai-test-output" class="hidden mt-3 p-3 bg-gray-950 border border-blue-500/15 rounded-xl text-xs text-gray-200 whitespace-pre-wrap max-h-48 overflow-y-auto"></div>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()};window.testAiCall=async function(){const e=document.getElementById("ai-test-input")?.value?.trim();if(!e)return;const t=document.getElementById("ai-test-output");t.classList.remove("hidden"),t.textContent="⏳ Asking Gemini…";try{const a=await F.prompt(e);t.textContent=`✓ [${a.provider} · ${a.model}]

${a.text}`}catch(a){t.textContent=`✖ ${a.message}`}};window.testScanProviders=async function(){const e=document.getElementById("provider-test-output"),t=document.getElementById("btn-test-providers");if(!e)return;e.classList.remove("hidden"),t.disabled=!0;const a=(n,o,r,d)=>`
    <div class="flex items-start gap-2 p-2 glass-soft border border-gray-800 rounded-lg">
      <span class="w-2 h-2 rounded-full shrink-0 mt-1 ${o}"></span>
      <div class="min-w-0">
        <p class="text-[11px] font-bold text-white">${n} ${l(r)}</p>
        <p class="text-[10px] ${o==="bg-emerald-400"?"text-emerald-300":o==="bg-red-500"?"text-red-400":"text-amber-300"} break-words">${l(d)}</p>
      </div>
    </div>`;e.innerHTML='<p class="text-[11px] text-gray-400">Testing providers…</p>';let i="";try{const n=await F.preflight(),o=n.gemini||{};i+=o.ok?a("✓","bg-emerald-400","Gemini (Product Scanner — primary)",`Working${o.model?" · "+o.model:""}`):a("✖","bg-red-500","Gemini (Product Scanner — primary)",o.error||n.error||"Not working");const r=n.groq||{};i+=r.ok?a("✓","bg-emerald-400","Groq (Product Scanner — backup)",`Working · ${r.model||"vision model found"}`):r.configured?a("✖","bg-red-500","Groq (Product Scanner — backup)",r.error||"Key saved but not usable"):a("—","bg-yellow-400","Groq (Product Scanner — backup)","Optional backup not configured (no key)")}catch(n){i+=a("✖","bg-red-500","Cloud providers (server test)",String(n&&n.message||n))}i+=a("✓","bg-purple-400","General AI Scanner (via edge function)","Uses Gemini primary + Groq backup through server — no local install needed."),e.innerHTML=i,t.disabled=!1,window.lucide&&lucide.createIcons()};function Ia(e){if(!e)return null;let t=String(e).trim();const a=t.match(/```(?:json)?\s*([\s\S]*?)```/i);a&&(t=a[1].trim());const i=t.indexOf("{"),n=t.lastIndexOf("}");if(i===-1||n===-1||n<=i)return null;const o=t.slice(i,n+1);try{return JSON.parse(o)}catch{return null}}async function $o(){const e=document.getElementById("content");try{const[{data:t},a]=await Promise.all([g.from("site_settings").select("*").limit(1).maybeSingle(),Po()]),i=t||{},n=new Set(Array.isArray(i.live_promo_product_ids)?i.live_promo_product_ids:[]),o=a.length?`
        <div class="mt-4">
          <label class="lbl">Which products appear in the Live Promotions (Featured Product Alerts)?</label>
          <p class="text-[11px] text-gray-400 mb-2">Leave all unchecked to let the store pick real products automatically.</p>
          <input id="promo-picker-search" type="search" class="input-field mb-2" placeholder="Search products to chooseâ€¦" oninput="filterPromoPicker(this.value)">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1.5 max-h-72 overflow-y-auto pr-1" id="promo-picker-list">
            ${a.map(r=>{const d=r.property_id||r.id,s=n.has(d)?"checked":"";return`<label class="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3 py-2 cursor-pointer hover:border-blue-400/40 transition" data-promo-search="${l((r.title||r.name||"")+" "+(r.category||""))}">
                <input type="checkbox" name="live_promo_product_ids" value="${l(d)}" ${s} class="accent-blue-500 w-4 h-4">
                <span class="min-w-0"><span class="block text-xs font-bold text-white truncate">${l(r.title||r.name||d)}</span><span class="block text-[10px] text-gray-400">${l(r.category||r.listing_type||"")} Â· ${l(d)}</span></span>
              </label>`}).join("")}
          </div>
          <div class="flex gap-2 mt-2">
            <button type="button" onclick="selectAllPromoPicks()" class="text-[11px] font-bold text-blue-400 hover:text-blue-300 transition">Select all</button>
            <button type="button" onclick="clearAllPromoPicks()" class="text-[11px] font-bold text-gray-400 hover:text-gray-200 transition">Clear all</button>
          </div>
        </div>`:"";e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Website Content Manager</h2>
        <form id="content-form" onsubmit="saveContent(event)" class="space-y-5">
          ${[{section:"Site Identity",fields:[{key:"site_name",label:"Site Name",type:"text",placeholder:"Weverse Online Shop"},{key:"site_tagline",label:"Tagline / Slogan",type:"text",placeholder:"Premium International Commerce"},{key:"site_description",label:"Site Description (SEO)",type:"textarea",placeholder:"Your trusted global shopâ€¦"}]},{section:"Contact Information",fields:[{key:"contact_email",label:"Contact Email",type:"email",placeholder:"support@example.com"},{key:"contact_phone",label:"Contact Phone",type:"tel",placeholder:"+1 234 567 8900"},{key:"contact_address",label:"Business Address",type:"textarea",placeholder:"123 Main St, City, Country"},{key:"whatsapp_number",label:"WhatsApp Number",type:"tel",placeholder:"+1 234 567 8900"}]},{section:"Hero Section",fields:[{key:"hero_headline",label:"Hero Headline",type:"text",placeholder:"Weverse Online Shop"},{key:"hero_subtext",label:"Hero Subtext",type:"textarea",placeholder:"Shop premium productsâ€¦"},{key:"hero_cta_text",label:"CTA Button Text",type:"text",placeholder:"Shop Now"}]},{section:"Social Media",fields:[{key:"facebook_url",label:"Facebook URL",type:"url",placeholder:"https://facebook.com/â€¦"},{key:"instagram_url",label:"Instagram URL",type:"url",placeholder:"https://instagram.com/â€¦"},{key:"twitter_url",label:"Twitter / X URL",type:"url",placeholder:"https://twitter.com/â€¦"},{key:"youtube_url",label:"YouTube URL",type:"url",placeholder:"https://youtube.com/â€¦"},{key:"tiktok_url",label:"TikTok URL",type:"url",placeholder:"https://tiktok.com/â€¦"}]},{section:"Mobile App Promotion Banner",fields:[{key:"app_banner_enabled",label:"Show the App Promotion banner at the bottom of every page",type:"checkbox"},{key:"app_banner_headline",label:"Banner Headline",type:"text",placeholder:"Discover More with the Weverse Online Shop App"},{key:"app_play_store_url",label:"Google Play Store URL (real app listing â€” leave empty while unpublished)",type:"url",placeholder:"https://play.google.com/store/apps/details?id=â€¦"}]},{section:"Live Product Promotions (Featured Product Alerts)",fields:[{key:"live_promo_enabled",label:"Show Live Product Promotions (small alerts at the bottom corner)",type:"checkbox"},{key:"live_promo_first_delay_seconds",label:"First alert after (seconds)",type:"number",placeholder:"12"},{key:"live_promo_interval_seconds",label:"Delay between alerts (seconds)",type:"number",placeholder:"60"}],extra:o}].map(r=>`
            <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
              <h3 class="text-sm font-black text-white mb-4">${r.section}</h3>
              <div class="form-grid form-grid-2">
                ${r.fields.map(d=>`
                  <div ${d.type==="textarea"||d.type==="checkbox"?'class="sm:col-span-2"':""}>
                    ${d.type==="checkbox"?`<label class="flex items-center gap-2.5 cursor-pointer"><input type="checkbox" name="${d.key}" class="accent-blue-500 w-4 h-4" ${i[d.key]?"checked":""}><span class="text-sm text-gray-300">${d.label}</span></label>`:d.type==="textarea"?`<label class="lbl">${d.label}</label><textarea class="input-field" name="${d.key}" placeholder="${l(d.placeholder)}" rows="2">${l(i[d.key]||"")}</textarea>`:`<label class="lbl">${d.label}</label><input type="${d.type}" class="input-field" name="${d.key}" value="${l(i[d.key]||"")}" placeholder="${l(d.placeholder||"")}">`}
                  </div>`).join("")}
              </div>
              ${r.extra||""}
            </div>`).join("")}
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Content Settings</button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}async function Po(){const e=new Set,t=[],a=i=>{for(const n of i||[]){const o=n&&(n.property_id||n.id);o&&!e.has(o)&&(e.add(o),t.push(n))}};try{const{data:i}=await g.from("showroom_listings").select("property_id,title,name,category,listing_type,images,is_active").order("created_at",{ascending:!1}).limit(500);a(i)}catch{}return a(wt()),a(ie),a(Ba),a(Na),a(Ra),a(Da),t.slice(0,250)}window.filterPromoPicker=function(e){const t=document.getElementById("promo-picker-list");if(!t)return;const a=(e||"").trim().toLowerCase();t.querySelectorAll("[data-promo-search]").forEach(i=>{i.style.display=!a||i.dataset.promoSearch.toLowerCase().includes(a)?"":"none"})};window.selectAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!0})};window.clearAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!1})};window.saveContent=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=Array.from(new Set(t.getAll("live_promo_product_ids").map(o=>String(o).trim()).filter(Boolean)));i.length?a.live_promo_product_ids=i:a.live_promo_product_ids=[];const{error:n}=await g.from("site_settings").upsert({id:1,...a});if(n){m(n.message,"error");return}m("Content settings saved!")};const ba=[{key:"hero_videos",custom:!0,title:"HERO VIDEO BANNER (ROTATING)",desc:"Upload your own promotional videos (MP4 & WebM) to the top homepage banner. Each saved slide becomes its own full-width hero with its title, subtitle and CTA over a soft dark overlay so the text always stays readable. Add one video, one poster, or many rotating slides. If no video is added here, the single promo banner and the built-in brand banner below are shown instead as fallbacks.",accent:"from-indigo-400 to-violet-500"},{key:"banner",title:"ANDROID APP BANNER",desc:"The mobile-app promotion banner shown at the bottom of every page. Editing these words never changes the banner design, phone image, logo or buttons.",accent:"from-cyan-400 to-blue-500",fields:[{key:"app_banner_title",label:"App Banner Title",type:"text"},{key:"app_banner_description",label:"App Banner Description",type:"textarea"},{key:"app_banner_button_text",label:"App Banner Button Text",type:"text"},{key:"app_banner_secondary_text",label:"App Banner Secondary Text",type:"text"}]},{key:"bottom",title:"BOTTOM / END-OF-PAGE SECTION",desc:"The final professional closing area of the website â€” thank-you message, customer support, footer links and copyright. The polished design stays; only these words change.",accent:"from-emerald-400 to-cyan-500",fields:[{key:"bottom_heading",label:"Bottom Section Heading",type:"text"},{key:"bottom_main_message",label:"Main Bottom Message",type:"textarea"},{key:"bottom_closing_message",label:"Closing Message",type:"text"},{key:"bottom_support_heading",label:"Customer Support Heading",type:"text"},{key:"bottom_support_description",label:"Customer Support Description",type:"textarea"},{key:"bottom_support_button_text",label:"Support Button Text",type:"text"},{key:"bottom_footer_text",label:"Footer Section Text",type:"text"},{key:"bottom_footer_closing",label:"Footer Closing Message",type:"text"},{key:"bottom_copyright",label:"Copyright Text (empty = automatic â€œÂ© year Brandâ€ line)",type:"text"}]},{key:"promo_banner",title:"HOME PAGE PROMO BANNER",desc:"The main rotating banner at the top of the homepage. Upload your own image or video and write your own words â€” the clean design stays. If empty, the built-in image banners rotate.",accent:"from-fuchsia-400 to-purple-500",fields:[{key:"promo_banner_enabled",label:"Show my promo banner",type:"checkbox"},{key:"promo_banner_image",label:"Banner Image",type:"media",kind:"image"},{key:"promo_banner_video",label:"Banner Video (plays if no image)",type:"media",kind:"video"},{key:"promo_banner_title",label:"Banner Title",type:"text"},{key:"promo_banner_subtitle",label:"Banner Subtitle",type:"text"},{key:"promo_banner_button_text",label:"Button Text",type:"text"},{key:"promo_banner_button_link",label:"Button Link",type:"text"}]},{key:"video_ad",title:"HOME PAGE VIDEO ADVERTISEMENT",desc:"A separate video card below the promo banner. Upload your own video (and optional poster image) and write your own words. It plays muted with play/pause and a progress bar.",accent:"from-rose-400 to-orange-500",fields:[{key:"video_ad_enabled",label:"Show the video advertisement",type:"checkbox"},{key:"video_ad_video_url",label:"Video File",type:"media",kind:"video"},{key:"video_ad_poster_url",label:"Poster Image (shown before play)",type:"media",kind:"image"},{key:"video_ad_title",label:"Video Title",type:"text"},{key:"video_ad_subtitle",label:"Video Subtitle",type:"text"},{key:"video_ad_button_text",label:"Button Text",type:"text"},{key:"video_ad_button_link",label:"Button Link",type:"text"}]}];function Ei(e,t){const a=e.kind==="image",i=t||"",n=a?"image":"video",o="text-fuchsia-300",r=!!i;return`<div id="slot-${e.key}">
      ${r?`<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-fuchsia-500/15 flex items-center justify-center">
             ${a?`<img src="${l(i)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`:`<video src="${l(i)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerContentMediaUpload('${e.key}')" class="text-xs font-bold text-white bg-fuchsia-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearContentMedia('${e.key}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`:`<button type="button" onclick="triggerContentMediaUpload('${e.key}')" class="w-full h-28 rounded-xl border-2 border-dashed border-fuchsia-500/25 hover:border-fuchsia-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${n}" class="w-6 h-6 ${o}"></i>
             <p class="text-[10px] text-gray-500">Upload ${a?"Image":"Video"}</p>
           </button>`}
      <input type="file" id="file-${e.key}" class="hidden" accept="${a?"image/*":"video/*"}" onchange="handleContentMediaUpload(event,'${e.key}')">
      <input type="hidden" name="${e.key}" id="val-${e.key}" value="${l(i)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${e.key}" value="${l(i)}" placeholder="Or paste ${a?"image":"video"} URL" oninput="document.getElementById('val-${e.key}').value=this.value">
      </div>
    </div>`}window.triggerContentMediaUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearContentMedia=function(e){const t=document.getElementById("val-"+e),a=document.getElementById("url-"+e);t&&(t.value=""),a&&(a.value=""),m("Cleared. Save to apply.","info"),Ii()};window.handleContentMediaUpload=async function(e,t){const a=e.target.files?.[0];if(a){a.type.startsWith("video/"),m(`Uploading ${a.name}â€¦`,"info");try{const{data:{session:i}}=await g.auth.getSession();if(!i){m("Sign in to upload media","error");return}const n=(a.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),o=`content/${t}-${Date.now()}.${n}`,{error:r}=await g.storage.from("product-images").upload(o,a,{contentType:a.type,upsert:!1});if(r){m("Upload failed: "+r.message,"error");return}const{data:d}=g.storage.from("product-images").getPublicUrl(o),s=d.publicUrl,c=document.getElementById("val-"+t),u=document.getElementById("url-"+t);c&&(c.value=s),u&&(u.value=s);const p=document.getElementById("slot-"+t);if(p){const y=ba.flatMap(h=>h.fields||[]).find(h=>h.key===t);y&&(p.outerHTML=Ei(y,s))}m("âœ“ Uploaded â€” save to apply","success")}catch{m("Upload failed","error")}}};const Eo=["SHOP NOW","EXPLORE DEALS","VIEW PRODUCTS","DISCOVER MORE","SEE OFFERS","SHOP THE LOOK"];window._heroVideoDraft=[];function oe(){return Array.isArray(window._heroVideoDraft)||(window._heroVideoDraft=[]),window._heroVideoDraft}function nt(){const e=document.getElementById("hs-json");e&&(e.value=JSON.stringify(oe()))}function Ce(){nt();const e=document.getElementById("hero-videos-manager");e&&(e.innerHTML=Ai(oe()),window.lucide&&lucide.createIcons())}function Ao(e,t){const a=String(e&&e.video||"").trim(),i=String(e&&e.poster||"").trim(),n=a&&Ca(a)||i&&Ca(i)?'<p class="mt-2 text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2">âš  Temporary preview only â€” the upload FAILED, this will NOT be saved. Re-upload a smaller MP4/WebM.</p>':"";return`
    <div>
      <div class="w-full overflow-hidden rounded-xl bg-gray-950 border border-indigo-500/20 flex items-center justify-center">${a?`<video src="${l(a)}" ${i?`poster="${l(i)}"`:""} class="w-full h-40 object-cover" muted controls preload="metadata"></video>`:i?`<img src="${l(i)}" class="w-full h-40 object-cover" onerror="this.style.display='none'">`:'<div class="w-full h-40 flex items-center justify-center text-[11px] text-gray-500">No media yet â€” upload a video (MP4/WebM) or a poster below</div>'}</div>
      ${n}
      <div class="flex flex-wrap gap-1.5 mt-2 justify-end">
        <button type="button" onclick="heroVideoUpload(${t},'video')" class="px-3 py-1.5 rounded-lg ${a?"bg-white/10 text-gray-200 border border-white/10":"bg-indigo-600 text-white"} text-[10px] font-bold transition">${a?"Replace Video":"Upload Video"}</button>
        ${a?`<button type="button" onclick="heroVideoRemoveMedia(${t},'video')" class="px-3 py-1.5 rounded-lg bg-red-600/80 text-white text-[10px] font-bold">Remove Video</button>`:""}
        <button type="button" onclick="heroVideoUpload(${t},'poster')" class="px-3 py-1.5 rounded-lg bg-white/10 text-gray-200 text-[10px] font-bold border border-white/10 transition">${i?"Replace Poster":"Add Poster"}</button>
        ${i?`<button type="button" onclick="heroVideoRemoveMedia(${t},'poster')" class="px-3 py-1.5 rounded-lg bg-red-600/80 text-white text-[10px] font-bold">Remove Poster</button>`:""}
      </div>
    </div>`}function Ai(e){return(e||[]).map((t,a)=>{const i=String(t&&t.buttonText||"SHOP NOW"),n=Eo.map(o=>`<button type="button" onclick="heroVideoPreset(${a},'${o}')" class="px-2.5 py-1 rounded-full text-[9px] font-black ${i===o?"bg-indigo-600 text-white":"bg-white/5 text-gray-400"} border ${i===o?"border-indigo-500":"border-white/10"} transition">${o}</button>`).join("");return`
    <div class="rounded-xl border border-indigo-500/25 bg-violet-500/8 p-4 space-y-3">
      <div class="flex items-center justify-between gap-2 flex-wrap">
        <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="video" class="w-4 h-4 text-indigo-400"></i> Slide ${a+1}</p>
        <div class="flex items-center gap-1.5">
          <button type="button" onclick="heroVideoToggle(${a})" class="text-[10px] font-bold px-2.5 py-1.5 rounded-lg ${t&&t.enabled===!1?"bg-gray-700 text-gray-400":"bg-emerald-600 text-white"} transition">${t&&t.enabled===!1?"Disabled":"Enabled"}</button>
          <button type="button" onclick="heroVideoMove(${a},-1)" class="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10" title="Move up"><i data-lucide="arrow-up" class="w-3.5 h-3.5 text-gray-300"></i></button>
          <button type="button" onclick="heroVideoMove(${a},1)" class="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10" title="Move down"><i data-lucide="arrow-down" class="w-3.5 h-3.5 text-gray-300"></i></button>
          <button type="button" onclick="heroVideoDelete(${a})" class="px-2 py-1 rounded-lg bg-red-600/80 hover:bg-red-600" title="Delete"><i data-lucide="trash-2" class="w-3.5 h-3.5 text-white"></i></button>
        </div>
      </div>
      ${Ao(t,a)}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label class="lbl">Title</label>
          <input type="text" value="${l(t.title||"")}" class="input-field w-full" placeholder="e.g. Season Sale is Live" oninput="heroVideoField(${a},'title',this.value)">
        </div>
        <div>
          <label class="lbl">Subtitle</label>
          <input type="text" value="${l(t.subtitle||"")}" class="input-field w-full" placeholder="e.g. Up to 50% off top brands" oninput="heroVideoField(${a},'subtitle',this.value)">
        </div>
      </div>
      <div>
        <label class="lbl">Button</label>
        <div class="flex flex-wrap gap-1.5">${n}</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          <input type="text" value="${l(i)}" class="input-field w-full" placeholder="SHOP NOW" oninput="heroVideoField(${a},'buttonText',this.value)">
          <input type="text" value="${l(t.buttonLink||"/#showroom-directory")}" class="input-field w-full" placeholder="/#showroom-directory" oninput="heroVideoField(${a},'buttonLink',this.value)">
        </div>
      </div>
    </div>`}).join("")}window.heroVideoUpload=function(e,t){const a=document.createElement("input");a.type="file",a.accept=t==="video"?"video/mp4,video/webm,.mp4,.webm":"image/*",a.onchange=()=>{const i=a.files&&a.files[0];i&&Co(e,t,i)},a.click()};window.heroVideoField=function(e,t,a){const i=oe();i[e]&&(i[e][t]=a,nt())};window.heroVideoPreset=function(e,t){const a=oe();a[e]&&(a[e].buttonText=t,Ce())};window.heroVideoToggle=function(e){const t=oe();t[e]&&(t[e].enabled=t[e].enabled===!1,Ce())};window.heroVideoMove=function(e,t){const a=oe(),i=e+t;i<0||i>=a.length||([a[e],a[i]]=[a[i],a[e]],Ce())};window.heroVideoDelete=function(e){const t=oe();e<0||e>=t.length||confirm("Delete this hero video slide?")&&(t.splice(e,1),Ce())};window.heroVideoRemoveMedia=function(e,t){const a=oe();a[e]&&(t==="video"?a[e].video="":t==="poster"&&(a[e].poster=""),Ce())};window.addHeroVideoSlide=function(){oe().push({id:"hv"+Date.now()+Math.floor(Math.random()*999),enabled:!0,video:"",poster:"",title:"",subtitle:"",buttonText:"SHOP NOW",buttonLink:"/#showroom-directory"}),Ce(),m("New slide added â€” upload a video and press Save to show it.","info")};async function Io(e,t){try{const{data:{session:a}}=await g.auth.getSession();if(!a)return{url:URL.createObjectURL(e),persisted:!1,error:"You are signed out â€” sign in again, then re-upload."};const i=(e.name.split(".").pop()||(t==="video"?"mp4":"jpg")).toLowerCase().replace(/[^a-z0-9]/g,""),n=`hero/${t}/${Date.now()}-${Math.random().toString(36).slice(2)}.${i}`,{error:o}=await g.storage.from("product-images").upload(n,e,{contentType:e.type,cacheControl:"3600",upsert:!0});if(o)return{url:URL.createObjectURL(e),persisted:!1,error:o.message};const{data:r}=g.storage.from("product-images").getPublicUrl(n),d=r&&r.publicUrl;return d?{url:d,persisted:!0,error:null}:{url:URL.createObjectURL(e),persisted:!1,error:"Storage did not return a public URL."}}catch(a){return{url:URL.createObjectURL(e),persisted:!1,error:String(a&&a.message||a)}}}function Ca(e){return/^blob:/i.test(String(e||""))}async function Co(e,t,a){const i=oe();if(!a||!i[e])return;if(t==="video"){if(!/video\/(mp4|webm)|\.(mp4|webm)$/i.test(a.type+" "+a.name)){m("Please choose an MP4 or WebM video file.","error");return}}else if(!a.type.startsWith("image/")){m("Please choose an image for the poster.","error");return}m("â³ Uploading "+(t==="video"?"video":"poster")+"â€¦","info");const n=await Io(a,t);t==="video"?i[e].video=n.url:i[e].poster=n.url,Ce(),n.persisted?m("âœ“ "+(t==="video"?"Video":"Poster")+" uploaded â€” press Save & Publish Hero Banner to go live.","success"):m("âš  UPLOAD FAILED: "+(n.error||"unknown reason")+" â€” this preview is TEMPORARY and will NOT be saved. Try a smaller MP4/WebM (keep videos under ~50 MB), then re-upload.","error")}function To(e){const t=Array.isArray(e)?e.map(i=>({...i})):[];return window._heroVideoDraft=t,nt(),`
    <div class="space-y-3">
      <div id="hero-videos-manager" class="space-y-3">${t.length?"":`
    <div class="rounded-xl border-2 border-dashed border-indigo-500/30 bg-white/5 p-6 text-center">
      <i data-lucide="video" class="w-8 h-8 text-indigo-400 mx-auto"></i>
      <p class="text-xs text-gray-400 mt-2 font-bold">No hero videos yet</p>
      <p class="text-[11px] text-gray-500 mt-1">Add your first promotional video slide to turn the homepage banner into an auto-playing video hero. Until then, the built-in brand banner and any single promo banner below are used.</p>
    </div>`}${Ai(t)}</div>
      <button type="button" onclick="heroVideoSavePublish(this)" class="btn-press w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-black rounded-xl transition flex items-center justify-center gap-2">
        <i data-lucide="rocket" class="w-4 h-4"></i> Save &amp; Publish Hero Banner
      </button>
      <p class="text-[10px] text-gray-500 text-center">One video is enough â€” no minimum. Your banner goes live as soon as you press this button.</p>
      <button type="button" onclick="addHeroVideoSlide()" class="btn-press w-full px-4 py-3 border-2 border-dashed border-indigo-500/40 text-indigo-300 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2">
        <i data-lucide="plus" class="w-4 h-4"></i> Add Another Hero Video Slide
      </button>
    </div>`}window.heroVideoSavePublish=async function(e){const t=s=>/^blob:/i.test(String(s||"")),a=oe().filter(s=>s&&(s.video||s.poster||s.title||s.subtitle));if(!a.length){m("Add at least one video slide before publishing.","error");return}a.forEach(s=>{s.poster&&t(s.poster)&&(s.poster="")});const i=a.filter(s=>s.video&&t(s.video)),n=a.filter(s=>s.video&&!t(s.video));if(i.length&&!n.length){m(`Upload FAILED for your video${i.length>1?"s":""} â€” temporary previews cannot go live. Re-upload a smaller MP4/WebM (under ~50 MB), then press this button again.`,"error");return}if(i.length&&!confirm(`${i.length} slide${i.length>1?"s":""} had a FAILED upload and will be LEFT OUT. Publish the remaining ${n.length} slide${n.length===1?"":"s"} now?`))return;const o=n,r=o.filter(s=>s.video);if(!o.length){m("Please upload a video in at least one slide first.","error");return}const d=e?e.innerHTML:"";e&&(e.disabled=!0,e.innerHTML="â³ Publishingâ€¦");try{nt();const{data:s}=await g.from("site_settings").select("id").limit(1).maybeSingle();let c;if(s?.id?{error:c}=await g.from("site_settings").update({hero_video_slides:o}).eq("id",s.id):{error:c}=await g.from("site_settings").insert({id:crypto.randomUUID(),hero_video_slides:o}),c)throw new Error(c.message);Fa(),m("âœ“ Hero video banner published! "+r.length+(r.length===1?" video is":" videos are")+" now live on your homepage.","success")}catch(s){m(s.message||"Could not publish the hero banner. Please try again.","error")}finally{e&&(e.disabled=!1,e.innerHTML=d,window.lucide&&lucide.createIcons())}};async function Ii(){const e=document.getElementById("content");try{const{data:t}=await g.from("site_settings").select("*").limit(1).maybeSingle(),a={...Ui,...t||{}};e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div>
          <h2 class="text-xl font-black text-white">Content Settings</h2>
          <p class="text-xs text-gray-400 mt-1">Edit the wording of the two shared sections below. Save once and every page updates automatically â€” no code needed. Your products, prices, reviews, orders and design are never touched.</p>
        </div>
        <form id="content-settings-form" onsubmit="saveContentSettings(event)" class="space-y-5">
          ${ba.map(i=>`
            <div class="glass-soft border border-white/10 rounded-2xl p-5">
              <div class="flex items-center gap-2.5 mb-1">
                <span class="w-2 h-2 rounded-full bg-gradient-to-r ${i.accent}"></span>
                <h3 class="text-sm font-black text-white tracking-wide">${i.title}</h3>
              </div>
              <p class="text-[11px] text-gray-400 mb-4">${i.desc}</p>
              ${i.key==="hero_videos"?To(a.hero_video_slides||[]):`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${i.fields.map(n=>`
                  <div class="${n.type==="textarea"||n.type==="media"?"sm:col-span-2":""}">
                    ${n.type==="checkbox"?`<label class="flex items-center gap-2.5 cursor-pointer select-none py-2">
                           <input id="cs-${n.key}" type="checkbox" name="${n.key}" ${a[n.key]?"checked":""} class="w-4 h-4 accent-blue-500 rounded">
                           <span class="text-sm font-bold text-gray-200">${n.label}</span>
                         </label>`:`<label class="lbl" for="cs-${n.key}">${n.label}</label>`}
                    ${n.type==="textarea"?`<textarea id="cs-${n.key}" name="${n.key}" rows="3" class="input-field w-full" placeholder="Enter the current wordingâ€¦">${l(a[n.key]||"")}</textarea>`:n.type==="media"?Ei(n,a[n.key]||""):n.type==="checkbox"?"":`<input id="cs-${n.key}" type="text" name="${n.key}" value="${l(a[n.key]||"")}" class="input-field w-full" placeholder="Enter the current wordingâ€¦">`}
                    ${n.type==="text"||n.type==="textarea"?`<p class="text-[10px] text-gray-500 mt-1">Current: ${l((a[n.key]||"").slice(0,80))}${(a[n.key]||"").length>80?"â€¦":""}</p>`:""}
                  </div>`).join("")}
              </div>`}
            </div>`).join("")}
          <input type="hidden" id="hs-json" name="hero_video_slides" value="">
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Content</button>
        </form>
      </div>`,nt(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.saveContentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[n,o]of t.entries())a[n]=o;for(const n of ba)if(n.fields)for(const o of n.fields)o.type==="checkbox"&&!(o.key in a)?a[o.key]=!1:o.type==="checkbox"&&(a[o.key]=!0);let i=[];try{const n=t.get("hero_video_slides");if(String(n||"").trim()){const o=JSON.parse(n);Array.isArray(o)&&(i=o)}}catch{i=[]}a.hero_video_slides=i;try{const{data:n}=await g.from("site_settings").select("id").limit(1).maybeSingle();let o;if(n?.id?{error:o}=await g.from("site_settings").update(a).eq("id",n.id):{error:o}=await g.from("site_settings").insert({id:crypto.randomUUID(),...a}),o)throw new Error(o.message);Fa(),m("Content updated â€” the banners now use your new words and uploads.","success")}catch(n){m(n.message||"Could not save content. Please try again.","error")}};async function Lo(){const e=document.getElementById("content");try{const[t,a,i]=await Promise.all([g.from("payment_receipts").select("amount,currency,status,created_at").order("created_at",{ascending:!1}).limit(500),g.from("showroom_listings").select("id,listing_type,category,is_active",{count:"exact"}),g.from("profiles").select("user_id,created_at",{count:"exact"})]),n=t.data||[],o=n.filter(c=>["approved","payment_approved","delivered"].includes(c.status)).reduce((c,u)=>c+(parseFloat(u.amount)||0),0),r=n.length>0?(n.filter(c=>c.status!=="cancelled").length/n.length*100).toFixed(1):0,d={};(a.data||[]).forEach(c=>{d[c.category]=(d[c.category]||0)+1});const s=Object.entries(d).sort((c,u)=>u[1]-c[1]).slice(0,8);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Analytics</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          ${G("Total Revenue",`$${o.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald")}
          ${G("Total Orders",n.length,"shopping-bag","blue")}
          ${G("Customers",i.count||0,"users","violet")}
          ${G("Conversion Rate",r+"%","trending-up","amber")}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="bar-chart-3" class="w-4 h-4 text-blue-400"></i> Revenue (Last 6 Months)</h3>
            <canvas id="analytics-chart" height="220"></canvas>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="pie-chart" class="w-4 h-4 text-violet-400"></i> Top Categories by Listings</h3>
            ${s.length===0?'<p class="text-xs text-gray-500 text-center py-8">No data</p>':s.map(([c,u])=>`
              <div class="flex items-center gap-3 py-1.5">
                <span class="text-xs text-gray-300 flex-1 truncate">${l(c)}</span>
                <div class="w-24 h-2 bg-blue-500/10 rounded-full overflow-hidden"><div class="h-full bg-blue-500 rounded-full" style="width:${Math.round(u/s[0][1]*100)}%"></div></div>
                <span class="text-xs font-bold text-white w-6 text-right">${u}</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),ni(n)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}async function Mo(){const e=document.getElementById("content"),{data:t}=await g.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">SEO Manager</h2>
      <form id="seo-form" onsubmit="saveSeo(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Homepage SEO</h3>
          <div><label class="lbl">Meta Title</label><input class="input-field" name="meta_title" value="${l(a.meta_title||"")}" placeholder="Weverse Online Shop | Premium International Commerce"></div>
          <div><label class="lbl">Meta Description</label><textarea class="input-field" name="meta_description" rows="2" placeholder="Your trusted global shopâ€¦">${l(a.meta_description||"")}</textarea></div>
          <div><label class="lbl">Meta Keywords (comma separated)</label><input class="input-field" name="meta_keywords" value="${l(a.meta_keywords||"")}" placeholder="global marketplace, online shopping, â€¦"></div>
          <div><label class="lbl">Canonical URL</label><input class="input-field" name="canonical_url" value="${l(a.canonical_url||"")}" placeholder="https://yoursite.com"></div>
          <div><label class="lbl">OG Image URL (Social share image)</label><input class="input-field" name="og_image" value="${l(a.og_image||"")}" placeholder="https://â€¦/og-image.jpg"></div>
          <div><label class="lbl">Google Analytics ID</label><input class="input-field" name="ga_id" value="${l(a.ga_id||"")}" placeholder="G-XXXXXXXXXX"></div>
          <div><label class="lbl">Google Search Console Verification</label><input class="input-field" name="gsc_verify" value="${l(a.gsc_verify||"")}" placeholder="Verification meta tag content"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save SEO Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSeo=async function(e){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());await g.from("site_settings").upsert({id:1,...t}),m("SEO settings saved!")};async function Bo(){const e=document.getElementById("content"),{data:t}=await g.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">Email Settings</h2>
      <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl text-xs text-blue-300">Email is handled by Supabase Auth's built-in SMTP. Configure SMTP in your Supabase project â†’ Auth â†’ SMTP Settings.</div>
      <form id="email-form" onsubmit="saveEmailSettings(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Email Notifications</h3>
          ${[{key:"email_order_placed",label:"Order Confirmation Email",desc:"Send confirmation when order is placed"},{key:"email_order_shipped",label:"Shipping Notification",desc:"Notify customer when order is shipped"},{key:"email_order_delivered",label:"Delivery Confirmation",desc:"Confirm when order is delivered"},{key:"email_review_request",label:"Review Request",desc:"Ask for review after delivery"}].map(i=>`
            <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
              <div><p class="text-xs font-bold text-white">${i.label}</p><p class="text-[11px] text-gray-500">${i.desc}</p></div>
              <label class="toggle-switch"><input type="checkbox" name="${i.key}" ${a[i.key]!==!1?"checked":""}><span class="toggle-slider"></span></label>
            </div>`).join("")}
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Sender Information</h3>
          <div><label class="lbl">Sender Name</label><input class="input-field" name="email_from_name" value="${l(a.email_from_name||"")}" placeholder="Weverse Online Shop"></div>
          <div><label class="lbl">Reply-To Email</label><input type="email" class="input-field" name="email_reply_to" value="${l(a.email_reply_to||"")}" placeholder="support@example.com"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Email Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveEmailSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,n]of t.entries())a[i]=n;["email_order_placed","email_order_shipped","email_order_delivered","email_review_request"].forEach(i=>{i in a?a[i]=!0:a[i]=!1}),await g.from("site_settings").upsert({id:1,...a}),m("Email settings saved!")};async function It(){const e=document.getElementById("content");e&&(e.innerHTML=Ue());try{const[t,a,i]=await Promise.all([g.from("admin_security_logs").select("*").order("created_at",{ascending:!1}).limit(50),g.from("admin_2fa").select("enabled,backup_codes,created_at").eq("user_id",A.user?.id).maybeSingle(),g.auth.mfa.listFactors()]),n=t.data||[],o=a.data||{},r=(i.data?.totp||[])[0],d=!!r&&r.status==="verified",s=(o.backup_codes||[]).filter(c=>!c.used).length;e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Security</h2>

        <!-- 2FA STATUS BANNER -->
        <div class="p-4 rounded-xl border flex items-center gap-4 ${d?"bg-emerald-500/5 border-emerald-500/20":"bg-amber-500/5 border-amber-500/20"}">
          <div class="w-10 h-10 ${d?"bg-emerald-500/10":"bg-amber-500/10"} rounded-xl flex items-center justify-center shrink-0">
            <i data-lucide="${d?"shield-check":"shield-alert"}" class="w-5 h-5 ${d?"text-emerald-400":"text-amber-400"}"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm font-black ${d?"text-emerald-300":"text-amber-300"}">Two-Factor Authentication is ${d?"ENABLED âœ“":"NOT ENABLED"}</p>
            <p class="text-xs text-gray-400 mt-0.5">${d?`Backup codes available: ${s} Â· Enrolled: ${ne(o.created_at)}`:"Enable 2FA to protect your admin account with an authenticator app."}</p>
          </div>
          ${d?'<button onclick="disable2FA()" class="btn-press flex-shrink-0 text-xs font-bold text-red-400 bg-red-500/10 hover:bg-red-500/20 px-3 py-1.5 rounded-xl transition">Disable 2FA</button>':'<button onclick="setup2FAFlow()" class="btn-press flex-shrink-0 text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1.5 rounded-xl transition"><i data-lucide="shield-plus" class="w-3.5 h-3.5 inline mr-1"></i>Enable 2FA</button>'}
        </div>

        <!-- BACKUP CODES (only if 2FA enabled) -->
        ${d?`
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="key" class="w-4 h-4 text-amber-400"></i> Backup Recovery Codes</h3>
            <button onclick="regenerateBackupCodes()" class="btn-press text-xs font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 px-3 py-1.5 rounded-xl transition">Regenerate</button>
          </div>
          <p class="text-xs text-gray-400 mb-3">Save these codes in a safe place. Use them if you lose access to your authenticator app. Each code works only once.</p>
          <div id="backup-codes-display" class="grid grid-cols-2 gap-2">
            ${(o.backup_codes||[]).length===0?'<p class="text-xs text-gray-500 col-span-2 text-center py-4">No backup codes generated. Click Regenerate to create them.</p>':(o.backup_codes||[]).map(c=>`<code class="font-mono text-xs px-3 py-2 ${c.used?"bg-gray-900 text-gray-600 line-through":"bg-blue-500/5 text-blue-300 border border-blue-500/15"} rounded-lg">${typeof c=="object"?c.code:c}</code>`).join("")}
          </div>
        </div>`:""}

        <!-- CHANGE PASSWORD -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <h3 class="text-sm font-black text-white mb-4 flex items-center gap-2"><i data-lucide="lock" class="w-4 h-4 text-blue-400"></i> Change Password</h3>
          <form id="pw-form" onsubmit="changePassword(event)" class="space-y-3 max-w-sm">
            <div>
              <label class="lbl">Current Password</label>
              <input type="password" class="input-field" id="current-pw" placeholder="Current password" required>
            </div>
            <div>
              <label class="lbl">New Password</label>
              <input type="password" class="input-field" id="new-pw" placeholder="Min 8 characters" minlength="8" required>
              <div id="pw-strength" class="mt-1.5 space-y-1"></div>
            </div>
            <div>
              <label class="lbl">Confirm New Password</label>
              <input type="password" class="input-field" id="confirm-pw" placeholder="Repeat password" required>
            </div>
            <button type="submit" class="btn-press bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-5 rounded-xl text-sm transition flex items-center gap-2">
              <i data-lucide="check" class="w-4 h-4"></i> Update Password
            </button>
          </form>
        </div>

        <!-- SESSION MANAGEMENT -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <h3 class="text-sm font-black text-white mb-4 flex items-center gap-2"><i data-lucide="monitor-smartphone" class="w-4 h-4 text-blue-400"></i> Session Management</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
              <div>
                <p class="text-xs font-bold text-white">Current Session</p>
                <p class="text-[11px] text-gray-500">${l(navigator.userAgent.slice(0,60))}â€¦</p>
              </div>
              <span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Active</span>
            </div>
            <button onclick="logoutAllDevices()" class="btn-press w-full flex items-center justify-center gap-2 text-xs font-bold text-red-400 bg-red-500/10 hover:bg-red-500/20 border border-red-500/15 py-2.5 rounded-xl transition">
              <i data-lucide="log-out" class="w-4 h-4"></i> Sign Out from ALL Devices
            </button>
          </div>
        </div>

        <!-- LOGIN HISTORY -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="p-4 border-b border-blue-500/10 flex items-center justify-between">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="history" class="w-4 h-4 text-blue-400"></i> Login History</h3>
            <span class="text-xs text-gray-500">Last ${n.length} events</span>
          </div>
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Event</th><th>IP Address</th><th class="hidden sm:table-cell">Device</th><th>Date</th></tr></thead>
              <tbody>
                ${n.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No security events yet</td></tr>':n.map(c=>{const u=["login_success","login_2fa_success"].includes(c.event_type),p=["login_failed","login_denied","login_backup_code_used"].includes(c.event_type),y=u?"text-emerald-400":p?"text-red-400":"text-gray-300",h={login_success:"Login âœ“",login_failed:"Failed Login âœ—",login_denied:"Access Denied âœ—",login_2fa_success:"2FA Verified âœ“",login_backup_code_used:"Backup Code Used",logout:"Logged Out",logout_all_devices:"Logout All Devices"}[c.event_type]||c.event_type;return`<tr>
                      <td><span class="text-xs font-bold ${y}">${l(h)}</span></td>
                      <td><span class="text-xs font-mono text-gray-300">${l(c.ip_address||"â€”")}</span></td>
                      <td class="hidden sm:table-cell"><span class="text-xs text-gray-500 max-w-[160px] block truncate">${l((c.user_agent||"â€”").slice(0,50))}</span></td>
                      <td><span class="text-xs text-gray-500">${xe(c.created_at)}</span></td>
                    </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,document.getElementById("new-pw")?.addEventListener("input",c=>{const u=c.target.value,p=[{label:"8+ characters",ok:u.length>=8},{label:"Uppercase letter",ok:/[A-Z]/.test(u)},{label:"Number",ok:/[0-9]/.test(u)},{label:"Special character",ok:/[^a-zA-Z0-9]/.test(u)}];document.getElementById("pw-strength").innerHTML=p.map(y=>`<div class="flex items-center gap-1.5 text-[10px] ${y.ok?"text-emerald-400":"text-gray-600"}">
          <i data-lucide="${y.ok?"check-circle":"circle"}" class="w-3 h-3"></i>${y.label}</div>`).join(""),window.lucide&&lucide.createIcons()}),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.changePassword=async function(e){e.preventDefault();const t=document.getElementById("current-pw").value,a=document.getElementById("new-pw").value,i=document.getElementById("confirm-pw").value;if(a!==i){m("Passwords do not match","error");return}if(a.length<8){m("Password must be at least 8 characters","error");return}const{error:n}=await g.auth.signInWithPassword({email:A.user.email,password:t});if(n){m("Current password is incorrect","error");return}const{error:o}=await g.auth.updateUser({password:a});if(o){m(o.message,"error");return}await se(A.user.id,"password_changed"),m("Password updated successfully!"),e.target.reset(),document.getElementById("pw-strength").innerHTML=""};window.setup2FAFlow=async function(){U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="shield-plus" class="w-5 h-5 text-emerald-400"></i> Enable Two-Factor Authentication</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div id="2fa-setup-content">
          <div class="flex items-center justify-center py-8"><i data-lucide="loader-2" class="w-6 h-6 animate-spin text-blue-400"></i></div>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons();try{const{data:e,error:t}=await g.auth.mfa.enroll({factorType:"totp",friendlyName:"Weverse Admin"});if(t)throw t;const a=e.totp.qr_code,i=e.totp.secret,n=e.id;document.getElementById("2fa-setup-content").innerHTML=`
      <div class="space-y-5">
        <div class="p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          <strong>Step 1:</strong> Open your authenticator app (Google Authenticator, Authy, or similar).<br>
          <strong>Step 2:</strong> Scan the QR code below or enter the secret manually.<br>
          <strong>Step 3:</strong> Enter the 6-digit code shown in your app.
        </div>
        <div class="flex flex-col items-center gap-4">
          <div class="bg-white p-3 rounded-xl">
            <img src="${l(a)}" alt="QR Code" class="w-44 h-44" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-500 w-44 text-center&quot;>QR code unavailable. Use the secret below.</p>'">
          </div>
          <div class="w-full">
            <label class="lbl">Or enter this secret manually</label>
            <div class="flex gap-2">
              <code class="flex-1 input-field font-mono text-xs text-emerald-300 select-all">${l(i)}</code>
              <button onclick="navigator.clipboard.writeText('${l(i)}').then(()=>showToast('Copied!'))" class="btn-press p-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl transition text-blue-400"><i data-lucide="copy" class="w-4 h-4"></i></button>
            </div>
          </div>
        </div>
        <div>
          <label class="lbl">Enter 6-digit code from app *</label>
          <input type="text" id="setup-totp-code" inputmode="numeric" maxlength="6" class="input-field text-center text-xl font-black tracking-[0.5em] py-3" placeholder="000000" autocomplete="one-time-code">
        </div>
        <div id="setup-2fa-error" class="hidden p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs"></div>
        <button onclick="confirm2FAEnrollment('${l(n)}')" class="btn-press w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4"></i> Verify & Enable 2FA
        </button>
      </div>`,window.lucide&&lucide.createIcons(),setTimeout(()=>document.getElementById("setup-totp-code")?.focus(),100),document.getElementById("setup-totp-code")?.addEventListener("input",o=>{o.target.value=o.target.value.replace(/\D/g,"").slice(0,6)})}catch(e){document.getElementById("2fa-setup-content").innerHTML=`<div class="text-red-400 text-sm text-center py-4">${l(e.message)}</div>`}};window.confirm2FAEnrollment=async function(e){const t=document.getElementById("setup-totp-code")?.value?.trim(),a=document.getElementById("setup-2fa-error");if(!t||t.length!==6){a&&(a.textContent="Enter the 6-digit code.",a.classList.remove("hidden"));return}try{const{data:i,error:n}=await g.auth.mfa.challenge({factorId:e});if(n)throw n;const{error:o}=await g.auth.mfa.verify({factorId:e,challengeId:i.id,code:t});if(o)throw o;const r=Ci(10);await g.from("admin_2fa").upsert({user_id:A.user.id,enabled:!0,backup_codes:r}),await se(A.user.id,"2fa_enrolled"),ce(),Ti(r.map(d=>d.code)),It()}catch(i){const n=document.getElementById("setup-2fa-error");n&&(n.textContent=i.message?.includes("Invalid")?"Wrong code. Check your app and try again.":i.message,n.classList.remove("hidden")),document.getElementById("setup-totp-code").value="",document.getElementById("setup-totp-code").focus()}};function Ci(e){const t=[];for(let a=0;a<e;a++){const i=Array.from({length:16},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random()*32)]).join("");t.push({code:`${i.slice(0,4)}-${i.slice(4,8)}-${i.slice(8,12)}-${i.slice(12,16)}`,used:!1})}return t}function Ti(e){U(`
    <div class="modal-overlay">
      <div class="modal-box">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0"><i data-lucide="key" class="w-5 h-5 text-amber-400"></i></div>
          <div>
            <h3 class="text-base font-black text-white">Save Your Backup Codes</h3>
            <p class="text-xs text-red-400 font-bold">âš  These will not be shown again!</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 mb-4">Store these codes somewhere safe. If you lose your authenticator, use one of these to log in. Each code works once.</p>
        <div class="grid grid-cols-2 gap-2 mb-5">
          ${e.map(t=>`<code class="font-mono text-xs px-3 py-2 bg-blue-500/5 text-blue-300 border border-blue-500/15 rounded-lg text-center select-all">${l(t)}</code>`).join("")}
        </div>
        <div class="flex gap-3">
          <button onclick="copyBackupCodes([${e.map(t=>`'${t}'`).join(",")}])" class="btn-press flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-xl text-xs transition"><i data-lucide="copy" class="w-4 h-4"></i> Copy All</button>
          <button onclick="downloadBackupCodes([${e.map(t=>`'${t}'`).join(",")}])" class="btn-press flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded-xl text-xs transition"><i data-lucide="download" class="w-4 h-4"></i> Download</button>
          <button onclick="closeModal()" class="btn-press px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-xl text-xs transition">Done</button>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()}window.copyBackupCodes=function(e){navigator.clipboard.writeText(e.join(`
`)).then(()=>m("Backup codes copied!"))};window.downloadBackupCodes=function(e){const t=new Blob([`Weverse Admin Backup Codes
Generated: ${new Date().toISOString()}

${e.join(`
`)}

Each code works once. Store securely.`],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download="kco-admin-backup-codes.txt",a.click()};window.regenerateBackupCodes=async function(){if(!confirm("This will invalidate ALL existing backup codes. Continue?"))return;const e=Ci(10);await g.from("admin_2fa").update({backup_codes:e}).eq("user_id",A.user.id),m("New backup codes generated"),Ti(e.map(t=>t.code)),It()};window.disable2FA=async function(){if(confirm("Disable two-factor authentication? Your account will be less secure."))try{const{data:e}=await g.auth.mfa.listFactors(),t=(e?.totp||[])[0];if(t){const{error:a}=await g.auth.mfa.unenroll({factorId:t.id});if(a)throw a}await g.from("admin_2fa").update({enabled:!1}).eq("user_id",A.user.id),await se(A.user.id,"2fa_disabled"),m("2FA has been disabled"),It()}catch(e){m(e.message,"error")}};async function No(){const e=document.getElementById("content");try{const{data:t}=await g.from("admin_activity_logs").select("*").order("created_at",{ascending:!1}).limit(100);e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Activity Logs</h2>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Action</th><th>Entity</th><th class="hidden sm:table-cell">Admin</th><th>Date</th></tr></thead>
              <tbody>
                ${(t||[]).length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No activity yet</td></tr>':(t||[]).map(a=>`<tr>
                    <td><span class="text-xs font-bold text-white">${l(a.action)}</span></td>
                    <td><span class="text-xs text-gray-400">${l(a.entity_type||"â€”")} <span class="text-gray-600">${l(a.entity_id?.slice(0,8)||"")}</span></span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-blue-400">${l(a.user_email||a.user_id?.slice(0,8)||"â€”")}</span></td>
                    <td><span class="text-xs text-gray-500">${xe(a.created_at)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}async function Ro(){const e=document.getElementById("content");try{const{data:t}=await g.from("deployment_history").select("*").order("created_at",{ascending:!1}).limit(20);e.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white">Backup & Restore</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <div class="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-3"><i data-lucide="download" class="w-5 h-5 text-blue-400"></i></div>
            <h3 class="text-sm font-black text-white mb-1">Export Products</h3>
            <p class="text-xs text-gray-400 mb-4">Download all products and properties as a JSON file.</p>
            <button onclick="exportProducts()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
              <i data-lucide="download" class="w-4 h-4"></i> Download JSON
            </button>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <div class="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center mb-3"><i data-lucide="database" class="w-5 h-5 text-violet-400"></i></div>
            <h3 class="text-sm font-black text-white mb-1">Export Orders</h3>
            <p class="text-xs text-gray-400 mb-4">Download all order data as a CSV file.</p>
            <button onclick="exportOrders()" class="btn-press flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
              <i data-lucide="file-down" class="w-4 h-4"></i> Download CSV
            </button>
          </div>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="p-4 border-b border-blue-500/10"><h3 class="text-sm font-black text-white">Deployment History</h3></div>
          <div class="divide-y divide-blue-500/5">
            ${(t||[]).length===0?'<p class="text-xs text-gray-500 text-center py-8">No deployment history</p>':(t||[]).map(a=>`<div class="flex items-center gap-3 px-4 py-3">
                <div class="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="rocket" class="w-4 h-4 text-emerald-400"></i></div>
                <div class="flex-1"><p class="text-xs font-bold text-white">${l(a.version||a.id?.slice(0,8))}</p><p class="text-[10px] text-gray-500">${xe(a.created_at)}</p></div>
                ${Y(a.status||"completed")}
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.exportProducts=async function(){const{data:e}=await g.from("showroom_listings").select("*"),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download=`kco-products-${new Date().toISOString().slice(0,10)}.json`,a.click(),m("Products exported!")};window.exportOrders=async function(){const{data:e}=await g.from("payment_receipts").select("*").order("created_at",{ascending:!1});if(!e||!e.length){m("No orders to export","info");return}const t=Object.keys(e[0]).join(","),a=e.map(o=>Object.values(o).map(r=>`"${String(r||"").replace(/"/g,'""')}"`).join(",")).join(`
`),i=new Blob([t+`
`+a],{type:"text/csv"}),n=document.createElement("a");n.href=URL.createObjectURL(i),n.download=`kco-orders-${new Date().toISOString().slice(0,10)}.csv`,n.click(),m("Orders exported!")};async function Do(){const e=document.getElementById("content"),{data:t}=await g.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">Settings</h2>
      <form id="settings-form" onsubmit="saveSettings(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">General Settings</h3>
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Default Currency</label><select class="input-field" name="default_currency">
              ${["USD","EUR","GBP","NGN","KES","ZAR","GHS"].map(i=>`<option value="${i}" ${(a.default_currency||"USD")===i?"selected":""}>${i}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Default Language</label><select class="input-field" name="default_language">
              ${["en","fr","es","de","pt","ar","sw"].map(i=>`<option value="${i}" ${(a.default_language||"en")===i?"selected":""}>${i}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Timezone</label><input class="input-field" name="timezone" value="${l(a.timezone||"UTC")}" placeholder="UTC"></div>
            <div><label class="lbl">Low Stock Threshold</label><input type="number" class="input-field" name="low_stock_threshold" value="${l(a.low_stock_threshold||10)}" min="1"></div>
          </div>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
          <h3 class="text-sm font-black text-white">Feature Toggles</h3>
          ${[{key:"maintenance_mode",label:"Maintenance Mode",desc:"Show a maintenance page to visitors"},{key:"reviews_enabled",label:"Reviews Enabled",desc:"Allow customers to leave reviews",default:!0},{key:"wishlist_enabled",label:"Wishlist Enabled",desc:"Allow customers to save products",default:!0},{key:"guest_checkout",label:"Guest Checkout",desc:"Allow checkout without an account",default:!0}].map(i=>`
            <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
              <div><p class="text-xs font-bold text-white">${i.label}</p><p class="text-[11px] text-gray-500">${i.desc}</p></div>
              <label class="toggle-switch"><input type="checkbox" name="${i.key}" ${a[i.key]!==!1&&(a[i.key]||i.default)?"checked":""}><span class="toggle-slider"></span></label>
            </div>`).join("")}
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,n]of t.entries())a[i]=n;["maintenance_mode","reviews_enabled","wishlist_enabled","guest_checkout"].forEach(i=>{a[i]=i in a}),await g.from("site_settings").upsert({id:1,...a}),m("Settings saved!")};async function Ct(){const e=document.getElementById("content");e&&(e.innerHTML=Ue());try{const{data:t}=await g.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{},i=a.homepage_banner_image||"",n=a.homepage_banner_alt||"Homepage header banner",o=i?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.";e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-5 h-5 text-blue-400"></i> Homepage Branding</h2>
            <p class="text-xs text-gray-500 mt-1">Upload a header banner for the homepage. This does not change your logo, text, colors, or verification badge.</p>
          </div>
          <button type="button" onclick="toggleHomepageBannerPreview()" class="btn-press flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition">
            <i data-lucide="eye" class="w-3.5 h-3.5"></i> Live Preview
          </button>
        </div>

        <div id="homepage-banner-preview-panel" class="glass-soft border border-violet-500/20 rounded-2xl p-5 space-y-3 hidden">
          <h3 class="text-xs font-black text-violet-300 uppercase tracking-wider flex items-center gap-2"><i data-lucide="eye" class="w-3.5 h-3.5"></i> Live Preview</h3>
          <div class="rounded-2xl overflow-hidden border border-blue-500/10 bg-[#0f172a]">
            <div class="px-4 py-3 border-b border-white/5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
              <i data-lucide="layout-panel-top" class="w-3.5 h-3.5 text-blue-400"></i>
              Homepage header banner
            </div>
            <div class="bg-[#070b16] p-3 sm:p-4">
              <div class="overflow-hidden rounded-xl border border-white/10 bg-[#111827] shadow-2xl shadow-black/20" style="aspect-ratio: 1600 / 320;">
                ${i?`<img id="homepage-banner-preview-img" src="${l(i)}" alt="${l(n)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-off" class="mx-auto w-8 h-8 text-gray-500"></i><p class="mt-2 text-xs font-semibold text-gray-500">No banner selected</p></div></div>'}
              </div>
            </div>
            <div class="px-4 py-3 border-t border-white/5 bg-[#0b1020] flex items-center gap-2 text-[11px] text-gray-400">
              <i data-lucide="crop" class="w-3.5 h-3.5 text-blue-400"></i>
              <span>Crop / resize is previewed in a fixed banner frame. Wide images work best.</span>
            </div>
          </div>
          <p id="homepage-banner-preview-note" class="text-[10px] text-gray-500">${l(o)}</p>
        </div>

        <form id="homepage-branding-form" onsubmit="saveHomepageBranding(event)" class="space-y-5">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="image-plus" class="w-4 h-4 text-blue-400"></i> Header Banner Image</h3>
                <p class="text-[11px] text-gray-500 mt-1">PNG, JPG, WEBP. The banner is stored permanently and published instantly after saving.</p>
              </div>
              <span class="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full font-bold">Homepage only</span>
            </div>

            <div id="homepage-banner-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
              <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
              <span id="homepage-banner-msg">Uploadingâ€¦</span>
            </div>

            <div class="grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
              <div class="space-y-3">
                <div class="group relative overflow-hidden rounded-2xl border border-dashed border-blue-500/25 bg-[#0b1020] transition hover:border-blue-500/50">
                  <div class="p-3 sm:p-4">
                    <div class="overflow-hidden rounded-xl border border-white/10 bg-[#111827]" style="aspect-ratio: 1600 / 320;">
                      ${i?`<img id="homepage-banner-image" src="${l(i)}" alt="${l(n)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-plus" class="mx-auto w-8 h-8 text-blue-400"></i><p class="mt-2 text-xs font-semibold text-gray-400">Upload a homepage banner</p></div></div>'}
                    </div>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <button type="button" onclick="triggerImgUpload('homepage_banner_image')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">${i?"Replace Image":"Upload Image"}</button>
                      <button type="button" onclick="clearHomepageBannerImg()" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove Image</button>
                      <button type="button" onclick="restoreHomepageBannerDefault()" class="text-xs font-bold text-white bg-slate-700 px-3 py-1.5 rounded-lg">Restore Default</button>
                    </div>
                  </div>
                </div>
                <input type="file" id="file-homepage_banner_image" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'homepage_banner_image')">
                <input type="hidden" name="homepage_banner_image" id="val-homepage_banner_image" value="${l(i)}">
                <input type="text" id="url-homepage_banner_image" value="${l(i)}" placeholder="Or paste image URL" oninput="document.getElementById('val-homepage_banner_image').value=this.value;updateHomepageBannerPreview()" class="input-field text-xs">
                <p class="text-[10px] text-gray-500">Use a wide image for the cleanest banner. The homepage frame will crop/resize it automatically.</p>
              </div>

              <div class="space-y-3">
                <div>
                  <label class="lbl">Banner Alt Text</label>
                  <textarea class="input-field" id="homepage_banner_alt" name="homepage_banner_alt" rows="4" placeholder="Accessible description for the banner image">${l(n)}</textarea>
                </div>
                <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-2">
                  <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> Publish Controls</p>
                  <p class="text-[11px] text-gray-500">Click Publish Changes to save the banner permanently. Remove Image clears it from the homepage.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 bg-blue-500/5 border border-blue-500/15 rounded-xl text-xs text-blue-300 flex items-start gap-3">
            <i data-lucide="info" class="w-4 h-4 shrink-0 mt-0.5 text-blue-400"></i>
            <p>The homepage banner is separate from your brand logo and brand text. It only affects the top homepage header area.</p>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2">
            <i data-lucide="upload" class="w-4 h-4"></i> Publish Changes
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}async function Tt(){const e=document.getElementById("content");e&&(e.innerHTML=Ue());try{let t=function(d,s,c,u="",p="blue"){const y=!!(c&&c.trim());return`
        <div class="glass-soft border border-${p}-500/15 rounded-xl p-4 space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-xs font-black text-white">${l(d)}</p>
            ${y?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">âœ“ Uploaded</span>':'<span class="text-[9px] text-gray-600">Empty</span>'}
          </div>
          ${y?`<div class="relative group w-full h-24 rounded-xl overflow-hidden bg-gray-900 border border-blue-500/10 flex items-center justify-center">
                <img src="${l(c)}" alt="${l(d)}" class="max-h-20 max-w-full object-contain p-2" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-600 text-center&quot;>Image broken</p>'">
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <button type="button" onclick="triggerImgUpload('${s}')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">Replace</button>
                  <button type="button" onclick="clearBrandImg('${s}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
                </div>
               </div>`:`<div class="w-full h-24 rounded-xl border-2 border-dashed border-${p}-500/25 hover:border-${p}-500/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition" onclick="triggerImgUpload('${s}')">
                <i data-lucide="image-plus" class="w-7 h-7 text-${p}-400"></i>
                <p class="text-[11px] text-gray-500">Click to upload</p>
               </div>`}
          ${u?`<p class="text-[10px] text-gray-500">${l(u)}</p>`:""}
          <input type="file" id="file-${s}" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'${s}')">
          <input type="hidden" name="${s}" id="val-${s}" value="${l(c||"")}">
          <div class="flex gap-2">
            <input class="input-field text-xs flex-1 ${y?"":"hidden"}" id="url-${s}" value="${l(c||"")}" placeholder="Or paste image URL" oninput="document.getElementById('val-${s}').value=this.value;updateLivePreview()">
            <button type="button" onclick="document.getElementById('url-${s}').classList.toggle('hidden')" class="text-[10px] text-${p}-400 hover:text-${p}-300 transition shrink-0">${y?"Edit URL":"Paste URL"}</button>
          </div>
        </div>`};const{data:a}=await g.from("site_settings").select("*").limit(1).maybeSingle(),i=a||{},n=i.brand_name||i.site_name||Ga,o=i.brand_slogan||i.site_tagline||Va,r=i.brand_logo||i.brand_header_logo||"";e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="palette" class="w-5 h-5 text-blue-400"></i> Brand Manager</h2>
          <div class="flex items-center gap-2">
            <button type="button" onclick="toggleLivePreview()" class="btn-press flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> Live Preview
            </button>
          </div>
        </div>

        <!-- â”€â”€ LIVE PREVIEW PANEL â”€â”€ -->
        <div id="live-preview-panel" class="hidden glass-soft border border-violet-500/20 rounded-2xl p-5 space-y-3">
          <h3 class="text-xs font-black text-violet-300 uppercase tracking-wider flex items-center gap-2"><i data-lucide="eye" class="w-3.5 h-3.5"></i> Live Preview â€” updates as you type</h3>
          <!-- Header preview -->
          <div class="rounded-xl overflow-hidden border border-blue-500/10">
            <div id="preview-header" class="flex items-center gap-3 px-4 py-3" style="background:#0f172a">
              <div id="preview-logo-wrap" class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style="background:var(--preview-primary,#f97316)">
                ${r?`<img src="${l(r)}" alt="${l(n)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
              </div>
              <div>
                <p id="preview-name" class="text-sm font-black text-white leading-none">${l(n)}</p>
                <p id="preview-slogan" class="text-[10px] text-blue-400 font-semibold mt-0.5">${l(o)}</p>
              </div>
              <div id="preview-badge-wrap" class="ml-auto ${i.brand_badge?"":"hidden"}">
                <img id="preview-badge" src="${l(i.brand_badge||"")}" alt="Verified" class="w-6 h-6 object-contain">
              </div>
            </div>
            <div class="px-4 py-2 border-t border-gray-800 text-[11px] text-gray-500" style="background:#070b16">
              <span id="preview-btn" style="background:${l(i.brand_primary_color||"#f97316")};color:#000;padding:4px 12px;border-radius:8px;font-weight:700;font-size:11px">Shop Now</span>
              <span class="ml-3" style="color:${l(i.brand_secondary_color||"#3b82f6")}">All Products â†’</span>
            </div>
          </div>
          <!-- Footer preview -->
          <div id="preview-footer" class="rounded-xl px-4 py-3 border border-gray-800 flex items-center gap-3" style="background:#0f172a">
            <div id="preview-footer-logo-wrap" class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style="background:var(--preview-primary,#f97316)">
              ${r?`<img src="${l(r)}" alt="${l(n)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
            </div>
            <div>
              <p id="preview-footer-name" class="text-xs font-black text-white">${l(n)}</p>
              <p id="preview-footer-slogan" class="text-[10px] text-gray-500">${l(o)}</p>
            </div>
            <p class="ml-auto text-[10px] text-gray-600">Â© 2026 <span id="preview-copy-name">${l(n)}</span></p>
          </div>
          <p class="text-[10px] text-gray-500">This is how your brand will appear on every page. Click Save to apply everywhere.</p>
        </div>

        <form id="brand-form" onsubmit="saveBrandSettings(event)" class="space-y-5">

          <!-- â”€â”€ Brand Identity â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="type" class="w-4 h-4 text-blue-400"></i> Brand Identity</h3>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">Brand Name *</label>
                <input class="input-field" name="brand_name" id="inp-brand-name" value="${l(n)}" placeholder="Your brand name" required oninput="updateLivePreview()">
              </div>
              <div>
                <label class="lbl">Short Name</label>
                <input class="input-field" name="brand_short_name" value="${l(i.brand_short_name||"")}" placeholder="e.g. Weverse">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Slogan / Tagline *</label>
                <input class="input-field" name="brand_slogan" id="inp-brand-slogan" value="${l(o)}" placeholder="e.g. Global Shopping â€¢ Worldwide Delivery" oninput="updateLivePreview()">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Brand Description</label>
                <textarea class="input-field" name="brand_description" rows="2" placeholder="Short descriptionâ€¦">${l(i.brand_description||"")}</textarea>
              </div>
            </div>
          </div>

          <!-- â”€â”€ Brand Colors â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="palette" class="w-4 h-4 text-violet-400"></i> Brand Colors</h3>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">Primary Color (buttons, accents)</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-primary" value="${l(i.brand_primary_color||"#f97316")}" oninput="document.getElementById('ct-primary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-primary" name="brand_primary_color" value="${l(i.brand_primary_color||"#f97316")}" placeholder="#f97316" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-primary').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Secondary Color (links, highlights)</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-secondary" value="${l(i.brand_secondary_color||"#3b82f6")}" oninput="document.getElementById('ct-secondary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-secondary" name="brand_secondary_color" value="${l(i.brand_secondary_color||"#3b82f6")}" placeholder="#3b82f6" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-secondary').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Tagline Color 1 (e.g. "GLOBAL SHOPPING")</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-tag1" value="${l(i.brand_tagline_color1||"#22d3ee")}" oninput="document.getElementById('ct-tag1').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-tag1" name="brand_tagline_color1" value="${l(i.brand_tagline_color1||"#22d3ee")}" placeholder="#22d3ee" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-tag1').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Tagline Color 2 (e.g. "WORLDWIDE DELIVERY")</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-tag2" value="${l(i.brand_tagline_color2||"#a3e635")}" oninput="document.getElementById('ct-tag2').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-tag2" name="brand_tagline_color2" value="${l(i.brand_tagline_color2||"#a3e635")}" placeholder="#a3e635" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-tag2').value=this.value;updateLivePreview()">
                </div>
              </div>
            </div>
          </div>

          <!-- â”€â”€ Brand Font â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="type" class="w-4 h-4 text-amber-400"></i> Brand Font</h3>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">Font Family</label>
                <select class="input-field" name="brand_font" id="brand-font-select" onchange="previewFont(this.value)">
                  ${["Inter","Poppins","Roboto","Montserrat","Nunito","Raleway","Lato","Open Sans","Outfit","Plus Jakarta Sans","DM Sans","Urbanist","Sora","Manrope","Work Sans","Space Grotesk"].map(d=>`<option value="${d}" ${(i.brand_font||"Inter")===d?"selected":""}>${d}</option>`).join("")}
                </select>
              </div>
              <div>
                <label class="lbl">Custom Google Font (overrides above)</label>
                <input class="input-field" name="brand_custom_font" value="${l(i.brand_custom_font||"")}" placeholder="e.g. Space Grotesk">
              </div>
            </div>
            <div id="font-preview" class="p-3 rounded-xl bg-gray-900 border border-blue-500/10">
              <p id="font-sample" class="text-sm text-white font-bold" style="font-family:'${l(i.brand_font||"Inter")}',sans-serif">The quick brown fox jumps â€” 0123456789 Â· Weverse Online Shop</p>
            </div>
          </div>

          <!-- â”€â”€ Logo & Verified Badge â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-4 h-4 text-emerald-400"></i> Logos & Verified Badge</h3>
              <p class="text-[10px] text-gray-500">PNG, SVG, WebP</p>
            </div>
            <div id="brand-upload-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
              <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
              <span id="brand-upload-msg">Uploadingâ€¦</span>
            </div>

            <!-- Verified Badge â€” highlighted at top -->
            <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl space-y-3">
              <div class="flex items-center gap-2 mb-1">
                <i data-lucide="badge-check" class="w-4 h-4 text-blue-400"></i>
                <p class="text-xs font-black text-white">Verified Badge</p>
                <span class="text-[9px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full font-bold">Shows next to your brand name</span>
              </div>
              ${t("Verification Badge Image","brand_badge",i.brand_badge,"Upload your blue checkmark or any verification badge. Recommended: 64Ã—64px PNG with transparent background.","blue")}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${t("Brand Logo / Banner Image","brand_logo",r,"Upload your image here. This changes only the logo/banner image and keeps the other brand fields as they are.")}
              ${t("Favicon / Tab Icon","brand_favicon",i.brand_favicon,"Browser tab icon. 32Ã—32 or 64Ã—64px.")}
              ${t("Mobile Logo","brand_mobile_logo",i.brand_mobile_logo,"Smaller logo for phones. 120Ã—40px.")}
              ${t("Header Logo","brand_header_logo",i.brand_header_logo,"Top navigation bar.")}
              ${t("Footer Logo","brand_footer_logo",i.brand_footer_logo,"Website footer.")}
              ${t("Login Page Logo","brand_login_logo",i.brand_login_logo,"Shown on auth/login page.")}
              ${t("Admin Dashboard Logo","brand_admin_logo",i.brand_admin_logo,"Admin sidebar header.")}
              ${t("OG / Social Image","brand_og_image",i.brand_og_image,"1200Ã—630px â€” shown when sharing links.")}
            </div>
          </div>

          <!-- â”€â”€ Contact â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="globe" class="w-4 h-4 text-blue-400"></i> Website & Contact</h3>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Website URL</label><input class="input-field" name="brand_website_url" value="${l(i.brand_website_url||i.production_url||"https://weverseonlineshop.com")}" placeholder="https://â€¦"></div>
              <div><label class="lbl">Support Email</label><input type="email" class="input-field" name="brand_email" value="${l(i.brand_email||i.contact_email||"")}" placeholder="support@â€¦"></div>
              <div><label class="lbl">Phone / WhatsApp</label><input class="input-field" name="brand_phone" value="${l(i.brand_phone||i.contact_phone||"")}" placeholder="+1 234â€¦"></div>
              <div><label class="lbl">Business Address</label><input class="input-field" name="brand_address" value="${l(i.brand_address||i.contact_address||"")}" placeholder="City, Country"></div>
            </div>
          </div>

          <div class="p-4 bg-blue-500/5 border border-blue-500/15 rounded-xl text-xs text-blue-300 flex items-start gap-3">
            <i data-lucide="info" class="w-4 h-4 shrink-0 mt-0.5 text-blue-400"></i>
            <p>After saving, your brand name, logo image, slogan, and verified badge will automatically appear on <strong>every page</strong> â€” Header, Footer, Login, Checkout, Contact, Admin, and all future pages. Uploading the image does not change your other brand settings.</p>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2">
            <i data-lucide="save" class="w-4 h-4"></i> Save Brand & Apply to All Pages
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.toggleLivePreview=function(){document.getElementById("live-preview-panel")?.classList.toggle("hidden"),updateLivePreview()};window.updateLivePreview=function(){const e=document.getElementById("live-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("inp-brand-name")?.value||Ga,a=document.getElementById("inp-brand-slogan")?.value||Va,i=document.getElementById("ct-primary")?.value||"#f97316",n=document.getElementById("ct-secondary")?.value||"#3b82f6",o=document.getElementById("ct-tag1")?.value||"#22d3ee",r=document.getElementById("ct-tag2")?.value||"#a3e635",d=document.getElementById("val-brand_logo")?.value||DEFAULT_BRAND_LOGO,s=document.getElementById("val-brand_badge")?.value||"";["preview-name","preview-footer-name","preview-copy-name"].forEach(b=>{const f=document.getElementById(b);f&&(f.textContent=t)}),["preview-slogan","preview-footer-slogan"].forEach(b=>{const f=document.getElementById(b);f&&(f.textContent=a)});const c=document.getElementById("preview-slogan");if(c&&a){const b=a,f=b.indexOf(","),w=f>-1?b.slice(0,f+1):b,x=f>-1?b.slice(f+1):"";c.innerHTML=`<span style="color:${o};font-weight:800">${l(w)}</span><span style="color:${r};font-weight:700">${l(x)}</span>`}const u=document.getElementById("preview-btn");u&&(u.style.background=i);const p=e.querySelector('[style*="color:"]');p&&(p.style.color=n),["preview-logo-wrap","preview-footer-logo-wrap"].forEach(b=>{const f=document.getElementById(b);f&&(d?(f.innerHTML=`<img src="${d}" alt="${t}" class="w-full h-full object-contain p-1">`,f.style.background="transparent"):(f.innerHTML='<i data-lucide="globe" class="w-4 h-4 text-white"></i>',f.style.background=i,window.lucide&&lucide.createIcons()))});const y=document.getElementById("preview-badge-wrap"),h=document.getElementById("preview-badge");y&&h&&(s?(h.src=s,y.classList.remove("hidden")):y.classList.add("hidden"))};window.triggerImgUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearBrandImg=function(e){document.getElementById("val-"+e).value="";const t=document.getElementById("url-"+e);t&&(t.value=""),(e&&e.startsWith("homepage_")?Ct:Tt)()};window.clearHomepageBannerImg=function(){const e=document.getElementById("val-homepage_banner_image"),t=document.getElementById("url-homepage_banner_image"),a=document.getElementById("homepage_banner_alt");e&&(e.value=""),t&&(t.value=""),a&&(a.value=""),Ct()};window.restoreHomepageBannerDefault=function(){window.clearHomepageBannerImg()};window.syncColor=function(e,t){const a=document.getElementById("color-"+e);a&&/^#[0-9a-fA-F]{6}$/.test(t)&&(a.value=t)};window.previewFont=function(e){const t=document.getElementById("font-sample");t&&(t.style.fontFamily=`'${e}', sans-serif`);const a="gf-preview";let i=document.getElementById(a);i||(i=document.createElement("link"),i.id=a,i.rel="stylesheet",document.head.appendChild(i)),i.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(e)}:wght@400;700;900&display=swap`};const Yt="weverse_brand_v1",Jt="weverse_brand_override_v1";function Qt(){try{const e=JSON.parse(localStorage.getItem(Jt)||"null");if(e&&typeof e=="object")return e}catch{}try{const e=JSON.parse(localStorage.getItem(Yt)||"null");if(e&&typeof e=="object")return e.data&&typeof e.data=="object"?e.data:e}catch{}return{}}function ht(e){const t={...Qt(),...e};try{localStorage.setItem(Jt,JSON.stringify(t))}catch{}try{localStorage.setItem(Yt,JSON.stringify({ts:Date.now(),data:t}))}catch{}return window.dispatchEvent(new StorageEvent("storage",{key:Jt})),window.dispatchEvent(new StorageEvent("storage",{key:Yt})),window.dispatchEvent(new CustomEvent("brand-updated",{detail:t})),t}window.handleBrandImgUpload=async function(e,t){const a=e.target.files?.[0];if(!a)return;const i=t&&t.startsWith("homepage_"),n=document.getElementById(i?"homepage-banner-status":"brand-upload-status"),o=document.getElementById(i?"homepage-banner-msg":"brand-upload-msg");n&&n.classList.remove("hidden"),o&&(o.textContent=`Uploading ${a.name}â€¦`);try{const r=a.name.split(".").pop(),d=`brand/${t}-${Date.now()}.${r}`,{error:s}=await g.storage.from("product-images").upload(d,a,{contentType:a.type,upsert:!0});let c;if(s)c=URL.createObjectURL(a),o&&(o.textContent=`Preview only (storage: ${s.message})`);else{const{data:y}=g.storage.from("product-images").getPublicUrl(d);c=y.publicUrl,o&&(o.textContent=`âœ“ ${a.name} uploaded`)}const u=document.getElementById("val-"+t),p=document.getElementById("url-"+t);u&&(u.value=c),p&&(p.value=c,p.classList.remove("hidden")),i?updateHomepageBannerPreview():(updateLivePreview(),setTimeout(()=>Tt(),1e3))}catch(r){o&&(o.textContent=`Upload failed: ${r.message}`)}setTimeout(()=>n?.classList.add("hidden"),4e3)};window.saveBrandSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[d,s]of t.entries())d.endsWith("_url")||(a[d]=s);a.brand_name&&(a.site_name=a.brand_name),a.brand_slogan&&(a.site_tagline=a.brand_slogan),a.brand_description&&(a.site_description=a.brand_description),a.brand_email&&(a.contact_email=a.brand_email),a.brand_phone&&(a.contact_phone=a.brand_phone),a.brand_address&&(a.contact_address=a.brand_address),a.brand_website_url&&(a.production_url=a.brand_website_url);const i=a.brand_custom_font||a.brand_font;i&&previewFont(i);const n=e.target.querySelector("[type=submit]");n&&(n.disabled=!0,n.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Savingâ€¦',window.lucide&&lucide.createIcons());const{data:o}=await g.from("site_settings").select("id").limit(1).maybeSingle();let r;o?.id?{error:r}=await g.from("site_settings").update(a).eq("id",o.id):{error:r}=await g.from("site_settings").insert(a),r?(ht(a),m("Brand saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(ht(a),m("âœ… Brand saved! All pages will now show your updated brand.","success")),setTimeout(()=>Tt(),500)};window.toggleHomepageBannerPreview=function(){document.getElementById("homepage-banner-preview-panel")?.classList.toggle("hidden"),updateHomepageBannerPreview()};window.updateHomepageBannerPreview=function(){const e=document.getElementById("homepage-banner-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("val-homepage_banner_image")?.value||"",a=document.getElementById("homepage_banner_alt")?.value||"Homepage header banner",i=document.getElementById("homepage-banner-image"),n=document.getElementById("homepage-banner-preview-img");[i,n].forEach(r=>{r&&(t?(r.src=t,r.alt=a,r.classList.remove("hidden")):r.classList.add("hidden"))});const o=document.getElementById("homepage-banner-preview-note");o&&(o.textContent=t?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.")};window.saveHomepageBranding=async function(e){e.preventDefault();const t={homepage_banner_image:document.getElementById("url-homepage_banner_image")?.value||"",homepage_banner_alt:document.getElementById("homepage_banner_alt")?.value||"Homepage header banner"},a=e.target.querySelector("[type=submit]");a&&(a.disabled=!0,a.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishingâ€¦',window.lucide&&lucide.createIcons());const{data:i}=await g.from("site_settings").select("id").limit(1).maybeSingle();let n;i?.id?{error:n}=await g.from("site_settings").update(t).eq("id",i.id):{error:n}=await g.from("site_settings").insert(t),n?(ht({...Qt(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),m("Homepage banner saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(ht({...Qt(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),m("Homepage banner published.","success")),setTimeout(()=>Ct(),500)};const vt=[{key:"trust_promo",label:"Promotional Hero (Trust & Info Area)",icon:"sparkles",desc:"The family-receives-orders section above the app banner. Show it as-is for the built-in design, or upload the real photo/video."},{key:"app_banner",label:"Weverse Mobile App Banner",icon:"smartphone",desc:"The dark app banner at the very bottom of every page."},{key:"reviews",label:"Customer Reviews & Trust",icon:"star",desc:"The customer reviews strip just below the accordions."}];async function Xe(e){const t=document.getElementById("content");t&&(t.innerHTML=Ue());try{let a=e?{...e}:null;if(!a){const{data:i}=await g.from("site_settings").select("*").limit(1).maybeSingle(),n=i||{};a={};for(const o of vt)a[o.key+"_bg_image"]=n[o.key+"_bg_image"]||"",a[o.key+"_bg_video"]=n[o.key+"_bg_video"]||""}t.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-5 h-5 text-blue-400"></i> Promo & Backgrounds</h2>
        <p class="text-xs text-gray-500 max-w-2xl leading-relaxed">Choose an <b class="text-gray-300">image</b> and/or a <b class="text-gray-300">video</b> for each promotional section. When a video is set it plays automatically and the image acts as its poster. Leave a slot empty to keep that section’s built-in design. Changes appear instantly on every page after publishing.</p>

        <div id="promo-bg-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
          <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
          <span id="promo-bg-msg">Uploadingâ€¦</span>
        </div>

        <form id="promo-bg-form" onsubmit="savePromoBackgrounds(event)" class="space-y-5">
          ${vt.map(i=>Fo(i,a)).join("")}

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 flex items-center gap-3">
            <i data-lucide="info" class="w-5 h-5 text-emerald-400 shrink-0"></i>
            <p class="text-[11px] text-gray-400 leading-relaxed">Published backgrounds are cached on visitor devices for up to a minute. Publishing clears the cache so everyone sees your new media immediately.</p>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">
            <i data-lucide="rocket" class="w-4 h-4 inline mr-2"></i>Publish Promo & Backgrounds
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(a){t&&(t.innerHTML=`<div class="p-6 text-red-400">${l(a.message)}</div>`)}}function Fo(e,t){const a=e.key+"_bg_image",i=e.key+"_bg_video",n=t[a]||"",o=t[i]||"",r=!!(n&&n.trim()),d=!!(o&&o.trim());return`
    <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-3">
          <div class="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20"><i data-lucide="${e.icon}" class="w-4 h-4 text-blue-400"></i></div>
          <div>
            <p class="text-xs font-black text-white">${e.label}</p>
            <p class="text-[10px] text-gray-500 mt-0.5 max-w-xl">${e.desc}</p>
          </div>
        </div>
        <div class="flex gap-1.5">
          ${r?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">âœ“ Image</span>':""}
          ${d?'<span class="text-[9px] font-bold text-violet-500 bg-violet-500/10 px-1.5 py-0.5 rounded-full">âœ“ Video</span>':""}
          ${r||d?"":'<span class="text-[9px] text-gray-600">Built-in design</span>'}
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${Ta(e,a,n,r,"image")}
        ${Ta(e,i,o,d,"video")}
      </div>
    </div>`}function Ta(e,t,a,i,n){const o=n==="image",r=o?"blue":"violet",d=o?"image-plus":"video",s=o?"text-blue-400":"text-violet-400";return`
    <div>
      <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5"><i data-lucide="${d}" class="w-3 h-3 ${s}"></i>${n}</p>
      ${i?`<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-${r}-500/15 flex items-center justify-center">
             ${o?`<img src="${l(a)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`:`<video src="${l(a)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerPromoBgUpload('${t}')" class="text-xs font-bold text-white bg-${r}-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearPromoBg('${t}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`:`<button type="button" onclick="triggerPromoBgUpload('${t}')" class="w-full h-28 rounded-xl border-2 border-dashed border-${r}-500/25 hover:border-${r}-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${d}" class="w-6 h-6 ${s}"></i>
             <p class="text-[10px] text-gray-500">Upload ${n}</p>
           </button>`}
      <input type="file" id="file-${t}" class="hidden" accept="${o?"image/*":"video/*"}" onchange="handlePromoBgUpload(event,'${t}')">
      <input type="hidden" name="${t}" id="val-${t}" value="${l(a)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${t}" value="${l(a)}" placeholder="Or paste ${n} URL" oninput="document.getElementById('val-${t}').value=this.value">
        <button type="button" onclick="document.getElementById('url-${t}').classList.toggle('hidden')" class="text-[10px] text-${r}-400 hover:text-${r}-300 transition shrink-0">Edit URL</button>
      </div>
    </div>`}window.triggerPromoBgUpload=function(e){document.getElementById("file-"+e)?.click()};function Li(){const e={};for(const t of vt)e[t.key+"_bg_image"]=document.getElementById("val-"+t.key+"_bg_image")?.value||"",e[t.key+"_bg_video"]=document.getElementById("val-"+t.key+"_bg_video")?.value||"";return e}window.clearPromoBg=function(e){const t=Li();t[e]="";const a=document.getElementById("val-"+e),i=document.getElementById("url-"+e);a&&(a.value=""),i&&(i.value=""),Xe(t),m("Cleared. Publish to apply.","info")};window.handlePromoBgUpload=async function(e,t){const a=e.target.files?.[0];if(!a)return;const i=document.getElementById("promo-bg-status"),n=document.getElementById("promo-bg-msg");i&&i.classList.remove("hidden"),n&&(n.textContent=`Uploading ${a.name}â€¦`);try{const o=(a.name.split(".").pop()||"bin").toLowerCase(),r=`promo/${t}-${Date.now()}.${o}`,{error:d}=await g.storage.from("product-images").upload(r,a,{contentType:a.type,upsert:!0});let s;if(d)s=URL.createObjectURL(a),n&&(n.textContent=`Preview only (storage: ${d.message})`);else{const{data:y}=g.storage.from("product-images").getPublicUrl(r);s=y.publicUrl,n&&(n.textContent=`âœ“ ${a.name} uploaded`)}const c=document.getElementById("val-"+t),u=document.getElementById("url-"+t);c&&(c.value=s),u&&(u.value=s,u.classList.remove("hidden"));const p=Li();Xe(p)}catch(o){n&&(n.textContent=`Upload failed: ${o.message}`)}setTimeout(()=>i?.classList.add("hidden"),4e3)};window.savePromoBackgrounds=async function(e){e.preventDefault();const t={};for(const o of vt)t[o.key+"_bg_image"]=document.getElementById("val-"+o.key+"_bg_image")?.value||"",t[o.key+"_bg_video"]=document.getElementById("val-"+o.key+"_bg_video")?.value||"";const a=e.target.querySelector("[type=submit]");a&&(a.disabled=!0,a.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishingâ€¦',window.lucide&&lucide.createIcons());const{data:i}=await g.from("site_settings").select("id").limit(1).maybeSingle();let n;i?.id?{error:n}=await g.from("site_settings").update(t).eq("id",i.id):{error:n}=await g.from("site_settings").insert(t),Ri(),n?(m("Publish failed â€” the settings table rejected the update. Make sure the new promo-background columns are migrated, then try again.","error"),Xe(t)):(m("Promo & backgrounds published across all pages.","success"),setTimeout(()=>Xe(),500))};window._manualPaymentAccounts=[];function ya(e="USD"){return{id:`bank-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,currency:e,currencyName:e,flag:ta("US"),country:"United States",country_code:"US",bankName:"",transferType:"Local & International",beneficiary:"",accountNumber:"",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:""}}function fa(){const e=document.getElementById("manual-payment-accounts-json");e&&(e.value=JSON.stringify(window._manualPaymentAccounts||[]))}function Uo(e,t){const a=e.country_code||"US";return`
    <div class="p-4 glass-soft border border-blue-500/10 rounded-xl space-y-3">
      <div class="flex items-center justify-between gap-3">
        <h4 class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="building-2" class="w-3.5 h-3.5 text-blue-400"></i> Bank Account ${t+1}</h4>
        <button type="button" onclick="removeManualPaymentAccount(${t})" class="text-[11px] font-bold text-red-400 hover:text-red-300 transition">Remove</button>
      </div>
      <div class="form-grid form-grid-2">
        <div><label class="lbl">Currency *</label><select class="input-field" onchange="updateManualPaymentAccount(${t}, 'currency', this.value)">${za.map(i=>`<option value="${i}" ${e.currency===i?"selected":""}>${i}</option>`).join("")}</select></div>
        <div><label class="lbl">Country *</label><select class="input-field" onchange="updateManualPaymentCountry(${t}, this.value)">${ri(a)}</select></div>
        <div><label class="lbl">Beneficiary / Account Name *</label><input class="input-field" value="${l(e.beneficiary||"")}" placeholder="Full name on account" oninput="updateManualPaymentAccount(${t}, 'beneficiary', this.value)"></div>
        <div><label class="lbl">Bank Name *</label><input class="input-field" value="${l(e.bankName||"")}" placeholder="e.g. Citibank" oninput="updateManualPaymentAccount(${t}, 'bankName', this.value)"></div>
        <div><label class="lbl">Account Number</label><input class="input-field font-mono" value="${l(e.accountNumber||"")}" placeholder="Account number" oninput="updateManualPaymentAccount(${t}, 'accountNumber', this.value)"></div>
        <div><label class="lbl">Transfer Type</label><input class="input-field" value="${l(e.transferType||"")}" placeholder="Local & International" oninput="updateManualPaymentAccount(${t}, 'transferType', this.value)"></div>
        <div><label class="lbl">Account Type</label><input class="input-field" value="${l(e.accountType||"")}" placeholder="Checking, Savings..." oninput="updateManualPaymentAccount(${t}, 'accountType', this.value)"></div>
        <div><label class="lbl">IBAN</label><input class="input-field font-mono" value="${l(e.iban||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'iban', this.value)"></div>
        <div><label class="lbl">SWIFT / BIC</label><input class="input-field font-mono" value="${l(e.swift||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'swift', this.value)"></div>
        <div><label class="lbl">Routing / ABA</label><input class="input-field font-mono" value="${l(e.routing||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'routing', this.value)"></div>
        <div><label class="lbl">Sort Code</label><input class="input-field font-mono" value="${l(e.sortCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'sortCode', this.value)"></div>
        <div><label class="lbl">Bank Code</label><input class="input-field font-mono" value="${l(e.bankCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'bankCode', this.value)"></div>
        <div><label class="lbl">Branch Code</label><input class="input-field font-mono" value="${l(e.branchCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'branchCode', this.value)"></div>
        <div><label class="lbl">Institution Number</label><input class="input-field font-mono" value="${l(e.institutionNumber||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'institutionNumber', this.value)"></div>
        <div><label class="lbl">Transit Number</label><input class="input-field font-mono" value="${l(e.transitNumber||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'transitNumber', this.value)"></div>
        <div><label class="lbl">BSB Code</label><input class="input-field font-mono" value="${l(e.bsbCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'bsbCode', this.value)"></div>
        <div class="sm:col-span-2"><label class="lbl">Bank Address</label><input class="input-field" value="${l(e.address||"")}" placeholder="Branch or bank address" oninput="updateManualPaymentAccount(${t}, 'address', this.value)"></div>
      </div>
    </div>`}window.renderManualPaymentAccountsEditor=function(){const e=document.getElementById("manual-accounts-editor");e&&(window._manualPaymentAccounts?.length||(window._manualPaymentAccounts=[ya()]),e.innerHTML=`
    <div class="space-y-4">
      ${window._manualPaymentAccounts.map((t,a)=>Uo(t,a)).join("")}
      <button type="button" onclick="addManualPaymentAccount()" class="btn-press w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition flex items-center justify-center gap-2">
        <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Another Bank Account
      </button>
    </div>`,fa(),window.lucide&&lucide.createIcons())};window.addManualPaymentAccount=function(){window._manualPaymentAccounts.push(ya()),renderManualPaymentAccountsEditor()};window.removeManualPaymentAccount=function(e){window._manualPaymentAccounts.splice(e,1),window._manualPaymentAccounts.length||(window._manualPaymentAccounts=[ya()]),renderManualPaymentAccountsEditor()};window.updateManualPaymentAccount=function(e,t,a){const i=window._manualPaymentAccounts[e];i&&(i[t]=a,t==="currency"&&(i.currencyName=a),fa())};window.updateManualPaymentCountry=function(e,t){const a=window._manualPaymentAccounts[e];if(!a)return;const i=Pe.find(n=>n.code===t);a.country_code=t,a.country=i?.name||"",a.flag=i?.flag||ta(t),fa(),renderManualPaymentAccountsEditor()};async function Xt(){const e=document.getElementById("content");e&&(e.innerHTML=Ue());try{const{data:t}=await g.from("site_settings").select("*").limit(1).maybeSingle(),i={...en()||{},...t||{}};window._manualPaymentAccounts=on(i).map(n=>({...n})),e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white">Payment Settings</h2>
          <div class="flex items-center gap-2 flex-wrap">
            ${i.payment_gateway?`<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Active: ${l(i.payment_gateway)}</span>`:'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Not configured</span>'}
            ${i.payment_mode==="live"?'<span class="badge bg-red-500/10 text-red-400 border-red-500/20">ðŸ”´ LIVE MODE</span>':'<span class="badge bg-blue-500/10 text-blue-400 border-blue-500/20">ðŸ”§ Test Mode</span>'}
          </div>
        </div>

        <form id="payment-form" onsubmit="savePaymentSettings(event)" class="space-y-5">
          <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
            <div class="flex items-center justify-between p-4 border-b border-blue-500/10">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <i data-lucide="landmark" class="w-5 h-5 text-blue-400"></i>
                </div>
                <div>
                  <h3 class="text-sm font-black text-white">Manual Payment (Bank / ATM Transfer)</h3>
                  <p class="text-[11px] text-gray-500">Show the right receiving account based on the customer country and currency.</p>
                </div>
              </div>
              <label class="toggle-switch shrink-0">
                <input type="checkbox" name="manual_payment_enabled" id="manual-toggle" ${i.manual_payment_enabled!==!1?"checked":""}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="p-5 space-y-4">
              <input type="hidden" id="manual-payment-accounts-json" name="manual_payment_accounts_json" value="">
              <div id="manual-accounts-editor"></div>
              <div>
                <label class="lbl">Payment Instructions (shown to customer after checkout)</label>
                <textarea class="input-field" name="manual_payment_instructions" rows="4" placeholder="Explain how customers should pay and upload their receipt.">${l(rn(i))}</textarea>
              </div>
              <div>
                <label class="lbl">ATM Transfer Instructions (optional, shown separately)</label>
                <textarea class="input-field" name="atm_transfer_instructions" rows="3" placeholder="Optional ATM-specific instructions.">${l(i.atm_transfer_instructions||"")}</textarea>
              </div>
              <div class="p-3 bg-blue-500/5 border border-blue-500/15 rounded-xl text-[11px] text-blue-300">
                <i data-lucide="info" class="w-3.5 h-3.5 inline mr-1"></i>
                Customers will see the account that matches their detected country currency. If no match exists, they will be guided to use your USD account and upload a receipt for quick verification and shipping.
              </div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/15 rounded-2xl overflow-hidden">
            <div class="flex items-center justify-between p-4 border-b border-amber-500/10">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <i data-lucide="zap" class="w-5 h-5 text-amber-400"></i>
                </div>
                <div>
                  <h3 class="text-sm font-black text-white">Flutterwave</h3>
                  <p class="text-[11px] text-gray-500">Accept cards, mobile money, bank transfers online</p>
                </div>
              </div>
              <label class="toggle-switch shrink-0">
                <input type="checkbox" name="flutterwave_enabled" ${i.flutterwave_enabled?"checked":""}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="p-5 space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex items-center gap-3 p-3 glass-soft border ${(i.payment_mode||"test")==="test"?"border-blue-500/40 bg-blue-500/5":"border-blue-500/10"} rounded-xl cursor-pointer">
                  <input type="radio" name="payment_mode" value="test" ${(i.payment_mode||"test")==="test"?"checked":""} class="accent-blue-500">
                  <div><p class="text-xs font-black text-white">ðŸ”§ Test Mode</p><p class="text-[11px] text-gray-500">Use sandbox keys â€” no real money</p></div>
                </label>
                <label class="flex items-center gap-3 p-3 glass-soft border ${i.payment_mode==="live"?"border-red-500/40 bg-red-500/5":"border-blue-500/10"} rounded-xl cursor-pointer">
                  <input type="radio" name="payment_mode" value="live" ${i.payment_mode==="live"?"checked":""} class="accent-red-500">
                  <div><p class="text-xs font-black text-white">ðŸ”´ Live Mode</p><p class="text-[11px] text-red-400 font-bold">Real money â€” use production keys</p></div>
                </label>
              </div>
              <div class="form-grid form-grid-2">
                <div><label class="lbl">Public Key *</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_public_key" placeholder="${i.flutterwave_public_key?"â€¢â€¢â€¢â€¢"+i.flutterwave_public_key.slice(-4):"FLWPUBK_TEST-â€¦ or FLWPUBK-â€¦"}">${i.flutterwave_public_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Secret Key *</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_secret_key" placeholder="${i.flutterwave_secret_key?"â€¢â€¢â€¢â€¢"+i.flutterwave_secret_key.slice(-4):"FLWSECK_TEST-â€¦ or FLWSECK-â€¦"}">${i.flutterwave_secret_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Encryption Key</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_encryption_key" placeholder="${i.flutterwave_encryption_key?"â€¢â€¢â€¢â€¢"+i.flutterwave_encryption_key.slice(-4):"Encryption key from dashboard"}">${i.flutterwave_encryption_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Webhook Secret</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_webhook_secret" placeholder="${i.flutterwave_webhook_secret?"â€¢â€¢â€¢â€¢"+i.flutterwave_webhook_secret.slice(-4):"Secret hash for webhook verification"}">${i.flutterwave_webhook_secret?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Accepted Currency</label><select class="input-field" name="flutterwave_currency">${["NGN","USD","GBP","EUR","GHS","KES","ZAR","ZMW","TZS","UGX","XAF","XOF"].map(n=>`<option value="${n}" ${(i.flutterwave_currency||"NGN")===n?"selected":""}>${n}</option>`).join("")}</select></div>
                <div><label class="lbl">Redirect URL (after payment)</label><input class="input-field" name="flutterwave_redirect_url" value="${l(i.flutterwave_redirect_url||"")}" placeholder="${window.location.origin}/payment.html"></div>
              </div>
              <div class="p-3 bg-amber-500/5 border border-amber-500/15 rounded-xl text-[11px] text-amber-300 space-y-1">
                <p><strong>Where to get keys:</strong> <a href="https://dashboard.flutterwave.com/dashboard/settings/apis" target="_blank" class="underline hover:text-amber-200">dashboard.flutterwave.com â†’ Settings â†’ API</a></p>
                <p><strong>Webhook URL to add in Flutterwave:</strong> <code class="bg-black/30 px-1 rounded">${window.location.origin}/api/flutterwave-webhook</code></p>
                <p>Test cards: Visa <code class="bg-black/30 px-1 rounded">4187 4274 1556 4246</code> Â· PIN: <code class="bg-black/30 px-1 rounded">3310</code> Â· OTP: <code class="bg-black/30 px-1 rounded">12345</code></p>
              </div>
              <button type="button" onclick="testFlutterwaveKeys()" class="btn-press flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 px-4 py-2 rounded-xl transition"><i data-lucide="plug" class="w-4 h-4"></i> Test Flutterwave Connection</button>
            </div>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white mb-1">Which payment method is active on checkout?</h3>
            <p class="text-xs text-gray-400 mb-3">Select which method customers see when they go to pay.</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${[{id:"manual",label:"Manual / Bank Transfer",icon:"landmark",color:"blue"},{id:"flutterwave",label:"Flutterwave",icon:"zap",color:"amber"},{id:"both",label:"Both (customer chooses)",icon:"layers",color:"emerald"}].map(n=>`<label class="flex items-center gap-3 p-3 glass-soft border ${(i.payment_gateway||"manual")===n.id?"border-blue-500/40 bg-blue-500/5":"border-blue-500/10"} rounded-xl cursor-pointer hover:border-blue-500/30 transition"><input type="radio" name="payment_gateway" value="${n.id}" ${(i.payment_gateway||"manual")===n.id?"checked":""} class="accent-blue-500"><div><i data-lucide="${n.icon}" class="w-4 h-4 text-${n.color}-400 mb-0.5"></i><p class="text-xs font-bold text-white">${n.label}</p></div></label>`).join("")}
            </div>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2"><i data-lucide="save" class="w-4 h-4"></i> Save Payment Settings</button>
        </form>
      </div>`,renderManualPaymentAccountsEditor(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.savePaymentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=["flutterwave_public_key","flutterwave_secret_key","flutterwave_encryption_key","flutterwave_webhook_secret"],n={};for(const[u,p]of Object.entries(a))i.includes(u)?p&&!p.startsWith("â€¢â€¢â€¢â€¢")&&p.trim()!==""&&(n[u]=p.trim()):n[u]=p;n.manual_payment_enabled=a.manual_payment_enabled==="on",n.flutterwave_enabled=a.flutterwave_enabled==="on";let o=[];try{o=JSON.parse(a.manual_payment_accounts_json||"[]")}catch{}n.manual_payment_accounts=o;const r=o[0]||{},d=o[1]||{};n.bank1_account_name=r.beneficiary||"",n.bank1_account_number=r.accountNumber||"",n.bank1_bank_name=r.bankName||"",n.bank1_transfer_type=r.transferType||"",n.bank1_sort_code=r.sortCode||r.routing||"",n.bank1_currency=r.currency||"USD",n.bank2_account_name=d.beneficiary||"",n.bank2_account_number=d.accountNumber||"",n.bank2_bank_name=d.bankName||"",n.bank2_transfer_type=d.transferType||"",n.bank2_sort_code=d.sortCode||d.routing||"",n.bank2_currency=d.currency||"USD",tn(n);const{data:s}=await g.from("site_settings").select("id").limit(1).maybeSingle();let c;if(s?.id?{error:c}=await g.from("site_settings").update(n).eq("id",s.id):{error:c}=await g.from("site_settings").insert(n),c){const u=String(c.message||"");if(/manual_payment_accounts|column|schema cache/i.test(u)){m("Payment settings saved locally. Run the latest migration to persist them to Supabase.","info"),console.warn(c),setTimeout(()=>Xt(),500);return}m("Save failed: "+c.message,"error"),console.error(c);return}m("âœ… Payment settings saved successfully!","success"),setTimeout(()=>Xt(),500)};window.testFlutterwaveKeys=async function(){const{data:e}=await g.from("site_settings").select("flutterwave_public_key").limit(1).maybeSingle();if(!e?.flutterwave_public_key){m("Save your Flutterwave public key first","info");return}m("Flutterwave key is saved. Use test mode + test card to verify a payment flow.","info")};async function Lt(){const e=document.getElementById("content");try{const{data:t}=await g.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white">Publish & Deploy</h2>

        <!-- Status Bar -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 flex flex-wrap items-center gap-4">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${a.github_repo?"bg-emerald-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${a.github_repo?"text-emerald-400":"text-gray-500"}">${a.github_repo?"GitHub Connected: "+l(a.github_repo):"GitHub Not Connected"}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${a.deploy_webhook?"bg-blue-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${a.deploy_webhook?"text-blue-400":"text-gray-500"}">${a.deploy_webhook?"Deploy Webhook Set":"No Webhook"}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${a.payment_gateway?"bg-amber-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${a.payment_gateway?"text-amber-400":"text-gray-500"}">${a.payment_gateway?"Payment: "+l(a.payment_gateway):"Payment Not Configured"}</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <button onclick="publishAndDeploy(event)" class="btn-press glass-soft border border-emerald-500/20 hover:border-emerald-500/40 rounded-xl p-4 text-center transition" data-publish-easy-btn>
            <i data-lucide="wand-sparkles" class="w-6 h-6 text-emerald-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">One-Click Publish</p>
            <p class="text-[10px] text-gray-500 mt-0.5">Save + Deploy</p>
          </button>
          <button onclick="triggerDeploy(event)" class="btn-press glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-xl p-4 text-center transition" data-deploy-btn>
            <i data-lucide="rocket" class="w-6 h-6 text-blue-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">Deploy Now</p>
            <p class="text-[10px] text-gray-500 mt-0.5">Push to live</p>
          </button>
          <button onclick="triggerRebuild(event)" class="btn-press glass-soft border border-violet-500/15 hover:border-violet-500/40 rounded-xl p-4 text-center transition" data-rebuild-btn>
            <i data-lucide="refresh-cw" class="w-6 h-6 text-violet-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">Rebuild Site</p>
            <p class="text-[10px] text-gray-500 mt-0.5">Full rebuild</p>
          </button>
          <button onclick="reindexSearch()" class="btn-press glass-soft border border-emerald-500/15 hover:border-emerald-500/40 rounded-xl p-4 text-center transition">
            <i data-lucide="search" class="w-6 h-6 text-emerald-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">Reindex Search</p>
            <p class="text-[10px] text-gray-500 mt-0.5">Update index</p>
          </button>
          <button onclick="syncShowroomToDB()" class="btn-press glass-soft border border-amber-500/15 hover:border-amber-500/40 rounded-xl p-4 text-center transition">
            <i data-lucide="database" class="w-6 h-6 text-amber-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">Sync Products</p>
            <p class="text-[10px] text-gray-500 mt-0.5">DB sync</p>
          </button>
        </div>

        <!-- Settings Form -->
        <form id="deploy-form" onsubmit="saveDeploySettings(event)" class="space-y-5">

          <!-- â”€â”€ GitHub Integration â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2">
              <i data-lucide="github" class="w-4 h-4 text-white"></i> GitHub Integration
            </h3>
            <div class="p-3 bg-blue-500/5 border border-blue-500/20 rounded-xl text-xs text-blue-300">
              Connect your GitHub account so every deployment pushes your code to GitHub automatically.
              When you click <strong>Deploy Now</strong>, the site builds and commits to your repository.
            </div>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">GitHub Username</label>
                <input class="input-field" name="github_username" value="${l(a.github_username||"")}" placeholder="your-github-username">
              </div>
              <div>
                <label class="lbl">Repository Name</label>
                <input class="input-field" name="github_repo" value="${l(a.github_repo||"")}" placeholder="my-website-repo">
              </div>
              <div>
                <label class="lbl">Branch</label>
                <input class="input-field" name="github_branch" value="${l(a.github_branch||"main")}" placeholder="main">
              </div>
              <div>
                <label class="lbl">GitHub Personal Access Token</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="github_token" placeholder="${a.github_token?"â€¢â€¢â€¢â€¢"+a.github_token.slice(-4):"ghp_â€¦paste your token"}">
                  ${a.github_token?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}
                </div>
                <p class="text-[10px] text-gray-500 mt-1">Generate at: <a href="https://github.com/settings/tokens" target="_blank" class="text-blue-400 hover:underline">github.com/settings/tokens</a> (needs repo scope)</p>
              </div>
            </div>
            <button type="button" onclick="testGitHubConnection()" class="btn-press flex items-center gap-2 text-xs font-bold text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 rounded-xl transition">
              <i data-lucide="plug" class="w-4 h-4"></i> Test GitHub Connection
            </button>
          </div>

          <!-- â”€â”€ Hosting & Deploy Webhook â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2">
              <i data-lucide="cloud-upload" class="w-4 h-4 text-blue-400"></i> Hosting & Auto-Deploy
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${[{id:"netlify",name:"Netlify",icon:"cloud",color:"teal"},{id:"vercel",name:"Vercel",icon:"triangle",color:"white"},{id:"github-pages",name:"GitHub Pages",icon:"github",color:"gray"},{id:"railway",name:"Railway",icon:"train",color:"violet"},{id:"render",name:"Render",icon:"server",color:"blue"}].map(i=>`
                <label class="flex items-center gap-2 p-3 glass-soft border ${(a.hosting_provider||"netlify")===i.id?"border-blue-500/40 bg-blue-500/5":"border-blue-500/10"} rounded-xl cursor-pointer hover:border-blue-500/30 transition">
                  <input type="radio" name="hosting_provider" value="${i.id}" ${(a.hosting_provider||"netlify")===i.id?"checked":""} class="accent-blue-500">
                  <i data-lucide="${i.icon}" class="w-4 h-4 text-gray-400"></i>
                  <span class="text-xs font-bold text-white">${i.name}</span>
                </label>`).join("")}
            </div>
            <div>
              <label class="lbl">Deploy Webhook URL</label>
              <input class="input-field" name="deploy_webhook" value="${l(a.deploy_webhook||"")}" placeholder="https://api.netlify.com/build_hooks/â€¦">
              <p class="text-[10px] text-gray-500 mt-1">Netlify: Site Settings â†’ Build hooks Â· Vercel: Project â†’ Settings â†’ Git â†’ Deploy Hooks</p>
            </div>
            <div>
              <label class="lbl">Production URL</label>
              <input class="input-field" name="production_url" value="${l(a.production_url||"")}" placeholder="https://yoursite.com">
            </div>
          </div>

          <!-- â”€â”€ Payment Settings â”€â”€ -->
          <div class="glass-soft border border-amber-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2">
              <i data-lucide="credit-card" class="w-4 h-4 text-amber-400"></i> Payment Gateway Settings
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${[{id:"flutterwave",name:"Flutterwave",color:"amber"},{id:"stripe",name:"Stripe",color:"blue"},{id:"paypal",name:"PayPal",color:"blue"},{id:"paystack",name:"Paystack",color:"blue"},{id:"razorpay",name:"Razorpay",color:"blue"},{id:"manual",name:"Manual Bank Transfer",color:"gray"}].map(i=>`
                <label class="flex items-center gap-2 p-2.5 glass-soft border ${(a.payment_gateway||"flutterwave")===i.id?"border-amber-500/40 bg-amber-500/5":"border-blue-500/10"} rounded-xl cursor-pointer hover:border-amber-500/30 transition">
                  <input type="radio" name="payment_gateway" value="${i.id}" ${(a.payment_gateway||"flutterwave")===i.id?"checked":""} class="accent-amber-500">
                  <span class="text-xs font-bold text-white">${i.name}</span>
                </label>`).join("")}
            </div>
            <div id="payment-key-fields" class="form-grid form-grid-2">
              <div>
                <label class="lbl">Public / Publishable Key</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="payment_public_key" placeholder="${a.payment_public_key?"â€¢â€¢â€¢â€¢"+a.payment_public_key.slice(-4):"Paste public keyâ€¦"}">
                  ${a.payment_public_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}
                </div>
              </div>
              <div>
                <label class="lbl">Secret / Private Key</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="payment_secret_key" placeholder="${a.payment_secret_key?"â€¢â€¢â€¢â€¢"+a.payment_secret_key.slice(-4):"Paste secret keyâ€¦"}">
                  ${a.payment_secret_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}
                </div>
              </div>
              <div>
                <label class="lbl">Currency</label>
                <select class="input-field" name="payment_currency">
                  ${["USD","EUR","GBP","NGN","KES","ZAR","GHS","ZMW","TZS","UGX"].map(i=>`<option value="${i}" ${(a.payment_currency||"USD")===i?"selected":""}>${i}</option>`).join("")}
                </select>
              </div>
              <div>
                <label class="lbl">Test / Live Mode</label>
                <select class="input-field" name="payment_mode">
                  <option value="test" ${(a.payment_mode||"test")==="test"?"selected":""}>ðŸ”§ Test Mode (sandbox)</option>
                  <option value="live" ${a.payment_mode==="live"?"selected":""}>ðŸš€ Live Mode (real money)</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Webhook Secret (for payment verification)</label>
                <input type="password" class="input-field" name="payment_webhook_secret" placeholder="${a.payment_webhook_secret?"â€¢â€¢â€¢â€¢"+a.payment_webhook_secret.slice(-4):"Paste webhook secretâ€¦"}">
              </div>
            </div>
            <div class="p-3 bg-amber-500/5 border border-amber-500/15 rounded-xl text-[11px] text-amber-300">
              <strong>Flutterwave:</strong> flutterwave.com â†’ Dashboard â†’ API Settings<br>
              <strong>Stripe:</strong> dashboard.stripe.com â†’ Developers â†’ API Keys<br>
              <strong>PayPal:</strong> developer.paypal.com â†’ My Apps â†’ Create App<br>
              <strong>Paystack:</strong> dashboard.paystack.com â†’ Settings â†’ API Keys
            </div>
          </div>

          <!-- â”€â”€ Environment Variables Guide â”€â”€ -->
          <div class="glass-soft border border-gray-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-black text-white mb-3 flex items-center gap-2">
              <i data-lucide="terminal" class="w-4 h-4 text-gray-400"></i> Environment Variables (.env)
            </h3>
            <p class="text-xs text-gray-400 mb-3">Add these to your <code class="text-blue-300 bg-blue-500/10 px-1.5 py-0.5 rounded">.env</code> file in your project root (never commit to GitHub):</p>
            <div class="bg-gray-950 border border-gray-800 rounded-xl p-4 font-mono text-[11px] text-gray-300 space-y-1 overflow-x-auto">
              <p class="text-gray-600"># Supabase (required)</p>
              <p>VITE_SUPABASE_URL=<span class="text-blue-400">https://your-project.supabase.co</span></p>
              <p>VITE_SUPABASE_ANON_KEY=<span class="text-blue-400">your-anon-key</span></p>
              <p class="text-gray-600 mt-2"># Payment</p>
              <p>VITE_FLUTTERWAVE_PUBLIC_KEY=<span class="text-amber-400">FLWPUBK_TEST-â€¦</span></p>
              <p>VITE_STRIPE_PUBLIC_KEY=<span class="text-amber-400">pk_test_â€¦</span></p>
              <p class="text-gray-600 mt-2"># AI (server-side only â€” Edge Functions)</p>
              <p>GEMINI_API_KEY=<span class="text-emerald-400">AIzaSyâ€¦</span></p>
            </div>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            ðŸ’¾ Save Deploy & Payment Settings
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.saveDeploySettings=async function(e){e.preventDefault();const t=e.target?.querySelector("[type=submit]");t&&(t.disabled=!0,t.innerHTML="Savingâ€¦");const a=new FormData(e.target),i=Object.fromEntries(a.entries()),n={},o=["github_token","payment_public_key","payment_secret_key","payment_webhook_secret"];for(const[d,s]of Object.entries(i))o.includes(d)?s&&!s.startsWith("â€¢")&&s.trim()!==""&&(n[d]=s.trim()):n[d]=s;const{error:r}=await g.from("site_settings").upsert({id:1,...n});if(t&&(t.disabled=!1,t.innerHTML="ðŸ’¾ Save Deploy & Payment Settings"),r){m(r.message,"error");return}m("Deploy & payment settings saved!"),Lt()};async function Mi(e="deploy"){const{data:t}=await g.from("site_settings").select("deploy_webhook,production_url,github_repo").limit(1).maybeSingle();if(!t?.deploy_webhook)return m("No webhook URL set. Add your deploy webhook in the settings below.","info"),{ok:!1,reason:"missing_webhook"};let a=t.deploy_webhook;try{const i=new URL(a);e==="rebuild"&&i.searchParams.set("rebuild","1"),a=i.toString()}catch{e==="rebuild"&&(a+=(a.includes("?")?"&":"?")+"rebuild=1")}return{ok:!0,settings:t,hookUrl:a}}async function he(e,t={}){const a=t.version||new Date().toISOString(),i={source:"admin-dashboard",mode:t.mode||"deploy",production_url:t.productionUrl||null,github_repo:t.githubRepo||null,webhook:t.webhook||null,message:t.message||null},{data:n,error:o}=await g.from("deployment_history").insert({version:a,status:e,triggered_by_email:A.user?.email||null,metadata:i,error_message:t.errorMessage||null}).select("id").limit(1).maybeSingle();return{data:n,error:o}}function De(e,t,a,i){if(!e)return;e.disabled=t;const n=e.querySelector("p.text-xs.font-black");n&&(n.textContent=t?a:i)}window.triggerDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-deploy-btn]");De(t,!0,"Deployingâ€¦","Deploy Now");try{const a=await Mi("deploy");if(!a.ok)return;const{settings:i,hookUrl:n}=a;await he("preparing",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,message:"Deployment queued from admin UI"});const o=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"deploy",source:"admin-dashboard",at:new Date().toISOString()})});if(o.ok)m("ðŸš€ Deployment triggered! Your site will be live in ~2 minutes."),await he("deploying",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,message:"Webhook accepted deployment request"}),setTimeout(()=>Lt(),400);else{const r=`Webhook returned error: ${o.status}`;m(r,"error"),await he("failed",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,errorMessage:r})}}catch(a){m("Deploy failed: "+a.message,"error"),await he("failed",{mode:"deploy",errorMessage:a.message})}finally{De(t,!1,"Deployingâ€¦","Deploy Now")}};window.triggerRebuild=async function(e){const t=e?.currentTarget||document.querySelector("[data-rebuild-btn]");De(t,!0,"Rebuildingâ€¦","Rebuild Site");try{const a=await Mi("rebuild");if(!a.ok)return;const{settings:i,hookUrl:n}=a;await he("building",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,message:"Rebuild requested from admin UI"});const o=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"rebuild",source:"admin-dashboard",at:new Date().toISOString()})});if(o.ok)m("ðŸ”„ Rebuild triggered successfully."),await he("deploying",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,message:"Webhook accepted rebuild request"}),setTimeout(()=>Lt(),400);else{const r=`Rebuild webhook error: ${o.status}`;m(r,"error"),await he("failed",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,errorMessage:r})}}catch(a){m("Rebuild failed: "+a.message,"error"),await he("failed",{mode:"rebuild",errorMessage:a.message})}finally{De(t,!1,"Rebuildingâ€¦","Rebuild Site")}};window.publishAndDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-publish-easy-btn]");De(t,!0,"Publishingâ€¦","One-Click Publish");try{const a=document.getElementById("deploy-form");if(!a){m("Deploy form is not available. Reload and try again.","error");return}await window.saveDeploySettings({preventDefault(){},target:a}),await window.triggerDeploy()}catch(a){m("Publish failed: "+a.message,"error")}finally{De(t,!1,"Publishingâ€¦","One-Click Publish")}};window.reindexSearch=async function(){const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Reindexingâ€¦");try{const{data:i,error:n}=await g.from("showroom_listings").select("id, updated_at").order("updated_at",{ascending:!1});if(n)return X(n)?m("âš ï¸ Reindex blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):m("Could not load listings to reindex: "+n.message,"error");const o=i||[];if(!o.length){m("No listings to reindex.");return}let r=0,d=0,s=!1;const c=40;for(let u=0;u<o.length;u+=c){const p=o.slice(u,u+c),{error:y}=await g.from("showroom_listings").update({updated_at:new Date().toISOString()}).in("id",p.map(h=>h.id));y?(X(y)&&(s=!0),d+=p.length):r+=p.length,t&&(t.textContent=`Reindexingâ€¦ ${Math.min(u+c,o.length)}/${o.length}`)}if(s){m(`âš ï¸ Reindex partially blocked: database admin role rejected some writes. Re-run the admin permission migration. (${r}/${o.length} done)`,"error");return}m(`Search index rebuilt for ${r} listing${r!==1?"s":""}${d?` (${d} failed)`:""}.`,d?"error":"success")}catch(i){m("Reindex failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.syncShowroomToDB=async function(){if(!Array.isArray(ie)||!ie.length){m("No static showroom listings found to sync.","info");return}const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Syncingâ€¦");try{const{data:i,error:n}=await g.from("showroom_listings").select("property_id");if(n)return X(n)?m("âš ï¸ Sync blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):m("Could not load existing listings: "+n.message,"error");const o=new Set((i||[]).map(p=>p.property_id)),r=ie.filter(p=>p&&p.property_id&&!o.has(p.property_id));if(!r.length){m("Showroom already in sync â€” no new listings to add.");return}let d=0,s=0,c=!1;const u=20;for(let p=0;p<r.length;p+=u){const y=r.slice(p,p+u).map(b=>({property_id:b.property_id,listing_type:b.listing_type||"product",category:b.category||null,subcategory:b.subcategory||null,title:b.title||"Untitled Listing",description:b.description||"",price:parseFloat(b.price)||0,currency:b.currency||"USD",country:b.country||"",country_code:b.country_code||"",state:b.state||"",city:b.city||"",town:b.town||"",product_location:b.product_location||"",latitude:b.latitude??null,longitude:b.longitude??null,property_type:b.property_type||null,listing_status:b.listing_status||"sale",bedrooms:b.bedrooms??null,bathrooms:b.bathrooms??null,building_size:b.building_size||"",land_size:b.land_size||"",parking_spaces:b.parking_spaces??null,furnished:b.furnished||"",features:Array.isArray(b.features)?b.features:[],tags:Array.isArray(b.tags)?b.tags:[],highlights:Array.isArray(b.highlights)?b.highlights:[],seo_keywords:Array.isArray(b.seo_keywords)?b.seo_keywords:[],images:Array.isArray(b.images)?b.images:[],brand:b.brand||null,color:b.color||null,size:b.size||null,condition:b.condition||null,warranty:b.warranty||null,availability_status:b.availability_status||"In Stock",stock_quantity:b.stock_quantity!=null?parseInt(b.stock_quantity,10):null,is_active:b.is_active!==!1,is_featured:!!b.is_featured,is_ai_generated:!!b.is_ai_generated,ai_generated_fields:Array.isArray(b.ai_generated_fields)?b.ai_generated_fields:[],specifications:b.specifications||{},created_at:b.created_at||new Date().toISOString()})),{error:h}=await g.from("showroom_listings").insert(y);h?(X(h)&&(c=!0),s+=y.length):d+=y.length,t&&(t.textContent=`Syncingâ€¦ ${Math.min(p+u,r.length)}/${r.length}`)}if(c){m(`âš ï¸ Sync partially blocked: database admin role rejected some inserts. Re-run the admin permission migration. (${d}/${r.length} added)`,"error");return}m(`Showroom synced: ${d} new listing${d!==1?"s":""} added to the database${s?` (${s} failed)`:""}.`,s?"error":"success")}catch(i){m("Sync failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.testGitHubConnection=async function(){const e=document.querySelector("[name=github_username]")?.value?.trim(),t=document.querySelector("[name=github_repo]")?.value?.trim();if(!e||!t){m("Enter your GitHub username and repo name first","info");return}try{const a=await fetch(`https://api.github.com/repos/${e}/${t}`);if(a.ok){const i=await a.json();m(`âœ“ Connected: ${i.full_name} (${i.visibility})`)}else a.status===404?m("Repository not found. Check username and repo name.","error"):m("GitHub API error: "+a.status,"error")}catch{m("Could not reach GitHub API","error")}};window.deployToProduction=window.triggerDeploy;window.rebuildSite=window.triggerRebuild;const Bi=30,H={category:null,page:0,query:""};async function Ge(){const e=document.getElementById("content");if(!e)return;await Zt();const t=new Set(xt()),a=Fi();H.category||(H.category=a[0]?.slug||null);const i=0,n=H.query.trim().toLowerCase(),o=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-xl font-black text-white">Generated Catalog</h2>
        <p class="text-xs text-gray-500 mt-1">Deterministic storefront items. Hiding a listing removes it from the site everywhere â€” including direct links.</p>
      </div>
      <button onclick="catalogResetHidden()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition">Show All Hidden</button>
    </div>`,r=`
    <div class="flex flex-wrap gap-2">
      ${a.map(y=>`<button onclick="catalogSetCategory('${y.slug}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${H.category===y.slug?"bg-blue-500/20 text-blue-200 border-blue-500/40":"bg-white/5 text-gray-400 border-white/10 hover:text-white"}">${l(y.name)}</button>`).join("")}
    </div>`,d=`
    <div class="flex flex-wrap items-center gap-2">
      <input id="catalog-search-input" class="input-field flex-1 min-w-[220px]" placeholder="Search title, id or subcategoryâ€¦" value="${l(H.query)}" onkeyup="if (event.key === 'Enter') catalogSearch()">
      <button onclick="catalogSearch()" class="btn-press px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition">Search</button>
    </div>`;let s=[];const c=s.length?s.map(y=>{const h=t.has(y.property_id),b=y.images&&y.images[0]||"/fallback.svg";return`
          <div class="flex items-center gap-3 p-3 rounded-xl border ${h?"border-red-500/25 bg-red-500/5":"border-white/10 bg-white/[0.02]"}">
            <img src="${l(b)}" alt="" class="w-12 h-12 rounded-lg object-cover bg-gray-800 shrink-0" loading="lazy">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-white truncate">${l(y.title)}</p>
              <p class="text-[11px] text-gray-500 truncate">${l(y.property_id)} Â· ${l(y.subcategory||y.category||"")} Â· ${Wa(y.price,"USD")}</p>
            </div>
            ${Y(!h)}
            <button onclick="catalogToggle('${l(y.property_id)}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${h?"bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25":"bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20"}">
              ${h?"Show":"Hide"}
            </button>
          </div>`}).join(""):'<div class="text-center py-16 text-gray-500 text-sm">No catalog items match.</div>',u=n?1:Math.max(1,Math.ceil(i/Bi)),p=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="text-xs text-gray-500">${n?`${s.length} match`:`${i.toLocaleString()} items in ${l("")}`} Â· ${t.size} hidden</p>
      <div class="flex items-center gap-2">
        <button onclick="catalogPage(-1)" ${H.page<=0?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Prev</button>
        <span class="text-xs text-gray-500">Page ${H.page+1} / ${u}</span>
        <button onclick="catalogPage(1)" ${H.page>=u-1?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Next</button>
      </div>
    </div>`;e.innerHTML=`
    <div class="space-y-4 fade-in">
      ${o}
      ${r}
      ${d}
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 space-y-2">${c}</div>
      ${p}
    </div>`,window.lucide&&lucide.createIcons()}window.catalogSetCategory=function(e){H.category=e,H.page=0,H.query="",Ge()};window.catalogSearch=function(){const e=document.getElementById("catalog-search-input");H.query=e?e.value:"",H.page=0,Ge()};window.catalogPage=function(e){const a=H.query.trim()?1:Math.max(1,Math.ceil(0/Bi));H.page=Math.max(0,Math.min(a-1,H.page+e)),Ge()};window.catalogToggle=async function(e){const t=!xt().includes(e),a=await Fe(e,t);m(t?"Listing hidden from storefront":"Listing restored",a.ok?"success":"info"),Ge()};window.catalogResetHidden=async function(){await Di(),m("All hidden catalog listings restored"),Ge()};(function(){if(!(!window.history||!window.history.pushState)){try{window.history.replaceState({adminGuard:1},document.title,window.location.href),window.history.pushState({adminGuard:2},document.title,window.location.href)}catch{return}window.addEventListener("popstate",function(t){t.state&&t.state.adminGuard===1&&window.location.replace("/")})}})();async function La(){window.lucide&&lucide.createIcons(),Ka(),await kn(),g.auth.onAuthStateChange((e,t)=>{if(e==="SIGNED_OUT"){A.user=null;const a=document.getElementById("login-screen");a&&(a.style.display="flex")}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",La):La();
