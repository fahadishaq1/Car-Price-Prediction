let modelSelect = document.querySelector('#model')
let modelFields = []
let models = [{
    name: 'abarth',
    fields: ["595", "500", "grande punto", "124"]
}, {
    name: 'acura',
    fields: ["rdx", "tsx", "mdx", "tl", "rl"]
}, {
    name: 'aixam',
    fields: ["city", "crossover", "crossline", "gto", "a751", "coupe"]
}, {
    name: 'alfa romeo',
    fields: ["giulia", "164", "147", "159", "gt", "giulietta", "brera", "stelvio", "mito", "spider", "166", "sportwagon", "gtv", "156", "145", "146", "crosswagon"]
}, {
    name: 'aston martin',
    fields: ["db9", "v8 vantage", "db7", "dbx", "dbs superleggera", "db11", "rapide", "vantage"]
}, {
    name: 'audi',
    fields: ["100", "80", "90", "a1", "a2", "a3", "a4 allroad", "a4", "a5", "a6 allroad", "a6", "a7", "a8", "cabriolet", "coupe", "e-tron", "q2", "q3", "q5", "q7", "q8", "r8", "rs q3", "rs q8", "rs3", "rs4", "rs5", "rs6", "rs7", "s1", "s3", "s4", "s5", "s6", "s7", "s8", "sq5", "sq7", "sq8", "tt rs", "tt s", "tt"]
}, {
    name: 'bentley',
    fields: ["bentayga", "continental flying spur", "continental gt", "mulsanne", "arnage"]
}, {
    name: 'bmw',
    fields: ["1m", "3gt", "seria 3", "5gt", "6gt", "i3", "i8", "m2", "m3", "m4", "m5", "m6", "m8", "seria 1", "seria 2", "seria 4", "seria 5", "seria 6", "seria 7", "seria 8", "x1", "x2", "x3 m", "x3", "x4", "x5 m", "x5", "x6 m", "x6", "x7", "z3", "z4"]
}, {
    name: 'buick',
    fields: ["park avenue", "riviera", "enclave", "reatta", "century", "lacrosse", "le sabre", "regal", "rendezvous"]
}, {
    name: 'cadillac',
    fields: ["escalade", "cts", "seville", "bls", "eldorado", "srx", "sts", "xt5", "ats", "deville", "ct6", "xlr", "xts", "fleetwood", "brougham", "dts"]
}, {
    name: 'chevrolet',
    fields: ["cruze", "captiva", "corvette", "matiz", "equinox", "orlando", "trax", "spark", "camaro", "aveo", "express", "lacetti", "nubira", "hhr", "k1500", "trans sport", "caprice", "suburban", "kalos", "tahoe", "tacuma", "volt", "astro", "malibu", "traverse", "trailblazer", "epica", "evanda", "blazer", "silverado", "chevy van", "alero", "impala", "avalanche", "colorado", "monte carlo", "rezzo", "apache", "s-10", "c-10"]
}, {
    name: 'chrysler',
    fields: ["200", "pacifica", "300c", "pt cruiser", "crossfire", "grand voyager", "aspen", "town & country", "new yorker", "sebring", "voyager", "neon", "300m", "300", "stratus", "300s", "vision", "le baron"]
}, {
    name: 'citroën',
    fields: ["c1", "xsara picasso", "c5 aircross", "c4", "c4 picasso", "c3 aircross", "c3", "berlingo", "c3 picasso", "spacetourer", "c4 spacetourer", "xsara", "c4 aircross", "c8", "ds4", "jumpy combi", "c4 grand picasso", "c-elysée", "c5", "ds5", "ds3", "2 cv", "c4 cactus", "jumper", "c2", "c6", "c-crosser", "nemo", "c3 pluriel", "zx", "evasion", "saxo", "xantia", "bx", "xm", "ds", "ax"]
}, {
    name: 'cupra',
    fields: ["ateca", "formentor", "leon sportstourer", "leon"]
}, {
    name: 'dacia',
    fields: ["duster", "dokker", "sandero", "lodgy", "sandero stepway", "logan", "dokker van", "logan van"]
}, {
    name: 'daewoo',
    fields: ["tico", "matiz", "rezzo", "lanos", "musso", "chairman", "kalos", "nubira", "espero", "leganza", "tacuma", "evanda"]
}, {
    name: 'daihatsu',
    fields: ["sirion", "feroza", "terios", "yrv", "cuore", "materia", "trevis", "rocky", "charade"]
}, {
    name: 'dodge',
    fields: ["durango", "ram", "challenger", "journey", "nitro", "charger", "grand caravan", "caliber", "viper", "magnum", "avenger", "dart", "caravan", "dakota"]
}, {
    name: 'ds automobiles',
    fields: ["ds 5", "ds 7 crossback", "ds 3", "ds 3 crossback", "ds 4 crossback", "ds 4"]
}, {
    name: 'ferrari',
    fields: ["488", "458 italia", "california", "f8 tributo", "portofino", "ff", "360", "gtc4lusso", "400", "f355", "308", "348", "f12berlinetta", "mondial", "599gtb", "f430", "575", "812 superfast", "testarossa"]
}, {
    name: 'fiat',
    fields: ["doblo", "grande punto", "panda", "tipo", "stilo", "cinquecento", "500x", "500l", "punto", "500", "albea", "bravo", "seicento", "freemont", "ducato", "fiorino", "punto evo", "scudo", "marea", "124", "126", "sedici", "qubo", "600", "multipla", "punto 2012", "croma", "idea", "uno", "brava", "127", "linea", "125p", "ulysse", "talento", "siena", "coupe", "fullback", "barchetta", "124 spider", "131", "strada", "palio", "tempra", "x 1"]
}, {
    name: 'ford',
    fields: ["b-max", "c-max", "capri", "cougar", "courier", "crown", "econoline", "ecosport", "edge", "escape", "escort", "excursion", "expedition", "explorer", "f150", "f250", "f350", "fairlane", "fiesta", "flex", "focus c-max", "focus", "freestar", "fusion", "galaxy", "granada", "grand c-max", "ka", "ka+", "kuga", "maverick", "mercury", "mondeo", "mustang", "orion", "probe", "puma", "ranchero", "ranger raptor", "ranger", "s-max", "scorpio", "sierra", "streetka", "taunus", "taurus", "thunderbird", "tourneo connect", "tourneo courier", "tourneo custom", "transit connect", "transit courier", "transit custom", "transit", "windstar"]
}, {
    name: 'gmc',
    fields: ["yukon", "savana", "sierra", "terrain"]
}, {
    name: 'honda',
    fields: ["cr-v", "accord", "civic", "jazz", "hr-v", "odyssey", "fr-v", "city", "prelude", "legend", "insight", "s 2000", "cr-z", "crx", "stream", "pilot", "ridgeline", "integra"]
}, {
    name: 'hummer',
    fields: ["h2", "h3", "h1"]
}, {
    name: 'hyundai',
    fields: ["ix35", "i30", "i40", "tucson", "i10", "getz", "i20", "veloster", "ix20", "elantra", "matrix", "santa fe", "kona", "accent", "coupe", "genesis coupe", "atos", "sonata", "terracan", "h-1", "ioniq", "ix55", "i30 n", "galloper", "genesis", "trajet", "grandeur", "grand santa fe", "pony", "h-1 starex", "i25", "xg 30"]
}, {
    name: 'infiniti',
    fields: ["fx", "q50", "qx70", "g", "ex", "q70", "q30", "qx50", "qx30", "m", "qx60", "q60", "qx80", "qx"]
}, {
    name: 'isuzu',
    fields: ["d-max"]
}, {
    name: 'jaguar',
    fields: ["xf", "x-type", "e-pace", "f-pace", "xe", "xj", "xjs", "s-type", "daimler", "xk", "xk8", "f-type", "e-type", "mk ii", "s-type r", "xjsc"]
}, {
    name: 'jeep',
    fields: ["renegade", "cherokee", "wrangler", "grand cherokee", "patriot", "gladiator", "compass", "commander", "liberty", "comanche", "wagoneer", "willys"]
}, {
    name: 'kia',
    fields: ["rio", "niro", "venga", "soul", "sportage", "picanto", "ceed", "stonic", "optima", "pro_cee'd", "xceed", "carens", "sorento", "magentis", "stinger", "opirus", "cerato", "carnival", "shuma", "joice", "sedona", "clarus"]
}, {
    name: 'lada',
    fields: ["niva", "kalina", "samara", "1117", "1118"]
}, {
    name: 'lamborghini',
    fields: ["huracan", "murcielago", "gallardo", "urus", "diablo", "aventador", "countach"]
}, {
    name: 'lancia',
    fields: ["delta", "ypsilon", "fulvia", "voyager", "lybra", "phedra", "musa", "thema", "thesis", "kappa", "gamma"]
}, {
    name: 'land rover',
    fields: ["discovery sport", "discovery", "range rover evoque", "freelander", "range rover", "range rover sport", "range rover velar", "defender"]
}, {
    name: 'lexus',
    fields: ["rc", "is", "nx", "gs", "sc", "rx", "ct", "es", "ls", "ux", "lx", "lc", "hs 250h", "gx"]
}, {
    name: 'ligier',
    fields: ["js50", "x-too max", "js50l", "x-too", "ixo", "ambra", "js rc"]
}, {
    name: 'lincoln',
    fields: ["navigator", "town car", "continental", "mark lt", "mkx", "mkz", "mark"]
}, {
    name: 'mazda',
    fields: ["3", "cx-3", "cx-5", "6", "2", "5", "cx-7", "mx-5", "323", "rx-8", "cx-30", "premacy", "cx-9", "mx-3", "626", "323f", "protege", "tribute", "rx-7", "929", "121", "mpv", "demio", "bt-50"]
}, {
    name: 'maserati',
    fields: ["quattroporte", "granturismo", "ghibli", "levante", "224", "grancabrio", "4200"]
}, {
    name: 'mclaren',
    fields: ["570 gt", "570s coupe", "mp4-12c", "720s coupe", "600lt spider", "570s spider"]
}, {
    name: 'mercedes-benz',
    fields: ["klasa b", "klasa e", "gls", "klasa c", "cla", "cls", "klasa a", "clk", "vito", "klasa s", "w201 (190)", "glc", "gla", "glb", "glk", "w124 (1984-1993)", "viano", "amg gt", "sprinter", "gle", "ml", "klasa v", "cl", "sl", "slk", "klasa r", "gl", "citan", "klasa g", "clc", "280", "w123", "klasa x", "vaneo", "slc", "sls"]
}, {
    name: 'mg',
    fields: ["mgf", "zs", "zr", "mgb", "mga", "zt", "td"]
}, {
    name: 'microcar',
    fields: ["virgo", "due first", "mc", "m.go", "highland x", "due", "ligier"]
}, {
    name: 'mini',
    fields: ["countryman", "one", "cooper s", "clubman", "cooper", "paceman", "1300"]
}, {
    name: 'mitsubishi',
    fields: ["lancer", "space star", "asx", "outlander", "eclipse cross", "carisma", "pajero pinin", "l200", "colt", "montero", "lancer evolution", "pajero", "galant", "grandis", "space wagon", "endeavor", "eclipse", "3000gt", "space gear", "l400", "sigma"]
}, {
    name: 'nissan',
    fields: ["note", "micra", "qashqai", "juke", "almera", "x-trail", "navara", "primera", "murano", "patrol", "frontier", "qashqai+2", "pathfinder", "almera tino", "tiida", "300 zx", "pulsar", "terrano", "sentra", "sunny", "pixo", "370 z", "primastar", "gt-r", "np300 pickup", "nv300", "nv200", "altima", "280 zx", "quest", "king cab", "rogue", "350 z", "100 nx", "titan", "laurel", "maxima", "cube", "pickup", "skyline", "kubistar", "200 sx", "bluebird"]
}, {
    name: 'oldsmobile',
    fields: ["bravada", "aurora", "delta 88", "cutlass", "eighty - eight", "toronado"]
}, {
    name: 'opel',
    fields: ["adam", "agila", "ampera", "antara", "ascona", "astra", "calibra", "campo", "cascada", "combo", "corsa", "crossland x", "frontera", "grandland x", "gt", "insignia", "kadett", "karl", "meriva", "mokka", "monterey", "monza", "movano", "omega", "rekord", "signum", "sintra", "speedster", "tigra", "vectra", "vivaro", "zafira"]
}, {
    name: 'peugeot',
    fields: ["307", "5008", "3008", "508", "207", "407", "206", "309", "208", "rcz", "partner", "308", "301", "2008", "307 cc", "107", "207 cc", "406", "206 cc", "306", "expert", "1007", "bipper", "4007", "boxer", "807", "308 cc", "607", "206 plus", "106", "rifter", "108", "4008", "traveller", "205", "405", "605"]
}, {
    name: 'polonez',
    fields: ["1.5", "atu", "caro", "1.6"]
}, {
    name: 'pontiac',
    fields: ["grand-prix", "firebird", "chieftain", "bonneville", "catalina", "fiero", "trans am"]
}, {
    name: 'porsche',
    fields: ["panamera", "718 cayman", "macan", "911", "cayenne", "cayman", "718 boxster", "928", "boxster", "944", "924", "356", "914"]
}, {
    name: 'ram',
    fields: ["1500"]
}, {
    name: 'renault',
    fields: ["captur", "kangoo", "talisman", "scenic", "modus", "clio", "espace", "megane", "koleos", "laguna", "trafic", "grand scenic", "kadjar", "twingo", "fluence", "scenic conquest", "thalia", "grand espace", "alaskan", "master", "19", "latitude", "4", "vel satis", "avantime", "safrane", "coupe", "scenic rx4", "18", "fuego", "wind", "5", "express"]
}, {
    name: 'rolls-royce',
    fields: ["silver shadow", "wraith", "cullinan", "silver spur", "ghost"]
}, {
    name: 'rover',
    fields: ["200", "416", "400", "45", "827", "75", "25", "214", "streetwise", "220"]
}, {
    name: 'saab',
    fields: ["9-3", "9-5", "9-7x", "9-3x", "9000", "900", "9-2x", "96"]
}, {
    name: 'seat',
    fields: ["ibiza", "exeo", "leon", "cordoba", "alhambra", "altea", "ateca", "toledo", "altea xl", "mii", "arona", "tarraco", "arosa", "marbella", "ronda"]
}, {
    name: 'skoda',
    fields: ["octavia", "rapid", "fabia", "superb", "scala", "kodiaq", "karoq", "citigo", "felicia", "kamiq", "yeti", "roomster", "praktik", "105", "favorit", "forman"]
}, {
    name: 'smart',
    fields: ["fortwo", "forfour", "roadster"]
}, {
    name: 'ssangyong',
    fields: ["tivoli", "korando", "rexton", "xlv", "kyron", "actyon", "musso", "rodius"]
}, {
    name: 'subaru',
    fields: ["impreza", "forester", "xv", "legacy", "outback", "b9 tribeca", "trezia", "levorg", "brz", "justy", "tribeca", "g3x justy", "wrx", "baja", "svx"]
}, {
    name: 'suzuki',
    fields: ["sx4", "vitara", "swift", "grand vitara", "sx4 s-cross", "jimny", "baleno", "wagon r+", "celerio", "splash", "ignis", "alto", "liana", "lj", "x-90", "swace", "across", "kizashi", "samurai", "sj", "xl7"]
}, {
    name: 'toyota',
    fields: ["avensis", "yaris", "land cruiser", "auris", "aygo", "corolla", "corolla verso", "rav4", "sequoia", "verso", "hilux", "camry", "highlander", "c-hr", "venza", "prius", "proace verso", "sienna", "proace city", "tacoma", "iq", "avensis verso", "yaris verso", "supra", "prius+", "avalon", "celica", "mr2", "4-runner", "starlet", "previa", "tundra", "proace", "verso s", "urban cruiser", "carina", "proace city verso", "fj", "gt86", "matrix", "paseo", "hiace", "camry solara", "crown"]
}, {
    name: 'volkswagen',
    fields: ["amarok", "arteon", "atlas", "beetle", "bora", "caddy", "california", "caravelle", "cc", "crafter", "eos", "fox", "garbus", "golf plus", "golf sportsvan", "golf", "jetta", "kafer", "karmann ghia", "lt", "lupo", "multivan", "new beetle", "passat cc", "passat", "phaeton", "polo", "routan", "santana", "scirocco", "sharan", "t-cross", "t-roc", "teramont", "tiguan allspace", "tiguan", "touareg", "touran", "transporter", "up!", "vento"]
}, {
    name: 'volvo',
    fields: ["xc 60", "xc 90", "v70", "v40", "xc 70", "v50", "c30", "s60", "v60", "s40", "s90", "xc 40", "v90", "s80", "c70", "s70", "850", "seria 900", "744", "262", "seria 200", "seria 700", "945", "340"]
}, ]

// function responsible for filtering the list based on selected manufacturer
function filterList(selectedValue) {
    clearModelSelect()
    let selected = selectedValue.value

    // used two seperate for loops instead of nested. Has lower time and space complexity
    for (let model of models) {
        if (selected === model.name) {
            modelFields = model.fields
        }
    }
    for (let field of modelFields) {
        modelSelect.insertAdjacentHTML('beforeend', `<option value="${field}">${capitalize(field)}</option>`)
    }
    modelFields = []
}

// function responsible for clearing the model select field
function clearModelSelect() {
    modelSelect.innerHTML = '<option value="">--Select an option--</option>'
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

clearModelSelect()