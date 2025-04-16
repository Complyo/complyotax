
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 p-4">
      <header className="mb-8 text-center">
        <Image src="/logo.png" alt="Complyo Logo" width={80} height={80} className="mx-auto mb-2" />
        <h1 className="text-3xl font-bold">Complyo</h1>
        <p className="text-gray-600">Ottimizza le tue tasse. Scegli il paese giusto.</p>
      </header>
      <section className="text-center">
        <p className="mb-6 text-lg">
          Scopri quanto puoi risparmiare con la nostra simulazione fiscale.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Prenota una consulenza fiscale
        </a>
      </section>
    </main>
  );
}
