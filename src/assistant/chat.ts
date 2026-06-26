export async function sendMessage(
  message: string
) {

  return {
    success: true,
    reply: `You said: ${message}`
  };

}
