import Image from "next/image";
import Button from "./Button";

export default function Hero() {
    return (
        <section id="home" className="mt-10 sm:mt-20 sm:flex sm:flex-row sm:items-center sm:justify-around sm:gap-4 flex flex-col items-center justify-center">
            <div>
            <h1 className="text-3xl text-stone-700 mb-10 mt-20">
               <span className="mr-2">Hi, I'm</span>
               <span className="text-blue-600">Umam khan</span> <br />
               <span>Data Analyst & Business Analyst</span>
            </h1>
            <p className="mt-10 text-stone-500">
                <span className="sm:block">Data analyst transforming raw data into actionable insights

</span>
        <span>through analytics, dashboards, and business intelligence.</span>
               
            </p>
            <div className="flex mt-4">
            <a href="#projects" className="px-3 py-1 cursor-pointer self-center mt-6 bg-blue-500 text-indigo-50 hover:bg-blue-600 rounded-md mr-2 text-sm sm:text-base">View Projects</a>
            <a href="/UMAM KHAN_Data_Analyst_CV.pdf" download="UMAM KHAN_Data_Analyst_CV.pdf">
  <Button variant="stone">Download CV</Button>
</a>
            </div>
            </div>
            
            <div className="w-40 h-40 rounded-full overflow-hidden mt-10 border-4 border-white "> 
                <Image src="/Umam.webp" alt="profile image" width={160} height={160} className="w-full h-full object-cover" />
            </div>
        </section>
    )
}