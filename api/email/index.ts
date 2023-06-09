import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import mail from "@sendgrid/mail"

const email: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  // Get and set API key
  const apiKey = process.env.SENDGRID_API_KEY

  if (!apiKey) {
    console.log("Missing SendGrid API key in site configuration")
    context.res = {
      status: 500
    }
    return
  }

  mail.setApiKey(apiKey)

  // Form email
  const msgToCustomer = {
    to: req.body.email,
    from: "yumasteve882@hotmail.com",
    subject: "Your Piano Lessons request has been sent!",
    text: `Dear ${
      req.body.name.split(" ")[0]
    },\n\nThank you for expressing your interest in receiving piano lessons from Yuma in South Brisbane. You will receive a follow up email to discuss meeting your availability within the next few days.\n\nSee you soon,\nYuma.`
  }

  const msgToYuma = {
    to: "yumasteve882@hotmail.com",
    from: "yumasteve882@hotmail.com",
    subject: "A new person is looking for piano lessons!",
    text: `Dear Yuma,\n\nA new person has submitted a request for piano lessons from your website. Here is the details they provided:\n\n${JSON.stringify(
      req.body,
      null,
      2
    )}\n\nApologies for it not being formatted, I have no idea what formatting an email will accept so hopefully this will work for now.\n\nBeep boop,\nsundaypianolessons.com`
  }

  // Send email
  await mail
    .send([msgToCustomer, msgToYuma], true)
    .then(res => {
      console.log(res[0].statusCode)
      console.log(res[0].headers)
    })
    .catch(error => {
      console.error(error)
    })

  // Respond to request
  context.res = {
    status: 202
  }
}

export default email
