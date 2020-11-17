let url = 'https://who-dei-owe.herokuapp.com/api/debts'

let debtsTableBody = document.querySelector('#debtsTable tbody')
let getDebts = async () => {
	try {
		const res = await fetch(url, { method: "GET" }) 

		return await res.json().then(data => data)
	} catch (ex) {
		return { errorStatus: true, message: ex }
	}
}
 
let maketableRow = (data, number) => {
	let html = 
		`
		<tr class="">
			<th scope="row">${number}</th>
			<td class="">${data.name}</td>
			<td class="">${data.cause}</td>
			<td class="text-danger">${data.amount}</td>
		</tr>
	`
	return html
}
 
;
let makeDebtsTable = async () => {
	let debts = await getDebts()
	let index = 0
	debts.forEach((debt) => {
		++index
		debtsTableBody.innerHTML += maketableRow(debt, index)
	})
 
}

makeDebtsTable()