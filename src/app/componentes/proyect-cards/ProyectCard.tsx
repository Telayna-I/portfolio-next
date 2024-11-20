import React from "react";
import { FaReact, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const ProjectCard = () => {
	const projects = [
		{
			id: 1,
			title: "E-Commerce Platform",
			description:
				"A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
			image: "images.unsplash.com/photo-1661956602116-aa6865609028",
			technologies: ["react", "node", "typescript", "tailwind"],
		},
		{
			id: 2,
			title: "AI Image Generator",
			description:
				"Advanced AI-powered image generation tool using Python and TensorFlow, capable of creating unique artistic compositions.",
			image: "images.unsplash.com/photo-1657387640203-05dbc0dd0fb7",
			technologies: ["python", "react", "node"],
		},
	];

	const getTechnologyIcon = (tech: string) => {
		switch (tech) {
			case "react":
				return <FaReact className='w-6 h-6 text-blue-500' />;
			case "node":
				return <FaNodeJs className='w-6 h-6 text-green-500' />;
			case "python":
				return <FaPython className='w-6 h-6 text-yellow-500' />;
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
				{projects.map((project) => (
					<div
						key={project.id}
						className={`bg-white rounded-md shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 w-full sm:w-1/2 lg:w-1/3 xl:w-2/6`}
						tabIndex={0}
						role='article'
						aria-label={`Project: ${project.title}`}>
						<div className='relative h-48 overflow-hidden'>
							<img
								src={`https://${project.image}`}
								alt={`Preview of ${project.title}`}
								className='w-full h-full object-cover'
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
								<button
									className='flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-200'
									aria-label='View project on GitHub'>
									<FaGithub className='w-5 h-5' />
									<span className='text-sm'>View Source</span>
								</button>
								<button
									className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm'
									aria-label='View project details'>
									Learn More
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default ProjectCard;
