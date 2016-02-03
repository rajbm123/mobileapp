
              



function tabsHide() {
    document.getElementById("airport_drop_form").style.display = "none";
    document.getElementById("airport_round_trip_form").style.display = "none";
    document.getElementById("airport_pickup_form").style.display = "block";
}
function tabsShow() {
    document.getElementById("airport_drop_form").style.display = "block";
    document.getElementById("airport_pickup_form").style.display = "none";
    document.getElementById("airport_round_trip_form").style.display = "none";
}
 function tabs3Show() {
    document.getElementById("airport_drop_form").style.display = "none";
    document.getElementById("airport_pickup_form").style.display = "none";
    document.getElementById("airport_round_trip_form").style.display = "block";
}
function tabs2Hide() {
     document.getElementById("advance_booking").style.display = "none";
     document.getElementById("available_now_form").style.display = "block";
}
function tabs2Show() {
    document.getElementById("advance_booking").style.display = "block";
    document.getElementById("available_now_form").style.display = "none";
}
function tabs1Hide() {
     document.getElementById("advance_booking_pickup").style.display = "none";
     document.getElementById("available_now_pickup_form").style.display = "block";
}
function tabs1Show() {
    document.getElementById("advance_booking_pickup").style.display = "block";
    document.getElementById("available_now_pickup_form").style.display = "none";
}

// *****************for railways forms******************************//
function tabsRailwayHide() {
     document.getElementById("railway_drop_form").style.display = "none";
     document.getElementById("railway_pickup_form").style.display = "block";
     document.getElementById("railway_round_trip_sec").style.display = "none";
 }
 function tabsRailwayShow() {
     document.getElementById("railway_drop_form").style.display = "block";
     document.getElementById("railway_pickup_form").style.display = "none";
     document.getElementById("railway_round_trip_sec").style.display = "none";
 }
 function tabsRailwayRTShow() {
   document.getElementById("railway_round_trip_sec").style.display = "block";
     document.getElementById("railway_drop_form").style.display = "none";
     document.getElementById("railway_pickup_form").style.display = "none";
 }
 function tabsRailway1Hide() {
     document.getElementById("advance_booking_rly_drop").style.display = "none";
     document.getElementById("available_now_rly_drop").style.display = "block";
 }
 function tabsRailway1Show() {
     document.getElementById("advance_booking_rly_drop").style.display = "block";
     document.getElementById("available_now_rly_drop").style.display = "none";
 }
 
function tabsRailway2Hide() {
     document.getElementById("advance_booking_rly_pickup").style.display = "none";
     document.getElementById("available_now_rly_pickup").style.display = "block";
 }
 function tabsRailway2Show() {
     document.getElementById("advance_booking_rly_pickup").style.display = "block";
     document.getElementById("available_now_rly_pickup").style.display = "none";
 }
// ***************for office forms**********************************//
function tabsOfficeHide() {
    document.getElementById("office_drop_form").style.display = "none";
    document.getElementById("office_pickup_form").style.display = "block";
}
function tabsOfficeShow() {
    document.getElementById("office_drop_form").style.display = "block";
    document.getElementById("office_pickup_form").style.display = "none";
}

function showStation() {
    document.getElementById("station_list").style.display = "block";
    document.getElementById("rly_form").style.display = "none";
}
 