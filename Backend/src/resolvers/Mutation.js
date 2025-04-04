export const Mutation = {
  // Create a new data (POST)
  create: async ({ model, input }) => {
    try {
      const newItem = new model(input);
      await newItem.save();
      return {
        status: "success",
        message: "Data created successfully",
        item: newItem,
      };
    } catch (error) {
      return {
        status: "error",
        message: error.message,
      };
    }
  },

  // Update an existing data (UPDATE)
  update: async ({ model, id, input }) => {
    try {
      const updatedItem = await model.findByIdAndUpdate(id, input, {
        new: true, // Return the updated document
      });
      if (!updatedItem) {
        return {
          status: "error",
          message: "Data not found",
        };
      }
      return {
        status: "success",
        message: "Data updated successfully",
        item: updatedItem,
      };
    } catch (error) {
      return {
        status: "error",
        message: error.message,
      };
    }
  },

  // Delete a single data (DELETE)
  delete: async ({ model, id }) => {
    try {
      const deletedData = await model.findByIdAndDelete(id);
      if (!deletedData) {
        return {
          status: "error",
          message: "Data not found",
        };
      }
      return {
        status: "success",
        message: "data deleted successfully",
        item: deletedData,
      };
    } catch (error) {
      return {
        status: "error",
        message: error.message,
      };
    }
  },

  // Delete multiple data (MULTI-DELETE)
  deleteMany: async ({ model, filter }) => {
    try {
      const result = await model.deleteMany(filter);
      return {
        status: "success",
        message: `${result.deletedCount} items deleted successfully`,
      };
    } catch (error) {
      return {
        status: "error",
        message: error.message,
      };
    }
  }
};