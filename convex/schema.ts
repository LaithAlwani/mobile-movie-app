import { defineSchema, defineTable } from "convex/server";

import { v } from "convex/values";

export default defineSchema({
  metrics: defineTable({
    searchTerm: v.string(),
    count: v.optional(v.number()),
    poster_url: v.string(),
    movie_id: v.string(),
    title: v.string(),
  }).index("by_search_term", ["searchTerm"]),
});
