import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Paintings() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const paintingItems = [
    {
      name: "Sohrai Painting",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Sohrai_painting.jpg",
      desc: "Traditional Sohrai wall art with natural colors and tribal motifs.",
      price: "₹800",
    },
    {
      name: "Khovar Painting",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Khovar_painting.jpg",
      desc: "Khovar marriage mural painting, symbolizing fertility and prosperity.",
      price: "₹950",
    },
    {
      name: "Tribal Folk Art",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tribal_folk_art.jpg",
      desc: "Colorful folk art depicting tribal life and nature.",
      price: "₹600",
    },
    {
      name: "Warli Painting",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Warli_painting.jpg",
      desc: "Warli tribal painting with geometric patterns and scenes.",
      price: "₹700",
    },
    {
      name: "Handmade Canvas",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Handmade_canvas.jpg",
      desc: "Hand-painted canvas with Jharkhand tribal themes.",
      price: "₹1,200",
    },
    {
      name: "Tribal Mask Art",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tribal_mask_art.jpg",
      desc: "Artistic mask painting inspired by tribal rituals.",
      price: "₹500",
    },
    {
      name: "Nature Motif Painting",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nature_motif_painting.jpg",
      desc: "Painting featuring flora and fauna of Jharkhand.",
      price: "₹650",
    },
    {
      name: "Festival Wall Art",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Festival_wall_art.jpg",
      desc: "Wall art celebrating tribal festivals and dances.",
      price: "₹900",
    },
    {
      name: "Tribal Village Scene",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Tribal_village_scene.jpg",
      desc: "Painting depicting daily life in a tribal village.",
      price: "₹850",
    },
    {
      name: "Peacock Motif",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Peacock_motif_painting.jpg",
      desc: "Vibrant peacock motif, a popular theme in tribal art.",
      price: "₹750",
    },
    {
      name: "Harvest Festival Art",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Harvest_festival_painting.jpg",
      desc: "Art celebrating the harvest festival with tribal dancers.",
      price: "₹980",
    },
    {
      name: "Elephant Procession",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Elephant_procession_painting.jpg",
      desc: "Painting of a festive elephant procession in Jharkhand.",
      price: "₹1,100",
    },
  ];
  const filteredItems = paintingItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="py-10 px-2 md:px-8 bg-white">
      {/* 🔙 Back Button */}
       <div className="flex flex-col md:flex-row items-center gap-3 mb-6 flex-wrap">
    {/* Back Button */}
    <button
      onClick={() => navigate(-1)}
      className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      ← Back
    </button>

    {/* Search Bar */}
    <input
      type="text"
      placeholder="Search Paintings and Arts..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition shadow-sm min-w-[200px]"
    />

    {/* Wishlist Button */}
    <button
      onClick={() => navigate("/wishlist")}
      className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      Wishlist
    </button>

    {/* Cart Button */}
    <button
      onClick={() => navigate("/cart")}
      className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      Cart
    </button>

    {/* Orders Button */}
    <button
      onClick={() => navigate("/orders")}
      className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      Your Orders
    </button>
      </div>

      {/* 🔹 Page Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
        Paintings and Arts
      </h2>

      {/* 🔹 Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-md border hover:shadow-xl transition bg-white flex flex-col animate-fade-in-up"
              style={{
                minWidth: 0,
                animationDelay: `${i * 100}ms`,
                animationDuration: "600ms",
                animationFillMode: "both",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-32 w-full object-cover scale-100 hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2 md:p-3 flex-1 flex flex-col">
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  {item.name}
                </h3>
                <p className="text-green-700 font-bold text-sm mb-1">
                  {item.price}
                </p>
                <p className="text-gray-700 text-xs md:text-sm mb-2 flex-1">
                  {item.desc}
                </p>
                <button className="bg-green-600 text-white text-xs md:text-sm px-2 py-1 rounded hover:bg-green-700 transition self-start">
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 mt-8">
            No items found for "{searchQuery}"
          </p>
        )}
      </div>

      {/* 🔹 Animation styles */}
      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(-20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.6s;
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation-name: fade-in-up;
          }
        `}
      </style>
    </div>
  );
}
