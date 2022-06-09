import * as User from "../models/UserModel.js";

User.init()
const allStudentUsers = User.getUsers().filter((u) => u.type == "aluno");

User.orderUsers(allStudentUsers)

function top10ListUsers() {

    const loggedUsername = User.isLogged() ? User.getUserLogged().username : ""
    const maxSize = allStudentUsers.length <= 10 ? allStudentUsers.length : 10;
    let leaderboardList = ''
    for (let index = 0; index < maxSize; index++) {
        const styleColor = allStudentUsers[index].username === loggedUsername ? 'background-color:rgba(217, 103, 78, 0.15)': ''
        
        if (index == 0) {
            leaderboardList +=
                `
                <tr>
                    <td class="text-center align-items-center">
                        <img src="../assets/img/coroa (2).png" style="background-color: f2f2f2;" alt="" width="40" height="35" srcset="">
                        ${index + 1}.
                    </td>
                    <td style="${styleColor}">
                    <div>
                        <img src="../assets/img/man (1).png" class="imgTop10" alt="" width="40" height="35" srcset="">
                        <span>${allStudentUsers[index].username}</span>
                    </div>
                    </td>
                    <td class="text-center align-items-center">${allStudentUsers[index].totalPoints ? allStudentUsers[index].totalPoints : 0}</td>
                </tr>
                `
        } else if (index == 1) {
            leaderboardList +=
                `
                <tr>
                    <td class="text-center align-items-center">
                        <img src="../assets/img/coroa (1).png" style="background-color: f2f2f2;" alt="" width="40" height="35" srcset="">
                        ${index + 1}.
                    </td>
                    <td style="${styleColor}">
                        <div>
                            <img src="../assets/img/man (2).png"  class="imgTop10" alt="" width="40" height="35" srcset="">
                            <span >${allStudentUsers[index].username}</span>
                        </div>
                    
                    </td>
                    <td class="text-center align-items-center">${allStudentUsers[index].totalPoints ? allStudentUsers[index].totalPoints : 0}</td>
                </tr>
                `
        } else if (index == 2) {
            leaderboardList +=
                `
                <tr>
                    <td class="text-center align-items-center">
                        <img src="../assets/img/coroa.png" style="background-color: f2f2f2;" alt="" width="40" height="35" srcset="">
                        ${index + 1}.
                    </td>
                    <td style="${styleColor}">
                        <div>
                            <img src="../assets/img/gamer (1).png" class="imgTop10" alt="" width="40" height="35" srcset="">
                            <span >${allStudentUsers[index].username}</span>
                        </div>
                    
                    </td>
                    <td class="text-center align-items-center">${allStudentUsers[index].totalPoints ? allStudentUsers[index].totalPoints : 0}</td>
                </tr>
                `
        } else {
            leaderboardList +=
                `
                <tr>
                    <td class="text-center align-items-center">
                        <div style="margin-left: 3em;">
                            ${index + 1}.
                        </div>
                    </td>
                    <td style="${styleColor}">
                        <div >
                            <img src="../assets/img/gamer (1).png" class="imgTop10" alt="" width="40" height="35" srcset="">
                            <span>${allStudentUsers[index].username}</span>
                        </div>
                    
                    </td>
                    <td class="text-center align-items-center">${allStudentUsers[index].totalPoints ? allStudentUsers[index].totalPoints : 0}</td>
                </tr>
                `
        }

    }
    document.getElementById("top10Table").innerHTML = leaderboardList;

}

top10ListUsers()