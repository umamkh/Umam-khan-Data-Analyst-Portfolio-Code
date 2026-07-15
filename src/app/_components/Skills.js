import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { IoBarChartOutline } from "react-icons/io5";
import { RiSupabaseLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { CiLock } from "react-icons/ci";
import { IoIosGitMerge } from "react-icons/io";
import { RiVercelLine } from "react-icons/ri";

export default function Skills() {
    return (
        <section id="skills" className="mb-20 mt-50 text-stone-700">
            <h1 className="text-3xl mt-20 mb-10 text-center text-blue-600">Skills</h1>
            <h3 className="mb-5 text-xl">Data Analyst</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-5">
               <div>
                <p className="flex items-center gap-2 px-7 py-3 bg-white rounded-md text-s shadow-xl">
                    <span className="text-blue-600 text-lg"><FaReact /></span>
                    <span className="text-stone-700">MS Excel</span>
                </p>
               </div>

               <div>
                <p className="flex items-center gap-2 px-7 py-3 bg-white rounded-md text-s shadow-xl">
                    <span className="text-blue-600 text-xl"><SiNextdotjs /></span>
                    <span className="text-stone-700">MySQL</span>
                </p>
               </div>
                 <div> 
                <p className="flex items-center gap-2 px-7 py-3 bg-white  rounded-md text-s shadow-xl">
                    <span className="text-blue-600 text-xl"><RiTailwindCssLine /></span>
                    <span className="text-stone-700">Tableau</span>
                </p>
               </div>

                 <div> 
                <p className="flex items-center gap-2 px-7 py-3 bg-white  rounded-md text-s shadow-xl">
                    <span className="text-blue-600 text-xl"><IoBarChartOutline /></span>
                    <span className="text-stone-700">Power BI</span>
                </p>
               </div>

<div> 
                <p className="flex items-center gap-2 px-7 py-3 bg-white  rounded-md text-s shadow-xl">
                    <span className="text-blue-600 text-xl"><IoBarChartOutline /></span>
                    <span className="text-stone-700">Python</span>
                </p>
               </div>

<div> 
                <p className="flex items-center gap-2 px-7 py-3 bg-white  rounded-md text-s shadow-xl">
                    <span className="text-blue-600 text-xl"><IoBarChartOutline /></span>
                    <span className="text-stone-700">Statistics</span>
                </p>
               </div>


<div> 
                <p className="flex items-center gap-2 px-7 py-3 bg-white  rounded-md text-s shadow-xl">
                    <span className="text-blue-600 text-xl"><IoBarChartOutline /></span>
                    <span className="text-stone-700">R</span>
                </p>
               </div>



            </div>
            <h3 className="mb-5 text-xl mt-15">Backend & data</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-5">
               <div>
                <p className="flex items-center gap-2 px-7 py-3 bg-white  rounded-md text-s shadow-xl">
                    <span className="text-blue-600 text-lg"><RiSupabaseLine /></span>
                    <span className="text-stone-700">Supabase</span>
                </p>
               </div>
                <div>
                <p className="flex items-center gap-2 px-7 py-3 bg-white  rounded-md text-s shadow-xl">
                    <span className="text-blue-600 text-lg"><SiRedux />
</span>
                    <span className="text-stone-700">Redux toolkit</span>
                </p>
               </div>
                <div>
                <p className="flex items-center gap-2 px-7 py-3 bg-white  rounded-md text-s shadow-xl">
                    <span className="text-blue-600 text-lg"><CiLock />

</span>
                    <span className="text-stone-700">Next Auth</span>
                </p>
               </div>
               </div>
                  <h3 className="mb-5 text-xl mt-15">Tools</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-5">
               <div>
                <p className="flex items-center gap-2 px-7 py-3 bg-white  rounded-md text-s shadow-xl">
                    <span className="text-blue-600 text-lg"><IoIosGitMerge />
</span>
                    <span className="text-stone-700">Git & Github</span>
                </p>
               </div>
                 <div>
                <p className="flex items-center gap-2 px-5 py-3 bg-white  rounded-md text-s shadow-xl">
                    <span className="text-blue-600 text-lg"><RiVercelLine />

</span> 
                    <span className="text-stone-700">vercel</span>
                </p>
               </div>
               </div>
        </section>
    )
}