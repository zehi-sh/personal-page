
function tabs(e, name) {
    
    var tab_btn = document.getElementsByClassName('tab_btn')
    var tab_content = document.getElementsByClassName('tab_content');
    var i;
    for (i = 0; i < tab_btn.length; i++) {
        tab_btn[i].classList.remove('active')
    }
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = 'none'
    }
    document.getElementById(name).style.display = 'block';
    e.currentTarget.classList.add('active');
}
document.getElementById('defult').click()


//کد مربوط به یادداشت برای فروردین ماه
//variable
let userNote = document.querySelector('#user-note')

//eventListener
eventListener()

function eventListener() {
    document.querySelector('#form').addEventListener('submit', newNote)
    userNote.addEventListener('click', removing)
    document.addEventListener('DOMContentLoaded', localStorageLoaded)
}


//function
function newNote(e) {
    e.preventDefault()
    let note = document.querySelector('#note').value
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(note))
    li.classList = 'li'
    userNote.appendChild(li)
    let removeBtn = document.createElement('a')
    removeBtn.innerHTML = `<i class="fa fa-trash"></i>`
    li.appendChild(removeBtn)
    this.reset()
    addToLocalStorage(note)
}

function removing(e) {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove()
    }
    removeFromLocalStorage(e.target.parentElement.parentElement.textContent)
}

function addToLocalStorage(note) {
    let notes = getFromLocalStorage()
    notes.push(note)
    localStorage.setItem('notes', JSON.stringify(notes))

}

function getFromLocalStorage() {
    let notes;
    if (localStorage.getItem('notes') == null) {
        notes = []
    } else {
        notes = JSON.parse(localStorage.getItem('notes'))
    }
    return notes
}

function localStorageLoaded() {
    let notes = getFromLocalStorage()
    notes.forEach(note => {
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(note))
        li.classList = 'li'
        userNote.appendChild(li)
        let removeBtn = document.createElement('a')
        removeBtn.innerHTML = `<i class="fa fa-trash"></i>`
        li.appendChild(removeBtn)
    });
}

function removeFromLocalStorage(eContent) {
    let noteLs = getFromLocalStorage()
    noteLs.forEach(function (note, index) {
        if(note==eContent){
            noteLs.splice(index,1)
        }
    });
    localStorage.setItem('notes',JSON.stringify(noteLs))
}


//کدمربوط به یادداشت مربوط به ارذیبهشت ماه 
//variable
let userNote2 = document.querySelector('#user-note2')

//eventListener
eventListener2()

function eventListener2() {
    document.querySelector('#form2').addEventListener('submit', newNote2)
    userNote2.addEventListener('click', removing2)
    document.addEventListener('DOMContentLoaded', localStorageLoaded2)
}


//function
function newNote2(e) {
    e.preventDefault()
    let note2 = document.querySelector('#note2').value
    let li2 = document.createElement('li')
    li2.appendChild(document.createTextNode(note2))
    li2.classList = 'li'
    userNote2.appendChild(li2)
    let removeBtn2 = document.createElement('a')
    removeBtn2.innerHTML = `<i class="fa fa-trash"></i>`
    li2.appendChild(removeBtn2)
    this.reset()
    addToLocalStorage2(note2)
}

function removing2(e) {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove()
    }
    removeFromLocalStorage2(e.target.parentElement.parentElement.textContent)
}

function addToLocalStorage2(note2) {
    let notes2 = getFromLocalStorage2()
    notes2.push(note2)
    localStorage.setItem('notes2', JSON.stringify(notes2))

}

function getFromLocalStorage2() {
    let notes2;
    if (localStorage.getItem('notes2') == null) {
        notes2 = []
    } else {
        notes2 = JSON.parse(localStorage.getItem('notes2'))
    }
    return notes2
}

function localStorageLoaded2() {
    let notes2 = getFromLocalStorage2()
    notes2.forEach(note2 => {
        let li2 = document.createElement('li')
        li2.appendChild(document.createTextNode(note2))
        li2.classList = 'li'
        userNote2.appendChild(li2)
        let removeBtn2 = document.createElement('a')
        removeBtn2.innerHTML = `<i class="fa fa-trash"></i>`
        li2.appendChild(removeBtn2)
    });
}

function removeFromLocalStorage2(eContent2) {
    let noteLs2 = getFromLocalStorage2()
    noteLs2.forEach(function (note2, index) {
        if(note2==eContent2){
            noteLs2.splice(index,1)
        }
    });
    localStorage.setItem('notes2',JSON.stringify(noteLs2))
}

//کدمربوط به یادداشت مربوط به خرداد ماه 
//variable
let userNote3 = document.querySelector('#user-note3')

//eventListener
eventListener3()

function eventListener3() {
    document.querySelector('#form3').addEventListener('submit', newNote3)
    userNote3.addEventListener('click', removing3)
    document.addEventListener('DOMContentLoaded', localStorageLoaded3)
}


//function
function newNote3(e) {
    e.preventDefault()
    let note3 = document.querySelector('#note3').value
    let li3 = document.createElement('li')
    li3.appendChild(document.createTextNode(note3))
    li3.classList = 'li'
    userNote3.appendChild(li3)
    let removeBtn3 = document.createElement('a')
    removeBtn3.innerHTML = `<i class="fa fa-trash"></i>`
    li3.appendChild(removeBtn3)
    this.reset()
    addToLocalStorage3(note3)
}

function removing3(e) {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove()
    }
    removeFromLocalStorage3(e.target.parentElement.parentElement.textContent)
}

function addToLocalStorage3(note3) {
    let notes3 = getFromLocalStorage3()
    notes3.push(note3)
    localStorage.setItem('notes3', JSON.stringify(notes3))

}

function getFromLocalStorage3() {
    let notes3;
    if (localStorage.getItem('notes3') == null) {
        notes3 = []
    } else {
        notes3 = JSON.parse(localStorage.getItem('notes3'))
    }
    return notes3
}

function localStorageLoaded3() {
    let notes3 = getFromLocalStorage3()
    notes3.forEach(note3 => {
        let li3 = document.createElement('li')
        li3.appendChild(document.createTextNode(note3))
        li3.classList = 'li'
        userNote3.appendChild(li3)
        let removeBtn3 = document.createElement('a')
        removeBtn3.innerHTML = `<i class="fa fa-trash"></i>`
        li3.appendChild(removeBtn3)
    });
}

function removeFromLocalStorage3(eContent3) {
    let noteLs3 = getFromLocalStorage3()
    noteLs3.forEach(function (note3, index) {
        if(note3==eContent3){
            noteLs3.splice(index,1)
        }
    });
    localStorage.setItem('notes3',JSON.stringify(noteLs3))
}
//کدمربوط به یادداشت مربوط به تیر ماه 
//variable
let userNote4 = document.querySelector('#user-note4')

//eventListener
eventListener4()

function eventListener4() {
    document.querySelector('#form4').addEventListener('submit', newNote4)
    userNote4.addEventListener('click', removing4)
    document.addEventListener('DOMContentLoaded', localStorageLoaded4)
}


//function
function newNote4(e) {
    e.preventDefault()
    let note4 = document.querySelector('#note4').value
    let li4 = document.createElement('li')
    li4.appendChild(document.createTextNode(note4))
    li4.classList = 'li'
    userNote4.appendChild(li4)
    let removeBtn4 = document.createElement('a')
    removeBtn4.innerHTML = `<i class="fa fa-trash"></i>`
    li4.appendChild(removeBtn4)
    this.reset()
    addToLocalStorage4(note4)
}

function removing4(e) {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove()
    }
    removeFromLocalStorage4(e.target.parentElement.parentElement.textContent)
}

function addToLocalStorage4(note4) {
    let notes4 = getFromLocalStorage4()
    notes4.push(note4)
    localStorage.setItem('notes4', JSON.stringify(notes4))

}

function getFromLocalStorage4() {
    let notes4;
    if (localStorage.getItem('notes4') == null) {
        notes4 = []
    } else {
        notes4 = JSON.parse(localStorage.getItem('notes4'))
    }
    return notes4
}

function localStorageLoaded4() {
    let notes4 = getFromLocalStorage4()
    notes4.forEach(note4 => {
        let li4 = document.createElement('li')
        li4.appendChild(document.createTextNode(note4))
        li4.classList = 'li'
        userNote4.appendChild(li4)
        let removeBtn4 = document.createElement('a')
        removeBtn4.innerHTML = `<i class="fa fa-trash"></i>`
        li4.appendChild(removeBtn4)
    });
}

function removeFromLocalStorage4(eContent4) {
    let noteLs4 = getFromLocalStorage4()
    noteLs4.forEach(function (note4, index) {
        if(note4==eContent4){
            noteLs4.splice(index,1)
        }
    });
    localStorage.setItem('notes4',JSON.stringify(noteLs4))
}
//کدمربوط به یادداشت مربوط به مرداد ماه 
//variable
let userNote5 = document.querySelector('#user-note5')

//eventListener
eventListener5()

function eventListener5() {
    document.querySelector('#form5').addEventListener('submit', newNote5)
    userNote5.addEventListener('click', removing5)
    document.addEventListener('DOMContentLoaded', localStorageLoaded5)
}


//function
function newNote5(e) {
    e.preventDefault()
    let note5 = document.querySelector('#note5').value
    let li5 = document.createElement('li')
    li5.appendChild(document.createTextNode(note5))
    li5.classList = 'li'
    userNote5.appendChild(li5)
    let removeBtn5 = document.createElement('a')
    removeBtn5.innerHTML = `<i class="fa fa-trash"></i>`
    li5.appendChild(removeBtn5)
    this.reset()
    addToLocalStorage5(note5)
}

function removing5(e) {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove()
    }
    removeFromLocalStorage5(e.target.parentElement.parentElement.textContent)
}

function addToLocalStorage5(note5) {
    let notes5 = getFromLocalStorage5()
    notes5.push(note5)
    localStorage.setItem('notes5', JSON.stringify(notes5))

}

function getFromLocalStorage5() {
    let notes5;
    if (localStorage.getItem('notes5') == null) {
        notes5 = []
    } else {
        notes5 = JSON.parse(localStorage.getItem('notes5'))
    }
    return notes5
}

function localStorageLoaded5() {
    let notes5 = getFromLocalStorage5()
    notes5.forEach(note5 => {
        let li5 = document.createElement('li')
        li5.appendChild(document.createTextNode(note5))
        li5.classList = 'li'
        userNote5.appendChild(li5)
        let removeBtn5 = document.createElement('a')
        removeBtn5.innerHTML = `<i class="fa fa-trash"></i>`
        li5.appendChild(removeBtn5)
    });
}

function removeFromLocalStorage5(eContent5) {
    let noteLs5 = getFromLocalStorage5()
    noteLs5.forEach(function (note5, index) {
        if(note5==eContent5){
            noteLs5.splice(index,1)
        }
    });
    localStorage.setItem('notes5',JSON.stringify(noteLs5))
}
//کدمربوط به یادداشت مربوط به شهریور ماه 
//variable
let userNote6 = document.querySelector('#user-note6')

//eventListener
eventListener6()

function eventListener6() {
    document.querySelector('#form6').addEventListener('submit', newNote6)
    userNote6.addEventListener('click', removing6)
    document.addEventListener('DOMContentLoaded', localStorageLoaded6)
}


//function
function newNote6(e) {
    e.preventDefault()
    let note6 = document.querySelector('#note6').value
    let li6 = document.createElement('li')
    li6.appendChild(document.createTextNode(note6))
    li6.classList = 'li'
    userNote6.appendChild(li6)
    let removeBtn6 = document.createElement('a')
    removeBtn6.innerHTML = `<i class="fa fa-trash"></i>`
    li6.appendChild(removeBtn6)
    this.reset()
    addToLocalStorage6(note6)
}

function removing6(e) {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove()
    }
    removeFromLocalStorage6(e.target.parentElement.parentElement.textContent)
}

function addToLocalStorage6(note6) {
    let notes6 = getFromLocalStorage6()
    notes6.push(note6)
    localStorage.setItem('notes6', JSON.stringify(notes6))

}

function getFromLocalStorage6() {
    let notes6;
    if (localStorage.getItem('notes6') == null) {
        notes6 = []
    } else {
        notes6 = JSON.parse(localStorage.getItem('notes6'))
    }
    return notes6
}

function localStorageLoaded6() {
    let notes6 = getFromLocalStorage6()
    notes6.forEach(note6 => {
        let li6 = document.createElement('li')
        li6.appendChild(document.createTextNode(note6))
        li6.classList = 'li'
        userNote6.appendChild(li6)
        let removeBtn6 = document.createElement('a')
        removeBtn6.innerHTML = `<i class="fa fa-trash"></i>`
        li6.appendChild(removeBtn6)
    });
}

function removeFromLocalStorage6(eContent6) {
    let noteLs6 = getFromLocalStorage6()
    noteLs6.forEach(function (note6, index) {
        if(note6==eContent6){
            noteLs6.splice(index,1)
        }
    });
    localStorage.setItem('notes6',JSON.stringify(noteLs6))
}
//کدمربوط به یادداشت مربوط به مهر ماه 
//variable
let userNote7 = document.querySelector('#user-note7')

//eventListener
eventListener7()

function eventListener7() {
    document.querySelector('#form7').addEventListener('submit', newNote7)
    userNote7.addEventListener('click', removing7)
    document.addEventListener('DOMContentLoaded', localStorageLoaded7)
}


//function
function newNote7(e) {
    e.preventDefault()
    let note7 = document.querySelector('#note7').value
    let li7 = document.createElement('li')
    li7.appendChild(document.createTextNode(note7))
    li7.classList = 'li'
    userNote7.appendChild(li7)
    let removeBtn7 = document.createElement('a')
    removeBtn7.innerHTML = `<i class="fa fa-trash"></i>`
    li7.appendChild(removeBtn7)
    this.reset()
    addToLocalStorage7(note7)
}

function removing7(e) {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove()
    }
    removeFromLocalStorage7(e.target.parentElement.parentElement.textContent)
}

function addToLocalStorage7(note7) {
    let notes7 = getFromLocalStorage7()
    notes7.push(note7)
    localStorage.setItem('notes7', JSON.stringify(notes7))

}

function getFromLocalStorage7() {
    let notes7;
    if (localStorage.getItem('notes7') == null) {
        notes7 = []
    } else {
        notes7 = JSON.parse(localStorage.getItem('notes7'))
    }
    return notes7
}

function localStorageLoaded7() {
    let notes7 = getFromLocalStorage7()
    notes7.forEach(note7 => {
        let li7 = document.createElement('li')
        li7.appendChild(document.createTextNode(note7))
        li7.classList = 'li'
        userNote7.appendChild(li7)
        let removeBtn7 = document.createElement('a')
        removeBtn7.innerHTML = `<i class="fa fa-trash"></i>`
        li7.appendChild(removeBtn7)
    });
}

function removeFromLocalStorage7(eContent7) {
    let noteLs7 = getFromLocalStorage7()
    noteLs7.forEach(function (note7, index) {
        if(note7==eContent7){
            noteLs7.splice(index,1)
        }
    });
    localStorage.setItem('notes7',JSON.stringify(noteLs7))
}
//کدمربوط به یادداشت مربوط به ابان ماه 
//variable
let userNote8 = document.querySelector('#user-note8')

//eventListener
eventListener8()

function eventListener8() {
    document.querySelector('#form8').addEventListener('submit', newNote8)
    userNote8.addEventListener('click', removing8)
    document.addEventListener('DOMContentLoaded', localStorageLoaded8)
}


//function
function newNote8(e) {
    e.preventDefault()
    let note8 = document.querySelector('#note8').value
    let li8 = document.createElement('li')
    li8.appendChild(document.createTextNode(note8))
    li8.classList = 'li'
    userNote8.appendChild(li8)
    let removeBtn8 = document.createElement('a')
    removeBtn8.innerHTML = `<i class="fa fa-trash"></i>`
    li8.appendChild(removeBtn8)
    this.reset()
    addToLocalStorage8(note8)
}

function removing8(e) {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove()
    }
    removeFromLocalStorage8(e.target.parentElement.parentElement.textContent)
}

function addToLocalStorage8(note8) {
    let notes8 = getFromLocalStorage8()
    notes8.push(note8)
    localStorage.setItem('notes8', JSON.stringify(notes8))

}

function getFromLocalStorage8() {
    let notes8;
    if (localStorage.getItem('notes8') == null) {
        notes8 = []
    } else {
        notes8 = JSON.parse(localStorage.getItem('notes8'))
    }
    return notes8
}

function localStorageLoaded8() {
    let notes8 = getFromLocalStorage8()
    notes8.forEach(note8 => {
        let li8 = document.createElement('li')
        li8.appendChild(document.createTextNode(note8))
        li8.classList = 'li'
        userNote8.appendChild(li8)
        let removeBtn8 = document.createElement('a')
        removeBtn8.innerHTML = `<i class="fa fa-trash"></i>`
        li8.appendChild(removeBtn8)
    });
}

function removeFromLocalStorage8(eContent8) {
    let noteLs8 = getFromLocalStorage8()
    noteLs8.forEach(function (note8, index) {
        if(note8==eContent8){
            noteLs8.splice(index,1)
        }
    });
    localStorage.setItem('notes8',JSON.stringify(noteLs8))
}
//کدمربوط به یادداشت مربوط به اذر ماه 
//variable
let userNote9 = document.querySelector('#user-note9')

//eventListener
eventListener9()

function eventListener9() {
    document.querySelector('#form9').addEventListener('submit', newNote9)
    userNote9.addEventListener('click', removing9)
    document.addEventListener('DOMContentLoaded', localStorageLoaded9)
}


//function
function newNote9(e) {
    e.preventDefault()
    let note9 = document.querySelector('#note9').value
    let li9 = document.createElement('li')
    li9.appendChild(document.createTextNode(note9))
    li9.classList = 'li'
    userNote9.appendChild(li9)
    let removeBtn9 = document.createElement('a')
    removeBtn9.innerHTML = `<i class="fa fa-trash"></i>`
    li9.appendChild(removeBtn9)
    this.reset()
    addToLocalStorage9(note9)
}

function removing9(e) {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove()
    }
    removeFromLocalStorage9(e.target.parentElement.parentElement.textContent)
}

function addToLocalStorage9(note9) {
    let notes9 = getFromLocalStorage9()
    notes9.push(note9)
    localStorage.setItem('notes9', JSON.stringify(notes9))

}

function getFromLocalStorage9() {
    let notes9;
    if (localStorage.getItem('notes9') == null) {
        notes9 = []
    } else {
        notes9 = JSON.parse(localStorage.getItem('notes9'))
    }
    return notes9
}

function localStorageLoaded9() {
    let notes9 = getFromLocalStorage9()
    notes9.forEach(note9 => {
        let li9 = document.createElement('li')
        li9.appendChild(document.createTextNode(note9))
        li9.classList = 'li'
        userNote9.appendChild(li9)
        let removeBtn9 = document.createElement('a')
        removeBtn9.innerHTML = `<i class="fa fa-trash"></i>`
        li9.appendChild(removeBtn9)
    });
}

function removeFromLocalStorage9(eContent9) {
    let noteLs9 = getFromLocalStorage9()
    noteLs9.forEach(function (note9, index) {
        if(note9==eContent9){
            noteLs9.splice(index,1)
        }
    });
    localStorage.setItem('notes9',JSON.stringify(noteLs9))
}
//کدمربوط به یادداشت مربوط به ذی ماه 
//variable
let userNote10 = document.querySelector('#user-note10')

//eventListener
eventListener10()

function eventListener10() {
    document.querySelector('#form10').addEventListener('submit', newNote10)
    userNote10.addEventListener('click', removing10)
    document.addEventListener('DOMContentLoaded', localStorageLoaded10)
}


//function
function newNote10(e) {
    e.preventDefault()
    let note10 = document.querySelector('#note10').value
    let li10 = document.createElement('li')
    li10.appendChild(document.createTextNode(note10))
    li10.classList = 'li'
    userNote10.appendChild(li10)
    let removeBtn10 = document.createElement('a')
    removeBtn10.innerHTML = `<i class="fa fa-trash"></i>`
    li10.appendChild(removeBtn10)
    this.reset()
    addToLocalStorage10(note10)
}

function removing10(e) {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove()
    }
    removeFromLocalStorage10(e.target.parentElement.parentElement.textContent)
}

function addToLocalStorage10(note10) {
    let notes10 = getFromLocalStorage10()
    notes10.push(note10)
    localStorage.setItem('notes10', JSON.stringify(notes10))

}

function getFromLocalStorage10() {
    let notes10;
    if (localStorage.getItem('notes10') == null) {
        notes10 = []
    } else {
        notes10 = JSON.parse(localStorage.getItem('notes10'))
    }
    return notes10
}

function localStorageLoaded10() {
    let notes10 = getFromLocalStorage10()
    notes10.forEach(note10 => {
        let li10 = document.createElement('li')
        li10.appendChild(document.createTextNode(note10))
        li10.classList = 'li'
        userNote10.appendChild(li10)
        let removeBtn10 = document.createElement('a')
        removeBtn10.innerHTML = `<i class="fa fa-trash"></i>`
        li10.appendChild(removeBtn10)
    });
}

function removeFromLocalStorage10(eContent10) {
    let noteLs10 = getFromLocalStorage10()
    noteLs10.forEach(function (note10, index) {
        if(note10==eContent10){
            noteLs10.splice(index,1)
        }
    });
    localStorage.setItem('notes10',JSON.stringify(noteLs10))
}
//کدمربوط به یادداشت مربوط به بهمن ماه 
//variable
let userNote11 = document.querySelector('#user-note11')

//eventListener
eventListener11()

function eventListener11() {
    document.querySelector('#form11').addEventListener('submit', newNote11)
    userNote11.addEventListener('click', removing11)
    document.addEventListener('DOMContentLoaded', localStorageLoaded11)
}


//function
function newNote11(e) {
    e.preventDefault()
    let note11 = document.querySelector('#note11').value
    let li11 = document.createElement('li')
    li11.appendChild(document.createTextNode(note11))
    li11.classList = 'li'
    userNote11.appendChild(li11)
    let removeBtn11 = document.createElement('a')
    removeBtn11.innerHTML = `<i class="fa fa-trash"></i>`
    li11.appendChild(removeBtn11)
    this.reset()
    addToLocalStorage11(note11)
}

function removing11(e) {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove()
    }
    removeFromLocalStorage11(e.target.parentElement.parentElement.textContent)
}

function addToLocalStorage11(note11) {
    let notes11 = getFromLocalStorage11()
    notes11.push(note11)
    localStorage.setItem('notes11', JSON.stringify(notes11))

}

function getFromLocalStorage11() {
    let notes11;
    if (localStorage.getItem('notes11') == null) {
        notes11 = []
    } else {
        notes11 = JSON.parse(localStorage.getItem('notes11'))
    }
    return notes11
}

function localStorageLoaded11() {
    let notes11 = getFromLocalStorage11()
    notes11.forEach(note11 => {
        let li11 = document.createElement('li')
        li11.appendChild(document.createTextNode(note11))
        li11.classList = 'li'
        userNote11.appendChild(li11)
        let removeBtn11 = document.createElement('a')
        removeBtn11.innerHTML = `<i class="fa fa-trash"></i>`
        li11.appendChild(removeBtn11)
    });
}

function removeFromLocalStorage11(eContent11) {
    let noteLs11 = getFromLocalStorage11()
    noteLs11.forEach(function (note11, index) {
        if(note11==eContent11){
            noteLs11.splice(index,1)
        }
    });
    localStorage.setItem('notes11',JSON.stringify(noteLs11))
}
//کدمربوط به یادداشت مربوط به اسفند ماه 
//variable
let userNote12 = document.querySelector('#user-note12')

//eventListener
eventListener12()

function eventListener12() {
    document.querySelector('#form12').addEventListener('submit', newNote12)
    userNote12.addEventListener('click', removing12)
    document.addEventListener('DOMContentLoaded', localStorageLoaded12)
}


//function
function newNote12(e) {
    e.preventDefault()
    let note12 = document.querySelector('#note12').value
    let li12 = document.createElement('li')
    li12.appendChild(document.createTextNode(note12))
    li12.classList = 'li'
    userNote12.appendChild(li12)
    let removeBtn12 = document.createElement('a')
    removeBtn12.innerHTML = `<i class="fa fa-trash"></i>`
    li12.appendChild(removeBtn12)
    this.reset()
    addToLocalStorage12(note12)
}

function removing12(e) {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove()
    }
    removeFromLocalStorage12(e.target.parentElement.parentElement.textContent)
}

function addToLocalStorage12(note12) {
    let notes12 = getFromLocalStorage12()
    notes12.push(note12)
    localStorage.setItem('notes12', JSON.stringify(notes12))

}

function getFromLocalStorage12() {
    let notes12;
    if (localStorage.getItem('notes12') == null) {
        notes12 = []
    } else {
        notes12 = JSON.parse(localStorage.getItem('notes12'))
    }
    return notes12
}

function localStorageLoaded12() {
    let notes12 = getFromLocalStorage12()
    notes12.forEach(note12 => {
        let li12 = document.createElement('li')
        li12.appendChild(document.createTextNode(note12))
        li12.classList = 'li'
        userNote12.appendChild(li12)
        let removeBtn12 = document.createElement('a')
        removeBtn12.innerHTML = `<i class="fa fa-trash"></i>`
        li12.appendChild(removeBtn12)
    });
}

function removeFromLocalStorage12(eContent12) {
    let noteLs12 = getFromLocalStorage12()
    noteLs12.forEach(function (note12, index) {
        if(note12==eContent12){
            noteLs12.splice(index,1)
        }
    });
    localStorage.setItem('notes12',JSON.stringify(noteLs12))
}
