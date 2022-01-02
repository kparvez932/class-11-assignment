
//...............OUR DEVELOPERS DOM.................//
const team = document.querySelector('.team')

devs.map(devloper_data => {

    team.innerHTML += `

        <div class="team-item">
            
            <img src="${devloper_data.photo}" alt="">
            <h2>${devloper_data.name}</h2>
            <span>Skills : ${devloper_data.skill}</span>
            <p>Age : ${devloper_data.age}</p>
            <p>Location : ${devloper_data.location}</p>
            <p>Income : $${devloper_data.income}</p>

        
        </div>

    `;
});



//...............OUR DEVELOPERS DOM.................//

const student = document.querySelector('.student')

chatro.map(student_data =>{

    student.innerHTML +=`
    
    <div class="student-list">
            <img src="${student_data.photo}" alt="">
            <h2>${student_data.school}</h2>
            <p>Name : ${student_data.name}</p>
            <p>Father's Name : ${student_data.f_name}</p>
            <p>Class : ${student_data.classs}</p>
            <p>Blood Grop : ${student_data.b_group}</p>
            <p>Contact : ${student_data.contact}</p>
        </div>

    `
}
)

//...............MY FAMILY DOM.................//

const tabody = document.querySelector('.data table tbody')
poribar.map(family_data =>{
    tabody.innerHTML +=`
        <tr>
            <td>${family_data.sl}</td>
            <td>${family_data.name}</td>
            <td>${family_data.age}</td>
            <td>${family_data.phone}</td>
            <td>${family_data.location}</td>
            <td>${family_data.relation}</td>
            <td><img src="${family_data.photo}" alt=""></td>
        </tr>
    `
})


