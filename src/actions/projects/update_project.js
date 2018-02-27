
export const UpdateProject = ( amount, project_id) => {

    var formData = new FormData();
    formData.append('amount', `${amount}`);
    return  (
        
        fetch(`http://127.0.0.1:5000/post_project/${project_id}`, {
            method: "POST",
            body: (formData)
        }, {mode: 'cors'})
        .then(response => response.json())
        .then ((results) => {console.log(results)}) 
    )
}