const captchaTextBox = document.querySelector(".captch_box input");
const refreshButton = document.querySelector(".refrech_button");
const captchaInputtBox = document.querySelector(".captch_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

let captchaText = null;

const generatCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
    captchaText = changeString.join("  ");
    captchaTextBox.value = captchaText;
    //console.log(captchaText);
}

const refreshButtonClick = () => {
    generatCaptcha();
    captchaInputtBox.value = "";
    captchaKeyUpValidate();
}

const captchaKeyUpValidate = () => {
    submitButton.classList.toggle("disabled", !captchaInputtBox.value);
}

const submitBtnClick = () => {
    captchaText = captchaText.split(" ")
    .filter((char) => char !== " ")
    .join("");
    console.log(captchaText);
    message.classList.add("active");
    if (captchaInputtBox.value === captchaText)
    {
        message.innerText = "Enter captcha is correct";
        message.style.color = "#826afb";
    }
    else
    {
        message.innerText = "Enter captcha is not correct";
        message.style.color = "#FF2525";
    }
}

refreshButton.addEventListener("click", refreshButtonClick);
captchaInputtBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

generatCaptcha();