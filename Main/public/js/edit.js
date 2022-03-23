// Update form:
    const editBtnHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();
    const id= document.querySelector("#blog-edit-id").value


    if (title && description) {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title, description}),
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