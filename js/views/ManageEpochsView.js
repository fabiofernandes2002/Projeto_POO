import * as Epoch from "../models/EpochModel.js";

function epochManageView() {
    Epoch.init()
    renderEpochManage(Epoch.getEpochs())
}

function renderEpochManage(epochs){

    let result = ''
    for (const epoch of epochs) {
        
        result += `
            <tr>
                <td>${epoch.period}</td>
                <td>${epoch.epochTitle}</td>
                <td>${epoch.image}</td>
                <td>${epoch.description}</td>
                <td><button type="button" class="btn btn-danger">Eliminar</button></td>
            </tr>
        ` 

    }
    document.querySelector('#tbodyManage').innerHTML = result
    
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