

const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })

} )

const elements = document.querySelectorAll('.last-one')

elements.forEach( (element) => myObserver.observe(element) )