import authenticatedUser from "../authenticated.js";
import apiUrl from "../config.js";
import modelAlert from "../modals/modalAlert.js";
let addTask = () => {
  $("#form-create-blog").on("submit", event => {
    let serialization = $("#form-create-blog").serializeArray();
    event.preventDefault();
    $.ajax({
      url: apiUrl.apiUrl + `/tasks`,
      method: "POST",
      headers: {
        Authorization: "Bearer=" + authenticatedUser.user.token
      },
      data: {
        task: {
          title: serialization[0].value,
          start_date: serialization[1].value,
          due_date: serialization[2].value,
          description: serialization[3].value,
          status: "In Process",
          user_id: serialization[4].value
        }
      }
    })
      .then(data => {
        $("#dashboard-container").html("");
        loadTasks();
        modelAlert("Task added succesfully", "Success");
        $("#add-task-modal").modal("hide");
      })
      .catch(() => {
        console.log(error);
      });
  });
};

export default addTask;
