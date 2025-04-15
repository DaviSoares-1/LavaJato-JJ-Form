// esboço do código para fechamento de caixa;

const caixaTotal = [
	{
		carroNumero: 1,
		valorPago: 40,
		gorjeta: 5
	},
	{
		carroNumero: 2,
		valorPago: 50,
		gorjeta: 0
	},
  {
		carroNumero: 3,
		valorPago: 15,
		gorjeta: 10
	},
]

const totalDia = caixaTotal.reduce((total, valores) => {
  return total += valores.valorPago + valores.gorjeta
}, 0)

console.log(totalDia)

// checkout scripts

let params = new URLSearchParams(document.location.search)
let dataHora = params.get("data-hora")
let carroNumero = params.get("qntdCarros")
let nomeResponsavel = params.get("responsavel")
let modelo = params.get("modelo")
let placa = params.get("placa")
let totalPago = params.get("totalPago")
let caixinha = params.get("caixinha")
let outrosPagamentos = params.get("outrosPagamentos")
let observacao = params.get("observacao")
let tipoPagamento = params.get("pagamento")
let servicoInfos = [
	params.get("lavagemGeral"),
	params.get("ducha"),
	params.get("higienização"),
	params.get("Uber/Taxi"),
	params.get("carroGrande"),
	params.get("carroPequeno"),
	params.get("polimento")
]

const services = servicoInfos.filter(servico => servico)

const responsavel = document.querySelector("#responsavel")
const data = document.querySelector("#dataHora")
const qntdCarro = document.querySelector("#qntdCarros")
const modeloVeiculo = document.querySelector("#modelo")
const placaVeiculo = document.querySelector("#placa")
const servicos = document.querySelector("#infos")
const pagamento = document.querySelector("#pagamento")
const valor = document.querySelector("#totalPago")
const gorjeta = document.querySelector("#caixinha")
const obs = document.querySelector("#observacao")
const outros = document.querySelector("#outrosPagamentos")

const date = dataHora.replace(" - ", " / ").replace("T", " ").split("")
const year = []
const month = []
const day = []
const newFormatDate = []

for (let i = 0; i < date.length; i++) {
	if (i < 4) {
		year.push(date[i])
	} else if (i > 4 && i < 7) {
		month.push(date[i])
	} else if (i > 7 && i < 10) {
		day.push(date[i])
	} 
}

const totalPagoFormatado = new Intl.NumberFormat("pr-BR", { style: "currency", currency: "BRL" }).format(
	+totalPago,
)

const caixinhaFormatado = new Intl.NumberFormat("pr-BR", { style: "currency", currency: "BRL" }).format(
	+caixinha,
)

responsavel.innerText = nomeResponsavel.toUpperCase().trim()
data.innerText = `${newFormatDate.concat(day, "/", month, "/", year).join("")} - ${date.slice(11).join("")}`
qntdCarro.innerText = carroNumero
modeloVeiculo.innerText = modelo.toUpperCase().trim()
placaVeiculo.innerText = placa.toUpperCase().trim()
servicos.innerText = services.join(" - ")
pagamento.innerText = tipoPagamento
valor.innerText = totalPagoFormatado
gorjeta.innerText = caixinhaFormatado
obs.innerText = observacao.trim()
outros.innerText = outrosPagamentos.trim()
