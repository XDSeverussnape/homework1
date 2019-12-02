const countries = {Китай: 100, 
    Чили: 250,
    Австралия: 170,
    Индия: 80,
    Ямайка: 120};


const getCountries = prompt("Укажите страну", "");

const getCountriesCase  = (str) => {
    if (typeof str !== 'string') {
        alert('Ошибка!!!');
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }  
};

if (getCountries === null) {
    alert("Отменено пользователем !!");
} else {
    switch(getCountriesCase(getCountries)) {
    case ("Китай"):
        alert(`Доставка в ${getCountriesCase(getCountries)} будет стоить ${countries.Китай} кредитов`);
        break;

    case "Чили":
        alert(`Доставка в ${getCountriesCase(getCountries)} будет стоить ${countries.Чили} кредитов`);
        break;

    case "Австралия":
        alert(`Доставка в ${getCountriesCase(getCountries)} будет стоить ${countries.Австралия} кредитов`);
        break;

    case "Индия":
        alert(`Доставка в ${getCountriesCase(getCountries)} будет стоить ${countries.Индия} кредитов`);
        break;

    case "Ямайка":
        alert(`Доставка в ${getCountriesCase(getCountries)} будет стоить ${countries.Ямайка} кредитов`);
        break;

  default:
    alert("В вашей стране доставка не доступна");
  }
}

