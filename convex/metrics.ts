import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const updateSearchCount = mutation({
  args: {
    searchTerm: v.string(),
    movie: v.object({
      id: v.union(v.string(), v.number()),
      title: v.string(),
      poster_path: v.optional(v.string()),
    }),
  },

  handler: async (ctx, { searchTerm, movie }) => {
    const existing = await ctx.db
      .query("metrics")
      .withIndex("by_search_term", (q) => q.eq("searchTerm", searchTerm))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        count: (existing.count ?? 0) + 1,
      });
    } else {
      await ctx.db.insert("metrics", {
        searchTerm,
        count: 1,
        movie_id: String(movie.id),
        title: movie.title,
        poster_url: movie.poster_path ?? "",
      });
    }
  },
});
