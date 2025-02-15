function getTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

// Get Date in this format Saturday, February 14 in spanish

function getDate() {
  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("es-ES", options);
}

const CONTACTS_LIST = [
  {
    id: 1,
    name: "Omar Montes",
    phone: "666 666 666",
  },
  {
    id: 2,
    name: "Vanesa",
    phone: "666 666 666",
  },
  {
    id: 3,
    name: "Milei",
    phone: "666 666 666",
  },
  {
    id: 4,
    name: "Nacho Vidal",
    phone: "666 666 666",
  },
  {
    id: 5,
    name: "El Dioni",
    phone: "666 666 666",
  },
  {
    id: 6,
    name: "El Fary",
    phone: "666 666 666",
  },
  {
    id: 7,
    name: "El Risitas",
    phone: "666 666 666",
  },
  {
    id: 8,
    name: "El Rubius",
    phone: "666 666 666",
  },
  {
    id: 9,
    name: "Santiago Abascal",
    phone: "666 666 666",
  },
  {
    id: 10,
    name: "Pablo Iglesias",
    phone: "666 666 666",
  },
  {
    id: 11,
    name: "Pablo Motos",
    phone: "666 666 666",
  },
  {
    id: 12,
    name: "Pablo Alborán",
    phone: "666 666 666",
  },
  {
    id: 13,
    name: "Pablo López",
    phone: "666 666 666",
  },
  {
    id: 14,
    name: "Pablo Neruda",
    phone: "666 666 666",
  },
  {
    id: 15,
    name: "Pablo Escobar",
    phone: "666 666 666",
  },
];

// Sort the contacts by name and group them by the first letter of the name
function getGroupedContacts() {
  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  const arr1 = CONTACTS_LIST.sort(compare);

  const result = {};

  arr1.forEach((item) => {
    let id = item.name[0].toLowerCase();

    if (result[id]) {
      result[id] = [...result[id], item];
    } else {
      result[id] = [item];
    }
  });
  return result;
}

const GROUPED_CONTACTS = getGroupedContacts();

document.addEventListener("alpine:init", () => {
  Alpine.store("app", {
    activeScreen: "home", // home, message, contacts, dialer, settings
  });
});
