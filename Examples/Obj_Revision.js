// Define an object representing an internship opportunity
var internshipOpportunity = {
  company: "XYZ Corporation",
  position: "Front-end Developer Intern",
  location: "Anywhere",
  duration: "3 months",
  responsibilities: [
    "Developing new features for the company's web application",
    "Assisting with debugging and troubleshooting",
    "Participating in team meetings and brainstorming sessions",
    "Contributing to code reviews and documentation",
  ],
  qualifications: [
    "Proficiency in JavaScript, HTML, and CSS",
    "Familiarity with front-end frameworks such as React or Angular",
    "Strong problem-solving skills and attention to detail",
    "Ability to work collaboratively in a team environment",
    "Excellent communication and interpersonal skills",
  ],
  benefits: [
    "Hands-on experience in a professional Front-end development environment",
    "Opportunity to learn from experienced engineers and mentors",
    "Networking opportunities with industry professionals",
    "Potential for future employment or recommendations",
  ],
  howToApply:
    "To apply, please send your resume and a cover letter to hr@xyzcorp.com with the subject line 'Front-end Developer Internship Application'.",
};

// Output the internship opportunity details
console.log("Internship Opportunity at " + internshipOpportunity.company);
console.log("Position: " + internshipOpportunity.position);
console.log("Location: " + internshipOpportunity.location);
console.log("Duration: " + internshipOpportunity.duration);
console.log("\nResponsibilities:");
internshipOpportunity.responsibilities.forEach(function (responsibility) {
  console.log("- " + responsibility);
});
console.log("\nQualifications:");
internshipOpportunity.qualifications.forEach(function (qualification) {
  console.log("- " + qualification);
});
console.log("\nBenefits:");
internshipOpportunity.benefits.forEach(function (benefit) {
  console.log("- " + benefit);
});
console.log("\nHow to Apply:");
console.log(internshipOpportunity.howToApply);

// if you find any mistakes or error contact us
