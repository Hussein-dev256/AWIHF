export type StoryData = {
  slug: string;
  title: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
};

export const storiesData: StoryData[] = [
  {
    slug: 'safe-motherhood-patiko',
    title: 'Hope & Safe Delivery in Patiko Sub-County',
    category: 'Maternal Health',
    image: '/images/AWIHF-Patiko.webp',
    author: 'AWIHF Outreach Team',
    date: 'July 15, 2025',
    readTime: '3 min read',
    excerpt: 'How AWIHF maternal outreach and referral coordination helped a young mother access safe prenatal support and delivery care during the Patiko Medical Outreach.',
    content: [
      "In July 2025, during our landmark four-day Patiko Medical Outreach in Gulu District, our team met Evelyn, a 17-year-old expectant mother from a remote sub-county. Evelyn had not accessed any previous antenatal checkups due to Northern Uganda's severe shortage of rural health centers, leaving her vulnerable to high-risk complications.",
      "Our clinical nurse, Grace Akello, immediately recognized signs of early, high-risk labor during registration. The team quickly stabilized her and activated our maternal referral pathway, securing transport to Gulu Regional Referral Hospital. Thanks to this swift integration, Evelyn safely delivered a healthy baby boy.",
      "Following her clinical care, our peer networks provided maternity dignity packages, basic infant supplies, and parental classes. Today, Evelyn is an active advocate in our peer-to-peer teen mother support group, educating other young women to access reproductive health clinics early. Her story is a testament to the life-saving impact of community-rooted maternal networks.",
    ],
  },
  {
    slug: 'healing-trauma-gulu',
    title: 'Rebuilding Mental Wellbeing & Safe Community Spaces',
    category: 'Mental Health',
    image: '/images/AWIHF-MentalHealth1.webp',
    author: 'Psychosocial Support Team',
    date: 'October 10, 2025',
    readTime: '4 min read',
    excerpt: 'A community story showing how AWIHF mental health and psychosocial support creates safe spaces for healing in Gulu and Northern Uganda.',
    content: [
      'Across Northern Uganda, many women and girls experience heavy emotional burdens, distress, and trauma while facing significant stigma and limited access to mental health services. In Pece, Gulu City, our team launched weekly psychosocial healing circles to break the silence surrounding mental distress.',
      'Amina, a young woman navigating overwhelming anxiety and isolation, attended one of our community healing circles. In this safe, non-judgmental space, she connected with peer facilitators and participants who shared lived experiences and practical coping mechanisms.',
      'Through sustained group support and trauma-informed psychosocial sessions, Amina developed resilient coping skills and rebuilt her self-worth. Today, she participates actively in a local artisan cooperative, demonstrating the restorative power of accessible, dignified community care.',
    ],
  },
  {
    slug: 'dignity-hygiene-education',
    title: 'Dignity in Education: Empowering Schoolgirls',
    category: 'Health Education',
    image: '/images/AWIHF-SchoolOutreach4.webp',
    author: 'Education Coordinator',
    date: 'September 8, 2025',
    readTime: '3 min read',
    excerpt: 'How AWIHF school outreach supports menstrual hygiene education, reusable pads, and SRHR peer education for adolescent girls.',
    content: [
      "Adolescent girls in Northern Uganda's rural schools often miss vital classroom days each month due to a lack of proper sanitary supplies and persistent menstrual health stigma. We launched our Community Health Education initiatives to restore dignity and safeguard girls' educational continuity.",
      'Florence, a 14-year-old student, struggled to attend classes consistently during her menstrual cycles, affecting her academic progress. Our outreach team equipped her school with hygiene resources and provided durable, reusable sanitary pads designed to support school retention throughout the academic year.',
      "Along with hygiene supplies, Florence took part in our Sexual and Reproductive Health and Rights (SRHR) workshops. Trained as a student peer educator, Florence now leads her school's health club, guiding her peers with accurate information and fostering supportive environments.",
    ],
  },
  {
    slug: 'abwoch-medical-outreach-2026',
    title: 'Integrated Frontline Care at Abwoch Health Center III',
    category: 'Community Outreach',
    image: '/images/AWIHF-Abwoch.webp',
    author: 'AWIHF Clinical Team',
    date: 'July 3, 2026',
    readTime: '3 min read',
    excerpt: 'A story from AWIHF community outreach at Abwoch Health Center III, bringing integrated primary healthcare and screening closer to rural families.',
    content: [
      'On 3 July 2026, our medical outreach at Abwoch Health Center III brought integrated primary healthcare and diagnostic screening directly to rural families in Gulu District who face steep travel barriers to clinical facilities.',
      'The outreach created a comprehensive frontline health touchpoint: offering general medical consultations, reproductive health services, HIV screening and counseling, breast cancer screening, sickle cell screening, and cervical cancer awareness.',
      'By combining preventive health education with direct screening and clinical referral pathways, the Abwoch outreach exemplified our commitment to meeting communities where they are and ensuring dignity across all stages of care.',
    ],
  },
  {
    slug: 'national-mentorship-launch',
    title: 'Building the Next Generation of Healthcare Leaders',
    category: 'Mentorship & Systems',
    image: '/images/AWIHF-Mentorship1.webp',
    author: 'Mentorship Operations Desk',
    date: 'November 5, 2025',
    readTime: '4 min read',
    excerpt: 'How AWIHF mentorship connects healthcare students with clinical mentors to strengthen women-led health leadership across Uganda.',
    content: [
      'To build sustainable, resilient health systems in Northern Uganda, we launched a national mentorship pipeline connecting medical and nursing students nationwide with seasoned clinical and public health leaders.',
      'Through structured clinical mentorship, leadership development workshops, and peer learning cohorts, more than 50 healthcare student professionals have been equipped with practical skills and community-anchored principles.',
      'This program empowers emerging women healthcare professionals to innovate, lead clinical care delivery, and strengthen local public health infrastructure for years to come.',
    ],
  },
  {
    slug: 'cervical-cancer-regional-initiative',
    title: 'Extending Cervical Cancer Screening & Diagnosis Literacy',
    category: 'Preventive Care',
    image: '/images/AWIHF-Maternal2.webp',
    author: 'Health Committee',
    date: 'September 25, 2025',
    readTime: '3 min read',
    excerpt: 'How AWIHF cervical cancer awareness and screening literacy helps rural women understand early detection and access timely care.',
    content: [
      'Cervical cancer is one of the leading yet preventable health burdens among women in Northern Uganda, where limited diagnostic facilities and lack of awareness often delay life-saving care.',
      'In response, our regional initiative rolled out extensive public screening campaigns and diagnostic literacy workshops across rural sub-counties, educating women on early symptoms, risk factors, and the vital importance of routine screening.',
      'We collaborated closely with local health centers to establish accessible screening pathways, ensuring that informed community members can access timely screening, clinical evaluation, and follow-up care.',
    ],
  },
];

export function getStories() {
  return storiesData;
}

export function getStory(slug: string) {
  return storiesData.find((story) => story.slug === slug);
}
