import { projects, works } from "@/app/utils";
import Link from "next/link";
import React from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { RiFirebaseFill, RiJavascriptFill } from "react-icons/ri";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const ProjectCard = () => {
	const getTechnologyIcon = (tech: string) => {
		switch (tech) {
			case "react":
				return <FaReact className='w-6 h-6 text-blue-500' />;
			case "node":
				return <FaNodeJs className='w-6 h-6 text-green-500' />;
			case "firebase":
				return <RiFirebaseFill className='w-6 h-6 text-yellow-500' />;
			case "javascript":
				return <RiJavascriptFill className='w-6 h-6 text-yellow-500' />;
			case "next":
				return <SiNextdotjs className='w-6 h-6 text-black' />;
			case "typescript":
				return <SiTypescript className='w-6 h-6 text-blue-600' />;
			case "tailwind":
				return <SiTailwindcss className='w-6 h-6 text-cyan-400' />;
			default:
				return null;
		}
	};

	return (
		<>
			<div className='flex flex-wrap justify-center gap-8 w-full'>
				{works.map((project) => (
					<div
						key={project.id}
						className={`bg-white rounded-md shadow-lg overflow-hidden transform transition-all duration-300 w-full sm:w-1/2 lg:w-1/3 xl:w-5/12`}
						tabIndex={0}
						role='article'
						aria-label={`Project: ${project.title}`}>
						<div className='relative w-full'>
							<img
								src={`https://${project.image}`}
								alt={`Preview of ${project.title}`}
								className='w-full h-auto object-cover'
							/>
						</div>
						<div className='p-6'>
							<h3 className='text-xl font-semibold text-gray-800 mb-3'>
								{project.title}
							</h3>
							<p className='text-gray-600 mb-4 text-sm leading-relaxed'>
								{project.description}
							</p>
							<div className='flex items-center space-x-3 mb-4'>
								{project.technologies.map((tech, idx) => (
									<div
										key={idx}
										className='tooltip'
										data-tooltip={tech}
										aria-label={`Technology: ${tech}`}>
										{getTechnologyIcon(tech)}
									</div>
								))}
							</div>
							<div className='flex justify-between items-center'>
								<Link
									href={`${project.code}`}
									target='blank'
									className='flex items-center space-x-2 text-gray-600 hover:text-black/80 transition-colors duration-200'
									aria-label='View project on GitHub'>
									<FaGithub className='w-5 h-5' />
									<span className='text-sm'>Código fuente</span>
								</Link>
								<Link
									href={`${project.demo}`}
									target='blank'
									className='px-4 py-2 bg-black/80 text-white rounded transition-colors duration-200 text-sm'
									aria-label='View project details'>
									Demo⚡
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default ProjectCard;
