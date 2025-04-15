import Image from "next/image";
import Link from "next/link";

const services = {
  leica: {
    image: "/images/leica.jpg",
    title: "Web Leica Store",
    description: "Proyek ini berfokus pada perancangan dan pengembangan sebuah situs web e-commerce untuk Leica Store, yang bertujuan memfasilitasi penjualan produk secara daring dengan sistem yang modern dan terintegrasi. Website ini dilengkapi dengan fitur katalog produk yang responsif, sistem keranjang belanja yang dinamis, dan proses checkout yang aman dan efisien. Seluruh pengembangan dilakukan dengan mempertimbangkan kenyamanan pengguna (user experience) serta performa sistem untuk mendukung kebutuhan bisnis digital di era modern.",
  },
  ui: {
    image: "/images/ui.jpg",
    title: "Desain UI/UX",
    description: "Layanan ini mencakup proses desain antarmuka pengguna (UI) dan pengalaman pengguna (UX) yang bertujuan untuk menciptakan produk digital yang intuitif, estetis, dan mudah digunakan. Pendekatan yang digunakan melibatkan tahapan riset pengguna, penyusunan wireframe, pembuatan prototipe interaktif, serta evaluasi usability. Desain dibuat menggunakan tools profesional seperti Figma dan Adobe XD, dengan mempertimbangkan prinsip-prinsip desain seperti konsistensi visual, hierarki informasi, dan aksesibilitas.",
  },
  cv: {
    image: "/images/Cv.jpg",
    title: "CV Project",
    description: "CV Project merupakan pengembangan portofolio digital interaktif dalam bentuk situs web pribadi yang menampilkan profil profesional secara menyeluruh. Proyek ini mencakup penyusunan informasi personal, riwayat pendidikan, pengalaman kerja, keterampilan teknis, serta dokumentasi proyek-proyek yang pernah dikerjakan. Situs dirancang responsif dan user-friendly, memungkinkan pengunjung untuk mengakses informasi secara mudah dan cepat, baik melalui desktop maupun perangkat mobile. Tujuan dari proyek ini adalah memberikan representasi digital yang kuat dan profesional sebagai identitas diri di dunia kerja maupun akademik.",
  },
};


export default function PortfolioDetail({ params }) {
  const service = services[params.id];

  if (!service) {
    return <div className="p-8">Layanan tidak ditemukan.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-[var(--primary-color)]">
        {service.title}
      </h1>
      <div className="mb-6">
        <Image
          src={service.image}
          alt={service.title}
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="text-lg text-gray-700 mb-8">{service.description}</p>

      {/* Tombol Kembali */}
      <Link
        href="/Services"
        className="inline-block bg-[var(--primary-color)] text-white px-6 py-2 rounded-full shadow hover:bg-opacity-90 transition"
      >
        ← Kembali
      </Link>
    </div>
  );
}
