
const appointmentDate = document.getElementById(
    "appointment-date"
);

// Set today's date as the minimum appointment date.
const today = new Date();
const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

appointmentDate.min = localDate;

// Validate the form before submission.
const appointmentForm = document.querySelector("form");

appointmentForm.addEventListener("submit", function(event) {

    if (!appointmentForm.checkValidity()) {
        event.preventDefault();
        appointmentForm.reportValidity();
        return;
    }

    // Demonstration only: connect to a secure
    // appointment-booking backend before production use.
    event.preventDefault();

    alert("Appointment form validated successfully!");
});
