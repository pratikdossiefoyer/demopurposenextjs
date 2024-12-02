import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-2xl bg-white rounded-2xl shadow-xl p-8 m-4 transform hover:scale-105 transition-transform duration-300">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src="/api/placeholder/128/128"
              alt="Welcome"
              className="rounded-full shadow-lg"
              width={128}
              height={128}
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Welcome, Vaishnavi!
          </h1>

          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />

          <p className="text-xl text-gray-700 text-center leading-relaxed">
            You have successfully deployed your code from latest git ! 🎉
          </p>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:opacity-90 transition-opacity">
              View Project
            </button>
            <button className="px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors">
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
