import React, { useState } from "react";

const poem = [
  {
    left: "My tactic is to look at you",
    right: "Моя тактика — дивитися на тебе",
  },
  {
    left: "To learn who you are",
    right: "Вивчати, яка ти є",
  },
  {
    left: "To like you as you are",
    right: "Захоплюватися тобою – такою, якою ти є",
  },
  {
    left: "My tactic is to talk to you",
    right: "Моя тактика — говорити з тобою",
  },
  {
    left: "And listen to you",
    right: "І слухати тебе",
  },
  {
    left: "To build with words an indestructible bridge",
    right: "Будувати словами незламний міст",
  },
  {
    left: "My tactic is to stay in your memory",
    right: "Моя тактика — залишитися у твоїй пам’яті",
  },
  {
    left: "I don’t know how nor with what excuse",
    right: "Не знаю як і під яким приводом",
  },
  {
    left: "But to stay within you",
    right: "Але залишитися в тобі",
  },
  {
    left: "My tactic is to be honest",
    right: "Моя тактика — бути відвертим",
  },
  {
    left: "And know that you are honest",
    right: "І знати, що ти відверта",
  },
  {
    left: "And that we don’t trade illusions",
    right: "І щоб ми не продавали одне одному ілюзій",
  },
  {
    left: "So that between us there is no curtain nor abysses",
    right: "Аби між нами не було завіси чи прірв",
  },
  {
    left: "My strategy is, on the other hand, deeper and simpler",
    right: "Моя стратегія — натомість глибша й простiша",
  },
  {
    left: "My strategy is that one day, any day",
    right: "Моя стратегія — щоб одного дня, будь-якого дня",
  },
  {
    left: "I don’t know how nor with what excuse",
    right: "Не знаю як і під яким приводом",
  },
  {
    left: "You will finally need me",
    right: "Ти нарешті потребувала мене",
  },
];

export default function PoemCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < poem.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const reloadCarousel = () => {
    setIndex(0);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl transition-opacity duration-700 ease-in-out opacity-100">
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center text-center text-lg md:text-2xl font-medium text-gray-700">
          {poem[index].left}
        </div>
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center text-center text-lg md:text-2xl font-medium text-gray-700">
          {poem[index].right}
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={prevSlide}
          disabled={index === 0}
          className={`px-4 py-2 rounded-xl transition ${
            index === 0
              ? "bg-gray-300 text-gray-600"
              : "bg-indigo-500 text-white hover:bg-indigo-600"
          }`}
        >
          ⬅️ Previous
        </button>

        {index < poem.length - 1 ? (
          <button
            onClick={nextSlide}
            className="px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition"
          >
            ➡️ Next
          </button>
        ) : (
          <button
            onClick={reloadCarousel}
            className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
          >
            🔄 Reload
          </button>
        )}
      </div>
    </div>
  );
}
