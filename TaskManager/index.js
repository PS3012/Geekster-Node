const fs = require("fs").promises;
const path = require("path");
const readline = require("readline");

const filePath = path.join(__dirname, "tasks.txt");

async function initializeFile() {
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, "[]");
  }
}

async function readTasks() {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading tasks:", error.message);
    return [];
  }
}

async function writeTasks(tasks) {
  try {
    await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error("Error writing tasks:", error.message);
  }
}

function showMenu() {
  console.log("\nTask Manager");
  console.log("1. Add a new task");
  console.log("2. View tasks");
  console.log("3. Mark task as complete");
  console.log("4. Remove a task");
  console.log("5. Exit");
  console.log("Choose an option:");
}

async function handleInput(option, rl) {
  switch (option) {
    case "1":
      rl.question("Enter the new task: ", async (task) => {
        const tasks = await readTasks();
        tasks.push({ id: tasks.length + 1, task, completed: false });
        await writeTasks(tasks);
        console.log("Task added successfully!");
        showMenu();
      });
      break;
    case "2":
      const tasks = await readTasks();
      if (tasks.length === 0) {
        console.log("No tasks available.");
      } else {
        console.log("\nTasks:");
        tasks.forEach((task) => {
          console.log(
            `${task.id}. ${task.task} [${task.completed ? "✔" : "✘"}]`
          );
        });
      }
      showMenu();
      break;
    case "3":
      rl.question("Enter the task ID to mark as complete: ", async (id) => {
        const tasks = await readTasks();
        const task = tasks.find((t) => t.id === parseInt(id, 10));
        if (task) {
          task.completed = true;
          await writeTasks(tasks);
          console.log("Task marked as complete!");
        } else {
          console.log("Task not found!");
        }
        showMenu();
      });
      break;
    case "4":
      rl.question("Enter the task ID to remove: ", async (id) => {
        let tasks = await readTasks();
        const initialLength = tasks.length;
        tasks = tasks.filter((t) => t.id !== parseInt(id, 10));
        if (tasks.length < initialLength) {
          await writeTasks(tasks);
          console.log("Task removed successfully!");
        } else {
          console.log("Task not found!");
        }
        showMenu();
      });
      break;
    case "5":
      console.log("Exiting Task Manager. Goodbye!");
      rl.close();
      return;
    default:
      console.log("Invalid option! Please try again.");
      showMenu();
      break;
  }
}

async function main() {
  await initializeFile();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  showMenu();

  rl.on("line", (input) => {
    handleInput(input.trim(), rl);
  });
}

main();
