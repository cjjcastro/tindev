import axios from "axios";

const api = axios.create({
  // baseURL: "http://10.0.3.2:3333" // Genymotion emulator
  // baseURL: "http://10.0.2.2:3333" // Android Studio emulator
  // to use localhost, run before: adb reverse tcp:3333 tcp:3333
  baseURL: "http://localhost:3333"
});

export default api;
