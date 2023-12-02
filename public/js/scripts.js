function alterarTema() {
    const tema = localStorage.getItem("tema")
    const body = document.querySelector("body")
    const button = document.querySelector(".tema-button")

function descompletarTarefa(id) {
    fetch("http://localhost3000/descompletar", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.string({ id })
    })
    window.location.reload()
}

function excluirTarefa(id) {
    fetch("http://localhost3000/excluir", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.string({ id })
    })
}

function alterarTema(){
    const tema = localStorage.getItem("tema")
    const body = document.querySelector("body")
    const button = document.querySelector(".tema-button")

    if (tema) {
        let novoTema

        if (tema === "light") {
            novoTema = "dark"
            button.classList = `<img src="/public/imgagens/sun-icon.png" alt="icone de sol"`
            body.classList.remove("light")
            body.classList.add("dark")
        } else {
            novoTema = "light"
            button.classList = `<img src="/public/imgagens/moon-icon.png" alt="icone de lua"`
            body.classList.remove("dark")
            body.classList.add("light")
        }

        localStorage.setItem("tema", novoTema)
        return
    }

    localStorage.setItem("tema", "dark")
    body.classList.add("dark")
}




function verificarTema() {
    const tema = localStorage.getItem("tema")
    const body = document.querySelector("body")
    const button = document.querySelector(".tema-button")

    if (tema) {
        if (tema === "dark") {
            body.classList.add("dark")
            button.classList = `<img src="/imgagens/sun-icon.png" alt="icone de sol"`

        } else {
            body.classList.add("light")
            button.classList = `<img src="/imgagens/moon-icon.png" alt="icone de lua"`
        }
    }
}

verificarTema()
