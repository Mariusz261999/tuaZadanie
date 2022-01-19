import StorageService from "./StorageService";
const messageAPI =
  "https://actionbot-demo.eu-de.mybluemix.net/test-api/message";
const authorizationAPI =
  "https://actionbot-demo.eu-de.mybluemix.net/test-api/auth";

class ApiService {
  sendAuthorization = () => {
    const storage = new StorageService();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: "test", password: "test123" }),
    };

    return fetch(authorizationAPI, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        storage.setAuthorizationData({ data });
        return data;
      })
      .catch((error) => console.log(error));
  };

  getBotResponse = (authorization) => {
    const requestOptions = {
      method: "POST",
      headers: { Authorization: authorization },
      body: JSON.stringify({ text: "text" }),
    };
    return fetch(messageAPI, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error));
  };
}

export default ApiService;
