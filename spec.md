# Psychometrics Landing Page – Actionable Agent Task Sheet
**Client:** Naadirah Kagee  (project name: NKAssessments)
**Landing Page Type:** Single-page promotional site  
**Framework:** Bootstrap 5  
**Features:** Responsive, SEO optimized, Light/Dark mode toggle, favicon, smooth scroll, CTA buttons  



---

## 0. Global Setup Tasks
- Set up a **Bootstrap 5 project** (CDN or local)  
- Include **light/dark mode toggle** (class switch or JS)  
- Include **favicon** links:  
  ```html
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
Meta tags for SEO & social media:

html
Copy code
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Naadirah Kagee Psychometrist – Helping individuals and businesses make confident decisions through psychometric assessments.">
<meta name="keywords" content="psychometrics, career guidance, subject choice, personal development, recruitment, HPCSA">
<meta property="og:title" content="Naadirah Kagee Psychometrist">
<meta property="og:description" content="Helping individuals and businesses make confident decisions through psychometric assessments.">
<meta property="og:type" content="website">
<meta property="og:image" content="link-to-og-image.png">
<meta name="twitter:card" content="summary_large_image">
1. Header / Hero Section
Tasks:

Hero container with profile photo left, tagline & CTA right

Background: pastel dark green accent

Add CTA button: "Book an Appointment" → mailto:kagee.naadirah@gmail.com

Smooth scroll to About or Contact section

Light/Dark mode compatible colors

SEO/Accessibility:

Use <h1> for full name

<h2> for tagline/value statement

<img alt="Naadirah Kagee profile photo">

2. About / Bio Section
Tasks:

Title: "Meet Naadirah!"

Bio paragraphs: 2–3 short paragraphs from content spec

Optional image of Naadirah in a rounded frame

CTA button: "Let’s Get Started!" → scroll to Contact section

Design Notes:

Minimalistic layout

Soft shadows behind text or image card

Responsive stacking: image on top for mobile, left for desktop

3. Services Section
Tasks:

4 service cards with icons

Title for each: Service name

Short description + bullet points for key components

Responsive grid: 1 column mobile, 2–4 columns desktop

Services:

Subject Choice – Grade 9 learners

Career Guidance – Grade 11, 12, adults

Personal Development – Self-awareness, goal setting, skills

Recruitment & Selection – Objective hiring tools

Design Notes:

Hover effect on cards

Include Bootstrap icons or custom SVGs

Light/Dark mode compatible

4. Psychometric Assessments Section
Tasks:

Explain what psychometric assessments are

Include process steps: Intake Interview → Assessment → Scoring & Report → Feedback

Optional timeline / horizontal stepper component

Design Notes:

Accordion for desktop & mobile

Soft pastel green accent highlights

5. Contact / CTA Section
Tasks:

Email, WhatsApp, LinkedIn links

CTA text: "Please reach out to kagee.naadirah@gmail.com to chat or book an appointment."

Include a contact form (name, email, message) → optional email backend

Fixed CTA button for mobile scroll

Design Notes:

Rounded buttons with subtle hover effect

Light/Dark mode toggle integration

6. Light/Dark Mode
Tasks:

Implement toggle switch at top-right

Switch page classes: .light-mode / .dark-mode

Adjust colors for backgrounds, cards, text, buttons, links

Suggested Bootstrap Utility Classes:

bg-light / bg-dark

text-dark / text-light

btn-outline-dark / btn-outline-light

7. SEO & Performance Tasks
Optimize meta tags for Google and social media

Add structured data (JSON-LD) for Person & ProfessionalService schema

Ensure images are compressed and alt tagged

Minify CSS & JS for production

Lazy-load below-the-fold images

8. Optional Enhancements
Testimonials section (if client provides quotes)

Sticky navbar with smooth scroll

Bootstrap carousel for services highlights

Analytics tracking script (e.g., Umami)

Animated icons for services

9. Agent Execution Notes
Each agent is assigned one section to fully implement

Use Bootstrap 5 components wherever possible

Ensure mobile-first responsiveness

Verify light/dark mode toggle works site-wide

Validate SEO tags & meta info before deployment


designed by https://nemesisnet.co.za  in footer 


docker file for  deploymenmt to docer hubn then tpo server - make file i will deploy thatnks 