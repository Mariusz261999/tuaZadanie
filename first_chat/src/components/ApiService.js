import StorageService from "./StorageService";
class ApiService {
  sendAuthorization = () => {
    const storage = new StorageService();
    console.log("send authorization");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: "test", password: "test123" }),
    };
    fetch(
      "https://actionbot-demo.eu-de.mybluemix.net/test-api/auth",
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        storage.setAuthorizationData({ data });
        console.log(data);
        return data;
      })
      .catch((error) => console.log(error));
  };
}
export default ApiService;
