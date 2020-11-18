let login_form = document.querySelector('form')
let login_btn = document.querySelector('form button')


login_btn.onclick = () => {
  let body = {}
  body.email = login_form.querySelector("input[name=email]").value
  body.pass = login_form.querySelector("input[name=pass]").value
  console.log(body)
}
