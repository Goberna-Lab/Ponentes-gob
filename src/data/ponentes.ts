import robertoBazan from '../assets/ponentes/roberto-bazan.png'
import eduardoDeLaTorre from '../assets/ponentes/eduardo-de-la-torre.png'
import nunoRodriguez from '../assets/ponentes/nuno-rodriguez.png'
import franciscoLopez from '../assets/ponentes/francisco-lopez.png'
import dianaPereira from '../assets/ponentes/diana-pereira.png'
import mariaHerrera from '../assets/ponentes/maria-herrera.png'
import gonzaloCatanzariti from '../assets/ponentes/gonzalo-catanzariti.png'
import eduardoVelandiaBecerra from '../assets/ponentes/eduardo-velandia-becerra.png'
import andresPenaranda from '../assets/ponentes/andres-penaranda.png'
import danielaGalvan from '../assets/ponentes/daniela-galvan.png'
import diegoMiranda from '../assets/ponentes/diego-miranda.png'
import omarChehade from '../assets/ponentes/omar-chehade.png'
import cristianoLamas from '../assets/ponentes/cristiano-lamas.png'
import mauricioGarcia from '../assets/ponentes/mauricio-garcia.png'
import rafaelAusejo from '../assets/ponentes/rafael-ausejo.png'
import camiloBello from '../assets/ponentes/camilo-bello.png'
import ronielAledo from '../assets/ponentes/roniel-aledo.png'
import juanDeDiosParamo from '../assets/ponentes/juan-de-dios-paramo.png'
import jobAntonioMeneses from '../assets/ponentes/job-antonio-meneses.png'
import fernandoCocho from '../assets/ponentes/fernando-cocho.png'

/**
 * Recorte de la foto tal como está en Figma: una caja de `width`×`height` px
 * anclada abajo y centrada (desplazada `offsetX` px) dentro de la figura de
 * 330×440, con la imagen posicionada en porcentajes dentro de esa caja.
 */
export type PhotoCrop = {
  width: number
  height: number
  offsetX: number
  flipX: boolean
  /** top, left, width, height de la imagen en % de la caja */
  img: [number, number, number, number]
}

export type Ponente = {
  slug: string
  /** Perfil del ponente en grupogoberna.com */
  url: string
  name: string
  specialty: string
  photo: string
  crop: PhotoCrop
}

export const ponentes: Ponente[] = [
  {
    slug: 'roberto-bazan',
    url: 'https://grupogoberna.com/roberto-bazan/',
    name: 'Roberto Bazán',
    specialty: 'Especialista en inteligencia estratégica y operaciones psicológicas',
    photo: robertoBazan,
    crop: { width: 359, height: 440, offsetX: 0.5, flipX: false, img: [-47.08, -36.4, 168.7, 166.85] },
  },
  {
    slug: 'eduardo-de-la-torre',
    url: 'https://grupogoberna.com/eduardo-de-la-torre/',
    name: 'Eduardo de la Torre',
    specialty: 'Especialista en ciberseguridad, inteligencia y análisis estratégico',
    photo: eduardoDeLaTorre,
    crop: { width: 783, height: 749, offsetX: 0.5, flipX: true, img: [36.91, 18.65, 64.98, 81.51] },
  },
  {
    slug: 'nuno-rodriguez',
    url: 'https://grupogoberna.com/nuno-rodriguez/',
    name: 'Nuño Rodríguez',
    specialty: 'Especialista en análisis político, OSINT y comunicación estratégica',
    photo: nunoRodriguez,
    crop: { width: 398, height: 408, offsetX: -22, flipX: true, img: [-10.36, -9.82, 108.11, 126.78] },
  },
  {
    slug: 'francisco-lopez',
    url: 'https://grupogoberna.com/francisco-lopez/',
    name: 'Francisco López',
    specialty: 'Especialista en dirección de seguridad, crimonogía y prevención del crimen',
    photo: franciscoLopez,
    crop: { width: 773, height: 749, offsetX: 0.5, flipX: false, img: [38.31, 21.4, 59.41, 73.57] },
  },
  {
    slug: 'diana-pereira',
    url: 'https://grupogoberna.com/diana-pereira/',
    name: 'Diana Pereira',
    specialty: 'Especialista en gobierno, relaciones internacionales y gestión de crisis',
    photo: dianaPereira,
    crop: { width: 456, height: 413, offsetX: -39, flipX: false, img: [-12.59, -14.13, 136.24, 150.61] },
  },
  {
    slug: 'maria-herrera',
    url: 'https://grupogoberna.com/maria-herrera/',
    name: 'Maria Herrera',
    specialty: 'Consultora política y especialista en seguridad, geopolítica y contraterrorismo',
    photo: mariaHerrera,
    crop: { width: 368, height: 408, offsetX: 0, flipX: true, img: [-19.78, -14.17, 130.72, 167.82] },
  },
  {
    slug: 'gonzalo-catanzariti',
    url: 'https://grupogoberna.com/gonzalo-catanzariti/',
    name: 'Gonzalo Catanzariti',
    specialty: 'Especialista en ciberinteligencia e investigación digital',
    photo: gonzaloCatanzariti,
    crop: { width: 330, height: 440, offsetX: 0, flipX: true, img: [3.57, 0, 100, 99.78] },
  },
  {
    slug: 'eduardo-velandia-becerra',
    url: 'https://grupogoberna.com/eduardo-velandia/',
    name: 'Eduardo Velandia Becerra',
    specialty: 'Especialista en inteligencia, seguridad y conducción de equipos',
    photo: eduardoVelandiaBecerra,
    crop: { width: 423, height: 408, offsetX: 0.5, flipX: true, img: [-18.81, 2.75, 95.53, 134] },
  },
  {
    slug: 'andres-penaranda',
    url: 'https://grupogoberna.com/andres-penaranda/',
    name: 'Andrés Peñaranda',
    specialty: 'Especialista en operaciones de información y seguridad estratégica',
    photo: andresPenaranda,
    crop: { width: 792, height: 749, offsetX: 0, flipX: false, img: [41.26, 25.42, 53.35, 67.69] },
  },
  {
    slug: 'daniela-galvan',
    url: 'https://grupogoberna.com/daniela-galvan/',
    name: 'Daniela Galván',
    specialty: 'Especialista en investigación criminal e inteligencia digital',
    photo: danielaGalvan,
    crop: { width: 393, height: 408, offsetX: 0.5, flipX: false, img: [-16.91, -19.66, 129.22, 149.26] },
  },
  {
    slug: 'diego-miranda',
    url: 'https://grupogoberna.com/diego-miranda-2/',
    name: 'Diego Miranda',
    specialty: 'Experto en inteligencia, contrainteligencia y seguridad estratégica',
    photo: diegoMiranda,
    crop: { width: 468, height: 440, offsetX: 0, flipX: false, img: [3.86, 0.06, 104.79, 140.45] },
  },
  {
    slug: 'omar-chehade',
    url: 'https://grupogoberna.com/omar-chehade/',
    name: 'Omar Chehade',
    specialty: 'Especialista en derecho, gobernabilidad y relaciones parlamentarias',
    photo: omarChehade,
    crop: { width: 336, height: 408, offsetX: 0, flipX: false, img: [0, -3.57, 107.06, 100] },
  },
  {
    slug: 'cristiano-lamas',
    url: 'https://grupogoberna.com/cristiano-lamas/',
    name: 'Cristiano Lamas',
    specialty: 'Especialista en discurso político y estrategia parlamentaria',
    photo: cristianoLamas,
    crop: { width: 412, height: 440, offsetX: 0, flipX: true, img: [-5.15, -28.53, 154.33, 144.24] },
  },
  {
    slug: 'mauricio-garcia',
    url: 'https://grupogoberna.com/mauricio-garcia/',
    name: 'Mauricio García',
    specialty: 'Especialista en gestión pública y prospectiva estratégica',
    photo: mauricioGarcia,
    crop: { width: 485, height: 440, offsetX: 0.5, flipX: false, img: [-5.68, -3.03, 100.8, 122.27] },
  },
  {
    slug: 'rafael-ausejo',
    url: 'https://grupogoberna.com/rafael-ausejo/',
    name: 'Rafael Ausejo',
    specialty: 'Experto en ciberseguridad, inteligencia e inteligencia artificial',
    photo: rafaelAusejo,
    crop: { width: 466, height: 440, offsetX: 0, flipX: true, img: [-4.15, -0.83, 104.95, 110.97] },
  },
  {
    slug: 'camilo-bello',
    url: 'https://grupogoberna.com/camilo-bello/',
    name: 'Camilo Bello',
    specialty: 'Especialista en operaciones especiales y liderazgo táctico',
    photo: camiloBello,
    crop: { width: 400, height: 440, offsetX: 0, flipX: false, img: [-4.32, 0.11, 94.72, 115] },
  },
  {
    slug: 'roniel-aledo',
    url: 'https://grupogoberna.com/roniel-aledo/',
    name: 'Roniel Aledo',
    specialty: 'Especialista en inteligencia y seguridad internacional',
    photo: ronielAledo,
    crop: { width: 465, height: 440, offsetX: 30.5, flipX: true, img: [-14.67, 1.25, 98.73, 114.67] },
  },
  {
    slug: 'juan-de-dios-paramo',
    url: 'https://grupogoberna.com/juan-de-dios-paramo/',
    name: 'Juan de Dios Páramo',
    specialty: 'Especialista en territorio y geografía electoral',
    photo: juanDeDiosParamo,
    crop: { width: 434, height: 440, offsetX: -7, flipX: false, img: [-3.18, -33.08, 149.01, 146.82] },
  },
  {
    slug: 'job-antonio-meneses',
    url: 'https://grupogoberna.com/job-meneses/',
    name: 'Job Antonio Meneses',
    specialty: 'Especialista en inteligencia territorial y estrategia política',
    photo: jobAntonioMeneses,
    crop: { width: 486, height: 440, offsetX: 0, flipX: true, img: [-11.82, 8.06, 90.35, 111.82] },
  },
  {
    slug: 'fernando-cocho',
    url: 'https://grupogoberna.com/fernando-cocho/',
    name: 'Fernando Cocho',
    specialty: 'Especialista en inteligencia, análisis estratégico y prospectiva',
    photo: fernandoCocho,
    crop: { width: 330, height: 440, offsetX: 0, flipX: false, img: [7.23, -18.65, 121.95, 92.77] },
  },
]
