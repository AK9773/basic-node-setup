import ApiResponse from "../utils/ApiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";

const hello = asyncHandler((req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Hello World", "user"));
});

export { hello };
