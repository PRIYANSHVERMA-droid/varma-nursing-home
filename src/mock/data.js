// Mock data for Varma Nursing Home

export const doctorInfo = {
  name: "Dr. Atul Verma",
  namehindi: "डा० अतुल वर्मा",
  qualification: "M.D. (Medicine)",
  qualificationHindi: "एम.डी. (मेडिसिन)",
  designation: "Physician / फिजिशियन",
  regNo: "MCI 22821",
  // Path to doctor's image placed in the public folder (add doctor.png there)
  image: "/doctor.png",
  phone: "9456265918",
  whatsapp: "919456265918", // with country code for WhatsApp
};

export const hospitalInfo = {
  name: "VARMA NURSING HOME",
  address: "Near D.A.V. College, Arya Samaj Road, Muzaffarnagar – 251001 (U.P.)",
  googleMapsLink: "https://share.google/h8RldxFiU6u8k4wvE",
  workingHours: {
    morning: "11:00 AM - 2:00 PM",
    evening: "5:00 PM - 7:00 PM",
    days: "Monday - Saturday",
    off: "Sunday"
  }
};

export const specialties = [
  {
    id: 1,
    name: "Chest Diseases",
    nameHindi: "छाती रोग",
    icon: "Stethoscope"
  },
  {
    id: 2,
    name: "Heart Diseases",
    nameHindi: "हृदय रोग",
    icon: "Heart"
  },
  {
    id: 3,
    name: "T.B.",
    nameHindi: "टी.बी.",
    icon: "Activity"
  },
  {
    id: 4,
    name: "High Blood Pressure",
    nameHindi: "उच्च रक्तचाप",
    icon: "Gauge"
  },
  {
    id: 5,
    name: "Diabetes",
    nameHindi: "मधुमेह",
    icon: "Droplet"
  },
  {
    id: 6,
    name: "Stomach Disorders",
    nameHindi: "पेट रोग",
    icon: "Pill"
  }
];

export const experience = [
  {
    id: 1,
    hospital: "Safdarjung Hospital, New Delhi",
    hospitalHindi: "सफदरजंग हॉस्पिटल, नई दिल्ली",
    position: "Former Physician"
  },
  {
    id: 2,
    hospital: "Deen Dayal Upadhyay Hospital, New Delhi",
    hospitalHindi: "दीन दयाल उपाध्याय हॉस्पिटल, नई दिल्ली",
    position: "Former Physician"
  }
];
