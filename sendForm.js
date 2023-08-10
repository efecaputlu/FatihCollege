
//  Contact Form
function sendContactForm(){
    var params = {
      fullName: document.getElementById("firstName").value,
      fullName: document.getElementById("surame").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    const serviceID = "service_tip5s6r";
    const templateID = "template_vg996hk";
  
  emailjs.send(serviceID,templateID,params)
  .then(
    response => {
        console.log(response);
        alert("Form Submitted Successfully")
        document.getElementById("firstName").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
  )
  .catch((err) => console.log(err));
  }



  // Enroll Form
  function sendEnrollForm(){

    var currentClass = [];
    var heardFC = [];
 
      //Current Class *
      if (document.getElementById("checkboxP6").checked) {
        currentClass.push("P6");
      }
      if (document.getElementById("checkboxJHS3").checked) {
        currentClass.push("JHS 3");
      }
      if (document.getElementById("checkboxOtherClass").checked) {
        var otherClassInput = document.getElementById("otherClassInput").value;
        currentClass.push("Other: " + otherClassInput);
      }

      //How did you hear about Fatih College?
      if (document.getElementById("checkboxFacebook").checked) {
        heardFC.push("Facebook");
      }
      if (document.getElementById("checkboxNewspaper").checked) {
        heardFC.push("Newspaper");
      }
      if (document.getElementById("checkboxHandbill").checked) {
        heardFC.push("Handbill");
      }
      if (document.getElementById("checkboxRadio").checked) {
        heardFC.push("Radio");
      }
      if (document.getElementById("checkboxBanner").checked) {
        heardFC.push("Banner");
      }
      if (document.getElementById("checkboxFriend").checked) {
        heardFC.push("Friend");
      }
      if (document.getElementById("checkboxOtherSource").checked) {
        var otherSourceInput = document.getElementById("otherSourceInput").value;
        heardFC.push("Other: " + otherSourceInput);
      }

    var params = {
      firstName: document.getElementById("firstName").value,
      surname: document.getElementById("surname").value,
      date_of_birth: document.getElementById("date_of_birth").value,
      place_of_birth: document.getElementById("place_of_birth").value,
      current_school: document.getElementById("current_school").value,
      currentClass: currentClass.join(', '),

      father_name: document.getElementById("father_name").value,
      father_occupation: document.getElementById("father_occupation").value,
      father_phone: document.getElementById("father_phone").value,

      mother_name: document.getElementById("mother_name").value,
      mother_occupation: document.getElementById("mother_occupation").value,
      mother_phone: document.getElementById("mother_phone").value,
      
      area_city_region: document.getElementById("area_city_region").value,

      heardFC: heardFC.join(', ')
    };

    const serviceID = "service_tip5s6r";
    const templateID = "template_sbyhkpn";
  
  emailjs.send(serviceID,templateID,params)
  .then(
    response => {
        console.log(response);
        alert("Form Submitted Successfully")
        document.getElementById("firstName").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("date_of_birth").value = "";
        document.getElementById("place_of_birth").value = "";
        document.getElementById("current_school").value = "";
        document.getElementById("currentClass").value = [];

        document.getElementById("father_name").value = "";
        document.getElementById("father_occupation").value = "";
        document.getElementById("father_phone").value = "";

        document.getElementById("mother_name").value = "";
        document.getElementById("mother_occupation").value = "";
        document.getElementById("mother_phone").value = "";

        document.getElementById("area_city_region").value = "";
        document.getElementById("heardFC").value = [];

    }
  )
  .catch((err) => console.log(err));
  }         

  