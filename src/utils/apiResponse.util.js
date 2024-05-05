class ApiResponse {
  constructor(statusCode, data, message, type) {
    this.statusCode = statusCode;
    this.message = message;
    this.success = statusCode < 400;
    switch (type) {
      case "user":
        this.user = data;
        break;
      case "users":
        this.users = data;
        break;
      default:
        this.data = data;
        break;
    }
  }
}

export default ApiResponse;
