'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Filter, Shield, Snowflake, Phone, ChevronRight } from 'lucide-react';

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

const rheumatologyMedicines: Medicine[] = [
  {
    id: 'rheum-001',
    genericName: 'Adalimumab',
    brandName: 'Humira / Exemptia / Mabura',
    indication: 'Rheumatoid Arthritis, Psoriatic Arthritis, Ankylosing Spondylitis',
    dosageForm: 'Subcutaneous Injection 40mg',
    coldChain: true,
    category: 'Anti-TNF Biologic'
  },
  {
    id: 'rheum-002',
    genericName: 'Etanercept',
    brandName: 'Enbrel / Etacept / Intacept',
    indication: 'Rheumatoid Arthritis, Juvenile Idiopathic Arthritis',
    dosageForm: 'Subcutaneous Injection 25mg/50mg',
    coldChain: true,
    category: 'Anti-TNF Fusion Protein'
  },
  {
    id: 'rheum-003',
    genericName: 'Infliximab',
    brandName: 'Remicade / Infimab / Remsima',
    indication: 'Rheumatoid Arthritis, Psoriatic Arthritis, Crohn\'s Disease',
    dosageForm: 'IV Infusion 100mg',
    coldChain: true,
    category: 'Anti-TNF Therapy'
  },
  {
    id: 'rheum-004',
    genericName: 'Tocilizumab',
    brandName: 'Actemra / Tociliz / Macitentan',
    indication: 'Rheumatoid Arthritis, Giant Cell Arteritis',
    dosageForm: 'IV Infusion / SC Injection',
    coldChain: true,
    category: 'Anti-IL-6 Therapy'
  },
  {
    id: 'rheum-005',
    genericName: 'Rituximab',
    brandName: 'MabThera / Ristova / Maball',
    indication: 'Rheumatoid Arthritis, Vasculitis',
    dosageForm: 'IV Infusion 100mg/500mg',
    coldChain: true,
    category: 'Anti-B Cell Therapy'
  },
  {
    id: 'rheum-006',
    genericName: 'Abatacept',
    brandName: 'Orencia / Ciplecel',
    indication: 'Rheumatoid Arthritis, Psoriatic Arthritis',
    dosageForm: 'IV Infusion / SC Injection',
    coldChain: true,
    category: 'T-cell Costimulation Blocker'
  },
  {
    id: 'rheum-007',
    genericName: 'Golimumab',
    brandName: 'Simponi',
    indication: 'Rheumatoid Arthritis, Ankylosing Spondylitis',
    dosageForm: 'Subcutaneous Injection 50mg',
    coldChain: true,
    category: 'Anti-TNF Injectable'
  },
  {
    id: 'rheum-008',
    genericName: 'Methotrexate',
    brandName: 'Folitrax / Biotrexate',
    indication: 'Rheumatoid Arthritis, Psoriatic Arthritis',
    dosageForm: 'Tablet 2.5mg/7.5mg/10mg / Injection',
    price: '₹150 - ₹800',
    category: 'Conventional DMARD'
  },
  {
    id: 'rheum-009',
    genericName: 'Leflunomide',
    brandName: 'Arava / Lefno / Lefumide',
    indication: 'Rheumatoid Arthritis, Psoriatic Arthritis',
    dosageForm: 'Tablet 10mg/20mg',
    price: '₹400 - ₹1,200',
    category: 'Oral DMARD'
  },
  {
    id: 'rheum-010',
    genericName: 'Sulfasalazine',
    brandName: 'Saaz / Salazar',
    indication: 'Rheumatoid Arthritis, Ankylosing Spondylitis',
    dosageForm: 'Tablet 500mg',
    price: '₹200 - ₹600',
    category: 'Oral DMARD'
  },
  {
    id: 'rheum-011',
    genericName: 'Tofacitinib',
    brandName: 'Xeljanz / Tofacinix',
    indication: 'Rheumatoid Arthritis, Psoriatic Arthritis',
    dosageForm: 'Tablet 5mg/11mg',
    category: 'JAK Inhibitor'
  },
  {
    id: 'rheum-012',
    genericName: 'Baricitinib',
    brandName: 'Olumiant / Baricinix',
    indication: 'Rheumatoid Arthritis',
    dosageForm: 'Tablet 2mg/4mg',
    category: 'JAK Inhibitor'
  },
  {
    id: 'rheum-013',
    genericName: 'Upadacitinib',
    brandName: 'Rinvoq',
    indication: 'Rheumatoid Arthritis, Psoriatic Arthritis',
    dosageForm: 'Tablet 15mg/30mg',
    category: 'JAK Inhibitor'
  },
  {
    id: 'rheum-014',
    genericName: 'Secukinumab',
    brandName: 'Cosentyx / Scapho',
    indication: 'Psoriatic Arthritis, Ankylosing Spondylitis',
    dosageForm: 'SC Injection 150mg',
    coldChain: true,
    category: 'Anti-IL-17A'
  },
  {
    id: 'rheum-015',
    genericName: 'Ixekizumab',
    brandName: 'Taltz',
    indication: 'Psoriatic Arthritis, Ankylosing Spondylitis',
    dosageForm: 'SC Injection 80mg',
    coldChain: true,
    category: 'Anti-IL-17A'
  },
  {
    id: 'rheum-016',
    genericName: 'Certolizumab pegol',
    brandName: 'Cimzia',
    indication: 'Rheumatoid Arthritis, Psoriatic Arthritis',
    dosageForm: 'SC Injection 200mg',
    coldChain: true,
    category: 'Anti-TNF'
  },
  {
    id: 'rheum-017',
    genericName: 'Sarilumab',
    brandName: 'Kevzara',
    indication: 'Rheumatoid Arthritis',
    dosageForm: 'SC Injection 150mg/200mg',
    coldChain: true,
    category: 'Anti-IL-6'
  },
  {
    id: 'rheum-018',
    genericName: 'Hydroxychloroquine',
    brandName: 'HCQS / Plaquenil',
    indication: 'Rheumatoid Arthritis, Lupus',
    dosageForm: 'Tablet 200mg/400mg',
    price: '₹100 - ₹300',
    category: 'Antimalarial DMARD'
  },
  {
    id: 'rheum-019',
    genericName: 'Azathioprine',
    brandName: 'Imuran / Azoran',
    indication: 'Rheumatoid Arthritis, Lupus',
    dosageForm: 'Tablet 50mg',
    price: '₹150 - ₹400',
    category: 'Immunosuppressant'
  },
  {
    id: 'rheum-020',
    genericName: 'Cyclosporine',
    brandName: 'Sandimmun / Panimun',
    indication: 'Rheumatoid Arthritis, Psoriatic Arthritis',
    dosageForm: 'Capsule 25mg/50mg/100mg',
    price: '₹500 - ₹2,000',
    category: 'Immunosuppressant'
  },
  {
    id: 'rheum-021',
    genericName: 'Mycophenolate mofetil',
    brandName: 'Cellcept / Mycept',
    indication: 'Lupus, Vasculitis',
    dosageForm: 'Tablet 250mg/500mg',
    price: '₹400 - ₹1,500',
    category: 'Immunosuppressant'
  },
  {
    id: 'rheum-022',
    genericName: 'Belimumab',
    brandName: 'Benlysta',
    indication: 'Systemic Lupus Erythematosus',
    dosageForm: 'IV Infusion / SC Injection',
    coldChain: true,
    category: 'Anti-BLyS'
  },
  {
    id: 'rheum-023',
    genericName: 'Anakinra',
    brandName: 'Kineret',
    indication: 'Rheumatoid Arthritis, CAPS',
    dosageForm: 'SC Injection 100mg',
    coldChain: true,
    category: 'IL-1 Antagonist'
  },
  {
    id: 'rheum-024',
    genericName: 'Canakinumab',
    brandName: 'Ilaris',
    indication: 'CAPS, Systemic JIA',
    dosageForm: 'SC Injection 150mg',
    coldChain: true,
    category: 'Anti-IL-1β'
  },
  {
    id: 'rheum-025',
    genericName: 'Apremilast',
    brandName: 'Otezla / Aprezo',
    indication: 'Psoriatic Arthritis',
    dosageForm: 'Tablet 30mg',
    category: 'PDE4 Inhibitor'
  },
  {
    id: 'rheum-026',
    genericName: 'Denosumab',
    brandName: 'Prolia',
    indication: 'Osteoporosis in RA patients',
    dosageForm: 'SC Injection 60mg',
    coldChain: true,
    category: 'RANK Ligand Inhibitor'
  },
  {
    id: 'rheum-027',
    genericName: 'Teriparatide',
    brandName: 'Forteo',
    indication: 'Severe Osteoporosis',
    dosageForm: 'SC Injection 20mcg',
    coldChain: true,
    category: 'PTH Analog'
  },
  {
    id: 'rheum-028',
    genericName: 'Zoledronic acid',
    brandName: 'Aclasta / Zometa',
    indication: 'Osteoporosis, Paget\'s Disease',
    dosageForm: 'IV Infusion 5mg',
    category: 'Bisphosphonate'
  },
  {
    id: 'rheum-029',
    genericName: 'Allopurinol',
    brandName: 'Zyloric / Zyrik',
    indication: 'Gout, Hyperuricemia',
    dosageForm: 'Tablet 100mg/300mg',
    price: '₹50 - ₹200',
    category: 'Xanthine Oxidase Inhibitor'
  },
  {
    id: 'rheum-030',
    genericName: 'Febuxostat',
    brandName: 'Febuget / Uloric',
    indication: 'Gout, Hyperuricemia',
    dosageForm: 'Tablet 40mg/80mg',
    price: '₹200 - ₹600',
    category: 'Xanthine Oxidase Inhibitor'
  },
  {
    id: 'rheum-031',
    genericName: 'Colchicine',
    brandName: 'Colchicindon / Goutnil',
    indication: 'Acute Gout, FMF',
    dosageForm: 'Tablet 0.5mg',
    price: '₹100 - ₹300',
    category: 'Anti-inflammatory'
  },
  {
    id: 'rheum-032',
    genericName: 'Probenecid',
    brandName: 'Bencid',
    indication: 'Chronic Gout',
    dosageForm: 'Tablet 500mg',
    category: 'Uricosuric Agent'
  },
  {
    id: 'rheum-033',
    genericName: 'Pegloticase',
    brandName: 'Krystexxa',
    indication: 'Refractory Gout',
    dosageForm: 'IV Infusion 8mg',
    coldChain: true,
    category: 'Uricase'
  },
  {
    id: 'rheum-034',
    genericName: 'Prednisolone',
    brandName: 'Wysolone / Omnacortil',
    indication: 'Various Rheumatic Conditions',
    dosageForm: 'Tablet 5mg/10mg/20mg',
    price: '₹50 - ₹200',
    category: 'Corticosteroid'
  },
  {
    id: 'rheum-035',
    genericName: 'Methylprednisolone',
    brandName: 'Medrol / Solu-Medrol',
    indication: 'Acute Flares, Pulse Therapy',
    dosageForm: 'Tablet/IV Injection',
    price: '₹100 - ₹500',
    category: 'Corticosteroid'
  },
  {
    id: 'rheum-036',
    genericName: 'Deflazacort',
    brandName: 'Defcort / Decort',
    indication: 'Various Inflammatory Conditions',
    dosageForm: 'Tablet 6mg/30mg',
    price: '₹150 - ₹400',
    category: 'Corticosteroid'
  },
  {
    id: 'rheum-037',
    genericName: 'Triamcinolone',
    brandName: 'Kenacort',
    indication: 'Intra-articular Injection',
    dosageForm: 'Injection 10mg/40mg',
    price: '₹200 - ₹600',
    category: 'Corticosteroid'
  },
  {
    id: 'rheum-038',
    genericName: 'Diclofenac',
    brandName: 'Voveran / Voltaren',
    indication: 'Pain and Inflammation',
    dosageForm: 'Tablet/Gel/Injection',
    price: '₹50 - ₹200',
    category: 'NSAID'
  },
  {
    id: 'rheum-039',
    genericName: 'Etoricoxib',
    brandName: 'Arcoxia / Nucoxia',
    indication: 'Arthritis Pain',
    dosageForm: 'Tablet 60mg/90mg/120mg',
    price: '₹100 - ₹300',
    category: 'COX-2 Inhibitor'
  },
  {
    id: 'rheum-040',
    genericName: 'Celecoxib',
    brandName: 'Celebrex / Celact',
    indication: 'Arthritis Pain',
    dosageForm: 'Capsule 100mg/200mg',
    price: '₹150 - ₹400',
    category: 'COX-2 Inhibitor'
  },
  {
    id: 'rheum-041',
    genericName: 'Naproxen',
    brandName: 'Naprosyn / Naxdom',
    indication: 'Pain and Inflammation',
    dosageForm: 'Tablet 250mg/500mg',
    price: '₹100 - ₹250',
    category: 'NSAID'
  },
  {
    id: 'rheum-042',
    genericName: 'Indomethacin',
    brandName: 'Indocin / Indocap',
    indication: 'Ankylosing Spondylitis',
    dosageForm: 'Capsule 25mg/50mg',
    price: '₹80 - ₹200',
    category: 'NSAID'
  },
  {
    id: 'rheum-043',
    genericName: 'Piroxicam',
    brandName: 'Dolonex / Pirox',
    indication: 'Arthritis Pain',
    dosageForm: 'Tablet/Gel 20mg',
    price: '₹60 - ₹180',
    category: 'NSAID'
  },
  {
    id: 'rheum-044',
    genericName: 'Tramadol',
    brandName: 'Ultram / Tramacet',
    indication: 'Moderate to Severe Pain',
    dosageForm: 'Tablet 50mg/100mg',
    price: '₹100 - ₹300',
    category: 'Analgesic'
  },
  {
    id: 'rheum-045',
    genericName: 'Pregabalin',
    brandName: 'Lyrica / Pregabid',
    indication: 'Neuropathic Pain',
    dosageForm: 'Capsule 75mg/150mg',
    price: '₹200 - ₹600',
    category: 'Neuropathic Pain'
  },
  {
    id: 'rheum-046',
    genericName: 'Gabapentin',
    brandName: 'Neurontin / Gabapin',
    indication: 'Neuropathic Pain',
    dosageForm: 'Capsule 100mg/300mg',
    price: '₹150 - ₹400',
    category: 'Neuropathic Pain'
  },
  {
    id: 'rheum-047',
    genericName: 'Duloxetine',
    brandName: 'Cymbalta / Duvanta',
    indication: 'Chronic Pain, Fibromyalgia',
    dosageForm: 'Capsule 20mg/30mg/60mg',
    price: '₹200 - ₹500',
    category: 'SNRI'
  },
  {
    id: 'rheum-048',
    genericName: 'Amitriptyline',
    brandName: 'Tryptomer / Amitone',
    indication: 'Chronic Pain, Fibromyalgia',
    dosageForm: 'Tablet 10mg/25mg',
    price: '₹50 - ₹150',
    category: 'TCA'
  },
  {
    id: 'rheum-049',
    genericName: 'Calcium carbonate',
    brandName: 'Shelcal / Calcimax',
    indication: 'Calcium Supplementation',
    dosageForm: 'Tablet 500mg',
    price: '₹100 - ₹300',
    category: 'Supplement'
  },
  {
    id: 'rheum-050',
    genericName: 'Vitamin D3',
    brandName: 'Uprise D3 / Calcirol',
    indication: 'Vitamin D Deficiency',
    dosageForm: 'Sachet/Capsule 60000 IU',
    price: '₹50 - ₹200',
    category: 'Supplement'
  },
  {
    id: 'rheum-051',
    genericName: 'Folic acid',
    brandName: 'Folvite',
    indication: 'MTX Supplementation',
    dosageForm: 'Tablet 5mg',
    price: '₹30 - ₹100',
    category: 'Supplement'
  },
  {
    id: 'rheum-052',
    genericName: 'Omega-3 fatty acids',
    brandName: 'Maxepa / Seven Seas',
    indication: 'Anti-inflammatory Support',
    dosageForm: 'Capsule 1000mg',
    price: '₹200 - ₹500',
    category: 'Supplement'
  },
  {
    id: 'rheum-053',
    genericName: 'Glucosamine sulfate',
    brandName: 'Jointace / Cartigen',
    indication: 'Osteoarthritis',
    dosageForm: 'Tablet 750mg/1500mg',
    price: '₹300 - ₹800',
    category: 'Supplement'
  },
  {
    id: 'rheum-054',
    genericName: 'Chondroitin sulfate',
    brandName: 'Chondron',
    indication: 'Osteoarthritis',
    dosageForm: 'Tablet 400mg',
    price: '₹400 - ₹900',
    category: 'Supplement'
  },
  {
    id: 'rheum-055',
    genericName: 'Hyaluronic acid',
    brandName: 'Synvisc / Hyalgan',
    indication: 'Knee Osteoarthritis',
    dosageForm: 'Intra-articular Injection',
    coldChain: true,
    category: 'Viscosupplementation'
  },
  {
    id: 'rheum-056',
    genericName: 'Diacerein',
    brandName: 'Artho-D / Diarin',
    indication: 'Osteoarthritis',
    dosageForm: 'Capsule 50mg',
    price: '₹300 - ₹700',
    category: 'IL-1 Inhibitor'
  },
  {
    id: 'rheum-057',
    genericName: 'Avocado soybean unsaponifiables',
    brandName: 'Piascledine',
    indication: 'Osteoarthritis',
    dosageForm: 'Capsule 300mg',
    price: '₹500 - ₹1,000',
    category: 'Nutraceutical'
  },
  {
    id: 'rheum-058',
    genericName: 'Boswellia serrata',
    brandName: 'Shallaki',
    indication: 'Osteoarthritis',
    dosageForm: 'Tablet 400mg',
    price: '₹200 - ₹500',
    category: 'Herbal'
  },
  {
    id: 'rheum-059',
    genericName: 'Curcumin',
    brandName: 'Curcumin C3',
    indication: 'Anti-inflammatory',
    dosageForm: 'Capsule 500mg',
    price: '₹300 - ₹600',
    category: 'Herbal'
  },
  {
    id: 'rheum-060',
    genericName: 'Capsaicin',
    brandName: 'Zostrix',
    indication: 'Topical Pain Relief',
    dosageForm: 'Cream 0.025%/0.075%',
    price: '₹200 - ₹400',
    category: 'Topical'
  },
  {
    id: 'rheum-061',
    genericName: 'Methyl salicylate',
    brandName: 'Volini / Moov',
    indication: 'Topical Pain Relief',
    dosageForm: 'Gel/Spray',
    price: '₹100 - ₹250',
    category: 'Topical'
  },
  {
    id: 'rheum-062',
    genericName: 'Lidocaine patch',
    brandName: 'Lidoderm',
    indication: 'Localized Pain',
    dosageForm: 'Transdermal Patch 5%',
    price: '₹300 - ₹700',
    category: 'Topical'
  },
  {
    id: 'rheum-063',
    genericName: 'Ketoprofen gel',
    brandName: 'Fastum',
    indication: 'Topical Anti-inflammatory',
    dosageForm: 'Gel 2.5%',
    price: '₹150 - ₹350',
    category: 'Topical'
  },
  {
    id: 'rheum-064',
    genericName: 'Ibuprofen gel',
    brandName: 'Brufen gel',
    indication: 'Topical Pain Relief',
    dosageForm: 'Gel 5%',
    price: '₹100 - ₹250',
    category: 'Topical'
  },
  {
    id: 'rheum-065',
    genericName: 'Nimesulide',
    brandName: 'Nimulid / Nice',
    indication: 'Pain and Inflammation',
    dosageForm: 'Tablet 100mg',
    price: '₹50 - ₹150',
    category: 'NSAID'
  },
  {
    id: 'rheum-066',
    genericName: 'Aceclofenac',
    brandName: 'Zerodol / Acenac',
    indication: 'Arthritis Pain',
    dosageForm: 'Tablet 100mg',
    price: '₹80 - ₹200',
    category: 'NSAID'
  },
  {
    id: 'rheum-067',
    genericName: 'Lornoxicam',
    brandName: 'Lornasafe / Flexilor',
    indication: 'Acute Pain',
    dosageForm: 'Tablet 4mg/8mg',
    price: '₹100 - ₹250',
    category: 'NSAID'
  },
  {
    id: 'rheum-068',
    genericName: 'Dexketoprofen',
    brandName: 'Symtral',
    indication: 'Acute Pain',
    dosageForm: 'Tablet 25mg',
    price: '₹120 - ₹280',
    category: 'NSAID'
  },
  {
    id: 'rheum-069',
    genericName: 'Tenoxicam',
    brandName: 'Tobitil / Tenoxa',
    indication: 'Arthritis Pain',
    dosageForm: 'Tablet 20mg',
    price: '₹100 - ₹250',
    category: 'NSAID'
  },
  {
    id: 'rheum-070',
    genericName: 'Meloxicam',
    brandName: 'Muvera / Melflam',
    indication: 'Arthritis Pain',
    dosageForm: 'Tablet 7.5mg/15mg',
    price: '₹80 - ₹200',
    category: 'NSAID'
  },
  {
    id: 'rheum-071',
    genericName: 'Paracetamol',
    brandName: 'Crocin / Calpol',
    indication: 'Mild Pain, Fever',
    dosageForm: 'Tablet 500mg/650mg',
    price: '₹30 - ₹100',
    category: 'Analgesic'
  },
  {
    id: 'rheum-072',
    genericName: 'Aspirin',
    brandName: 'Ecosprin / Disprin',
    indication: 'Anti-inflammatory, Antiplatelet',
    dosageForm: 'Tablet 75mg/150mg',
    price: '₹30 - ₹100',
    category: 'NSAID'
  },
  {
    id: 'rheum-073',
    genericName: 'Chloroquine',
    brandName: 'Lariago / Resochin',
    indication: 'Lupus, RA',
    dosageForm: 'Tablet 250mg',
    price: '₹80 - ₹200',
    category: 'Antimalarial'
  },
  {
    id: 'rheum-074',
    genericName: 'Cyclophosphamide',
    brandName: 'Endoxan / Cytoxan',
    indication: 'Severe Lupus, Vasculitis',
    dosageForm: 'Injection 500mg/1g',
    price: '₹200 - ₹800',
    category: 'Alkylating Agent'
  },
  {
    id: 'rheum-075',
    genericName: 'Tacrolimus',
    brandName: 'Prograf / Pangraf',
    indication: 'Lupus Nephritis',
    dosageForm: 'Capsule 0.5mg/1mg',
    price: '₹500 - ₹1,500',
    category: 'Calcineurin Inhibitor'
  },
  {
    id: 'rheum-076',
    genericName: 'Sirolimus',
    brandName: 'Rapamune',
    indication: 'Lupus Nephritis',
    dosageForm: 'Tablet 1mg',
    price: '₹800 - ₹2,000',
    category: 'mTOR Inhibitor'
  },
  {
    id: 'rheum-077',
    genericName: 'Intravenous Immunoglobulin',
    brandName: 'IVIg / Privigen',
    indication: 'Autoimmune Conditions',
    dosageForm: 'IV Infusion',
    coldChain: true,
    category: 'Immunoglobulin'
  },
  {
    id: 'rheum-078',
    genericName: 'Plasma Exchange',
    brandName: 'Plasmapheresis',
    indication: 'Severe Vasculitis',
    dosageForm: 'Procedure',
    category: 'Procedure'
  },
  {
    id: 'rheum-079',
    genericName: 'Risedronate',
    brandName: 'Actonel / Risofos',
    indication: 'Osteoporosis',
    dosageForm: 'Tablet 35mg weekly',
    price: '₹300 - ₹700',
    category: 'Bisphosphonate'
  },
  {
    id: 'rheum-080',
    genericName: 'Alendronate',
    brandName: 'Fosamax / Osteofos',
    indication: 'Osteoporosis',
    dosageForm: 'Tablet 70mg weekly',
    price: '₹200 - ₹500',
    category: 'Bisphosphonate'
  },
  {
    id: 'rheum-081',
    genericName: 'Ibandronate',
    brandName: 'Boniva / Bondria',
    indication: 'Osteoporosis',
    dosageForm: 'Tablet 150mg monthly',
    price: '₹500 - ₹1,200',
    category: 'Bisphosphonate'
  },
  {
    id: 'rheum-082',
    genericName: 'Raloxifene',
    brandName: 'Evista / Ralista',
    indication: 'Postmenopausal Osteoporosis',
    dosageForm: 'Tablet 60mg',
    price: '₹300 - ₹700',
    category: 'SERM'
  },
  {
    id: 'rheum-083',
    genericName: 'Strontium ranelate',
    brandName: 'Protelos',
    indication: 'Osteoporosis',
    dosageForm: 'Sachet 2g',
    price: '₹800 - ₹1,500',
    category: 'Bone Formation'
  },
  {
    id: 'rheum-084',
    genericName: 'Romosozumab',
    brandName: 'Evenity',
    indication: 'Severe Osteoporosis',
    dosageForm: 'SC Injection',
    coldChain: true,
    category: 'Sclerostin Inhibitor'
  },
  {
    id: 'rheum-085',
    genericName: 'Abaloparatide',
    brandName: 'Tymlos',
    indication: 'Osteoporosis',
    dosageForm: 'SC Injection',
    coldChain: true,
    category: 'PTH Analog'
  }
];

export default function RheumatologyPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredMedicines = rheumatologyMedicines.filter(medicine => {
    const matchesSearch =
      medicine.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.indication.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      selectedFilter === 'all' ||
      (selectedFilter === 'biologics' && medicine.coldChain) ||
      (selectedFilter === 'oral' && medicine.dosageForm.toLowerCase().includes('tablet')) ||
      (selectedFilter === 'injectable' && (medicine.dosageForm.toLowerCase().includes('injection') || medicine.dosageForm.toLowerCase().includes('infusion')));

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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Rheumatology Medicines
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-95">
                Comprehensive range of biologics, DMARDs, and specialty medications for rheumatic conditions
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5" />
                  <span>100% Authentic</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Snowflake className="w-5 h-5" />
                  <span>Cold Chain Maintained</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Phone className="w-5 h-5" />
                  <span>Expert Support</span>
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
                    placeholder="Search by medicine name, brand, or condition..."
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
                      onClick={() => setSelectedFilter('biologics')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'biologics'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Biologics
                    </button>
                    <button
                      onClick={() => setSelectedFilter('oral')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'oral'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Oral Medications
                    </button>
                    <button
                      onClick={() => setSelectedFilter('injectable')}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedFilter === 'injectable'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Injectables
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
              Showing {filteredMedicines.length} of {rheumatologyMedicines.length} medicines
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

                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-semibold">Form:</span> {medicine.dosageForm}
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

        {/* Trust Indicators */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Why Choose Medshood for Rheumatology Medicines?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">100% Authentic</h3>
                <p className="text-sm text-gray-600">Direct sourcing from authorized distributors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Snowflake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Cold Chain Excellence</h3>
                <p className="text-sm text-gray-600">Temperature-controlled storage and delivery for biologics</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Expert Support</h3>
                <p className="text-sm text-gray-600">Dedicated pharmacists for dosage and administration guidance</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Finding Your Medicine?</h2>
            <p className="text-lg mb-6 opacity-95">
              Our expert pharmacists are here to assist you with your rheumatology medication needs
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
                Call for Assistance
              </a>
            </div>
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="container mx-auto px-4 py-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Medical Disclaimer:</strong> This information is for educational purposes only. Always consult with a qualified healthcare provider for medical advice and treatment. Prescription medicines require valid prescriptions from licensed physicians.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}