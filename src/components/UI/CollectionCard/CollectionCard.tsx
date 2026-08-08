import { motion } from "framer-motion";

type CollectionCardProps = {
  image: string;
  title: string;
  description: string;
  buttonText: string;
};

function CollectionCard({
  image,
  title,
  description,
  buttonText,
}: CollectionCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        bg-stone-50
        shadow-sm
        transition
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div className="h-96 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-110
          "
        />

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-semibold text-neutral-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>

        <button
          className="
            mt-6
            font-medium
            text-yellow-700
            transition
            hover:text-yellow-800
          "
        >
          {buttonText}
        </button>

      </div>

    </motion.div>
  );
}

export default CollectionCard;