export default {
  home: {
    pageNumber: 0,
    nextPage: "about"
  },
  about: {
    pageNumber: 1,
    prevPage: "home",
    nextPage: "experience"
  },
  experience: {
    pageNumber: 2,
    prevPage: "about",
    nextPage: "portofolio"
  },
  portofolio: {
    pageNumber: 3,
    prevPage: "experience",
    nextPage: "contact"
  },
  contact: {
    pageNumber: 4,
    prevPage: "portofolio"
  }
};
