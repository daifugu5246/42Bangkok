$(document).ready(function () {
  let getCookies = document.cookie;
  console.log(document.cookie);
  if (getCookies.length > 0) {
    const cookies = getCookies.split(";");
    cookies.forEach((element) => {
      var todo = $("<div>");
      var list = $("#ft_list");
      todo.click(() => {
        let confirmAction = confirm("Are you sure to remove this TO DO?");
        if (confirmAction) {
          todo.remove();
          document.cookie =
            element.split("=")[0] + "=; expires=Mon, 01 Jan 1000 00:00:00 UTC;";
        }
      });
      todo.addClass("todo");
      todo.text(element.split("=")[1]);
      list.prepend(todo);
    });
  }

  $("#new").click(() => {
    var item = prompt("Enter an item for the list:");
    var todo = $("<div>");
    let name = new Date().getTime();
    todo.addClass("todo");
    todo.text(item);
    var list = $("#ft_list");
    console.log(item);
    if (item != "" && item != null) {
      document.cookie = name + "=" + item;
      console.log(document.cookie);
      list.prepend(todo);
    }
    todo.click(() => {
      let confirmAction = confirm("Are you sure to remove this TO DO?");
      if (confirmAction) {
        todo.remove();
        document.cookie = name + "=; expires=Mon, 01 Jan 1000 00:00:00 UTC;";
      }
    });
  });
});
