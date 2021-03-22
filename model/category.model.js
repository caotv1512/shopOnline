const mongoose= require('mongoose');
const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            max: 32,
          }
    }
)
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;