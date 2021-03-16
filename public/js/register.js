(function(){
    const dropdown = document.querySelector('#dropdown_1')
    const reg_fee = document.querySelector('#reg_fee')
    const selectedValue = dropdown.dataset.selected

    const get_country_list = async function () {
        var result = ''
        window.countries.forEach(country => {
             result += `<option ${selectedValue === country.name ? 'selected="selected"' : ''} value="${country.name}">${country.name}</option>`
        });
        return result
    }

    const setRegisterationFee = (selectedCountry,reg_fee)=>{
        const naira = new Intl.NumberFormat().format(window.naira_charge)
        const dollar = new Intl.NumberFormat().format(window.dollar_charge)
        reg_fee.innerText = selectedCountry === 'Nigeria' ? `₦ ${naira}` : `$ ${dollar}` 
    }

    const changeCountry = ()=>{
        dropdown.addEventListener('change',(e)=>{
            setRegisterationFee(e.target.value,reg_fee)
        })
    }

    get_country_list().then((country_string)=>{
        dropdown.innerHTML = country_string
    })

    changeCountry()
    setRegisterationFee(selectedValue,reg_fee)

})()