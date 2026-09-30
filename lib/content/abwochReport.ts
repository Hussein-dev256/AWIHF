export type ServiceDistribution = {
  service: string;
  count: number;
  percentage: string;
};

export type DiagnosisStat = {
  condition: string;
  count: number;
  percentage: string;
};

export type SickleCellStat = {
  status: string;
  genotype: string;
  count: number;
  percentage: string;
};

export type CervicalCancerAgeStat = {
  ageGroup: string;
  count: number;
  percentage: string;
};

export type FamilyPlanningAgeStat = {
  ageGroup: string;
  count: number;
  percentage: string;
};

export type PartnerContribution = {
  name: string;
  role: string;
  contribution: string;
};

export type LessonLearned = {
  title: string;
  description: string;
};

export type NextPriority = {
  number: number;
  title: string;
  description: string;
};

export type AbwochReportData = {
  slug: string;
  title: string;
  subtitle: string;
  theme: string;
  date: string;
  location: string;
  downloadUrl: string;
  keyMetrics: {
    value: string;
    label: string;
    detail: string;
  }[];
  executiveSummary: string[];
  serviceDistribution: ServiceDistribution[];
  diagnoses: DiagnosisStat[];
  sickleCellStats: SickleCellStat[];
  hivStats: {
    reached: number;
    tested: number;
    negative: number;
    negativePercentage: string;
    positive: number;
    positivePercentage: string;
    prepInitiated: number;
    counselingOnly: number;
  };
  cervicalCancerStats: {
    totalScreened: number;
    referred: number;
    referredPercentage: string;
    ageDistribution: CervicalCancerAgeStat[];
  };
  familyPlanningStats: {
    totalSupported: number;
    ageDistribution: FamilyPlanningAgeStat[];
    methodDistribution: {
      method: string;
      count: number;
      percentage: string;
    }[];
  };
  partners: PartnerContribution[];
  lessonsLearned: LessonLearned[];
  nextPriorities: NextPriority[];
  galleryImages: {
    src: string;
    alt: string;
    caption: string;
  }[];
};

export const abwochReportData: AbwochReportData = {
  slug: 'abwoch-2026',
  title: 'One Day, 301 People: What Your Support Made Possible at Abwoch',
  subtitle: 'Official Pre-Launch Medical Outreach Report | Abwoch Health Centre III, Omoro District',
  theme: 'Rooted in Community, Rising in Health: The AWIHF Story',
  date: '3 July 2026',
  location: 'Abwoch Health Centre III, Tochi County, Omoro District',
  downloadUrl: '/reports/AWIHF-Abwoch-Outreach-Report-2026.html',
  keyMetrics: [
    {
      value: '301',
      label: 'Community Members Reached',
      detail: 'Across five integrated essential health services in a single day.',
    },
    {
      value: '121',
      label: 'General Consultations',
      detail: '71.1% women; 71 resulted in documented diagnoses & treatments.',
    },
    {
      value: '76',
      label: 'Sickle Cell Screenings',
      detail: '23 individuals (30.3%) identified carrying trait or disease.',
    },
    {
      value: '56',
      label: 'HIV Services Reach',
      detail: '52 tested, 98.1% negative, 1 positive linked to care, 3 on PrEP.',
    },
    {
      value: '35',
      label: 'Cervical Cancer Screenings',
      detail: '1 referral for specialized assessment & clinical management.',
    },
    {
      value: '13',
      label: 'Family Planning Clients',
      detail: 'Supported with modern contraceptive methods & counseling.',
    },
    {
      value: '5',
      label: 'Partner Organisations',
      detail: 'Multi-stakeholder task-sharing & cost-sharing delivery model.',
    },
    {
      value: '71',
      label: 'Documented Treatments',
      detail: 'Immediate curative care for acute & chronic conditions.',
    },
  ],
  executiveSummary: [
    'On 3 July 2026, the Acholi Women in Health Foundation (AWIHF) held its official pre-launch medical outreach at Abwoch Health Centre III in Tochi County, Omoro District, under the theme "Rooted in Community, Rising in Health: The AWIHF Story."',
    'The camp was conducted as part of the Foundation\'s pre-launch programming, designed to demonstrate our community-rooted service model and reach underserved families prior to our formal public launch. It brought five essential health services directly to the community, completely free of charge, through close collaboration with health-service partners, local leadership, and community health volunteers.',
    'By the end of a single day, 301 community members were reached, demonstrating both the high demand for accessible frontline healthcare and the power of a coordinated, multi-partner outreach model in overcoming rural barriers of distance, cost, and awareness.',
  ],
  serviceDistribution: [
    { service: 'General medical consultations', count: 121, percentage: '40.2%' },
    { service: 'Sickle cell screening', count: 76, percentage: '25.2%' },
    { service: 'HIV screening and counselling', count: 56, percentage: '18.6%' },
    { service: 'Cervical cancer screening', count: 35, percentage: '11.6%' },
    { service: 'Family planning', count: 13, percentage: '4.3%' },
  ],
  diagnoses: [
    { condition: 'Respiratory illness', count: 13, percentage: '18.3%' },
    { condition: 'Hypertension', count: 13, percentage: '18.3%' },
    { condition: 'Urinary tract infections (UTI)', count: 13, percentage: '18.3%' },
    { condition: 'Malaria', count: 12, percentage: '16.9%' },
    { condition: 'Genital infections', count: 8, percentage: '11.3%' },
    { condition: 'Diabetes', count: 7, percentage: '9.9%' },
    { condition: 'Helminthiasis (worm infestation)', count: 5, percentage: '7.0%' },
  ],
  sickleCellStats: [
    { status: 'Normal haemoglobin', genotype: 'HbAA', count: 53, percentage: '69.7%' },
    { status: 'Sickle cell trait', genotype: 'HbAS', count: 20, percentage: '26.3%' },
    { status: 'Sickle cell disease', genotype: 'HbSS', count: 3, percentage: '3.9%' },
  ],
  hivStats: {
    reached: 56,
    tested: 52,
    negative: 51,
    negativePercentage: '98.1%',
    positive: 1,
    positivePercentage: '1.9%',
    prepInitiated: 3,
    counselingOnly: 1,
  },
  cervicalCancerStats: {
    totalScreened: 35,
    referred: 1,
    referredPercentage: '2.9%',
    ageDistribution: [
      { ageGroup: 'Under 30 years', count: 12, percentage: '34.3%' },
      { ageGroup: '30 – 35 years', count: 5, percentage: '14.3%' },
      { ageGroup: 'Over 35 years', count: 18, percentage: '51.4%' },
    ],
  },
  familyPlanningStats: {
    totalSupported: 13,
    ageDistribution: [
      { ageGroup: '17 – 20 years', count: 5, percentage: '38.5%' },
      { ageGroup: '21 – 25 years', count: 3, percentage: '23.1%' },
      { ageGroup: '26 – 45 years', count: 5, percentage: '38.5%' },
    ],
    methodDistribution: [
      { method: 'Depo-Provera (injectable)', count: 11, percentage: '84.6%' },
      { method: 'Sayana Press (subcutaneous)', count: 2, percentage: '15.4%' },
    ],
  },
  partners: [
    {
      name: 'Tackle Sickle Cell Africa (TSCA)',
      role: 'Sickle Cell Specialist Partner',
      contribution:
        'Conducted pre-test and post-test counseling, performed rapid haemoglobin screening for 76 participants, and provided clinical education on sickle cell trait management and family planning implications.',
    },
    {
      name: 'The AIDS Support Organisation (TASO), Gulu Centre',
      role: 'HIV Services Partner',
      contribution:
        'Delivered voluntary HIV counseling and testing for 52 clients, initiated 3 high-risk clients on Pre-Exposure Prophylaxis (PrEP), and provided immediate psycho-social linkage for 1 newly identified client.',
    },
    {
      name: 'Reproductive Health Uganda (RHU), Gulu Branch',
      role: 'Sexual & Reproductive Health Partner',
      contribution:
        'Conducted visual inspection with acetic acid (VIA) cervical cancer screenings for 35 women, provided modern family planning counseling and contraceptive commodities (Depo-Provera and Sayana Press), and facilitated referral linkage.',
    },
    {
      name: 'Abwoch Health Centre III & Omoro District Local Government',
      role: 'Host Facility & District Authority',
      contribution:
        'Provided clinical space, examination rooms, infrastructure, laboratory facility access, utilities, and essential local facility staff to support service delivery and ensure institutional continuity.',
    },
    {
      name: 'Hashtag Gulu',
      role: 'Community Outreach & Youth Mobilisation Partner',
      contribution:
        'Mobilised community members, engaged adolescent girls and young mothers across Tochi County, and assisted with client registration, patient flow, and logistical coordination.',
    },
    {
      name: 'AWIHF Staff and Healthcare Volunteers',
      role: 'Organising & Clinical Delivery Team',
      contribution:
        'Provided overall programme coordination, clinical consultations, triage, pharmacy dispensing, documentation, and follow-up tracking across all service streams.',
    },
  ],
  lessonsLearned: [
    {
      title: 'Demand outstripped capacity',
      description:
        'Community turnout substantially exceeded initial forecasts, creating clinician bottlenecks and extended waiting times at registration, consultation, laboratory, and dispensary points.',
    },
    {
      title: 'Supplies ran short',
      description:
        'High patient volume depleted certain essential curative and preventive pharmaceuticals before the end of the day, demonstrating the necessity of larger advance supply quantification.',
    },
    {
      title: 'Patient flow required more structured triage',
      description:
        'Without a dedicated initial triage station, acutely ill patients were co-located with preventive screening clients, generating registration congestion that slowed clinical throughput.',
    },
    {
      title: 'A single-day model limits counseling depth',
      description:
        'While 301 people received vital care, a one-day camp constrained the time available for thorough one-on-one counseling and comprehensive health literacy at each service point.',
    },
  ],
  nextPriorities: [
    {
      number: 1,
      title: 'Fund more clinicians at consultation points',
      description:
        'Increase medical officer and clinical officer staffing at outreach hubs to minimize client waiting times and avoid overburdening frontline medical personnel.',
    },
    {
      number: 2,
      title: 'Procure and quantify medical supplies earlier',
      description:
        'Establish buffer stocks for essential antibiotics, antihypertensives, antimalarials, analgesics, and screening reagents based on realistic rural attendance trends.',
    },
    {
      number: 3,
      title: 'Build structured referral and follow-up pathways',
      description:
        'Formalize longitudinal follow-up mechanisms for community members diagnosed with sickle cell trait/disease, hypertension, diabetes, and cervical abnormalities.',
    },
    {
      number: 4,
      title: 'Expand cervical cancer screening and family planning outreach',
      description:
        'Deepen community sensitisation and address stigma around reproductive health services to elevate screening uptake to parity with general medical consultations.',
    },
    {
      number: 5,
      title: 'Train more staff and volunteers in documentation tools',
      description:
        'Equip field health workers and student volunteers with standardized digital/paper registry tools to ensure seamless data capture and clinical audit accuracy.',
    },
    {
      number: 6,
      title: 'Replicate the multi-partner outreach model across Acholi',
      description:
        'Scale integrated health outreach camps to additional rural health centre II and III facilities throughout Omoro, Gulu, and neighboring districts.',
    },
  ],
  galleryImages: [
    {
      src: '/images/Abwoch image 1.webp',
      alt: 'Community members gathered under shade trees at Abwoch Health Centre III for health education',
      caption: 'Community members gathered at Abwoch Health Centre III for health education and service orientation.',
    },
    {
      src: '/images/Abwoch image 2.webp',
      alt: 'AWIHF and partner clinical team during morning briefing and triage set-up',
      caption: 'AWIHF clinicians and partner teams during morning briefing and patient flow coordination.',
    },
    {
      src: '/images/AWIHF-HSS2.webp',
      alt: 'Clinician conducting medical consultation and examination in the consultation room',
      caption: 'General medical consultations delivering essential diagnosis and treatment for acute conditions.',
    },
    {
      src: '/images/Abwoch image 3.webp',
      alt: 'Tackle Sickle Cell Africa specialists conducting counseling and screening',
      caption: 'Specialized sickle cell counseling and rapid screening conducted with Tackle Sickle Cell Africa.',
    },
    {
      src: '/images/Abwoch image 4.webp',
      alt: 'TASO counselor conducting voluntary HIV testing and pre-test counseling',
      caption: 'Voluntary HIV testing, counseling, and prevention linkage delivered by TASO Gulu Centre.',
    },
    {
      src: '/images/Abwoch image 5.webp',
      alt: 'Reproductive Health Uganda midwives providing family planning support and cervical screening',
      caption: 'Cervical cancer screening and modern family planning counseling provided with Reproductive Health Uganda.',
    },
    {
      src: '/images/Abwoch image 6.webp',
      alt: 'AWIHF volunteers and local health workers dispensing prescribed medications at the dispensary',
      caption: 'Medication dispensing and post-consultation guidance at the Abwoch Health Centre III dispensary.',
    },
  ],
};

export async function getAbwochReportData(): Promise<AbwochReportData> {
  return abwochReportData;
}
