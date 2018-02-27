
export const getProject = (id) => {
    return  (
        fetch(`http://127.0.0.1:5000/get_project/${id}`)
            .then(response => response.json())

    )
}

