const onIndexPageSuccess = function(response){
    // empty content element
    $('#content').html('')
  
    // loop through API response data
    response.pages.forEach(page => {
  
      // build HTML element with data
      const pageHTML = (`
        <p>Photo: ${page.photo}</p>
        <p>Description: ${page.description}</p>
        <p>Title: ${page.title}</p>
        <p>ID: ${page.blogId}</p>
        <br>
      `)
  
      // append pageHTML to content
      $('#content').append(pageHTML)
    })
  }
  
  const onShowPageSuccess = function (response) {
  
    const pageHTML = (`
    <p>Photo: ${page.photo}</p>
    <p>Description: ${page.description}</p>
    <p>Title: ${page.title}</p>
    <p>ID: ${page.blogId}</p>
    <br>
    `)
  
    $('#content').html(pageHTML)
  
    // reset form
    $('#showPage').trigger("reset")
  }
  
  const onDestroyPageSuccess = function(){
  
    $('#content').html("Page successfully deleted!")
  
    // reset form
    $('#deletePage').trigger("reset")
  }
  
  const onUpdatePageSuccess = function (response) {
    $('#content').html('You successfully updated the page')
    // reset form
    $('#updatePage').trigger("reset")
  }
  
  const onCreatePageSuccess = function () {
    $('#content').html('You created a new page!')
    // reset form
    $('#createPage').trigger("reset")
  }
  
  const onFailure = function(response){
    // log the error
    console.error(response)
  
    // display error to user
    $('#content').html('Something went wrong, please try again.')
  }
  
  module.exports = {
    onIndexPageSuccess,
    onShowPageSuccess,
    onDestroyPageSuccess,
    onUpdatePageSuccess,
    onCreatePageSuccess,
    onFailure
  }