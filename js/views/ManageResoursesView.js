import * as Epoch from "../models/EpochModel.js";
import * as Video from "../models/VideoModel.js";

function epochResoursesManageView() {
    Epoch.init()
    Video.init()
    renderResoursesManage(Video.getvideos())
    renderSltEpochs()
    renderChapterForm()
}

function renderChapterForm() {
    document.querySelector('#chapters').innerHTML = `
                        <div>
                        <label for="nrMinutes">Minutos</label>
                        <input type="number" class="nrMinutes">
                        <br><br>
                        <label for="nrSeconds">Segundos</label>
                        <input type="number" class="nrSeconds">
                        <br><br>
                        <label>Descrição</label>
                        <input type="text" class="descriptionChapter">
                        <br><br><br>
                        </div>
                        `
    document.querySelector('#addChapter').addEventListener('click', () => {
        
        const div = document.createElement('div');
        div.innerHTML = `
        <label for="nrMinutes">Minutos</label>
        <input type="number" class="nrMinutes">
        <br><br>
        <label for="nrSeconds">Segundos</label>
        <input type="number" class="nrSeconds">
        <br><br>
        <label>Descrição</label>
        <input type="text" class="descriptionChapter">
        <br><br><br>`
        document.querySelector('#chapters').appendChild(div)
    })
}

function renderResoursesManage(videos = []) {

    //const videos = Video.getvideos()
    let result = ''
    for (const video of videos) {

        let chapterHTML = `<td style="word-break:break-word">`
        for (const chapters of video.chapters) {
            chapterHTML += `<div>${"<b>" + chapters.time + "</b>" + "-" + chapters.content}</div>`
        }
        chapterHTML += `</td>`

        result += `
            <tr>
                <td >${video.videoTitle}</td>
                <td style="word-break:break-word">${video.urlVideo}</td>
                <td style="word-break:break-word;width:300px">${video.tags}</td>
                ${chapterHTML}
                <td style="text-align:center"><button id="${video.videoTitle}" type="button"  class="btn btn-danger btnRemove">Eliminar</button></td>
            </tr>
        `

    }


    document.querySelector('#bodyResoursesManage').innerHTML = result

    // CLICAR NO BOTÃO REMOVER
    const btnRemoves = document.querySelectorAll(".btnRemove");
    for (const button of btnRemoves) {
        button.addEventListener("click", () => {
            Swal.fire({
                title: `Tens a certeza que queres eliminar " ${button.id} "!`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Sim',
                denyButtonText: 'Não',
                customClass: {
                    actions: 'my-actions',
                    cancelButton: 'order-1 right-gap',
                    confirmButton: 'order-2',
                    denyButton: 'order-3',
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Video.removeVideo(button.id)
                    button.parentNode.parentNode.remove()
                    Swal.fire('Feito!')

                } else if (result.isDenied) {
                    Swal.fire(`O video "${button.id}" não foi eliminada! `)
                }
            })
        });
    }
}

function renderSltEpochs() {

    const epochs = Epoch.getEpochs()
    let select = ''
    for (const epoch of epochs) {
        select += `
            <option value="${epoch.idEpoch}">${epoch.epochTitle}</option>
        `

    }
    document.querySelector('#sltEpochs').innerHTML += select

}

document.querySelector('#manageResourses').addEventListener('submit', function (e) {
    e.preventDefault();

    let chapters = [];
    for (let index = 0; index < document.querySelectorAll(".nrMinutes").length; index++) {
        const obj = {
            time: document.querySelectorAll(".nrMinutes")[index].value + ":" + (document.querySelectorAll(".nrSeconds")[index].value.length === 1 ? "0" + document.querySelectorAll(".nrSeconds")[index].value : document.querySelectorAll(".nrSeconds")[index].value),
            seconds:Math.floor(+document.querySelectorAll(".nrMinutes")[index].value * 60) + +document.querySelectorAll(".nrSeconds")[index].value,
            content:document.querySelectorAll('.descriptionChapter')[index].value,
        }
        
        chapters.push(obj)
    }
    console.log(chapters);
    try {
        Video.add(
            +document.querySelector('#sltEpochs').value,
            document.querySelector('#txtNameResourse').value,
            document.querySelector('#txtUrlVideo').value,
            document.querySelector('#txtTags').value,
            chapters
        );
<<<<<<< HEAD
        alert("Video adicionado com sucesso!");
        renderChapterForm()
=======
        renderSltEpochs()
        alert("Video adicionado com sucesso!");
>>>>>>> 3ed94e7c4edeb9129f4c0692f35ca00806c49048
        renderResoursesManage(Video.getvideos())

    } catch (error) {
        alert(error.message);
    }
})

epochResoursesManageView()