// Centralized image asset management
export const imageAssets = {
  // Hero images
  hero: {
    home: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    about: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    careers: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    staff: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  },

  // Staff photos (professional placeholders)
  staff: {
    ceo: 'https://www.chicagotribune.com/wp-content/uploads/2024/02/PTB-L-PTG-STATE-CITY-0215-CT0134240115.jpg?w=1080',
    Tracie: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    Karl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    Candice: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    Becki: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
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
    laboratory: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  },

  // Placeholders
  placeholders: {
    avatar: 'https://via.placeholder.com/400x400/1976d2/ffffff?text=Staff',
    hero: 'https://via.placeholder.com/1920x1080/1976d2/ffffff?text=John+P.+Williams+Plant',
    card: 'https://via.placeholder.com/800x600/1976d2/ffffff?text=Image',
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