import AuthGate from "../components/AuthGate"; // ঠিক পাথ


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">PHIQUENCE</h1>
        <p className="text-gray-300 mb-8">
          True balance. Real growth. (placeholder hero)
        </p>

        <AuthGate />
      </div>
    </main>
  );
}
