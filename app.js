const minute = document.querySelector('#minutes')
const time = document.querySelector('#time')
const run = document.querySelector('#run')
const output = document.querySelector('#output')

minute.addEventListener('change', () => {
    time.innerHTML = minute.value
})

run.addEventListener('click', () => { 
    run.disabled = true
    run.classList.remove('run')
    run.classList.add('disabled')
    let time = minute.value * 60

        const timer = setInterval(() => {
        
            if (time === 0) {

                clearInterval(timer)

                run.disabled = false
                run.classList.add('run')
                run.classList.remove('disabled')

                output.innerHTML = '0:00'

            } else {
                
                minutes = Math.floor(time/60%60)
                seconds = time%60

                if(seconds < 10) output.innerHTML = `${minutes}:0${seconds}`
                else output.innerHTML = `${minutes}:${seconds}`
                
            }

            --time
            
        }, 1000)    
        

})