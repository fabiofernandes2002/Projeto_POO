import * as Epoch from "../models/EpochModel.js";

function epochManageView() {
    Epoch.init()
    renderEpochManage(Epoch.getEpochs())
}

function renderEpochManage(epochs = []){

    let result = ''
    for (const epoch of epochs) {
        
        result += `
            <tr>
                <td>${epoch.period}</td>
                <td>${epoch.epochTitle}</td>
                <td  class="url">${epoch.image}</td>
                <td>${epoch.description}</td>
                <td><button type="button" class="btn btn-danger" id="${epoch.epochTitle}">Eliminar</button></td>
            </tr>
        ` 

    }
    document.querySelector('#tbodyManage').innerHTML = result

    let btnsRemove = document.querySelectorAll(".btn-danger")
    for (const btn of btnsRemove) {
        btn.addEventListener('click', ()=>{
            Swal.fire({
                title: `Tens a certeza que queres eliminar a " ${btn.id} "!`,
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
                    Epoch.removeEpoch(btn.id)
                    btn.parentNode.parentNode.remove()
                    Swal.fire('Feito!')
                     
                } else if (result.isDenied) {
                  Swal.fire(`A época "${btn.id}" não foi eliminada! `)
                }
              })
            
        })
        
    }
    
}

document.querySelector('#btnAddEpochs').addEventListener('click', function(e) {
    e.preventDefault()
    try {
        Epoch.add(
            document.querySelector('#txtCentury').value,
            document.querySelector('#txtNameEpoch').value,
            document.querySelector('#txtImg').value,
            document.querySelector('#txtDescription').value,
            document.querySelector('#txtRequeriment').value
        );
        alert("Época adicionada com sucesso!");
        renderEpochManage(Epoch.getEpochs());
        
      } catch (error) {
        alert(error.message);
      }
})

epochManageView()