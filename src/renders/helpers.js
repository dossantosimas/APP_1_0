const hide = (element)=>{
    element.classList.add('ocultar')
}

const show = (element)=>{
    element.classList.remove('ocultar')
}
const blockField = (query)=> {
    let bloked = document.querySelectorAll(`${query}`);
    bloked.forEach(query => {
        query.disabled = true
    });
}