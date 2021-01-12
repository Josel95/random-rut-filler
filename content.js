const rutInput = document.querySelector('input[name="rut"]')

const generateRandomNumber = (from, to) => {
    return Math.floor(Math.random() * to) + from  
}

const generateRandomRut = () => {
    return generateRandomNumber(1000000, 25000000)
}

const generateDv = (number) => {
    const numberDigits = number.toString().split('').reverse()

    let dv = numberDigits.reduce((prev, current, index) => {
        return +prev + (+current * [2,3,4,5,6,7][index % 6])
    }, 0)

    dv = 11 - (dv % 11)

    return { 11: '0', 10: 'k' }[dv] || dv
}

const formatRut = (rut) => {
    return rut.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}

if(rutInput){
    rutInput.addEventListener('dblclick', () => {
        const randomNumber = generateRandomRut()
        const rut = `${formatRut(randomNumber)}-${generateDv(randomNumber)}`
        rutInput.value = rut
    })
}