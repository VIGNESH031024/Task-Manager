// var a=10;
// function ans(){
//      a=20;
//     console.log(a)
// }

// 


// function add(a,b){
//     return a+b
// }

// const add = (a,b) =>{
//     return a+b;
// }
// console.log(add(10,13))
// arr=[77,88,23,67,3]
// // arr.map((item,index)=>{
// //     console.log(index,item)    
// // })
// console.log(arr.sort(function(a, b){return a - b}))
// console.log('10'==10)
// console.log(10==='10')
// ages=[23,10,45,78,13,18]
// ages.push(19)
// result=ages.filter(check)
// function  check(age){
//     if (age>=18) {
//         return true
//     }else{
//         return false
//     }
// }
// console.log(ages.entries());
// str="Vignesh V S";
// arr1=[1,2,3,4]
// arr2=[5,6,7,8]
// console.log(arr1.concat(0,arr2));
// arr = [{
//     name: "VS",
//     age: "90",
//     dep: "ECE"
// }, {
//     name: "sri",
//     age: "50",
//     dep: "CSC"
// }, {
//     name: "varum",
//     age: "49",
//     dep: "EEE"
// }, {
//     name: "RV",
//     age: "60", 
//     dep: "ECE"
// }]

// result = arr.filter((itm) => itm.age > 50 & itm.dep == "ECE");
// console.log(result.map((a) => a.name));


// var btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     if (btn.innerHTML == "start") {
//         btn.innerHTML = "stop";
//         btn.style.backgroundColor = "red";
//     }
//     else {
//         btn.innerHTML = "start";
//         btn.style.backgroundColor = "green";

//     }
//


let arr = [{
    // id: "1",
    task: "Project",
    description: "Development",
    duration: "00:50:43"
}, {
    // id: "2",
    task: "Meeting",
    description: "Client Meeting",
    duration: "01:42:02"
}, {
    // id: "5",
    task: "Personal Break",
    description: "-",
    duration: "00:50:43"
}, {
    // id: "4",
    task: "Meeting",
    description: "Client Meeting",
    duration: "01:42:02"
}, {
    // id: "5",
    task: "Project",
    description: "Development",
    duration: "00:50:43"
}, {
    // id: "6",
    task: "Meeting",
    description: "Client Meeting",
    duration: "01:42:02"
}, {
    // id: "7",
    task: "Personal Break",
    description: "-",
    duration: "00:50:43"
}, {
    // id: "8",
    task: "Project",
    description: "Development",
    duration: "00:50:43"
}, {
    // id: "9",
    task: "Meeting",
    description: "Client Meeting",
    duration: "01:42:02"
}, {
    // id: "10",
    task: "Personal Break",
    description: "-",
    duration: "00:50:43"
}];

// ----- function to add tasks----

var data = {};
Render()
function store() {

    var tk = document.getElementById("task").value;
    var dn = document.getElementById("description").value;
    var dt = document.getElementById("duration").textContent;

    var newRow = {
        task: tk,
        description: dn,
        duration: dt
    }
    arr.push(newRow);
    Render();
}

let index;
function updateRow(task, des, dur) {
    console.log(task, des, dur)
    index = arr.findIndex(item => item.task === task && item.description === des && item.duration === dur);
    console.log(index)
    document.getElementById("task").value = task
    document.getElementById("description").value = des
    document.getElementById("duration").value = dur
}

function Update() {
    const updatetask = document.getElementById("task").value;
    const updatedes = document.getElementById("description").value;
    const updatedur = document.getElementById("duration").value;
    console.log(updatetask, updatedes, updatedur)
    if (index != -1) {
        arr[index] = {
            task: updatetask,
            description: updatedes,
            duration: updatedur,
        }
        Render();
        document.getElementById("task").value = "";
        document.getElementById("description").value = "";
        document.getElementById("duration").value = "00:00:00";
    }
}







// -------------function to display all task in table-----------------

function Render() {
    let ind = 0;
    const tbody = document.querySelector('tbody');
    let rows = arr.map(item => `
            <tr>
              
            <td>${ind += 1}</td>
                <td>${item.task}</td>
                <td>${item.description}</td>
                <td>${item.duration}</td>
                <td><button class="update" onclick="updateRow('${item.task}' , '${item.description}' , '${item.duration}')">Update</button></td>
                <td><button class="delete" onclick="deleteRow(${item.id})">Delete</button></td>
                
            </tr>
        `

    );

    tbody.innerHTML = rows.join('');

}
// Function to update a task


// Function to delete a task
function deleteRow(id) {
    const index = arr.findIndex(item => item.id == id);
    if (index !== -1) {
        arr.splice(index, 1);
        Render();

    }
}




//---------function to filter the task---------------------------

document.getElementById('taskSelect').addEventListener('change', function () {
    const curr = this.value;
    const tbody = document.querySelector('tbody'); // Define tbody here
    const frow = arr.filter(item => curr == 'All' || curr == item.task).map(item => `
            <tr>
                
                <td>${item.task}</td>
                <td>${item.description}</td>
                <td>${item.duration}</td>
                <td><button class="update" onclick="updateRow(${item.id})">Update</button></td>
                <td><button class="delete" onclick="deleteRow(${item.id})">Delete</button></td>
            </tr>
        `);

    tbody.innerHTML = frow.join('');
});

// --------------timer-------------------------
seconds = 0;
minutes = 0;
hours = 0;
isRunning = false
let formatedtime;
function StartStop() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                minutes++;
                seconds = 0;
                if (minutes >= 60) {
                    hours++;
                    minutes = 0;
                }
            }
            formatedtime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            document.getElementById("stopwatch").innerHTML = formatedtime;

            document.getElementById("startstop").innerText = "stop";

            isRunning = true;


        }, 1000)

    }
    else {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("startstop").innerText = "start";
        document.getElementById("stopwatch").innerHTML = formatedtime;
        document.getElementById("duration").value=formatedtime;


    }
}

function Reset() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    formatedtime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    document.getElementById("stopwatch").innerHTML = formatedtime;
    document.getElementById("duration").value = formatedtime; // Fix the typo here
}











