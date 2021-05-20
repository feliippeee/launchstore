module.exports = {
  
    date(timestamp) {
        const date = new Date(timestamp)
        
        // yyyy
        const year = date.getFullYear()

        // mm 
        const month = `0${date.getMonth() + 1}`.slice(-2)

        // dd
        const day = `0${date.getDate()}`.slice(-2) // o slice serve para pegar a quantidade e sequencia de digito que quiser

        // return yyyy/mm/dd
        const hour = date.getHours()
        const minutes = date.getMinutes()

        return {
            day,
            month,
            year,
            hour,
            minutes,
            iso:`${year}-${month}-${day}`, //iso
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    },
    formatPrice(price){
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price/100)
    },
    formatCpfCnpj(value) {
        value = value.replace(/\D/g,"")

        if (value.length > 14)
            value = value.slice(0,-1)

        if (value.length > 11) {
            value = value.replace(/(\d{2})(\d)/,"$1.$2")
            value = value.replace(/(\d{3})(\d)/,"$1.$2")
            value = value.replace(/(\d{3})(\d)/,"$1/$2")
            value = value.replace(/(\d{4})(\d)/,"$1-$2")
        }else {
            value = value.replace(/(\d{3})(\d)/,"$1.$2")
            value = value.replace(/(\d{3})(\d)/,"$1.$2")
            value = value.replace(/(\d{3})(\d)/,"$1-$2")
        }
        return value
    },
    formatCep(value) {
        value = value.replace(/\D/g,"")

        if (value.length > 8)
            value = value.slice(0,-1)
        value = value.replace(/(\d{5})(\d)/,"$1-$2")
        
        return value
    }
}