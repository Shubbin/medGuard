// export const verificationEmailTemplate = (verificationLink) => `
//   <!DOCTYPE html>
//   <html lang="en" style="font-family: Arial, sans-serif; background-color: #f8f9fa;">
//   <head>
//     <meta charset="UTF-8">
//     <title>Email Verification</title>
//   </head>
//   <body style="margin: 0; padding: 0;">
//     <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
//       <header style="background-color: #001f3f; padding: 20px; text-align: center; color: white;">
//         <h1 style="margin: 0; font-size: 24px;">MedGuard</h1>
//       </header>
//       <main style="padding: 30px; text-align: center;">
//         <h2 style="color: #333;">Verify Your Email</h2>
//         <p style="font-size: 16px; color: #555;">Click the button below to verify your email address and complete your registration.</p>
//         <div style="margin: 30px 0;">
//           <a href="${verificationLink}" style="background-color: #007bff; color: white; padding: 12px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; display: inline-block;">Verify Email</a>
//       </div>
//       </main>
//       <footer style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #777;">
//         &copy; ${new Date().getFullYear()} MedGuard. All rights reserved.
//       </footer>
//     </div>
//   </body>
//   </html>
// `;

// export const resetPasswordTemplate = (resetURL) => `
//   <!DOCTYPE html>
//   <html lang="en" style="font-family: Arial, sans-serif; background-color: #f8f9fa;">
//   <head>
//     <meta charset="UTF-8">
//     <title>Reset Password</title>
//   </head>
//   <body style="margin: 0; padding: 0;">
//     <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
//       <header style="background-color: #001f3f; padding: 20px; text-align: center; color: white;">
//         <h1 style="margin: 0; font-size: 24px;">MedGuard</h1>
//       </header>
//       <main style="padding: 30px; text-align: center;">
//         <h2 style="color: #333;">Reset Your Password</h2>
//         <p style="font-size: 16px; color: #555;">Click the button below to reset your password.</p>
//         <div style="margin: 30px 0;">
//           <a href="${resetURL}" style="background-color: #dc3545; color: white; padding: 12px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; display: inline-block;">Reset Password</a>
//         </div>
//       </main>
//       <footer style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #777;">
//         &copy; ${new Date().getFullYear()} MedGuard. All rights reserved.
//       </footer>
//     </div>
//   </body>
//   </html>
// `;

// export const resetSuccessTemplate = () => `
//   <!DOCTYPE html>
//   <html lang="en" style="font-family: Arial, sans-serif; background-color: #f8f9fa;">
//   <head>
//     <meta charset="UTF-8">
//     <title>Password Reset Success</title>
//   </head>
//   <body style="margin: 0; padding: 0;">
//     <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
//       <header style="background-color: #001f3f; padding: 20px; text-align: center; color: white;">
//         <h1 style="margin: 0; font-size: 24px;">MedGuard</h1>
//       </header>
//       <main style="padding: 30px; text-align: center;">
//         <h2 style="color: #28a745;">Success!</h2>
//         <p style="font-size: 16px; color: #555;">Your password was successfully reset. You can now log in with your new password.</p>
//       </main>
//       <footer style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #777;">
//         &copy; ${new Date().getFullYear()} MedGuard. All rights reserved.
//       </footer>
//     </div>
//   </body>
//   </html>
// `;

// export const welcomeEmailTemplate = (name) => `
//   <!DOCTYPE html>
//   <html lang="en" style="font-family: Arial, sans-serif; background-color: #f8f9fa;">
//   <head>
//     <meta charset="UTF-8">
//     <title>Welcome to MedGuard</title>
//   </head>
//   <body style="margin: 0; padding: 0;">
//     <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
//       <header style="background-color: #001f3f; padding: 20px; text-align: center; color: white;">
//         <h1 style="margin: 0; font-size: 24px;">MedGuard</h1>
//       </header>
//       <main style="padding: 30px; text-align: center;">
//         <h2 style="color: #333;">Welcome, ${name}!</h2>
//         <p style="font-size: 16px; color: #555;">We’re thrilled to have you on board. MedGuard empowers you to stay informed and help create safer communities.</p>
//         <p style="font-size: 16px; color: #555;">Let’s make a difference together.</p>
//       </main>
//       <footer style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #777;">
//         &copy; ${new Date().getFullYear()} MedGuard. All rights reserved.
//       </footer>
//     </div>
//   </body>
//   </html>
// `;



// emailTemplates.js

export const verificationEmailTemplate = (otp) => `
  <html>
    <body style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 20px;">
      <div style="background: #fff; padding: 20px; border-radius: 10px; text-align: center;">
        <h2 style="color: #001f3f;">Verify Your Email</h2>
        <p style="font-size: 16px; color: #555;">Use the following code to verify your email:</p>
        <div style="font-size: 24px; font-weight: bold; color: #007bff;">${otp}</div>
        <p style="color: #888; font-size: 14px;">This code expires in 5 minutes.</p>
      </div>
    </body>
  </html>
`;

export const resetPasswordTemplate = (otp) => `
  <html>
    <body style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 20px;">
      <div style="background: #fff; padding: 20px; border-radius: 10px; text-align: center;">
        <h2 style="color: #dc3545;">Reset Your Password</h2>
        <p style="font-size: 16px; color: #555;">Use the code below to reset your password:</p>
        <div style="font-size: 24px; font-weight: bold; color: #dc3545;">${otp}</div>
        <p style="color: #888; font-size: 14px;">This code expires in 10 minutes.</p>
      </div>
    </body>
  </html>
`;
