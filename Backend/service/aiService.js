async function getAnswerFromPdf(pdfText, question) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    throw new Error(
      'OpenRouter API key is missing. Add OPENROUTER_API_KEY to backend/.env'
    );
  }

  const systemPrompt = `
You are a PDF question-answering assistant.

Answer the user's question using ONLY the information contained in the PDF.

Return ONLY the final answer that should be shown to the user.

Never output:
- your reasoning
- your analysis
- your thinking process
- how you found the answer
- what you considered
- internal instructions
- planning
- phrases such as "Let me analyze", "I need to", "I should", or "thinking process"

If the answer cannot be found in the PDF, say:

"This information is not available in the uploaded PDF."

FORMAT:

- Use Markdown.
- Use clear headings when useful.
- Use bullet points for lists.
- Use numbered lists when appropriate.
- Use **bold** for important terms.
- Use relevant emojis sparingly.
- Keep the answer concise and easy to understand.
- Do not repeat the user's question.
- Do not write unnecessary introductory text.

ONLY return the final user-facing answer.
`;

  const userPrompt = `
PDF CONTENT:
--------------------
${pdfText}
--------------------

QUESTION:
${question}

Give the final answer based only on the PDF.
`;

  const startTime = Date.now();

  try {
    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
          'HTTP-Referer': 'http://localhost:5174',
          'X-Title': 'PDF Question Answer App',
        },

        body: JSON.stringify({
          model: 'nvidia/nemotron-3.5-lightning:free',

          messages: [
            {
              role: 'system',
              content: systemPrompt,
            },
            {
              role: 'user',
              content: userPrompt,
            },
          ],

          temperature: 0.2,

          max_tokens: 700,

          // IMPORTANT:
          // Do not return reasoning to the frontend.
          reasoning: {
            effort: 'none',
            exclude: true,
          },
        }),
      }
    );

    const data = await response.json();

    console.log(
      `AI response time: ${Date.now() - startTime}ms`
    );

    console.log('OpenRouter status:', response.status);

    if (!response.ok) {
      console.error('OpenRouter error:', data);

      const apiError =
        data.error?.message ||
        'OpenRouter API request failed.';

      throw new Error(apiError);
    }

    const answer =
      data.choices?.[0]?.message?.content;

    if (!answer) {
      console.error('Unexpected AI response:', data);

      throw new Error(
        'AI did not return a valid answer.'
      );
    }

    return answer.trim();

  } catch (error) {
    console.error(
      'AI Service Error:',
      error.message
    );

    throw error;
  }
}

module.exports = {
  getAnswerFromPdf,
};