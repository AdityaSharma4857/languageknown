function show() {
  event.preventDefault();

  let name = document.getElementById("name");
  let java = document.getElementById("java");
  let js = document.getElementById("js");
  let python = document.getElementById("python");
  let ans = document.getElementById("ans");

  if (name.value == "") {
    alert("Name cannot be empty");
    ans.innerHTML = "";
    name.focus();
    return;
  }
  else if (name.value.trim() == "") {
    alert("Name cannot be spaces");
    ans.innerHTML = "";
    name.value = "";
    name.focus();
    return;
  }
  else if (!name.value.match(/^[A-Za-z ]+$/)) {
    alert("Name should contain only alphabets");
    ans.innerHTML = "";
    name.value = "";
    name.focus();
    return;
  }


  let languages = "";
  if (java.checked) languages = languages + "Java";
  if (js.checked) languages = languages + " JavaScript";
  if (python.checked) languages = languages + " Python";

  let msg = "name=" + name.value + " languages = " + languages;
  ans.innerHTML = msg;

}