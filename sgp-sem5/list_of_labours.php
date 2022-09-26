<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers,Authorization, X-Requested-With");

include('db_connect.php');

$result = mysqli_query($con,"SELECT id, first_name, last_name, contact FROM labours_data");

$outp = "";
while($rs = mysqli_fetch_array($result)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'   . $rs["id"] . '",';
    $outp .= '"first_name":"'    . $rs["first_name"]    . '",';
    $outp .= '"last_name":"'    . $rs["last_name"]    . '",';
    $outp .= '"contact":"'   . $rs["contact"]    . '"}';
}
$outp = '{"records":['.$outp.']}';

echo($outp);
?>