import * as User from "../models/UserModel.js";

function top10View(){   

    User.init()
    
    
    const allStudentUsers = User.getUsers().filter((u) => u.type == "aluno");
    User.orderUsers(allStudentUsers)
    top10ListUsers(allStudentUsers)
    
}



// renderizar o top 10 
function top10ListUsers(allStudentUsers) {

    const loggedUsername = User.isLogged() ? User.getUserLogged().username : ""
    const maxSize = allStudentUsers.length <= 10 ? allStudentUsers.length : 10;
    let leaderboardList = ''
    for (let index = 0; index < maxSize; index++) {
        const styleColor = allStudentUsers[index].username === loggedUsername ? 'background-color:rgba(217, 103, 78, 0.15)': ''
        
        if (index == 0) {
            leaderboardList +=
                `
                <tr>
                    <td class="tdClassification" style="${styleColor}">
                        <div class="numberClassification1">
                            <img src="../assets/img/coroa (2).png" class="crown" style="background-color: f2f2f2;" alt="" width="40" height="35" srcset="">
                            ${index + 1}.
                        </div>
                    </td>
                    <td style="${styleColor}">
                    <div>
                        <img src="../assets/img/man (1).png" class="imgTop10" alt="" width="40" height="35" srcset="">
                        <span>${allStudentUsers[index].username}</span>
                    </div>
                    </td>
                    <td style="${styleColor}" class="tdPoints">${allStudentUsers[index].totalPoints}</td>
                </tr>
                `
        } else if (index == 1) {
            leaderboardList +=
                `
                <tr>
                    <td class="tdClassification" style="${styleColor}">
                        <div class="numberClassification1">
                            <img src="../assets/img/coroa (1).png" class="crown" style="background-color: f2f2f2;" alt="" width="40" height="35" srcset="">
                            ${index + 1}.
                        </div>
                    </td>
                    <td style="${styleColor}">
                        <div>
                            <img src="../assets/img/man (2).png" class="imgTop10" alt="" width="40" height="35" srcset="">
                            <span >${allStudentUsers[index].username}</span>
                        </div>
                    
                    </td>
                    <td style="${styleColor}" class="tdPoints">${allStudentUsers[index].totalPoints}</td>
                </tr>
                `
        } else if (index == 2) {
            leaderboardList +=
                `
                <tr>
                    <td class="tdClassification" style="${styleColor}">
                        <div class="numberClassification1">
                            <img src="../assets/img/coroa.png" class="crown" style="background-color: f2f2f2;" alt="" width="40" height="35" srcset="">
                            ${index + 1}.
                        </div>
                    </td>
                    <td style="${styleColor}">
                        <div>
                            <img src="../assets/img/gamer (1).png" class="imgTop10" alt="" width="40" height="35" srcset="">
                            <span >${allStudentUsers[index].username}</span>
                        </div>
                    
                    </td>
                    <td style="${styleColor}" class="tdPoints" >${allStudentUsers[index].totalPoints}</td>
                </tr>
                `
        } else {
            leaderboardList +=
                `
                <tr>
                    <td class="tdClassification" style="${styleColor}">
                        <div class="numberClassification2">
                            ${index + 1}.
                        </div>
                    </td>
                    <td style="${styleColor}">
                        <div >
                            <img src="../assets/img/gamer (1).png" class="imgTop10" alt="" width="40" height="35" srcset="">
                            <span>${allStudentUsers[index].username}</span>
                        </div>
                    
                    </td>
                    <td style="${styleColor}" class="tdPoints">${allStudentUsers[index].totalPoints}</td>
                </tr>
                `
        }

    }
    document.getElementById("top10Table").innerHTML = leaderboardList;
    renderAvatar()
}

// função que renderiza o avatar da navbar
function renderAvatar() {
    const imgUser = document.querySelector('.imgUser')
    const user = User.getUserLogged()

    if (user.avatarImg === '') {
        imgUser.innerHTML = user.username.charAt(0)
    } else {
        imgUser.style.background = `url(${user.avatarImg}) center / cover no-repeat `

    }
}



top10View()