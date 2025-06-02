import { imageAssets } from './imageAssets';

export const siteContent = {
  company: {
    name: "John P. Williams Plant",
    tagline: "Leading Water Waste Management Excellence",
    contact: {
      email: "info@jpwilliams.com",
      phone: "+1 (555) 123-4567",
      address: "123 Water Street, Clean City, CC 12345"
    }
  },
  
  home: {
    hero: {
      title: "Sustainable Water Management for a Better Tomorrow",
      subtitle: "Innovative solutions for water waste reduction and environmental protection",
      backgroundImage: imageAssets.hero.home
    },
    ceoMessage: {
      name: "John P. Williams",
      title: "Chief Executive Officer",
      message: "At John P. Williams Plant, we are committed to creating innovative and sustainable water management solutions that protect our environment while meeting the needs of our communities.",
      image: imageAssets.staff.ceo
    }
  },

  aboutUs: {
    title: "About John P. Williams Plant",
    description: "Founded in 20XX, John P.Williams Plant has been at the forefront of water waste management innovation. We specialize in developing cutting-edge technologies and sustainable practices that help communities and businesses reduce their water footprint while maintaining operational efficiency. Our team of experts combines years of experience with the latest environmental science to deliver solutions that make a real difference.",
    mission: "To provide innovative, sustainable water waste management solutions that protect our environment and support community growth.",
    vision: "A world where every drop of water is valued, managed, and preserved for future generations.",
    backgroundImage: imageAssets.hero.about
  },

  staff: [
    {
      id: 1,
      name: "Dr. Michael Chen",
      title: "Chief Technology Officer",
      image: imageAssets.staff.michael,
      message: "Leading our research and development initiatives to create next-generation water treatment technologies.",
      email: "m.chen@ajpwilliams.com",
      department: "Technology"
    },
    {
      id: 2,
      name: "Jennifer Martinez",
      title: "Operations Director",
      image: imageAssets.staff.jennifer,
      message: "Ensuring seamless project execution and maintaining our high standards of service delivery.",
      email: "j.martinez@jpwilliams.com",
      department: "Operations"
    },
    {
      id: 3,
      name: "Robert Thompson",
      title: "Environmental Compliance Manager",
      image: imageAssets.staff.robert,
      message: "Keeping our operations in full compliance with environmental regulations and best practices.",
      email: "r.thompson@jpwilliams.com",
      department: "Compliance"
    },
    {
      id: 4,
      name: "Dr. Lisa Wang",
      title: "Research Scientist",
      image: imageAssets.staff.lisa,
      message: "Developing innovative solutions through cutting-edge research in water treatment technologies.",
      email: "l.wang@jpwilliams.com",
      department: "Research"
    }
  ],

  careers: [
    {
      id: 1,
      title: "Senior Water Treatment Engineer",
      department: "Engineering",
      location: "Clean City, CC",
      type: "Full-time",
      description: "Lead the design and implementation of advanced water treatment systems. Requires 5+ years experience in water treatment engineering and environmental compliance.",
      requirements: [
        "Bachelor's degree in Environmental or Chemical Engineering",
        "5+ years of water treatment experience",
        "Professional Engineer license preferred",
        "Strong project management skills"
      ]
    },
    {
      id: 2,
      title: "Environmental Compliance Specialist",
      department: "Compliance",
      location: "Clean City, CC",
      type: "Full-time", 
      description: "Ensure all operations meet environmental regulations and standards. Monitor compliance across multiple projects and facilities.",
      requirements: [
        "Bachelor's degree in Environmental Science or related field",
        "3+ years regulatory compliance experience",
        "Knowledge of EPA regulations",
        "Excellent analytical and communication skills"
      ]
    },
    {
      id: 3,
      title: "Project Manager - Water Infrastructure",
      department: "Operations",
      location: "Clean City, CC",
      type: "Full-time",
      description: "Manage large-scale water infrastructure projects from conception to completion. Coordinate with engineering teams, contractors, and stakeholders.",
      requirements: [
        "Bachelor's degree in Engineering or Project Management",
        "PMP certification preferred",
        "5+ years project management experience",
        "Experience with water/wastewater projects"
      ]
    },
    {
      id: 4,
      title: "Research Associate - Water Technology",
      department: "Research & Development",
      location: "Clean City, CC",
      type: "Full-time",
      description: "Support research initiatives in developing new water treatment technologies. Conduct laboratory tests and analyze data.",
      requirements: [
        "Master's degree in Chemistry, Environmental Science, or related field",
        "2+ years laboratory experience",
        "Strong analytical and problem-solving skills",
        "Experience with water quality testing"
      ]
    }
  ]
}; 