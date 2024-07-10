import connectDB from "../../../config/DB";
import User from "../../../models/user.model.js";

export const POST = async (request) => {
  const bodyData = await request.json();
  await connectDB();
  const user = await User.create(bodyData);
  return Response.json({
    success: true,
    user,
  });
};
