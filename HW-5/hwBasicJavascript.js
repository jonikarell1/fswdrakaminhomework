let data = []
let myForm = document.getElementById("myForm");
let nameInput = myForm.elements["nama"];
let ageInput = myForm.elements["umur"];
let moneyInput = myForm.elements["uang"];
const toasterNotif = document.getElementById("success-notif");



myForm.addEventListener("submit",  (e) => {
 

    
         e.preventDefault();
         const dataBaru = new Person(nameInput, ageInput,moneyInput);

        data.push({nama: dataBaru.name, umur: dataBaru.age, uang:dataBaru.money})
  
        console.log(data)
  
        averageUang(data)
        averageUmur(data)
        
        document.querySelector("#table tbody").innerHTML = data.map((user, index) => `
        <tr>
        <td>${index + 1}</td>
        <td>${user.nama}</td>
        <td>${user.umur}</td>
        <td>${user.uang}</td>
        </tr>`
        )
        .join('')
        showToaster() 
});


class Person {
    constructor(nameInput, ageInput, moneyInput){
        this.name = nameInput.value;
        this.age = parseInt(ageInput.value);
        this.money = parseInt(moneyInput.value);
    }
    validateName(){
        return !this.name
    }
} 


 async function showToaster() {
  toasterNotif.classList.add("show");
  await waitFor(2500);
  toasterNotif.classList.remove("show");
}

const waitFor = (delay) => new Promise((resolve) => setTimeout(resolve, delay));


function averageUang (datas){
    let totalUang = 0;
    let avgUang = 0;

    for (let i= 0; i < datas.length; i++){

        totalUang = totalUang + datas[i].uang
        avgUang = totalUang / datas.length
    }

    console.log(avgUang)
   
    document.getElementById("money").innerHTML = avgUang
    
}

function averageUmur (datas){
    let totalUmur = 0;
    let avgUmur = 0;

    for (let i= 0; i < datas.length; i++){

        totalUmur = totalUmur + datas[i].umur
        avgUmur = totalUmur / datas.length
    }

    console.log(avgUmur)
    document.getElementsByClassName("age")[0].innerHTML = avgUmur
    
}





