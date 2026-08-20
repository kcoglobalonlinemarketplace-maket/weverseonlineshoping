/* ================================================================
   KCO GLOBAL ONLINE MARKETPLACE â€” PREMIUM HOMEPAGE ENGINE
   ================================================================ */

// ---- DATA: Countries (full global list, alphabetically sorted) ----
const COUNTRIES = [
  {code:"AF",name:"Afghanistan"},{code:"AL",name:"Albania"},{code:"DZ",name:"Algeria"},
  {code:"AS",name:"American Samoa"},{code:"AD",name:"Andorra"},{code:"AO",name:"Angola"},
  {code:"AI",name:"Anguilla"},{code:"AG",name:"Antigua and Barbuda"},{code:"AR",name:"Argentina"},
  {code:"AM",name:"Armenia"},{code:"AW",name:"Aruba"},{code:"AU",name:"Australia"},
  {code:"AT",name:"Austria"},{code:"AZ",name:"Azerbaijan"},{code:"BS",name:"Bahamas"},
  {code:"BH",name:"Bahrain"},{code:"BD",name:"Bangladesh"},{code:"BB",name:"Barbados"},
  {code:"BY",name:"Belarus"},{code:"BE",name:"Belgium"},{code:"BZ",name:"Belize"},
  {code:"BJ",name:"Benin"},{code:"BM",name:"Bermuda"},{code:"BT",name:"Bhutan"},
  {code:"BO",name:"Bolivia"},{code:"BQ",name:"Bonaire, Sint Eustatius and Saba"},
  {code:"BA",name:"Bosnia and Herzegovina"},{code:"BW",name:"Botswana"},
  {code:"BV",name:"Bouvet Island"},{code:"BR",name:"Brazil"},
  {code:"IO",name:"British Indian Ocean Territory"},{code:"VG",name:"British Virgin Islands"},
  {code:"BN",name:"Brunei"},{code:"BG",name:"Bulgaria"},{code:"BF",name:"Burkina Faso"},
  {code:"BI",name:"Burundi"},{code:"KH",name:"Cambodia"},{code:"CM",name:"Cameroon"},
  {code:"CA",name:"Canada"},{code:"CV",name:"Cape Verde"},{code:"KY",name:"Cayman Islands"},
  {code:"CF",name:"Central African Republic"},{code:"TD",name:"Chad"},
  {code:"CL",name:"Chile"},{code:"CN",name:"China"},{code:"CX",name:"Christmas Island"},
  {code:"CC",name:"Cocos (Keeling) Islands"},{code:"CO",name:"Colombia"},
  {code:"KM",name:"Comoros"},{code:"CG",name:"Republic of the Congo"},
  {code:"CD",name:"Democratic Republic of the Congo"},{code:"CK",name:"Cook Islands"},
  {code:"CR",name:"Costa Rica"},{code:"CI",name:"Ivory Coast"},{code:"HR",name:"Croatia"},
  {code:"CU",name:"Cuba"},{code:"CW",name:"CuraÃ§ao"},{code:"CY",name:"Cyprus"},
  {code:"CZ",name:"Czech Republic"},{code:"DK",name:"Denmark"},{code:"DJ",name:"Djibouti"},
  {code:"DM",name:"Dominica"},{code:"DO",name:"Dominican Republic"},{code:"EC",name:"Ecuador"},
  {code:"EG",name:"Egypt"},{code:"SV",name:"El Salvador"},{code:"GQ",name:"Equatorial Guinea"},
  {code:"ER",name:"Eritrea"},{code:"EE",name:"Estonia"},{code:"ET",name:"Ethiopia"},
  {code:"FK",name:"Falkland Islands"},{code:"FO",name:"Faroe Islands"},{code:"FJ",name:"Fiji"},
  {code:"FI",name:"Finland"},{code:"FR",name:"France"},{code:"GF",name:"French Guiana"},
  {code:"PF",name:"French Polynesia"},{code:"TF",name:"French Southern Territories"},
  {code:"GA",name:"Gabon"},{code:"GM",name:"Gambia"},{code:"GE",name:"Georgia"},
  {code:"DE",name:"Germany"},{code:"GH",name:"Ghana"},{code:"GI",name:"Gibraltar"},
  {code:"GR",name:"Greece"},{code:"GL",name:"Greenland"},{code:"GD",name:"Grenada"},
  {code:"GP",name:"Guadeloupe"},{code:"GU",name:"Guam"},{code:"GT",name:"Guatemala"},
  {code:"GG",name:"Guernsey"},{code:"GN",name:"Guinea"},{code:"GW",name:"Guinea-Bissau"},
  {code:"GY",name:"Guyana"},{code:"HT",name:"Haiti"},
  {code:"HM",name:"Heard Island and McDonald Islands"},{code:"HN",name:"Honduras"},
  {code:"HK",name:"Hong Kong"},{code:"HU",name:"Hungary"},{code:"IS",name:"Iceland"},
  {code:"IN",name:"India"},{code:"ID",name:"Indonesia"},{code:"IR",name:"Iran"},
  {code:"IQ",name:"Iraq"},{code:"IE",name:"Ireland"},{code:"IM",name:"Isle of Man"},
  {code:"IL",name:"Israel"},{code:"IT",name:"Italy"},{code:"JM",name:"Jamaica"},
  {code:"JP",name:"Japan"},{code:"JE",name:"Jersey"},{code:"JO",name:"Jordan"},
  {code:"KZ",name:"Kazakhstan"},{code:"KE",name:"Kenya"},{code:"KI",name:"Kiribati"},
  {code:"KP",name:"North Korea"},{code:"KR",name:"South Korea"},{code:"KW",name:"Kuwait"},
  {code:"KG",name:"Kyrgyzstan"},{code:"LA",name:"Laos"},{code:"LV",name:"Latvia"},
  {code:"LB",name:"Lebanon"},{code:"LS",name:"Lesotho"},{code:"LR",name:"Liberia"},
  {code:"LY",name:"Libya"},{code:"LI",name:"Liechtenstein"},{code:"LT",name:"Lithuania"},
  {code:"LU",name:"Luxembourg"},{code:"MO",name:"Macao"},{code:"MK",name:"North Macedonia"},
  {code:"MG",name:"Madagascar"},{code:"MW",name:"Malawi"},{code:"MY",name:"Malaysia"},
  {code:"MV",name:"Maldives"},{code:"ML",name:"Mali"},{code:"MT",name:"Malta"},
  {code:"MH",name:"Marshall Islands"},{code:"MQ",name:"Martinique"},{code:"MR",name:"Mauritania"},
  {code:"MU",name:"Mauritius"},{code:"YT",name:"Mayotte"},{code:"MX",name:"Mexico"},
  {code:"FM",name:"Micronesia"},{code:"MD",name:"Moldova"},{code:"MC",name:"Monaco"},
  {code:"MN",name:"Mongolia"},{code:"ME",name:"Montenegro"},{code:"MS",name:"Montserrat"},
  {code:"MA",name:"Morocco"},{code:"MZ",name:"Mozambique"},{code:"MM",name:"Myanmar"},
  {code:"NA",name:"Namibia"},{code:"NR",name:"Nauru"},{code:"NP",name:"Nepal"},
  {code:"NL",name:"Netherlands"},{code:"NC",name:"New Caledonia"},{code:"NZ",name:"New Zealand"},
  {code:"NI",name:"Nicaragua"},{code:"NE",name:"Niger"},{code:"NG",name:"Nigeria"},
  {code:"NU",name:"Niue"},{code:"NF",name:"Norfolk Island"},{code:"MP",name:"Northern Mariana Islands"},
  {code:"NO",name:"Norway"},{code:"OM",name:"Oman"},{code:"PK",name:"Pakistan"},
  {code:"PW",name:"Palau"},{code:"PS",name:"Palestine"},{code:"PA",name:"Panama"},
  {code:"PG",name:"Papua New Guinea"},{code:"PY",name:"Paraguay"},{code:"PE",name:"Peru"},
  {code:"PH",name:"Philippines"},{code:"PN",name:"Pitcairn Islands"},{code:"PL",name:"Poland"},
  {code:"PT",name:"Portugal"},{code:"PR",name:"Puerto Rico"},{code:"QA",name:"Qatar"},
  {code:"RE",name:"RÃ©union"},{code:"RO",name:"Romania"},{code:"RU",name:"Russia"},
  {code:"RW",name:"Rwanda"},{code:"BL",name:"Saint BarthÃ©lemy"},
  {code:"SH",name:"Saint Helena"},{code:"KN",name:"Saint Kitts and Nevis"},
  {code:"LC",name:"Saint Lucia"},{code:"MF",name:"Saint Martin (French)"},
  {code:"PM",name:"Saint Pierre and Miquelon"},
  {code:"VC",name:"Saint Vincent and the Grenadines"},{code:"WS",name:"Samoa"},
  {code:"SM",name:"San Marino"},{code:"ST",name:"SÃ£o TomÃ© and PrÃ­ncipe"},
  {code:"SA",name:"Saudi Arabia"},{code:"SN",name:"Senegal"},{code:"RS",name:"Serbia"},
  {code:"SC",name:"Seychelles"},{code:"SL",name:"Sierra Leone"},{code:"SG",name:"Singapore"},
  {code:"SX",name:"Sint Maarten"},{code:"SK",name:"Slovakia"},{code:"SI",name:"Slovenia"},
  {code:"SB",name:"Solomon Islands"},{code:"SO",name:"Somalia"},{code:"ZA",name:"South Africa"},
  {code:"GS",name:"South Georgia and the South Sandwich Islands"},
  {code:"SS",name:"South Sudan"},{code:"ES",name:"Spain"},{code:"LK",name:"Sri Lanka"},
  {code:"SD",name:"Sudan"},{code:"SR",name:"Suriname"},{code:"SJ",name:"Svalbard and Jan Mayen"},
  {code:"SZ",name:"Eswatini"},{code:"SE",name:"Sweden"},{code:"CH",name:"Switzerland"},
  {code:"SY",name:"Syria"},{code:"TW",name:"Taiwan"},{code:"TJ",name:"Tajikistan"},
  {code:"TZ",name:"Tanzania"},{code:"TH",name:"Thailand"},{code:"TL",name:"Timor-Leste"},
  {code:"TG",name:"Togo"},{code:"TK",name:"Tokelau"},{code:"TO",name:"Tonga"},
  {code:"TT",name:"Trinidad and Tobago"},{code:"TN",name:"Tunisia"},{code:"TR",name:"Turkey"},
  {code:"TM",name:"Turkmenistan"},{code:"TC",name:"Turks and Caicos Islands"},
  {code:"TV",name:"Tuvalu"},{code:"UG",name:"Uganda"},{code:"UA",name:"Ukraine"},
  {code:"AE",name:"United Arab Emirates"},{code:"GB",name:"United Kingdom"},
  {code:"US",name:"United States"},{code:"UM",name:"United States Minor Outlying Islands"},
  {code:"UY",name:"Uruguay"},{code:"UZ",name:"Uzbekistan"},{code:"VU",name:"Vanuatu"},
  {code:"VA",name:"Vatican City"},{code:"VE",name:"Venezuela"},{code:"VN",name:"Vietnam"},
  {code:"VI",name:"United States Virgin Islands"},{code:"WF",name:"Wallis and Futuna"},
  {code:"EH",name:"Western Sahara"},{code:"YE",name:"Yemen"},{code:"ZM",name:"Zambia"},
  {code:"ZW",name:"Zimbabwe"},{code:"AX",name:"Ã…land Islands"},{code:"AQ",name:"Antarctica"},
];

const LANGUAGES = [
  {code:"aa",name:"Afar"},{code:"ab",name:"Abkhazian"},{code:"af",name:"Afrikaans"},
  {code:"ak",name:"Akan"},{code:"am",name:"Amharic"},{code:"ar",name:"Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"},
  {code:"as",name:"Assamese"},{code:"az",name:"AzÉ™rbaycan"},{code:"ba",name:"Bashkir"},
  {code:"be",name:"Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÐºÐ°Ñ"},{code:"bg",name:"Ð‘ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸"},{code:"bm",name:"Bambara"},
  {code:"bn",name:"à¦¬à¦¾à¦‚à¦²à¦¾"},{code:"bo",name:"à½–à½¼à½‘à¼‹à½¦à¾à½‘"},{code:"br",name:"Breton"},
  {code:"bs",name:"Bosanski"},{code:"ca",name:"CatalÃ "},{code:"ce",name:"Chechen"},
  {code:"cs",name:"ÄŒeÅ¡tina"},{code:"cy",name:"Cymraeg"},{code:"da",name:"Dansk"},
  {code:"de",name:"Deutsch"},{code:"dv",name:"Dhivehi"},{code:"dz",name:"Dzongkha"},
  {code:"ee",name:"Ewe"},{code:"el",name:"Î•Î»Î»Î·Î½Î¹ÎºÎ¬"},{code:"en",name:"English"},
  {code:"eo",name:"Esperanto"},{code:"es",name:"EspaÃ±ol"},{code:"et",name:"Eesti"},
  {code:"eu",name:"Euskara"},{code:"fa",name:"ÙØ§Ø±Ø³ÛŒ"},{code:"ff",name:"Fulah"},
  {code:"fi",name:"Suomi"},{code:"fo",name:"FÃ¸royskt"},{code:"fr",name:"FranÃ§ais"},
  {code:"fy",name:"Frysk"},{code:"ga",name:"Gaeilge"},{code:"gd",name:"GÃ idhlig"},
  {code:"gl",name:"Galego"},{code:"gn",name:"Guarani"},{code:"gu",name:"àª—à«àªœàª°àª¾àª¤à«€"},
  {code:"gv",name:"Gaelg"},{code:"ha",name:"Hausa"},{code:"he",name:"×¢×‘×¨×™×ª"},
  {code:"hi",name:"à¤¹à¤¿à¤¨à¥à¤¦à¥€"},{code:"hr",name:"Hrvatski"},{code:"hu",name:"Magyar"},
  {code:"hy",name:"Õ€Õ¡ÕµÕ¥Ö€Õ¥Õ¶"},{code:"ia",name:"Interlingua"},{code:"id",name:"Bahasa Indonesia"},
  {code:"ig",name:"Igbo"},{code:"is",name:"Ãslenska"},{code:"it",name:"Italiano"},
  {code:"iu",name:"Inuktitut"},{code:"ja",name:"æ—¥æœ¬èªž"},{code:"jv",name:"Basa Jawa"},
  {code:"ka",name:"áƒ¥áƒáƒ áƒ—áƒ£áƒšáƒ˜"},{code:"kk",name:"ÒšÐ°Ð·Ð°Ò›"},{code:"kl",name:"Kalaallisut"},
  {code:"km",name:"ážáŸ’áž˜áŸ‚ážš"},{code:"kn",name:"à²•à²¨à³à²¨à²¡"},{code:"ko",name:"í•œêµ­ì–´"},
  {code:"ks",name:"à¤•à¤¶à¥à¤®à¥€à¤°à¥€"},{code:"ku",name:"KurdÃ®"},{code:"kw",name:"Kernewek"},
  {code:"ky",name:"ÐšÑ‹Ñ€Ð³Ñ‹Ð·Ñ‡Ð°"},{code:"la",name:"Latina"},{code:"lb",name:"LÃ«tzebuergesch"},
  {code:"lg",name:"Luganda"},{code:"ln",name:"Lingala"},{code:"lo",name:"àº¥àº²àº§"},
  {code:"lt",name:"LietuviÅ³"},{code:"lv",name:"LatvieÅ¡u"},{code:"mg",name:"Malagasy"},
  {code:"mi",name:"MÄori"},{code:"mk",name:"ÐœÐ°ÐºÐµÐ´Ð¾Ð½ÑÐºÐ¸"},{code:"ml",name:"à´®à´²à´¯à´¾à´³à´‚"},
  {code:"mn",name:"ÐœÐ¾Ð½Ð³Ð¾Ð»"},{code:"mr",name:"à¤®à¤°à¤¾à¤ à¥€"},{code:"ms",name:"Bahasa Melayu"},
  {code:"mt",name:"Malti"},{code:"my",name:"á€—á€™á€¬"},{code:"ne",name:"à¤¨à¥‡à¤ªà¤¾à¤²à¥€"},
  {code:"nl",name:"Nederlands"},{code:"nn",name:"Nynorsk"},{code:"no",name:"Norsk"},
  {code:"nr",name:"isiNdebele"},{code:"ny",name:"Chichewa"},{code:"oc",name:"Occitan"},
  {code:"om",name:"Oromoo"},{code:"or",name:"à¬“à¬¡à¬¼à¬¿à¬†"},{code:"os",name:"Ð˜Ñ€Ð¾Ð½"},
  {code:"pa",name:"à¨ªà©°à¨œà¨¾à¨¬à©€"},{code:"pl",name:"Polski"},{code:"ps",name:"Ù¾ÚšØªÙˆ"},
  {code:"pt",name:"PortuguÃªs"},{code:"qu",name:"Runa Simi"},{code:"rm",name:"Rumantsch"},
  {code:"rn",name:"Kirundi"},{code:"ro",name:"RomÃ¢nÄƒ"},{code:"ru",name:"Ð ÑƒÑÑÐºÐ¸Ð¹"},
  {code:"rw",name:"Kinyarwanda"},{code:"sa",name:"à¤¸à¤‚à¤¸à¥à¤•à¥ƒà¤¤"},{code:"sc",name:"Sardu"},
  {code:"sd",name:"Ø³Ù†ÚŒÙŠ"},{code:"se",name:"SÃ¡megiella"},{code:"sg",name:"SÃ¤ngÃ¶"},
  {code:"si",name:"à·ƒà·’à¶‚à·„à¶½"},{code:"sk",name:"SlovenÄina"},{code:"sl",name:"SlovenÅ¡Äina"},
  {code:"sn",name:"chiShona"},{code:"so",name:"Soomaali"},{code:"sq",name:"Shqip"},
  {code:"sr",name:"Ð¡Ñ€Ð¿ÑÐºÐ¸"},{code:"ss",name:"SiSwati"},{code:"st",name:"Sesotho"},
  {code:"su",name:"Basa Sunda"},{code:"sv",name:"Svenska"},{code:"sw",name:"Kiswahili"},
  {code:"ta",name:"à®¤à®®à®¿à®´à¯"},{code:"te",name:"à°¤à±†à°²à±à°—à±"},{code:"tg",name:"Ð¢Ð¾Ò·Ð¸ÐºÓ£"},
  {code:"th",name:"à¹„à¸—à¸¢"},{code:"ti",name:"á‰µáŒáˆ­áŠ›"},{code:"tk",name:"TÃ¼rkmen"},
  {code:"tl",name:"Filipino"},{code:"tn",name:"Setswana"},{code:"to",name:"Lea Faka-Tonga"},
  {code:"tr",name:"TÃ¼rkÃ§e"},{code:"ts",name:"Xitsonga"},{code:"tt",name:"Ð¢Ð°Ñ‚Ð°Ñ€"},
  {code:"ty",name:"Reo Tahiti"},{code:"ug",name:"Ø¦Û‡ÙŠØºÛ‡Ø±Ú†Û•"},{code:"uk",name:"Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°"},
  {code:"ur",name:"Ø§Ø±Ø¯Ùˆ"},{code:"uz",name:"OÊ»zbek"},{code:"ve",name:"Tshivená¸“a"},
  {code:"vi",name:"Tiáº¿ng Viá»‡t"},{code:"wa",name:"Walon"},{code:"wo",name:"Wolof"},
  {code:"xh",name:"isiXhosa"},{code:"yi",name:"×™×™Ö´×“×™×©"},{code:"yo",name:"YorÃ¹bÃ¡"},
  {code:"zh",name:"ä¸­æ–‡"},{code:"zu",name:"isiZulu"},
];

// ---- DATA: Categories ----
const CATEGORIES = [
  {name:"All",icon:"layout-grid",color:"blue"},
  {name:"Women",icon:"shopping-bag",color:"pink"},{name:"Men",icon:"shirt",color:"blue"},{name:"Kids",icon:"baby",color:"amber"},
  {name:"Home",icon:"home",color:"emerald"},{name:"Sports",icon:"dumbbell",color:"lime"},{name:"Jewellery",icon:"gem",color:"cyan"},
  {name:"Electronics",icon:"circuit-board",color:"sky"},{name:"Cars",icon:"car",color:"red"},{name:"Motorcycles",icon:"motorcycle",color:"blue"},
  {name:"Phones",icon:"smartphone",color:"violet"},{name:"Computers",icon:"laptop",color:"indigo"},{name:"Furniture",icon:"armchair",color:"teal"},
  {name:"Beauty",icon:"sparkles",color:"rose"},{name:"Fashion",icon:"scissors",color:"fuchsia"},{name:"Real Estate",icon:"building-2",color:"slate"},
  {name:"Bicycles",icon:"bike",color:"green"},{name:"Trucks",icon:"truck",color:"yellow"},{name:"Land",icon:"map-pin",color:"lime"},
  {name:"Kitchen",icon:"cooking-pot",color:"blue"},{name:"Food",icon:"shopping-basket",color:"emerald"},{name:"Pets",icon:"paw-print",color:"brown"},
  {name:"Books",icon:"book-open",color:"blue"},{name:"Toys",icon:"gamepad-2",color:"purple"},{name:"Services",icon:"wrench",color:"gray"},
];

// Tailwind color class maps for category accents (text + bg + border + glow)
const CAT_COLORS = {
  blue:{text:"text-blue-600",bg:"from-blue-100",to:"to-blue-50",border:"border-blue-200",glow:"0 0 18px rgba(59,130,246,0.2)",hoverBorder:"hover:border-blue-400"},
  pink:{text:"text-pink-600",bg:"from-pink-100",to:"to-pink-50",border:"border-pink-200",glow:"0 0 18px rgba(236,72,153,0.2)",hoverBorder:"hover:border-pink-400"},
  amber:{text:"text-amber-600",bg:"from-amber-100",to:"to-amber-50",border:"border-amber-200",glow:"0 0 18px rgba(245,158,11,0.2)",hoverBorder:"hover:border-amber-400"},
  emerald:{text:"text-emerald-600",bg:"from-emerald-100",to:"to-emerald-50",border:"border-emerald-200",glow:"0 0 18px rgba(16,185,129,0.2)",hoverBorder:"hover:border-emerald-400"},
  lime:{text:"text-lime-600",bg:"from-lime-100",to:"to-lime-50",border:"border-lime-200",glow:"0 0 18px rgba(132,204,22,0.2)",hoverBorder:"hover:border-lime-400"},
  cyan:{text:"text-cyan-600",bg:"from-cyan-100",to:"to-cyan-50",border:"border-cyan-200",glow:"0 0 18px rgba(34,211,238,0.2)",hoverBorder:"hover:border-cyan-400"},
  sky:{text:"text-sky-600",bg:"from-sky-100",to:"to-sky-50",border:"border-sky-200",glow:"0 0 18px rgba(14,165,233,0.2)",hoverBorder:"hover:border-sky-400"},
  red:{text:"text-red-600",bg:"from-red-100",to:"to-red-50",border:"border-red-200",glow:"0 0 18px rgba(239,68,68,0.2)",hoverBorder:"hover:border-red-400"},
  violet:{text:"text-violet-600",bg:"from-violet-100",to:"to-violet-50",border:"border-violet-200",glow:"0 0 18px rgba(139,92,246,0.2)",hoverBorder:"hover:border-violet-400"},
  indigo:{text:"text-indigo-600",bg:"from-indigo-100",to:"to-indigo-50",border:"border-indigo-200",glow:"0 0 18px rgba(99,102,241,0.2)",hoverBorder:"hover:border-indigo-400"},
  teal:{text:"text-teal-600",bg:"from-teal-100",to:"to-teal-50",border:"border-teal-200",glow:"0 0 18px rgba(20,184,166,0.2)",hoverBorder:"hover:border-teal-400"},
  rose:{text:"text-rose-600",bg:"from-rose-100",to:"to-rose-50",border:"border-rose-200",glow:"0 0 18px rgba(244,63,94,0.2)",hoverBorder:"hover:border-rose-400"},
  fuchsia:{text:"text-fuchsia-600",bg:"from-fuchsia-100",to:"to-fuchsia-50",border:"border-fuchsia-200",glow:"0 0 18px rgba(217,70,239,0.2)",hoverBorder:"hover:border-fuchsia-400"},
  slate:{text:"text-slate-600",bg:"from-slate-200",to:"to-slate-100",border:"border-slate-300",glow:"0 0 18px rgba(148,163,184,0.2)",hoverBorder:"hover:border-slate-400"},
  green:{text:"text-green-600",bg:"from-green-100",to:"to-green-50",border:"border-green-200",glow:"0 0 18px rgba(34,197,94,0.2)",hoverBorder:"hover:border-green-400"},
  yellow:{text:"text-yellow-600",bg:"from-yellow-100",to:"to-yellow-50",border:"border-yellow-200",glow:"0 0 18px rgba(234,179,8,0.2)",hoverBorder:"hover:border-yellow-400"},
  brown:{text:"text-amber-700",bg:"from-amber-100",to:"to-amber-50",border:"border-amber-300",glow:"0 0 18px rgba(180,83,9,0.2)",hoverBorder:"hover:border-amber-400"},
  purple:{text:"text-purple-600",bg:"from-purple-100",to:"to-purple-50",border:"border-purple-200",glow:"0 0 18px rgba(168,85,247,0.2)",hoverBorder:"hover:border-purple-400"},
  gray:{text:"text-gray-600",bg:"from-gray-100",to:"to-gray-50",border:"border-gray-300",glow:"0 0 18px rgba(156,163,175,0.2)",hoverBorder:"hover:border-gray-400"},
};

// ---- DATA: Search Suggestions ----
const SEARCH_SUGGESTIONS = [
  "Luxury Hypercars","Sports Cars","SUVs","Motorhomes","Trucks","Delivery Trucks",
  "Luxury Houses","Family Houses","Beach Houses","Smart Homes","Villas","Mansions",
  "Apartments","Luxury Apartments","Commercial Buildings","Hotels","Resorts",
  "Men's Fashion","Women's Fashion","Baby Clothes","Baby Products","Shoes",
  "Luxury Watches","Gold Jewelry","Diamond Jewelry","Luxury Handbags",
  "Beauty Products","Perfumes","Cosmetics","iPhone","Samsung Galaxy","Google Pixel",
  "Gaming Laptops","Desktop Computers","Smart TVs","Electronics","Furniture",
  "Home Appliances","Gaming Accessories","Sports Equipment","Food Markets",
  "Fresh Vegetables","Supermarkets","Restaurants","Travel","Tourism",
  "Agriculture","Construction Equipment","Health Products","Fitness Equipment",
  "Toys","Books","Pet Supplies","DHL Shipping","FedEx Delivery","UPS Worldwide",
  "Aramex Logistics","Cargo Ships","Delivery Aircraft","Warehouses","Distribution Centers",
];

// ---- DATA: Holiday Engine ----
const HOLIDAYS = {
  US:[{date:"01-01",name:"New Year's Day"},{date:"07-04",name:"Independence Day"},{date:"11-11",name:"Veterans Day"},{date:"11-28",name:"Thanksgiving Day"},{date:"12-25",name:"Christmas Day"}],
  GB:[{date:"01-01",name:"New Year's Day"},{date:"12-26",name:"Boxing Day"},{date:"11-05",name:"Guy Fawkes Night"},{date:"12-25",name:"Christmas Day"}],
  JP:[{date:"01-01",name:"New Year (Shogatsu)"},{date:"04-29",name:"Golden Week Begins"},{date:"05-03",name:"Constitution Day"},{date:"05-04",name:"Greenery Day"},{date:"05-05",name:"Children's Day"},{date:"11-03",name:"Culture Day"},{date:"12-23",name:"Emperor's Birthday"}],
  DE:[{date:"01-01",name:"Neujahr"},{date:"10-03",name:"Tag der Deutschen Einheit"},{date:"12-25",name:"Erster Weihnachtstag"},{date:"12-26",name:"Zweiter Weihnachtstag"}],
  FR:[{date:"01-01",name:"Jour de l'An"},{date:"07-14",name:"FÃªte Nationale"},{date:"11-11",name:"Armistice Day"},{date:"12-25",name:"NoÃ«l"}],
  CN:[{date:"01-01",name:"New Year's Day"},{date:"02-10",name:"Spring Festival"},{date:"10-01",name:"National Day"},{date:"12-25",name:"Christmas"}],
  IN:[{date:"01-01",name:"New Year's Day"},{date:"01-26",name:"Republic Day"},{date:"08-15",name:"Independence Day"},{date:"10-02",name:"Gandhi Jayanti"},{date:"11-01",name:"Diwali"}],
  BR:[{date:"01-01",name:"Ano Novo"},{date:"09-07",name:"IndependÃªncia"},{date:"12-25",name:"Natal"}],
  AE:[{date:"01-01",name:"New Year's Day"},{date:"12-02",name:"National Day"},{date:"12-03",name:"National Day Holiday"}],
  CA:[{date:"01-01",name:"New Year's Day"},{date:"07-01",name:"Canada Day"},{date:"11-11",name:"Remembrance Day"},{date:"12-25",name:"Christmas Day"},{date:"12-26",name:"Boxing Day"}],
  AU:[{date:"01-01",name:"New Year's Day"},{date:"01-26",name:"Australia Day"},{date:"12-25",name:"Christmas Day"},{date:"12-26",name:"Boxing Day"}],
  NG:[{date:"01-01",name:"New Year's Day"},{date:"10-01",name:"Independence Day"},{date:"12-25",name:"Christmas Day"}],
  ZA:[{date:"01-01",name:"New Year's Day"},{date:"04-27",name:"Freedom Day"},{date:"12-16",name:"Day of Reconciliation"},{date:"12-25",name:"Christmas Day"}],
  MX:[{date:"01-01",name:"AÃ±o Nuevo"},{date:"09-16",name:"DÃ­a de la Independencia"},{date:"11-02",name:"DÃ­a de los Muertos"},{date:"12-25",name:"Navidad"}],
  IT:[{date:"01-01",name:"Capodanno"},{date:"06-02",name:"Festa della Repubblica"},{date:"12-25",name:"Natale"}],
  ES:[{date:"01-01",name:"AÃ±o Nuevo"},{date:"10-12",name:"Fiesta Nacional"},{date:"12-25",name:"Navidad"}],
  SA:[{date:"02-22",name:"Founding Day"},{date:"09-23",name:"Saudi National Day"}],
  KR:[{date:"01-01",name:"New Year's Day"},{date:"03-01",name:"Samiljeol"},{date:"08-15",name:"Gwangbokjeol"},{date:"10-03",name:"Gaecheonjeol"}],
  EG:[{date:"01-01",name:"New Year's Day"},{date:"07-23",name:"Revolution Day"},{date:"10-06",name:"Armed Forces Day"}],
  RU:[{date:"01-01",name:"New Year's Day"},{date:"06-12",name:"Day of Russia"},{date:"11-04",name:"Unity Day"}],
};

// ---- DATA: Ad Copy Dictionary ----
const AD_COPY = {
  en:{shopNow:"Shop Collection",explore:"Explore Category",learnMore:"Learn More",worldwide:"Worldwide Shipping",worldwideSub:"200+ countries served",delivery:"Fast Delivery",deliverySub:"Express options available",secure:"Secure Shopping",secureSub:"SSL encrypted checkout",support:"24/7 Customer Support",supportSub:"Always here for you"},
  es:{shopNow:"Comprar ColecciÃ³n",explore:"Explorar CategorÃ­a",learnMore:"MÃ¡s InformaciÃ³n",worldwide:"EnvÃ­o Mundial",worldwideSub:"200+ paÃ­ses atendidos",delivery:"Entrega RÃ¡pida",deliverySub:"Opciones exprÃ©s disponibles",secure:"Compra Segura",secureSub:"Pago cifrado SSL",support:"Soporte 24/7",supportSub:"Siempre aquÃ­ para ti"},
  fr:{shopNow:"Acheter Collection",explore:"Explorer CatÃ©gorie",learnMore:"En Savoir Plus",worldwide:"Livraison Mondiale",worldwideSub:"200+ pays desservis",delivery:"Livraison Rapide",deliverySub:"Options express disponibles",secure:"Achat SÃ©curisÃ©",secureSub:"Paiement chiffrÃ© SSL",support:"Support 24/7",supportSub:"Toujours lÃ  pour vous"},
  de:{shopNow:"Kollektion Kaufen",explore:"Kategorie Entdecken",learnMore:"Mehr Erfahren",worldwide:"Weltweiter Versand",worldwideSub:"200+ LÃ¤nder bedient",delivery:"Schnelle Lieferung",deliverySub:"Express-Optionen verfÃ¼gbar",secure:"Sicheres Einkaufen",secureSub:"SSL-verschlÃ¼sselte Kasse",support:"24/7 Kundenservice",supportSub:"Immer fÃ¼r Sie da"},
  ja:{shopNow:"ã‚³ãƒ¬ã‚¯ã‚·ãƒ§ãƒ³ã‚’è¦‹ã‚‹",explore:"ã‚«ãƒ†ã‚´ãƒªãƒ¼ã‚’æŽ¢ã‚‹",learnMore:"è©³ç´°ã‚’è¦‹ã‚‹",worldwide:"ä¸–ç•Œä¸­ã®é…é€",worldwideSub:"200ã‚«å›½ä»¥ä¸Šã«å¯¾å¿œ",delivery:"é«˜é€Ÿé…é€",deliverySub:"ã‚¨ã‚¯ã‚¹ãƒ—ãƒ¬ã‚¹ã‚ªãƒ—ã‚·ãƒ§ãƒ³",secure:"å®‰å…¨ãªã‚·ãƒ§ãƒƒãƒ”ãƒ³ã‚°",secureSub:"SSLæš—å·åŒ–æ±ºæ¸ˆ",support:"24æ™‚é–“ã‚µãƒãƒ¼ãƒˆ",supportSub:"ã„ã¤ã‚‚ãã°ã«"},
  ar:{shopNow:"ØªØ³ÙˆÙ‚ Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø©",explore:"Ø§Ø³ØªÙƒØ´Ù Ø§Ù„ÙØ¦Ø©",learnMore:"Ø§Ø¹Ø±Ù Ø§Ù„Ù…Ø²ÙŠØ¯",worldwide:"Ø´Ø­Ù† Ø¹Ø§Ù„Ù…ÙŠ",worldwideSub:"Ø£ÙƒØ«Ø± Ù…Ù† 200 Ø¯ÙˆÙ„Ø©",delivery:"ØªÙˆØµÙŠÙ„ Ø³Ø±ÙŠØ¹",deliverySub:"Ø®ÙŠØ§Ø±Ø§Øª Ø³Ø±ÙŠØ¹Ø©",secure:"ØªØ³ÙˆÙ‚ Ø¢Ù…Ù†",secureSub:"Ø¯ÙØ¹ Ù…Ø´ÙØ± SSL",support:"Ø¯Ø¹Ù… 24/7",supportSub:"Ù†Ø­Ù† Ù‡Ù†Ø§ Ø¯Ø§Ø¦Ù…Ø§Ù‹"},
  zh:{shopNow:"é€‰è´­ç³»åˆ—",explore:"æŽ¢ç´¢ç±»åˆ«",learnMore:"äº†è§£æ›´å¤š",worldwide:"å…¨çƒé…é€",worldwideSub:"æœåŠ¡200+å›½å®¶",delivery:"å¿«é€Ÿé…é€",deliverySub:"æä¾›åŠ æ€¥é€‰é¡¹",secure:"å®‰å…¨è´­ç‰©",secureSub:"SSLåŠ å¯†ç»“ç®—",support:"24/7å®¢æœ",supportSub:"éšæ—¶ä¸ºæ‚¨æœåŠ¡"},
  pt:{shopNow:"Comprar ColeÃ§Ã£o",explore:"Explorar Categoria",learnMore:"Saber Mais",worldwide:"Envio Mundial",worldwideSub:"200+ paÃ­ses atendidos",delivery:"Entrega RÃ¡pida",deliverySub:"OpÃ§Ãµes express disponÃ­veis",secure:"Compra Segura",secureSub:"Pagamento criptografado SSL",support:"Suporte 24/7",supportSub:"Sempre aqui para vocÃª"},
  ru:{shopNow:"ÐšÑƒÐ¿Ð¸Ñ‚ÑŒ ÐšÐ¾Ð»Ð»ÐµÐºÑ†Ð¸ÑŽ",explore:"Ð˜ÑÑÐ»ÐµÐ´Ð¾Ð²Ð°Ñ‚ÑŒ ÐšÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸ÑŽ",learnMore:"Ð£Ð·Ð½Ð°Ñ‚ÑŒ Ð‘Ð¾Ð»ÑŒÑˆÐµ",worldwide:"Ð”Ð¾ÑÑ‚Ð°Ð²ÐºÐ° Ð¿Ð¾ Ð²ÑÐµÐ¼Ñƒ Ð¼Ð¸Ñ€Ñƒ",worldwideSub:"200+ ÑÑ‚Ñ€Ð°Ð½",delivery:"Ð‘Ñ‹ÑÑ‚Ñ€Ð°Ñ Ð´Ð¾ÑÑ‚Ð°Ð²ÐºÐ°",deliverySub:"Ð­ÐºÑÐ¿Ñ€ÐµÑÑ-Ð¾Ð¿Ñ†Ð¸Ð¸",secure:"Ð‘ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ñ‹Ðµ Ð¿Ð¾ÐºÑƒÐ¿ÐºÐ¸",secureSub:"SSL-ÑˆÐ¸Ñ„Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ",support:"ÐŸÐ¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ° 24/7",supportSub:"Ð’ÑÐµÐ³Ð´Ð° Ð´Ð»Ñ Ð²Ð°Ñ"},
  hi:{shopNow:"à¤¸à¤‚à¤—à¥à¤°à¤¹ à¤–à¤°à¥€à¤¦à¥‡à¤‚",explore:"à¤¶à¥à¤°à¥‡à¤£à¥€ à¤¦à¥‡à¤–à¥‡à¤‚",learnMore:"à¤”à¤° à¤œà¤¾à¤¨à¥‡à¤‚",worldwide:"à¤µà¤¿à¤¶à¥à¤µà¤µà¥à¤¯à¤¾à¤ªà¥€ à¤¶à¤¿à¤ªà¤¿à¤‚à¤—",worldwideSub:"200+ à¤¦à¥‡à¤¶à¥‹à¤‚ à¤®à¥‡à¤‚ à¤¸à¥‡à¤µà¤¾",delivery:"à¤¤à¥‡à¤œ à¤¡à¤¿à¤²à¥€à¤µà¤°à¥€",deliverySub:"à¤à¤•à¥à¤¸à¤ªà¥à¤°à¥‡à¤¸ à¤µà¤¿à¤•à¤²à¥à¤ª",secure:"à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤–à¤°à¥€à¤¦",secureSub:"SSL à¤à¤¨à¥à¤•à¥à¤°à¤¿à¤ªà¥à¤Ÿà¥‡à¤¡ à¤šà¥‡à¤•à¤†à¤‰à¤Ÿ",support:"24/7 à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾",supportSub:"à¤¹à¤®à¥‡à¤¶à¤¾ à¤†à¤ªà¤•à¥‡ à¤²à¤¿à¤"},
};

// ---- DATA: Carousel Video Slides ----
// All categories in a single hero carousel â€” real Pexels stock videos
// Brand: Weverse Online Shop
const V = "https://videos.pexels.com/video-files/";
const BRAND = "Weverse Online Shop";
const CAROUSEL_SLIDES = [
  // === TRANSPORTATION & LOGISTICS ===
  {video:V+"6618332/6618332-sd_640_360_24fps.mp4",badge:"Global Logistics",titles:{en:BRAND+" \u2013 Global Logistics & Shipping"},descs:{en:"DHL, FedEx, UPS & Aramex \u2014 delivering across 200+ countries with cargo ships, aircraft, and distribution hubs."}},
  {video:V+"3058057/3058057-sd_640_360_30fps.mp4",badge:"Maritime Cargo",titles:{en:BRAND+" \u2013 Cargo Ships & Ports"},descs:{en:"Massive container ships and busy port terminals keep global trade moving day and night."}},
  {video:V+"4324104/4324104-sd_640_360_24fps.mp4",badge:"Delivery Fleet",titles:{en:BRAND+" \u2013 Delivery Trucks & Last-Mile"},descs:{en:"From warehouse to doorstep \u2014 fleet management, courier services, and last-mile delivery worldwide."}},
  {video:V+"3289608/3289608-sd_640_360_24fps.mp4",badge:"Smart Warehousing",titles:{en:BRAND+" \u2013 Warehouses & Distribution"},descs:{en:"Smart warehousing, freight forwarding, customs clearance, and cold chain logistics for global commerce."}},
  {video:V+"31559829/13450487_640_360_60fps.mp4",badge:"Freight & Cargo",titles:{en:BRAND+" \u2013 Air Cargo & Sea Freight"},descs:{en:"Express air cargo, sea freight, rail freight, and shipping containers moving goods across continents."}},
  // === REAL ESTATE \u2014 INDIVIDUAL CATEGORIES ===
  {video:V+"30216905/12955636_640_360_60fps.mp4",badge:"Luxury Houses",titles:{en:BRAND+" \u2013 Luxury Houses"},descs:{en:"Discover stunning luxury houses with premium architecture, private pools, and breathtaking views worldwide."}},
  {video:V+"18531289/18531289-sd_640_360_30fps.mp4",badge:"Family Houses",titles:{en:BRAND+" \u2013 Family Houses"},descs:{en:"Spacious family houses designed for comfort \u2014 multiple bedrooms, modern kitchens, and safe neighborhoods."}},
  {video:V+"17692984/17692984-sd_640_360_30fps.mp4",badge:"Beach Houses",titles:{en:BRAND+" \u2013 Beach Houses"},descs:{en:"Wake up to ocean views in beautiful beach houses along the world's most stunning coastlines."}},
  {video:V+"16998369/16998369-sd_640_360_30fps.mp4",badge:"Waterfront Homes",titles:{en:BRAND+" \u2013 Waterfront Homes"},descs:{en:"Premium waterfront properties with private docks, lake access, and panoramic water views."}},
  {video:V+"11329982/11329982-sd_640_360_30fps.mp4",badge:"Luxury Villas",titles:{en:BRAND+" \u2013 Luxury Villas"},descs:{en:"Exclusive luxury villas featuring private pools, gardens, and world-class amenities in prime destinations."}},
  {video:V+"27690869/12206171_640_360_30fps.mp4",badge:"Mansions",titles:{en:BRAND+" \u2013 Mansions"},descs:{en:"Grand mansions and estates with expansive grounds, luxury interiors, and unparalleled prestige."}},
  {video:V+"14408658/14408658-sd_640_360_30fps.mp4",badge:"Smart Homes",titles:{en:BRAND+" \u2013 Smart Homes"},descs:{en:"Connected smart homes with automated lighting, security, climate control, and smart living technology."}},
  {video:V+"30216901/12955687_640_360_60fps.mp4",badge:"Apartments",titles:{en:BRAND+" \u2013 Apartments"},descs:{en:"Modern apartments in prime city locations with contemporary design and premium amenities."}},
  {video:V+"30203752/12951125_640_360_60fps.mp4",badge:"Luxury Apartments",titles:{en:BRAND+" \u2013 Luxury Apartments"},descs:{en:"High-end luxury apartments with concierge services, rooftop terraces, and spectacular city views."}},
  {video:V+"12525959/12525959-sd_640_360_30fps.mp4",badge:"Penthouses",titles:{en:BRAND+" \u2013 Penthouses"},descs:{en:"Exclusive penthouses occupying the top floors of luxury towers with private elevators and panoramic vistas."}},
  {video:V+"8435818/8435818-sd_640_360_30fps.mp4",badge:"Duplexes",titles:{en:BRAND+" \u2013 Duplexes"},descs:{en:"Spacious duplexes offering two levels of elegant living with modern layouts and private entrances."}},
  {video:V+"9700254/9700254-sd_640_360_30fps.mp4",badge:"Townhouses",titles:{en:BRAND+" \u2013 Townhouses"},descs:{en:"Charming townhouses in vibrant communities with shared amenities and urban convenience."}},
  {video:V+"30216893/12955642_640_360_60fps.mp4",badge:"Farm Houses",titles:{en:BRAND+" \u2013 Farm Houses"},descs:{en:"Rustic farm houses with acreage, barns, and pastoral settings for country living and agriculture."}},
  {video:V+"17692989/17692989-sd_640_360_30fps.mp4",badge:"Vacation Homes",titles:{en:BRAND+" \u2013 Vacation Homes"},descs:{en:"Vacation homes in scenic destinations \u2014 perfect getaways for families and travelers worldwide."}},
  {video:V+"28448027/12385946_640_360_30fps.mp4",badge:"Resorts",titles:{en:BRAND+" \u2013 Resorts"},descs:{en:"World-class resorts with spas, golf courses, fine dining, and unforgettable vacation experiences."}},
  {video:V+"5853322/5853322-sd_640_360_25fps.mp4",badge:"Hotels",titles:{en:BRAND+" \u2013 Hotels"},descs:{en:"Luxury hotels and boutique accommodations in prime destinations across every continent."}},
  {video:V+"6474633/6474633-sd_960_506_25fps.mp4",badge:"Commercial Buildings",titles:{en:BRAND+" \u2013 Commercial Buildings"},descs:{en:"Commercial buildings and retail spaces for businesses seeking prime locations and modern facilities."}},
  {video:V+"16236366/16236366-sd_640_360_30fps.mp4",badge:"Office Buildings",titles:{en:BRAND+" \u2013 Office Buildings"},descs:{en:"Office buildings and corporate spaces with flexible layouts and premium business amenities."}},
  {video:V+"5378935/5378935-sd_960_506_25fps.mp4",badge:"Shopping Malls",titles:{en:BRAND+" \u2013 Shopping Malls"},descs:{en:"Shopping malls and retail centers offering world-class shopping and entertainment experiences."}},
  {video:V+"31618415/13474994_640_360_24fps.mp4",badge:"Land for Sale",titles:{en:BRAND+" \u2013 Land for Sale"},descs:{en:"Prime land for sale \u2014 residential, commercial, and agricultural plots in growing markets worldwide."}},
  {video:V+"7607084/7607084-sd_640_360_25fps.mp4",badge:"Luxury Estates",titles:{en:BRAND+" \u2013 Luxury Estates"},descs:{en:"Exclusive luxury estates with vast grounds, private gates, and uncompromising elegance and privacy."}},
  // === AUTOMOTIVE \u2014 INDIVIDUAL CATEGORIES ===
  {video:V+"4849157/4849157-sd_640_360_24fps.mp4",badge:"Luxury Cars",titles:{en:BRAND+" \u2013 Luxury Cars"},descs:{en:"Premium luxury cars from Bentley, Rolls-Royce, Mercedes, BMW, and the world's finest automakers."}},
  {video:V+"5309353/5309353-sd_640_360_25fps.mp4",badge:"Sports Cars",titles:{en:BRAND+" \u2013 Sports Cars"},descs:{en:"High-performance sports cars engineered for speed, precision, and adrenaline on every road."}},
  {video:V+"4281368/4281368-sd_640_360_24fps.mp4",badge:"Supercars",titles:{en:BRAND+" \u2013 Supercars"},descs:{en:"Exclusive supercars from Ferrari, Lamborghini, McLaren, and Pagani \u2014 the pinnacle of automotive engineering."}},
  {video:V+"8630309/8630309-sd_640_360_25fps.mp4",badge:"Hypercars",titles:{en:BRAND+" \u2013 Hypercars"},descs:{en:"Rare hypercars pushing the boundaries of speed, technology, and design \u2014 limited edition masterpieces."}},
  {video:V+"3998657/3998657-sd_640_360_24fps.mp4",badge:"Electric Vehicles",titles:{en:BRAND+" \u2013 Electric Vehicles"},descs:{en:"Electric vehicles from Tesla, Rivian, Lucid, and leading brands \u2014 zero emissions, maximum performance."}},
  {video:V+"4565728/4565728-sd_640_360_25fps.mp4",badge:"Hybrid Vehicles",titles:{en:BRAND+" \u2013 Hybrid Vehicles"},descs:{en:"Hybrid vehicles combining fuel efficiency with performance \u2014 the smart choice for modern drivers."}},
  {video:V+"6158064/6158064-sd_640_360_30fps.mp4",badge:"SUVs",titles:{en:BRAND+" \u2013 SUVs"},descs:{en:"Luxury SUVs and family SUVs with advanced safety, spacious interiors, and all-terrain capability."}},
  {video:V+"5309420/5309420-sd_640_360_25fps.mp4",badge:"Pickup Trucks",titles:{en:BRAND+" \u2013 Pickup Trucks"},descs:{en:"Powerful pickup trucks from Ford, Chevrolet, Toyota, and Ram \u2014 built for work and adventure."}},
  {video:V+"4203572/4203572-sd_640_360_24fps.mp4",badge:"Sedans",titles:{en:BRAND+" \u2013 Sedans"},descs:{en:"Elegant sedans offering comfort, style, and refined performance for executive driving."}},
  {video:V+"6331328/6331328-sd_960_506_24fps.mp4",badge:"Hatchbacks",titles:{en:BRAND+" \u2013 Hatchbacks"},descs:{en:"Compact hatchbacks perfect for city driving \u2014 efficient, practical, and stylish everyday vehicles."}},
  {video:V+"13643111/13643111-sd_640_360_24fps.mp4",badge:"Coupes",titles:{en:BRAND+" \u2013 Coupes"},descs:{en:"Sleek coupes with sporty two-door designs \u2014 performance meets elegance on every journey."}},
  {video:V+"5834300/5834300-sd_640_360_24fps.mp4",badge:"Convertibles",titles:{en:BRAND+" \u2013 Convertibles"},descs:{en:"Open-top convertibles for the ultimate driving experience \u2014 feel the wind and the freedom."}},
  {video:V+"4281280/4281280-sd_640_360_24fps.mp4",badge:"Vans",titles:{en:BRAND+" \u2013 Vans"},descs:{en:"Passenger vans and cargo vans for families and businesses \u2014 spacious, reliable, and versatile."}},
  {video:V+"3845373/3845373-sd_640_360_24fps.mp4",badge:"Minivans",titles:{en:BRAND+" \u2013 Minivans"},descs:{en:"Family minivans with flexible seating, entertainment systems, and advanced safety for every journey."}},
  {video:V+"3817901/3817901-sd_640_360_30fps.mp4",badge:"Commercial Trucks",titles:{en:BRAND+" \u2013 Commercial Trucks"},descs:{en:"Commercial trucks for logistics and construction \u2014 heavy-duty performance for professional use."}},
  {video:V+"12374292/12374292-sd_640_360_24fps.mp4",badge:"Heavy-Duty Trucks",titles:{en:BRAND+" \u2013 Heavy-Duty Trucks"},descs:{en:"Heavy-duty trucks built for the toughest jobs \u2014 maximum payload, durability, and power."}},
  {video:V+"35210967/14916434_640_360_60fps.mp4",badge:"Luxury Motorhomes",titles:{en:BRAND+" \u2013 Luxury Motorhomes"},descs:{en:"Luxury motorhomes with premium interiors, full kitchens, and residential comfort on the road."}},
  {video:V+"18370456/18370456-sd_640_360_30fps.mp4",badge:"Class A Motorhomes",titles:{en:BRAND+" \u2013 Class A Motorhomes"},descs:{en:"Class A motorhomes \u2014 the ultimate in RV luxury with expansive living space and top-tier amenities."}},
  {video:V+"32731604/13954515_360_640_30fps.mp4",badge:"Class B Camper Vans",titles:{en:BRAND+" \u2013 Class B Camper Vans"},descs:{en:"Class B camper vans \u2014 compact, agile, and fully equipped for spontaneous adventures anywhere."}},
  {video:V+"17899033/17899033-sd_640_360_24fps.mp4",badge:"Class C Motorhomes",titles:{en:BRAND+" \u2013 Class C Motorhomes"},descs:{en:"Class C motorhomes offering the perfect balance of size, comfort, and drivability for families."}},
  {video:V+"33870727/14373922_360_640_30fps.mp4",badge:"Luxury Camper Vans",titles:{en:BRAND+" \u2013 Luxury Camper Vans"},descs:{en:"Luxury camper vans with premium finishes, smart technology, and off-grid capability for modern nomads."}},
  {video:V+"34479230/14610570_360_640_24fps.mp4",badge:"Travel Trailers",titles:{en:BRAND+" \u2013 Travel Trailers"},descs:{en:"Travel trailers for every budget \u2014 lightweight, towable, and ready for your next road trip adventure."}},
  {video:V+"7018509/7018509-sd_506_960_25fps.mp4",badge:"Fifth-Wheel RVs",titles:{en:BRAND+" \u2013 Fifth-Wheel RVs"},descs:{en:"Fifth-wheel RVs with spacious interiors and residential features \u2014 the ultimate towing experience."}},
  {video:V+"3530201/3530201-sd_640_360_30fps.mp4",badge:"Off-Road Campers",titles:{en:BRAND+" \u2013 Off-Road Campers"},descs:{en:"Off-road campers built for rugged terrain \u2014 durable, self-contained, and ready for the wilderness."}},
  {video:V+"18437773/18437773-sd_640_360_25fps.mp4",badge:"Family Motorhomes",titles:{en:BRAND+" \u2013 Family Motorhomes"},descs:{en:"Family motorhomes with bunk beds, entertainment centers, and space for the whole family."}},
  {video:V+"20260712/20260712-sd_640_360_30fps.mp4",badge:"Adventure RVs",titles:{en:BRAND+" \u2013 Adventure RVs"},descs:{en:"Adventure RVs designed for explorers \u2014 off-grid capable, rugged, and built for the journey."}},
  {video:V+"8996079/8996079-sd_640_360_30fps.mp4",badge:"Caravan Trailers",titles:{en:BRAND+" \u2013 Caravan Trailers"},descs:{en:"Caravan trailers offering comfortable mobile living \u2014 compact, efficient, and easy to tow."}},
  {video:V+"11745876/11745876-sd_640_360_30fps.mp4",badge:"Mobile Homes",titles:{en:BRAND+" \u2013 Mobile Homes"},descs:{en:"Mobile homes and manufactured housing providing affordable, comfortable living in communities nationwide."}},
  // === MOTORCYCLES & BICYCLES ===
  {video:V+"12165308/12165308-sd_640_360_30fps.mp4",badge:"Motorcycles",titles:{en:BRAND+" \u2013 Motorcycles, Scooters & Bicycles"},descs:{en:"Motorcycles, scooters, bicycles, car accessories, auto parts, tires, and wheels for every rider."}},
  // === FASHION ===
  {video:V+"8849053/8849053-sd_640_360_30fps.mp4",badge:"Men's Fashion",titles:{en:BRAND+" \u2013 Men's Fashion"},descs:{en:"Designer menswear, streetwear, sportswear, shoes, sneakers, wallets, and sunglasses from top brands."}},
  {video:V+"8516555/8516555-sd_360_640_30fps.mp4",badge:"Women's Fashion",titles:{en:BRAND+" \u2013 Women's Fashion"},descs:{en:"Women's clothing, luxury fashion, handbags, shoes, and accessories for every occasion and style."}},
  {video:V+"6173172/6173172-sd_640_360_25fps.mp4",badge:"Kids Fashion",titles:{en:BRAND+" \u2013 Kids Fashion & Baby Clothing"},descs:{en:"Kids fashion, baby clothing, and children's accessories \u2014 comfortable, stylish, and affordable."}},
  {video:V+"36976011/15665404_640_360_60fps.mp4",badge:"Shoes & Sneakers",titles:{en:BRAND+" \u2013 Shoes & Sneakers"},descs:{en:"Athletic shoes, designer heels, boots, sneakers, and footwear from leading global brands."}},
  {video:V+"8346818/8346818-sd_960_506_25fps.mp4",badge:"Jewelry & Watches",titles:{en:BRAND+" \u2013 Luxury Watches & Fine Jewelry"},descs:{en:"Gold jewelry, diamond jewelry, luxury watches, and certified authentic accessories."}},
  {video:V+"8453909/8453909-sd_506_960_25fps.mp4",badge:"Perfumes",titles:{en:BRAND+" \u2013 Perfumes & Fragrances"},descs:{en:"Luxury perfumes, colognes, and fragrances from the world's most prestigious houses."}},
  // === BEAUTY ===
  {video:V+"5084552/5084552-sd_960_506_24fps.mp4",badge:"Skincare & Cosmetics",titles:{en:BRAND+" \u2013 Skincare, Cosmetics & Makeup"},descs:{en:"Skincare, cosmetics, makeup, hair care, barber supplies, and beauty equipment for professionals."}},
  {video:V+"6802240/6802240-sd_640_360_30fps.mp4",badge:"Beauty & Spa",titles:{en:BRAND+" \u2013 Nail Products & Spa Essentials"},descs:{en:"Nail products, spa products, beauty equipment, and personal care for salons and home use."}},
  // === ELECTRONICS ===
  {video:V+"19001684/19001684-sd_640_360_30fps.mp4",badge:"Smartphones",titles:{en:BRAND+" \u2013 Smartphones & Mobile Phones"},descs:{en:"iPhone, Samsung Galaxy, Google Pixel, foldable phones, and the latest smartphone innovations."}},
  {video:V+"853987/853987-sd_640_360_25fps.mp4",badge:"Tablets",titles:{en:BRAND+" \u2013 Tablets & Smart Watches"},descs:{en:"Tablets, smart watches, and wearable technology from Apple, Samsung, and leading brands."}},
  {video:V+"38493702/16347971_640_360_25fps.mp4",badge:"Gaming Laptops",titles:{en:BRAND+" \u2013 Gaming & Business Laptops"},descs:{en:"Gaming laptops, business laptops, desktop computers, and high-performance workstations."}},
  {video:V+"853935/853935-sd_640_360_25fps.mp4",badge:"Smart TVs",titles:{en:BRAND+" \u2013 Smart TVs & Projectors"},descs:{en:"Smart TVs, projectors, home theater systems, and entertainment displays in every size."}},
  {video:V+"7942902/7942902-sd_960_506_25fps.mp4",badge:"Gaming",titles:{en:BRAND+" \u2013 Gaming Consoles & VR"},descs:{en:"Gaming consoles, VR headsets, gaming accessories, and the future of interactive entertainment."}},
  {video:V+"12985798/12985798-sd_640_360_24fps.mp4",badge:"Cameras & Drones",titles:{en:BRAND+" \u2013 Cameras, Drones & Headphones"},descs:{en:"Professional cameras, drones, headphones, Bluetooth speakers, and smart home devices."}},
  {video:V+"4318552/4318552-sd_640_360_30fps.mp4",badge:"Smart Home",titles:{en:BRAND+" \u2013 Smart Home & Connected Devices"},descs:{en:"Smart home devices, connected gadgets, networking equipment, and smart living solutions."}},
  // === HOME & LIVING ===
  {video:V+"4193136/4193136-sd_640_360_24fps.mp4",badge:"Furniture",titles:{en:BRAND+" \u2013 Luxury Furniture & Home Decor"},descs:{en:"Luxury furniture, home decor, lighting, curtains, bedding, mattresses, and storage solutions."}},
  {video:V+"4124932/4124932-sd_640_360_25fps.mp4",badge:"Kitchen",titles:{en:BRAND+" \u2013 Kitchen Appliances & Cookware"},descs:{en:"Kitchen appliances, cookware, dining sets, and smart kitchen products for modern living."}},
  {video:V+"6862869/6862869-sd_960_506_25fps.mp4",badge:"Home Appliances",titles:{en:BRAND+" \u2013 Home Appliances & Smart Living"},descs:{en:"Home appliances, smart home products, and everyday essentials for comfortable modern living."}},
  // === FOOD & GROCERY ===
  {video:V+"2081576/2081576-sd_640_360_30fps.mp4",badge:"Supermarkets",titles:{en:BRAND+" \u2013 Supermarkets & Food Markets"},descs:{en:"Supermarkets, food markets, fresh fruits, fresh vegetables, organic food, and everyday groceries."}},
  {video:V+"6420982/6420982-sd_506_960_30fps.mp4",badge:"Fresh Food",titles:{en:BRAND+" \u2013 Fresh Food & Beverages"},descs:{en:"Seafood, meat products, bakery, dairy, coffee, tea, beverages, and international cuisine."}},
  {video:V+"10619422/10619422-sd_360_640_30fps.mp4",badge:"Restaurants",titles:{en:BRAND+" \u2013 Restaurants & Fast Food"},descs:{en:"Restaurants, fast food, international cuisine, and dining experiences from around the world."}},
  // === HEALTH ===
  {video:V+"31059637/13273873_360_640_30fps.mp4",badge:"Health & Wellness",titles:{en:BRAND+" \u2013 Health & Wellness"},descs:{en:"Hospitals, pharmacies, medical equipment, vitamins, supplements, dental care, and vision care."}},
  {video:V+"38222402/16227493_640_360_30fps.mp4",badge:"Personal Care",titles:{en:BRAND+" \u2013 Wellness & Personal Care"},descs:{en:"Wellness products, personal care, health supplements, and medical supplies for everyday needs."}},
  // === SPORTS & FITNESS ===
  {video:V+"15436958/15436958-sd_636_360_30fps.mp4",badge:"Sports & Fitness",titles:{en:BRAND+" \u2013 Sports & Fitness"},descs:{en:"Gym equipment, home gym, sportswear, running gear, and fitness accessories for every athlete."}},
  {video:V+"1340880/1340880-sd_636_360_16fps.mp4",badge:"Team Sports",titles:{en:BRAND+" \u2013 Football, Basketball & Tennis"},descs:{en:"Football, basketball, tennis, golf, cycling, and team sports equipment for all levels."}},
  {video:V+"29852984/12819165_640_360_30fps.mp4",badge:"Outdoor",titles:{en:BRAND+" \u2013 Cycling & Outdoor Adventure"},descs:{en:"Cycling gear, camping equipment, outdoor adventure supplies, and sporting goods for explorers."}},
  // === BABY & KIDS ===
  {video:V+"3875308/3875308-sd_640_360_25fps.mp4",badge:"Baby & Kids",titles:{en:BRAND+" \u2013 Baby Clothing & Toys"},descs:{en:"Baby clothing, baby toys, baby food, strollers, car seats, and educational toys for little ones."}},
  {video:V+"4586690/4586690-sd_640_360_25fps.mp4",badge:"School Supplies",titles:{en:BRAND+" \u2013 Educational Toys & School Supplies"},descs:{en:"Educational toys, school supplies, kids' books, and learning materials for growing minds."}},
  // === PETS ===
  {video:V+"6568934/6568934-sd_960_506_25fps.mp4",badge:"Pet Supplies",titles:{en:BRAND+" \u2013 Dogs, Cats & Pet Care"},descs:{en:"Dog and cat supplies, pet food, pet toys, pet accessories, and veterinary supplies."}},
  {video:V+"6846022/6846022-sd_360_640_25fps.mp4",badge:"Pet World",titles:{en:BRAND+" \u2013 Birds, Fish & All Pets"},descs:{en:"Birds, fish, reptiles, small pets, aquariums, and everything for your animal companions."}},
  // === AGRICULTURE ===
  {video:V+"15959637/15959637-sd_640_360_30fps.mp4",badge:"Agriculture",titles:{en:BRAND+" \u2013 Agriculture"},descs:{en:"Tractors, farm equipment, irrigation systems, seeds, fertilizers, livestock, and greenhouses."}},
  // === INDUSTRIAL ===
  {video:V+"32244801/13751979_640_360_50fps.mp4",badge:"Construction",titles:{en:BRAND+" \u2013 Construction Equipment & Heavy Machinery"},descs:{en:"Heavy machinery, generators, power tools, manufacturing equipment, and safety gear for industry."}},
  {video:V+"11649490/11649490-sd_640_360_24fps.mp4",badge:"Industrial",titles:{en:BRAND+" \u2013 Industrial Equipment & Safety"},descs:{en:"Industrial equipment, manufacturing tools, safety equipment, and professional-grade machinery."}},
  // === OFFICE & BUSINESS ===
  {video:V+"36489218/15472805_360_640_50fps.mp4",badge:"Office & Business",titles:{en:BRAND+" \u2013 Office Furniture & Business Supplies"},descs:{en:"Office furniture, office supplies, printers, networking equipment, business software, and POS systems."}},
  // === ENTERTAINMENT ===
  {video:V+"7313656/7313656-sd_960_506_25fps.mp4",badge:"Entertainment",titles:{en:BRAND+" \u2013 Movies, Music & Books"},descs:{en:"Movies, music, books, musical instruments, video games, and streaming services for entertainment."}},
  {video:V+"6695082/6695082-sd_640_360_30fps.mp4",badge:"Musical Instruments",titles:{en:BRAND+" \u2013 Musical Instruments & Streaming"},descs:{en:"Musical instruments, audio equipment, streaming services, and creative tools for artists."}},
  // === TRAVEL ===
  {video:V+"8865814/8865814-sd_960_506_25fps.mp4",badge:"Travel & Tourism",titles:{en:BRAND+" \u2013 Travel & Tourism"},descs:{en:"Flights, hotels, resorts, cruises, car rentals, tour packages, and adventure tourism worldwide."}},
  {video:V+"4254064/4254064-sd_506_960_25fps.mp4",badge:"Adventure Travel",titles:{en:BRAND+" \u2013 Adventure Tourism & Travel Insurance"},descs:{en:"Adventure tourism, travel insurance, vacation packages, and unforgettable experiences across the globe."}},
  // === FINANCIAL SERVICES ===
  {video:V+"8174193/8174193-sd_640_360_25fps.mp4",badge:"Financial Services",titles:{en:BRAND+" \u2013 Secure Payments & Digital Wallets"},descs:{en:"Secure payments, digital wallets, international payments, currency exchange, and business banking."}},
  // === MARKETPLACE SERVICES ===
  {video:V+"8127822/8127822-sd_640_360_25fps.mp4",badge:"Verified Sellers",titles:{en:BRAND+" \u2013 Verified Sellers & Buyer Protection"},descs:{en:"Verified sellers, buyer protection, secure checkout, global shipping, and real-time order tracking."}},
  {video:V+"7668013/7668013-sd_640_360_25fps.mp4",badge:"Membership",titles:{en:BRAND+" \u2013 Gift Cards & Membership Benefits"},descs:{en:"Gift cards, membership benefits, flash sales, seasonal promotions, new arrivals, and best sellers."}},
  {video:V+"4495927/4495927-sd_640_360_25fps.mp4",badge:"Flash Sales",titles:{en:BRAND+" \u2013 Flash Sales & Featured Collections"},descs:{en:"Flash sales, seasonal promotions, featured collections, new arrivals, and best-selling products."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.07_PM_(2).jpeg",badge:"Premium Showroom",titles:{en:BRAND+" \u2013 Premium Showroom Experience"},descs:{en:"Step into our premium showroom featuring the world's finest vehicles in a luxury retail environment."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.08_PM_(1).jpeg",badge:"Luxury Collection",titles:{en:BRAND+" \u2013 Luxury Vehicle Collection"},descs:{en:"Discover an exclusive collection of luxury vehicles from the world's most prestigious manufacturers."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.08_PM.jpeg",badge:"Performance Cars",titles:{en:BRAND+" \u2013 Performance & Sports Cars"},descs:{en:"High-performance sports cars engineered for speed, precision, and adrenaline on every road."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.09_PM_(1).jpeg",badge:"Electric Vehicles",titles:{en:BRAND+" \u2013 Electric & Hybrid Vehicles"},descs:{en:"Next-generation electric and hybrid vehicles combining sustainability with cutting-edge technology."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.09_PM_(2).jpeg",badge:"SUV Showcase",titles:{en:BRAND+" \u2013 Premium SUV Showcase"},descs:{en:"Versatile premium SUVs offering power, comfort, and safety for every terrain and lifestyle."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.09_PM.jpeg",badge:"Classic Cars",titles:{en:BRAND+" \u2013 Classic & Vintage Cars"},descs:{en:"Timeless classic and vintage automobiles restored to perfection for discerning collectors."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.10_PM_(1).jpeg",badge:"Commercial Fleet",titles:{en:BRAND+" \u2013 Commercial Fleet Solutions"},descs:{en:"Reliable commercial fleet vehicles for businesses seeking performance, durability, and value."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.10_PM_(2).jpeg",badge:"Off-Road Vehicles",titles:{en:BRAND+" \u2013 Off-Road & Adventure Vehicles"},descs:{en:"Rugged off-road vehicles built to conquer any terrain with confidence and capability."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.10_PM.jpeg",badge:"City Cars",titles:{en:BRAND+" \u2013 Compact City Cars"},descs:{en:"Stylish and efficient compact city cars designed for urban living and easy parking."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.11_PM_(1).jpeg",badge:"Luxury Sedans",titles:{en:BRAND+" \u2013 Executive Luxury Sedans"},descs:{en:"Executive luxury sedans blending refined comfort, advanced technology, and sophisticated design."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.11_PM.jpeg",badge:"Convertible Cars",titles:{en:BRAND+" \u2013 Convertible & Roadster"},descs:{en:"Open-top convertibles and roadsters for those who crave freedom and the thrill of open-air driving."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.12_PM_(1).jpeg",badge:"Pickup Trucks",titles:{en:BRAND+" \u2013 Heavy-Duty Pickup Trucks"},descs:{en:"Powerful pickup trucks with best-in-class towing, payload, and off-road capability."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.12_PM.jpeg",badge:"Family Minivans",titles:{en:BRAND+" \u2013 Family Minivans & MPVs"},descs:{en:"Spacious family minivans and MPVs with premium seating, entertainment, and safety features."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.13_PM.jpeg",badge:"Auto Accessories",titles:{en:BRAND+" \u2013 Auto Parts & Accessories"},descs:{en:"Genuine auto parts and premium accessories to customize, upgrade, and maintain your vehicle."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.14_PM_(1).jpeg",badge:"Motorcycle Showcase",titles:{en:BRAND+" \u2013 Motorcycles & Two-Wheelers"},descs:{en:"Premium motorcycles and two-wheelers for every rider from street to track to trail."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.14_PM.jpeg",badge:"Marine Vehicles",titles:{en:BRAND+" \u2013 Boats & Marine Vehicles"},descs:{en:"Luxury boats, yachts, and marine vehicles for life on the water with style and performance."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.15_PM_(1).jpeg",badge:"Aviation Showcase",titles:{en:BRAND+" \u2013 Aircraft & Aviation"},descs:{en:"Private aircraft and aviation solutions for those who travel above and beyond."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.15_PM.jpeg",badge:"Concept Cars",titles:{en:BRAND+" \u2013 Concept & Future Vehicles"},descs:{en:"Visionary concept cars and future mobility solutions pushing the boundaries of design."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.16_PM.jpeg",badge:"Auto Financing",titles:{en:BRAND+" \u2013 Auto Finance & Leasing"},descs:{en:"Flexible auto financing and leasing options designed to get you behind the wheel sooner."}},
  {image:"/videos/WhatsApp_Image_2026-07-24_at_3.51.17_PM_(1).jpeg",badge:"Global Auto Trade",titles:{en:BRAND+" \u2013 Global Auto Trade & Export"},descs:{en:"Seamless global auto trade and export services connecting buyers and sellers across continents."}},
]
// The top hero carousel only advertises the four categories that exist in
// the showroom: Homes (real estate), Trucks, Motorhomes and Cars. Every
// other slide (fashion, electronics, food, logistics, boats, aviation, …)
// is dropped so the carousel never shows content that isn't for sale.
// Built-in video slides are dropped too — the hero banner is a clean image
// area; the owner's own promo banner (image or video) is injected first and
// any image/video they upload through the Advertisements manager rotates in.
.filter((s) => {
  if (s.promoBanner) return true;
  if (s.video) return false;
  const text = [s.badge, s.titles && s.titles.en, s.descs && s.descs.en].filter(Boolean).join(' ').toLowerCase();
  const isHome = /\b(house|houses|homes|apartment|apartments|villa|villas|condo|condominium|townhouse|townhouses|bungalow|mansion|mansions|penthouse|duplex|resort|resorts|hotels?|estates?|property|real estate|commercial buildings?|office buildings?|shopping malls?|vacation home|waterfront home|farm house|land for sale)\b/.test(text);
  const isTruck = /\b(trucks?|pickup|delivery trucks?|last-mile)\b/.test(text);
  const isMotorhome = /\b(motorhomes?|campers?|rvs?|trailers?|fifth-wheel|mobile home|caravan)\b/.test(text);
  const isCar = /\b(cars?|sedans?|suvs?|coupes?|hatchbacks?|convertibles?|hypercars?|supercars?|electric vehicles?|hybrid vehicles?|vans?|minivans?|autos?|concept cars?|sports car)\b/.test(text);
  return isHome || isTruck || isMotorhome || isCar;
});

// The single word shown over each hero slide: Home, Truck, Motorhome or Car.
// No long titles, descriptions or badges — just the category name.
function carouselCategoryName(slide) {
  const text = [slide.badge, slide.titles && slide.titles.en, slide.descs && slide.descs.en].filter(Boolean).join(' ').toLowerCase();
  if (/\b(house|houses|homes|apartment|apartments|villa|villas|condo|condominium|townhouse|townhouses|bungalow|mansion|mansions|penthouse|duplex|resort|resorts|hotels?|estates?|property|real estate|commercial buildings?|office buildings?|shopping malls?|vacation home|waterfront home|farm house|land for sale)\b/.test(text)) return 'Home';
  if (/\b(trucks?|pickup|delivery trucks?|last-mile)\b/.test(text)) return 'Truck';
  if (/\b(motorhomes?|campers?|rvs?|trailers?|fifth-wheel|mobile home|caravan)\b/.test(text)) return 'Motorhome';
  return 'Car';
}

// ---- STATE ----
let currentSlide = 0, carouselTimer = null, currentLang = "en", currentCountry = "US";
let voiceRecognition = null, isListening = false;
let adminAdSlides = [];
let promoBannerSlide = null;
let activeCarouselSlides = CAROUSEL_SLIDES;

// Continuous rotation: remember the showcase position so the carousel
// never restarts from the first slide on reload.
const SHOWCASE_POSITION_KEY = 'kco_showcase_position_v1';
function saveShowcasePosition() {
  try { localStorage.setItem(SHOWCASE_POSITION_KEY, String(currentSlide)); } catch (e) {}
}
function restoreShowcasePosition(total) {
  if (!total) return 0;
  try {
    const saved = parseInt(localStorage.getItem(SHOWCASE_POSITION_KEY), 10);
    if (!isNaN(saved) && saved >= 0) return saved % total;
  } catch (e) {}
  return 0;
}

function cleanAdLabel(s){
  if(!s)return s;
  return String(s)
    .replace(/AI Advertisement/gi,'Featured')
    .replace(/AI Marketing Studio Campaign/gi,'Featured Campaign')
    .replace(/AI[- ]powered/gi,'')
    .replace(/AI Assistant/gi,'')
    .replace(/\bAI\b/gi,'')
    .replace(/\s{2,}/g,' ')
    .replace(/^\s+|\s+$/g,'');
}

function dedupSlides(arr, seen) {
  return arr.filter(s => {
    const key = s.adId || s.video || s.image || (s.images && s.images[0]) || s.listingId;
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// Build the showcase: admin advertisements (by sort order) first, then
// live marketplace listings, then the default brand collection as fallback.
// Only Home, Truck, Motorhome and Car slides are ever shown — anything else
// (fashion, electronics, food, boats, …) is dropped.
function isAllowedHeroSlide(s) {
  const text = [s.badge, s.titles && s.titles.en, s.descs && s.descs.en, s.category].filter(Boolean).join(' ').toLowerCase();
  const isHome = /\b(house|houses|homes|apartment|apartments|villa|villas|condo|condominium|townhouse|townhouses|bungalow|mansion|mansions|penthouse|duplex|resort|resorts|hotels?|estates?|property|real estate|commercial buildings?|office buildings?|shopping malls?|vacation home|waterfront home|farm house|land for sale)\b/.test(text);
  const isTruck = /\b(trucks?|pickup|delivery trucks?|last-mile)\b/.test(text);
  const isMotorhome = /\b(motorhomes?|campers?|rvs?|trailers?|fifth-wheel|mobile home|caravan)\b/.test(text);
  const isCar = /\b(cars?|sedans?|suvs?|coupes?|hatchbacks?|convertibles?|hypercars?|supercars?|electric vehicles?|hybrid vehicles?|vans?|minivans?|autos?|concept cars?|sports car)\b/.test(text);
  return isHome || isTruck || isMotorhome || isCar;
}
function mergeAdSlides(){
  const seen = new Set();
  const banner = promoBannerSlide ? [promoBannerSlide] : [];
  const ads = (window._ads || adminAdSlides).filter(Boolean).filter(isAllowedHeroSlide);
  const priority = dedupSlides(ads, seen);
  const rest = dedupSlides(CAROUSEL_SLIDES, seen);
  activeCarouselSlides = [...banner, ...priority, ...rest];
}

window.addEventListener('promo-banner-updated', (e) => {
  promoBannerSlide = e.detail || null;
  mergeAdSlides();
  renderCarousel();
});

// ---- INIT: Populate Selectors ----
function populateSelectors(){
  const cs=document.getElementById("country"),ls=document.getElementById("language");
  COUNTRIES.forEach(c=>{const o=document.createElement("option");o.value=c.code;o.textContent=c.name;cs.appendChild(o)});
  LANGUAGES.forEach(l=>{const o=document.createElement("option");o.value=l.code;o.textContent=l.name;ls.appendChild(o)});
}

// ---- INIT: Render Categories (data-driven mega-menu departments) ----
// Departments group every category found in the live showroom data. Any new
// category that appears in the showroom automatically lands in a department
// (or the "More" catch-all) without any manual curation.
const STATIC_DEPARTMENTS = [
  { id:'fashion', label:'Fashion', icon:'shirt', color:'pink', cats:['Women','Men','Kids','Fashion','Beauty','Jewellery','Watches & Accessories','Baby'] },
  { id:'electronics', label:'Electronics & Tech', icon:'cpu', color:'sky', cats:['Electronics','Phones','Computers','Gaming','Cameras & Photography','Software & Digital Products','Home Appliances'] },
  { id:'home', label:'Home & Living', icon:'home', color:'emerald', cats:['Home','Furniture','Kitchen','Garden & Outdoor','Pool & Spa','Cleaning Supplies'] },
  { id:'vehicles', label:'Cars & Vehicles', icon:'car', color:'red', cats:['Cars','Motorcycles','Trucks','Bicycles','Marine & Boating','RV & Camper Accessories'] },
  { id:'realestate', label:'Real Estate & Land', icon:'building-2', color:'amber', cats:['Real Estate','Land'] },
  { id:'sports', label:'Sports & Outdoors', icon:'dumbbell', color:'lime', cats:['Sports','Fitness Equipment','Camping & Hiking'] },
  { id:'everyday', label:'Everyday & More', icon:'shopping-basket', color:'teal', cats:['Food','Pets','Books','Toys','Office','Health & Medical','Music','Arts & Crafts','Services','Travel & Luggage'] },
];

let _activeCategory="All";
let _panelDept=null;
let _allPanel=false;
let _deptLabels={};

// Exact marketplace category order shown in the customer category bar.
// The authoritative list lives in src/categories.js (window.MARKETPLACE_CATEGORIES
// on the homepage); this fallback guarantees the bar renders correctly even
// before the ES modules have executed.
const CATEGORY_BAR_FALLBACK=[
  'Women','Men','Kids','Home','Cars','Trucks','Fashion','Jewelry','Beauty','Sports',
  'Electronics','Phones','Computers','Gaming','Motorcycles','Bicycles','Houses','Land',
  'Furniture','Kitchen','Home Appliances','Food & Groceries','Baby','Pets','Agriculture',
  'Books','Office','Business & Industrial','Auto Parts','Health & Medical',
  'Musical Instruments','Arts & Crafts','Toys & Hobbies','Travel & Luggage',
  'Watches & Accessories','Garden & Outdoor','Party & Event Supplies','Cameras & Photography',
  'Software & Digital Products','Jewellery Making Supplies','Collectibles & Memorabilia',
  'Safety & Security','Fitness Equipment','Camping & Hiking','Pool & Spa',
  'Industrial Tools & Equipment','Packaging & Shipping Supplies','Cleaning Supplies',
  'Religious & Spiritual Items','Flowers & Gifts','Luxury Goods','Wedding Supplies',
  'Costumes & Cosplay','Coins & Bullion','Fireplace & Heating','Marine & Boating',
  'RV & Camper Accessories','Educational Supplies','Funeral & Memorial Supplies',
];

function getBarCategories(){
  const list=window.MARKETPLACE_CATEGORIES;
  if(list&&Array.isArray(list)&&list.length)return list;
  return CATEGORY_BAR_FALLBACK.map(name=>({name,icon:"shopping-bag",color:"blue"}));
}

async function getCategoryInventory(){
  if(window._getShowroomCategoryInventory){
    try{ const inv=await window._getShowroomCategoryInventory(); if(inv&&inv.length)return inv; }catch(e){}
  }
  return STATIC_DEPARTMENTS.map(d=>({id:d.id,label:d.label,icon:d.icon,color:d.color,categories:d.cats.map(c=>{const base=CATEGORIES.find(x=>x.name===c);return{name:c,count:0,subs:[],icon:base?base.icon:d.icon,color:base?base.color:d.color};})}));
}

function renderCategories(){
  const c=document.getElementById("category-list");
  if(!c)return;
  if(!window.MARKETPLACE_CATEGORIES){
    window.addEventListener("marketplace-categories-ready",function once(){
      window.removeEventListener("marketplace-categories-ready",once);
      renderCategories();
    },{once:true});
  }
  c.innerHTML="";
  _deptLabels={};
  const all=document.createElement("button");
  all.dataset.dept="all";
  all.className="nav-cat-chip active";
  all.innerHTML='<i data-lucide="layout-grid" class="w-3.5 h-3.5"></i><span class="whitespace-nowrap">All</span>';
  all.addEventListener("click",()=>{filterByCategory("All",all);});
  c.appendChild(all);

  const known=getBarCategories();
  const knownNames=new Set(known.map(k=>String(k.name||"").toLowerCase()));
  known.forEach(cat=>{
    _deptLabels[cat.name]=cat.name;
    const chip=document.createElement("button");
    chip.dataset.dept=cat.name;
    chip.className="nav-cat-chip";
    chip.innerHTML='<i data-lucide="'+(cat.icon||"shopping-bag")+'" class="w-3.5 h-3.5"></i><span class="whitespace-nowrap">'+cat.name+'</span>';
    chip.addEventListener("click",()=>{filterByCategory(cat.name,chip);});
    c.appendChild(chip);
  });

  getCategoryInventory().then(inv=>{
    const extras=[];
    (inv||[]).forEach(d=>(d.categories||[]).forEach(entry=>{
      const n=String(entry.name||"").trim();
      if(n&&!knownNames.has(n.toLowerCase())&&!extras.some(e=>e.name===n)){
        extras.push({name:n,icon:"shopping-bag",color:"blue"});
      }
    }));
    extras.forEach(cat=>{
      _deptLabels[cat.name]=cat.name;
      const chip=document.createElement("button");
      chip.dataset.dept=cat.name;
      chip.className="nav-cat-chip";
      chip.innerHTML='<i data-lucide="'+(cat.icon||"shopping-bag")+'" class="w-3.5 h-3.5"></i><span class="whitespace-nowrap">'+cat.name+'</span>';
      chip.addEventListener("click",()=>{filterByCategory(cat.name,chip);});
      c.appendChild(chip);
    });
    const moreBtn=makeMoreChip({icon:"grid"});
    c.appendChild(moreBtn);
    if(window.lucide)lucide.createIcons();
  });
  setupCategoryRowScroll(c);
}

function makeMoreChip(d){
  const chip=document.createElement("button");
  chip.dataset.dept="more";
  chip.className="nav-cat-chip";
  chip.innerHTML='<i data-lucide="'+(d.icon||"grid")+'" class="w-3.5 h-3.5"></i><span class="whitespace-nowrap">More</span><i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>';
  chip.addEventListener("click",()=>{toggleAllPanel(chip);});
  return chip;
}

function setupCategoryRowScroll(row){
  if(row._catScrollReady)return;
  row._catScrollReady=true;
  let isDown=false,startX=0,scrollLeft=0;
  row.addEventListener("pointerdown",(e)=>{
    if(e.pointerType!=="mouse")return;
    isDown=true;startX=e.clientX;scrollLeft=row.scrollLeft;row._dragMoved=0;
  });
  window.addEventListener("pointermove",(e)=>{
    if(!isDown||e.pointerType!=="mouse")return;
    const dx=e.clientX-startX;
    row._dragMoved=Math.max(row._dragMoved||0,Math.abs(dx));
    row.scrollLeft=scrollLeft-dx;
  });
  const endDrag=()=>{isDown=false;};
  window.addEventListener("pointerup",endDrag);
  window.addEventListener("pointercancel",endDrag);
  row.addEventListener("pointerleave",endDrag);
  row.addEventListener("click",(e)=>{
    if(row._dragMoved&&row._dragMoved>8){e.preventDefault();e.stopPropagation();row._dragMoved=0;}
  },true);
  row.addEventListener("wheel",(e)=>{
    if(row.scrollWidth<=row.clientWidth)return;
    const dy=Math.abs(e.deltaY),dx=Math.abs(e.deltaX);
    if(dy>dx)return;
    e.preventDefault();
    row.scrollLeft+=e.deltaX;
  },{passive:false});
}

function setNavActive(deptId){
  document.querySelectorAll("#category-list button").forEach(b=>{
    const on=b.dataset.dept===deptId;
    b.classList.toggle("active",on);
    b.classList.toggle("border-blue-500/40",on);
    b.classList.toggle("bg-blue-500/10",on);
    b.classList.toggle("text-blue-600",on);
  });
}

function fmtCount(n){ if(n>=1000000)return (n/1000000).toFixed(1).replace(/\.0$/,'')+'M+'; if(n>=1000)return Math.round(n/1000)+'K+'; return n||0; }

function openDeptPanel(dept,btn){
  _panelDept=dept;
  const panel=document.getElementById("category-panel");
  if(!panel)return;
  const sorted=[...(dept.categories||[])].sort((a,b)=>b.count-a.count);
  const catCards=sorted.slice(0,16).map(c=>{
    const meta=(CATEGORIES.find(x=>x.name.toLowerCase()===String(c.name).toLowerCase()))||{icon:dept.icon,color:dept.color};
    const icon=meta.icon||dept.icon; const color=meta.color||dept.color;
    const col=CAT_COLORS[color]||CAT_COLORS.blue;
    return '<button data-category="'+c.name+'" class="dept-cat flex flex-col items-start gap-2 p-3 rounded-xl border border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50/60 shadow-sm text-left transition group">'
      +'<div class="flex items-center gap-2.5 w-full">'
        +'<span class="w-8 h-8 rounded-lg bg-gradient-to-br '+col.bg+' '+col.to+' border '+col.border+' flex items-center justify-center shrink-0"><i data-lucide="'+icon+'" class="w-4 h-4 '+col.text+'"></i></span>'
        +'<span class="flex-1 min-w-0"><span class="block text-[13px] font-bold text-gray-900 truncate">'+c.name+'</span>'
        +(c.count>0?'<span class="text-[10px] text-gray-500">'+fmtCount(c.count)+' items</span>':'<span class="text-[10px] text-gray-600">Explore</span>')
        +'</span>'
        +'<i data-lucide="arrow-right" class="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition"></i>'
      +'</div>'
      +(c.subs&&c.subs.length?'<span class="text-[10px] text-gray-500 truncate w-full">'+c.subs.slice(0,3).join(' Â· ')+'</span>':'')
    +'</button>';
  }).join('');
  panel.innerHTML='<div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-4">'
    +'<div class="flex items-center justify-between mb-3">'
      +'<div class="flex items-center gap-2.5">'
        +'<span class="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 flex items-center justify-center"><i data-lucide="'+dept.icon+'" class="w-4 h-4 text-blue-600"></i></span>'
        +'<div><h3 class="text-sm font-black text-gray-900 tracking-wide">'+dept.label+'</h3><p class="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Shop the department</p></div>'
      +'</div>'
      +'<button data-dept-view="'+dept.id+'" class="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5">View all <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></button>'
    +'</div>'
    +'<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">'+catCards+'</div>'
  +'</div>';
  panel.classList.remove("hidden");void panel.offsetWidth;panel.classList.add("panel-in");
  panel.querySelectorAll('[data-category]').forEach(el=>{ el.onclick=()=>{filterByCategory(el.dataset.category,el);closeCategoryPanel();}; });
  const viewAll=panel.querySelector('[data-dept-view]');
  if(viewAll)viewAll.onclick=()=>{filterByDepartment(dept.id);closeCategoryPanel();};
  if(window.lucide)lucide.createIcons();
  setNavActive(dept.id);
}
function toggleDeptPanel(dept,btn){
  const panel=document.getElementById("category-panel");
  if(panel&&!panel.classList.contains("hidden")&&_panelDept&&_panelDept.id===dept.id){closeCategoryPanel();}
  else openDeptPanel(dept,btn);
}
function closeCategoryPanel(){
  const panel=document.getElementById("category-panel");
  if(panel){panel.classList.add("hidden");panel.classList.remove("panel-in");}
  const backTop=document.getElementById("category-back-top");
  if(backTop)backTop.classList.remove("flex");
  setNavActive(null);
  _panelDept=null;_allPanel=false;
}
function getAllCategoryEntries(){
  return getCategoryInventory().then(inv=>{
    const map=new Map();
    inv.forEach(d=>(d.categories||[]).forEach(c=>{
      const key=String(c.name).toLowerCase();
      if(!map.has(key))map.set(key,{name:c.name,count:0,subs:[]});
      const e=map.get(key);
      e.count+=c.count||0;
      (c.subs||[]).forEach(s=>{ if(!e.subs.includes(s))e.subs.push(s); });
    }));
    return [...map.values()].sort((a,b)=>b.count-a.count);
  });
}
function openAllPanel(btn){
  _allPanel=true;_panelDept=null;
  const panel=document.getElementById("category-panel");
  const scroller=document.getElementById("category-panel-scroll");
  if(!panel||!scroller)return;
  getAllCategoryEntries().then(sorted=>{
  const catCards=sorted.slice(0,40).map(c=>{
    const meta=(CATEGORIES.find(x=>x.name.toLowerCase()===String(c.name).toLowerCase()))||{icon:"shopping-bag",color:"blue"};
    const icon=meta.icon||"shopping-bag"; const color=meta.color||"blue";
    const col=CAT_COLORS[color]||CAT_COLORS.blue;
    return '<button data-category="'+c.name+'" class="dept-cat flex flex-col items-start justify-between gap-3 p-4 min-h-[104px] rounded-2xl border border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50/60 active:bg-blue-50 shadow-sm text-left transition group">'
      +'<div class="flex items-center gap-3 w-full">'
        +'<span class="w-11 h-11 rounded-xl bg-gradient-to-br '+col.bg+' '+col.to+' border '+col.border+' flex items-center justify-center shrink-0"><i data-lucide="'+icon+'" class="w-5 h-5 '+col.text+'"></i></span>'
        +'<span class="flex-1 min-w-0"><span class="block text-[15px] font-bold text-gray-900 truncate">'+c.name+'</span>'
        +(c.count>0?'<span class="text-[11px] text-gray-500">'+fmtCount(c.count)+' items</span>':'<span class="text-[11px] text-gray-600">Explore</span>')
        +'</span>'
        +'<i data-lucide="arrow-right" class="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition shrink-0"></i>'
      +'</div>'
      +(c.subs&&c.subs.length?'<span class="text-[11px] text-gray-500 truncate w-full">'+c.subs.slice(0,3).join(' Â· ')+'</span>':'')
    +'</button>';
  }).join('');
  scroller.innerHTML='<div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-4 pb-24">'
    +'<div class="sticky top-0 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 pt-1 pb-3 bg-white/95 backdrop-blur-xl border-b border-gray-200 mb-4 z-10 flex items-center justify-between gap-3">'
      +'<div class="flex items-center gap-3 min-w-0">'
        +'<span class="w-11 h-11 rounded-xl bg-black flex items-center justify-center overflow-hidden shrink-0"><svg viewBox="0 0 24 24" class="w-6 h-6" fill="none" aria-hidden="true"><path d="M3 5l4.5 14L12 8l4.5 11L21 5" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>'
        +'<div class="min-w-0"><h3 class="text-base font-black text-gray-900 tracking-wide truncate">All Categories</h3><p class="text-[11px] text-gray-500 font-bold uppercase tracking-widest">Shop every category</p></div>'
      +'</div>'
      +'<div class="flex items-center gap-2 shrink-0">'
        +'<button data-all-view="1" class="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5">View all <i data-lucide="arrow-right" class="w-4 h-4"></i></button>'
        +'<button id="category-panel-close" class="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200 flex items-center justify-center active:scale-95"><i data-lucide="x" class="w-4 h-4"></i></button>'
      +'</div>'
    +'</div>'
    +'<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">'+catCards+'</div>'
  +'</div>';
  panel.classList.remove("hidden");void panel.offsetWidth;panel.classList.add("panel-in");
  scroller.scrollTop=0;
  scroller.querySelectorAll('[data-category]').forEach(el=>{ el.onclick=()=>{filterByCategory(el.dataset.category,el);closeCategoryPanel();}; });
  const viewAll=scroller.querySelector('[data-all-view]');
  if(viewAll)viewAll.onclick=()=>{filterByCategory("All");closeCategoryPanel();};
  const closeBtn=scroller.querySelector('#category-panel-close');
  if(closeBtn)closeBtn.onclick=()=>{closeCategoryPanel();};
  const backTop=document.getElementById("category-back-top");
  const onScroll=()=>{ if(backTop)backTop.classList.toggle("flex",scroller.scrollTop>260); };
  scroller.addEventListener("scroll",onScroll,{passive:true}); onScroll();
  if(backTop)backTop.onclick=()=>{ scroller.scrollTo({top:0,behavior:"smooth"}); };
  if(window.lucide)lucide.createIcons();
  setNavActive("all");
  });
}
function toggleAllPanel(btn){
  const panel=document.getElementById("category-panel");
  if(panel&&!panel.classList.contains("hidden")&&_allPanel){closeCategoryPanel();}
  else openAllPanel(btn);
}
document.addEventListener("click",(e)=>{ if(e.target.closest("#site-categories-nav"))return; closeCategoryPanel(); });

function filterByDepartment(deptId){
  _activeCategory=deptId;
  closeSearchResults();
  if(window._filterShowroomByDepartment){window._filterShowroomByDepartment(deptId);}
  else if(window._filterShowroomByCategory){window._filterShowroomByCategory(deptId);}
  setNavActive(deptId);
  showToast("Exploring: "+(_deptLabels[deptId]||deptId));
}

function filterByCategory(name,el){
  _activeCategory=name;
  closeSearchResults();
  if(name==="All"){if(window._clearShowroomFilter)window._clearShowroomFilter();}
  else if(window._filterShowroomByCategory){window._filterShowroomByCategory(name);}
  showToast("Exploring: "+name);
  closeCategoryPanel();
  setNavActive(name==="All"?"all":name);
}

// ---- SMART SEARCH ----
let _suggToken=0;
function setupSearchSuggestions(){
  const inp=document.getElementById("search-input"),dd=document.getElementById("search-suggestions");
  inp.addEventListener("input",()=>{
    const q=inp.value.trim();if(q.length<1){dd.classList.add("hidden");return}
    const myToken=++_suggToken;
    if(window._getLiveSuggestions){
      window._getLiveSuggestions(q,8).then(function(results){
        if(myToken!==_suggToken)return;
        if(!results||results.length===0){
          const m=SEARCH_SUGGESTIONS.filter(s=>s.toLowerCase().includes(q.toLowerCase())).slice(0,8);
          if(!m.length){dd.classList.add("hidden");return}
          renderSuggestionDropdown(dd,m.map(function(s){return{title:s,category:""}}));
          return;
        }
        renderSuggestionDropdown(dd,results);
      }).catch(function(){
        if(myToken!==_suggToken)return;
        const m=SEARCH_SUGGESTIONS.filter(s=>s.toLowerCase().includes(q.toLowerCase())).slice(0,8);
        if(m.length)renderSuggestionDropdown(dd,m.map(function(s){return{title:s,category:""}}));
        else dd.classList.add("hidden");
      });
    } else {
      const m=SEARCH_SUGGESTIONS.filter(s=>s.toLowerCase().includes(q.toLowerCase())).slice(0,8);
      if(!m.length){dd.classList.add("hidden");return}
      renderSuggestionDropdown(dd,m.map(function(s){return{title:s,category:""}}));
    }
  });
  inp.addEventListener("blur",()=>setTimeout(()=>dd.classList.add("hidden"),200));
  inp.addEventListener("focus",()=>{if(inp.value.trim().length>0)inp.dispatchEvent(new Event("input"))});
}
function renderSuggestionDropdown(dd,results){
  dd.innerHTML=results.map(function(r){
    const t=escapeHtmlAttr(r.title||"");
    const c=r.category?escapeHtmlAttr(r.category):"";
    const thumb=r.thumbnail?'<img src="'+escapeHtmlAttr(r.thumbnail)+'" class="w-11 h-11 rounded-lg object-cover shrink-0" onerror="this.style.display=\'none\'">':'<div class="w-11 h-11 rounded-lg bg-gray-100 flex items-center justify-center shrink-0"><i data-lucide="package" class="w-5 h-5 text-gray-400"></i></div>';
    const price=r.price!=null?'<span class="text-sm font-bold text-blue-600 ml-auto">'+(r.currency||"USD")+" "+Number(r.price).toLocaleString()+"</span>":"";
    return '<button onclick="selectSuggestion(\''+t.replace(/'/g,"\\'")+'\')" class="w-full text-left px-4 py-3.5 text-[15px] text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition flex items-center gap-3 border-b border-gray-100 last:border-0">'+thumb+'<div class="flex-1 min-w-0"><p class="truncate font-semibold">'+t+"</p>"+(c?'<p class="text-xs text-gray-500 truncate">'+c+"</p>":"")+"</div>"+price+"</button>";
  }).join("");
  lucide.createIcons();dd.classList.remove("hidden");
}
function selectSuggestion(t){document.getElementById("search-input").value=t;document.getElementById("search-suggestions").classList.add("hidden");executeSearch()}

let _searching=false;
let _searchToken=0;
function executeSearch(){
  const q=document.getElementById("search-input").value.trim();
  if(!q)return;
  if(typeof gtag!=='undefined')gtag('event','search',{search_term:q});
  document.getElementById("search-suggestions").classList.add("hidden");
  if(_searching)return;
  _searching=true;
  const myToken=++_searchToken;
  showSearchResultsLoading(q);
  if(window._smartSearch){
    let marketplaceRendered=false;
    window._smartSearch(q,30,function(partialResults,meta){
      if(myToken!==_searchToken)return;
      if(!marketplaceRendered&&partialResults&&partialResults.length>0){
        marketplaceRendered=true;
        renderSearchResults(q,partialResults,meta);
      } else if(marketplaceRendered&&partialResults){
        renderSearchResults(q,partialResults,meta);
      }
    }).then(function(res){
      _searching=false;
      if(myToken!==_searchToken)return;
      if(window._saveRecentSearch)window._saveRecentSearch(q);
      renderSearchResults(q,res.results||[],res);
    }).catch(function(){
      _searching=false;
      if(myToken!==_searchToken)return;
      renderSearchResults(q,[]);
    });
  } else {
    _searching=false;if(myToken===_searchToken)renderSearchResults(q,[]);
  }
}

function showSearchResultsLoading(q){
  let panel=document.getElementById("search-results-overlay");
  if(!panel){
    panel=document.createElement("div");
    panel.id="search-results-overlay";
    panel.className="fixed inset-0 z-[55] bg-black/85 backdrop-blur-sm overflow-y-auto";
    document.body.appendChild(panel);
  }
  let skeletonHtml='<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">';
  for(let i=0;i<12;i++){
    skeletonHtml+=`<div class="bg-white border border-gray-200 rounded-xl overflow-hidden"><div class="aspect-square bg-gray-100 animate-pulse"></div><div class="p-2.5 space-y-2"><div class="h-3 bg-gray-100 rounded animate-pulse"></div><div class="h-2 bg-gray-100 rounded w-2/3 animate-pulse"></div><div class="h-3 bg-gray-100 rounded w-1/3 animate-pulse"></div></div></div>`;
  }
  skeletonHtml+='</div>';
  panel.innerHTML=`<div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-6"><div class="flex items-center justify-between mb-6"><div class="flex items-center gap-3"><i data-lucide="search" class="w-5 h-5 text-blue-600"></i><h3 class="text-lg font-bold text-gray-900">Searching for "${escapeHtmlAttr(q)}"</h3></div><button onclick="closeSearchResults()" class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition text-[10px] font-bold uppercase tracking-wide flex items-center gap-1"><span>ðŸ”™ Back</span></button></div>${skeletonHtml}</div>`;
  panel.style.display="block";
  document.body.style.overflow="hidden";
  if(window.lucide)lucide.createIcons();
}

function renderSearchResults(query,results,meta){
  let panel=document.getElementById("search-results-overlay");
  if(!panel){
    panel=document.createElement("div");
    panel.id="search-results-overlay";
    panel.className="fixed inset-0 z-[55] bg-black/85 backdrop-blur-sm overflow-y-auto";
    document.body.appendChild(panel);
  }
  const hasResults=results&&results.length>0;
  const safeQuery=escapeHtmlAttr(query);
  const isPartial=meta&&meta.supplierCount===0&&meta.marketplaceCount>0&&!meta._final;
  let html=`<div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-6">`;
  html+=`<div class="flex items-center justify-between mb-6"><div class="flex items-center gap-3"><i data-lucide="search" class="w-5 h-5 text-blue-600"></i><h3 class="text-lg font-bold text-gray-900">`;
  if(hasResults){html+=`${results.length} result${results.length>1?"s":""} for "${safeQuery}"`}
  else{html+=`No results for "${safeQuery}"`}
  if(isPartial){html+=` <span class="text-xs text-gray-500 font-normal flex items-center gap-1"><i data-lucide="loader-2" class="w-3 h-3 animate-spin"></i> checking suppliers...</span>`}
  html+=`</h3></div><button onclick="closeSearchResults()" class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition text-[10px] font-bold uppercase tracking-wide flex items-center gap-1"><span>ðŸ”™ Back</span></button></div>`;
  if(hasResults){
    html+=`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">`;
    results.forEach(function(r){
      const img=r.thumbnail||(Array.isArray(r.images)&&r.images.length>0?r.images[0]:"");
      const price=r.price!=null?(r.currency||"USD")+" "+Number(r.price).toLocaleString():"";
      const isSpecial=r.is_special_order||r.entity_type==="special_order";
      const typeBadge=isSpecial?`<span class="absolute top-1.5 left-1.5 text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-md bg-blue-500/80 text-white border border-blue-400 z-10">Special Order</span>`:(r.entity_type?`<span class="absolute top-1.5 left-1.5 text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-md bg-white/90 text-blue-700 border border-blue-200 z-10">${escapeHtmlAttr(r.entity_type)}</span>`:"");
      const imgHtml=img?`<img src="${escapeHtmlAttr(img)}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.style.display='none'">`:`<div class="w-full h-full flex items-center justify-center"><i data-lucide="package" class="w-10 h-10 text-gray-700"></i></div>`;
      const deliveryInfo=isSpecial&&r.estimated_delivery_days?`<p class="text-[10px] text-gray-500 flex items-center gap-1"><i data-lucide="truck" class="w-3 h-3"></i>${r.estimated_delivery_days} days delivery</p>`:"";
      const brandText=r.brand?`<p class="text-[10px] text-gray-500 truncate">${escapeHtmlAttr(r.brand)}</p>`:"";
      const clickAction=isSpecial?`openSpecialOrderFromSearch('${escapeHtmlAttr(r.title||"").replace(/'/g,"\\'")}','${escapeHtmlAttr(r.brand||"").replace(/'/g,"\\'")}','${escapeHtmlAttr(r.category||"").replace(/'/g,"\\'")}',${r.price||0},'${escapeHtmlAttr(r.currency||"USD").replace(/'/g,"\\'")}')`:`openProductFromSearch('${escapeHtmlAttr(r.property_id||"").replace(/'/g,"\\'")}')`;
      html+=`<div class="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 cursor-pointer" onclick="${clickAction}">${typeBadge}<div class="aspect-square bg-gray-100 overflow-hidden">${imgHtml}</div><div class="p-2.5"><p class="text-xs font-bold text-gray-900 truncate mb-1">${escapeHtmlAttr(r.title||"Untitled")}</p>${brandText}${r.category?`<p class="text-[10px] text-gray-500 truncate mb-1">${escapeHtmlAttr(r.category)}</p>`:""}${price?`<p class="text-xs font-bold text-blue-600">${price}</p>`:""}${deliveryInfo}</div></div>`;
    });
    html+=`</div>`;
  } else {
    const popularHtml=(window.SEARCH_SUGGESTIONS||SEARCH_SUGGESTIONS||[]).slice(0,6).map(function(s){
      return `<button onclick="document.getElementById('search-input').value='${s.replace(/'/g,"\\'")}';executeSearch()" class="text-[11px] bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition">${s}</button>`;
    }).join("");
    html+=`<div class="max-w-2xl mx-auto"><div class="glass border border-blue-500/20 rounded-2xl p-6 sm:p-8 text-center">`;
    html+=`<div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 border border-blue-200 mb-4"><i data-lucide="package-search" class="w-8 h-8 text-blue-600"></i></div>`;
    html+=`<h4 class="text-lg font-bold text-gray-900 mb-2">We couldn't find this item in our current marketplace</h4>`;
    html+=`<p class="text-sm text-gray-600 mb-5 leading-relaxed">But you can place a <span class="text-blue-600 font-bold">Special Order</span> and we will source it for you. Our team will review your request, find the best supplier, and get back to you with a quote.</p>`;
    html+=`<div class="flex flex-col sm:flex-row gap-3 justify-center">`;
    html+=`<button onclick="openSpecialOrderModal('${safeQuery.replace(/'/g,"\\'")}')" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"><i data-lucide="package-plus" class="w-4 h-4"></i> Request Product</button>`;
    html+=`<button onclick="closeSearchResults()" class="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-sm uppercase tracking-wide transition">Browse Marketplace</button>`;
    html+=`</div>`;
    html+=`<div class="mt-6 pt-6 border-t border-gray-200"><p class="text-xs text-gray-500 mb-3">Popular searches you might like:</p><div class="flex flex-wrap gap-2 justify-center">${popularHtml}</div></div>`;
    html+=`</div></div>`;
  }
  html+=`</div>`;
  panel.innerHTML=html;
  panel.style.display="block";
  document.body.style.overflow="hidden";
  if(window.lucide)lucide.createIcons();
}

function closeSearchResults(){
  const panel=document.getElementById("search-results-overlay");
  if(panel)panel.style.display="none";
  document.body.style.overflow="";
}

function escapeHtmlAttr(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}

window.closeSearchResults=closeSearchResults;
window.executeSearch=executeSearch;
window.selectSuggestion=selectSuggestion;
window.openSpecialOrderFromSearch=function(title,brand,category,price,currency){
  closeSearchResults();
  if(window._openSpecialOrderFromSearch)window._openSpecialOrderFromSearch(title,brand,category,price,currency);
  else if(window.openSpecialOrderModal)window.openSpecialOrderModal(title);
};
window.openProductFromSearch=function(propertyId){
  closeSearchResults();
  if(propertyId)window.location.href="/details.html?id="+encodeURIComponent(propertyId);
  else showToast("Product not available");
};

// ---- VOICE SEARCH ----
function toggleVoiceSearch(){
  const btn=document.getElementById("voice-search-btn"),icon=document.getElementById("voice-icon");
  if(window._toggleVoiceSearch){
    const result=window._toggleVoiceSearch(
      (transcript)=>{document.getElementById("search-input").value=transcript},
      (listening)=>{
        if(listening){btn.classList.add("voice-listening","text-blue-500");icon.setAttribute("data-lucide","mic-off");lucide.createIcons();showToast("Listening...")}
        else{btn.classList.remove("voice-listening","text-blue-500");icon.setAttribute("data-lucide","mic");lucide.createIcons();const q=document.getElementById("search-input").value.trim();if(q)executeSearch()}
      }
    );
    if(!result.supported){showToast("Voice search not supported")}
    return;
  }
  // Fallback to old implementation
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){showToast("Voice search not supported");return}
  if(isListening){voiceRecognition.stop();return}
  voiceRecognition=new SR();voiceRecognition.continuous=false;voiceRecognition.interimResults=true;
  voiceRecognition.lang="en-US";
  voiceRecognition.onstart=()=>{isListening=true;btn.classList.add("voice-listening","text-blue-500");icon.setAttribute("data-lucide","mic-off");lucide.createIcons();showToast("Listening...")};
  voiceRecognition.onresult=(e)=>{let t="";for(let i=0;i<e.results.length;i++)t+=e.results[i][0].transcript;document.getElementById("search-input").value=t};
  voiceRecognition.onerror=()=>showToast("Voice error. Try again.");
  voiceRecognition.onend=()=>{isListening=false;btn.classList.remove("voice-listening","text-blue-500");icon.setAttribute("data-lucide","mic");lucide.createIcons();const q=document.getElementById("search-input").value.trim();if(q)executeSearch()};
  voiceRecognition.start();
}

// ---- CAMERA SEARCH ----
function handleCameraSearch(e){
  const f=e.target.files[0];if(!f)return;
  if(!f.type.startsWith("image/")){showToast("Please select an image");return}
  const r=new FileReader();r.onload=(ev)=>{
    showToast("Photo received! Matching catalog...");
    document.getElementById("search-input").value="Photo: "+f.name.replace(/\.[^.]+$/,"");
    const dd=document.getElementById("search-suggestions");
    dd.innerHTML='<div class="p-4"><div class="flex items-center gap-3 mb-2"><img src="'+ev.target.result+'" class="w-16 h-16 rounded-lg object-cover border border-gray-200"><div><p class="text-sm text-gray-800 font-semibold">Image uploaded</p><p class="text-xs text-gray-500">Scanning visual catalog...</p></div></div><div class="flex gap-2 flex-wrap mt-2">'+SEARCH_SUGGESTIONS.slice(0,4).map(s=>'<span class="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-full border border-blue-200">'+s+"</span>").join("")+"</div></div>";
    dd.classList.remove("hidden");lucide.createIcons();setTimeout(()=>dd.classList.add("hidden"),4000);
  };r.readAsDataURL(f);e.target.value="";
}

function escHtml(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }

function slideLink(slide){
  if(!slide)return null;
  if(slide.linkType==='product'&&slide.linkTarget)return {type:'product',target:slide.linkTarget};
  if(slide.linkType==='category'&&slide.linkTarget)return {type:'category',target:slide.linkTarget};
  if(slide.linkType==='section'&&slide.linkTarget)return {type:'section',target:slide.linkTarget};
  return null;
}

function slideCtaHtml(slide,idx){
  const link=slideLink(slide);
  if(!link)return '';
  return '<button id="slide-cta-'+idx+'" onclick="openSlideLink('+idx+')" class="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2.5 min-h-[44px] rounded-lg text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-blue-500/30 hover:scale-105 fade-in-up delay-3"></button>';
}

function slideCtaLabel(slide,copy){
  const link=slideLink(slide);
  if(!link)return '';
  if(link.type==='product')return copy.shopNow||'Shop Now';
  return copy.explore||'Explore';
}

window.openSlideLink=function(idx){
  const slide=activeCarouselSlides[idx];
  const link=slideLink(slide);
  if(!link)return;
  if(link.type==='product'){
    window.location.href='details.html?id='+encodeURIComponent(link.target);
    return;
  }
  if(link.type==='category'){
    const catEl=Array.prototype.find.call(document.querySelectorAll('#category-list a[data-category],#category-panel [data-category]'),function(a){return a.dataset.category===link.target;});
    if(catEl){catEl.click();}
    else if(window._filterShowroomByCategory){window._filterShowroomByCategory(link.target);}
    showToast('Exploring: '+link.target);
  } else {
    if(window._clearShowroomFilter)window._clearShowroomFilter();
    showToast('Opening Showroom');
  }
  const showroom=document.getElementById('showroom-directory');
  if(showroom)showroom.scrollIntoView({behavior:'smooth',block:'start'});
};

// ---- HERO VIDEO CAROUSEL ----
function renderCarousel(){
  mergeAdSlides();
  const slides=activeCarouselSlides;
  const sc=document.getElementById("carousel-slides");
  if(!sc)return;
  sc.innerHTML="";
  slides.forEach((slide,idx)=>{
    const el=document.createElement("div");
    el.className="carousel-slide hidden-slide";
    el.id="slide-"+idx;
    var mediaHtml;
    if(slide.images&&slide.images.length>0){
      var kbClass="kb-"+(((idx%5))+1);
      var imgHtml=slide.images.map(function(u,i){return '<div class="ad-slideshow-img '+kbClass+'" data-src="'+u+'" style="position:absolute;inset:0;width:100%;height:100%;background-image:url(\''+u+'\');background-size:cover;background-position:center;opacity:'+(i===0?'1':'0')+';transition:opacity 1.5s ease-in-out"></div>';}).join('');
      mediaHtml='<div class="ad-slideshow" data-interval="4000" style="position:absolute;inset:0;width:100%;height:100%;overflow:hidden">'+imgHtml+'</div>';
    }else if(slide.image){
      var kbClass2="kb-"+(((idx%5))+1);
      mediaHtml='<div class="kb-img '+kbClass2+'" style="background-image:url(\''+slide.image+'\');background-size:cover;background-position:center"></div>';
    }else{
      mediaHtml='<video class="hero-video" muted loop playsinline webkit-playsinline preload="metadata" data-src="'+slide.video+'" style="width:100%;height:100%;object-fit:cover;object-position:center"'+(slide.poster?' poster="'+slide.poster+'"':'')+'>'+
      '</video>';
    }
    el.innerHTML=mediaHtml+
      (slide.promoBanner
        ? '<div class="absolute inset-0 z-10 flex items-end justify-start p-5 sm:p-8 pointer-events-none">'+
          '<div class="max-w-md bg-black/45 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 pointer-events-auto">'+
          (slide.badge?'<span class="inline-block text-[10px] font-black uppercase tracking-widest text-amber-300 mb-1.5">'+escHtml(slide.badge)+'</span>':'')+
          '<h2 id="slide-title-'+idx+'" class="text-white text-2xl sm:text-3xl font-black leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)]"></h2>'+
          '<p class="mt-1.5 text-white/90 text-sm sm:text-base font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"></p>'+
          (slide.buttonText&&slide.buttonLink?'<a href="'+escHtml(slide.buttonLink)+'" class="inline-flex items-center gap-2 mt-3 bg-white text-gray-900 text-xs font-black px-5 py-2.5 rounded-full hover:gap-3 transition-all shadow-lg">'+escHtml(slide.buttonText)+' <i data-lucide="arrow-right" class="w-4 h-4"></i></a>':'')+
          '</div>'+
        '</div>'
        : '<div class="absolute inset-0 z-10 flex items-center justify-center text-center p-6 sm:p-10">'+
        '<div class="glass-hero-panel">'+
        '<h2 id="slide-title-'+idx+'" class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]"></h2>'+
        '<p class="mt-3 text-base sm:text-lg font-extrabold text-amber-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Delivering worldwide 🚛🚒</p>'+
        '</div>'+
        '</div>');
    sc.appendChild(el);
  });
  currentSlide=restoreShowcasePosition(activeCarouselSlides.length);
  goToSlide(currentSlide);
  updateCarouselLanguage();
}

function updateCarouselLanguage(){
  activeCarouselSlides.forEach((slide,idx)=>{
    const t=document.getElementById("slide-title-"+idx);
    if(!t)return;
    if(slide.promoBanner){
      t.textContent=slide.title||'';
      const p=t.parentElement&&t.parentElement.querySelector('p');
      if(p)p.textContent=slide.subtitle||'';
    }else{
      t.textContent='Weverse Online Shop';
    }
  });
  updateBadgeLanguage();
}

window.addEventListener('ads-updated', (e) => {
  adminAdSlides = e.detail || [];
  mergeAdSlides();
  renderCarousel();
});

// AI-generated video advertisement override is permanently disabled.
// The runtime module (src/ai-ad-runtime.js) was removed, so no
// ai-ad-override-updated event is ever dispatched and no AI video can
// play over the hero carousel.

function initAds(){
  if(window._loadAds){
    window._loadAds().then(slides => { adminAdSlides=slides||[]; mergeAdSlides(); renderCarousel(); });
    window._subscribeAds && window._subscribeAds();
  }
}

function updateBadgeLanguage(){
  const copy=AD_COPY[currentLang]||AD_COPY.en;
  const bm={worldwide:{t:copy.worldwide,s:copy.worldwideSub},delivery:{t:copy.delivery,s:copy.deliverySub},secure:{t:copy.secure,s:copy.secureSub},support:{t:copy.support,s:copy.supportSub}};
  document.querySelectorAll("[data-badge]").forEach(el=>{const k=el.getAttribute("data-badge");if(bm[k])el.textContent=bm[k].t});
  document.querySelectorAll("[data-badge-sub]").forEach(el=>{const k=el.getAttribute("data-badge-sub");if(bm[k]){let s=bm[k].s;const c=COUNTRIES.find(c=>c.code===currentCountry);if(k==="worldwide"&&c)s="Shipping to "+c.name;el.textContent=s}});
}

function goToSlide(idx){
  const slides=document.querySelectorAll(".carousel-slide");
  slides.forEach(s=>{s.classList.remove("active-slide");s.classList.add("hidden-slide")});
  const sl=document.getElementById("slide-"+idx);
  if(sl){sl.classList.remove("hidden-slide");sl.classList.add("active-slide")}
  currentSlide=idx;resetCarouselTimer();playActiveVideo();updateShowcaseBadge();saveShowcasePosition();
}
function updateShowcaseBadge(){
  const b=document.getElementById('live-ad-badge');
  const t=document.getElementById('live-ad-badge-text');
  if(!b)return;
  const slide=activeCarouselSlides[currentSlide]||activeCarouselSlides[0]||{};
  if(t)t.textContent=cleanAdLabel(slide.badge)||'Featured';
  b.classList.remove('live-badge-in');
  void b.offsetWidth;
  b.classList.add('live-badge-in');
}

// Only the very first autoplay is deferred: on slow connections the hero
// video (~1MB) must not compete with the page's own scripts or keep the
// browser's loading indicator busy. It starts after the page has finished
// loading (with a fallback timer), or immediately if the user changes slides.
let heroVideoDeferred = true;
function playActiveVideo(){
  if (heroVideoDeferred) {
    heroVideoDeferred = false;
    if (document.readyState !== 'complete') {
      const startHeroVideo = () => playActiveVideo();
      window.addEventListener('load', startHeroVideo, { once: true });
      setTimeout(startHeroVideo, 3500);
      return;
    }
  }
  // Pause hidden videos
  const others=document.querySelectorAll(".carousel-slide.hidden-slide video");
  others.forEach(v=>{v.pause()});
  // Stop hidden slideshows
  document.querySelectorAll(".carousel-slide.hidden-slide .ad-slideshow").forEach(function(s){if(s._timer){clearInterval(s._timer);s._timer=null}});
  // Play active video
  const active=document.querySelector(".carousel-slide.active-slide video");
  if(active){
    if(!active.querySelector("source")){
      const src=document.createElement("source");
      src.src=active.getAttribute("data-src");src.type="video/mp4";
      active.appendChild(src);active.load();
    }
    active.currentTime=0;active.play().catch(()=>{});
  }
  // Start active slideshow
  const activeSS=document.querySelector(".carousel-slide.active-slide .ad-slideshow");
  if(activeSS&&!activeSS._timer){
    var imgs=activeSS.querySelectorAll(".ad-slideshow-img");
    if(imgs.length>1){
      var cur=0;var interval=parseInt(activeSS.getAttribute("data-interval"))||4000;
      activeSS._timer=setInterval(function(){
        imgs[cur].style.opacity='0';cur=(cur+1)%imgs.length;imgs[cur].style.opacity='1';
      },interval);
    }
  }
  preloadNextVideo();
}

function preloadNextVideo(){
  var n=activeCarouselSlides.length;
  for(var off=1;off<=3;off++){
    var idx=(currentSlide+off)%n;
    var el=document.getElementById("slide-"+idx);
    if(!el)continue;
    var v=el.querySelector("video");
    if(v&&!v.querySelector("source")){
      var src=document.createElement("source");
      src.src=v.getAttribute("data-src");src.type="video/mp4";
      v.appendChild(src);
      v.preload=(off<=2)?"auto":"metadata";
      v.load();
    }
    var ss=el.querySelector(".ad-slideshow");
    if(ss){ss.querySelectorAll(".ad-slideshow-img[data-src]").forEach(function(d){if(!d.style.backgroundImage&&d.getAttribute("data-src"))d.style.backgroundImage="url('"+d.getAttribute("data-src")+"')"})}
  }
}

function nextSlide(){goToSlide((currentSlide+1)%activeCarouselSlides.length)}
function prevSlide(){goToSlide((currentSlide-1+activeCarouselSlides.length)%activeCarouselSlides.length)}

function startCarouselTimer(){
  carouselTimer=setInterval(()=>nextSlide(),10000)
}
function resetCarouselTimer(){
  clearInterval(carouselTimer);
  startCarouselTimer();
}



// ---- LIVE CLOCK ----
// Renders in the detected location's timezone (from IP/GPS) so the day and time
// always match the user's real location, not the device's system clock setting.
// Falls back to the device timezone until a location is detected.
function updateClock(){
  const tz=detectedLocation&&detectedLocation.timezone&&detectedLocation.timezone!=="â€”"
    ?detectedLocation.timezone
    :Intl.DateTimeFormat().resolvedOptions().timeZone;
  const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  const parts=new Intl.DateTimeFormat("en-US",{
    timeZone:tz,weekday:"short",day:"2-digit",month:"long",year:"numeric",
    hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false
  }).formatToParts(new Date());
  const get=t=>(parts.find(p=>p.type===t)||{}).value||"";
  const wd=get("weekday");
  const dayName=days.find(d=>d.slice(0,3)===wd.slice(0,3))||wd;
  document.getElementById("live-day").textContent=dayName;
  document.getElementById("live-date").textContent=get("day");
  document.getElementById("live-month").textContent=get("month");
  document.getElementById("live-year").textContent=get("year");
  let h=get("hour");if(h==="24")h="00";
  document.getElementById("live-time").textContent=h+":"+get("minute")+":"+get("second");
}

// ---- LIVE LOCATION DETECTION ----
let detectedLocation={country:"â€”",state:"",city:"â€”",timezone:"â€”",source:"none",vpn:false};
let locationDetected=false;

function setTimezoneDisplay(){
  try{
    // Only fall back to the device timezone when no location has been detected yet.
    // Never overwrite a timezone obtained from IP/GPS detection with the device clock.
    if(!locationDetected||detectedLocation.timezone==="â€”"){
      detectedLocation.timezone=Intl.DateTimeFormat().resolvedOptions().timeZone||"â€”";
    }
    const el=document.getElementById("live-timezone");
    if(el)el.textContent=detectedLocation.timezone;
  }catch(e){}
}

function applyLocationToBar(){
  const c=document.getElementById("live-country");
  const ci=document.getElementById("live-city");
  const v=document.getElementById("vpn-warning");
  if(c)c.textContent=detectedLocation.country||"â€”";
  if(ci){
    let label=detectedLocation.city||"â€”";
    if(detectedLocation.state&&detectedLocation.state!==detectedLocation.city)label=label+", "+detectedLocation.state;
    ci.textContent=label;
  }
  if(v)v.classList.toggle("hidden",!detectedLocation.vpn);
}

function detectLocationByIP(){
  // Reliable, no-key IP geolocation. Tries ipapi.co first, then ip-api.com.
  fetch("https://ipapi.co/json/").then(r=>r.json()).then(d=>{
    if(!d||(d.error||(d.country_code||d.country)===undefined))throw 0;
    detectedLocation={
      country:d.country_name||d.country||"â€”",
      state:d.region||d.regionName||"",
      city:d.city||"â€”",
      timezone:d.timezone||detectedLocation.timezone||"â€”",
      source:"ip",
      vpn:false
    };
    // VPN heuristic: ipapi.co sets org to hosting/VPN providers; ip-api.com sets proxy/hosting flags
    const org=(d.org||d.asn||"").toLowerCase();
    if(org.includes("vpn")||org.includes("proxy")||org.includes("hosting")||org.includes("datacenter"))detectedLocation.vpn=true;
    locationDetected=true;
    setTimezoneDisplay();
    applyLocationToBar();
    updateClock();
  }).catch(()=>{
    // Fallback: ip-api.com (http only on http pages, https on https)
    fetch("https://ip-api.com/json/?fields=status,country,regionName,city,timezone,proxy,hosting,isp").then(r=>r.json()).then(d=>{
      if(!d||d.status!=="success")throw 0;
      detectedLocation={
        country:d.country||"â€”",
        state:d.regionName||"",
        city:d.city||"â€”",
        timezone:d.timezone||detectedLocation.timezone||"â€”",
        source:"ip",
        vpn:!!(d.proxy||d.hosting)
      };
      locationDetected=true;
      setTimezoneDisplay();
      applyLocationToBar();
      updateClock();
    }).catch(()=>{
      // Final fallback: timezone-derived country only
      setTimezoneDisplay();
      try{
        const tz=Intl.DateTimeFormat().resolvedOptions().timeZone||"";
        const tzCity=tz.split("/")[1]||"";
        const tzMap={"New_York":"US","Los_Angeles":"US","Chicago":"US","Denver":"US","London":"GB","Paris":"FR","Berlin":"DE","Madrid":"ES","Rome":"IT","Tokyo":"JP","Seoul":"KR","Shanghai":"CN","Beijing":"CN","Hong_Kong":"HK","Singapore":"SG","Sydney":"AU","Melbourne":"AU","Toronto":"CA","Vancouver":"CA","Mexico_City":"MX","Sao_Paulo":"BR","Buenos_Aires":"AR","Mumbai":"IN","Delhi":"IN","Dubai":"AE","Istanbul":"TR","Moscow":"RU","Cairo":"EG","Lagos":"NG","Nairobi":"KE","Johannesburg":"ZA","Stockholm":"SE","Oslo":"NO","Helsinki":"FI","Copenhagen":"DK","Amsterdam":"NL","Brussels":"BE","Vienna":"AT","Zurich":"CH","Dublin":"IE","Lisbon":"PT","Athens":"GR","Warsaw":"PL","Prague":"CZ","Budapest":"HU","Bucharest":"RO","Bangkok":"TH","Hanoi":"VN","Jakarta":"ID","Kuala_Lumpur":"MY","Manila":"PH","Taipei":"TW","Riyadh":"SA","Doha":"QA","Kuwait":"KW","Tehran":"IR","Karachi":"PK","Dhaka":"BD","Colombo":"LK"};
        const cc=tzMap[tzCity];
        if(cc){const c=COUNTRIES.find(x=>x.code===cc);detectedLocation.country=c?c.name:cc;}
        if(tzCity)detectedLocation.city=tzCity.replace(/_/g," ");
      }catch(e){}
      detectedLocation.source="tz";
      locationDetected=true;
      applyLocationToBar();
    });
  });
}

function detectLocationByGPS(){
  if(!navigator.geolocation)return false;
  navigator.geolocation.getCurrentPosition(pos=>{
    const{latitude:lat,longitude:lon}=pos.coords;
    // Reverse geocode via free OpenStreetMap Nominatim (rate-limited, no key)
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`,{headers:{"Accept-Language":"en"}}).then(r=>r.json()).then(d=>{
      if(!d||!d.address)throw 0;
      const a=d.address;
      detectedLocation={
        country:a.country||detectedLocation.country||"â€”",
        state:a.state||a.region||a.county||"",
        city:a.city||a.town||a.village||a.hamlet||a.municipality||detectedLocation.city||"â€”",
        timezone:detectedLocation.timezone||"â€”",
        source:"gps",
        vpn:false
      };
      locationDetected=true;
      setTimezoneDisplay();
      applyLocationToBar();
      updateClock();
    }).catch(()=>{});
  },()=>{},
  {enableHighAccuracy:true,timeout:8000,maximumAge:300000});
  return true;
}

function initLiveLocation(){
  setTimezoneDisplay();
  // Always run IP detection â€” it provides the authoritative timezone for the clock.
  // GPS (when available) refines city/country/state in parallel but does not override the timezone.
  detectLocationByIP();
  detectLocationByGPS();
  // Auto-refresh timezone if the browser reports a change (e.g. user travels)
  try{
    if("timeZone" in Intl.DateTimeFormat().resolvedOptions()){
      let lastTz=Intl.DateTimeFormat().resolvedOptions().timeZone;
      setInterval(()=>{
        const tz=Intl.DateTimeFormat().resolvedOptions().timeZone;
        if(tz!==lastTz){lastTz=tz;if(!locationDetected)setTimezoneDisplay();}
      },15000);
    }
  }catch(e){}
}

// ---- HOLIDAY ENGINE ----
function updateHolidayInfo(){
  const holidays=HOLIDAYS[currentCountry]||[];
  const now=new Date();
  const tk=String(now.getMonth()+1).padStart(2,"0")+"-"+String(now.getDate()).padStart(2,"0");
  const today=holidays.find(h=>h.date===tk);
  if(today){document.getElementById("holiday-text").textContent="Today: "+today.name;return}
  let next=null,minDiff=Infinity;
  holidays.forEach(h=>{const[mm,dd]=h.date.split("-");let hd=new Date(now.getFullYear(),parseInt(mm)-1,parseInt(dd));if(hd<now)hd.setFullYear(now.getFullYear()+1);const diff=hd-now;if(diff<minDiff){minDiff=diff;next=h}});
  const cn=COUNTRIES.find(c=>c.code===currentCountry)?.name||currentCountry;
  if(next){const days=Math.ceil(minDiff/(864e5));document.getElementById("holiday-text").textContent="Next event in "+cn+": "+next.name+" (in "+days+" days)"}
  else{document.getElementById("holiday-text").textContent="No upcoming events for "+cn}
}

// ---- REGION SETTINGS ----
function saveRegionSettings(){
  currentCountry=document.getElementById("country").value;
  currentLang=document.getElementById("language").value;
  localStorage.setItem("kco_country",currentCountry);localStorage.setItem("kco_language",currentLang);
  updateBadgeLanguage();
}
function loadRegionSettings(){
  const sc=localStorage.getItem("kco_country"),sl=localStorage.getItem("kco_language");
  if(sc){document.getElementById("country").value=sc;currentCountry=sc}else{currentCountry=document.getElementById("country").value||"US"}
  if(sl){document.getElementById("language").value=sl;currentLang=sl}else{currentLang=document.getElementById("language").value||"en"}
}

// ---- AUTO COUNTRY & LANGUAGE DETECTION ----
// Runs once on first visit (no saved preference). Detects from browser settings,
// shows a friendly notification, and is VPN-aware (never forces a change).
// Country -> native language map: a visitor from a non-English country always
// sees the site in their own language automatically (VPN included), and it only
// changes if they pick another language themselves.
var COUNTRY_LANG={US:"en",GB:"en",AU:"en",NZ:"en",CA:"en",IE:"en",ZA:"en",NG:"en",GH:"en",KE:"sw",TZ:"sw",UG:"sw",ES:"es",MX:"es",AR:"es",CO:"es",CL:"es",PE:"es",VE:"es",BO:"es",PY:"es",UY:"es",CR:"es",PA:"es",GT:"es",HN:"es",SV:"es",NI:"es",DO:"es",EC:"es",FR:"fr",BE:"fr",LU:"fr",MC:"fr",HT:"fr",SN:"fr",CI:"fr",ML:"fr",BF:"fr",NE:"fr",TG:"fr",BJ:"fr",MG:"fr",CM:"fr",DE:"de",AT:"de",CH:"de",LI:"de",IT:"it",SM:"it",PT:"pt",BR:"pt",AO:"pt",MZ:"pt",NL:"nl",RU:"ru",BY:"ru",KZ:"ru",KG:"ru",SA:"ar",AE:"ar",EG:"ar",DZ:"ar",MA:"ar",TN:"ar",LY:"ar",SY:"ar",JO:"ar",LB:"ar",IQ:"ar",KW:"ar",QA:"ar",BH:"ar",OM:"ar",YE:"ar",SD:"ar",MR:"ar",CN:"zh",TW:"zh",HK:"zh",SG:"zh",JP:"ja",KR:"ko",IN:"hi",PK:"ur",BD:"bn",LK:"si",NP:"ne",IR:"fa",AF:"fa",TR:"tr",AZ:"az",UZ:"uz",ID:"id",MY:"ms",BN:"ms",TH:"th",VN:"vi",KH:"km",LA:"lo",MM:"my",PL:"pl",CZ:"cs",SK:"sk",HU:"hu",RO:"ro",BG:"bg",HR:"hr",SR:"sr",SI:"sl",MK:"mk",BA:"bs",SE:"sv",DK:"da",FI:"fi",NO:"no",IS:"is",UA:"uk",GR:"el",CY:"el",IL:"he",ET:"am",GE:"ka",AM:"hy"};
function detectRegionAuto(){
  // Only auto-detect on first visit â€” if user already has a preference, respect it
  if(localStorage.getItem("kco_country")||localStorage.getItem("kco_language"))return;
  let detectedCountry=null,detectedLang=null,usedFallback=false;

  // 1) Try browser locale (navigator.language) â€” works even behind VPN
  try{
    const navLang=(navigator.language||navigator.userLanguage||"en").toLowerCase();
    const parts=navLang.split(/[-_]/);
    const langCode=parts[0];
    const regionCode=(parts[1]||"").toUpperCase();
    // Map browser region to our country list if present
    if(regionCode&&COUNTRIES.some(c=>c.code===regionCode))detectedCountry=regionCode;
    // Map browser language to our language list
    if(LANGUAGES.some(l=>l.code===langCode))detectedLang=langCode;
    // Common languageâ†’country fallback when region absent
    if(!detectedCountry){
      const langToCountry={en:"US",es:"ES",fr:"FR",de:"DE",ja:"JP",zh:"CN",pt:"PT",ru:"RU",hi:"IN",ar:"SA",it:"IT",ko:"KR",nl:"NL",sv:"SE",pl:"PL",tr:"TR",id:"ID",th:"TH",vi:"VN",uk:"UA",cs:"CZ",da:"DK",fi:"FI",no:"NO",el:"GR",he:"IL",ms:"MY"};
      if(langToCountry[langCode])detectedCountry=langToCountry[langCode];
    }
    if(!detectedLang)detectedLang="en"; // English as universal fallback
  }catch(e){detectedLang="en";usedFallback=true}

  // 2) Try timezone as a secondary signal (Intl API)
  let tzCountry=null;
  try{
    const tz=Intl.DateTimeFormat().resolvedOptions().timeZone||"";
    const tzCity=tz.split("/")[1]||"";
    const tzMap={"New_York":"US","Los_Angeles":"US","Chicago":"US","Denver":"US","London":"GB","Paris":"FR","Berlin":"DE","Madrid":"ES","Rome":"IT","Tokyo":"JP","Seoul":"KR","Shanghai":"CN","Beijing":"CN","Hong_Kong":"HK","Singapore":"SG","Sydney":"AU","Melbourne":"AU","Toronto":"CA","Vancouver":"CA","Mexico_City":"MX","Sao_Paulo":"BR","Buenos_Aires":"AR","Mumbai":"IN","Delhi":"IN","Dubai":"AE","Istanbul":"TR","Moscow":"RU","Cairo":"EG","Lagos":"NG","Nairobi":"KE","Johannesburg":"ZA","Stockholm":"SE","Oslo":"NO","Helsinki":"FI","Copenhagen":"DK","Amsterdam":"NL","Brussels":"BE","Vienna":"AT","Zurich":"CH","Dublin":"IE","Lisbon":"PT","Athens":"GR","Warsaw":"PL","Prague":"CZ","Budapest":"HU","Bucharest":"RO","Bangkok":"TH","Hanoi":"VN","Jakarta":"ID","Kuala_Lumpur":"MY","Manila":"PH","Taipei":"TW","Riyadh":"SA","Doha":"QA","Kuwait":"KW","Tehran":"IR","Karachi":"PK","Dhaka":"BD","Colombo":"LK"};
    if(tzMap[tzCity])tzCountry=tzMap[tzCity];
  }catch(e){}

  // VPN awareness: if timezone country differs from browser-language country, likely VPN
  const vpnMismatch=tzCountry&&detectedCountry&&tzCountry!==detectedCountry;

  // Prefer timezone country when available (more reliable than browser language region)
  const finalCountry=tzCountry||detectedCountry||"US";
  // Use the detected country's native language automatically so every visitor
  // sees their own language (even with a VPN). Falls back to their browser
  // language, then English.
  const finalLang=COUNTRY_LANG[finalCountry]||detectedLang||"en";

  // Apply detected values to selectors
  const countrySel=document.getElementById("country");
  const langSel=document.getElementById("language");
  if(countrySel&&COUNTRIES.some(c=>c.code===finalCountry)){countrySel.value=finalCountry;currentCountry=finalCountry}
  if(langSel&&LANGUAGES.some(l=>l.code===finalLang)){langSel.value=finalLang;currentLang=finalLang}

  // Save so we don't re-detect on every visit
  localStorage.setItem("kco_country",currentCountry);
  localStorage.setItem("kco_language",currentLang);
  localStorage.setItem("kco_auto_detected","1");

  // Show friendly notification
  const countryName=COUNTRIES.find(c=>c.code===finalCountry)?.name||finalCountry;
  const langName=LANGUAGES.find(l=>l.code===finalLang)?.name||finalLang;
  let msg;
  if(vpnMismatch){
    const tzName=COUNTRIES.find(c=>c.code===tzCountry)?.name||tzCountry;
    msg="It looks like you're browsing from a different location. Your country has been detected as "+countryName+", but you can switch to your preferred country and language at any time.";
  }else{
    msg="Your location has been detected as "+countryName+". Language: "+langName+". You can change these settings at any time.";
  }
  showRegionNotification(msg);
}

function showRegionNotification(msg){
  // Non-blocking toast pinned to the bottom-left corner so it never covers the
  // page content, auto-hides, and can be dismissed instantly.
  let n=document.getElementById("region-detect-notification");
  if(!n){
    n=document.createElement("div");
    n.id="region-detect-notification";
    n.className="fixed bottom-5 left-4 z-[55] max-w-[320px] w-[calc(100vw-2rem)] bg-white border border-blue-200 rounded-2xl shadow-2xl px-4 py-3 flex items-start gap-3 transition-all duration-500";
    n.innerHTML='<i data-lucide="globe" class="w-5 h-5 text-blue-600 shrink-0 mt-0.5"></i>'+
      '<div class="flex-1 min-w-0"><p class="text-xs text-gray-700 leading-snug" id="region-detect-text"></p>'+
      '<button onclick="document.getElementById(\'region-detect-notification\').classList.add(\'opacity-0\',\'translate-y-2\');setTimeout(()=>document.getElementById(\'region-detect-notification\').remove(),400)" class="text-[10px] text-blue-600 hover:text-blue-700 font-semibold mt-1.5">Dismiss</button></div>'+
      '<button onclick="document.getElementById(\'region-detect-notification\').remove()" class="text-gray-400 hover:text-gray-700 shrink-0 text-[10px] font-bold uppercase tracking-wide" aria-label="Close">✕</button>';
    document.body.appendChild(n);
    if(window.lucide)lucide.createIcons();
  }
  document.getElementById("region-detect-text").textContent=msg;
  n.classList.remove("opacity-0","translate-y-2");
  clearTimeout(n._t);
  n._t=setTimeout(()=>{n.classList.add("opacity-0","translate-y-2");setTimeout(()=>n.remove(),400)},8000);
}

// ---- UI HELPERS ----
function toggleNotifications(){document.getElementById("notification-panel").classList.toggle("hidden")}
function openAuthModal(){var cur=window.location.pathname+window.location.search;if(!cur||cur==="/"){window.location.href="/auth.html"}else{window.location.href="/auth.html?redirect="+encodeURIComponent(cur)}}
function closeAuthModal(){document.getElementById("auth-modal").classList.add("hidden")}
function switchAuthTab(tab){
  const lt=document.getElementById("tab-login"),rt=document.getElementById("tab-register"),uf=document.getElementById("field-username"),sb=document.getElementById("auth-submit-btn");
  if(tab==="login"){lt.classList.add("text-blue-500","border-b-2","border-blue-500");lt.classList.remove("text-gray-400");rt.classList.remove("text-blue-500","border-b-2","border-blue-500");rt.classList.add("text-gray-400");uf.classList.add("hidden");sb.textContent="Sign In"}
  else{rt.classList.add("text-blue-500","border-b-2","border-blue-500");rt.classList.remove("text-gray-400");lt.classList.remove("text-blue-500","border-b-2","border-blue-500");lt.classList.add("text-gray-400");uf.classList.remove("hidden");sb.textContent="Create Account"}
}
function handleAuthSubmit(e){e.preventDefault();closeAuthModal();showToast("Authentication processing...")}
function showToast(msg){
  const t=document.getElementById("toast");document.getElementById("toast-message").textContent=msg;
  t.classList.remove("translate-y-20","opacity-0");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.add("translate-y-20","opacity-0"),3000);
}
window.showToast=showToast;
window._showToast=showToast;

// ---- BOOTSTRAP ----
document.addEventListener("DOMContentLoaded",()=>{
  populateSelectors();loadRegionSettings();detectRegionAuto();renderCategories();setupSearchSuggestions();
  renderCarousel();updateBadgeLanguage();
  lucide.createIcons();
  // The live date/time/location bar is intentionally hidden (not removed). When
  // hidden we skip the ticking clock and the IP/GPS location requests so they
  // never hang the network or distract the customer.
  const trustBar=document.getElementById("trust-bar");
  if(trustBar&&!trustBar.classList.contains("hidden")){
    updateClock();
    setInterval(updateClock,1000);
    initLiveLocation();
  }
  initAds();
});
// Re-render the category nav once the live showroom data (DB products,
// generated catalog, trucks) is loaded so new categories appear automatically.
document.addEventListener("smart-search-ready",()=>{renderCategories();});
document.addEventListener("showroom-categories-ready",()=>{renderCategories();});
