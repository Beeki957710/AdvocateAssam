export const sendWelcomeEmail = async (userData) => {
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
          email: "support@advocateassam.com",
        },

        to: [
          {
            email: userData.email,
            name: userData.name,
          },
        ],

        subject: "Welcome to AdvocateAssam",

        htmlContent: `
        <div style="font-family: Arial, sans-serif; background:#f5f7fb; padding:40px;">

        <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 15px rgba(0,0,0,0.1);">

       <!-- Header -->
       <div style="background:#0b2149; padding:30px; text-align:center;">
         <h1 style="color:white; margin:0; font-size:32px;">
           AdvocateAssam ⚖️
         </h1>

         <p style="color:#d4af37; margin-top:10px; font-size:15px;">
           Connecting Clients with Trusted Legal Professionals
         </p>
       </div>

       <!-- Content -->
       <div style="padding:35px;">

         <h2 style="color:#0b2149;">
           Welcome, ${userData.name}! 🎉
         </h2>

         <p style="font-size:16px; color:#444; line-height:1.7;">
           Thank you for joining AdvocateAssam.
           Your account has been successfully created and is now ready to use.
         </p>

         <p style="font-size:16px; color:#444; line-height:1.7;">
           You can now explore verified lawyers, book legal consultations,
           and manage your appointments through our platform.
         </p>

         <!-- Account Details -->
         <div style="
           background:#f8f9fd;
           border-left:5px solid #d4af37;
           padding:18px;
           margin:25px 0;
           border-radius:8px;
         ">

           <p style="margin:6px 0;">
             <strong>Name:</strong> ${userData.name}
           </p>

           <p style="margin:6px 0;">
             <strong>Email:</strong> ${userData.email}
           </p>

          <p style="margin:6px 0;">
           <strong>Status:</strong>
           <span style="color:green; font-weight:bold;">
               ✓ Active Account
             </span>
           </p>

         </div>

        <h3 style="color:#0b2149;">
           What you can do now:
        </h3>

         <ul style="color:#444; line-height:1.9;">
           <li>Find verified lawyers</li>
           <li>Book legal consultations</li>
         <li>Manage appointments online</li>
           <li>Track consultation history</li>
           <li>Get trusted legal assistance</li>
         </ul>

         <!-- Login Button -->
         <div style="text-align:center; margin-top:35px;">

           <a
             href="https://advocateassam.com"
             style="
               display:inline-block;
               background:#0b2149;
               color:white;
               padding:14px 30px;
               text-decoration:none;
               border-radius:8px;
               font-weight:bold;
               font-size:16px;
             "
           >
             Visit AdvocateAssam
           </a>

         </div>

        <p style="
        margin-top:35px;
          color:#555;
           line-height:1.7;
       ">
           We are committed to making legal services more accessible,
           transparent, and convenient for everyone.
         </p>

         <p style="margin-top:25px;">
           Regards,<br>
           <strong>AdvocateAssam Team</strong>
         </p>

      </div>

       <!-- Footer -->
      <div style="
        background:#f8f9fd;
         padding:20px;
         text-align:center;
         color:#777;
         font-size:13px;
       ">
         <p>
           This is an automated email. Please do not reply directly to this message.
         </p>

         <p>
           © ${new Date().getFullYear()} AdvocateAssam. All Rights Reserved.
         </p>
       </div>

     </div>

  </div>
          `,
      }),
    });

    const data = await response.json();

    console.log("Brevo Response:", data);
  } catch (err) {
    console.log("Email Failed:", err);
  }
};