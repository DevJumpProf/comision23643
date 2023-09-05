const getNameFetch = (idPost) => {
  try {
    //endpoint
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      .then((res) => {
        /* console.log(res); */
        return res.json();
      })
      .then((post) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          .then((res) => {
            /* console.log(res); */
            return res.json();
          })
          .then((user) => {
            console.log(
              `${user.name} vive en la calle:${user.address.street} `
            );
          });
      });
  } catch (error) {
    console.log(error);
  }
};
getNameFetch(48);
