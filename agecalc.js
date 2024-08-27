document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const dob = document.getElementById("date").value;
    if (dob === "") {
        alert("Please enter your date of birth");
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDifference = today.getMonth() - dobDate.getMonth();

    // Adjust age if the current month and day are before the birth month and day
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    // Check if the calculated age is 0 or negative
    if (age <= 0) {
        document.getElementById("result").innerText = "Please enter a valid date of birth.";
    } else {
        document.getElementById("result").innerText = `You are ${age} years old.`;
    }
});
