const blogs = require("./blogs-container.js");
let blogStack = () => {
  for (let I = 0; I < blogs.blogs.length; I++) {
    $("#blog-stack").append(
      "\
              <div class='row mt-3 wow fadeIn'>\
                    <!--Grid column-->\
                    <div class='col-lg-5 col-xl-4 mb-4'>\
                        <!--Featured image-->\
                        <div class='view overlay rounded z-depth-1'>" +
        `
                            <img src='${
                              blogs.blogs[I].headerImage
                            }' class='img-fluid' alt=''>` +
        `
                            <a href="https://mdbootstrap.com/automated-app-start/" target="_blank">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                    </div>
                    <!--Grid column-->
                    ` +
        `
                    <!--Grid column-->
                    <div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
                        <h3 class="mb-3 font-weight-bold dark-grey-text">
                            <strong>${blogs.blogs[I].title}</strong>
                        </h3>
                        <p class="grey-text"></p>
                        <a href="https://mdbootstrap.com/automated-app-start/" id='${
                          blogs.blogs[I]._id
                        }' target="_blank" class="btn btn-primary btn-md">See blog
                            <i class="fa fa-play ml-2"></i>
                        </a>
                    </div>
                    <!--Grid column-->

                </div>
  <hr class="mb-5">
    `
    );
  }
};
module.exports = blogStack;
