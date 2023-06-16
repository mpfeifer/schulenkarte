/*
 * locations.js
 * Started on Montag, 25 September 2017.
 */

var locations = [
    {"lat": "50.804713", "lng": "6.051910", "name":
     "Anne-Frank-Gymnasium", "url": "http://anne-frank-gymnasium.de",
     "typ": "gymnasium"}, 
    {"lat": "50.819910", "lng": "6.126426", "name": "Gymnasium"
     + " Würselen", "url": "http://gymnasium-wuerselen.de", "typ":
     "gymnasium"},
    {"lat": "50.842504", "lng": "6.173747", "name":
     "Heilig-Geist-Gymnasium", "url": "http://hgg-broich.de", "typ":
     "gymnasium"},
    {"lat": "50.860061", "lng": "6.152461", "name": "Gymnasium der"
     + " Stadt Alsdorf", "url": "http://daltongymnasium-alsdorf.de",
     "typ": "gymnasium"},
    {"lat": "50.863312", "lng": "6.106799", "name": "Städtische"
     + " Gymnasium Herzogernath", "url":
     "http://gymnasium-herzogenrath.de", "typ": "gymnasium"},
    {"lat": "50.824941", "lng": "6.266100", "name": "Bischöfliche"
     + " Liebfrauenschule", "url": "http://bls-eschweiler.de", "typ":
     "gymnasium"},
    {"lat": "50.819736", "lng": "6.271937", "name": "Städtisches"
     + " Gymnasium Eschweiler", "url":
     "http://http://gymnasiumeschweiler.de", "typ": "gymnasium"},
    {"lat": "50.780243", "lng": "6.084139", "name": "Gymnasium"
     + " St. Ursula", "url": "http://st-ursula-aachen.de", "typ":
     "gymnasium"},
    {"lat": "50.776770", "lng": "6.081050", "name":
     "Kaiser-Karls-Gymnasium", "url":
     "http://kaiser-karls-gymnasium.de", "typ": "gymnasium"},
    {"lat": "50.772862", "lng": "6.082079", "name": "Städtisches"
     + " Gymnasium St. Leonhard", "url": "http://slg-aachen.de",
     "typ": "gymnasium"},
    {"lat": "50.776336", "lng": "6.122592", "name":
     "Geschwister-Scholl-Gymnasium", "url":
     "http://geschwister-scholl-gymnasium-aachen.de", "typ":
     "gymnasium"},
    {"lat": "50.768085", "lng": "6.221469", "name": "Goethe"
     + " Gymnasium", "url": "http://goethe-gymnasium-stolberg.de",
     "typ": "gymnasium"},
    {"lat": "50.762656", "lng": "6.070407", "name": "Städt. Couven"
     + " Gymnasium Aachen", "url": "http://couven-gymnasium.de",
     "typ": "gymnasium"},
    {"lat": "50.757010", "lng": "6.086886", "name":
     "Rhein-Maas-Gymnasium", "url": "http://rmg-aachen.de", "typ":
     "gymnasium"},
    {"lat": "50.767010", "lng": "6.093752", "name":
     "Einhard-Gymnasium", "url": "http://einhard-gymnasium.de", "typ":
     "gymnasium"},
    {"lat": "50.919592", "lng": "6.109922", "name":
     "Carolus-Magnus-Gymnasium" + " Übach-Palenberg", "url":
     "http://carolus-magnus-gymnasium.de", "typ": "gymnasium"},
    {"lat": "50.886676", "lng": "6.113483", "name": "Europaschule Herzogenrath - Städt. Gesamtschule", "url": "http://europaschuleherzogenrath.de", "typ": "gs"},
    {"lat": "50.885593", "lng": "6.172877", "name": "Gustav-Heinemann-Gesamtschule Alsdorf", "url": "http://ghg-alsdorf.de", "typ": "gs"},
    {"lat": "50.820245", "lng": "6.126872", "name": "Gesamtschule Würselen", "url": "http://gesamtschule-wuerselen.de", "typ": "gs"},
    {"lat": "50.803324", "lng": "6.066447", "name": "Heinrich-Heine-Gesamtschule", "url": "http://hhg-aachen.de", "typ": "gs"},
    {"lat": "50.803324", "lng": "6.247035", "name": "Waldschule Eschweiler", "url": "http://waldschule-eschweiler.de", "typ": "gs"},
    {"lat": "50.778582", "lng": "6.088420", "name": "Gesamtschule Aachen", "url": "http://gesamtschule-aachen.de", "typ": "gs"},
    {"lat": "50.764252", "lng": "6.119319", "name": "Maria-Montessori-Schule", "url": "http://mmge-ac.de", "typ": "gs"},
    {"lat": "50.767727", "lng": "6.237422", "name": "Gesamtscule Stolberg", "url": "http://gesamtschule-stolberg.de", "typ": "gs"},
    {"lat": "50.750787", "lng": "6.167384", "name": "Gesamtschule Aachen-Brand", "url": "http://ge-aachen-brand.de", "typ": "gs"}
];

locations.sort( function(p, q) {
    return p['lat'] < q['lat'];
});

var north=undefined, east=undefined, south=undefined, west=undefined;

locations.forEach( function(loc) {
    if (north) {
        if (loc['lat'] > north)
            north=loc['lat'];
    } else {
        north = loc['lat'];
    }
    if (south) {
        if (loc['lat'] < south)
            south=loc['lat'];
    } else {
        south = loc['lat'];
    }
    if (east) {
        if (loc['lng'] > east)
            east=loc['lng'];
    } else {
        east = loc['lng'];
    }
    if (west) {
        if (loc['lng'] < west)
            west=loc['lng'];
    } else {
        west = loc['lng'];
    }
});
