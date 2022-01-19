class StorageService {
  getAuthorizationData() {
    return JSON.parse(localStorage.getItem("authorization"));
  }
  setAuthorizationData({ data }) {
    localStorage.setItem("authorization", JSON.stringify(data));
  }

  getMessagesData() {
    return JSON.parse(localStorage.getItem("my-messages"));
  }
  setMessagesData(data) {
    localStorage.setItem("my-messages", JSON.stringify(data));
  }
}
export default StorageService;
