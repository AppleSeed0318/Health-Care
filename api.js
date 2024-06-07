function getPatientList() {

    let username = 'coalition';
    let password = 'skills-test';
    let auth = btoa(`${username}:${password}`);


    fetch("https://fedskillstest.coalitiontechnologies.workers.dev",{
        headers: {
            'Authorization': `Basic ${auth}`
        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }).then(function (data) {
        console.log(data);

        updatePatientList(data);

        data.map((item) => {
            if(item.name == "Jessica Taylor") {
                updateUserInfo(item);
            }
        })

    }).catch(function (error) {
        console.warn(error);
    });

}

function updatePatientList(userList) {


    const patientString = userList.map((item) => {
        
        htmlString = "";

        htmlString +=   "<div class='patient-item'>" + 
                            "<div class='patient-info'>" + 
                                "<div class='patient-avatar'>" + 
                                    "<img src='"+item.profile_picture+"' alt = 'patient-image'/>" + 
                                "</div>" + 
                                "<div class='patient-name'>" + 
                                    "<p><strong>"+item.name+"</strong></p>" + 
                                    "<p>"+item.gender+": "+item.age+"</p>" + 
                                "</div>" + 
                            "</div>" + 
                            "<div class='patient-detail'>" + 
                                "<i class='fal fa-ellipsis-h'></i>" + 
                            "</div>" + 
                        "</div>";
         

        return htmlString;
    });

    console.log(patientString.join());

    document.getElementById("patient_container").innerHTML = patientString.join();
    
}

function updateUserInfo(user) {

    document.getElementById("user-detail-text-birth").innerHTML = user.date_of_birth;
    document.getElementById("user-detail-text-gender").innerHTML = user.gender;
    document.getElementById("user-detail-text-contact").innerHTML = user.phone_number;
    document.getElementById("user-detail-text-emergency").innerHTML = user.emergency_contact;
    document.getElementById("user-detail-text-provider").innerHTML = user.insurance_type;

    document.getElementById("user-detail-avatar-img").src = user.profile_picture;
}

getPatientList();