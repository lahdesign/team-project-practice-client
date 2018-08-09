const apiUrl = require("../config.js");
const blogContainer = require("./blogs-container.js");
let blogs = () => {
  $.ajax({
    url: apiUrl.apiUrl + "/blogs",
    method: "GET"
    // headers: {
    //   Authorization: "Bearer=" + authenticatedUser.user.token
    // }
  })
    .then(data => {
      blogContainer.blogs = data;
      console.log(blogContainer);
    })
    .catch(() => {
      console.log("error");
    });
};
module.exports = blogs;
