//alert("test")

/* bab variable ---->*/

//var umur = 20
//const x = 1
//let y = 2

// console.log("test umur mu " + umur )
// alert("umur mu adalah " + umur)

let umur = prompt("umur mu? ")
alert("umur mu adalah " + umur)

/* bab tipe data ---->*/

let nama = "daniels" //<-- adalah rime string
let usia = 17 //<-- adalah tipe integer umber
let tinggiBadan = 168.99 //<-- tipe duoble float
let beratBadan 
let uang = 10.000

beratBadan = 50

if(uang == 0 < 5.000 ){
  uang = "tak da uang"
} 
else{
  uang = "banya lah lumayan "
}

let saldoAwal = 100499
let saldoTambah = 50382
const hutang = 20000
const saldoTotal = saldoAwal + saldoTambah - hutang

const x = 15
const y = 50
const z = x * y
const q = x / y

alert(`nilai x=${x} dikali dengan y=${y} = ${z}`)
alert(`nilai x=${x} dibagi dengan y=${y} = ${q}`)

// switch(uang){
//   case 5000:
//     uang = "5000 sahaja"
//   break
//   case 10000:
//     uang = "10000 sahajah "
//   break
//   default:
//     uang = "tak da uang"
//   break
// }

alert(`nama mu adalah  ${nama} dan usia mu adalah ${usia} serta tinggi badan mu adalah  ${tinggiBadan}cm berat badan mu adalah ${beratBadan}kg dan uang mu sebesar Rp.${uang}`)

alert(`my saldo adalah sebesar Rp.${saldoAwal} & my saldo tambahan yg akan di tambah sebesar Rp.${saldoTambah} jadii.. total saldo saya adalah Rp.${saldoTotal}`)
// cara 2 -->  alert("namamu adalah " + nama + " dan usiamu adalah " + usia + "dan tinggi badan mu adalah " + tinggiBadan + " apakah btul?")


/*Array -----> */

let namaOrang = ["daniels", "abie", "siwar"]
namaOrang.push("pasah", "diani")
namaOrang.shift()
namaOrang.pop()
alert(namaOrang)



/*looping ----->*/
// for loopinng

// 3 statment
const namaOrang1 = ["neja", "inafer", "ujank dksl", "lian kapal lawd"]

for(let x = 1; x <=20; x = x+1){
  console.log(namaOrang1)
}


