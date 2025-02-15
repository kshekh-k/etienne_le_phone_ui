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
  },
  {
    id: 2,
    name: "Vanesa",
  },
  {
    id: 3,
    name: "Milei",
  },
  {
    id: 4,
    name: "Nacho Vidal",
  },
  {
    id: 5,
    name: "El Dioni",
  },
  {
    id: 6,
    name: "El Fary",
  },
  {
    id: 7,
    name: "El Risitas",
  },
  {
    id: 8,
    name: "El Rubius",
  },
  {
    id: 9,
    name: "Santiago Abascal",
  },
  {
    id: 10,
    name: "Pablo Iglesias",
  },
  {
    id: 11,
    name: "Pablo Motos",
  },
  {
    id: 12,
    name: "Pablo Alborán",
  },
  {
    id: 13,
    name: "Pablo López",
  },
  {
    id: 14,
    name: "Pablo Neruda",
  },
  {
    id: 15,
    name: "Pablo Escobar",
  },
];

document.addEventListener("alpine:init", () => {
  Alpine.store("app", {
    activeScreen: "home", // home, message, contact, dialer, settings
  });
});
