/* let todoElements = document.querySelectorAll(".todo"); */
let getCookies = document.cookie;
console.log(document.cookie);
if (getCookies.length > 0) {
  const cookies = getCookies.split(";");
  cookies.forEach((element) => {
    var todo = document.createElement("div");
    var list = document.getElementById("ft_list");
    todo.addEventListener("click", () => {
      let confirmAction = confirm("Are you sure to remove this TO DO?");
      if (confirmAction) {
        todo.remove();
        document.cookie = element.split("=")[0] + "=; expires=Mon, 01 Jan 1000 00:00:00 UTC;";
      }
    });
    todo.classList.add("todo");
    todo.textContent = element.split("=")[1];
    list.insertBefore(todo, list.firstChild);
  });
}

document.getElementById("new").addEventListener("click", () => {
  var item = prompt("Enter an item for the list:");
  var todo = document.createElement("div");
  let name = new Date().getTime();
  todo.classList.add("todo");
  todo.textContent = item;
  var list = document.getElementById("ft_list");
  console.log(item);
  if (item != "" && item != null) {
    document.cookie = name + "=" + item;
    console.log(document.cookie);
    list.insertBefore(todo, list.firstChild);
  }

  todo.addEventListener("click", () => {
    let confirmAction = confirm("Are you sure to remove this TO DO?");
    if (confirmAction) {
      todo.remove();
      document.cookie = name + "=; expires=Mon, 01 Jan 1000 00:00:00 UTC;";
    }
  });
});
