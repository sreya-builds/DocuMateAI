const assistantCards = document.querySelectorAll(".assistant-card");
const documentType = document.getElementById("documentType");
const workspace = document.getElementById("workspace");
const getStarted = document.getElementById("getStarted");
const tryButton = document.getElementById("tryButton");
const pdfFile = document.getElementById("pdfFile");


function openWorkspace() {
  workspace.scrollIntoView({
    behavior: "smooth"
  });
}


getStarted.addEventListener("click", openWorkspace);

tryButton.addEventListener("click", openWorkspace);



assistantCards.forEach(function(card) {

  card.addEventListener("click", function() {

    const selectedType = card.dataset.type;

    documentType.value = selectedType;

    openWorkspace();

  });

});
askButton.addEventListener("click", function() {

  const documentContent = documentText.value.trim();
  const uploadedFile = pdfFile.files[0];

  if (!documentContent && !uploadedFile) {
    answerArea.textContent = "Please upload a document.";
    return;
  }

});