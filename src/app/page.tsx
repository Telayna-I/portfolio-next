import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaWhatsapp, FaGithub, FaCloudDownloadAlt } from "react-icons/fa";
import { stack } from "./utils";
import ProjectCard from "./componentes/proyect-cards/ProyectCard";
import Footer from "./componentes/footer/Footer";

export default function HomeSection() {
	return (
		<>
			<main className='px-4 fade-in'>
				<section id='inicio' className='flex flex-col w-3/4 m-auto'>
					{/* Sección de iconos */}
					<div className='flex flex-col md:flex-row justify-center items-center w-full m-auto space-y-6 md:space-y-0'>
						<div className='flex flex-row md:flex-col justify-center items-center border rounded md:mr-5 transition-all duration-300'>
							<Link
								href='https://www.linkedin.com/in/telayna-i/'
								target='_blank'
								className='hover:bg-gray-300/40 transition-all duration-300'
								aria-label='LinkedIn'>
								<FaLinkedin className='m-2 md:my-5 w-5 h-5' />
							</Link>
							<Link
								href='https://wa.me/542932534436'
								className='hover:bg-gray-300/40 transition-all duration-300'
								target='_blank'
								aria-label='WhatsApp'>
								<FaWhatsapp className='m-2 md:my-5 w-5 h-5' />
							</Link>
							<Link
								className='hover:bg-gray-300/40 transition-all duration-300'
								href='https://github.com/Telayna-I'
								target='_blank'
								aria-label='GitHub'>
								<FaGithub className='m-2 md:my-5 w-5 h-5' />
							</Link>
						</div>

						{/* Sección de texto */}
						<div className='text-center md:text-left w-full md:w-fit md:mr-20'>
							<h1 className='text-2xl md:text-4xl font-semibold'>Hola, soy Iñaki.</h1>
							<h3 className='text-gray-900/70 text-sm'>Full Stack developer.</h3>
							<p className='mt-3 text-sm md:text-base'>
								<span className='font-semibold'>Desarrollador full stack </span>
								con experiencia en{" "}
								<span className='font-semibold'>
									React, Next.js y Node.js,
								</span>{" "}
								apasionado por transformar ideas en experiencias digitales
								innovadoras. Me motiva trabajar en equipo y aprender continuamente,
								siempre buscando soluciones que combinen funcionalidad y estilo.{" "}
								<span className='font-semibold'>
									¿Te imaginas lo que podemos construir juntos?
								</span>
							</p>
						</div>

						{/* Imagen optimizada */}
						<div className='w-48 sm:w-60 md:w-96 relative'>
							<Image
								src='https://res.cloudinary.com/telayna-i/image/upload/v1730760273/Imagen_de_WhatsApp_2024-11-04_a_las_19.18.28_22343f45_bugo5i.jpg'
								alt='Imagen de Iñaki'
								layout='responsive'
								width={700}
								height={700}
								className='rounded-full'
							/>
						</div>
					</div>

					{/* Botón de Descargar CV adaptado */}
					<Link
						href='https://drive.google.com/file/d/1EkLFeTfo62B2Wy03PMthMyDAqaMiW0p0/view?usp=drive_link'
						target='_blank'
						className=' px-5 py-1 border mt-8 md:mt-0 w-fit rounded flex items-center mx-auto md:ml-14 font-semibold hover:bg-black/80 hover:text-white transition-all duration-300 shadow-md '>
						Descargar CV <FaCloudDownloadAlt className='ml-3 w-5 h-5' />
					</Link>
				</section>
			</main>
			<section id='trabajos' className='px-4 fade-in flex flex-col w-3/4 m-auto mt-32'>
				<h2 className='text-4xl font-bold self-center mb-12'>Trabajos</h2>
				<ProjectCard type='works' />
			</section>
			<section id='proyectos' className='px-4 fade-in flex flex-col w-3/4 m-auto mt-32'>
				<h2 className='text-4xl font-bold self-center mt-12 mb-12'>Proyectos</h2>
				<ProjectCard type='projects' />
			</section>
			<section
				id='stack'
				className='px-4 fade-in flex flex-col w-3/4 m-auto mt-32 justify-center mb-10'>
				<h2 className='text-4xl font-bold self-center'>Stack</h2>
				<div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 mt-12'>
					{stack.map((tech) => (
						<div key={tech.title} className='flex flex-col items-center'>
							{/* Ajuste de tamaño uniforme para los iconos y contenedor de altura fija */}
							<figure className='w-16 h-16 flex items-center justify-center'>
								<Image
									src={tech.logo}
									alt={tech.title}
									width={tech.width || 50} // Tamaño uniforme para los iconos
									height={tech.height || 50}
									className='mb-2'
								/>
							</figure>
							{/* Texto centrado y con altura fija para alineación */}
							<span className='text-sm font-semibold text-center h-6 flex items-center'>
								{tech.title}
							</span>
						</div>
					))}
				</div>
			</section>
			<Footer />
		</>
	);
}
