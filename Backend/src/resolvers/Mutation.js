export const Mutation = {
  // Create a new data (POST)
  create: async (_, { model, input }) => {
    try {
      const newItem = new model(input);
      await newItem.save();
      return {
        status: "success",
        message: "Item created successfully",
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
  update: async (_, { model, id, input }) => {
    try {
      const updatedItem = await model.findByIdAndUpdate(id, input, {
        new: true, // Return the updated document
      });
      if (!updatedItem) {
        return {
          status: "error",
          message: "Item not found",
        };
      }
      return {
        status: "success",
        message: "Item updated successfully",
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
  delete: async (_, { model, id }) => {
    try {
      const deletedItem = await model.findByIdAndDelete(id);
      if (!deletedItem) {
        return {
          status: "error",
          message: "Item not found",
        };
      }
      return {
        status: "success",
        message: "Item deleted successfully",
        item: deletedItem,
      };
    } catch (error) {
      return {
        status: "error",
        message: error.message,
      };
    }
  },

  // Delete multiple data (MULTI-DELETE)
  deleteMany: async (_, { model, filter }) => {
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