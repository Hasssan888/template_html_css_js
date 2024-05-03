const captchaTextBox = document.querySelector(".captcha_box input");
const refrechCaptcha = document.querySelector(".refr_captcha");
const captchaInputtBox = document.querySelector(".captcha_input input");
const message = document.querySelector('.message');
const submitButton = document.querySelector(".button");

let captchaText = null;


const generatCaptcha = () => {
  const randomString = Math.random().toString(36).substring(2, 7);
  const randomStringArray =randomString.split("");
  const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
  captchaText = changeString.join("  ");
  console.log(captchaText);
  captchaTextBox.value = captchaText;

}

const refrechCaptchaClick = () => {
  generatCaptcha();
  captchaText.value = "";
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

refrechCaptcha.addEventListener("click", refrechCaptchaClick);
captchaInputtBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);
generatCaptcha();