
//Creating new comment

const newComment = async(event) => {
  event.preventDefault();

const description = document.querySelector('#comment-desc').value.trim();
console.log(description)
if (description) {
  console.log('front end hit')
  const response = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({description: description, blog_id: blog_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace(`/blogs/${id}`);
  } else {
    alert('Failed to create comment');
  }
}
};

//Deleting a comment
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace(`/blogs/${id}`);
      } else {
        alert('Failed to delete comment');
      }
    }
  };


//Updating your comment

// const updateHandler = async (event) => {
//     event.preventDefault();

//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');

//       const description = document.querySelector('#comment-desc').value.trim();
      
//       const response = await fetch(`/api/comments/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({description }),
//         headers: {
//         'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/dashboard');
//       } else {
//         alert('Failed to update comment');
//       }
//     }
//   };


// document
//   .querySelector('.edit-blog-form')
//   .addEventListener('submit', updateBtnHandler);

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newComment);

// document
//   .querySelector('.comment-list')
//   .addEventListener('click', delButtonHandler);

// document
//   .querySelector('.comment-list')
//   .addEventListener('submit', updateHandler);


