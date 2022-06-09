import * as User from "../models/UserModel.js";

User.init()
const allStudentUsers = User.getUsers().filter((u) => u.type == "aluno");

// export default function getUserClassification() {
//     const allStudentUsers = User.getUsers().filter((u) => u.type == "aluno")
//     UserPosition.innerHTML = allStudentUsers[index]
// }


User.orderUsers(allStudentUsers)
console.log(allStudentUsers);


function top10ListUsers() {
    
    const maxSize = allStudentUsers.length <= 10 ? allStudentUsers.length : 10;
    let leaderboardList = ''
    for (let index = 0; index < maxSize; index++) {
        
            if(index == 0) {
                leaderboardList +=
                `
                <tr>
                    <td>
                        <img src="../assets/img/coroa (2).png" style="background-color: f2f2f2;" alt="" width="50" height="40" srcset="">
                        ${index + 1}.
                    </td>
                    <td>
                    <div style="margin-right: 2em; width:100%">
                        <img src="../assets/img/man (1).png" alt="" width="50" height="40" srcset="">
                        ${allStudentUsers[index].username}
                    </div>
                    </td>
                    <td>${allStudentUsers[index].totalPoints ? allStudentUsers[index].totalPoints : 0}</td>
                </tr>
                `
            }else if(index == 1){
                leaderboardList +=
                `
                <tr>
                    <td>
                        <img src="../assets/img/coroa (1).png" style="background-color: f2f2f2;" alt="" width="50" height="40" srcset="">
                        ${index + 1}.
                    </td>
                    <td>
                        <div style="margin-right: 2em; width:100%">
                            <img src="../assets/img/man (2).png"  alt="" width="50" height="40" srcset="">
                            ${allStudentUsers[index].username}
                        </div>
                    
                    </td>
                    <td>${allStudentUsers[index].totalPoints ? allStudentUsers[index].totalPoints : 0}</td>
                </tr>
                `
            }else if(index == 2){
                leaderboardList +=
                `
                <tr>
                    <td>
                        <img src="../assets/img/coroa.png" style="background-color: f2f2f2;" alt="" width="50" height="40" srcset="">
                        ${index + 1}.
                    </td>
                    <td>
                        <div style="margin-right:2em; width:100%">
                            <img src="../assets/img/gamer (1).png"  alt="" width="50" height="40" srcset="">
                            ${allStudentUsers[index].username}
                        </div>
                    
                    </td>
                    <td>${allStudentUsers[index].totalPoints ? allStudentUsers[index].totalPoints : 0}</td>
                </tr>
                `
            }else{
                leaderboardList +=
                `
                <tr>
                    <td>
                        <div style="margin-left: 3em;">
                            ${index + 1}.
                        </div>
                    </td>
                    <td>
                        <div style="margin-right:2em; width:100%">
                            <img src="../assets/img/gamer (1).png"  alt="" width="50" height="40" srcset="">
                            ${allStudentUsers[index].username}
                        </div>
                    
                    </td>
                    <td>${allStudentUsers[index].totalPoints ? allStudentUsers[index].totalPoints : 0}</td>
                </tr>
                `
            }
            
    }
    document.getElementById("top10Table").innerHTML = leaderboardList;
    
}

top10ListUsers()