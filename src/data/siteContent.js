import { imageAssets } from './imageAssets';

export const siteContent = {
  company: {
    name: "John P. Williams Plant",
    tagline: "Leading Waste Water Management Excellence",
    contact: {
      email: "pusp@portage-in.com",
      phone: "+1 (219) 162-1301",
      address: "5500 Old Porter Road, Portage, IN 46368"
    }
  },
  
  home: {
    hero: {
      title: "Sustainable Water Management for a Better Tomorrow",
      subtitle: "Innovative solutions for water waste reduction and environmental protection",
      backgroundImage: imageAssets.hero.home
    },
    ceoMessage: {
      name: "Austin Bonta",
      title: "Mayor",
      message: "At John P. Williams Plant, we are committed to creating innovative and sustainable water management solutions that protect our environment while meeting the needs of our communities.",
      image: imageAssets.staff.ceo
    }
  },

  aboutUs: {
    title: "About John P. Williams Plant",
    description: "Founded in 1972, John P.Williams Plant has been at the forefront of water waste management innovation. We specialize in developing cutting-edge technologies and sustainable practices that help communities and businesses reduce their water footprint while maintaining operational efficiency. Our team of experts combines years of experience with the latest environmental science to deliver solutions that make a real difference.",
    mission: "To provide innovative, sustainable water waste management solutions that protect our environment and support community growth.",
    vision: "A world where every drop of water is valued, managed, and preserved for future generations.",
    backgroundImage: imageAssets.hero.about
  },

  staff: [
    {
      id: 1,
      name: "Tracie Marshall",
      title: "Director",
      image: "", // Blank for now – safe fallback
      message: "Leading our research and development initiatives to create next-generation water treatment technologies.",
      email: "TMarshall@portage-in.com",
      department: "Executive"
    },
    {
      id: 2,
      name: "Karl Nelson",
      title: "Plant Operations Coordinator",
      image: "", // Blank for now – safe fallback
      message: "Ensuring seamless project execution and maintaining our high standards of service delivery.",
      email: "knelson@portage-in.com",
      department: "Operations"
    },
    {
      id: 3,
      name: "Rebecca Gaines",
      title: "Lab Supervisor",
      image: "", // Blank for now – safe fallback
      message: "Developing innovative solutions through cutting-edge research in water treatment technologies.",
      email: "Bgaines@portage-in.com",
      department: "Lab"
    },
    {
      id: 4,
       name: "Candice Walton",
      title: "Administrative Assistant",
      image: "", // Blank for now – safe fallback
      message: "Keeping our operations in full compliance with environmental regulations and best practices.",
      email: "cwalton@portage-in.com",
      department: "Administration"
    }
  ],

  careers: [
    {
      id: 1,
      title: "Shift Operator",
      department: "Operations",
      location: "5500 Old Porter Road, IN",
      type: "Full-time",
      description: "Responsible for monitoring, operating, and maintaining wastewater treatment systems to ensure safe and efficient plant performance.",
      requirements: [
        "Must hold or be able to obtain a Class I Wastewater Operator License within one year",
        "Prior experience in plant operations or utility systems is preferred",
        "Should understand basic treatment processes, equipment, and safety protocols",
        "Able to monitor systems, take samples, and address routine issues efficiently",
        "Basic computer skills required for logging data and reporting"
      ]
    }
  ]

};