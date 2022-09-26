<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers,Authorization, X-Requested-With");

include('db_connect.php');

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;
$first_name = $data->first_name;
$middle_name = $data->middle_name;
$last_name = $data->last_name;
$contact = $data->contact;
$address = $data->address;
$dob = $data->dob;
$state = $data->state;
$emergency_contact = $data->emergency_contact;

$sql = "update labours_data set first_name='$first_name',middle_name='$middle_name',last_name='$last_name',contact='$contact',address='$address',dob='$dob',state='$state',emergency_contact='$emergency_contact' where id='$id'";

$result = mysqli_query($con,$sql);

if($result){
    $response=array(
        'status'=>'valid'
    );
    echo json_encode($response);
}
else{
    $response=array(
        'status'=>'invalid'
    );
    echo json_encode($response);
}
?>