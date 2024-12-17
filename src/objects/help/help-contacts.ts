export interface HelpContactProps {
  title: string;
  description: string;
  detail?: { label: string; contacts: string[]; extra?: string }[];
  extra?: string;
  telephone_number?: string[];
  email?: string;
  phone_number?: string[];
  social?: string;
  trunkline?: string;
}

export const help_contacts: HelpContactProps[] = [
  {
    title: "Philippine Mental Health Association, Inc.",
    description:
      "Offers call and chat services from 7 a.m. to 4 p.m., Mondays to Fridays. Inquiries via email and text are accepted outside these times.",
    telephone_number: ["(02) 8921-4958", "(02) 8921-4959"],
    extra: "Chat is available 8 a.m. to 5 p.m., Monday to Saturday.",
    email: "pmhacds@gmail.com",
    phone_number: ["0917-565-2036"],
    social: "Facebook PMHA Official",
  },
  {
    title: "Manila Lifeline Centre",
    description:
      "Tele-counseling hotline focusing on suicide prevention, awareness, and support.",
    telephone_number: ["Landline: (02) 896-9191"],
    phone_number: ["Globe: 0917-854-9191"],
  },
  {
    title: "Philippine Psychiatric Association (PPA)",
    description:
      "Located at Ortigas Center, Pasig City. Offers a list of certified psychiatrists.",
    telephone_number: ["(02) 635-9858"],
    email: "philpsych.org@gmail.com",
    extra:
      "Find certified psychiatrists: philippinepsychiatricassociation.org/psychiatrist/",
  },
  {
    title: "Amang Rodriguez Memorial Medical Center",
    description:
      "Located at Juan Sumulong Highway, Marikina. Provides basic consulting and brief psychotherapeutic techniques.",
    telephone_number: ["(02) 8948-0595", "8941-0342"],
    extra:
      "Consulting Hours: 8 a.m. – 5 p.m. (Monday to Friday, excluding non-working holidays). Registration Cut-off: AM Sessions – 8 to 10 AM.",
  },
  {
    title: "National Center for Mental Health (NCMH)",
    description:
      "Government mental health facility located at Nueve de Febrero, Mandaluyong, Kalakhang Maynila.",
    detail: [
      {
        label: "Outpatient Adult Services",
        contacts: [
          "0999-396-3418",
          "8531-9001 loc 1200",
          "ncmheconsultation@gmail.com",
        ],
        extra: "Online registration: bit.ly/ncmhkonsulta",
      },
      {
        label: "Outpatient Child and Adolescent Services",
        contacts: ["8531-9001 loc 383", "ncmhchildops@gmail.com"],
      },
      {
        label: "Crisis Hotlines",
        contacts: [
          "1553 (nationwide and toll-free landline)",
          "0966-351-4518 (Globe/TM)",
          "0917-899-8727 (Globe/TM)",
          "0908-639-2672 (Smart/Sun/TNT)",
        ],
      },
    ],
    trunkline: "(02) 8531-9001 for general services",
  },
];
