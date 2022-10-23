import { useState } from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { AnimatePresence, motion } from "framer-motion";

import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";

const Rewiews: NextPage = ({
  cards,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const resumeDescription = (description: string) => {
    if (description.length > 100) {
      return description.substring(0, 50) + "...";
    }

    return description;
  };

  const renderScore = (score: number) => {
    const fullStars = Math.floor(score);
    const halfStar = score - fullStars >= 0.5 ? 1 : 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push("★");
    }

    for (let i = 0; i < halfStar; i++) {
      stars.push("½");
    }

    return stars.join("");
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center p-3">
        <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 lg:grid-cols-2">
          {cards.map((card: Rewiews) => (
            <motion.div
              key={card.id}
              className="w-96 bg-gray-800 rounded-lg shadow-xl p-4 cursor-pointer"
              layoutId={card.id}
              onClick={() => setSelectedId(card.id)}
            >
              <div className="flex flex-row gap-5 border-b border-gray-700 pb-3">
                <div className="w-20 h-full">
                  <motion.img
                    src={card.image}
                    alt={card.name}
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div>
                  <div className="flex flex-row gap-2 items-center">
                    <motion.img
                      src="https://i.pinimg.com/564x/9c/01/c7/9c01c7483c6fc7c6522a8a0291a34264.jpg"
                      alt="avatar"
                      className="rounded-full w-7 h-7"
                    />
                    <motion.h2 className="text-slate-400 font-bold text-sm">
                      {card.author}
                    </motion.h2>
                  </div>
                  <motion.h2 className="text-white font-bold text-2xl">
                    {card.name}
                  </motion.h2>
                  <motion.h3 className="text-white font-bold text-sm">
                    {card.date + " - " + card.city}
                  </motion.h3>
                  <div className="flex flex-row gap-1 items-center text-yellow-500">
                    {renderScore(card.score)}
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <motion.h3 className="text-slate-400 mt-3 text-sm">
                  {resumeDescription(card.description)}
                </motion.h3>
              </div>
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedId && (
              <motion.div
                className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50"
                onClick={() => setSelectedId(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="w-1/2 bg-gray-800 rounded-lg shadow-xl  grid grid-cols-2 gap-4"
                  layoutId={selectedId}
                >
                  <div>
                    <motion.img
                      src={
                        cards.find((card: Rewiews) => card.id === selectedId)
                          ?.image
                      }
                      alt="card"
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex flex-row gap-2 items-center mb-5">
                      <motion.img
                        src="https://i.pinimg.com/564x/9c/01/c7/9c01c7483c6fc7c6522a8a0291a34264.jpg"
                        alt="avatar"
                        className="rounded-full w-7 h-7"
                      />
                      <motion.h2 className="text-slate-400 font-bold text-sm">
                        review by{" "}
                        {
                          cards.find((card: Rewiews) => card.id === selectedId)
                            ?.author
                        }
                      </motion.h2>
                    </div>

                    <motion.h2 className="text-white font-bold text-2xl">
                      {
                        cards.find((card: Rewiews) => card.id === selectedId)
                          ?.name
                      }
                    </motion.h2>
                    <motion.h3 className="text-white font-bold text-lg">
                      {cards.find((card: Rewiews) => card.id === selectedId)
                        ?.date +
                        " - " +
                        cards.find((card: Rewiews) => card.id === selectedId)
                          ?.city}
                    </motion.h3>
                    <div className="flex flex-row gap-1 items-center text-yellow-500">
                      {renderScore(
                        cards.find((card: Rewiews) => card.id === selectedId)
                          ?.score
                      )}
                    </div>
                    <motion.h3 className="text-slate-400 mt-3 text-sm">
                      {
                        cards.find((card: Rewiews) => card.id === selectedId)
                          ?.description
                      }
                    </motion.h3>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/reviews");
  const cards: Rewiews = await response.json();

  return {
    props: {
      cards,
    },
  };
};

export default Rewiews;
