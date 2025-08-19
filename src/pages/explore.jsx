import { Bookmark, BookOpen } from "lucide-react";

function Explore() {
  // Dummy books (replace later with API or DB data)
  const books = [
    { title: "Atomic Habits", author: "James Clear", cover: "https://picsum.photos/200/300?random=1" },
    { title: "The Alchemist", author: "Paulo Coelho", cover: "https://picsum.photos/200/300?random=2" },
    { title: "Sapiens", author: "Yuval Noah Harari", cover: "https://picsum.photos/200/300?random=3" },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", cover: "https://picsum.photos/200/300?random=4" },
    { title: "The Lean Startup", author: "Eric Ries", cover: "https://picsum.photos/200/300?random=5" },
    { title: "Ikigai", author: "Héctor García", cover: "https://picsum.photos/200/300?random=6" },
    { title: "Deep Work", author: "Cal Newport", cover: "https://picsum.photos/200/300?random=7" },
    { title: "Think & Grow Rich", author: "Napoleon Hill", cover: "https://picsum.photos/200/300?random=8" },
  ];

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <h2 className="text-3xl font-bold text-[#1c2412] mb-8 text-center">
        Explore Books
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.map((book, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            {/* Book cover */}
            <img
              src={book.cover}
              alt={book.title}
              className="h-48 w-full object-cover"
            />

            {/* Book details */}
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-lg font-bold text-gray-800 truncate">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{book.author}</p>

              {/* Actions */}
              <div className="flex justify-between gap-2">
                <button className="flex items-center gap-1 bg-[#1c2412] text-white px-3 py-1.5 rounded-lg hover:bg-[#2a3520] transition">
                  <BookOpen size={16} /> Read
                </button>
                <button className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1.5 rounded-lg hover:bg-yellow-600 transition">
                  <Bookmark size={16} /> Save
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
