import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]); // State is lowercase bookmarks

  const handleAddToBookmarks = (blog) => {
    // Prevent duplicate bookmarks
    if (!bookmarks.some((b) => b.id === blog.id)) {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    }
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <main className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmarks={handleAddToBookmarks} />
        <Bookmarks bookmarks={bookmarks} /> {/* Pass bookmarks correctly */}
      </main>
    </>
  );
}

export default App;
