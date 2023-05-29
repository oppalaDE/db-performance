const express = require('express');
const { prisma, mongoose, arangodb } = require('../db/db');
const tests = require('./tests');
const benchmarkTests = require('./benchmark');
const router = express.Router();

router.post('/generate-test-data', async function(req, res, next) {
  try {
    // Insert cities
    const cities = [{"city":"London","zipCode":"SW1A 2AA","country":"United Kingdom"},{"city":"New York City","zipCode":"10001","country":"United States"},{"city":"Paris","zipCode":"75001","country":"France"},{"city":"Berlin","zipCode":"10115","country":"Germany"},{"city":"Madrid","zipCode":"28013","country":"Spain"},{"city":"Beijing","zipCode":"100000","country":"China"},{"city":"Tokyo","zipCode":"100-0001","country":"Japan"},{"city":"Moscow","zipCode":"103132","country":"Russia"},{"city":"Sydney","zipCode":"2000","country":"Australia"},{"city":"Rio de Janeiro","zipCode":"20000","country":"Brazil"},{"city":"Rome","zipCode":"00184","country":"Italy"},{"city":"Amsterdam","zipCode":"1012 JS","country":"Netherlands"},{"city":"Buenos Aires","zipCode":"C1018AAB","country":"Argentina"},{"city":"Toronto","zipCode":"M5H 2N2","country":"Canada"},{"city":"Mexico City","zipCode":"06000","country":"Mexico"},{"city":"Istanbul","zipCode":"34433","country":"Turkey"},{"city":"Mumbai","zipCode":"400001","country":"India"},{"city":"Cairo","zipCode":"11511","country":"Egypt"},{"city":"Cape Town","zipCode":"8000","country":"South Africa"},{"city":"Stockholm","zipCode":"111 20","country":"Sweden"},{"city":"Helsinki","zipCode":"00100","country":"Finland"},{"city":"Oslo","zipCode":"0150","country":"Norway"},{"city":"Vienna","zipCode":"1010","country":"Austria"},{"city":"Brussels","zipCode":"1000","country":"Belgium"},{"city":"Dubai","zipCode":"UAE","country":"United Arab Emirates"},{"city":"São Paulo","zipCode":"01000-000","country":"Brazil"},{"city":"Seoul","zipCode":"04554","country":"South Korea"},{"city":"Bangkok","zipCode":"10110","country":"Thailand"},{"city":"Copenhagen","zipCode":"1050","country":"Denmark"},{"city":"Dublin","zipCode":"D02 A363","country":"Ireland"},{"city":"Lisbon","zipCode":"1200-345","country":"Portugal"},{"city":"Athens","zipCode":"105 63","country":"Greece"},{"city":"Budapest","zipCode":"1051","country":"Hungary"},{"city":"Prague","zipCode":"110 00","country":"Czech Republic"},{"city":"Warsaw","zipCode":"00-001","country":"Poland"},{"city":"Bratislava","zipCode":"811 01","country":"Slovakia"},{"city":"Tallinn","zipCode":"10117","country":"Estonia"},{"city":"Toronto","zipCode":"M5J 2N8","country":"Canada"},{"city":"Vancouver","zipCode":"V6B 5J3","country":"Canada"},{"city":"Los Angeles","zipCode":"90001","country":"United States"},{"city":"Chicago","zipCode":"60601","country":"United States"},{"city":"Berlin","zipCode":"10178","country":"Germany"},{"city":"Madrid","zipCode":"28001","country":"Spain"},{"city":"Rome","zipCode":"00187","country":"Italy"},{"city":"Geneva","zipCode":"1200","country":"Switzerland"},{"city":"Melbourne","zipCode":"3000","country":"Australia"},{"city":"Tokyo","zipCode":"160-0023","country":"Japan"},{"city":"Shanghai","zipCode":"200000","country":"China"},{"city":"Moscow","zipCode":"101000","country":"Russia"},{"city":"Dublin","zipCode":"D02 YX28","country":"Ireland"},{"city":"Vienna","zipCode":"1020","country":"Austria"}];

    const cityInsertSql = `
      insert into city (id, zip, city_name, country_name) values
      ${cities.map((city, index) => `(${index + 1}, '${city.zipCode}', '${city.city}', '${city.country}')`).join(', ')};
    `;
    await prisma.$executeRawUnsafe(cityInsertSql);

    const cityInsertMongo = cities.map((city, index) => ({_id: index + 1, zip: city.zipCode, city_name: city.city, country_name: city.country}));
    await mongoose.connection.db.collection('city').insertMany(cityInsertMongo);

    const cityInsertArango = cities.map((city, index) => ({_key: String(index + 1), zip: city.zipCode, city_name: city.city, country_name: city.country}));
    await arangodb.collection('city').saveAll(cityInsertArango);

    // Generate and insert persons
    const firstNames = ['Emma','Liam','Olivia','Noah','Ava','Elijah','Charlotte','William','Sophia','James','Amelia','Benjamin','Isabella','Lucas','Mia','Mason','Harper','Ethan','Evelyn','Alexander','Abigail','Logan','Emily','Jackson','Elizabeth','Sebastian','Avery','Caleb','Sofia','Luke','Ella','Owen','Scarlett','Daniel','Chloe','Gabriel','Victoria','Isaac','Grace','Samuel','Lily','David','Madison','Nathan','Luna','Cameron','Aria','Leo','Hazel','Miles','Natalie','Eva','Audrey','John','Penelope','Adam','Layla','Wyatt','Stella','Dylan','Zoe','Nicholas','Leah','Isabelle','Oliver','Ellie','Ryan','Aaliyah','Tyler','Savannah','Aiden','Maya','Max','Nova','Jack','Elena','Harrison','Emilia','Julian','Claire','Jaxon','Eleanor','Grayson','Violet','Ian','Hannah','Levi','Lillian','Mateo','Addison','Lincoln','Aurora','Ezra','Lucy','Asher','Alice','Theodore','Bella','Jayden','Anna','Christopher','Samantha','Joshua','Ruby','Andrew','Makayla','Roman','Nora','Eliana','Thomas','Eli','Gianna','Robert','Mila','Easton','Serenity','Naomi','Carlos','Christian','Caroline','Jace','Valentina','Cooper','Kennedy','Xavier','Paisley','Joseph','Lydia','Dominic','Mackenzie','Josiah','Aubrey','Nathaniel','Alyssa','Landon','Annabelle','Jonathan','Gabriella','Connor','Genesis','Adrian','Brooklyn','Aaron','Elliana','Colton','Kinsley','Jordan','Carter','Faith','Maverick','Alexa','Peyton','Everett','Clara','Blake','Madelyn','Braxton','Brielle','Isla','Luis','Nevaeh','Austin','Ariel','Giovanni','Emery','Evangeline','Hadley','Harmony','Elias','Hayden','Jayce','Juniper','Greyson','Eliza'];
    const lastNames = ['Smith','Johnson','Williams','Jones','Brown','Davis','Miller','Wilson','Moore','Taylor','Anderson','Thomas','Jackson','White','Harris','Martin','Thompson','Garcia','Martinez','Robinson','Clark','Rodriguez','Lewis','Lee','Walker','Hall','Allen','King','Wright','Scott','Green','Baker','Adams','Nelson','Carter','Mitchell','Perez','Roberts','Turner','Phillips','Campbell','Parker','Evans','Edwards','Collins','Stewart','Sanchez','Morris','Rogers','Reed','Cook','Morgan','Bell','Murphy','Bailey','Rivera','Cooper','Richardson','Cox','Howard','Ward','Torres','Peterson','Gray','Ramirez','James','Watson','Brooks','Kelly','Sanders','Price','Bennett','Wood','Barnes','Ross','Henderson','Coleman','Jenkins','Perry','Powell','Sullivan','Long','Patterson','Hughes','Flores','Washington','Butler','Simmons','Foster','Gonzalez','Bryant','Alexander','Russell','Griffin','Diaz','Hayes','Myers','Ford','Hamilton','Graham','Wallace','Woods','Cole','West','Jordan','Owens','Reynolds','Fisher','Ellis','Harrison','Gibson','Mcdonald','Cruz','Marshall','Ortiz','Gomez','Murray','Freeman','Wells','Webb','Simpson','Stevens','Tucker','Porter','Hunter','Hicks','Crawford','Henry','Boyd','Mason','Morales','Kennedy','Warren','Dixon','Ramos','Reyes','Burns','Gordon','Shaw','Holmes','Rice','Robertson','Hunt','Black','Daniels','Palmer','Mills','Nichols','Grant','Knight','Ferguson','Rose','Stone','Hawkins','Dunn','Perkins','Hudson','Spencer','Gardner','Stephens','Payne','Pierce','Berry','Matthews','Arnold','Wagner','Willis','Ray','Watkins','Olson','Carroll','Duncan','Snyder','Hart','Cunningham','Bradley','Lane','Andrews','Ruiz','Harper','Fox','Riley','Armstrong','Carpenter','Weaver','Greene','Lawrence'];
    const genders = ['m', 'w', 'd'];
    const occupations = ['Software Developer', 'Marketing Manager', 'Financial Analyst', 'Nurse Practitioner', 'Architect', 'Teacher', 'Mechanical Engineer', 'Graphic Designer', 'Sales Representative', 'Accountant', 'Lawyer', 'Chef', 'Civil Engineer', 'Data Scientist', 'Web Developer', 'Pharmacist', 'Writer', 'Dentist', 'Project Manager', 'Psychologist', 'Electrician', 'Product Manager', 'Photographer', 'Business Analyst', 'Social Worker', 'Police Officer', 'Interior Designer', 'Research Scientist', 'Financial Manager', 'Human Resources Manager', 'Physical Therapist', 'Veterinarian', 'Event Planner', 'IT Consultant', 'Real Estate Agent', 'Musician', 'Flight Attendant', 'Journalist', 'Banker', 'Mechanic', 'Teacher Assistant', 'Customer Service Representative', 'Librarian', 'Fitness Trainer', 'Social Media Manager', 'Translator', 'Fashion Designer', 'Registered Nurse', 'Security Guard', 'Artist', 'Software Engineer', 'Doctor', 'Sales Manager', 'Marketing Specialist', 'Nurse', 'Data Analyst', 'Fitness Instructor', 'Chemist'];
    const interests = ['Photography', 'Cooking', 'Hiking', 'Painting', 'Gardening', 'Playing an Instrument', 'Reading', 'Writing', 'Traveling', 'Yoga', 'Dancing', 'Singing', 'Watching Movies', 'Playing Sports', 'Knitting', 'Camping', 'Fishing', 'Photomanipulation', 'Drawing', 'Listening to Music', 'Playing Video Games', 'Skiing', 'Board Games', 'Cycling', 'Woodworking', 'Volunteering', 'Collecting Coins', 'Sculpting', 'Chess', 'Interior Design', 'Fashion', 'Writing Poetry', 'DIY Projects', 'Meditation', 'Calligraphy', 'Birdwatching', 'Pottery', 'Watching Anime', 'Playing Chess', 'Golfing', 'Running', 'Puzzles', 'Philosophy', 'Sailing', 'Skydiving', 'Learning Languages', 'Skywatching', 'Magic Tricks', 'Motorcycle Riding', 'Tennis', 'Guitar Playing', 'Scuba Diving', 'Baking', 'Coffee Tasting', 'Acting', 'Stand-up Comedy', 'Card Games', 'Kayaking', 'Collecting Stamps', 'Astrophotography', 'Playing Poker', 'Blogging', 'Antique Collecting', 'Surfing', 'Auto Racing', 'Climbing', 'Chess Boxing', 'Parkour', 'Fitness', 'Cycling', 'Comic Books', 'Watching Sports', 'Archery', 'Photography Editing', 'Sewing', 'Rock Climbing', 'Amateur Radio', 'Pottery', 'Astrology', 'Metalworking', 'Candle Making', 'Salsa Dancing', 'Cryptography', 'Horseback Riding', 'Graffiti', 'Beekeeping', 'Wine Tasting', 'Gardening', 'Ceramics', 'Gaming', 'Cosplay', 'Jewelry Making', 'Whitewater Rafting', 'Virtual Reality Gaming', 'Paragliding', 'Collecting Vinyl Records'];
    const isoLanguageCodes = ['aa', 'ab', 'ae', 'af', 'ak', 'am', 'an', 'ar', 'as', 'av', 'ay', 'az', 'ba', 'be', 'bg', 'bh', 'bi', 'bm', 'bn', 'bo', 'br', 'bs', 'ca', 'ce', 'ch', 'co', 'cr', 'cs', 'cu', 'cv', 'cy', 'da', 'de', 'dv', 'dz', 'ee', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fa', 'ff', 'fi', 'fj', 'fo', 'fr', 'fy', 'ga', 'gd', 'gl', 'gn', 'gu', 'gv', 'ha', 'he', 'hi', 'ho', 'hr', 'ht', 'hu', 'hy', 'hz', 'ia', 'id', 'ie', 'ig', 'ii', 'ik', 'io', 'is', 'it', 'iu', 'ja', 'jv', 'ka', 'kg', 'ki', 'kj', 'kk', 'kl', 'km', 'kn', 'ko', 'kr', 'ks', 'ku', 'kv', 'kw', 'ky', 'la', 'lb', 'lg', 'li', 'ln', 'lo', 'lt', 'lu', 'lv', 'mg', 'mh', 'mi', 'mk', 'ml', 'mn', 'mr', 'ms', 'mt', 'my', 'na', 'nb', 'nd', 'ne', 'ng', 'nl', 'nn', 'no', 'nr', 'nv', 'ny', 'oc', 'oj', 'om', 'or', 'os', 'pa', 'pi', 'pl', 'ps', 'pt', 'qu', 'rm', 'rn', 'ro', 'ru', 'rw', 'sa', 'sc', 'sd', 'se', 'sg', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sq', 'sr', 'ss', 'st', 'su', 'sv', 'sw', 'ta', 'te', 'tg', 'th', 'ti', 'tk', 'tl', 'tn', 'to', 'tr', 'ts', 'tt', 'tw', 'ty', 'ug', 'uk', 'ur', 'uz', 've', 'vi', 'vo', 'wa', 'wo', 'xh', 'yi', 'yo', 'za', 'zh', 'zu'];
    const toUnixNumber = Date.now();
    const personInsertValuesSql = [];
    const personInsertMongo = [];
    const personInsertArango = [];
    for(let id = 1; id <= 500_000; ++id) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const gender = genders[Math.floor(Math.random() * genders.length)];
      const occupation = Math.random() > 0.03 ? occupations[Math.floor(Math.random() * occupations.length)] : null;
      const personInterests = [];
      let count = Math.floor(Math.random() * 15);
      for(let i = 0; i < count; ++i) {
        const interest = interests[Math.floor(Math.random() * interests.length)];
        if(!personInterests.includes(interest))
          personInterests.push(interest);
      }
      const languages = [];
      count = Math.floor(Math.random() * 4);
      for(let i = 0; i < count; ++i) {
        const language = isoLanguageCodes[Math.floor(Math.random() * isoLanguageCodes.length)];
        if(!languages.includes(language))
          languages.push(language);
      }
      const birthdate = new Date(Math.floor(Math.random() * toUnixNumber));
      const birthCityId = Math.floor(Math.random() * cities.length) + 1;
      const livingCityId = Math.floor(Math.random() * cities.length) + 1;
      personInsertValuesSql.push(`(${id}, '${firstName}', '${lastName}', '${gender}', ${languages.length > 0 ? `'${languages.join(',')}'` : 'null'}, ${occupation ? `'${occupation}'` : 'null'}, ${personInterests.length > 0 ? `'${personInterests.join(',')}'` : 'null'}, '${birthdate.toISOString().slice(0, 19).replace('T', ' ')}', ${birthCityId}, ${livingCityId})`);
      personInsertMongo.push({_id: id, first_name: firstName, last_name: lastName, gender, languages, occupation, interests: personInterests, birthdate, birth_city_id: birthCityId, living_city_id: livingCityId});
      personInsertArango.push({_key: String(id), first_name: firstName, last_name: lastName, gender, languages, occupation, interests: personInterests, birthdate, birth_city_id: String(birthCityId), living_city_id: String(livingCityId)});
    }

    for(let start = 0; start < 500_000; start += 50_000) {
      const personInsertSql = `
        insert into person (id, first_name, last_name, gender, languages, occupation, interests, birthdate, birth_city_id, living_city_id) values
        ${personInsertValuesSql.slice(start, start + 50_000).join(', ')};
      `;
      await prisma.$executeRawUnsafe(personInsertSql);
    }

    await mongoose.connection.db.collection('person').insertMany(personInsertMongo);

    await arangodb.collection('person').saveAll(personInsertArango);

    // Insert trip information
    const emptyTrips = [{ headline: "Discover the Exotic Wildlife in the Galapagos Islands", description: "Embark on a unique adventure to the Galapagos Islands, Ecuador. Encounter an incredible array of wildlife, including giant tortoises, marine iguanas, and blue-footed boobies. Explore the pristine beaches and volcanic landscapes of this natural paradise.", personIds: [], cityIds: [] }, { headline: "Experience the Rich Cultural Heritage of Istanbul, Turkey", description: "Immerse yourself in the vibrant blend of East and West in Istanbul. Visit iconic landmarks like the Hagia Sophia and the Blue Mosque, explore the bustling Grand Bazaar, and savor the flavors of Turkish cuisine. Istanbul is a city where ancient traditions meet modern cosmopolitanism.", personIds: [], cityIds: [] }, { headline: "Relax in the Tranquil Backwaters of Kerala, India", description: "Escape to the peaceful backwaters of Kerala, India. Cruise along serene canals, stay in traditional houseboats, and witness the lush green landscapes and abundant wildlife. Kerala offers a serene and rejuvenating experience amidst nature.", personIds: [], cityIds: [] }, { headline: "Explore the Ancient Ruins of Athens, Greece", description: "Step back in time and discover the historical treasures of Athens. Visit the iconic Acropolis, explore ancient ruins such as the Parthenon and the Temple of Olympian Zeus, and wander through charming neighborhoods like Plaka. Athens is a city steeped in history and mythology.", personIds: [], cityIds: [] }, { headline: "Marvel at the Natural Beauty of Banff National Park, Canada", description: "Immerse yourself in the breathtaking landscapes of Banff National Park. Explore turquoise lakes, hike through majestic mountain trails, and spot wildlife such as bears and elk. Banff offers unparalleled natural beauty and outdoor adventures.", personIds: [], cityIds: [] }, { headline: "Experience the Allure of the Amalfi Coast, Italy", description: "Indulge in the coastal charm of the Amalfi Coast. Explore picturesque cliffside towns like Positano and Ravello, soak up the Mediterranean sun on stunning beaches, and savor delicious Italian cuisine. The Amalfi Coast is a true gem of southern Italy.", personIds: [], cityIds: [] }, { headline: "Safari in the Maasai Mara National Reserve, Kenya", description: "Embark on an unforgettable safari experience in the Maasai Mara. Witness the annual wildebeest migration, spot the Big Five, and immerse yourself in the vibrant Maasai culture. The Maasai Mara offers an incredible wildlife spectacle.", personIds: [], cityIds: [] }, { headline: "Discover the Historical Charm of Prague, Czech Republic", description: "Wander through the cobbled streets of Prague and soak in the city's rich history and architecture. Visit Prague Castle, stroll across the Charles Bridge, and explore the charming Old Town. Prague is a city that exudes romanticism and old-world charm.", personIds: [], cityIds: [] }];
    let trips = [ { headline: 'Explore the Serene Beaches of Bali', description: 'Discover the breathtaking beauty of Bali\'s beaches. Immerse yourself in crystal-clear waters, relax on pristine sandy shores, and witness stunning sunsets. Bali offers a perfect tropical getaway for beach lovers.' }, { headline: 'Experience the Vibrant Culture of Tokyo', description: 'Get ready for an unforgettable adventure in Tokyo, Japan. Dive into the city\'s vibrant culture, bustling streets, and iconic landmarks. Explore ancient temples, indulge in delicious cuisine, and embrace the lively atmosphere of this dynamic metropolis.' }, { headline: 'Unwind in the Tranquil Landscapes of Switzerland', description: 'Escape to the picturesque landscapes of Switzerland. Immerse yourself in the tranquility of the Swiss Alps, cruise along pristine lakes, and stroll through charming alpine villages. Experience breathtaking beauty and rejuvenate your senses.' }, { headline: 'Discover Ancient History in Rome', description: 'Step back in time and explore the ancient wonders of Rome, Italy. Visit iconic landmarks like the Colosseum and the Roman Forum, admire breathtaking art in the Vatican City, and indulge in mouthwatering Italian cuisine. Rome is a captivating blend of history, culture, and culinary delights.' }, { headline: 'Embark on a Safari Adventure in South Africa', description: 'Experience the thrill of a safari in South Africa. Encounter majestic wildlife, including lions, elephants, and giraffes, in their natural habitat. Discover the diverse landscapes, from vast savannahs to lush national parks, and create lifelong memories in the heart of Africa.' }, { headline: 'Immerse Yourself in the Rich Heritage of Athens', description: 'Journey to Athens, Greece, and immerse yourself in its rich heritage. Explore ancient ruins like the Acropolis and the Parthenon, wander through charming narrow streets, and savor authentic Greek cuisine. Athens is a perfect blend of history, culture, and warm hospitality.' }, { headline: 'Escape to the Tropical Paradise of Maldives', description: 'Indulge in a luxurious getaway in the Maldives. Immerse yourself in turquoise waters, relax on pristine white sand beaches, and stay in overwater villas with breathtaking views. Experience ultimate relaxation and pampering in this idyllic tropical paradise.' }, { headline: 'Marvel at the Grandeur of the Great Wall of China', description: 'Witness one of the world\'s most iconic landmarks, the Great Wall of China. Traverse the ancient fortifications that span across thousands of miles, admire the panoramic views, and delve into the fascinating history of this architectural masterpiece.' }, { headline: 'Adventures in the Amazon Rainforest', description: 'Embark on an extraordinary adventure in the Amazon Rainforest. Explore lush jungles, encounter diverse wildlife, and cruise along the mighty Amazon River. Immerse yourself in the wonders of nature and discover the incredible biodiversity of this pristine ecosystem.' }, { headline: 'Experience the Magic of the Northern Lights in Iceland', description: 'Witness the captivating beauty of the Northern Lights in Iceland. Marvel at the dancing colors illuminating the night sky, soak in geothermal hot springs, and explore dramatic landscapes of glaciers and volcanoes. Iceland offers a unique and enchanting experience.' }, { headline: 'Discover the Majestic Pyramids of Egypt', description: 'Embark on a journey through time and explore the ancient wonders of Egypt. Marvel at the grandeur of the pyramids of Giza, witness the enigmatic Sphinx, and delve into the rich history of the pharaohs. Egypt offers an unforgettable experience for history enthusiasts.' }, { headline: 'Indulge in the Romantic Charms of Paris', description: 'Fall in love with the City of Light, Paris, France. Stroll along the Seine River, visit iconic landmarks like the Eiffel Tower and Notre-Dame Cathedral, and savor delectable pastries at charming cafes. Paris is the epitome of romance and elegance.' }, { headline: 'Explore the Pristine Wilderness of Alaska', description: 'Immerse yourself in the untouched beauty of Alaska, USA. Cruise through icy fjords, witness magnificent glaciers, and encounter incredible wildlife, including bears and whales. Alaska offers a rugged and breathtaking adventure for nature enthusiasts.' }, { headline: 'Get Lost in the Historical Streets of Marrakech', description: 'Step into a world of vibrant colors and bustling souks in Marrakech, Morocco. Explore the winding streets of the Medina, haggle for treasures in the bustling markets, and indulge in flavorful Moroccan cuisine. Marrakech is a sensory delight.' }, { headline: 'Admire the Iconic Statue of Liberty in New York City', description: 'Experience the energy of the Big Apple in New York City, USA. Marvel at the Statue of Liberty, stroll through Central Park, and immerse yourself in the vibrant neighborhoods of Manhattan. New York City is a melting pot of cultures and iconic landmarks.' }, { headline: 'Cruise Along the Scenic Norwegian Fjords', description: 'Embark on a breathtaking journey through the Norwegian fjords. Cruise past towering cliffs, cascading waterfalls, and picturesque villages. Immerse yourself in the stunning natural landscapes and serene beauty of Norway.' }, { headline: 'Discover the Ancient Temples of Angkor Wat', description: 'Uncover the mysteries of Angkor Wat in Siem Reap, Cambodia. Marvel at the intricate architecture of ancient temples, witness stunning sunrise and sunset views, and delve into the rich Khmer history. Angkor Wat is a UNESCO World Heritage site of unparalleled beauty.' }, { headline: 'Relax in the Exotic Paradise of the Maldives', description: 'Escape to a tropical paradise in the Maldives. Lounge on pristine white-sand beaches, snorkel through colorful coral reefs, and unwind in luxurious overwater bungalows. The Maldives offers an idyllic setting for relaxation and tranquility.' }, { headline: 'Hike the Majestic Inca Trail to Machu Picchu', description: 'Embark on an unforgettable adventure to Machu Picchu, Peru. Trek through the stunning landscapes of the Inca Trail, discover ancient ruins hidden in the Andes, and witness the awe-inspiring beauty of the lost city. Machu Picchu is a bucket-list destination for adventurers.' }, { headline: 'Savor the Flavors of Tuscany\'s Wine Country', description: 'Embark on a gastronomic journey through Tuscany, Italy. Explore picturesque vineyards, indulge in world-class wines and Tuscan cuisine, and immerse yourself in the charming countryside. Tuscany offers a perfect blend of culinary delights and stunning landscapes.' }, { headline: 'Experience the Magic of the Northern Lights in Norway', description: 'Witness the breathtaking phenomenon of the Northern Lights in Norway. Marvel at the dancing colors illuminating the night sky, enjoy dog sledding through snowy landscapes, and immerse yourself in the unique Sami culture. Norway offers a magical winter adventure.' }, { headline: 'Safari in the Serengeti National Park, Tanzania', description: 'Embark on an unforgettable safari experience in the Serengeti National Park. Encounter the iconic wildlife of Africa, including lions, elephants, and zebras, as they roam freely across vast grasslands. The Serengeti promises a thrilling wildlife adventure.' }, { headline: 'Explore the Ancient Ruins of Machu Picchu, Peru', description: 'Discover the ancient ruins of Machu Picchu nestled high in the Andes Mountains of Peru. Marvel at the architectural wonders of the Incas, hike through scenic mountain trails, and soak in the breathtaking views of the Sacred Valley. Machu Picchu is a UNESCO World Heritage site and a testament to a remarkable civilization.' }, { headline: 'Unwind on the Beautiful Beaches of the Maldives', description: 'Escape to paradise and relax on the pristine beaches of the Maldives. Immerse yourself in crystal-clear turquoise waters, snorkel among vibrant coral reefs, and unwind in luxurious overwater bungalows. The Maldives is the perfect destination for ultimate relaxation and indulgence.' }, { headline: 'Discover the Rich History of Rome, Italy', description: 'Step back in time and explore the rich history of Rome, Italy. Visit iconic landmarks such as the Colosseum and the Roman Forum, marvel at the intricate artwork in the Vatican City, and savor delicious Italian cuisine. Rome is a captivating blend of ancient history and modern charm.' }, { headline: 'Embark on an Adventure in the Amazon Rainforest', description: 'Immerse yourself in the wonders of the Amazon Rainforest. Trek through dense jungles, spot exotic wildlife, and cruise along the mighty Amazon River. Experience the biodiversity of this unique ecosystem and create lifelong memories in the heart of the rainforest.' }, { headline: 'Marvel at the Beauty of the Taj Mahal, India', description: 'Witness the architectural masterpiece of the Taj Mahal in Agra, India. Admire the intricate marble work, stroll through the lush gardens, and learn about the romantic history behind this iconic monument. The Taj Mahal is a symbol of love and a must-visit destination in India.' }, { headline: 'Explore the Vibrant Streets of Tokyo, Japan', description: 'Immerse yourself in the vibrant energy of Tokyo, Japan\'s bustling capital. Discover futuristic technology, explore traditional temples and gardens, and indulge in delicious cuisine. Tokyo offers a fascinating blend of ancient traditions and modern innovations.' }, { headline: 'Ski in the Majestic Swiss Alps, Switzerland', description: 'Hit the slopes and experience world-class skiing in the Swiss Alps. Enjoy breathtaking mountain views, explore charming alpine villages, and indulge in Swiss chocolate and cheese. Switzerland is a winter wonderland for outdoor enthusiasts.' }, { headline: 'Explore the Enchanting Streets of Paris, France', description: 'Fall in love with the romantic ambiance of Paris. Visit iconic landmarks such as the Eiffel Tower and the Louvre Museum, wander through charming neighborhoods like Montmartre, and savor exquisite French cuisine. Paris is a city that captivates the heart.' }, { headline: 'Discover the Ancient Wonders of Petra, Jordan', description: 'Uncover the secrets of Petra, the ancient Nabatean city carved into the rose-colored rock. Marvel at the magnificent Treasury, explore the intricate facades of the Monastery, and hike through the stunning desert landscapes of Wadi Rum. Petra is an archaeological marvel.' }, { headline: 'Experience the Wild Safari in Kruger National Park, South Africa', description: 'Embark on a thrilling safari adventure in Kruger National Park. Encounter the Big Five - lions, elephants, rhinos, leopards, and buffalos - in their natural habitat. Immerse yourself in the raw beauty of the African wilderness and create lifelong memories.' }, { headline: 'Relax on the Beautiful Beaches of the Seychelles', description: 'Escape to the idyllic paradise of the Seychelles. Lounge on pristine white-sand beaches, snorkel through coral reefs teeming with marine life, and unwind in luxurious beachfront resorts. The Seychelles offers a perfect blend of relaxation and natural beauty.' }, { headline: 'Experience the Ancient History of Kyoto, Japan', description: 'Step into the past and explore the ancient traditions of Kyoto. Visit historic temples, stroll through traditional gardens, and witness traditional tea ceremonies. Kyoto is a city where old and new coexist, preserving Japan\'s rich cultural heritage.' }, { headline: 'Discover the Marvels of the Great Barrier Reef, Australia', description: 'Dive into the underwater wonderland of the Great Barrier Reef. Snorkel among colorful coral formations, swim alongside tropical fish, and marvel at the diversity of marine life. The Great Barrier Reef is a UNESCO World Heritage site and a must-visit for nature enthusiasts.' }, { headline: 'Hike the Inca Trail to Machu Picchu, Peru', description: 'Embark on a trek of a lifetime along the Inca Trail to reach the majestic ruins of Machu Picchu. Trek through scenic mountain landscapes, explore ancient Inca settlements, and witness the sunrise over the Lost City. The Inca Trail offers an unforgettable adventure.' }, { headline: 'Experience the Festive Spirit of Rio Carnival, Brazil', description: 'Immerse yourself in the vibrant energy of Rio Carnival. Join the festivities, dance to the rhythm of samba, admire the colorful costumes and elaborate floats, and witness the electrifying atmosphere of the world\'s biggest carnival celebration.' }, { headline: 'Explore the Stunning Landscapes of New Zealand', description: 'Discover the natural wonders of New Zealand. Explore the breathtaking fjords of Milford Sound, hike through the otherworldly landscapes of Tongariro National Park, and experience the warm hospitality of the Kiwi culture. New Zealand is a paradise for outdoor enthusiasts.' } ];
    trips.forEach((trip) => {
      trip.personIds = [];
      let count = Math.floor(Math.random() * 1000) + 100;
      for(let i = 0; i < count; ++i) {
        const id = Math.floor(Math.random() * 500_000) + 1;
        if(!trip.personIds.includes(id))
          trip.personIds.push(id);
      }

      trip.cityIds = [];
      count = Math.floor(Math.random() * 10) + 5;
      for(let i = 0; i < count; ++i) {
        const id = Math.floor(Math.random() * cities.length) + 1;
        if(!trip.cityIds.includes(id))
          trip.cityIds.push(id);
      }
    });
    trips.push(...emptyTrips);

    const tripInsertSql = `
      insert into trip (id, headline, description) values
      ${trips.map((trip, index) => `(${index + 1}, "${trip.headline}", "${trip.description}")`).join(', ')};
    `;
    await prisma.$executeRawUnsafe(tripInsertSql);
    const tripPersonInsertSql = `
      insert into trip_person (trip_id, person_id) values
      ${trips.map((trip, index) => trip.personIds.map((personId) => `(${index + 1}, ${personId})`)).flat().join(', ')};
    `;
    await prisma.$executeRawUnsafe(tripPersonInsertSql);
    const tripCityInsertSql = `
      insert into trip_city (trip_id, city_id) values
      ${trips.map((trip, index) => trip.cityIds.map((cityId) => `(${index + 1}, ${cityId})`)).flat().join(', ')};
    `;
    await prisma.$executeRawUnsafe(tripCityInsertSql);

    const tripInsertMongo = trips.map((trip, index) => ({_id: index + 1, headline: trip.headline, description: trip.description, person_ids: trip.personIds, city_ids: trip.cityIds}));
    await mongoose.connection.db.collection('trip').insertMany(tripInsertMongo);

    const tripInsertArango = trips.map((trip, index) => ({
      _key: (index + 1).toString(),
      headline: trip.headline,
      description: trip.description,
      person_ids: trip.personIds,
      city_ids: trip.cityIds
    }));
    await arangodb.collection('trip').saveAll(tripInsertArango);
    const tripPersonInsertArango = trips.map((trip, index) => trip.personIds.map((personId) => ({
      _from: `trip/${index + 1}`,
      _to: `person/${personId}`
    }))).flat();
    await arangodb.collection('trip_person').saveAll(tripPersonInsertArango);
    const tripCityInsertArango = trips.map((trip, index) => trip.cityIds.map((cityId) => ({
      _from: `trip/${index + 1}`,
      _to: `city/${cityId}`
    }))).flat();
    await arangodb.collection('trip_city').saveAll(tripCityInsertArango);


    res.send('OK').status(200);

    return next();
  } catch(error) {
    return next(error);
  }
});

router.get('/benchmark', async function(req, res, next) {
  try {
    const testProjection = await benchmarkTests.testProjection();
    const testCalculationDateDiff = await benchmarkTests.testCalculationDateDiff();
    const testSortNonIndex = await benchmarkTests.testSortNonIndex();
    const testSortIndex = await benchmarkTests.testSortIndex();
    const testJoinGroupCount = await benchmarkTests.testJoinGroupCount();
    const testJoinLookup = await benchmarkTests.testJoinLookup();
    const testOrm = await benchmarkTests.testOrm();
    const testArray = await benchmarkTests.testArray();
    const testResults = {
      testProjection,
      testCalculationDateDiff,
      testSortNonIndex,
      testSortIndex,
      testJoinGroupCount,
      testJoinLookup,
      testOrm,
      testArray
    }

    res.send(testResults).status(200);

    return next();
  } catch(error) {
    return next(error);
  }
});

module.exports = router;
