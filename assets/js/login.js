let login_form = document.querySelector('form')
let login_btn = document.querySelector('form button')
let spinner = document.querySelector('div#spinner')

let url = 'https://who-dei-owe.herokuapp.com/api/auth'

let login = async (body) => {
	try {
		let response = await fetch(url, { 
      method: "POST", 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(body)
    }) 
    response =  await response.json().then(data => data)
    return response
	} catch (ex) {
		return { status:false, message: ex }
	}
}

login_btn.onclick = async () => {
  spinner.classList.remove('d-none')
  let email = login_form.querySelector("input[name=email]").value
  let password = login_form.querySelector("input[name=pass]").value
  
  let res = await login({ email, password })

  if (res.status === false) {
    spinner.classList.add('d-none')
    return alert(res.message);
  }

  localStorage.setItem("authToken", res.authToken)

  window.location.href = "dashboard.html"
}

