//Creating new blog post:

const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const description = document.querySelector('#blog-desc').value.trim();

  if (title && description) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog post');
    }
  }
};

//Updating a blog post
// const updateBtnHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/blogs/${id}`, {
//       method: 'GET',
//     });

//     if (response.ok) {
//       document.location.replace(`/api/blogs/${id}`);
//     } else {
//       alert('Failed to GET post');
//     }
//   }
//};
  //update form
// const editBtnHandler = async (event) => {
//   event.preventDefault();

//   const title = document.querySelector('#blog-title').value.trim();
//   const description = document.querySelector('#blog-desc').value.trim();

//     const response = await fetch(`/api/blogs/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({
//         title, 
//         description, 
//       }),
//       headers: {
//       'Content-Type': 'application/json',
//     },
//     });

//     if (response.ok) {
//       document.location.replace(`/dashboard`);
//     } else {
//       alert('Failed to update post');
//     }
//   };

// Deleting blog post

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};


document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.blog-list')
//   .addEventListener('click', updateBtnHandler);

// document
//   .querySelector('.edit-blog-form')
//   .addEventListener('submit', editBtnHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);

