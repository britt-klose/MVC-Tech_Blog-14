// Update form:
const editBtnHandler = async (event) => {
    event.preventDefault();
  
    const newTitle = document.querySelector('#new-title').value.trim();
    const newDescription = document.querySelector('#new-desc').value.trim();
    const id= document.querySelector("#blog-edit-id").value


    if (newTitle && newDescription) {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({newTitle, newDescription,}),
        headers: {
        'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert('Failed to update post');
      }
    }};
    
document
    .querySelector('.edit-blog-form')
    .addEventListener('submit', editBtnHandler);