document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const responseDiv = document.getElementById("form-response");

        let formValues = {};
        formData.forEach((value, key) => {
            formValues[key] = value;
        });

        responseDiv.textContent = "Thank you for contacting us!";
        console.log("Form submitted:", formValues);

        form.reset();
    });
});
