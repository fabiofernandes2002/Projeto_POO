class Video{
    #title = ''
    #description = ''
    #tags = ''
    #urlVideo = ''
    #chapters = {}
    #like = 0
    #comments = ''

    constructor(title, description, tags, urlVideo, chapters, like, comments) {
        
        this.#title = title
        this.#description = description
        this.#tags = tags
        this.#urlVideo = urlVideo
        this.#chapters = chapters
        this.#like = like
        this.#comments = comments
    }

}