export const sendApplicationSubmittedEmail = async (lawyerData) => {
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "AdvocateAssam",
          email: "support.advocateassam@gmail.com",
        },

        to: [
          {
            email: lawyerData.email,
            name: lawyerData.name,
          },
        ],

        subject:
          "AdvocateAssam - Lawyer Verification Application Received ⚖️",

        htmlContent: `
        <div style="font-family: Arial, sans-serif; background:#f5f7fb; padding:40px;">
          <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 15px rgba(0,0,0,0.1);">

            <div style="background:#0b2149; padding:30px; text-align:center;">
              <h1 style="color:white;">AdvocateAssam ⚖️</h1>
              <p style="color:#d4af37;">Lawyer Verification Application Received</p>
            </div>

            <div style="padding:35px;">
              <h2>Hello ${lawyerData.name},</h2>

              <p>
                Thank you for applying to become a verified lawyer on AdvocateAssam.
              </p>

              <p>
                Your application has been received successfully and is now under review.
              </p>

              <div style="background:#f8f9fd;border-left:5px solid #d4af37;padding:18px;border-radius:8px;">
                <p><strong>Name:</strong> ${lawyerData.name}</p>
                <p><strong>Email:</strong> ${lawyerData.email}</p>
                <p><strong>Status:</strong> ⏳ Under Review</p>
              </div>

              <p>
                Our verification team will review your application and documents.
              </p>

              <p>
                Regards,<br>
                <strong>AdvocateAssam Verification Team</strong>
              </p>
            </div>

          </div>
        </div>
        `,
      }),
    });

    const data = await response.json();
    console.log("Application Submitted Email:", data);
  } catch (err) {
    console.log("Email Failed:", err);
  }
};

export const sendApplicationApprovedEmail = async (lawyerData) => {
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "AdvocateAssam",
          email: "support.advocateassam@gmail.com",
        },

        to: [
          {
            email: lawyerData.email,
            name: lawyerData.name,
          },
        ],

        subject: "AdvocateAssam - Verification Approved ✅",

        htmlContent: `
        <div style="font-family: Arial, sans-serif; background:#f5f7fb; padding:40px;">
          <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 15px rgba(0,0,0,0.1);">

            <div style="background:#0b2149; padding:30px; text-align:center;">
              <h1 style="color:white;">AdvocateAssam ⚖️</h1>
              <p style="color:#d4af37;">Verification Approved</p>
            </div>

            <div style="padding:35px;">
              <h2>Congratulations ${lawyerData.name}! 🎉</h2>

              <p>
                Your lawyer verification application has been approved.
              </p>

              <div style="background:#f8f9fd;border-left:5px solid green;padding:18px;border-radius:8px;">
                <p><strong>Name:</strong> ${lawyerData.name}</p>
                <p><strong>Email:</strong> ${lawyerData.email}</p>
                <p><strong>Status:</strong> ✅ Verified Lawyer</p>
              </div>

              <p>
                Your profile is now active on AdvocateAssam and available to clients.
              </p>

              <div style="text-align:center;margin-top:30px;">
                <a href="https://admin.advocateassam.com"
                  style="background:#0b2149;color:white;padding:14px 30px;text-decoration:none;border-radius:8px;">
                  Open Lawyer Dashboard
                </a>
              </div>

              <p style="margin-top:30px;">
                Welcome to the AdvocateAssam legal network.
              </p>

              <p>
                Regards,<br>
                <strong>AdvocateAssam Verification Team</strong>
              </p>
            </div>

          </div>
        </div>
        `,
      }),
    });

    const data = await response.json();
    console.log("Application Approved Email:", data);
  } catch (err) {
    console.log("Email Failed:", err);
  }
};

export const sendApplicationRejectedEmail = async (lawyerData) => {
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "AdvocateAssam",
          email: "support.advocateassam@gmail.com",
        },

        to: [
          {
            email: lawyerData.email,
            name: lawyerData.name,
          },
        ],

        subject: "AdvocateAssam - Verification Application Update",

        htmlContent: `
        <div style="font-family: Arial, sans-serif; background:#f5f7fb; padding:40px;">
          <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 15px rgba(0,0,0,0.1);">

            <div style="background:#0b2149; padding:30px; text-align:center;">
              <h1 style="color:white;">AdvocateAssam ⚖️</h1>
              <p style="color:#d4af37;">Verification Application Update</p>
            </div>

            <div style="padding:35px;">
              <h2>Hello ${lawyerData.name},</h2>

              <p>
                After reviewing your application, we regret to inform you that it has not been approved at this time.
              </p>

              <div style="background:#fff5f5;border-left:5px solid red;padding:18px;border-radius:8px;">
                <p><strong>Status:</strong> ❌ Application Rejected</p>
              </div>

              <p>
                You may submit a new application after correcting any document or verification issues.
              </p>

              <div style="text-align:center;margin-top:30px;">
                <a href="https://advocateassam.com"
                  style="background:#0b2149;color:white;padding:14px 30px;text-decoration:none;border-radius:8px;">
                  Visit AdvocateAssam
                </a>
              </div>

              <p style="margin-top:30px;">
                Thank you for your understanding.
              </p>

              <p>
                Regards,<br>
                <strong>AdvocateAssam Verification Team</strong>
              </p>
            </div>

          </div>
        </div>
        `,
      }),
    });

    const data = await response.json();
    console.log("Application Rejected Email:", data);
  } catch (err) {
    console.log("Email Failed:", err);
  }
};