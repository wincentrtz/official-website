import httpHandler from "utils/http-handler";
import config from "config";

const urls = config.urls.fact;

export default {
  getAllFacts() {
    const data = httpHandler.getRequest(urls.getAllFacts);
    return data;
  }
};
