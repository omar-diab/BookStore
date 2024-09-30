import "./authors.css";

import { authors } from "../../data/authors";
import { useState } from "react";

const Authors = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="authors">
      <div className="authors-search-wrapper">
        <input
          type="search"
          placeholder="Search authors..."
          className="authors-search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="authors-wrapper">
        {authors
          .filter((a) => a.name.toLowerCase().startsWith(search))
          .map((author) => (
            <div key={author.id} className="author">
              <img
                src={author.image}
                alt={author.name}
                className="author-img"
              />
              <h2 className="author-name">{author.name}</h2>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Authors;
