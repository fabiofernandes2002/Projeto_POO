class User{
    #name = ''
    #email = ''
    #city = ''
    #password = ''
    #confirmPassword = ''
    #birthDate = ''
    #genre = ''
    #avatar = {}
    #badge = {}
    #points = 0


    constructor(name, email, city, password, confirmPassword, birthDate, genre, avatar, badge, points) {
        
        this.#name = name
        this.#email = email
        this.#city = city
        this.#password = password
        this.#confirmPassword = confirmPassword
        this.#birthDate = birthDate
        this.#genre = genre
        this.#avatar = avatar
        this.#badge = badge
        this.#points = points
    }

}