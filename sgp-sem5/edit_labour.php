<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers,Authorization, X-Requested-With");

include('db_connect.php');

$sql = "select* from labours_data where id='".$_GET['id']."'";
$result = mysqli_query($con,$sql);

$outp = "";
while($rs = mysqli_fetch_array($result)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'  . $rs["id"]  . '",';
    $outp .= '"first_name":"'   . $rs["first_name"] . '",';
    $outp .= '"middle_name":"'   . $rs["middle_name"] . '",';
    $outp .= '"last_name":"'   . $rs["last_name"] . '",';
    $outp .= '"contact":"'   . $rs["contact"] . '",';
    $outp .= '"address":"'   . $rs["address"] . '",';
    $outp .= '"dob":"'   . $rs["dob"] . '",';
    $outp .= '"gender":"'   . $rs["gender"] . '",';
    $outp .= '"emergency_contact":"'   . $rs["emergency_contact"] . '",';
    $outp .= '"state":"'   . $rs["state"] . '"}';
}

echo $outp;
?>