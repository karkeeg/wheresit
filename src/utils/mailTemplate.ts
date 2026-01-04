export function getUserEmailHtml(userEmail: string) {
  return `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2 style="color: #2563eb;">New Submission</h2>
    <p>You have a new early access request from:</p>
    <p style="font-size: 1.1em;">User Email: <strong>${userEmail}</strong></p>
    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
    <p style="font-size: 0.8em; color: #666;">This is an automated notification from Wheresit Website.</p>
  </div>
  `;
}
