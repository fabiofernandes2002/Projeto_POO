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
                <td  id="url">${epoch.image}</td>
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
                title: `tens a certeza que queres eleminar a " ${btn.id} "`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: 'No',
                customClass: {
                    actions: 'my-actions',
                    cancelButton: 'order-1 right-gap',
                    confirmButton: 'order-2',
                    denyButton: 'order-3',
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Epoch.removerEpoch(btn.id)
                    setTimeout(function(){window.location.reload(); ;}, 2000);;
                    Swal.fire('Saved!', '', 'success')
                     
                } else if (result.isDenied) {
                  Swal.fire(`A EPOCA  "${button.id}" não foi eleminadA `)
                }
              })
            
        })
        
    }
    
}

function renderRequeriment() {
    const requirement = document.querySelector('#txtRequeriment').value
    const epochs = Epoch.getEpochs()
    for (const epoch of epochs) {
        epoch.requirement = requirement
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
        renderRequeriment()
        alert("Epoch added with success!");
        renderEpochManage(Epoch.getEpochs());
        
      } catch (error) {
        alert(error.message);
      }
})

epochManageView()