import Image from "next/image"
import Button from "./Button"


export default function Projects() {
    const cards = [
   
  {
      name: "Hospitality Analytics Project",
      techs:["Microsoft Excel", "Power Query", "Power BI", "DAX", "MySQL", "Tableau", "csv dataset"],
      image: "/Power BI Hospitality Dashboard.jpeg",
      description:
        "A hospitality analytics dashboard with revenue, occupancy, booking, and cancellation insights.",
      codeLink: "https://github.com/umamkh/Hospitality-analytics-project-",
    },
{
      name: "Bank Loan Analytics Project",
      techs: ["Microsoft Excel", "Power Query", "Power BI", "DAX", "MySQL", "Tableau", "csv dataset"],
      image: "/Excel Bank Loan Dashboard.jpeg",
      description:
        "An interactive bank loan analytics dashboard with loan trends, payment performance, customer verification, and lending insights.",
      codeLink: "https://github.com/umamkh/Bank-loan-analytics-project",
    },]
    return( 
    <section id="projects" className="mt-50">
       <h2 className="text-3xl font-bold text-center mb-5 text-blue-600">
    Projects
  </h2>
        <div className="flex gap-8 flex-wrap justify-center mt-20 ">
          {cards.map((card)=> {
            
            return (
            
            <div key={card.name} className="max-w-[350px] max-h-[800px] rounded-md overflow-hidden bg-blue-100 shadow-xl/30 cursor-pointer transition-all duration-300 hover:translate-y-2 hover:shadow-2xl pb-6 pt-4">
                  
                 <Image src={card.image} alt={card.name} width={300} height={400} key={card.name}  className="block object-contain w-full h-48"/>
              
                <div className="flex flex-wrap gap-2 mt-3 px-3">
                    {card.techs.map((tech)=> {
                      return  <span key={tech} className="text-xs text-stone-200 px-2 py-1 bg-stone-600 rounded-md">{tech}</span>
                    })}
                </div>
                <div className="mt-10 ml-4 text-lg text-stone-800 font-semibold"> 
                    {card.name}
                </div>
                <div className="text-sm ml-4 mr-4 mt-4 text-stone-700"> 
                    {card.description}
                </div>
                
                <div className="flex justify-center mt-6">
                <Button variant="primary" className="ml-3"><a target="blank" href={card.codeLink}>View Project</a></Button>
                </div>
            </div>
                )
          })}
        </div>
    </section>
    )
} 