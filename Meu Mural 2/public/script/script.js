document.addEventListener('DOMContentLoaded', () => {
    updatePost();
});

function apagar_item(id_do_item) {
    fetch(`http://192.168.15.187:3000/api/delete/${id_do_item}`, {
        method: "DELETE",
    }).then((res) => {
        updatePost();
    })
}

function updatePost() {
    fetch("http://192.168.15.187:3000/api/all").then((res) => {
        return res.json();
    }).then(json => {
        let postElements = '';

        let posts = JSON.parse(json);
        posts.forEach((post) => {
            let postElement = `<div id=${post.id} class="card mb-4 text-light bg-secondary m-3 ">

                                    <div class="card-header p-3"">
                                        <div class="d-flex justify-content-between align-items-end">
                                            <h5 class="card-title">${post.title}</h5>
                                            <button class="bi bi-trash3 btn btn-danger" onclick="apagar_item('${post.id}')"></button>
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <div class="card-text">${post.description}</div>
                                    </div>
                                </div>`

            postElements += postElement;
        });

        document.getElementById("posts").innerHTML = postElements;
    })
};

function newPost() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    if (title != '') {
        if (description != '') {
            let posts = { title, description };

            const options = {
                method: "POST",
                headers: new Headers({ 'content-Type': 'application/json' }),
                body: JSON.stringify(posts)
            }

            fetch("http://192.168.15.187:3000/api/new", options).then(res => {
                console.log(res)
                updatePost();
                document.getElementById("title").value = "";
                document.getElementById("desc").value = "";
            })
        }
    } else {
        if (title == '') {
            document.querySelector("#mensage").innerHTML += `
            <small class="alert alert-dismissible">
                <sub>Campos não preenchidos</sub>
            </small>
            `
            if (description == '') {
                document.querySelector("#mensage1").innerHTML += `
                <small class="alert alert-dismissible">
                    <sub>Campos não preenchidos</sub>
                </small>
                `
            }
        }
    }

    updatePost()
    document.querySelector("#mansage").innerHTML = ""
}