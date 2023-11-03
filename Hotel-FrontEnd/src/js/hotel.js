
loadAllUsers();

//
// $('#btnHotelAdd').on('click', () => {
// alert("okay added")
//     HotelAddRequest();
// });
//
// HotelAddRequest=()=>{
//     const name=document.getElementById('txtName0').value;
//     const category=document.getElementById('txtCategory0').value;
//     const location=document.getElementById('txtLocation0').value;
//     const contact=document.getElementById('lblcontact').value;
//     const email = document.getElementById('txtEmail0').value;
//     const petsAllowOrNot = document.getElementById('txtpets0').value;
//     const fileinput=document.getElementById('txtHotelImage0');
//     const opt1 =document.getElementById('txtOption1');
//     const opt2 =document.getElementById('txtOption2');
//     const opt3 =document.getElementById('txtOption3');
//     RegisterUserObj(name,category,location,contact,email,petsAllowOrNot,fileinput,opt1,opt2,opt3);
//
// }
//
//
//
// RegisterUserObj=(name,category,location,contact,email,petsAllowOrNot,fileinput,opt1,opt2,opt3) => {
//     const hotelData = new FormData();
//
//     hotelData.append("name", name);
//     hotelData.append("category",category);
//     hotelData.append("location", location);
//     hotelData.append("contatct", contact);
//     hotelData.append("email",email);
//     hotelData.append('petsAllowOrNot', petsAllowOrNot);
//     hotelData.append('file', fileinput.files[0]);
//     hotelData.append('opt1', opt1);
//     hotelData.append('opt2', opt2);
//     hotelData.append('opt3', opt3);
//
//     console.log(email)
//     console.log(fileinput);
//
//     sendAjaxUserRequest(hotelData);
// };
//
// sendAjaxUserRequest = (hotelData) => {
//     console.log("Added User");
//     $.ajax({
//         url: "http://localhost:8080/Mapping/api/user/new/user",
//         type: "POST",
//         data: hotelData,
//         processData: false,  // Prevent jQuery from processing the data
//         contentType: false,  // Set the content type to false to let the browser set it to "multipart/form-data"
//         success:function (resp) {
//             console.log(resp);
//             alert(resp.message);
//         },
//         error: (e) => {
//             console.error(e);
//             alert(e);
//         }
//     });
// };
//


// //get all hotel database
// $("#btnHotelGetAll").click(function (){
//     console.log("btn get")
//     //send ajax request to the customer controller
//     loadAllUsers();
// });

function loadAllUsers() {

    function loadHotelData() {
        $.ajax({
            url: 'http://localhost:8090/Mapping/api/hotel', // Replace with your actual backend URL
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                if (data.code === '200') {
                    var hotels = data.data;
                    var hotelList = $('#card-container');

                    // Iterate through the hotel data and create card elements
                    for (var i = 0; i < hotels.length; i++) {
                        var hotel = hotels[i];
                        var card = `
                                      <div class="col-12 col-md-6 col-lg-3 card-wrapper mt-4">
                                        <div class="card">
                                          <img class="card-img-top" src="images/1.jpg" alt="...">
                                          <div class="card-body">
                                            <!--  Customize this section  -->
                                             <div class="card-title" title=""><u><h5>`+hotel.name+`</h5></u></div>
                                              <div class="card-title" title="">`+hotel.location+`</div>
                                              <div class="card-title" title="">`+hotel.category+`</div>
                                              <div class="card-title" title="">`+hotel.contact+`</div>
                                              <div class="card-title" title="">`+hotel.email+`</div>
                                              <div class="card-title" title="">`+hotel.opt1+`</div>
                                              <div class="card-title" title="">`+hotel.opt2+`</div>
                                              <div class="card-title" title="">`+hotel.opt3+`</div>

                                            <div style="float: right"><small>Free guid</small></div>
                                            <!--  End  -->
                                          </div>
                                        </div>
                                      </div>
                        `;



                        hotelList.append(card);

                        $("#card-container .col-12:last-child div img").attr('src', `data:image/png;base64,`+hotel.fileData+``);
                    }
                } else {
                    // Handle the error case here
                    console.log('Error: ' + data.message);
                }
            },
            error: function (error) {
                // Handle the error case here
                console.log('Error: ' + error);
            }
        });
    }

    // Call the function to load hotel data
    loadHotelData();




}

$('.col-12.col-md-6.col-lg-3.card-wrapper.mt-4').on('click', () => {
    console.log("aaaaaa")
});