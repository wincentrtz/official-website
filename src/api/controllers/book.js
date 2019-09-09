import httpHandler from "utils/http-handler";
import config from "config";

const urls = config.urls.book;

export default {
  getBookByAlphabet(options) {
    const data = httpHandler.getRequest(urls.getAllBooks, options);
    return data;
  }
};
