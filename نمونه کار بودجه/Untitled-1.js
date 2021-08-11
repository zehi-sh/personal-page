//class

class Html {

    showMessage(message, className) {
        let div = document.createElement('div')
        div.classList.add('alert', className)
        div.innerHTML = message;
        let firstForm = document.querySelector('#first-form')
        firstForm.appendChild(div)

    }
    getHoure() {
        let hour = new Date()
        return hour.getHours()
    }
    calculateLeft(price) {
        return userBudget -= price
    }
}
class Budget {
    constructor(userBudget) {
        this.userBudget = userBudget
    }
}
//variable
let userBudget;
let name;
let html = new Html;
let pattern = /[^a-z]/
let hazine;
let price;
let budget

//eventListener
eventListener()

function eventListener() {
    document.querySelector('#save').addEventListener('click', function (e) {
        e.preventDefault()
        userBudget = document.querySelector('#userBudget').value;
        name = document.querySelector('#name').value

        if (userBudget == '' || name == '') {
            html.showMessage('نام و بودجه ی خودرا وارد کنید', 'alert-danger')
            setTimeout(() => {
                document.querySelector('.alert').remove()
            }, 3000);

        } 
        // else if (!pattern.test(userBudget)) {
        //     html.showMessage('لطفا فیلد بودجه را با عدد پر کنید', 'alert-danger')
        //     setTimeout(() => {
        //         document.querySelector('.alert').remove()
        //     }, 3000);
        // } 
        else {
            {
                let total = document.querySelector('#total')
                let left = document.querySelector('#left')
                total.innerHTML = userBudget;
                left.innerHTML = userBudget
                budget = new Budget(userBudget)
            }
        }
    })
    document.querySelector('#sabt').addEventListener('click', function (e) {
        e.preventDefault()
        let HourBuy = html.getHoure()
        hazine = document.querySelector('#hazine').value
        price = document.querySelector('#price').value

        if (hazine == '' || price == '') {
            html.showMessage('لطفاهزیه  و قیمت ان را وارد کنید', 'alert-danger')
            setTimeout(() => {
                document.querySelector('.alert').remove()
            }, 3000);

        }
        // if (price >budget.userBudget) {
        //     html.showMessage('هزینه ی وارد شده از بودجه ی شما بیشتره:)', 'alert-danger')
        //     setTimeout(() => {
        //         document.querySelector('.alert').remove()
        //     }, 3000);
        else {
            let ul = document.querySelector('ul')
            let li = document.createElement('li')
            li.classList.add('d-flex', 'text-align-center')
            li.style.backgroundColor = 'rgb(236, 188, 236)'
            li.style.padding = '10px'
            // li.style.paddingRight = '110px'
            li.innerHTML = `
            <p>${name} عزیز ${price} تومان برای ${hazine}  در ساعت ${HourBuy} ازبودجه ت کم شده بیبی </p>
            `
            ul.appendChild(li)
            let LeftToman = html.calculateLeft(price)
            left.innerHTML = LeftToman
            if (budget.userBudget / 4 > LeftToman) {
                left.parentElement.parentElement.classList.remove('alert-success');
                left.parentElement.parentElement.classList.add('alert-danger');
            }
            if (budget.userBudget / 2 > LeftToman) {
                left.parentElement.parentElement.classList.remove('alert-success');
                left.parentElement.parentElement.classList.add('alert-warning');
            }
        }

    })
}