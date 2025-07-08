import { motion } from "framer-motion";

export default function Landing({ onClickStart }) {
  return (
  <motion.div
  nitial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="h-screen flex flex-col justify-center items-center bg-butter text-olive px-6 text-center">
    <div className="h-screen flex flex-col justify-center items-center bg-butter text-olive px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        A Little Story <br></br> We Made Together
      </h1>
      <button
        onClick={onClickStart}
        className="bg-pumpkin text-white px-6 py-3 rounded-full text-lg hover:bg-gold transition"
      >
        LET'S TAKE A LOOK AT OUR JOURNEY
      </button>
    </div>
    </motion.div>
  );
}
