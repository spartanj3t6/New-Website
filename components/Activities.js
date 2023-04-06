const activities = [
  {
    id: 1,
    name: 'Tumon Beach',
    category: 'Beaches',
    description: 'A beautiful white sand beach with crystal-clear waters, perfect for swimming and snorkeling.',
  },
  {
    id: 2,
    name: 'Fish Eye Marine Park',
    category: 'Snorkeling',
    description: 'A popular snorkeling spot with an underwater observatory and diverse marine life.',
  },
  {
    id: 3,
    name: 'Two Lovers Point',
    category: 'Scenic Lookouts',
    description: 'A dramatic cliffside lookout with stunning views of Tumon Bay and the Philippine Sea.',
  },
  {
    id: 4,
    name: 'Tarzan Falls Hike',
    category: 'Hiking',
    description: 'A moderately difficult hike through the jungle to a beautiful waterfall.',
  },
  {
    id: 5,
    name: 'Talofofo Falls',
    category: 'Sightseeing',
    description: 'A beautiful waterfall and park with a cable car, a small zoo, and other attractions.',
  },
  {
    id: 6,
    name: 'Cetti Bay Overlook',
    category: 'Sightseeing',
    description: 'A scenic overlook with a stunning view of Cetti Bay.',
  },
  {
    id: 7,
    name: 'Fish Eye Marine Park',
    category: 'Snorkeling',
    description: 'A marine park with an underwater observatory, snorkeling, and scuba diving.',
  },
  {
    id: 8,
    name: 'Valley of the Latte Adventure Park',
    category: 'Cultural Experiences',
    description: 'A cultural adventure park featuring a riverboat tour, botanical gardens, and traditional Chamorro activities.',
  },
  {
    id: 9,
    name: 'Two Lovers Point',
    category: 'Sightseeing',
    description: 'A famous scenic overlook with a panoramic view of Tumon Bay.',
  },
  {
    id: 10,
    name: 'Guam Beach and Culture Park',
    category: 'Cultural Experiences',
    description: 'An outdoor park showcasing traditional Chamorro architecture and culture.',
  },
  {
    id: 11,
    name: 'Apra Harbor Shipwrecks',
    category: 'Scuba Diving',
    description: 'Explore the underwater world of Apra Harbor, with its shipwrecks and diverse marine life.',
  },
  {
    id: 12,
    name: 'Ritidian Point Wildlife Refuge',
    category: 'Wildlife',
    description: 'A wildlife refuge with pristine beaches, jungle trails, and opportunities to see native animals and plants.',
  },
  {
    id: 13,
    name: 'War in the Pacific National Historical Park',
    category: 'Historic Sites',
    description: 'A park dedicated to the memory and history of World War II in the Pacific, featuring historical artifacts and monuments.',
  },
  {
    id: 14,
    name: 'Gun Beach',
    category: 'Beaches',
    description: 'A beautiful beach with white sand, clear water, and excellent snorkeling opportunities.',
  },
  {
    id: 15,
    name: 'Tagachang Beach',
    category: 'Beaches',
    description: 'A secluded beach with calm waters, ideal for swimming, snorkeling, and picnics.',
  },
  {
    id: 16,
    name: 'Fort Nuestra Señora de la Soledad',
    category: 'Historic Sites',
    description: 'A historic Spanish fort overlooking Umatac Bay, offering panoramic views and rich history.',
  },
  {
    id: 17,
    name: 'Dolphin Watching Cruise',
    category: 'Wildlife',
    description: 'Embark on a cruise to see playful dolphins in their natural habitat.',
  },
  {
    id: 18,
    name: 'Tumon Beach',
    category: 'Beaches',
    description: 'A popular beach with a wide range of water sports and activities, as well as restaurants and hotels nearby.',
  },
  {
    id: 19,
    name: 'Mount Lamlam Hike',
    category: 'Hiking',
    description: 'Hike to the summit of Mount Lamlam, the highest peak in Guam, for breathtaking views of the island.',
  },
  {
    id: 20,
    name: 'UnderWater World Guam',
    category: 'Aquariums',
    description: 'An interactive aquarium with a diverse collection of marine life, including a 100-foot-long shark tunnel.',
  },
  {
    id: 21,
    name: 'Guam Museum',
    category: 'Museums',
    description: 'A museum showcasing Guam\'s history, culture, and heritage, with exhibits and educational programs.',
  },
  {
    id: 22,
    name: 'Pagat Cave',
    category: 'Caving',
    description: 'A limestone cave with ancient Chamorro pictographs, freshwater pools, and unique cave formations.',
  },
  {
    id: 23,
    name: 'Guam International Raceway',
    category: 'Motorsports',
    description: 'A motorsports facility with a motocross track, off-road course, and kart racing track.',
  },
  {
    id: 24,
    name: 'Inarajan Natural Pool',
    category: 'Natural Wonders',
    description: 'A unique natural pool surrounded by volcanic rock, perfect for swimming and snorkeling.',
  },
  {
    id: 25,
    name: 'Pacific War Museum',
    category: 'Museums',
    description: 'A museum dedicated to the history of World War II in the Pacific, featuring artifacts, weapons, and vehicles.',
  },
  {
    id: 26,
    name: 'Guam National Wildlife Refuge - Ritidian Unit',
    category: 'Wildlife',
    description: 'A wildlife refuge with native plants and animals, pristine beaches, and opportunities for birdwatching.',
  },
  {
    id: 27,
    name: 'Gun Beach',
    category: 'Beaches',
    description: 'A picturesque beach offering beautiful sunsets, snorkeling, and a popular beach bar.'
},
{
    id: 28,
    name: 'Ritidian Point',
    category: 'Beaches',
    description: 'A secluded beach with crystal clear waters, white sand, and breathtaking views.'
},
{
    id: 29,
    name: 'Guam Pacific War Museum',
    category: 'Museums',
    description: 'A museum dedicated to the history of World War II in the Pacific, featuring artifacts and exhibits.'
},
{
    id: 30,
    name: 'Guam Museum',
    category: 'Museums',
    description: 'A modern museum showcasing Guam\'s rich history, culture, and art.'
},
{
    id: 31,
    name: 'UnderWater World Guam',
    category: 'Aquariums',
    description: 'A large aquarium featuring a variety of marine species and a walk-through underwater tunnel.'
},
{
    id: 32,
    name: 'Tarza Magical Adventure Zone and Water Park',
    category: 'Water Parks',
    description: 'A family-friendly water park with slides, a lazy river, and a wave pool.'
},
{
    id: 33,
    name: 'Guam National Wildlife Refuge',
    category: 'Nature & Wildlife Areas',
    description: 'A protected area preserving native habitats and wildlife, with walking trails and birdwatching opportunities.'
},
{
    id: 34,
    name: 'Talofofo Falls',
    category: 'Waterfalls',
    description: 'A scenic waterfall and park offering hiking trails, swimming, and picturesque views.'
},
{
    id: 35,
    name: 'Asan Beach Park',
    category: 'Beaches',
    description: 'A historical beach park with picnic areas, a memorial, and a beautiful view of the ocean.'
},

  {
    id: 36,
    name: 'Micronesia Mall',
    category: 'Shopping',
    description: 'Guam\'s largest shopping center, featuring popular retailers, restaurants, and a movie theater.',
  },
  {
    id: 37,
    name: 'Slingshot Guam',
    category: 'Amusement Parks',
    description: 'Experience the thrill of being launched into the air at speeds up to 100 mph on this exciting ride.',
  },
  {
    id: 38,
    name: 'Valley of the Latte Adventure Park',
    category: 'Outdoor Activities',
    description: 'Immerse yourself in Guam\'s natural beauty and culture with riverboat tours, cultural demonstrations, and more.',
  },
  {
    id: 39,
    name: 'Fort Nuestra Señora de la Soledad',
    category: 'Historical Sites',
    description: 'Explore the ruins of this Spanish fort, built in 1810 to protect Umatac Bay, and enjoy the stunning views.',
  }
];

export default activities;
