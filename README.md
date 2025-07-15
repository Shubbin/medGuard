# 💊 MedGuard – AI-Powered Drug Verification Platform

**MedGuard** is a full-stack AI-enhanced web application designed to **combat fake and substandard drugs** in Nigeria. Using smart verification tools like image recognition, voice input, and token validation, MedGuard empowers users to validate pharmaceutical products and report suspicious cases in real-time.

## 🚀 Vision

To **protect public health** by enabling **reliable drug verification** through a **smart, accessible, and AI-powered platform**.

MedGuard aims to serve individuals, pharmacists, and regulatory agencies with tools to identify fake drugs, analyze threats, and take quick action.

---

## 👥 Authors

| Name                     | GitHub                                       | Alias       |
| ------------------------ | -------------------------------------------- | ----------- |
| Makinde Olasubomi Alade  | [@Shubbin](https://github.com/Shubbin)       | **Shubbin** |
| Ayinde Abubakar Damilare | [@mac]https://github.com                     | **Damien**  |
| Temioluwa David          | [@macdavid28](https://github.com/macdavid28) | **Mac**     |


## 🧠 Core Objectives

- ✅ Allow users to **verify drug authenticity** via NAFDAC numbers and product tokens.
- 🧠 Use **image recognition** to detect counterfeit packaging.
- 📤 Enable **reporting of suspicious drugs** with AI-powered risk scoring.
- 📊 Provide an **admin dashboard** for authorities to review reports, monitor statistics, and visualize threat data.

---

## 🧰 Tech Stack

### Frontend

- **React.js**
- **Tailwind CSS**
- **Framer Motion**
- **Axios**
- **React Hook Form**
- **React Router DOM**

### Backend

- **Node.js + Express.js**
- **MongoDB** via Mongoose
- **JWT** + **bcryptjs**
- **Multer** + **Cloudinary**

## 📦 Core Features

### 1. Drug Verification

- Input NAFDAC number + Product token
- Server checks database and returns drug details

### 2. Image-Based Validation

- Upload drug packaging photo
- OCR reads printed info
- Clarifai compares image similarity against registered drugs

### 3. Suspicious Drug Reports

- Users submit photo, location, and description
- AI engine scores risk level
- Admin panel shows pending reports

### 4. Admin Dashboard

- Filter reports by time, location, drug
- Visualize heatmaps, high-risk areas
- Review flagged cases
