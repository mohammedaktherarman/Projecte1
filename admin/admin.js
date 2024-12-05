document.getElementById("addUserBtn").addEventListener("click", function() {
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if (userName === "" || password === "") {
        showError("Tots els camps són obligatoris.");
        return;
    }

    const newUser = { name: userName, role: role };

    const userSelect = document.getElementById("userSelect");
    const newOption = document.createElement("option");
    newOption.value = userName;  
    newOption.textContent = userName;
    userSelect.appendChild(newOption);

    document.getElementById("userName").value = "";
    document.getElementById("password").value = "";

});

document.getElementById("removeUserBtn").addEventListener("click", function() {
    const userSelect = document.getElementById("userSelect");
    const selectedUser = userSelect.value;

    if (selectedUser === "") {
        showError("Selecciona un usuari per eliminar.");
        return;
    }

    for (let i = 0; i < userSelect.options.length; i++) {
        if (userSelect.options[i].value === selectedUser) {
            userSelect.remove(i);
            break;
        }
    }

    userSelect.value = "";

});

