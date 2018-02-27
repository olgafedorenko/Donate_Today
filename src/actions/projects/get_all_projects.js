
export const getAllProjects = (userName) => {
    return  (
        fetch(`http://127.0.0.1:5000/get_all_projects`)
            .then(response => response.json())

    )
}

