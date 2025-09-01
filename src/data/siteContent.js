import { imageAssets } from './imageAssets';

export const siteContent = {
  company: {
    name: "John P. Williams Plant",
    tagline: "Leading Waste Water Management Excellence",
    contact: {
      email: "cwalton@portage-in.com",
      phone: "219 762-1301",
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
      image: imageAssets.staff.mayor
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
        title: "General Superintendant",
        image: imageAssets.staff.Tracie,
        message: "Our administration team provides strategic leadership and ensures that John P. Williams Plant maintains the highest standards of corporate governance, financial management, and stakeholder relations. We are committed to transparency, ethical business practices, and sustainable growth that benefits all our stakeholders.",
        email: "TMarshall@portage-in.com"
      },
      staff: [
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
    laboratory: {
      name: "Laboratory Services",
      description: "Monitoring, testing, and process assurance",
      icon: "Microscope",
      head: {
        name: "Rebecca Gaines",
        title: "Lab Supervisor",
        image: imageAssets.staff.Rebecca,
        message: "Our lab team ensures the integrity of water treatment through advanced analysis monitoring and verification processes delivering reliable data that supports operational excellence and regulatory compliance.",
        email: "r.thompson@portage-in.com"
      },
      staff: [
        {
          id: 4,
          name: "Mike Mcbride",
          title: "Lead Laboratory Analyst",
          image: imageAssets.staff.lisa,
          message: "Precision, consistency, and accountability guide every test we run. Our job is to ensure that the water leaving this plant meets the highest safety and environmental standards.",
          email: "l.wang@portage-in.com"
        },
        {
          id: 5,
          name: "Randy McDonald",
          title: "Lead Laboratory Analyst",
          image: imageAssets.placeholders.avatar,
          message: "Supporting our laboratory operations by assisting with sample analysis, maintaining equipment, and ensuring our testing processes meet quality standards.",
          email: "a.rodriguez@portage-in.com"
        },
      ]
    },
    operations: {
      name: "Operations and Maintainence",
      description: "Field operations and project management",
      icon: "Engineering",
      head: {
        name: "Karl Nelson",
        title: "Plant Operations Manager",
        image: imageAssets.placeholders.avatar,
        message: "Our operations team is the backbone of John P. Williams Plant, managing field operations, project execution, and client relationships. We ensure that every project is delivered on time, within budget, and to the highest quality standards while maintaining our commitment to environmental safety.",
        email: "d.wilson@portage-in.com"
      },
      staff: [
        {
          id: 7,
          name: "Daniel Smith",
          title: "Senior Operations Manager",
          image: imageAssets.placeholders.avatar,
          message: "Leading complex water infrastructure projects from conception to completion.",
          email: "m.garcia@portage-in.com"
        },
        {
          id: 8,
          name: "Steve Rebeck",
          title: "Maintainence Lead",
          image: imageAssets.placeholders.avatar,
          message: "Overseeing on-site operations and ensuring safety compliance across all field activities.",
          email: "j.brown@portage-in.com"
        },
        {
          id: 9,
          name: "Garry Martin",
          title: "Maintainence Technician",
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