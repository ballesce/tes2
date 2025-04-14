"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: "leica",
    image: "/images/leica.jpg",
    title: "Web Leica Store",
    description:
      "Website toko online untuk Leica dengan fitur katalog, keranjang, dan checkout.",
  },
  {
    id: "ui",
    image: "/images/ui.jpg",
    title: "Desain UI/UX",
    description:
      "Desain antarmuka dan pengalaman pengguna yang modern dan responsif.",
  },
  {
    id: "cv",
    image: "/images/Cv.jpg",
    title: "CV Project",
    description:
      "CV digital interaktif yang menampilkan profil dan portofolio profesional.",
  },
];


const timelineVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      type: "spring",
      stiffness: 50,
    },
  }),
};

const ServicesTimeline = () => {
  return (
    <section id="layanan" className="py-20 bg-[var(--background-color)]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--primary-color)]">
          Layanan
        </h2>

        <div className="relative border-l-4 border-[var(--primary-color)] ml-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="mb-12 ml-6 group"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={timelineVariants}
            >
              <Link href={`/portofolio/${service.id}`}>
                <div className="flex items-start space-x-4 cursor-pointer">
                  <div className="w-20 h-20 overflow-hidden rounded-xl shadow-md border-2 border-white flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-[var(--text-color)]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTimeline;
