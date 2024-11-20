import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const ASSISTANT_ID = process.env.NEXT_PUBLIC_ASSISTANT_ID;

export const sendMessageToAssistant = async (message: string): Promise<string | null> => {
	try {
		const response = await axios.post(
			`${API_URL}/v2/assistants/${ASSISTANT_ID}/message?version=2023-11-19`,
			{
				input: {
					message_type: "text",
					text: message,
				},
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${API_KEY}`,
				},
			}
		);

		const output = response.data?.output?.generic?.[0]?.text || null;
		return output;
	} catch (error) {
		console.error("Error al enviar el mensaje al asistente:", error);
		return null;
	}
};
