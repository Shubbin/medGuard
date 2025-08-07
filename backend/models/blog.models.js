import mongoose from "mongoose";

// const AuthorSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   role: { type: String, required: true },
//   href: { type: String, default: "#" },
//   imageUrl: { type: String, required: true },
// });

const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
});

const PostSchema = new mongoose.Schema(
  {
    blogImg: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    category: { type: CategorySchema, required: true },
    // author: { type: AuthorSchema, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", PostSchema);
