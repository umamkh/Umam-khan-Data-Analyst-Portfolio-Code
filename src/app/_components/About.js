import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="mt-50 mb-20 ">
            <h1 className="text-blue-600 text-center text-2xl mb-20">About Me</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center place-items-center gap-10 sm:gap-5">
                <div className="w-40 h-40 rounded-full overflow-hidden mt-10 border-4 border-blue-600"> 
                <Image src="/umam.webp" alt="profile image" width={160} height={160} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                    <h2 className="font-bold text-xl mb-5">Hi, I'm Umam Khan</h2>
                    <p className="text-stone-700">
                       <span className="block mb-5"> Aspiring Data Analyst with 6+ months of internship experience across two data analytics projects. Skilled in SQL, Microsoft Excel, Power BI, Tableau, Python, data visualization, data cleaning, and business reporting. Aspiring Data Analyst with 6+ months of internship experience across two data analytics projects. Skilled in SQL, Microsoft Excel, Power BI, Tableau, Python, data visualization, data cleaning, and business reporting.</span>
                       <span>
Certified in Data Analytics and NASSCOM Certified in Data Analysis. Currently pursuing a Bachelor's degree and eager to contribute analytical expertise, problem-solving abilities, and business intelligence skills to a dynamic organization.</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 items-center text-stone-700">
                        <p className="px-3 py-2 bg-stone-600 text-stone-200 rounded-md">2 Projects Shipped</p>
                            <p className="px-3 py-2 bg-stone-600 text-stone-200 rounded-md">Open to internships</p>
                    </div>
                </div>
            </div>
        </section>
    )
}