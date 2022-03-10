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

//const newComment = async(even) => {
//   event.preventDefault();
// const description = document.querySelector('#comment-desc').value.trim();

// if (description) {
//   const response = await fetch(`/api/comments`, {
//     method: 'POST',
//     body: JSON.stringify({description }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (response.ok) {
//     document.location.replace('/dashboard');
//   } else {
//     alert('Failed to create comment post');
//   }
// }
// };

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

//document
  //.querySelector('.new-comment-form')
  //.addEventListener('save', newComment);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);
