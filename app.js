// Preview applicant photo
document.getElementById("applicantPhoto").addEventListener("change", function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      document.getElementById("photoPreview").src = evt.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// PDF download function
document.getElementById("downloadBtn").addEventListener("click", function() {
  const form = document.getElementById("applicationForm");
  const opt = {
    margin:       0.5,
    filename:     'college_application.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(form).save();
});
