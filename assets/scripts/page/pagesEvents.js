const api = require('./pagesApi.js')
const ui = require('./pagesUi.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetPages = function(event){

  // prevent default submit action
  event.preventDefault()

  // make API call
  api.index()

  // if API call is successful then
  .then(ui.onIndexSuccess)

  // if API call fails then
  .catch(ui.onError)

}

const onGetPage = function (event) {
  event.preventDefault()

  // create js object from user form data
  const data = getFormFields(event.target)

  // input validation
  if (data.page.id === '') {
    $('#content').html('<p>ID is required</p>')

  } else {

    // make API call with data
    api.show(data)
      .then(ui.onShowSuccess)
      .catch(ui.onError)
  }
 }

const onDeletePage = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  // input validation
  if (data.page.id === '') {
    $('#content').html('<p>ID is required</p>')

  } else {
    api.destroy(data)
      .then(ui.onDestroySuccess)
      .catch(ui.onError)
  }
}

const onUpdatePage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  // input validation
  if (data.page.id === '') {
    $('#content').html('<p>ID is required</p>')

  } else {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onError)
  }
}

const onCreatePage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('create page button clicked')

  // input validation
  if (data.blog.blogId === '') {
    $('#content').html('<p>Blog ID is required</p>')

  } else {
    api.create(data)
      .then(ui.onCreateSuccess)
      .catch(ui.onError)
  }
}

module.exports = {
  onGetPages,
  onGetPage,
  onDeletePage,
  onUpdatePage,
  onCreatePage
}