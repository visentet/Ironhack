// Colores por defecto
Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'

// Obtención de datos
fetch('https://multiapi-app.herokuapp.com/foods')
    .then(response => response.json())
    .then(foods => printFoodsCharts(foods))



function printFoodsCharts(foods) {

    // Obtención de datos de cada producto
    const [carrot, pumpkin, corn, avocado, beef, pork] = foods

    // Llamadas a las diferentes funciones con los datos de los productos
    printCaloriesChart(carrot, pumpkin, corn, avocado, beef, pork)
    printProteinChart(carrot, pumpkin, corn, avocado, beef, pork)
    printFatChart(carrot, pumpkin, corn, avocado, beef, pork)
    printCalciumChart(carrot, pumpkin, corn, avocado, beef, pork)
    printMixedChart(carrot, pumpkin, corn, avocado, beef, pork)
}



// Función para crear un gráfico de barras de las calorías de cada producto
function printCaloriesChart(carrot, pumpkin, corn, avocado, beef, pork) {
    
    //Comandos para comprobar que tenemos los datos
    //console.log('Estos son los datos del primer alimento:', carrot)
    //console.log('Puedo acceder a sus calorías a través de la propiedad kcal:', carrot.kcal)
    //console.log('Puedo acceder a sus proteínas a través de la propiedad protein:', carrot.protein)

    const data = {
        labels: [carrot.name, pumpkin.name, corn.name, avocado.name, beef.name, pork.name],
        datasets: [{
            data: [carrot.kcal, pumpkin.kcal, corn.kcal, avocado.kcal, beef.kcal, pork.kcal],
            label: 'kcal',
            borderWidth: 2,
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)']
        }]
    }

    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    }

    new Chart('chart1', { type: 'bar', data, options })

}

// Función para crear un gráfico de donut de las proteínas de cada producto
function printProteinChart(carrot, pumpkin, corn, avocado, beef, pork) {

    const data = {
        labels: [carrot.name, pumpkin.name, corn.name, avocado.name, beef.name, pork.name],
        datasets: [{
            data: [carrot.protein, pumpkin.protein, corn.protein, avocado.protein, beef.protein, pork.protein],
            label: 'gr',
            borderWidth: 2,
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)']
        }]
    }

    const options = {
        plugins: {
            legend: {
                position: 'left'
            }
        }
    }

    new Chart('chart2', { type: 'doughnut', data, options })

}

// Función para crear un gráfico de donut de las grasas de cada producto
function printFatChart(carrot, pumpkin, corn, avocado, beef, pork) {

    const data = {
        labels: [carrot.name, pumpkin.name, corn.name, avocado.name, beef.name, pork.name],
        datasets: [{
            data: [carrot.fat, pumpkin.fat, corn.fat, avocado.fat, beef.fat, pork.fat],
            label: 'gr',
            borderWidth: 2,
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)']
        }]
    }

    const options = {
        plugins: {
            legend: {
                position: 'left'
            }
        }
    }

    new Chart('chart3', { type: 'doughnut', data, options })

}

// Función para crear un gráfico de donut del calcio de cada producto
function printCalciumChart(carrot, pumpkin, corn, avocado, beef, pork) {

    const data = {
        labels: [carrot.name, pumpkin.name, corn.name, avocado.name, beef.name, pork.name],
        datasets: [{
            data: [carrot.calcium, pumpkin.calcium, corn.calcium, avocado.calcium, beef.calcium, pork.calcium],
            label: 'gr',
            borderWidth: 2,
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)']
        }]
    }

    const options = {
        plugins: {
            legend: {
                position: 'left'
            }
        }
    }

    new Chart('chart4', { type: 'doughnut', data, options })

}

// Función para crear un gráfico de barras mixto comparativo de las calorías y las proteínas de cada producto
function printMixedChart(carrot, pumpkin, corn, avocado, beef, pork) {

    const data = {
        labels: [carrot.name, pumpkin.name, corn.name, avocado.name, beef.name, pork.name],
        datasets: [

            {
                data: [carrot.kcal, pumpkin.kcal, corn.kcal, avocado.kcal, beef.kcal, pork.kcal],
                // En el enunciado se piden calorías vs proteínas, pero la imagen muestra calcio vs proteínas.
                // Si quisiéramos que fuese como el enunciado, habría que poner este dataset y cambiar el label.
                // data: [carrot.calcium, pumpkin.calcium, corn.calcium, avocado.calcium, beef.calcium, pork.calcium],
                label: 'kcal',
                backgroundColor: ['rgba(33, 192, 215, 0.4)']
            },
            {
                data: [carrot.protein, pumpkin.protein, corn.protein, avocado.protein, beef.protein, pork.protein],
                label: 'gr',
                backgroundColor: 'rgba(217, 158, 43, 0.4)',
            },
        ]
    }


    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    }

    new Chart('chart5', { type: 'bar', data, options })
}

