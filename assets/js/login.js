let login_form = document.querySelector('form')
let login_btn = document.querySelector('form button')


login_btn.onclick = () => {
  let email = login_form.querySelector("input[name=email]").value
  let pass = login_form.querySelector("input[name=pass]").value
  console.log(email, pass)
}
