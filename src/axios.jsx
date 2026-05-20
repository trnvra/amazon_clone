import axios from "axios";

const instance = axios.create({
  baseURL: window.location.hostname === "localhost"
    ? "https://api-od4jdgk6cq-uc.a.run.app"
    : "https://us-central1-clone-98b3f.cloudfunctions.net/api",
});

export default instance;