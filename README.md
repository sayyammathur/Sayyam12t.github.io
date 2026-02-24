# 🎓 AI-Powered Certificate Generator

A premium, feature-rich web application for generating professional certificates in bulk or individually. This tool is designed for schools, institutes, and event organizers to create high-quality certificates with AI-assisted content and smart design themes.

## ✨ Key Features

### 🌟 4. Student Data Source
- **Single Entry**: Quickly generate a certificate for an individual student with a custom photo.
- **Bulk Upload (Excel)**: Upload `.xlsx`, `.xls`, or `.csv` files to generate hundreds of certificates in seconds.
- **Smart Photo Library**: Upload a folder of images or multiple files. The system intelligently matches photos to student names from your data (e.g., `Aarav Sharma` in Excel matches `aarav_sharma.jpg`).
- **AI Magic Names**: Instantly generate sample student names for testing.

### 🪄 AI Smart Fill
- Transform your certificate context into a complete design. Type a scenario (e.g., "Science Fair" or "Kindergarten Graduation"), and the AI instantly sets:
  - School Name
  - Certificate Title
  - Personalized Message
  - Theme-matching colors and layout.

### 🎨 Magic AI Themes (One-Click)
- Selection of premium, pre-built themes:
  - **Playground**: Vibrant colors for kids.
  - **Rainbow Garden**: Fun and playful.
  - **Sunny School**: Clean and professional.
  - **Space Odyssey**: Dark, modern gradient theme.
  - **Deep Sea**: Elegant blue design.
  - **Royal Gold**: Sophisticated gold and white.

### ⚙️ Design Customization (Canva-style)
- Custom background image upload.
- Control over Name and Accent colors.
- Layout switching (Photo Left/Right).
- Fine-grained typography controls (Font sizes and vertical spacing).
- Photo width adjustment.

## 🚀 How to Use

### Individual Certificates
1. Fill in the **School Global Settings**.
2. Customize the design using the **Design Customization** or **Magic AI Themes**.
3. Select the **Single Entry** tab.
4. Enter student details and upload a photo.
5. Click **Print Single Certificate**.

### Bulk Certificates
1. Prepare an Excel file with a column named `Name` (and optionally `Class`).
2. Select the **Bulk Upload (Excel)** tab.
3. Upload your Excel file.
4. (Optional) Upload student photos to the **Student Photos** section. Ensure filenames resemble student names.
5. Click **Generate Bulk Certificates**.
6. Review the certificates and click **Print All (PDF)**.

## 🛠️ Technology Stack
- **HTML5/CSS3**: Modern layout with Flexbox and CSS Variables.
- **JavaScript (Vanilla)**: Core logic and DOM manipulation.
- **SheetJS (xlsx)**: Client-side Excel parsing.
- **Google Fonts**: Premium typography (Cinzel, Great Vibes, Lora, etc.).

## 💡 Pro Tips
- **Printing**: For best results, set the print layout to **Landscape** and set **Margins** to **None** in your browser's print dialog.
- **Photo Matching**: If your photo filenames match the student names in Excel (e.g., `john_doe.png`), the system will automatically pair them.

---

*Hand-crafted with ❤️ for educators.*
