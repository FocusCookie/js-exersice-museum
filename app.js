function createMuseum(museum) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("mu-wrapper");

  // TITLE
  const titlebar = document.createElement("div");
  titlebar.classList.add("mu-titlebar");
  titlebar.innerText = museum.title;

  const title = document.createElement("h1");
  title.classList.add("text--title");
  title.setAttribute("id", "name");

  titlebar.appendChild(title);

  // ADRESSE
  const adress = document.createElement("div");
  adress.classList.add("adress");

  const street = document.createElement("p");
  street.setAttribute("id", "street");
  street.innerText = museum.adresse.street;

  const zip = document.createElement("p");
  zip.setAttribute("id", "zip");

  const city = document.createElement("span");
  city.setAttribute("id", "city");
  city.innerText = museum.adresse.city;

  zip.innerText = museum.adresse.zip;
  zip.appendChild(city);

  adress.appendChild(street);
  adress.appendChild(zip);

  // DETAILS
  const details = document.createElement("div");
  details.classList.add("details");

  const type = document.createElement("span");
  type.setAttribute("id", "type");
  type.classList.add("details-item");
  type.innerText = museum.type;

  const entryfee = document.createElement("span");
  entryfee.setAttribute("id", "entryfee");
  entryfee.classList.add("details-item");
  entryfee.innerText = museum.entryfee;

  details.appendChild(type);
  details.appendChild(entryfee);

  // WRAPPER INHALT
  wrapper.appendChild(titlebar);
  wrapper.appendChild(adress);
  wrapper.appendChild(details);

  return wrapper;
}

const museen = [
  {
    title: "Jüdische Museum",
    adresse: {
      street: "Alexanderplatz 1",
      zip: 10405,
      city: "Berlin",
    },
    entryFee: 12,
    type: "history",
  },
  {
    title: "Modern ARt Museum",
    adresse: {
      street: "Van Gogh 1",
      zip: 1234,
      city: "New York",
    },
    entryFee: 9999,
    type: "art",
  },
  {
    title: "Modern ARt 1 Museum",
    adresse: {
      street: "Van Gogh 1",
      zip: 1234,
      city: "New York",
    },
    entryFee: 9999,
    type: "art",
  },
  {
    title: "Modern ARt 2Museum",
    adresse: {
      street: "Van Gogh 1",
      zip: 1234,
      city: "New York",
    },
    entryFee: 9999,
    type: "art",
  },
];

// BODY INHALT
museen.forEach((museum) => {
  document.body.appendChild(createMuseum(museum));
});
