// Typescript
// parse it to a number

// function sum(a,b){
//     return parseInt(a)+parseInt(b);
// }
// console.log(sum("20",30));


// function sumNo (n){
//     // let a = 0;
//     // for(let i=0;i<=n;i++){
//     //     a+=i;
//     // }
//     // return a;

//     return (n*(n+1))/2;
// }
// console.log(sumNo(5));

function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);
