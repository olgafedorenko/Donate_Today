
export const postProject = (name, amount, total_amount, node_id, user_id, about, city, url, user_name) => {
        var formData = new FormData();
        formData.append('amount', `${amount}`);
        formData.append("about", `${about}`);
        formData.append("city", `${city}`);
        formData.append("node_id",`${node_id}`);
        formData.append("total_amount", `${total_amount}`);
        formData.append("user_id", `${user_id}`);
        formData.append("name", `${name}`);
        formData.append("currency", "USD");
        formData.append("participants", `${user_name}`);
        formData.append("image",null);
    return  (
        
        fetch(`http://127.0.0.1:5000/create_project`, {
            method: "POST",
            body: formData
        }, {mode: 'cors'})
        .then(response => response.json())
        //.then ((results) => {return (results)}) 
    )
}