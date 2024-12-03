import Image from 'next/image'
import Link from 'next/link'
// import style from './home.module.css'
// import { SiNextdotjs } from "react-icons/si";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-100">
        <Image
          src="/sekolah.jpg"
          alt="Hero Image"
          className="object-cover w-full h-full"
          width={1920}
          height={1080}
        />
        <div className="absolute  flex items-center justify-center flex-col">
            <img src="vercel.svg" alt="" style={{width: 300}}/>
          <h1 className="text-6xl text-white font-bold">
            Welcome to my website
          </h1>
          <button className="mt-4 px-6 py-2 rounded-md transition ease-in-out delay-150 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600 duration-300">
            Daftar
          </button>
        </div>
      </div>
      <div className='w-4/5 m-4 bg-white shadow-md absolute top-1000px items-center align-middle'>
        
      </div>

      <div className="relative h-full w-full flex justify-center items-center bg-gray-50">
        {/* Main container */}
        <div className="absolute h-auto w-11/12 max-w-6xl flex flex-col bg-white p-8 rounded-xl shadow-md">
          {/* Header Section */}
          

          {/* Information Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col items-center bg-blue-100 p-4 rounded-lg shadow-md">
              <span className="text-xl font-semibold text-blue-600">Jumlah Murid</span>
              <span className="text-2xl font-bold text-gray-800">500</span>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center bg-green-100 p-4 rounded-lg shadow-md">
              <span className="text-xl font-semibold text-green-600">Jumlah Alumni</span>
              <span className="text-2xl font-bold text-gray-800">1200</span>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center bg-yellow-100 p-4 rounded-lg shadow-md">
              <span className="text-xl font-semibold text-yellow-600">Guru & Staff</span>
              <span className="text-2xl font-bold text-gray-800">50</span>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center bg-red-100 p-4 rounded-lg shadow-md">
              <span className="text-xl font-semibold text-red-600">Prestasi</span>
              <span className="text-2xl font-bold text-gray-800">30+</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-12 mt-12 text-justify" >
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, delectus, laudantium esse fugiat exercitationem repellat fuga, consequatur omnis aut eaque sapiente maxime consectetur. Beatae illum ipsam sint eum quod omnis amet! Ex culpa excepturi nisi. Fuga voluptate, numquam voluptatibus similique cumque possimus eos magnam soluta nam harum officia obcaecati quaerat. Explicabo fugiat praesentium esse ab molestiae sint assumenda dolorem nulla illo, atque reprehenderit placeat, minima natus magni tempora numquam. Libero dolores, ab laudantium numquam totam commodi asperiores, animi ratione non id quia veniam nemo sunt fugiat iusto laborum neque doloribus distinctio labore. Fugit atque sapiente nobis maiores inventore. Cupiditate, soluta.
        </p>
      </div>
      
      
    </div>
  )
}
