export default function ChatPage() {
	async function sendQuestion(formData: FormData) {
		"use server";

		const data = await fetch(
			`https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: "Bearer 86f922e6-8c24-4794-9d98-e58e6962a353",
				},
				body: JSON.stringify({
					input: "you are a helpful assistant tha answers questions about Iñaki Telayna as if you were him.\\n\\nSome information about Iñaki Telayna:\n\nIÑAKI TELAYNA\n 2932 - 534436 | telayna98@gmail.com | Nivel de Inglés: B1 (formándome para b2)\n Linkedin: www.linkedin.com/in/telayna-i/\n Portfolio: https://portfolio-react-murex.vercel.app/\n Git-Hub: https://github.com/Telayna-I?tab=repositories \n\n Conocimientos sólidos en React Js, Next Js, NodeJs, Express, Javascript ES6 +,  TypeScript, HTML5, CSS3, Redux.\n Además trabajo con Sass, Bootstrap, Styled-Components, Git, Github, GitLab,  Axios, Jquery, MySQL, PSQL,  SQL, Firebase, Zustand, MongoDB, Prisma, Web Server, Rest Server, JWT.\n También me estoy formando en: Sockets + Auth, MySQL.\n Experiencia con JSON Web Token y API RESTful.\n\n EXPERIENCIA\n\nConsultor de ciberseguridad | WellTech | (Mayo 2023 - Diciembre 2023)\nAnálisis de indicadores de compromiso mediante la herramienta Lumu, reportes quincenales sobre amenazas.\n Full Stack Developer| La Repostera | Freelance | (Enero 2024 - Enero 2024)\nCreación de una web que permite tomar pedidos y visualizarlos en un tablero, también cuenta con un método de rastreo de pedido.\nCrud de tareas para los empleados. \n Frontend Developer | DLT Seguros. | Freelance | (Enero 2022 - Febrero 2022)\nCreación de una Landing page junto a otro programador y un UX/UI Designer.\n \n EDUCACIÓN\n\n Analista de Sistemas (Tecnico superior )\n Instituto Superior de Formación Técnica N° 190. | Marzo 2018 - Septiembre 2021\n Graduado.\n\n\n",
					parameters: {
						decoding_method: "greedy",
						max_new_tokens: 8191,
						min_new_tokens: 0,
						stop_sequences: [],
						repetition_penalty: 1,
					},
					model_id: "ibm/granite-13b-chat-v2",
					project_id: "137d34ad-6d3b-4059-890d-bde09ffa4194",
					moderations: {
						hap: {
							input: {
								enabled: true,
								threshold: 0.5,
								mask: {
									remove_entity_value: true,
								},
							},
							output: {
								enabled: true,
								threshold: 0.5,
								mask: {
									remove_entity_value: true,
								},
							},
						},
						pii: {
							input: {
								enabled: true,
								threshold: 0.5,
								mask: {
									remove_entity_value: true,
								},
							},
							output: {
								enabled: true,
								threshold: 0.5,
								mask: {
									remove_entity_value: true,
								},
							},
						},
					},
				}),
			}
		);

		console.log(data);
	}

	return (
		<form action={sendQuestion}>
			<input type='text' autoComplete='none' name='question' />
			<button type='submit'>Enviar</button>
		</form>
	);
}

// .then(
// 	(res) =>
// 		res.json() as Promise<{
// 			candidates: { content: { parts: { text: string }[] } }[];
// 		}>
// )
// .then((data) => data.candidates[0].content.parts[0].text);
