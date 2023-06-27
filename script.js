

let AnimaltoGuess = "Reveal";
let hint = "Hint";

function GenAnim(){
  document.getElementById("reveal").innerHTML = "Reveal";
    const animals = ["Aardvark","Akita","Albacore","Albatross","Alligator","Alpaca","Anaconda","Anchovies","Angelfish","Angelshark","Anglerfish","Ant","Anteater","Antelope","Ape","Arctic Fox","Armadillo","Aye Aye","Baboon","Badger","Bald Eagle","Bandicoot","Barn Owl","Barnacle","Barracuda","Basset Hound","Bat","Beagle","Bear","Bearded Dragon","Beaver","Bed Bugs","Bee","Beetle","Bengal Tiger","Betta Fish","Bird","Bird Of Paradise","Bison","Black Mamba","Black Widow Spider","Bloodhound","Blue Jay","Blue Whale","Blue-Ringed Octopus","Bobcat","Bonobo","Border Collie","Boston Terrier","Bottlenose Dolphin","Box Turtle","Boxer","Brachiosaurus","Brontosaurus","Brown Bear","Buffalo","Bull Shark","Bulldog","Bullfrog","Bumblebee","Bush Baby","Butterfly","Camel","Capybara","Caracal","Carp","Carpenter Ant","Cat","Caterpillar","Catfish","Centipede","Chameleon","Cheetah","Chickadee","Chicken","Chihuahua","Chimpanzee","Chinchilla","Chipmunk","Chow Chow","Cicada","Clownfish","Coati","Cobra","Cockatiel","Cockatoo","Cocker Spaniel","Cockroach","Codfish","Coelacanth","Collie","Copperhead","Corn Snake","Cottonmouth","Cougar","Cow","Coyote","Crab","Crane","Cricket","Crocodile","Crow","Cuckoo","Cuttlefish","Dachshund","Dalmatian","Death Adder","Deer","Deer Tick","Dingo","Diplodocus","Doberman Pinscher","Dodo","Dog","Dolphin","Donkey","Dragonfly","Duck","Dung Beetle","Eagle","Earthworm","Earwig","Echidna","Eel","Electric Eel","Elephant","Elephant Seal","Elk","Emperor Penguin","Emu","Ermine","Falcon","Ferret","Firefly","Fish","Flamingo","Flea","Flounder","Fly","Flying Fish","Flying Squirrel","Fox","Frog","Fruit Bat","Fruit Fly","Garter Snake","Gazelle","Gecko","Gerbil","Gibbon","Gila Monster","Giraffe","Gnat","Goat","Goldfish","Goose","Gopher","Gorilla","Grasshopper","Great Dane","Great White Shark","Greyhound","Grizzly Bear","Groundhog","Woodchuck","Grouse","Guinea Pig","Guppy","Hagfish","Halibut","Hammerhead Shark","Hamster","Hare","Hawk","Hedgehog","Hercules Beetle","Hermit Crab","Heron","Herring","Hippopotamus","Hognose snake","Honey Badger","Honey Bee","Horse","Horsefly","Horseshoe Crab","Human","Hummingbird","Humpback Whale","Huntsman Spider","Husky","Hyena","Ibex","Iguana","Insect","Jack Russell","Jackal","Jackrabbit","Jaguar","Jellyfish","Jumping Spider","Kangaroo","Killdeer","Killer Whale","King Cobra","King Crab","Kingfisher","Kiwi","Koala","Koi Fish","Komodo Dragon","Krill","Labradoodle","Ladybug","Lamprey","Leech","Lemming","Lemur","Leopard","Leopard Shark","Liger","Lion","Lionfish","Lizard","Llama","Lobster","Locust","Lungfish","Lynx","Macaw","Madagascar Hissing Cockroach","Maggot","Magpie","Mahi Mahi","Mallard","Maltese","Mamba","Man of War","Manatee","Manta Ray","Marmoset","Marmot","Mastiff","Mayfly","Millipede","Mink","Mole","Monarch Butterfly","Mongoose","Monkey","Moose","Moray Eel","Mosquito","Moth","Mountain Goat","Mountain Lion","Mouse","Mule","Muskrat","Narwhal","Newt","Nightingale","Nurse Shark","Ocelot","Octopus","Okapi","Opossum","Orangutan","Orb Weaver","Ostrich","Otter","Owl","Ox","Oyster","Painted Turtle","Panther","Parakeet","Parrot","Partridge","Peacock","Pelican","Penguin","Peregrine Falcon","Persian","Pheasant","Pig","Pigeon","Pike Fish","Pink Dolphin","Piranha","Pit Bull","Platypus","Pointer","Poison Dart Frog","Polar Bear","Pomeranian","Poodle","Porcupine","Porpoise","Possum","Prairie Dog","Prawn","Praying Mantis","Pterodactyl","Puffer","Puffin","Pug","Puma","Python","Quail","Quetzal","Rabbit","Raccoon","Rat","Rattlesnake","Red Knee Tarantula","Red Panda","Reindeer","Rhinoceros","Robin","Rockfish","Rodents","Rooster","Rottweiler","Russell Terrier","Saber-Toothed Tiger","Saint Bernard","Salamander","Salmon","Samoyed","Sardines","Sawfish","Scarab","Scorpion","Sea Anemone","Sea Lion","Sea Otter","Sea Slug","Sea Snake","Sea Urchin","Seagull","Seahorse","Seal","Shark","Sheep","Shiba Inu","Shih Tzu","Shrew","Shrimp","Siamese","Siberian Husky","Siberian Tiger","Sidewinder","Skunk","Sloth","Slug","Snail","Snake","Snapping Turtle","Snow Crab","Snow Leopard","Sockeye Salmon","Sparrow","Sperm Whale","Spider","Spider Monkey","Squid","Squirrel","Stag Beetle","Schnauzer","Starfish","Stick Insect","Stingray","Stoat","Stork","Sturgeon","Sucker Fish","Sugar Glider","Swan","Tapir","Tarantula Hawk","Tasmanian Devil","Termite","Terrier","Tick","Tiger","Tortoise","Tree Frog","Trout","Tsetse Fly","Tuna","Turkey","Turtle","Tyrannosaurus Rex","Vampire Bat","Velociraptor","Viper","Vulture","Wallaby","Walleye","Walrus","Warthog","Wasp","Water Buffalo","Weasel","Whale Shark","Whippet","Wildebeest","Wolf","Wolverine","Wombat","Wood Tick","Woodpecker","Woolly Mammoth","Worm","Yak","Zebra","Zebra Mussels","Zonkey","Zorse"]
    let randimal = animals[Math.floor(Math.random() * animals.length)];
   
    AnimaltoGuess = randimal.toUpperCase();
    console.log(AnimaltoGuess);
    hint = AnimaltoGuess.slice(0,2);
    document.getElementById("hint").innerHTML = hint;
}

function validateForm() {
    let x = document.forms["myForm"]["guess"].value;
    if (x == "") {
      alert("Guess must be filled out");
      return false;
    } else if (x.toUpperCase() == AnimaltoGuess) {
      alert("Correct!");

      return false;
    } else {
      alert("Try Again");
      return false;
    }
  }

  function Reveal() {
    document.getElementById("reveal").innerHTML = AnimaltoGuess;

  }
