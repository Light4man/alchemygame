// Base elements definition
export var initialElements = {
    'Water': {
        name: 'Water',
        isBasic: true,
        discovered: true
    },
    'Fire': {
        name: 'Fire',
        isBasic: true,
        discovered: true
    },
    'Earth': {
        name: 'Earth',
        isBasic: true,
        discovered: true
    },
    'Air': {
        name: 'Air',
        isBasic: true,
        discovered: true
    }
};
// Recipes for combining elements
export var recipes = [
    {
        ingredients: [
            'Water',
            'Fire'
        ],
        result: 'Steam'
    },
    {
        ingredients: [
            'Earth',
            'Fire'
        ],
        result: 'Lava'
    },
    {
        ingredients: [
            'Air',
            'Water'
        ],
        result: 'Rain'
    },
    {
        ingredients: [
            'Air',
            'Fire'
        ],
        result: 'Energy'
    },
    {
        ingredients: [
            'Earth',
            'Water'
        ],
        result: 'Mud'
    },
    {
        ingredients: [
            'Lava',
            'Water'
        ],
        result: 'Stone'
    },
    {
        ingredients: [
            'Air',
            'Earth'
        ],
        result: 'Dust'
    },
    {
        ingredients: [
            'Steam',
            'Earth'
        ],
        result: 'Geyser'
    },
    {
        ingredients: [
            'Mud',
            'Fire'
        ],
        result: 'Brick'
    },
    {
        ingredients: [
            'Stone',
            'Air'
        ],
        result: 'Sand'
    },
    {
        ingredients: [
            'Sand',
            'Fire'
        ],
        result: 'Glass'
    },
    {
        ingredients: [
            'Rain',
            'Earth'
        ],
        result: 'Plant'
    },
    {
        ingredients: [
            'Plant',
            'Earth'
        ],
        result: 'Tree'
    },
    {
        ingredients: [
            'Water',
            'Plant'
        ],
        result: 'Algae'
    },
    {
        ingredients: [
            'Dust',
            'Water'
        ],
        result: 'Clay'
    },
    {
        ingredients: [
            'Tree',
            'Fire'
        ],
        result: 'Ash'
    },
    {
        ingredients: [
            'Ash',
            'Water'
        ],
        result: 'Soot'
    },
    {
        ingredients: [
            'Stone',
            'Fire'
        ],
        result: 'Metal'
    },
    {
        ingredients: [
            'Metal',
            'Fire'
        ],
        result: 'Blade'
    },
    {
        ingredients: [
            'Blade',
            'Tree'
        ],
        result: 'Wood'
    },
    {
        ingredients: [
            'Wood',
            'Fire'
        ],
        result: 'Smoke'
    },
    {
        ingredients: [
            'Smoke',
            'Air'
        ],
        result: 'Fog'
    },
    {
        ingredients: [
            'Fog',
            'Water'
        ],
        result: 'Mist'
    },
    {
        ingredients: [
            'Plant',
            'Fire'
        ],
        result: 'Coal'
    },
    {
        ingredients: [
            'Coal',
            'Fire'
        ],
        result: 'Diamond'
    },
    {
        ingredients: [
            'Diamond',
            'Blade'
        ],
        result: 'Gem'
    },
    {
        ingredients: [
            'Glass',
            'Sand'
        ],
        result: 'Bottle'
    },
    {
        ingredients: [
            'Bottle',
            'Water'
        ],
        result: 'Jar'
    },
    {
        ingredients: [
            'Jar',
            'Plant'
        ],
        result: 'Pot'
    },
    {
        ingredients: [
            'Pot',
            'Fire'
        ],
        result: 'Ceramic'
    },
    {
        ingredients: [
            'Clay',
            'Fire'
        ],
        result: 'Pottery'
    },
    {
        ingredients: [
            'Pottery',
            'Water'
        ],
        result: 'Vase'
    },
    {
        ingredients: [
            'Rain',
            'Fire'
        ],
        result: 'Cloud'
    },
    {
        ingredients: [
            'Cloud',
            'Air'
        ],
        result: 'Sky'
    },
    {
        ingredients: [
            'Sky',
            'Fire'
        ],
        result: 'Sun'
    },
    {
        ingredients: [
            'Sun',
            'Rain'
        ],
        result: 'Rainbow'
    },
    {
        ingredients: [
            'Sun',
            'Plant'
        ],
        result: 'Flower'
    },
    {
        ingredients: [
            'Flower',
            'Water'
        ],
        result: 'Perfume'
    },
    {
        ingredients: [
            'Algae',
            'Stone'
        ],
        result: 'Moss'
    },
    {
        ingredients: [
            'Moss',
            'Earth'
        ],
        result: 'Grass'
    },
    {
        ingredients: [
            'Grass',
            'Fire'
        ],
        result: 'Hay'
    },
    {
        ingredients: [
            'Hay',
            'Water'
        ],
        result: 'Compost'
    },
    {
        ingredients: [
            'Compost',
            'Earth'
        ],
        result: 'Soil'
    },
    {
        ingredients: [
            'Soil',
            'Plant'
        ],
        result: 'Garden'
    },
    {
        ingredients: [
            'Garden',
            'Water'
        ],
        result: 'Pond'
    },
    {
        ingredients: [
            'Pond',
            'Fish'
        ],
        result: 'Aquarium'
    },
    {
        ingredients: [
            'Energy',
            'Water'
        ],
        result: 'Electricity'
    },
    {
        ingredients: [
            'Electricity',
            'Metal'
        ],
        result: 'Wire'
    },
    {
        ingredients: [
            'Wire',
            'Glass'
        ],
        result: 'Bulb'
    },
    {
        ingredients: [
            'Bulb',
            'Electricity'
        ],
        result: 'Light'
    },
    {
        ingredients: [
            'Light',
            'Water'
        ],
        result: 'Reflection'
    },
    {
        ingredients: [
            'Reflection',
            'Glass'
        ],
        result: 'Mirror'
    },
    {
        ingredients: [
            'Sun',
            'Glass'
        ],
        result: 'Lens'
    },
    {
        ingredients: [
            'Lens',
            'Fire'
        ],
        result: 'Magnifier'
    },
    {
        ingredients: [
            'Magnifier',
            'Plant'
        ],
        result: 'Seed'
    },
    {
        ingredients: [
            'Seed',
            'Earth'
        ],
        result: 'Sprout'
    },
    {
        ingredients: [
            'Sprout',
            'Water'
        ],
        result: 'Vine'
    },
    {
        ingredients: [
            'Vine',
            'Tree'
        ],
        result: 'Forest'
    },
    {
        ingredients: [
            'Forest',
            'Fire'
        ],
        result: 'Wildfire'
    },
    {
        ingredients: [
            'Wildfire',
            'Water'
        ],
        result: 'Charcoal'
    },
    {
        ingredients: [
            'Charcoal',
            'Metal'
        ],
        result: 'Steel'
    },
    {
        ingredients: [
            'Steel',
            'Blade'
        ],
        result: 'Sword'
    },
    {
        ingredients: [
            'Sword',
            'Stone'
        ],
        result: 'Statue'
    },
    {
        ingredients: [
            'Statue',
            'Water'
        ],
        result: 'Fountain'
    },
    {
        ingredients: [
            'Fountain',
            'Air'
        ],
        result: 'Spray'
    },
    {
        ingredients: [
            'Spray',
            'Plant'
        ],
        result: 'Dew'
    },
    {
        ingredients: [
            'Dew',
            'Sun'
        ],
        result: 'Morning'
    },
    {
        ingredients: [
            'Sky',
            'Water'
        ],
        result: 'Horizon'
    },
    {
        ingredients: [
            'Horizon',
            'Sun'
        ],
        result: 'Sunset'
    },
    {
        ingredients: [
            'Sunset',
            'Water'
        ],
        result: 'Ocean'
    },
    {
        ingredients: [
            'Ocean',
            'Sand'
        ],
        result: 'Beach'
    },
    {
        ingredients: [
            'Beach',
            'Sun'
        ],
        result: 'Tan'
    },
    {
        ingredients: [
            'Tan',
            'Plant'
        ],
        result: 'Leather'
    },
    {
        ingredients: [
            'Leather',
            'Blade'
        ],
        result: 'Belt'
    },
    {
        ingredients: [
            'Ocean',
            'Salt'
        ],
        result: 'Sea'
    },
    {
        ingredients: [
            'Sea',
            'Wind'
        ],
        result: 'Wave'
    },
    {
        ingredients: [
            'Wave',
            'Stone'
        ],
        result: 'Pebble'
    },
    {
        ingredients: [
            'Pebble',
            'Water'
        ],
        result: 'River'
    },
    {
        ingredients: [
            'River',
            'Earth'
        ],
        result: 'Delta'
    },
    {
        ingredients: [
            'Delta',
            'Plant'
        ],
        result: 'Swamp'
    },
    {
        ingredients: [
            'Swamp',
            'Tree'
        ],
        result: 'Mangrove'
    },
    {
        ingredients: [
            'Mangrove',
            'Water'
        ],
        result: 'Fish'
    },
    {
        ingredients: [
            'Fish',
            'Fire'
        ],
        result: 'Sushi'
    },
    {
        ingredients: [
            'Sushi',
            'Sea'
        ],
        result: 'Seaweed'
    },
    {
        ingredients: [
            'Seaweed',
            'Sun'
        ],
        result: 'Kelp'
    },
    {
        ingredients: [
            'Kelp',
            'Water'
        ],
        result: 'Soup'
    },
    {
        ingredients: [
            'Soup',
            'Fire'
        ],
        result: 'Broth'
    },
    {
        ingredients: [
            'Broth',
            'Plant'
        ],
        result: 'Stew'
    },
    {
        ingredients: [
            'Stew',
            'Pottery'
        ],
        result: 'Meal'
    },
    {
        ingredients: [
            'Meal',
            'Energy'
        ],
        result: 'Strength'
    },
    {
        ingredients: [
            'Strength',
            'Metal'
        ],
        result: 'Armor'
    },
    {
        ingredients: [
            'Armor',
            'Blade'
        ],
        result: 'Shield'
    },
    {
        ingredients: [
            'Shield',
            'Wood'
        ],
        result: 'Wall'
    },
    {
        ingredients: [
            'Wall',
            'Brick'
        ],
        result: 'House'
    },
    {
        ingredients: [
            'House',
            'Fire'
        ],
        result: 'Fireplace'
    },
    {
        ingredients: [
            'Fireplace',
            'Air'
        ],
        result: 'Chimney'
    },
    {
        ingredients: [
            'Chimney',
            'Smoke'
        ],
        result: 'Pollution'
    },
    {
        ingredients: [
            'Pollution',
            'Rain'
        ],
        result: 'Acid'
    },
    {
        ingredients: [
            'Acid',
            'Stone'
        ],
        result: 'Erosion'
    },
    {
        ingredients: [
            'Erosion',
            'Earth'
        ],
        result: 'Canyon'
    },
    {
        ingredients: [
            'Canyon',
            'Water'
        ],
        result: 'Stream'
    },
    {
        ingredients: [
            'Stream',
            'Fish'
        ],
        result: 'Trout'
    },
    {
        ingredients: [
            'Trout',
            'Fire'
        ],
        result: 'Grilled'
    },
    {
        ingredients: [
            'Grilled',
            'Plant'
        ],
        result: 'Spice'
    },
    {
        ingredients: [
            'Spice',
            'Water'
        ],
        result: 'Sauce'
    },
    {
        ingredients: [
            'Sauce',
            'Meal'
        ],
        result: 'Feast'
    },
    {
        ingredients: [
            'Feast',
            'House'
        ],
        result: 'Party'
    },
    {
        ingredients: [
            'Party',
            'Energy'
        ],
        result: 'Dance'
    },
    {
        ingredients: [
            'Dance',
            'Air'
        ],
        result: 'Rhythm'
    },
    {
        ingredients: [
            'Rhythm',
            'Metal'
        ],
        result: 'Bell'
    },
    {
        ingredients: [
            'Bell',
            'Wind'
        ],
        result: 'Chime'
    },
    {
        ingredients: [
            'Chime',
            'Sky'
        ],
        result: 'Music'
    },
    {
        ingredients: [
            'Music',
            'Water'
        ],
        result: 'Melody'
    },
    {
        ingredients: [
            'Melody',
            'Plant'
        ],
        result: 'Song'
    },
    {
        ingredients: [
            'Song',
            'Bird'
        ],
        result: 'Harmony'
    },
    {
        ingredients: [
            'Sun',
            'Stone'
        ],
        result: 'Heat'
    },
    {
        ingredients: [
            'Heat',
            'Water'
        ],
        result: 'Boil'
    },
    {
        ingredients: [
            'Boil',
            'Metal'
        ],
        result: 'Kettle'
    },
    {
        ingredients: [
            'Kettle',
            'Plant'
        ],
        result: 'Tea'
    },
    {
        ingredients: [
            'Tea',
            'Glass'
        ],
        result: 'Cup'
    },
    {
        ingredients: [
            'Cup',
            'Water'
        ],
        result: 'Drink'
    },
    {
        ingredients: [
            'Drink',
            'Energy'
        ],
        result: 'Boost'
    },
    {
        ingredients: [
            'Boost',
            'Air'
        ],
        result: 'Speed'
    },
    {
        ingredients: [
            'Speed',
            'Earth'
        ],
        result: 'Road'
    },
    {
        ingredients: [
            'Road',
            'Stone'
        ],
        result: 'Path'
    },
    {
        ingredients: [
            'Path',
            'Forest'
        ],
        result: 'Trail'
    },
    {
        ingredients: [
            'Trail',
            'Water'
        ],
        result: 'Bridge'
    },
    {
        ingredients: [
            'Bridge',
            'Metal'
        ],
        result: 'Gate'
    },
    {
        ingredients: [
            'Gate',
            'House'
        ],
        result: 'Castle'
    },
    {
        ingredients: [
            'Castle',
            'Fire'
        ],
        result: 'Forge'
    },
    {
        ingredients: [
            'Forge',
            'Steel'
        ],
        result: 'Weapon'
    },
    {
        ingredients: [
            'Weapon',
            'Energy'
        ],
        result: 'Power'
    },
    {
        ingredients: [
            'Power',
            'Sky'
        ],
        result: 'Thunder'
    },
    {
        ingredients: [
            'Thunder',
            'Rain'
        ],
        result: 'Storm'
    },
    {
        ingredients: [
            'Storm',
            'Ocean'
        ],
        result: 'Hurricane'
    },
    {
        ingredients: [
            'Hurricane',
            'Tree'
        ],
        result: 'Debris'
    },
    {
        ingredients: [
            'Debris',
            'Water'
        ],
        result: 'Driftwood'
    },
    {
        ingredients: [
            'Driftwood',
            'Fire'
        ],
        result: 'Campfire'
    },
    {
        ingredients: [
            'Campfire',
            'Stone'
        ],
        result: 'Hearth'
    },
    {
        ingredients: [
            'Hearth',
            'House'
        ],
        result: 'Home'
    },
    {
        ingredients: [
            'Home',
            'Garden'
        ],
        result: 'Village'
    },
    {
        ingredients: [
            'Village',
            'Road'
        ],
        result: 'Town'
    },
    {
        ingredients: [
            'Town',
            'Wall'
        ],
        result: 'City'
    },
    {
        ingredients: [
            'City',
            'Sky'
        ],
        result: 'Skyline'
    },
    {
        ingredients: [
            'Skyline',
            'Light'
        ],
        result: 'Glow'
    },
    {
        ingredients: [
            'Glow',
            'Night'
        ],
        result: 'Stars'
    },
    {
        ingredients: [
            'Stars',
            'Sky'
        ],
        result: 'Galaxy'
    },
    {
        ingredients: [
            'Galaxy',
            'Energy'
        ],
        result: 'Universe'
    },
    {
        ingredients: [
            'Universe',
            'Dust'
        ],
        result: 'Space'
    },
    {
        ingredients: [
            'Space',
            'Stone'
        ],
        result: 'Meteor'
    },
    {
        ingredients: [
            'Meteor',
            'Earth'
        ],
        result: 'Crater'
    },
    {
        ingredients: [
            'Crater',
            'Water'
        ],
        result: 'Lake'
    },
    {
        ingredients: [
            'Lake',
            'Sun'
        ],
        result: 'Evaporation'
    },
    {
        ingredients: [
            'Evaporation',
            'Air'
        ],
        result: 'Vapor'
    },
    {
        ingredients: [
            'Vapor',
            'Cold'
        ],
        result: 'Snow'
    },
    {
        ingredients: [
            'Snow',
            'Earth'
        ],
        result: 'Ice'
    },
    {
        ingredients: [
            'Ice',
            'Fire'
        ],
        result: 'Puddle'
    },
    {
        ingredients: [
            'Puddle',
            'Mud'
        ],
        result: 'Slush'
    },
    {
        ingredients: [
            'Slush',
            'Sun'
        ],
        result: 'Melt'
    },
    {
        ingredients: [
            'Melt',
            'Metal'
        ],
        result: 'Liquid'
    },
    {
        ingredients: [
            'Liquid',
            'Glass'
        ],
        result: 'Beaker'
    },
    {
        ingredients: [
            'Beaker',
            'Plant'
        ],
        result: 'Potion'
    },
    {
        ingredients: [
            'Potion',
            'Energy'
        ],
        result: 'Magic'
    },
    {
        ingredients: [
            'Magic',
            'Air'
        ],
        result: 'Spell'
    },
    {
        ingredients: [
            'Spell',
            'Book'
        ],
        result: 'Wizard'
    },
    {
        ingredients: [
            'Wood',
            'Paper'
        ],
        result: 'Book'
    },
    {
        ingredients: [
            'Paper',
            'Plant'
        ],
        result: 'Page'
    },
    {
        ingredients: [
            'Page',
            'Ink'
        ],
        result: 'Letter'
    },
    {
        ingredients: [
            'Ink',
            'Feather'
        ],
        result: 'Quill'
    },
    {
        ingredients: [
            'Feather',
            'Bird'
        ],
        result: 'Wing'
    },
    {
        ingredients: [
            'Bird',
            'Air'
        ],
        result: 'Flight'
    },
    {
        ingredients: [
            'Flight',
            'Sky'
        ],
        result: 'Cloud'
    },
    {
        ingredients: [
            'Cloud',
            'Cold'
        ],
        result: 'Hail'
    },
    {
        ingredients: [
            'Hail',
            'Earth'
        ],
        result: 'Frost'
    },
    {
        ingredients: [
            'Frost',
            'Water'
        ],
        result: 'Chill'
    },
    {
        ingredients: [
            'Chill',
            'Air'
        ],
        result: 'Cold'
    },
    {
        ingredients: [
            'Cold',
            'Sun'
        ],
        result: 'Dawn'
    },
    {
        ingredients: [
            'Dawn',
            'Sky'
        ],
        result: 'Day'
    },
    {
        ingredients: [
            'Day',
            'Sun'
        ],
        result: 'Noon'
    },
    {
        ingredients: [
            'Noon',
            'Shadow'
        ],
        result: 'Time'
    },
    {
        ingredients: [
            'Shadow',
            'Light'
        ],
        result: 'Darkness'
    },
    {
        ingredients: [
            'Darkness',
            'Sky'
        ],
        result: 'Night'
    },
    {
        ingredients: [
            'Night',
            'Stars'
        ],
        result: 'Moon'
    },
    {
        ingredients: [
            'Moon',
            'Ocean'
        ],
        result: 'Tide'
    },
    {
        ingredients: [
            'Tide',
            'Sand'
        ],
        result: 'Shell'
    },
    {
        ingredients: [
            'Shell',
            'Stone'
        ],
        result: 'Fossil'
    },
    {
        ingredients: [
            'Fossil',
            'Earth'
        ],
        result: 'Oil'
    },
    {
        ingredients: [
            'Oil',
            'Fire'
        ],
        result: 'Fuel'
    },
    {
        ingredients: [
            'Fuel',
            'Metal'
        ],
        result: 'Engine'
    },
    {
        ingredients: [
            'Engine',
            'Wood'
        ],
        result: 'Car'
    },
    {
        ingredients: [
            'Car',
            'Road'
        ],
        result: 'Travel'
    },
    {
        ingredients: [
            'Travel',
            'Sky'
        ],
        result: 'Plane'
    },
    {
        ingredients: [
            'Plane',
            'Metal'
        ],
        result: 'Jet'
    },
    {
        ingredients: [
            'Jet',
            'Air'
        ],
        result: 'Speed'
    },
    {
        ingredients: [
            'Speed',
            'Time'
        ],
        result: 'Race'
    },
    {
        ingredients: [
            'Race',
            'Energy'
        ],
        result: 'Victory'
    },
    {
        ingredients: [
            'Victory',
            'Metal'
        ],
        result: 'Trophy'
    },
    {
        ingredients: [
            'Trophy',
            'Glass'
        ],
        result: 'Display'
    },
    {
        ingredients: [
            'Display',
            'Light'
        ],
        result: 'Exhibit'
    },
    {
        ingredients: [
            'Exhibit',
            'House'
        ],
        result: 'Museum'
    }
];
export var elementIcons = {
    'Water': '💧',
    'Fire': '🔥',
    'Earth': '🌍',
    'Air': '💨',
    'Steam': '♨️',
    'Lava': '🌋',
    'Rain': '🌧️',
    'Energy': '🔋',
    'Mud': '💩',
    'Stone': '🗿',
    'Dust': '🌫️',
    'Geyser': '🌊',
    'Brick': '🧱',
    'Sand': '🏜️',
    'Glass': '🍸',
    'Plant': '🌿',
    'Tree': '🌳',
    'Algae': '🟢',
    'Clay': '🗿',
    'Ash': '🥀',
    'Soot': '🧗',
    'Metal': '⚙️',
    'Blade': '🗡️',
    'Wood': '🪓',
    'Smoke': '🌁',
    'Fog': '🌂',
    'Mist': '🌥️',
    'Coal': '💿',
    'Diamond': '💎',
    'Gem': '💍',
    'Bottle': '🍾',
    'Jar': '🍶',
    'Pot': '🍲',
    'Ceramic': '🏺',
    'Pottery': '🖌️',
    'Vase': '🏵️',
    'Cloud': '☁️',
    'Sky': '🌌',
    'Sun': '🌞',
    'Rainbow': '🌈',
    'Flower': '🌸',
    'Perfume': '💐',
    'Moss': '🍃',
    'Grass': '🌱',
    'Hay': '🌾',
    'Compost': '🍂',
    'Soil': '⛰️',
    'Garden': '🏡',
    'Pond': '🐸',
    'Aquarium': '🐠',
    'Electricity': '⚡',
    'Wire': '🔌',
    'Bulb': '💫',
    'Light': '✨',
    'Reflection': '🌅',
    'Mirror': '🖼️',
    'Lens': '🔎',
    'Magnifier': '🔍',
    'Seed': '🌰',
    'Sprout': '🌵',
    'Vine': '🍇',
    'Forest': '🏞️',
    'Wildfire': '🌩️',
    'Charcoal': '⚫',
    'Steel': '🔗',
    'Sword': '⚔️',
    'Statue': '🗽',
    'Fountain': '⛲',
    'Spray': '🚿',
    'Dew': '🌼',
    'Morning': '🌅',
    'Horizon': '🎯',
    'Sunset': '🌆',
    'Ocean': '🐳',
    'Beach': '🏝️',
    'Tan': '☀️',
    'Leather': '🥾',
    'Belt': '🥋',
    'Sea': '🐳',
    'Wave': '🏄',
    'Pebble': '🥌',
    'River': '🛶',
    'Delta': '🌐',
    'Swamp': '🐊',
    'Mangrove': '🌳',
    'Fish': '🐟',
    'Sushi': '🍣',
    'Seaweed': '🥬',
    'Kelp': '🌵',
    'Soup': '🥣',
    'Broth': '🥄',
    'Stew': '🍲',
    'Meal': '🍽️',
    'Strength': '💪',
    'Armor': '🥼',
    'Shield': '🛡️',
    'Wall': '🏯',
    'House': '🏠',
    'Fireplace': '🕯️',
    'Chimney': '🏭',
    'Pollution': '☢️',
    'Acid': '🧪',
    'Erosion': '🌪️',
    'Canyon': '🏞️',
    'Stream': '🚿',
    'Trout': '🎣',
    'Grilled': '🍖',
    'Spice': '🌶️',
    'Sauce': '🥫',
    'Feast': '🍗',
    'Party': '🎉',
    'Dance': '💃',
    'Rhythm': '🥁',
    'Bell': '🔔',
    'Chime': '🎐',
    'Music': '🎵',
    'Melody': '🎶',
    'Song': '🎤',
    'Harmony': '🎼',
    'Heat': '🕯️',
    'Boil': '🍳',
    'Kettle': '☕',
    'Tea': '🍵',
    'Cup': '🥛',
    'Drink': '🥤',
    'Boost': '🚀',
    'Speed': '🏃',
    'Road': '🛤️',
    'Path': '🚶',
    'Trail': '⛺',
    'Bridge': '🌉',
    'Gate': '🚪',
    'Castle': '🏰',
    'Forge': '⚒️',
    'Weapon': '🔫',
    'Power': '💥',
    'Thunder': '⛈️',
    'Storm': '🌀',
    'Hurricane': '🌪️',
    'Debris': '🗑️',
    'Driftwood': '🛳️',
    'Campfire': '🏕️',
    'Hearth': '🏡',
    'Home': '🏘️',
    'Village': '🌆',
    'Town': '🏙️',
    'City': '🌃',
    'Skyline': '🏢',
    'Glow': '👑',
    'Stars': '🌟',
    'Galaxy': '🌌',
    'Universe': '🌠',
    'Space': '🪐',
    'Meteor': '☄️',
    'Crater': '🕳️',
    'Lake': '🦆',
    'Evaporation': '🌫️',
    'Vapor': '💨',
    'Snow': '☃️',
    'Ice': '🧊',
    'Puddle': '🚰',
    'Slush': '❄️',
    'Melt': '🌡️',
    'Liquid': '🧴',
    'Beaker': '🧫',
    'Potion': '🧪',
    'Magic': '🎩',
    'Spell': '📜',
    'Wizard': '🧙',
    'Book': '📖',
    'Paper': '📄',
    'Page': '📑',
    'Letter': '✉️',
    'Ink': '🖋️',
    'Quill': '✒️',
    'Feather': '🦢',
    'Bird': '🐦',
    'Wing': '🕊️',
    'Flight': '🛫',
    'Hail': '🌨️',
    'Frost': '☃️',
    'Chill': '🌬️',
    'Cold': '🥶',
    'Dawn': '🌅',
    'Day': '☀️',
    'Noon': '⏳',
    'Time': '⏰',
    'Shadow': '🌑',
    'Darkness': '🌚',
    'Night': '🌙',
    'Moon': '🌕',
    'Tide': '⏖',
    'Shell': '🐚',
    'Fossil': '🦴',
    'Oil': '🛢️',
    'Fuel': '⛽',
    'Engine': '🚂',
    'Car': '🚗',
    'Travel': '🗺️',
    'Plane': '🛩️',
    'Jet': '✈️',
    'Race': '🏁',
    'Victory': '🎖️',
    'Trophy': '🏆',
    'Display': '📺',
    'Exhibit': '🖌️',
    'Museum': '🏛️'
};
