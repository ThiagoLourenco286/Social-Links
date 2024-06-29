module.exports = {

    posts: [
        {
            id: "sdadasd",
            title: "Tudo sobre Mural de Avisos ",
            description: "Um mural de avisos é uma ferramenta essencial em diversos ambientes, como escolas, escritórios, fábricas e áreas comunitárias. Ele serve para compartilhar informações importantes de maneira visível e acessível a todos."
        }
    ],

    getAll() {
        return this.posts
    },

    newPost(title, description) {
        this.posts.push({ id: genereteID(), title, description })
    },

    deletePost(id) {
        const new_list = this.posts.filter((post_new) => post_new.id != id)

        this.posts = new_list
    }

}

function genereteID() {
    return Math.random().toString(36).substring(2, 9);
}