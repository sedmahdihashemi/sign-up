const span = document.querySelectorAll('#toggle>span')
const wlc = document.getElementById('wlc')
const sign = document.getElementById('sign')
const inps = document.getElementsByClassName('inp')
const pass = document.getElementById('pass-in')
const setpass = document.getElementById('set-pass')
const gmailadd = document.getElementById('gmail-add')
const gmailin = document.getElementById('gmail-in')
const _start = document.getElementById('start')
const login = document.getElementById('log-in')
const pfirst = document.getElementById('pfirst')
const plast = document.getElementById('plast')
const pgmail = document.getElementById('pgmail')
const pingmail = document.getElementById('pingmail')
const psetpas = document.getElementById('psetpas')
const pinpas = document.getElementById('pinpas')
let valinp = []
myFetch = JSON.parse(localStorage.getItem('userData'))
console.log(myFetch);
// console.log(myFetch[0].gmail);
myFetch != null ? valinp = [...myFetch] : valinp = []
let _id = 0
console.log(valinp);

// let myFetch = []
const allinp = document.querySelectorAll('#all-inp>input')
const inpin = document.querySelectorAll('.inpin')

// console.log(_style);
// let someval = false
let newvalinp = {
    id: myFetch?.length,
    name: allinp[0].value,
    lname: allinp[1].value,
    gmail: allinp[2].value,
    password: allinp[4].value,

}
// console.log(valinp[2].gmail);



// let arrgmail = inpvalgmail.split('') 
// console.log(arrgmail);

let flag = 0

// span[index].addEventListener('click' , myfunc)
span.forEach((val) => {

    if (flag == 0) {
        span[1].addEventListener('click', myfunc1)
        flag = 1

    } else {

        span[0].addEventListener('click', myfunc2)
        flag = 0
    }



})





function myfunc1() {

    // e.preventDefault()

    // span[0].setAttribute('inert' , false)
    span[1].style.background = 'rgb(74 222 128)'
    span[1].style.color = 'white'
    span[1].style.opacity = 1
    span[0].style.opacity = 0.6
    span[0].style.background = 'rgb(156 163 175)'
    span[0].style.color = 'white'
    wlc.style.display = 'flex'
    sign.style.display = 'none'
    inps[0].style.display = 'none'
    inps[1].style.display = 'none'
    pass.style.display = 'block'
    setpass.style.display = 'none'
    _start.style.display = 'none'
    login.style.display = 'block'
    gmailadd.style.display = 'none'
    gmailin.style.display = 'block'
    pfirst.style.display = 'none'
    plast.style.display = 'none'
    pgmail.style.display = 'none'
    pingmail.style.display = 'none'
    psetpas.style.display = 'none'

    // allinp[0].value = ''
    // allinp[1].value = ''
    // allinp[2].value = ''
    // allinp[3].value = ''
    // allinp[4].value = ''
    // allinp[5].value = ''
    // pingmail.style.display = 'none'



    // e.preventDefault()

}


function myfunc2() {
    span[1].style.background = 'rgb(156 163 175)'
    span[1].style.color = 'white'
    span[1].style.opacity = 0.6
    span[0].style.opacity = 1
    span[0].style.background = 'rgb(74 222 128)'
    span[0].style.color = 'white'
    wlc.style.display = 'none'
    sign.style.display = 'flex'
    inps[0].style.display = 'block'
    inps[1].style.display = 'block'
    pass.style.display = 'none'
    setpass.style.display = 'block'
    _start.style.display = 'block'
    login.style.display = 'none'
    gmailadd.style.display = 'block'
    gmailin.style.display = 'none'
    psetpas.style.display = 'none'
    pinpas.style.display = 'none'
    pingmail.style.display = 'none'
    pgmail.style.display = 'none'
    pingmail.style.display = 'none'
    // allinp[0].value = ''
    // allinp[1].value = ''
    // allinp[2].value = ''
    // allinp[3].value = ''
    // allinp[4].value = ''
    // allinp[5].value = ''

}
// console.log(allinp[0].value);
// console.log(allinp[0]);
allinp.forEach((val, i) => {
    val.addEventListener('keyup', (e) => {
        // console.log(e.keyCode);
        if (allinp[0].value.length != 0) {
            if (e.keyCode != 8) {
                pfirst.style.display = 'flex'
                // pfirst.style.display = 'none'
                plast.style.display = 'none'
                pgmail.style.display = 'none'
                psetpas.style.display = 'none'

            }

        } else if (e.keyCode == 8 && allinp[0].value.length == 0) {

            // alert('salam')

            pfirst.style.display = 'none'

        }

        if (allinp[1].value.length != 0) {
            if (e.keyCode != 8) {
                plast.style.display = 'flex'

            }

        } else if (e.keyCode == 8 && allinp[1].value.length == 0) {

            // alert('salam')

            plast.style.display = 'none'

        }


        if (allinp[2].value.length != 0) {
            if (e.keyCode != 8) {
                pgmail.style.display = 'flex'

            }

        } else if (e.keyCode == 8 && allinp[2].value.length == 0) {

            // alert('salam')

            pgmail.style.display = 'none'

        }




        if (allinp[3].value.length != 0) {
            if (e.keyCode != 8) {
                pingmail.style.display = 'flex'
                pinpas.style.display = 'none'
                pfirst.style.display = 'none'
                plast.style.display = 'none'
                pgmail.style.display = 'none'
                // psetpas.style.display = 'none'
                // console.log(psetpas);
                // allinp[4].value = ''


            }

        } else if (e.keyCode == 8 && allinp[3].value.length == 0) {

            // alert('salam')

            pingmail.style.display = 'none'
            pinpas.style.display = 'none'
            pfirst.style.display = 'none'
            plast.style.display = 'none'
            pgmail.style.display = 'none'
            // psetpas.style.display = 'none'

        }

        if (allinp[4].value.length != 0 && allinp[3].value.length == 0) {
            if (e.keyCode != 8) {
                psetpas.style.display = 'flex'

            }

        } else if (e.keyCode == 8 && allinp[4].value.length == 0) {

            // alert('salam')

            psetpas.style.display = 'none'

        }





        if (allinp[5].value.length != 0) {
            if (e.keyCode != 8) {
                pinpas.style.display = 'flex'
                // psetpas.style.display = 'none'

            }

        } else if (e.keyCode == 8 && allinp[5].value.length == 0) {

            // alert('salam')

            pinpas.style.display = 'none'
            // psetpas.style.display = 'none'
            _true = 0

        }

    })

})


let _true = 0
let _x = false


allinp.forEach((val, i) => {
    val.addEventListener('input', _blur)

})



function _blur(x) {
    // let checkagain = myFetch.map((val)=>{

    // })
    // console.log(checkagain);

    if (allinp[0].value.length < 3) {
        allinp[0].style.outline = '2px solid red'
        allinp[0].style.border = '1px solid red'

    } else {


        allinp[0].style.outline = '2px solid green'
        allinp[0].style.border = '1px solid green'
        //     _true++
        // console.log(_true);

        if (allinp[1].value.length < 4) {

            allinp[1].style.outline = '2px solid red'
            allinp[1].style.border = '1px solid red'

        } else {

            allinp[1].style.outline = '2px solid green'
            allinp[1].style.border = '1px solid green'
            let checkagain = valinp?.some((val, i) => {
                if (val.gmail == allinp[2].value) {
                    return true
                }

            })
            // console.log(checkagain);
            let inpvalgmail = allinp[2].value

            if (inpvalgmail.search('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+') || checkagain == true) {
                allinp[2].style.outline = '2px solid red'
                allinp[2].style.border = '1px solid red'



            } else {
                allinp[2].style.outline = '2px solid green'
                allinp[2].style.border = '1px solid green'
                let inpvalpas = allinp[4].value

                let checkagain2 = valinp?.some((val, i) => {
                    if (val.password == allinp[4].value) {
                        return true
                    }

                })
                // console.log(checkagain2);

                // console.log(inpvalgmail);

                //     _true++
                // console.log(_true);
                // allinp[2].setAttribute('data-true' , 'on')






                if (inpvalpas.search('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$') || checkagain2 == true) {

                    allinp[4].style.outline = '2px solid red'
                    allinp[4].style.border = '1px solid red'

                } else {

                    // console.log(inpvalgmail);
                    allinp[4].style.outline = '2px solid green'
                    allinp[4].style.border = '1px solid green'
                    _true++
                    console.log(_true);
                    // allinp[4].setAttribute('data-true' , 'on')

                }
            }
        }
    }
}







_start.addEventListener('click', () => {
    let _bgset = allinp[2].style.borderColor
    let _bpset = allinp[4].style.borderColor




    if (_true >= 1 && _bgset == 'green' && _bpset == 'green') {
        span[1].removeEventListener('click', myfunc1())



        _true = 0
        _id++

        newvalinp = {
            id: (valinp.length) + 1,
            name: allinp[0].value,
            lname: allinp[1].value,
            gmail: allinp[2].value,
            password: allinp[4].value,

        }
        valinp.push(newvalinp)
        localStorage.setItem('userData', JSON.stringify(valinp))
      
        console.log(valinp);
        allinp[0].value = ''
        allinp[1].value = ''
        allinp[2].value = ''
        allinp[4].value = ''
        allinp[0].style.border = 'none'
        allinp[1].style.border = 'none'
        allinp[2].style.border = 'none'
        allinp[4].style.border = 'none'
        // allinp[].style.border = 'none'
        allinp[0].style.outline = '1px solid gray'
        allinp[1].style.outline = '1px solid gray'
        allinp[2].style.outline = '1px solid gray'
        allinp[4].style.outline = '1px solid gray'


        // console.log('ok');
        alert('welcome')

        // console.log(valinp[0].name);





    } else {
        alert('try again...')
    }
})

let truein = 0

inpin.forEach((val) => {
    val.addEventListener('input', _blur2)

})
let numId = 0

function _blur2() {
    let checkagain3 = valinp?.some((val) => {

        if (val.gmail == allinp[3].value) {
            numId = val.id
            // console.log(numId);

            return true

        }
    })
    let checkagain4 = valinp?.some((val) => {

        if (val.password == allinp[5].value && numId == val.id) {
            return true

        }
    })

    if (checkagain3) {
        allinp[3].style.outline = '2px solid green'
        allinp[3].style.border = '1px solid green'
        // console.log('yes');
        // console.log(val.gmail);
        if(checkagain4){
            allinp[5].style.outline = '2px solid green'
            allinp[5].style.border = '1px solid green'
            truein++

        }else{
            allinp[5].style.outline = '2px solid red'
            allinp[5].style.border = '1px solid red'

        }
    
    
    
    }else{
        allinp[3].style.outline = '2px solid red'
        allinp[3].style.border = '1px solid red'

    }

}










login.addEventListener('click', () => {
    let _bgin = allinp[3].style.borderColor
    let _bpin = allinp[5].style.borderColor
    let myFetch = JSON.parse(localStorage.getItem('userDat'))
    if (truein >= 1 && _bgin == 'green' && _bpin == 'green') {
        alert('login success')
        window.location.href = 'https://sedmahdihashemi.github.io/pesonalorg/'
    } else {
        alert('try again ...')
    }


})





// console.log(someval);










