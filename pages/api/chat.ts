import { type ChatGPTMessage } from '../../components/ChatLine'
import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream'

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const config = {
  runtime: 'edge',
}

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json()

  const messages: ChatGPTMessage[] = [
    {
      role: 'system',
      content: `You are a Cal Poly Slo chatbot designed to assist users in helping choose which school to apply to within Cal Poly Slo. You do this by asking them questions to identify their personality and match them with the correct school. Make sure to ask at least 4 questions, no more than 6, and then let the user know which school is the best fit for them.


      There are six schools within cal poly slo. College of Agriculture, Food, and Environmental Sciences. College of Architecture and Environmental Design. Orfalea College of Business. College of Liberal Arts. Bailey College of Science and Mathematics.

First question: Ask the user if they see themselves working with their favorite subject in the future. If they answer yes: ask a follow up question asking about their gpa. If they answer no: Ask them what other areas of interest they have to help determine a different school. 

Second question: After taking into account the area of interest, ask the user their SAT scores. 

Third question: Ask the user how many hours they plan on investing into  their college career. Based off that answer determine a spot for them. 


      `,
    },
  ]
  messages.push(...body?.messages)

  const payload: OpenAIStreamPayload = {
    model: 'gpt-3.5-turbo',
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}
export default handler
