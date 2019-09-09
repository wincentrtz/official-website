import METHODS from "constants/http/methods";
import CODES from "constants/http/codes";
import config from "config";

const urls = config.urls.book;

const getBooks = {
  url: urls.getAllBooks,
  code: CODES.SUCCESS,
  method: METHODS.GET,
  data: [
    {
      id: 1,
      title: "Book Readed",
      author: "Mark Manson",
      releasedYear: 2018,
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41BjtnvIUQL._SX382_BO1,204,203,200_.jpg"
    },
    {
      id: 2,
      title: "Book Readed",
      author: "Mark Manson",
      releasedYear: 2018,
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41BjtnvIUQL._SX382_BO1,204,203,200_.jpg"
    },
    {
      id: 3,
      title: "Book Readed",
      author: "Mark Manson",
      releasedYear: 2018,
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41BjtnvIUQL._SX382_BO1,204,203,200_.jpg"
    },
    {
      id: 4,
      title: "Book Readed",
      author: "Mark Manson",
      releasedYear: 2018,
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41BjtnvIUQL._SX382_BO1,204,203,200_.jpg"
    }
  ]
};

export default [getBooks];
