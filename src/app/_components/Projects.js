import Image from "next/image"
import Button from "./Button"


export default function Projects() {
    const cards = [
   
  {
      name: "Hospitality Analytics Project",
      techs:["Power BI", "DAX", "Power Query", "MySQL", "Microsoft Excel","csv dataset"],
    
      description:
        "A hospitality analytics dashboard with revenue, occupancy, booking, and cancellation insights — built using Power BI, SQL, and Excel.",
      codeLink: "https://github.com/umamkh/Hospitality-analytics-project-",
    },
{
      name: "Pizza Booking App",
      techs: ["React.js", "Tailwind CSS", "Supabase"],
      description:
        "A React + Redux pizza ordering app with cart management and order tracking, migrated from a REST API to a Supabase backend for persistent, relational data storage.",
      codeLink: "https://github.com/Salman-0090/react-pizza-app",
    },]
    return( 
    <section id="projects" className="mt-50">
       <h2 className="text-3xl font-bold text-center mb-5 text-blue-600">
    Projects
  </h2>
        <div className="flex gap-8 flex-wrap justify-center mt-20">
          {cards.map((card)=> {
            
            return (
            
            <div key={card.name} className="max-w-[300px] max-h-[800px] rounded-md overflow-hidden bg-blue-100 shadow-xl/30 cursor-pointer transition-all duration-300 hover:translate-y-2 hover:shadow-2xl pb-6 pt-4">
                  
                 
              
                <div className="flex flex-wrap gap-2 mt-3 px-3">
                    {card.techs.map((tech)=> {
                      return  <span key={tech} className="text-xs text-stone-200 px-2 py-1 bg-stone-600 rounded-md">{tech}</span>
                    })}
                </div>
                <div className="mt-10 ml-4 text-lg font-semibold"> 
                    {card.name}
                </div>
                <div className="text-sm ml-4 mr-4 mt-4 text-stone-700"> 
                    {card.description}
                </div>
                <div className="mt-auto flex gap-3 pt-4 flex-wrap"> 
                <Button variant="primary" className="ml-3"><a target="blank" href={card.liveLink}>View Project</a></Button>
                <Button variant="stone" className="ml-3"><a target="blank" href={card.codeLink}>Source Code</a></Button>
                </div>
            </div>
                )
          })}
        </div>
    </section>
    )
} 