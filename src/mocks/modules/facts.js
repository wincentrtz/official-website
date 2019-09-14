import METHODS from "constants/http/methods";
import CODES from "constants/http/codes";
import config from "config";

const urls = config.urls.fact;

const getMyFacts = {
  url: urls.getAllFacts,
  code: CODES.SUCCESS,
  method: METHODS.GET,
  data: [
    {
      title: "Book Read",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, repellendus eveniet."
    },
    {
      title: "Coffee Consumption",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, repellendus eveniet."
    },
    {
      title: "My github",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, repellendus eveniet."
    },
    {
      title: "Programming Language",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, repellendus eveniet."
    }
  ]
};

export default [getMyFacts];
