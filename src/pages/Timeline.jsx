import { motion } from "framer-motion";

const data = [
  {
    title: "Our First Time Meeting",
    image: "/img/1.png",
  },
  {
    title: "First Time Spending the Night Watching Your Livestream",
    image: "/img/2.png",
  },
  {
    title: "First Time Revealing My Voice",
    image: "/img/3.png",
  },
  {
    title: "Our First Music Jamming Together",
    image: "/img/4.png",
  },
  {
    title: "Remember That Your Haircut is My Recommendation?",
    image: "/img/5.png",
  },
  {
    title: "Our First Valentine Together (as a friend okay, Giulia please don't come at me)",
    image: "/img/6.png",
  },
  {
    title: "And Remember, I Won't Leave",
    image: "/img/7.png",
  },
  {
    title: "A Letter For You",
    text: "Happy birthday, Gio <3 I'm so grateful that I met you, that we ran into each other through the discord server. I'm so grateful for everything. Thank you so much for being such a nice friend to me. In this 22 of yours, I hope life will treat you lovely. I know last year been very hard for you, so thank you for being here still. Please hang in there, because I always know that there's gonna be a day where you're gonna live your life happily and freely. Just remember that you're not alone and I'm here. You can tell me everything. I hope you know how great you are for making it into 22, and I hope you'll make it as long as you should be. Please don't give up. What matters is that you're still standing here. I'm so sorry I couldn't give you much, but I write this from the deepest of my heart. I'm so proud of you. I hope your birthday gonna be amazing. You deserve all the good things that exist in this world. Always remember that you're worthy, and that I'm here. I always here. And again, I'm so proud of you. Happy birthday. I know, and I believe, that this year gonna be great for you."
  }
];

export default function Timeline() {
  return (
    <div className="bg-butter min-h-screen py-12 px-6 flex flex-col items-center">
      <audio autoPlay loop className="hidden">
        <source src="/audio/ribs.mp3" type="audio/mpeg" />
      </audio>

      <div className="w-full max-w-xl relative">
        <h4 className="text-xl text-center text-olive md:text-4xl font-bold mt-20 mb-20">
          Sneak Peek of Our Journey
        </h4>

        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-12 relative"
          >
            <div className="bg-white shadow-md border-4 border-bluegray rounded-xl p-6 w-full text-center z-10">
              <h2 className="text-xl font-bold mb-2 text-olive">{item.title}</h2>
              {item.image && (
                <img src={item.image} alt={item.title} className="rounded-lg mx-auto" />
              )}
              {item.text && (
                <p className="text-gray-700 mt-4 whitespace-pre-line">{item.text}</p>
              )}
            </div>
            {idx !== data.length - 1 && (
              <div className="w-2 h-20 bg-olive absolute top-full left-1/2 transform -translate-x-1/2"></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
