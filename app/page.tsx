import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
      <main className="bg-black  transition-all rounded-3xl p-6 shadow-lg max-w-[70%] w-auto 
                       flex md:flex-row flex-col items-center md:items-stretch"> 

        <main className="static transition-all -translate-x-8 w-32 h-32 md:w-32 md:h-48 rounded-full md:rounded-lg overflow-hidden  flex-shrink-0 mb-4 md:mb-0"> 
          <Image 
            src="/profile.jpg "
            alt="iamge" 
            layout="fill" 
            objectFit="cover" 
            className="transition-all duration-800 ease-in-out rounded-lg absolute " 
          />
        </main>


        <main className="flex flex-col items-start w-full text-left space-y-4 px-4"> 
          <h1 className="text-2xl font-bold text-white">Jess Wilson</h1>
          <h2 className="text-lg text-gray-400">UX Engineer</h2>
          <p className="text-sm text-gray-400">
            Empowering users through captivating interfaces,<br />
            turning ideas into pixel-perfect realities.
          </p>
          <main className="flex justify-center space-x-4"> 
            <button className="px-4 py-2 bg-transparent border border-white text-white rounded-full hover:bg-gray-800">Profile</button> 
            <button className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-300">Follow</button> 
          </main>
        </main>
      </main>
    </main>
  );
}
