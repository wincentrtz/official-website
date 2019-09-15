export default {
  home: {
    pageNumber: 0,
    nextPage: "about"
  },
  about: {
    pageNumber: 1,
    prevPage: "home",
    nextPage: "portofolio"
  },
  portofolio: {
    pageNumber: 2,
    prevPage: "about",
    nextPage: "experience"
  },
  experience: {
    pageNumber: 3,
    prevPage: "portofolio",
    nextPage: "contact"
  },
  contact: {
    pageNumber: 4,
    prevPage: "experience"
  }
};
