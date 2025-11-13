'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Filter, Shield, Snowflake, Phone, ChevronRight, AlertTriangle, Activity } from 'lucide-react';

interface Medicine {
  id: string;
  genericName: string;
  brandName: string;
  indication: string;
  dosageForm: string;
  price?: string;
  coldChain?: boolean;
  category: string;
}

const cancerMedicines: Medicine[] = [
  {
    id: 'cancer-001',
    genericName: 'Trastuzumab',
    brandName: 'Herceptin / Herclon / Canmab',
    indication: 'HER2+ Breast Cancer, Gastric Cancer',
    dosageForm: 'IV Infusion 150mg/440mg',
    coldChain: true,
    category: 'HER2 Targeted'
  },
  {
    id: 'cancer-002',
    genericName: 'Bevacizumab',
    brandName: 'Avastin / Bevatas / Krabeva',
    indication: 'Colorectal, Lung, Kidney, Brain Cancer',
    dosageForm: 'IV Infusion 100mg/400mg',
    coldChain: true,
    category: 'VEGF Inhibitor'
  },
  {
    id: 'cancer-003',
    genericName: 'Rituximab',
    brandName: 'MabThera / Ristova / Maball',
    indication: 'Non-Hodgkin Lymphoma, CLL',
    dosageForm: 'IV Infusion 100mg/500mg',
    coldChain: true,
    category: 'CD20 Antibody'
  },
  {
    id: 'cancer-004',
    genericName: 'Cetuximab',
    brandName: 'Erbitux / Erbinat',
    indication: 'Colorectal Cancer, Head & Neck Cancer',
    dosageForm: 'IV Infusion 100mg/500mg',
    coldChain: true,
    category: 'EGFR Inhibitor'
  },
  {
    id: 'cancer-005',
    genericName: 'Nimotuzumab',
    brandName: 'BIOMAb EGFR / Theraloc',
    indication: 'Head & Neck Cancer, Glioma',
    dosageForm: 'IV Infusion 50mg',
    coldChain: true,
    category: 'EGFR Antibody'
  },
  {
    id: 'cancer-006',
    genericName: 'Pembrolizumab',
    brandName: 'Keytruda',
    indication: 'Melanoma, Lung, Head & Neck Cancer',
    dosageForm: 'IV Infusion 100mg',
    coldChain: true,
    category: 'PD-1 Inhibitor'
  },
  {
    id: 'cancer-007',
    genericName: 'Nivolumab',
    brandName: 'Opdivo / Opdyta',
    indication: 'Melanoma, Lung, Kidney Cancer',
    dosageForm: 'IV Infusion 40mg/100mg',
    coldChain: true,
    category: 'PD-1 Inhibitor'
  },
  {
    id: 'cancer-008',
    genericName: 'Atezolizumab',
    brandName: 'Tecentriq',
    indication: 'Lung, Bladder, Liver Cancer',
    dosageForm: 'IV Infusion 840mg/1200mg',
    coldChain: true,
    category: 'PD-L1 Inhibitor'
  },
  {
    id: 'cancer-009',
    genericName: 'Durvalumab',
    brandName: 'Imfinzi',
    indication: 'Lung Cancer, Bladder Cancer',
    dosageForm: 'IV Infusion 120mg/500mg',
    coldChain: true,
    category: 'PD-L1 Inhibitor'
  },
  {
    id: 'cancer-010',
    genericName: 'Ipilimumab',
    brandName: 'Yervoy',
    indication: 'Melanoma, Kidney Cancer',
    dosageForm: 'IV Infusion 50mg/200mg',
    coldChain: true,
    category: 'CTLA-4 Inhibitor'
  },
  {
    id: 'cancer-011',
    genericName: 'Osimertinib',
    brandName: 'Tagrisso',
    indication: 'EGFR+ Non-Small Cell Lung Cancer',
    dosageForm: 'Tablet 40mg/80mg',
    category: 'EGFR TKI'
  },
  {
    id: 'cancer-012',
    genericName: 'Erlotinib',
    brandName: 'Tarceva / Erlonat',
    indication: 'Lung Cancer, Pancreatic Cancer',
    dosageForm: 'Tablet 100mg/150mg',
    price: '₹8,000 - ₹25,000',
    category: 'EGFR TKI'
  },
  {
    id: 'cancer-013',
    genericName: 'Gefitinib',
    brandName: 'Iressa / Geftinat',
    indication: 'Non-Small Cell Lung Cancer',
    dosageForm: 'Tablet 250mg',
    price: '₹5,000 - ₹15,000',
    category: 'EGFR TKI'
  },
  {
    id: 'cancer-014',
    genericName: 'Afatinib',
    brandName: 'Giotrif / Xovoltib',
    indication: 'Non-Small Cell Lung Cancer',
    dosageForm: 'Tablet 20mg/30mg/40mg',
    category: 'EGFR TKI'
  },
  {
    id: 'cancer-015',
    genericName: 'Dacomitinib',
    brandName: 'Vizimpro',
    indication: 'EGFR+ Non-Small Cell Lung Cancer',
    dosageForm: 'Tablet 15mg/30mg/45mg',
    category: 'EGFR TKI'
  },
  {
    id: 'cancer-016',
    genericName: 'Crizotinib',
    brandName: 'Xalkori / Crizalk',
    indication: 'ALK+ Lung Cancer',
    dosageForm: 'Capsule 200mg/250mg',
    category: 'ALK Inhibitor'
  },
  {
    id: 'cancer-017',
    genericName: 'Alectinib',
    brandName: 'Alecensa',
    indication: 'ALK+ Non-Small Cell Lung Cancer',
    dosageForm: 'Capsule 150mg',
    category: 'ALK Inhibitor'
  },
  {
    id: 'cancer-018',
    genericName: 'Brigatinib',
    brandName: 'Alunbrig',
    indication: 'ALK+ Non-Small Cell Lung Cancer',
    dosageForm: 'Tablet 30mg/90mg/180mg',
    category: 'ALK Inhibitor'
  },
  {
    id: 'cancer-019',
    genericName: 'Lorlatinib',
    brandName: 'Lorbrena',
    indication: 'ALK+ Non-Small Cell Lung Cancer',
    dosageForm: 'Tablet 25mg/100mg',
    category: 'ALK Inhibitor'
  },
  {
    id: 'cancer-020',
    genericName: 'Ceritinib',
    brandName: 'Zykadia',
    indication: 'ALK+ Non-Small Cell Lung Cancer',
    dosageForm: 'Capsule 150mg',
    category: 'ALK Inhibitor'
  },
  {
    id: 'cancer-021',
    genericName: 'Imatinib',
    brandName: 'Gleevec / Veenat',
    indication: 'CML, GIST, ALL',
    dosageForm: 'Tablet 100mg/400mg',
    price: '₹2,000 - ₹8,000',
    category: 'BCR-ABL Inhibitor'
  },
  {
    id: 'cancer-022',
    genericName: 'Dasatinib',
    brandName: 'Sprycel / Dasanat',
    indication: 'CML, Ph+ ALL',
    dosageForm: 'Tablet 20mg/50mg/70mg/100mg',
    category: 'BCR-ABL Inhibitor'
  },
  {
    id: 'cancer-023',
    genericName: 'Nilotinib',
    brandName: 'Tasigna',
    indication: 'Chronic Myeloid Leukemia',
    dosageForm: 'Capsule 150mg/200mg',
    category: 'BCR-ABL Inhibitor'
  },
  {
    id: 'cancer-024',
    genericName: 'Bosutinib',
    brandName: 'Bosulif',
    indication: 'Chronic Myeloid Leukemia',
    dosageForm: 'Tablet 100mg/400mg/500mg',
    category: 'BCR-ABL Inhibitor'
  },
  {
    id: 'cancer-025',
    genericName: 'Ponatinib',
    brandName: 'Iclusig',
    indication: 'CML, Ph+ ALL',
    dosageForm: 'Tablet 15mg/30mg/45mg',
    category: 'BCR-ABL Inhibitor'
  },
  {
    id: 'cancer-026',
    genericName: 'Sorafenib',
    brandName: 'Nexavar / Sorafenat',
    indication: 'Liver, Kidney, Thyroid Cancer',
    dosageForm: 'Tablet 200mg',
    price: '₹15,000 - ₹40,000',
    category: 'Multi-kinase Inhibitor'
  },
  {
    id: 'cancer-027',
    genericName: 'Sunitinib',
    brandName: 'Sutent / Sunitix',
    indication: 'Kidney Cancer, GIST',
    dosageForm: 'Capsule 12.5mg/25mg/50mg',
    category: 'Multi-kinase Inhibitor'
  },
  {
    id: 'cancer-028',
    genericName: 'Pazopanib',
    brandName: 'Votrient',
    indication: 'Kidney Cancer, Soft Tissue Sarcoma',
    dosageForm: 'Tablet 200mg/400mg',
    category: 'Multi-kinase Inhibitor'
  },
  {
    id: 'cancer-029',
    genericName: 'Regorafenib',
    brandName: 'Stivarga',
    indication: 'Colorectal, Liver Cancer, GIST',
    dosageForm: 'Tablet 40mg',
    category: 'Multi-kinase Inhibitor'
  },
  {
    id: 'cancer-030',
    genericName: 'Lenvatinib',
    brandName: 'Lenvima',
    indication: 'Thyroid, Liver, Kidney Cancer',
    dosageForm: 'Capsule 4mg/10mg',
    category: 'Multi-kinase Inhibitor'
  },
  {
    id: 'cancer-031',
    genericName: 'Cabozantinib',
    brandName: 'Cabometyx / Cometriq',
    indication: 'Kidney, Liver, Thyroid Cancer',
    dosageForm: 'Tablet 20mg/40mg/60mg',
    category: 'Multi-kinase Inhibitor'
  },
  {
    id: 'cancer-032',
    genericName: 'Axitinib',
    brandName: 'Inlyta',
    indication: 'Renal Cell Carcinoma',
    dosageForm: 'Tablet 1mg/5mg',
    category: 'VEGFR Inhibitor'
  },
  {
    id: 'cancer-033',
    genericName: 'Tivozanib',
    brandName: 'Fotivda',
    indication: 'Renal Cell Carcinoma',
    dosageForm: 'Capsule 0.89mg/1.34mg',
    category: 'VEGFR Inhibitor'
  },
  {
    id: 'cancer-034',
    genericName: 'Ibrutinib',
    brandName: 'Imbruvica',
    indication: 'CLL, Mantle Cell Lymphoma',
    dosageForm: 'Capsule 140mg',
    category: 'BTK Inhibitor'
  },
  {
    id: 'cancer-035',
    genericName: 'Acalabrutinib',
    brandName: 'Calquence',
    indication: 'CLL, Mantle Cell Lymphoma',
    dosageForm: 'Capsule 100mg',
    category: 'BTK Inhibitor'
  },
  {
    id: 'cancer-036',
    genericName: 'Zanubrutinib',
    brandName: 'Brukinsa',
    indication: 'Mantle Cell Lymphoma, CLL',
    dosageForm: 'Capsule 80mg',
    category: 'BTK Inhibitor'
  },
  {
    id: 'cancer-037',
    genericName: 'Venetoclax',
    brandName: 'Venclexta / Venclyxto',
    indication: 'CLL, AML',
    dosageForm: 'Tablet 10mg/50mg/100mg',
    category: 'BCL-2 Inhibitor'
  },
  {
    id: 'cancer-038',
    genericName: 'Olaparib',
    brandName: 'Lynparza',
    indication: 'BRCA+ Ovarian, Breast, Prostate Cancer',
    dosageForm: 'Tablet 100mg/150mg',
    category: 'PARP Inhibitor'
  },
  {
    id: 'cancer-039',
    genericName: 'Rucaparib',
    brandName: 'Rubraca',
    indication: 'BRCA+ Ovarian, Prostate Cancer',
    dosageForm: 'Tablet 200mg/250mg/300mg',
    category: 'PARP Inhibitor'
  },
  {
    id: 'cancer-040',
    genericName: 'Niraparib',
    brandName: 'Zejula',
    indication: 'Ovarian Cancer',
    dosageForm: 'Capsule 100mg',
    category: 'PARP Inhibitor'
  },
  {
    id: 'cancer-041',
    genericName: 'Talazoparib',
    brandName: 'Talzenna',
    indication: 'BRCA+ Breast Cancer',
    dosageForm: 'Capsule 0.25mg/1mg',
    category: 'PARP Inhibitor'
  },
  {
    id: 'cancer-042',
    genericName: 'Palbociclib',
    brandName: 'Ibrance',
    indication: 'HR+/HER2- Breast Cancer',
    dosageForm: 'Capsule 75mg/100mg/125mg',
    category: 'CDK4/6 Inhibitor'
  },
  {
    id: 'cancer-043',
    genericName: 'Ribociclib',
    brandName: 'Kisqali',
    indication: 'HR+/HER2- Breast Cancer',
    dosageForm: 'Tablet 200mg',
    category: 'CDK4/6 Inhibitor'
  },
  {
    id: 'cancer-044',
    genericName: 'Abemaciclib',
    brandName: 'Verzenio',
    indication: 'HR+/HER2- Breast Cancer',
    dosageForm: 'Tablet 50mg/100mg/150mg/200mg',
    category: 'CDK4/6 Inhibitor'
  },
  {
    id: 'cancer-045',
    genericName: 'Everolimus',
    brandName: 'Afinitor / Certican',
    indication: 'Breast, Kidney, Neuroendocrine Tumors',
    dosageForm: 'Tablet 2.5mg/5mg/10mg',
    category: 'mTOR Inhibitor'
  },
  {
    id: 'cancer-046',
    genericName: 'Temsirolimus',
    brandName: 'Torisel',
    indication: 'Renal Cell Carcinoma',
    dosageForm: 'IV Infusion 25mg',
    coldChain: true,
    category: 'mTOR Inhibitor'
  },
  {
    id: 'cancer-047',
    genericName: 'Bortezomib',
    brandName: 'Velcade / Bortecad',
    indication: 'Multiple Myeloma, Mantle Cell Lymphoma',
    dosageForm: 'Injection 2mg/3.5mg',
    coldChain: true,
    category: 'Proteasome Inhibitor'
  },
  {
    id: 'cancer-048',
    genericName: 'Carfilzomib',
    brandName: 'Kyprolis',
    indication: 'Multiple Myeloma',
    dosageForm: 'IV Infusion 10mg/30mg/60mg',
    coldChain: true,
    category: 'Proteasome Inhibitor'
  },
  {
    id: 'cancer-049',
    genericName: 'Ixazomib',
    brandName: 'Ninlaro',
    indication: 'Multiple Myeloma',
    dosageForm: 'Capsule 2.3mg/3mg/4mg',
    category: 'Proteasome Inhibitor'
  },
  {
    id: 'cancer-050',
    genericName: 'Lenalidomide',
    brandName: 'Revlimid / Lenalid',
    indication: 'Multiple Myeloma, MDS',
    dosageForm: 'Capsule 5mg/10mg/15mg/25mg',
    category: 'Immunomodulator'
  },
  {
    id: 'cancer-051',
    genericName: 'Pomalidomide',
    brandName: 'Pomalyst / Imnovid',
    indication: 'Multiple Myeloma',
    dosageForm: 'Capsule 1mg/2mg/3mg/4mg',
    category: 'Immunomodulator'
  },
  {
    id: 'cancer-052',
    genericName: 'Thalidomide',
    brandName: 'Thalomid',
    indication: 'Multiple Myeloma',
    dosageForm: 'Capsule 50mg/100mg/200mg',
    price: '₹500 - ₹2,000',
    category: 'Immunomodulator'
  },
  {
    id: 'cancer-053',
    genericName: 'Daratumumab',
    brandName: 'Darzalex',
    indication: 'Multiple Myeloma',
    dosageForm: 'IV/SC Infusion',
    coldChain: true,
    category: 'CD38 Antibody'
  },
  {
    id: 'cancer-054',
    genericName: 'Isatuximab',
    brandName: 'Sarclisa',
    indication: 'Multiple Myeloma',
    dosageForm: 'IV Infusion 100mg/500mg',
    coldChain: true,
    category: 'CD38 Antibody'
  },
  {
    id: 'cancer-055',
    genericName: 'Elotuzumab',
    brandName: 'Empliciti',
    indication: 'Multiple Myeloma',
    dosageForm: 'IV Infusion 300mg/400mg',
    coldChain: true,
    category: 'SLAMF7 Antibody'
  },
  {
    id: 'cancer-056',
    genericName: 'Belantamab mafodotin',
    brandName: 'Blenrep',
    indication: 'Multiple Myeloma',
    dosageForm: 'IV Infusion 100mg',
    coldChain: true,
    category: 'BCMA ADC'
  },
  {
    id: 'cancer-057',
    genericName: 'Abiraterone',
    brandName: 'Zytiga / Abirapro',
    indication: 'Prostate Cancer',
    dosageForm: 'Tablet 250mg/500mg',
    category: 'CYP17 Inhibitor'
  },
  {
    id: 'cancer-058',
    genericName: 'Enzalutamide',
    brandName: 'Xtandi',
    indication: 'Prostate Cancer',
    dosageForm: 'Capsule 40mg',
    category: 'Androgen Receptor Inhibitor'
  },
  {
    id: 'cancer-059',
    genericName: 'Apalutamide',
    brandName: 'Erleada',
    indication: 'Prostate Cancer',
    dosageForm: 'Tablet 60mg',
    category: 'Androgen Receptor Inhibitor'
  },
  {
    id: 'cancer-060',
    genericName: 'Darolutamide',
    brandName: 'Nubeqa',
    indication: 'Prostate Cancer',
    dosageForm: 'Tablet 300mg',
    category: 'Androgen Receptor Inhibitor'
  },
  {
    id: 'cancer-061',
    genericName: 'Tamoxifen',
    brandName: 'Nolvadex / Tamodex',
    indication: 'Breast Cancer',
    dosageForm: 'Tablet 10mg/20mg',
    price: '₹100 - ₹500',
    category: 'SERM'
  },
  {
    id: 'cancer-062',
    genericName: 'Letrozole',
    brandName: 'Femara / Letroz',
    indication: 'Breast Cancer',
    dosageForm: 'Tablet 2.5mg',
    price: '₹200 - ₹800',
    category: 'Aromatase Inhibitor'
  },
  {
    id: 'cancer-063',
    genericName: 'Anastrozole',
    brandName: 'Arimidex / Anabrez',
    indication: 'Breast Cancer',
    dosageForm: 'Tablet 1mg',
    price: '₹300 - ₹1,000',
    category: 'Aromatase Inhibitor'
  },
  {
    id: 'cancer-064',
    genericName: 'Exemestane',
    brandName: 'Aromasin / Exemptia',
    indication: 'Breast Cancer',
    dosageForm: 'Tablet 25mg',
    price: '₹500 - ₹1,500',
    category: 'Aromatase Inhibitor'
  },
  {
    id: 'cancer-065',
    genericName: 'Fulvestrant',
    brandName: 'Faslodex',
    indication: 'Breast Cancer',
    dosageForm: 'IM Injection 250mg',
    coldChain: true,
    category: 'SERD'
  },
  {
    id: 'cancer-066',
    genericName: 'Pertuzumab',
    brandName: 'Perjeta',
    indication: 'HER2+ Breast Cancer',
    dosageForm: 'IV Infusion 420mg',
    coldChain: true,
    category: 'HER2 Antibody'
  },
  {
    id: 'cancer-067',
    genericName: 'Trastuzumab emtansine',
    brandName: 'Kadcyla',
    indication: 'HER2+ Breast Cancer',
    dosageForm: 'IV Infusion 100mg/160mg',
    coldChain: true,
    category: 'HER2 ADC'
  },
  {
    id: 'cancer-068',
    genericName: 'Trastuzumab deruxtecan',
    brandName: 'Enhertu',
    indication: 'HER2+ Breast Cancer',
    dosageForm: 'IV Infusion 100mg',
    coldChain: true,
    category: 'HER2 ADC'
  },
  {
    id: 'cancer-069',
    genericName: 'Lapatinib',
    brandName: 'Tykerb / Tyverb',
    indication: 'HER2+ Breast Cancer',
    dosageForm: 'Tablet 250mg',
    category: 'HER2/EGFR TKI'
  },
  {
    id: 'cancer-070',
    genericName: 'Neratinib',
    brandName: 'Nerlynx',
    indication: 'HER2+ Breast Cancer',
    dosageForm: 'Tablet 40mg',
    category: 'HER2 TKI'
  },
  {
    id: 'cancer-071',
    genericName: 'Tucatinib',
    brandName: 'Tukysa',
    indication: 'HER2+ Breast Cancer',
    dosageForm: 'Tablet 50mg/150mg',
    category: 'HER2 TKI'
  },
  {
    id: 'cancer-072',
    genericName: 'Sacituzumab govitecan',
    brandName: 'Trodelvy',
    indication: 'Triple-Negative Breast Cancer',
    dosageForm: 'IV Infusion 180mg',
    coldChain: true,
    category: 'Trop-2 ADC'
  },
  {
    id: 'cancer-073',
    genericName: 'Panitumumab',
    brandName: 'Vectibix',
    indication: 'Colorectal Cancer',
    dosageForm: 'IV Infusion 100mg/400mg',
    coldChain: true,
    category: 'EGFR Antibody'
  },
  {
    id: 'cancer-074',
    genericName: 'Ramucirumab',
    brandName: 'Cyramza',
    indication: 'Gastric, Lung, Colorectal Cancer',
    dosageForm: 'IV Infusion 100mg/500mg',
    coldChain: true,
    category: 'VEGFR2 Antibody'
  },
  {
    id: 'cancer-075',
    genericName: 'Aflibercept',
    brandName: 'Zaltrap',
    indication: 'Colorectal Cancer',
    dosageForm: 'IV Infusion 100mg/200mg',
    coldChain: true,
    category: 'VEGF Trap'
  },
  {
    id: 'cancer-076',
    genericName: 'Pegfilgrastim',
    brandName: 'Neulasta / Peg-grafeel',
    indication: 'Chemotherapy-induced Neutropenia',
    dosageForm: 'SC Injection 6mg',
    coldChain: true,
    category: 'G-CSF'
  },
  {
    id: 'cancer-077',
    genericName: 'Filgrastim',
    brandName: 'Neupogen / Grafeel',
    indication: 'Chemotherapy-induced Neutropenia',
    dosageForm: 'SC/IV Injection 300mcg',
    coldChain: true,
    category: 'G-CSF'
  },
  {
    id: 'cancer-078',
    genericName: 'Darbepoetin alfa',
    brandName: 'Aranesp / Darbatitor',
    indication: 'Chemotherapy-induced Anemia',
    dosageForm: 'SC/IV Injection',
    coldChain: true,
    category: 'ESA'
  },
  {
    id: 'cancer-079',
    genericName: 'Epoetin alfa',
    brandName: 'Epogen / Eprex',
    indication: 'Chemotherapy-induced Anemia',
    dosageForm: 'SC/IV Injection',
    coldChain: true,
    category: 'ESA'
  },
  {
    id: 'cancer-080',
    genericName: 'Palonosetron',
    brandName: 'Aloxi / Palnox',
    indication: 'Chemotherapy-induced Nausea',
    dosageForm: 'IV Injection 0.25mg',
    price: '₹500 - ₹2,000',
    category: '5-HT3 Antagonist'
  },
  {
    id: 'cancer-081',
    genericName: 'Ondansetron',
    brandName: 'Zofran / Emeset',
    indication: 'Chemotherapy-induced Nausea',
    dosageForm: 'Tablet/Injection 4mg/8mg',
    price: '₹50 - ₹300',
    category: '5-HT3 Antagonist'
  },
  {
    id: 'cancer-082',
    genericName: 'Aprepitant',
    brandName: 'Emend / Aprecap',
    indication: 'Chemotherapy-induced Nausea',
    dosageForm: 'Capsule 80mg/125mg',
    price: '₹800 - ₹3,000',
    category: 'NK1 Antagonist'
  },
  {
    id: 'cancer-083',
    genericName: 'Fosaprepitant',
    brandName: 'Emend IV',
    indication: 'Chemotherapy-induced Nausea',
    dosageForm: 'IV Infusion 150mg',
    category: 'NK1 Antagonist'
  },
  {
    id: 'cancer-084',
    genericName: 'Zoledronic acid',
    brandName: 'Zometa / Zoledria',
    indication: 'Bone Metastases, Hypercalcemia',
    dosageForm: 'IV Infusion 4mg',
    price: '₹2,000 - ₹8,000',
    category: 'Bisphosphonate'
  },
  {
    id: 'cancer-085',
    genericName: 'Denosumab',
    brandName: 'Xgeva',
    indication: 'Bone Metastases',
    dosageForm: 'SC Injection 120mg',
    coldChain: true,
    category: 'RANK-L Inhibitor'
  },
  {
    id: 'cancer-086',
    genericName: 'Pamidronate',
    brandName: 'Aredia',
    indication: 'Bone Metastases, Hypercalcemia',
    dosageForm: 'IV Infusion 30mg/90mg',
    price: '₹1,500 - ₹5,000',
    category: 'Bisphosphonate'
  },
  {
    id: 'cancer-087',
    genericName: 'Cisplatin',
    brandName: 'Platinol / Cisteen',
    indication: 'Various Solid Tumors',
    dosageForm: 'IV Infusion 10mg/50mg',
    price: '₹500 - ₹2,000',
    category: 'Platinum Agent'
  },
  {
    id: 'cancer-088',
    genericName: 'Carboplatin',
    brandName: 'Paraplatin / Kemocarb',
    indication: 'Various Solid Tumors',
    dosageForm: 'IV Infusion 150mg/450mg',
    price: '₹800 - ₹3,000',
    category: 'Platinum Agent'
  },
  {
    id: 'cancer-089',
    genericName: 'Oxaliplatin',
    brandName: 'Eloxatin / Oxalid',
    indication: 'Colorectal Cancer',
    dosageForm: 'IV Infusion 50mg/100mg',
    price: '₹2,000 - ₹6,000',
    category: 'Platinum Agent'
  },
  {
    id: 'cancer-090',
    genericName: 'Paclitaxel',
    brandName: 'Taxol / Pacliter',
    indication: 'Breast, Ovarian, Lung Cancer',
    dosageForm: 'IV Infusion 30mg/100mg/260mg',
    price: '₹1,000 - ₹5,000',
    category: 'Taxane'
  },
  {
    id: 'cancer-091',
    genericName: 'Docetaxel',
    brandName: 'Taxotere / Doxetere',
    indication: 'Breast, Prostate, Lung Cancer',
    dosageForm: 'IV Infusion 20mg/80mg',
    price: '₹2,000 - ₹8,000',
    category: 'Taxane'
  },
  {
    id: 'cancer-092',
    genericName: 'Nab-paclitaxel',
    brandName: 'Abraxane',
    indication: 'Breast, Pancreatic, Lung Cancer',
    dosageForm: 'IV Infusion 100mg',
    coldChain: true,
    category: 'Taxane'
  },
  {
    id: 'cancer-093',
    genericName: 'Cabazitaxel',
    brandName: 'Jevtana',
    indication: 'Prostate Cancer',
    dosageForm: 'IV Infusion 60mg',
    category: 'Taxane'
  },
  {
    id: 'cancer-094',
    genericName: 'Doxorubicin',
    brandName: 'Adriamycin / Doxoruba',
    indication: 'Various Cancers',
    dosageForm: 'IV Infusion 10mg/50mg',
    price: '₹500 - ₹2,000',
    category: 'Anthracycline'
  },
  {
    id: 'cancer-095',
    genericName: 'Epirubicin',
    brandName: 'Pharmorubicin / Epiruba',
    indication: 'Breast Cancer, Various Cancers',
    dosageForm: 'IV Infusion 10mg/50mg',
    price: '₹800 - ₹3,000',
    category: 'Anthracycline'
  },
  {
    id: 'cancer-096',
    genericName: 'Daunorubicin',
    brandName: 'Cerubidine',
    indication: 'Leukemia',
    dosageForm: 'IV Infusion 20mg',
    price: '₹1,000 - ₹3,000',
    category: 'Anthracycline'
  },
  {
    id: 'cancer-097',
    genericName: 'Idarubicin',
    brandName: 'Idamycin / Zavedos',
    indication: 'AML',
    dosageForm: 'IV Infusion 5mg/10mg',
    category: 'Anthracycline'
  },
  {
    id: 'cancer-098',
    genericName: 'Pegylated liposomal doxorubicin',
    brandName: 'Doxil / Caelyx',
    indication: 'Ovarian Cancer, Multiple Myeloma',
    dosageForm: 'IV Infusion 20mg/50mg',
    coldChain: true,
    category: 'Anthracycline'
  },
  {
    id: 'cancer-099',
    genericName: 'Cyclophosphamide',
    brandName: 'Cytoxan / Endoxan',
    indication: 'Various Cancers',
    dosageForm: 'Tablet/Injection 50mg/200mg/500mg/1g',
    price: '₹100 - ₹800',
    category: 'Alkylating Agent'
  },
  {
    id: 'cancer-100',
    genericName: 'Ifosfamide',
    brandName: 'Ifex / Holoxan',
    indication: 'Sarcoma, Testicular Cancer',
    dosageForm: 'IV Infusion 1g/2g',
    price: '₹500 - ₹2,000',
    category: 'Alkylating Agent'
  },
  {
    id: 'cancer-101',
    genericName: 'Temozolomide',
    brandName: 'Temodar / Glioz',
    indication: 'Brain Tumors',
    dosageForm: 'Capsule 5mg/20mg/100mg/250mg',
    category: 'Alkylating Agent'
  },
  {
    id: 'cancer-102',
    genericName: 'Bendamustine',
    brandName: 'Treanda / Bendit',
    indication: 'CLL, NHL',
    dosageForm: 'IV Infusion 25mg/100mg',
    category: 'Alkylating Agent'
  },
  {
    id: 'cancer-103',
    genericName: '5-Fluorouracil',
    brandName: 'Adrucil / 5-FU',
    indication: 'Colorectal, Breast, Head & Neck Cancer',
    dosageForm: 'IV Infusion 250mg/500mg',
    price: '₹100 - ₹500',
    category: 'Antimetabolite'
  },
  {
    id: 'cancer-104',
    genericName: 'Capecitabine',
    brandName: 'Xeloda / Capegard',
    indication: 'Colorectal, Breast Cancer',
    dosageForm: 'Tablet 150mg/500mg',
    price: '₹2,000 - ₹8,000',
    category: 'Antimetabolite'
  },
  {
    id: 'cancer-105',
    genericName: 'Gemcitabine',
    brandName: 'Gemzar / Gemcite',
    indication: 'Pancreatic, Lung, Bladder Cancer',
    dosageForm: 'IV Infusion 200mg/1g',
    price: '₹800 - ₹4,000',
    category: 'Antimetabolite'
  },
  {
    id: 'cancer-106',
    genericName: 'Pemetrexed',
    brandName: 'Alimta / Pemgem',
    indication: 'Lung Cancer, Mesothelioma',
    dosageForm: 'IV Infusion 100mg/500mg',
    category: 'Antimetabolite'
  },
  {
    id: 'cancer-107',
    genericName: 'Methotrexate',
    brandName: 'Trexall / Biotrexate',
    indication: 'ALL, Lymphoma, Breast Cancer',
    dosageForm: 'Tablet/Injection 2.5mg/50mg/1g',
    price: '₹100 - ₹1,000',
    category: 'Antimetabolite'
  },
  {
    id: 'cancer-108',
    genericName: 'Cytarabine',
    brandName: 'Cytosar / Aracytin',
    indication: 'AML, ALL, Lymphoma',
    dosageForm: 'IV Infusion 100mg/500mg/1g',
    price: '₹300 - ₹2,000',
    category: 'Antimetabolite'
  },
  {
    id: 'cancer-109',
    genericName: 'Azacitidine',
    brandName: 'Vidaza',
    indication: 'MDS, AML',
    dosageForm: 'SC/IV Injection 100mg',
    category: 'Hypomethylating Agent'
  },
  {
    id: 'cancer-110',
    genericName: 'Decitabine',
    brandName: 'Dacogen',
    indication: 'MDS',
    dosageForm: 'IV Infusion 50mg',
    category: 'Hypomethylating Agent'
  },
  {
    id: 'cancer-111',
    genericName: 'Vincristine',
    brandName: 'Oncovin / Vintor',
    indication: 'ALL, Lymphoma',
    dosageForm: 'IV Injection 1mg/2mg',
    price: '₹200 - ₹800',
    category: 'Vinca Alkaloid'
  },
  {
    id: 'cancer-112',
    genericName: 'Vinblastine',
    brandName: 'Velban / Vinblastin',
    indication: 'Hodgkin Lymphoma, Testicular Cancer',
    dosageForm: 'IV Injection 10mg',
    price: '₹300 - ₹1,000',
    category: 'Vinca Alkaloid'
  },
  {
    id: 'cancer-113',
    genericName: 'Vinorelbine',
    brandName: 'Navelbine / Vinelbine',
    indication: 'Lung Cancer, Breast Cancer',
    dosageForm: 'IV Infusion/Capsule',
    category: 'Vinca Alkaloid'
  },
  {
    id: 'cancer-114',
    genericName: 'Etoposide',
    brandName: 'Vepesid / Etosid',
    indication: 'Lung Cancer, Testicular Cancer',
    dosageForm: 'Capsule/IV 50mg/100mg',
    price: '₹500 - ₹2,000',
    category: 'Topoisomerase Inhibitor'
  },
  {
    id: 'cancer-115',
    genericName: 'Irinotecan',
    brandName: 'Camptosar / Irinote',
    indication: 'Colorectal Cancer',
    dosageForm: 'IV Infusion 40mg/100mg',
    price: '₹1,000 - ₹4,000',
    category: 'Topoisomerase Inhibitor'
  },
  {
    id: 'cancer-116',
    genericName: 'Topotecan',
    brandName: 'Hycamtin',
    indication: 'Ovarian, Lung Cancer',
    dosageForm: 'IV Infusion/Capsule',
    category: 'Topoisomerase Inhibitor'
  },
  {
    id: 'cancer-117',
    genericName: 'Bleomycin',
    brandName: 'Blenoxane / Bleocel',
    indication: 'Hodgkin Lymphoma, Testicular Cancer',
    dosageForm: 'Injection 15U',
    price: '₹800 - ₹2,500',
    category: 'Antitumor Antibiotic'
  },
  {
    id: 'cancer-118',
    genericName: 'Mitomycin',
    brandName: 'Mutamycin / Mitocin',
    indication: 'Bladder, Gastric Cancer',
    dosageForm: 'IV Injection 2mg/10mg/40mg',
    price: '₹500 - ₹2,000',
    category: 'Antitumor Antibiotic'
  },
  {
    id: 'cancer-119',
    genericName: 'L-Asparaginase',
    brandName: 'Elspar / Leunase',
    indication: 'ALL',
    dosageForm: 'IM/IV Injection 5000IU/10000IU',
    coldChain: true,
    category: 'Enzyme'
  },
  {
    id: 'cancer-120',
    genericName: 'Pegaspargase',
    brandName: 'Oncaspar',
    indication: 'ALL',
    dosageForm: 'IM/IV Injection 3750IU',
    coldChain: true,
    category: 'Enzyme'
  }
];

export default function CancerCarePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredMedicines = cancerMedicines.filter(medicine => {
    const matchesSearch =
      medicine.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.indication.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      selectedFilter === 'all' ||
      (selectedFilter === 'immunotherapy' && (medicine.category.includes('PD-1') || medicine.category.includes('PD-L1') || medicine.category.includes('CTLA-4'))) ||
      (selectedFilter === 'targeted' && (medicine.category.includes('TKI') || medicine.category.includes('Inhibitor'))) ||
      (selectedFilter === 'chemotherapy' && (medicine.category.includes('Alkylating') || medicine.category.includes('Antimetabolite') || medicine.category.includes('Platinum'))) ||
      (selectedFilter === 'supportive' && (medicine.category.includes('G-CSF') || medicine.category.includes('ESA') || medicine.category.includes('5-HT3')));

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Activity className="w-8 h-8" />
                <span className="text-lg font-semibold">Oncology Excellence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Cancer Care Medicines
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-95">
                Comprehensive oncology portfolio including immunotherapy, targeted therapy, and chemotherapy
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5" />
                  <span>WHO Essential Medicines</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Snowflake className="w-5 h-5" />
                  <span>Cold Chain Maintained</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Oncology Expertise</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* Search and Filter Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by medicine name, cancer type, or mechanism..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </button>
              </div>

              {showFilters && (
                <div className="mt-4 pt-4 border-t">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedFilter('all')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'all'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      All Medicines
                    </button>
                    <button
                      onClick={() => setSelectedFilter('immunotherapy')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'immunotherapy'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Immunotherapy
                    </button>
                    <button
                      onClick={() => setSelectedFilter('targeted')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'targeted'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Targeted Therapy
                    </button>
                    <button
                      onClick={() => setSelectedFilter('chemotherapy')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'chemotherapy'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Chemotherapy
                    </button>
                    <button
                      onClick={() => setSelectedFilter('supportive')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'supportive'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Supportive Care
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Medicine Grid */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredMedicines.length} of {cancerMedicines.length} medicines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedicines.map((medicine) => (
              <div
                key={medicine.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {medicine.genericName}
                    </h3>
                    {medicine.coldChain && (
                      <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        <Snowflake className="w-3 h-3" />
                        <span>Cold Chain</span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Brand:</span> {medicine.brandName}
                  </p>

                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Indication:</span> {medicine.indication}
                  </p>

                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Form:</span> {medicine.dosageForm}
                  </p>

                  <p className="text-xs text-gray-500 mb-4">
                    <span className="font-semibold">Category:</span> {medicine.category}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-primary">
                      {medicine.price || 'Price on Request'}
                    </p>
                  </div>

                  <Link
                    href="/upload-prescription"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group"
                  >
                    <span>Request Quote</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Oncology Support Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Comprehensive Oncology Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Patient Access Programs</h3>
                <p className="text-sm text-gray-600">Financial assistance and co-pay support for cancer patients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Oncology Pharmacists</h3>
                <p className="text-sm text-gray-600">Specialized support for dosing and side effect management</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Snowflake className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Cold Chain Excellence</h3>
                <p className="text-sm text-gray-600">Specialized handling for biologics and immunotherapies</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Oncology Medication Support?</h2>
            <p className="text-lg mb-6 opacity-95">
              Our oncology specialists provide comprehensive support for cancer patients and caregivers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/upload-prescription"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Upload Prescription
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Oncology Helpline
              </a>
            </div>
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="container mx-auto px-4 py-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Medical Disclaimer:</strong> Cancer medications require careful monitoring and administration by qualified oncology professionals. All treatments must be prescribed by licensed oncologists. Side effects should be reported immediately to your healthcare provider.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}