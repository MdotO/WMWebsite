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

  departments: {
    admin: {
      name: "Administration",
      description: "Strategic leadership and corporate governance",
      icon: "Business",
      head: {
        name: "Tracie Marshall",
        title: "Director",
        image: imageAssets.placeholders.avatar,
        message: "Our administration team provides strategic leadership and ensures that John P. Williams Plant maintains the highest standards of corporate governance, financial management, and stakeholder relations. We are committed to transparency, ethical business practices, and sustainable growth that benefits all our stakeholders.",
        email: "TMarshall@portage-in.com"
      },
      staff: [
        {
          id: 1,
          name: "Karl Nelson",
          title: "Plant Operations Coordinator",
          image: imageAssets.placeholders.avatar,
          message: "Ensuring seamless project execution and maintaining our high standards of service delivery.",
          email: "knelson@portage-in.com"
        },
        {
          id: 2,
          name: "Rebecca Gaines",
          title: "Lab Supervisor",
          image: imageAssets.placeholders.avatar,
          message: "Developing innovative solutions through cutting-edge research in water treatment technologies.",
          email: "Bgaines@portage-in.com"
        },
        {
          id: 3,
          name: "Candice Walton",
          title: "Administrative Assistant",
          image: imageAssets.placeholders.avatar,
          message: "Keeping our operations in full compliance with environmental regulations and best practices.",
          email: "cwalton@portage-in.com"
        }
      ]
    },
    it: {
      name: "Information Technology",
      description: "Digital innovation and system infrastructure",
      icon: "Computer",
      head: {
        name: "Dr. Robert Thompson",
        title: "Chief Technology Officer",
        image: imageAssets.staff.robert,
        message: "Our IT team drives digital transformation and technological innovation across all aspects of our water management solutions. We leverage cutting-edge technologies to create intelligent, data-driven systems that optimize efficiency and provide real-time insights for better decision-making.",
        email: "r.thompson@portage-in.com"
      },
      staff: [
        {
          id: 4,
          name: "Dr. Lisa Wang",
          title: "Senior Software Engineer",
          image: imageAssets.staff.lisa,
          message: "Developing innovative software solutions for water treatment monitoring and control systems.",
          email: "l.wang@portage-in.com"
        },
        {
          id: 5,
          name: "Alex Rodriguez",
          title: "Data Scientist",
          image: imageAssets.placeholders.avatar,
          message: "Analyzing complex data sets to optimize water treatment processes and predict maintenance needs.",
          email: "a.rodriguez@portage-in.com"
        },
        {
          id: 6,
          name: "Sarah Kim",
          title: "Systems Architect",
          image: imageAssets.placeholders.avatar,
          message: "Designing scalable infrastructure solutions for our water management platforms.",
          email: "s.kim@portage-in.com"
        }
      ]
    },
    operations: {
      name: "Operations",
      description: "Field operations and project management",
      icon: "Engineering",
      head: {
        name: "David Wilson",
        title: "Director of Operations",
        image: imageAssets.placeholders.avatar,
        message: "Our operations team is the backbone of John P. Williams Plant, managing field operations, project execution, and client relationships. We ensure that every project is delivered on time, within budget, and to the highest quality standards while maintaining our commitment to environmental safety.",
        email: "d.wilson@portage-in.com"
      },
      staff: [
        {
          id: 7,
          name: "Maria Garcia",
          title: "Senior Project Manager",
          image: imageAssets.placeholders.avatar,
          message: "Leading complex water infrastructure projects from conception to completion.",
          email: "m.garcia@portage-in.com"
        },
        {
          id: 8,
          name: "James Brown",
          title: "Field Operations Manager",
          image: imageAssets.placeholders.avatar,
          message: "Overseeing on-site operations and ensuring safety compliance across all field activities.",
          email: "j.brown@portage-in.com"
        },
        {
          id: 9,
          name: "Emily Davis",
          title: "Quality Assurance Specialist",
          image: imageAssets.placeholders.avatar,
          message: "Maintaining the highest quality standards for all our water treatment processes.",
          email: "e.davis@portage-in.com"
        }
      ]
    }
  },

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