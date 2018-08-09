const config = require('./../config')

const indexPage = function(){

  // make GET request to /pages
  return $.ajax({
    url: config.apiUrl + '/pages',
    method: 'GET'
  })
}

const showPage = function () {
  return $.ajax({
    url: config.apiUrl + '/pages/' + id,
    method: 'GET'
  })
}

const destroyPage = function () {
  return $.ajax({
    url: config.apiUrl + '/pages/' + id,
    method: 'DELETE'
  })
}

const updatePage = function () {
  return $.ajax({
    url: config.apiUrl + '/pages/' + id,
    method: 'PATCH',
    data
  })
}

const createPage = function () {
  return $.ajax({
    url: config.apiUrl + '/pages',
    method: 'POST',
    data
  })
  console.log('create ajax request sent')
}

module.exports = {
  indexPage,
  showPage,
  destroyPage,
  updatePage,
  createPage
}