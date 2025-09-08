// Centralized image asset management
import PrimaryClarifier from '../assets/images/operationsflow/Primary_Clarifier.jpg';
import SecondaryClarifier from '../assets/images/operationsflow/Secondary_Clarifier.jpg';
import SecondaryClarifier2 from '../assets/images/operationsflow/Secondary_Clarifier_2.jpg';
import TertiaryAndUVTreatment from '../assets/images/operationsflow/Tertiary_and_UV_treatment.jpg';
import TertiaryAndUVTreatment2 from '../assets/images/operationsflow/Tertiary_and_UV_treatment_2.jpg';
import Digestor from '../assets/images/operationsflow/Digestor.jpg';
import OxidationDitch from '../assets/images/operationsflow/Oxidation_ditch.jpg';
import PreliminaryTreatment from '../assets/images/operationsflow/Preliminary_Treatment.jpg';
import GravityBeltThickener from '../assets/images/operationsflow/Gravity_Belt_Thickener.jpg';
import LandApplication from '../assets/images/operationsflow/Land_Application.jpg';
import BeltPress from '../assets/images/operationsflow/Belt_Press.jpg';
import RawInfluent from '../assets/images/operationsflow/Raw_Influent.jpg';
import Effluent from '../assets/images/operationsflow/Effluent.jpg';
import JP_About from '../assets/images/pagebg/JP_About.jpeg';
// import Tracie from '../../public/images/staff/Tracie.jpg';
// import Rebecca from '../assets/images/staff/Rebecca.jpg';


export const imageAssets = {
  // Hero images
  hero: {
    home: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    about: JP_About,
    careers: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    staff: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  },

  // Staff photos (professional placeholders)
  staff: {
    ceo: 'https://www.chicagotribune.com/wp-content/uploads/2024/02/PTB-L-PTG-STATE-CITY-0215-CT0134240115.jpg?w=1080',
    Karl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    Candice: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    Becki: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    Tracie: '/images/Tracie.jpg',
    mayor: '/images/Mayor.jpg',
    Rebecca: '/images/Rebecca.jpg',
  },

  // Service/feature images
  services: {
    waterTreatment: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    environmental: 'https://images.unsplash.com/photo-1569163139394-de4e5f43e4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    engineering: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },

  // Backgrounds and patterns
  backgrounds: {
    waterPattern: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    laboratory: "/images/About_Us_Lab.jpg",
    office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  },

  // Placeholders
  placeholders: {
    avatar: 'https://via.placeholder.com/400x400/1976d2/ffffff?text=Staff',
    hero: 'https://via.placeholder.com/1920x1080/1976d2/ffffff?text=John+P.+Williams+Plant',
    card: 'https://www.waterandwastewater.com/wp-content/uploads/2024/01/Circular-Primary-Clarifier-in-Wastewater.jpg',
    card2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0tPj60g_p_YZf6ooIIfSei-8jwHlYUdwMQ&shttps://wehco.media.clients.ellingtoncms.com/img/photos/2017/11/12/HS-wastewater4_11-7_t600.jpg?4326734cdb8e39baa3579048ef63ad7b451e7676'
  },

  operationsflow: {
    primaryClarifier: PrimaryClarifier,
    secondaryClarifier: SecondaryClarifier,
    secondaryClarifier2: SecondaryClarifier2,
    tertiaryAndUvTreatment: TertiaryAndUVTreatment,
    tertiaryAndUvTreatment2: TertiaryAndUVTreatment2,
    digestor: Digestor,
    oxidationDitch: OxidationDitch,
    preliminaryTreatment: PreliminaryTreatment,
    gravityBeltThickener: GravityBeltThickener,
    landApplication: LandApplication,
    beltPress: BeltPress,
    rawInfluent: RawInfluent,
    effluent: Effluent,
  },
};

// Helper function to get image with fallback
export const getImageSrc = (category, name, fallback = null) => {
  try {
    return imageAssets[category]?.[name] || fallback || imageAssets.placeholders.card;
  } catch {
    return imageAssets.placeholders.card;
  }
}; 