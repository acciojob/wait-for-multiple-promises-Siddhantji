//your JS code here. If required.
function promise1(min,max) {
	return new Promise((resolve,reject)=>{
		let w = Math.floor(Math.random()*(max-min+1)+min)*1000;
		setTimeout(()=>{
			resolve(w/1000);
		},w)
	})
}
let arr = [promise1(1,1),promise1(1,2),promise1(1,1)];
let tbody = document.getElementById("output");
tbody.innerHTML = `
<tr id="loading">
<td colspan="2">Loading...</td>
</tr>
`;
Promise.all(arr).then((ar)=>{
	tbody.innerHTML='';
	ar.forEach((value,index)=>{
		tbody.innerHTML += `
		<tr>
		<td>Promise ${index+1}</td>
		<td>${value}</td>
		</tr>
		`;
	})
	let total = ar.reduce((acc,cr)=>acc+cr,0);
	tbody.innerHTML += `
	<tr>
		<td>Total</td>
		<td>${total.toFixed(3)}</td>
		</tr>
	`
})