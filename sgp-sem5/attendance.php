<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers,Authorization, X-Requested-With");

include('db_connect.php');

$data = json_decode(file_get_contents("php://input"),true);

$date = $data['0']['date'];

$id1 = $data['0']['select'];
if($id1===true)
{
    $id1 = "Present";
}
else
{
    $id1 = "Absent";
}
$id2 = $data['1']['select'];
if($id2===true)
{
    $id2 = "Present";
}
else
{
    $id2 = "Absent";
}
$id3 = $data['2']['select'];
if($id3===true)
{
    $id3 = "Present";
}
else
{
    $id3 = "Absent";
}

if(($id1=="Present"||"Absent") && ($id2=="Present"||"Absent") && ($id3=="Present"||"Absent"))
{
    $result = mysqli_query($con,"INSERT INTO attendance (date,lbr_id1,lbr_id2,lbr_id3) values ('$date','$id1','$id2','$id3')");
    mysqli_query($con,"DELETE FROM attendance WHERE date = ' ' ");
}


?>
