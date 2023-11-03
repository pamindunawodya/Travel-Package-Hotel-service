
$('#btnHotelAdd').on('click', () => {
    console.log("helooooooooooooooo")
    alert("okay added")
    HotelAddRequest();
});

HotelAddRequest=()=>{

    const name=document.getElementById('txtName0').value;
    const category=document.getElementById('txtCategory0').value;
    const location=document.getElementById('txtLocation0').value;
    const contact=document.getElementById('txtContact0').value;
    const email = document.getElementById('txtEmail0').value;
    const petsAllowOrNot = document.getElementById('txtpets0').value;
    const fileinput=document.getElementById('txtHotelImage0');
    const opt1 =document.getElementById('txtOption1').value;
    const opt2 =document.getElementById('txtOption2').value;
    const opt3 =document.getElementById('txtOption3').value;
    RegisterUserObj(name,category,location,contact,email,petsAllowOrNot,fileinput,opt1,opt2,opt3);

}



RegisterUserObj=(name,category,location,contact,email,petsAllowOrNot,fileinput,opt1,opt2,opt3) => {
    const hotelData = new FormData();

    const hotel = JSON.stringify({
        id:null,
        name:name,
        category:category,
        location:location,
        contact:contact,
        email:email,
        petsAllowOrNot:petsAllowOrNot,
        fileData:null,
        opt1:opt1,
        opt2:opt2,
        opt3:opt3
    });

    console.log(petsAllowOrNot)
    hotelData.append("fileData", fileinput.files[0]);
    hotelData.append("hotel", new Blob([hotel], { type: "application/json" }));

    console.log(email)
    console.log(fileinput);

    sendAjaxUserRequest(hotelData);
};

sendAjaxUserRequest = (hotelData) => {
    console.log("Added User");
    $.ajax({
        url: "http://localhost:8090/Mapping/api/hotel",
        type: "POST",
        data: hotelData,
        processData: false,  // Prevent jQuery from processing the data
        contentType: false,  // Set the content type to false to let the browser set it to "multipart/form-data"
        success:function (resp) {
            console.log(resp);
            alert(resp.message);
        },
        error: (e) => {
            console.error(e);
            alert(e);
        }
    });
};


//Update Hotel


$('#btnHotelUpdate').on('click', () => {
    console.log("helooooooooooooooo")
    alert("okay Update Button")
    HotelUpdateRequest();
});

HotelUpdateRequest=()=>{

    const name=document.getElementById('txtName0').value;
    const category=document.getElementById('txtCategory0').value;
    const location=document.getElementById('txtLocation0').value;
    const contact=document.getElementById('txtContact0').value;
    const email = document.getElementById('txtEmail0').value;
    const petsAllowOrNot = document.getElementById('txtpets0').value;
    const fileinput=document.getElementById('txtHotelImage0');
    const opt1 =document.getElementById('txtOption1').value;
    const opt2 =document.getElementById('txtOption2').value;
    const opt3 =document.getElementById('txtOption3').value;
    UpdateHotelObj(name,category,location,contact,email,petsAllowOrNot,fileinput,opt1,opt2,opt3);

}



UpdateHotelObj=(name,category,location,contact,email,petsAllowOrNot,fileinput,opt1,opt2,opt3) => {
    const updateHotelData = new FormData();

    updateHotelData.append("name", name);
    updateHotelData.append("category", category);
    updateHotelData.append("location", location);
    updateHotelData.append("contact", contact);
    updateHotelData.append("email", email);
    updateHotelData.append("petsAllowOrNot", petsAllowOrNot);
    updateHotelData.append('fileData', fileinput.files[0]);
    updateHotelData.append("opt1", opt1);
    updateHotelData.append("opt2", opt2);
    updateHotelData.append("opt3", opt3);

    console.log(email)
    console.log(fileinput);



    UpdateAjaxUserRequest(updateHotelData);
};

UpdateAjaxUserRequest = (hotelData) => {

    $.ajax({
        url: "http://localhost:8090/Mapping/api/hotel/update",
        type: "PUT",
        data: hotelData,
        processData: false,  // Prevent jQuery from processing the data
        contentType: false,  // Set the content type to false to let the browser set it to "multipart/form-data"
        success:function (resp) {
            console.log(resp);
            alert(resp.message);
        },
        error: (e) => {
            console.error(e);
            alert(e);
        }
    });
};

//delete hotel by email

$("#btnHotelDelete").click(function () {
    let Email=$("#txtEmail0").val();
    $.ajax({
        url: "http://localhost:8090/Mapping/api/hotel?email="+Email,
        type:"DELETE",
        dataType: "json",
        success:function (resp){
            alert(resp.message);
            loadAllUsers();
        },
        error:function (e) {
            alert(JSON.parse(e.responseText).message);

        }
    });
});
