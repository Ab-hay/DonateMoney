export const BURN_MONEY_SMART_CONTRACT= "0xb1690C08E213a35Ed9bAb7B318DE14420FB57d8C";
export const ETHER_SCAN_API_TOKEN = "7IRFJK1CHFGBB4E4648VTX3BMDXSR319X3";
export const CONTRACT_ABI = [{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_startingPrice","type":"uint256"},{"name":"_endingPrice","type":"uint256"},{"name":"_duration","type":"uint256"},{"name":"_seller","type":"address"}],"name":"createAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"bid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"lastGen0SalePrices","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getAuction","outputs":[{"name":"seller","type":"address"},{"name":"startingPrice","type":"uint256"},{"name":"endingPrice","type":"uint256"},{"name":"duration","type":"uint256"},{"name":"startedAt","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ownerCut","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isSaleClockAuction","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"cancelAuctionWhenPaused","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gen0SaleCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"cancelAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getCurrentPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nonFungibleContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"averageGen0SalePrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_nftAddr","type":"address"},{"name":"_cut","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"startingPrice","type":"uint256"},{"indexed":false,"name":"endingPrice","type":"uint256"},{"indexed":false,"name":"duration","type":"uint256"}],"name":"AuctionCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"totalPrice","type":"uint256"},{"indexed":false,"name":"winner","type":"address"}],"name":"AuctionSuccessful","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"AuctionCancelled","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}];
export const pokemon = {
1: ["infocard ","infocard-lg-img","/pokedex/ivysaur","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ivysaur.png" ,"Ivysaur sprite","text-muted", "Ivysaur", "Grass"],
2: ["infocard ","infocard-lg-img","/pokedex/venusaur","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venusaur.png" ,"Venusaur sprite", " text-muted", "Venusaur", "Grass"],
3: ["infocard ","infocard-lg-img","/pokedex/charmander","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmander.png" ,"Charmander sprite"," text-muted", "Charmander", "Fire"],
4: ["infocard ","infocard-lg-img","/pokedex/charmeleon","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmeleon.png" ,"Charmeleon sprite"," text-muted","Charmeleon", "Fire"],
5: ["infocard ","infocard-lg-img","/pokedex/charizard","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charizard.png" ,"Charizard sprite"," text-muted","Charizard", "FireFlying"],
6: ["infocard ","infocard-lg-img","/pokedex/squirtle","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/squirtle.png" ,"Squirtle sprite", "text-muted","Squirtle","Water"],
7: ["infocard ","infocard-lg-img","/pokedex/wartortle","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wartortle.png" ,"Wartortle sprite", "text-muted","Wartortle", "Water"],
8: ["infocard ","infocard-lg-img","/pokedex/blastoise","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blastoise.png" ,"Blastoise sprite", "text-muted","Blastoise", "Water"],
9: ["infocard ","infocard-lg-img","/pokedex/caterpie","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/caterpie.png" ,"Caterpie sprite"," text-muted","Caterpie","Bug"],
10: ["infocard ","infocard-lg-img","/pokedex/metapod","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/metapod.png" ,"Metapod sprite"," text-muted","Metapod", "Bug"],
11: ["infocard ","infocard-lg-img","/pokedex/butterfree","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/butterfree.png" ,"Butterfree sprite"," text-muted","Butterfree", "BugFlying"],
12: ["infocard ","infocard-lg-img","/pokedex/weedle","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weedle.png" ,"Weedle sprite"," text-muted","Weedle","BugPoison"],
13: ["infocard ","infocard-lg-img","/pokedex/kakuna","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kakuna.png" ,"Kakuna sprite"," text-muted","Kakuna","BugPoison"],
14: ["infocard ","infocard-lg-img","/pokedex/beedrill","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beedrill.png" ,"Beedrill sprite"," text-muted","Beedrill","BugPoison"],
15: ["infocard ","infocard-lg-img","/pokedex/pidgey","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgey.png" ,"Pidgey sprite"," text-muted","Pidgey", "NormalFlying"],
16: ["infocard ","infocard-lg-img","/pokedex/pidgeotto","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeotto.png" ,"Pidgeotto sprite"," text-muted","Pidgeotto", "NormalFlying"],
17: ["infocard ","infocard-lg-img","/pokedex/pidgeot","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeot.png" ,"Pidgeot sprite"," text-muted","Pidgeot", "NormalFlying"],
18: ["infocard ","infocard-lg-img","/pokedex/rattata","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rattata.png" ,"Rattata sprite"," text-muted","Rattata", "Normal"],
19: ["infocard ","infocard-lg-img","/pokedex/raticate","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raticate.png" ,"Raticate sprite"," text-muted","Raticate", "Normal"],
20: ["infocard ","infocard-lg-img","/pokedex/spearow","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spearow.png" ,"Spearow sprite"," text-muted","Spearow", "NormalFlying"],
21: ["infocard ","infocard-lg-img","/pokedex/fearow","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fearow.png" ,"Fearow sprite"," text-muted","Fearow", "NormalFlying"],
22: ["infocard ","infocard-lg-img","/pokedex/ekans","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ekans.png" ,"Ekans sprite"," text-muted","Ekans","Poison"],
23: ["infocard ","infocard-lg-img","/pokedex/arbok","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arbok.png" ,"Arbok sprite"," text-muted","Arbok","Poison"],
24: ["infocard ","infocard-lg-img","/pokedex/pikachu","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pikachu.png" ,"Pikachu sprite"," text-muted","Pikachu","Electric"],
25: ["infocard ","infocard-lg-img","/pokedex/raichu","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raichu.png" ,"Raichu sprite"," text-muted","Raichu","Electric"],
26: ["infocard ","infocard-lg-img","/pokedex/sandshrew","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandshrew.png" ,"Sandshrew sprite"," text-muted","Sandshrew","Ground"],
27: ["infocard ","infocard-lg-img","/pokedex/sandslash","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandslash.png" ,"Sandslash sprite"," text-muted","Sandslash","Ground"],
28: ["infocard ","infocard-lg-img","/pokedex/nidoran-f","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoran-f.png" ,"Nidoran♀ sprite"," text-muted","Nidoran♀","Poison"],
29: ["infocard ","infocard-lg-img","/pokedex/nidorina","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidorina.png" ,"Nidorina sprite"," text-muted","Nidorina","Poison"],
30: ["infocard ","infocard-lg-img","/pokedex/nidoqueen","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoqueen.png" ,"Nidoqueen sprite"," text-muted","Nidoqueen","PoisonGround"],
31: ["infocard ","infocard-lg-img","/pokedex/nidoran-m","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoran-m.png" ,"Nidoran♂ sprite"," text-muted","Nidoran♂","Poison"],
32: ["infocard ","infocard-lg-img","/pokedex/nidorino","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidorino.png" ,"Nidorino sprite"," text-muted","Nidorino","Poison"],
33: ["infocard ","infocard-lg-img","/pokedex/nidoking","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoking.png" ,"Nidoking sprite"," text-muted","Nidoking","PoisonGround"],
34: ["infocard ","infocard-lg-img","/pokedex/clefairy","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clefairy.png" ,"Clefairy sprite"," text-muted","Clefairy","Fairy"],
35: ["infocard ","infocard-lg-img","/pokedex/clefable","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clefable.png" ,"Clefable sprite"," text-muted","Clefable","Fairy"],
36: ["infocard ","infocard-lg-img","/pokedex/vulpix","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vulpix.png" ,"Vulpix sprite"," text-muted","Vulpix","Fire"],
37: ["infocard ","infocard-lg-img","/pokedex/ninetales","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ninetales.png" ,"Ninetales sprite"," text-muted","Ninetales","Fire"],
38: ["infocard ","infocard-lg-img","/pokedex/jigglypuff","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jigglypuff.png" ,"Jigglypuff sprite"," text-muted","Jigglypuff", "NormalFairy"],
39: ["infocard ","infocard-lg-img","/pokedex/wigglytuff","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wigglytuff.png" ,"Wigglytuff sprite"," text-muted","Wigglytuff", "NormalFairy"],
40: ["infocard ","infocard-lg-img","/pokedex/zubat","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zubat.png" ,"Zubat sprite"," text-muted","Zubat","PoisonFlying"],
41: ["infocard ","infocard-lg-img","/pokedex/golbat","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golbat.png" ,"Golbat sprite"," text-muted","Golbat","PoisonFlying"],
42: ["infocard ","infocard-lg-img","/pokedex/oddish","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oddish.png" ,"Oddish sprite"," text-muted","Oddish","GrassPoison"],
43: ["infocard ","infocard-lg-img","/pokedex/gloom","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gloom.png" ,"Gloom sprite"," text-muted","Gloom","GrassPoison"],
44: ["infocard ","infocard-lg-img","/pokedex/vileplume","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vileplume.png" ,"Vileplume sprite"," text-muted","Vileplume","GrassPoison"],
45: ["infocard ","infocard-lg-img","/pokedex/paras","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/paras.png" ,"Paras sprite"," text-muted","Paras","BugGrass"],
46: ["infocard ","infocard-lg-img","/pokedex/parasect","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/parasect.png" ,"Parasect sprite"," text-muted","Parasect","BugGrass"],
47: ["infocard ","infocard-lg-img","/pokedex/venonat","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venonat.png" ,"Venonat sprite"," text-muted","Venonat", "BugPoison"],
48: ["infocard ","infocard-lg-img","/pokedex/venomoth","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venomoth.png" ,"Venomoth sprite"," text-muted","Venomoth","BugPoison"],
49: ["infocard ","infocard-lg-img","/pokedex/diglett","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/diglett.png" ,"Diglett sprite"," text-muted","Diglett","Ground"],
50: ["infocard ","infocard-lg-img","/pokedex/dugtrio","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dugtrio.png" ,"Dugtrio sprite"," text-muted","Dugtrio","Ground"],
51: ["infocard ","infocard-lg-img","/pokedex/meowth","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meowth.png" ,"Meowth sprite"," text-muted","Meowth", "Normal"],
52: ["infocard ","infocard-lg-img","/pokedex/persian","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/persian.png" ,"Persian sprite"," text-muted","Persian", "Normal"],
53: ["infocard ","infocard-lg-img","/pokedex/psyduck","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/psyduck.png" ,"Psyduck sprite"," text-muted","Psyduck","Water"],
54: ["infocard ","infocard-lg-img","/pokedex/golduck","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golduck.png" ,"Golduck sprite"," text-muted","Golduck","Water"],
55: ["infocard ","infocard-lg-img","/pokedex/mankey","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mankey.png" ,"Mankey sprite"," text-muted","Mankey","Fighting" ],
56: ["infocard ","infocard-lg-img","/pokedex/primeape","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/primeape.png" ,"Primeape sprite"," text-muted","Primeape", "Fighting"],
57: ["infocard ","infocard-lg-img","/pokedex/growlithe","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/growlithe.png" ,"Growlithe sprite"," text-muted","Growlithe","Fire"],
58: ["infocard ","infocard-lg-img","/pokedex/arcanine","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arcanine.png" ,"Arcanine sprite"," text-muted","Arcanine","Fire"],
59: ["infocard ","infocard-lg-img","/pokedex/poliwag","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwag.png" ,"Poliwag sprite"," text-muted","Poliwag","Water"],
60: ["infocard ","infocard-lg-img","/pokedex/poliwhirl","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwhirl.png" ,"Poliwhirl sprite"," text-muted","Poliwhirl", "Water"],
61: ["infocard ","infocard-lg-img","/pokedex/poliwrath","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwrath.png" ,"Poliwrath sprite"," text-muted","Poliwrath","WaterFighting"],
62: ["infocard ","infocard-lg-img","/pokedex/abra","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/abra.png" ,"Abra sprite"," text-muted","Abra", "Psychic"],
63: ["infocard ","infocard-lg-img","/pokedex/kadabra","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kadabra.png" ,"Kadabra sprite"," text-muted","Kadabra" ,"Psychic"],
64: ["infocard ","infocard-lg-img","/pokedex/alakazam","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/alakazam.png" ,"Alakazam sprite"," text-muted","Alakazam","Psychic"],
65: ["infocard ","infocard-lg-img","/pokedex/machop","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machop.png" ,"Machop sprite"," text-muted","Machop","Fighting"],
66: ["infocard ","infocard-lg-img","/pokedex/machoke","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machoke.png" ,"Machoke sprite"," text-muted","Machoke","Fighting"],
67: ["infocard ","infocard-lg-img","/pokedex/machamp","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machamp.png" ,"Machamp sprite"," text-muted","Machamp","Fighting"],
68: ["infocard ","infocard-lg-img","/pokedex/bellsprout","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bellsprout.png" ,"Bellsprout sprite"," text-muted","Bellsprout","GrassPoison"],
69: ["infocard ","infocard-lg-img","/pokedex/weepinbell","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weepinbell.png" ,"Weepinbell sprite"," text-muted","Weepinbell","GrassPoison"],
70: ["infocard ","infocard-lg-img","/pokedex/victreebel","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/victreebel.png" ,"Victreebel sprite"," text-muted","Victreebel","GrassPoison"],
71: ["infocard ","infocard-lg-img","/pokedex/tentacool","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tentacool.png" ,"Tentacool sprite"," text-muted","Tentacool","WaterPoison"],
72: ["infocard ","infocard-lg-img","/pokedex/tentacruel","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tentacruel.png" ,"Tentacruel sprite"," text-muted","Tentacruel","WaterPoison"],
73: ["infocard ","infocard-lg-img","/pokedex/geodude","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/geodude.png" ,"Geodude sprite"," text-muted","Geodude","RockGround"],
74: ["infocard ","infocard-lg-img","/pokedex/graveler","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/graveler.png" ,"Graveler sprite"," text-muted","Graveler","RockGround"],
75: ["infocard ","infocard-lg-img","/pokedex/golem","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golem.png" ,"Golem sprite"," text-muted","Golem","RockGround"],
76: ["infocard ","infocard-lg-img","/pokedex/ponyta","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ponyta.png" ,"Ponyta sprite"," text-muted","Ponyta", "Fire"],
77: ["infocard ","infocard-lg-img","/pokedex/rapidash","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rapidash.png" ,"Rapidash sprite"," text-muted","Rapidash","Fire"],
78: ["infocard ","infocard-lg-img","/pokedex/slowpoke","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slowpoke.png" ,"Slowpoke sprite"," text-muted","Slowpoke","WaterPsychic"],
79: ["infocard ","infocard-lg-img","/pokedex/slowbro","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slowbro.png" ,"Slowbro sprite"," text-muted","Slowbro","WaterPsychic"],
80: ["infocard ","infocard-lg-img","/pokedex/magnemite","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magnemite.png" ,"Magnemite sprite"," text-muted","Magnemite","ElectricSteel"],
81: ["infocard ","infocard-lg-img","/pokedex/magneton","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magneton.png" ,"Magneton sprite"," text-muted","Magneton", "ElectricSteel"],
82: ["infocard ","infocard-lg-img","/pokedex/farfetchd","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/farfetchd.png" ,"Farfetch'd sprite"," text-muted","Farfetch'd", "NormalFlying"],
83: ["infocard ","infocard-lg-img","/pokedex/doduo","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/doduo.png" ,"Doduo sprite"," text-muted","Doduo", "NormalFlying"],
84: ["infocard ","infocard-lg-img","/pokedex/dodrio","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dodrio.png" ,"Dodrio sprite"," text-muted","Dodrio", "NormalFlying"],
85: ["infocard ","infocard-lg-img","/pokedex/seel","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seel.png" ,"Seel sprite"," text-muted","Seel","Water"],
86: ["infocard ","infocard-lg-img","/pokedex/dewgong","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dewgong.png" ,"Dewgong sprite"," text-muted","Dewgong","WaterIce"],
87: ["infocard ","infocard-lg-img","/pokedex/grimer","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/grimer.png" ,"Grimer sprite"," text-muted","Grimer","Poison"],
88: ["infocard ","infocard-lg-img","/pokedex/muk","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/muk.png" ,"Muk sprite"," text-muted","Muk","Poison"],
89: ["infocard ","infocard-lg-img","/pokedex/shellder","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shellder.png" ,"Shellder sprite"," text-muted","Shellder","Water"],
90: ["infocard ","infocard-lg-img","/pokedex/cloyster","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cloyster.png" ,"Cloyster sprite"," text-muted","Cloyster","WaterIce"],
91: ["infocard ","infocard-lg-img","/pokedex/gastly","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gastly.png" ,"Gastly sprite"," text-muted","Gastly", "GhostPoison"],
92: ["infocard ","infocard-lg-img","/pokedex/haunter","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/haunter.png" ,"Haunter sprite"," text-muted","Haunter", "GhostPoison"],
93: ["infocard ","infocard-lg-img","/pokedex/gengar","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gengar.png" ,"Gengar sprite"," text-muted","Gengar","GhostPoison"],
94: ["infocard ","infocard-lg-img","/pokedex/onix","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/onix.png" ,"Onix sprite"," text-muted","Onix","RockGround"],
95: ["infocard ","infocard-lg-img","/pokedex/drowzee","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/drowzee.png" ,"Drowzee sprite"," text-muted","Drowzee","Psychic"],
96: ["infocard ","infocard-lg-img","/pokedex/hypno","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hypno.png" ,"Hypno sprite"," text-muted","Hypno","Psychic"],
97: ["infocard ","infocard-lg-img","/pokedex/krabby","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/krabby.png" ,"Krabby sprite"," text-muted","Krabby","Water"],
98: ["infocard ","infocard-lg-img","/pokedex/kingler","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kingler.png" ,"Kingler sprite"," text-muted","Kingler","Water"],
99: ["infocard ","infocard-lg-img","/pokedex/voltorb","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/voltorb.png" ,"Voltorb sprite"," text-muted","Voltorb","Electric"],
100: ["infocard ","infocard-lg-img","/pokedex/electrode","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/electrode.png" ,"Electrode sprite"," text-muted","Electrode","Electric"],
}


// pokemon gen one has 157 pokemon but we only show 100 leaders. leaving this here just in case we want to change this.

// "": ["infocard ","infocard-lg-img","/pokedex/exeggcute","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/exeggcute.png" ,"Exeggcute sprite"," text-muted","Exeggcute,"GrassPsychic
// "": ["infocard ","infocard-lg-img","/pokedex/exeggutor","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/exeggutor.png" ,"Exeggutor sprite"," text-muted","Exeggutor,"GrassPsychic
// "": ["infocard ","infocard-lg-img","/pokedex/cubone","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cubone.png" ,"Cubone sprite"," text-muted","Cubone,"Ground
// "": ["infocard ","infocard-lg-img","/pokedex/marowak","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/marowak.png" ,"Marowak sprite"," text-muted","Marowak,"Ground
// "": ["infocard ","infocard-lg-img","/pokedex/hitmonlee","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hitmonlee.png" ,"Hitmonlee sprite"," text-muted","Hitmonlee,"Fighting
// "": ["infocard ","infocard-lg-img","/pokedex/hitmonchan","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hitmonchan.png" ,"Hitmonchan sprite"," text-muted","Hitmonchan,"Fighting
// "": ["infocard ","infocard-lg-img","/pokedex/lickitung","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lickitung.png" ,"Lickitung sprite"," text-muted","Lickitung", "Normal"],
// "": ["infocard ","infocard-lg-img","/pokedex/koffing","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/koffing.png" ,"Koffing sprite"," text-muted","Koffing","Poison"],
// "": ["infocard ","infocard-lg-img","/pokedex/weezing","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weezing.png" ,"Weezing sprite"," text-muted","Weezing","Poison"],
// "": ["infocard ","infocard-lg-img","/pokedex/rhyhorn","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rhyhorn.png" ,"Rhyhorn sprite"," text-muted","Rhyhorn,"GroundRock
// "": ["infocard ","infocard-lg-img","/pokedex/rhydon","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rhydon.png" ,"Rhydon sprite"," text-muted","Rhydon,"GroundRock
// "": ["infocard ","infocard-lg-img","/pokedex/chansey","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chansey.png" ,"Chansey sprite"," text-muted","Chansey", "Normal"],
// "": ["infocard ","infocard-lg-img","/pokedex/tangela","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tangela.png" ,"Tangela sprite"," text-muted","Tangela,"Grass
// "": ["infocard ","infocard-lg-img","/pokedex/kangaskhan","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kangaskhan.png" ,"Kangaskhan sprite"," text-muted","Kangaskhan", "Normal"],
// "": ["infocard ","infocard-lg-img","/pokedex/horsea","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/horsea.png" ,"Horsea sprite"," text-muted","Horsea","Water"],
// "": ["infocard ","infocard-lg-img","/pokedex/seadra","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seadra.png" ,"Seadra sprite"," text-muted","Seadra","Water"],
// "": ["infocard ","infocard-lg-img","/pokedex/goldeen","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/goldeen.png" ,"Goldeen sprite"," text-muted","Goldeen","Water"],
// "": ["infocard ","infocard-lg-img","/pokedex/seaking","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seaking.png" ,"Seaking sprite"," text-muted","Seaking","Water"],
// "": ["infocard ","infocard-lg-img","/pokedex/staryu","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/staryu.png" ,"Staryu sprite"," text-muted","Staryu","Water"],
// "": ["infocard ","infocard-lg-img","/pokedex/starmie","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/starmie.png" ,"Starmie sprite"," text-muted","Starmie","Water"],Psychic
// "": ["infocard ","infocard-lg-img","/pokedex/mr-mime","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mr-mime.png" ,"Mr. Mime sprite"," text-muted","Mr. Mime,"PsychicFairy
// "": ["infocard ","infocard-lg-img","/pokedex/scyther","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scyther.png" ,"Scyther sprite"," text-muted","Scyther,"BugFlying
// "": ["infocard ","infocard-lg-img","/pokedex/jynx","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jynx.png" ,"Jynx sprite"," text-muted","Jynx,"IcePsychic
// "": ["infocard ","infocard-lg-img","/pokedex/electabuzz","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/electabuzz.png" ,"Electabuzz sprite"," text-muted","Electabuzz,"Electric
// "": ["infocard ","infocard-lg-img","/pokedex/magmar","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magmar.png" ,"Magmar sprite"," text-muted","Magmar,"Fire
// "": ["infocard ","infocard-lg-img","/pokedex/pinsir","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pinsir.png" ,"Pinsir sprite"," text-muted","Pinsir,"Bug
// "": ["infocard ","infocard-lg-img","/pokedex/tauros","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tauros.png" ,"Tauros sprite"," text-muted","Tauros", "Normal"],
// "": ["infocard ","infocard-lg-img","/pokedex/magikarp","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magikarp.png" ,"Magikarp sprite"," text-muted","Magikarp","Water"],
// "": ["infocard ","infocard-lg-img","/pokedex/gyarados","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gyarados.png" ,"Gyarados sprite"," text-muted","Gyarados","Water"],Flying
// "": ["infocard ","infocard-lg-img","/pokedex/lapras","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lapras.png" ,"Lapras sprite"," text-muted","Lapras","Water"],Ice
// "": ["infocard ","infocard-lg-img","/pokedex/ditto","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ditto.png" ,"Ditto sprite"," text-muted","Ditto", "Normal"],
// "": ["infocard ","infocard-lg-img","/pokedex/eevee","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/eevee.png" ,"Eevee sprite"," text-muted","Eevee", "Normal"],
// "": ["infocard ","infocard-lg-img","/pokedex/vaporeon","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vaporeon.png" ,"Vaporeon sprite"," text-muted","Vaporeon","Water"],
// "": ["infocard ","infocard-lg-img","/pokedex/jolteon","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jolteon.png" ,"Jolteon sprite"," text-muted","Jolteon,"Electric
// "": ["infocard ","infocard-lg-img","/pokedex/flareon","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/flareon.png" ,"Flareon sprite"," text-muted","Flareon,"Fire
// "": ["infocard ","infocard-lg-img","/pokedex/porygon","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/porygon.png" ,"Porygon sprite"," text-muted","Porygon", "Normal"],
// "": ["infocard ","infocard-lg-img","/pokedex/omanyte","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/omanyte.png" ,"Omanyte sprite"," text-muted","Omanyte", "RockWater"],
// "": ["infocard ","infocard-lg-img","/pokedex/omastar","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/omastar.png" ,"Omastar sprite"," text-muted","Omastar", "RockWater"],
// "": ["infocard ","infocard-lg-img","/pokedex/kabuto","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kabuto.png" ,"Kabuto sprite"," text-muted","Kabuto", "RockWater"],
// "": ["infocard ","infocard-lg-img","/pokedex/kabutops","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kabutops.png" ,"Kabutops sprite"," text-muted","Kabutops", "RockWater"],
// "": ["infocard ","infocard-lg-img","/pokedex/aerodactyl","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aerodactyl.png" ,"Aerodactyl sprite"," text-muted","Aerodactyl", "RockWater"],
// "": ["infocard ","infocard-lg-img","/pokedex/snorlax","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/snorlax.png" ,"Snorlax sprite"," text-muted","Snorlax", "Normal"],
// "": ["infocard ","infocard-lg-img","/pokedex/articuno","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/articuno.png" ,"Articuno sprite"," text-muted","Articuno,"IceFlying
// "": ["infocard ","infocard-lg-img","/pokedex/zapdos","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zapdos.png" ,"Zapdos sprite"," text-muted","Zapdos", "RockWater"],
// "": ["infocard ","infocard-lg-img","/pokedex/moltres","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/moltres.png" ,"Moltres sprite"," text-muted","Moltres,"FireFlying
// "": ["infocard ","infocard-lg-img","/pokedex/dratini","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dratini.png" ,"Dratini sprite"," text-muted","Dratini,"Dragon
// "": ["infocard ","infocard-lg-img","/pokedex/dragonair","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dragonair.png" ,"Dragonair sprite"," text-muted","Dragonair,"Dragon
// "": ["infocard ","infocard-lg-img","/pokedex/dragonite","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dragonite.png" ,"Dragonite sprite"," text-muted","Dragonite", "RockWater"],
// "": ["infocard ","infocard-lg-img","/pokedex/mewtwo","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mewtwo.png" ,"Mewtwo sprite"," text-muted robert chigga","Mewtwo","Psychic"],
// "": ["infocard ","infocard-lg-img","/pokedex/mew","img-fixed img-sprite" ,"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mew.png" ,"Mew sprite"," text-muted","Mew", "Psychic"],