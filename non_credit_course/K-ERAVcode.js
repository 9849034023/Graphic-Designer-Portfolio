document.addEventListener("DOMContentLoaded", function () {
    const verifyForm = document.getElementById("verify-code-form");
    const codeInputs = document.querySelectorAll(".code-input");
    const resendButton = document.getElementById("resend-button");
    const resendTimer = document.getElementById("resend-timer");

    let verificationCode = localStorage.getItem("verificationCode") || "123456"; // Default code for testing
    let currentCode = verificationCode;
    let resendAttempts = 0;
    let resendDelays = [20, 40, 60];
    let isCooldownActive = false;

    codeInputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            const value = e.target.value;
            if (value.length === 1 && index < codeInputs.length - 1) {
                codeInputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !input.value && index > 0) {
                codeInputs[index - 1].focus();
            }
        });

        input.addEventListener("paste", (e) => {
            e.preventDefault();
            const pastedData = e.clipboardData.getData("text").trim();

            if (pastedData.length === codeInputs.length) {
                codeInputs.forEach((box, i) => {
                    box.value = pastedData[i] || "";
                });

                codeInputs.forEach((box) => {
                    box.classList.add("pasted");
                    setTimeout(() => box.classList.remove("pasted"), 500);
                });
            }
        });
    });

    verifyForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const enteredCode = Array.from(codeInputs).map((input) => input.value.trim()).join("");
        if (enteredCode === currentCode) {
            alert("Code verified successfully!");
            window.location.href = "K-ERANewp.html"; // Redirect to password reset page
        } else {
            alert("Invalid code. Please try again.");
        }
    });

    resendButton.addEventListener("click", function () {
        if (isCooldownActive) return;

        if (resendAttempts < resendDelays.length) {
            resendAttempts++;
            currentCode = Math.floor(100000 + Math.random() * 900000).toString();
            alert(`Your new verification code is: ${currentCode}`);

            resendButton.disabled = true;
            isCooldownActive = true;

            const delay = resendDelays[resendAttempts - 1];
            startCooldown(delay);
        } else {
            alert("You have reached the maximum resend attempts.");
            resendButton.disabled = true;
        }
    });

    function startCooldown(seconds) {
        let remaining = seconds;

        resendTimer.innerText = `Please wait ${remaining} seconds to resend the code.`;
        const interval = setInterval(() => {
            remaining--;
            resendTimer.innerText = `Please wait ${remaining} seconds to resend the code.`;

            if (remaining <= 0) {
                clearInterval(interval);
                resendTimer.innerText = "You can resend the code now.";
                resendButton.disabled = false;
                isCooldownActive = false;
            }
        }, 1000);
    }

    startCooldown(20);
});
