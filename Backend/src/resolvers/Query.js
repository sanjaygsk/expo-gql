export const Query = {
    // Fetch all items with optional pagination
    getAll: async (_, { model, limit, offset }) => {
      const query = model.find();
      if (limit) query.limit(limit);
      if (offset) query.skip(offset);
      return query.exec();
    },
  
    // Fetch a single item by ID
    getById: async (_, { model, id }) => {
      return model.findById(id);
    },
  
    // Search items based on a query string
    search: async (_, { model, searchField, query, limit, offset }) => {
      const searchQuery = {};
      if (query) {
        searchQuery[searchField] = { $regex: query, $options: "i" }; // Case-insensitive search
      }
      const dbQuery = model.find(searchQuery);
      if (limit) dbQuery.limit(limit);
      if (offset) dbQuery.skip(offset);
      return dbQuery.exec();
    },

    // Fetch items with sorting
    getSorted: async (_, { model, sortField, sortOrder = "asc", limit, offset }) => {
        const sortQuery = {};
        sortQuery[sortField] = sortOrder === "asc" ? 1 : -1; // Ascending or descending
        const query = model.find().sort(sortQuery);
        if (limit) query.limit(limit);
        if (offset) query.skip(offset);
        return query.exec();
    },

     // Count the total number of documents
    count: async (_, { model, filter }) => {
        const query = filter || {}; // Optional filter for counting specific documents
        return model.countDocuments(query);
    },
  };