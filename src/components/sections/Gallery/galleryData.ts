// All gallery images organised by project/category
// Cloudinary URLs for built projects; local imports for architecture design renders

import kwvD1 from '../../../assets/KWV/Design/Image.webp'
import kwvD2 from '../../../assets/KWV/Design/Image_1.webp'
import kwvD3 from '../../../assets/KWV/Design/Image_2.webp'
import kwvD4 from '../../../assets/KWV/Design/5_1.webp'
import kwvD5 from '../../../assets/KWV/Design/8_1.webp'
import kwvD6 from '../../../assets/KWV/Design/Scene 23.webp'
import kwvD7 from '../../../assets/KWV/Design/Scene 24.webp'
import kwvD8 from '../../../assets/KWV/Design/Scene 25.webp'
import kwvD9 from '../../../assets/KWV/Design/Scene 26.webp'
import kwvD10 from '../../../assets/KWV/Design/Scene 27.webp'
import bscD1 from '../../../assets/Bambino/Design/Image.webp'
import bscD2 from '../../../assets/Bambino/Design/Image_1.webp'
import bscD3 from '../../../assets/Bambino/Design/Image_2.webp'
import bscD4 from '../../../assets/Bambino/Design/Image_3.webp'
import bscD5 from '../../../assets/Bambino/Design/Scene 1.webp'
import bscD6 from '../../../assets/Bambino/Design/Scene 5.webp'
import bscD7 from '../../../assets/Bambino/Design/Scene 6.webp'
import bscD8 from '../../../assets/Bambino/Design/Scene 7.webp'
import bscD9 from '../../../assets/Bambino/Design/Scene 9.webp'
import bscD10 from '../../../assets/Bambino/Design/Scene 10.webp'
import bscD11 from '../../../assets/Bambino/Design/Scene 11.webp'
import minak1 from '../../../assets/minakcafeedesign/Image_1.webp'
import minak2 from '../../../assets/minakcafeedesign/Scene 2.webp'
import minak3 from '../../../assets/minakcafeedesign/Scene 13.webp'
import minak4 from '../../../assets/minakcafeedesign/Scene 15.webp'
import minak5 from '../../../assets/minakcafeedesign/Scene 6.webp'
import minak6 from '../../../assets/minakcafeedesign/Scene 7.webp'
import minak7 from '../../../assets/minakcafeedesign/Scene 9.webp'

export type GalleryCategory = 'all' | 'kwv' | 'msa' | 'ncr' | 'bsc' | 'design'

export interface GalleryImage {
  src: string
  alt: string
  category: Exclude<GalleryCategory, 'all'>
}

export const KWV_IMAGES: GalleryImage[] = [
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059735/kn6_i4acxm.jpg', alt: 'Kinigi Women Village community space', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059735/k25_sqsup0.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059734/k24_h6owx4.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059734/k19_mw6qtp.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059733/k18_gr7a5p.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059733/k16_eejn1k.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059733/k15_z5pou1.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059732/k14_i1tlaw.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059731/k13_eztsbd.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059730/ki3_cqiq65.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059730/ki1_hqfkkf.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059729/k12_zrelab.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059729/k11_vqaza5.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059729/k10_ym5fwn.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059729/k9_iz4wy7.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059728/k7_a0wukb.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059728/k6_eqqwff.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059727/k3_iti3lp.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775059727/k2_qwfhm5.jpg', alt: 'Kinigi Women Village', category: 'kwv' },
]

export const MSA_IMAGES: GalleryImage[] = [
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775055889/m24_lw3rbz.jpg', alt: 'Masaka Sweet Apartment', category: 'msa' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775055888/m23_rtlkds.jpg', alt: 'Masaka Sweet Apartment', category: 'msa' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775055889/m21_jjog5m.jpg', alt: 'Masaka Sweet Apartment', category: 'msa' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775055888/m22_chn4b2.jpg', alt: 'Masaka Sweet Apartment', category: 'msa' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775055885/m20_tdgbcd.jpg', alt: 'Masaka Sweet Apartment', category: 'msa' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775055885/m18_uqcqgp.jpg', alt: 'Masaka Sweet Apartment', category: 'msa' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775055883/m14_hk5cxu.jpg', alt: 'Masaka Sweet Apartment', category: 'msa' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775055881/m11_vqqtmm.jpg', alt: 'Masaka Sweet Apartment', category: 'msa' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775055880/m10_wf8cr2.jpg', alt: 'Masaka Sweet Apartment', category: 'msa' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775055881/m7_qvsoqk.jpg', alt: 'Masaka Sweet Apartment', category: 'msa' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775055880/m5_amywur.jpg', alt: 'Masaka Sweet Apartment', category: 'msa' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775055878/m9_vvancn.jpg', alt: 'Masaka Sweet Apartment', category: 'msa' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775055877/m3_njwz3b.jpg', alt: 'Masaka Sweet Apartment', category: 'msa' },
]

export const NCR_IMAGES: GalleryImage[] = [
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775057763/n21_orllvq.png', alt: 'Noble Cheer Resort', category: 'ncr' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775057757/n10_ivdxmn.png', alt: 'Noble Cheer Resort', category: 'ncr' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775057756/n9_fcvi3r.png', alt: 'Noble Cheer Resort', category: 'ncr' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775057743/n6_upviec.png', alt: 'Noble Cheer Resort', category: 'ncr' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775057744/n5_ux7har.png', alt: 'Noble Cheer Resort', category: 'ncr' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775057751/n4_ye91e4.png', alt: 'Noble Cheer Resort', category: 'ncr' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775057749/n3_iiszhz.png', alt: 'Noble Cheer Resort', category: 'ncr' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775057752/n2_fafh2h.png', alt: 'Noble Cheer Resort', category: 'ncr' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775057751/n1_lmhigv.png', alt: 'Noble Cheer Resort', category: 'ncr' },
]

export const BSC_IMAGES: GalleryImage[] = [
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775058758/5_xbw0ct.jpg', alt: 'Bambino Super City', category: 'bsc' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775058758/B1_q4ht4p.jpg', alt: 'Bambino Super City', category: 'bsc' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775058758/B2_hkx5qq.jpg', alt: 'Bambino Super City', category: 'bsc' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775058759/B3_pmsnp3.jpg', alt: 'Bambino Super City', category: 'bsc' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775058759/B4_k7sh1f.jpg', alt: 'Bambino Super City', category: 'bsc' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775058759/B6_exunj0.jpg', alt: 'Bambino Super City', category: 'bsc' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775058759/B7_xa5lta.jpg', alt: 'Bambino Super City', category: 'bsc' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775058760/BD1_tn6xwb.jpg', alt: 'Bambino Super City design render', category: 'bsc' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775058760/BD2_s0egfa.jpg', alt: 'Bambino Super City design render', category: 'bsc' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775058761/BD3_dzs99a.jpg', alt: 'Bambino Super City design render', category: 'bsc' },
  { src: 'https://res.cloudinary.com/dsld1mtls/image/upload/v1775058761/BD4_runvy0.jpg', alt: 'Bambino Super City design render', category: 'bsc' },
]

export const DESIGN_IMAGES: GalleryImage[] = [
  { src: kwvD1, alt: 'Kinigi Women Village architecture render', category: 'design' },
  { src: kwvD2, alt: 'Kinigi Women Village architecture render', category: 'design' },
  { src: kwvD3, alt: 'Kinigi Women Village architecture render', category: 'design' },
  { src: kwvD4, alt: 'Kinigi Women Village architecture render', category: 'design' },
  { src: kwvD5, alt: 'Kinigi Women Village architecture render', category: 'design' },
  { src: kwvD6, alt: 'Kinigi Women Village architecture render', category: 'design' },
  { src: kwvD7, alt: 'Kinigi Women Village architecture render', category: 'design' },
  { src: kwvD8, alt: 'Kinigi Women Village architecture render', category: 'design' },
  { src: kwvD9, alt: 'Kinigi Women Village architecture render', category: 'design' },
  { src: kwvD10, alt: 'Kinigi Women Village architecture render', category: 'design' },
  { src: bscD1, alt: 'Bambino Super City architecture render', category: 'design' },
  { src: bscD2, alt: 'Bambino Super City architecture render', category: 'design' },
  { src: bscD3, alt: 'Bambino Super City architecture render', category: 'design' },
  { src: bscD4, alt: 'Bambino Super City architecture render', category: 'design' },
  { src: bscD5, alt: 'Bambino Super City architecture render', category: 'design' },
  { src: bscD6, alt: 'Bambino Super City architecture render', category: 'design' },
  { src: bscD7, alt: 'Bambino Super City architecture render', category: 'design' },
  { src: bscD8, alt: 'Bambino Super City architecture render', category: 'design' },
  { src: bscD9, alt: 'Bambino Super City architecture render', category: 'design' },
  { src: bscD10, alt: 'Bambino Super City architecture render', category: 'design' },
  { src: bscD11, alt: 'Bambino Super City architecture render', category: 'design' },
  { src: minak1, alt: 'Minak Cafe architecture render', category: 'design' },
  { src: minak2, alt: 'Minak Cafe architecture render', category: 'design' },
  { src: minak3, alt: 'Minak Cafe architecture render', category: 'design' },
  { src: minak4, alt: 'Minak Cafe architecture render', category: 'design' },
  { src: minak5, alt: 'Minak Cafe architecture render', category: 'design' },
  { src: minak6, alt: 'Minak Cafe architecture render', category: 'design' },
  { src: minak7, alt: 'Minak Cafe architecture render', category: 'design' },
]

export const ALL_IMAGES: GalleryImage[] = [
  ...KWV_IMAGES,
  ...MSA_IMAGES,
  ...NCR_IMAGES,
  ...BSC_IMAGES,
  ...DESIGN_IMAGES,
]

export const CATEGORY_MAP: Record<GalleryCategory, GalleryImage[]> = {
  all: ALL_IMAGES,
  kwv: KWV_IMAGES,
  msa: MSA_IMAGES,
  ncr: NCR_IMAGES,
  bsc: BSC_IMAGES,
  design: DESIGN_IMAGES,
}
