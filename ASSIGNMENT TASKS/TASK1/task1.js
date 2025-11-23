document.getElementById("addBtn").addEventListener("click", function () {
    let taskInput = document.getElementById("taskInput");
    let priority = document.getElementById("priority");
    let taskList = document.getElementById("taskList");

    let taskText = taskInput.value.trim();
    let taskPriority = priority.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText} - <strong>${taskPriority}</strong></span>
        <button class="deleteBtn">Delete</button>
    `;

    if (taskPriority === "high") {
        li.style.color = "red";
    } else if (taskPriority === "medium") {
        li.style.color = "orange";
    } else {
        li.style.color = "green";
    }

    li.querySelector(".deleteBtn").addEventListener("click", function () {
        li.remove();
    });

    taskList.appendChild(li);

    taskInput.value = "";
});
