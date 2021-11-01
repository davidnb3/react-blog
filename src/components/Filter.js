import { useState } from "react";
import "./components.css";

export default function Filter({
  searchInput,
  setSearchInput,
  setTopicFilter,
}) {
  return (
    <div className="filter-container">
      <select
        className="form-element"
        id="topic"
        name="topic"
        onChange={(e) => setTopicFilter(e.target.value)}
      >
        <option value="">Choose topic</option>
        <option value="guide">Guide</option>
        <option value="music">Music</option>
        <option value="recipes">Recipes</option>
        <option value="development">Development</option>
      </select>
      <input
        type="search"
        value={searchInput}
        className="form-element"
        placeholder="Search title or author..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}
