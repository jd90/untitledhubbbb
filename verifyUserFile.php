<!DOCTYPE html>
<html>
<body>

<?php


$email= intval($_GET['email']);

$conn = new PDO ( "sqlsrv:server = tcp:bbsqldb.database.windows.net,1433; Database = SQL_BB", "teamdsqldb", "Sql20022016*");
$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
try{
    $st = $conn-> query("SELECT * FROM [Owner] WHERE [email] = '".$email."'");

    foreach($st->fetchAll() as $row) {

        echo "<p>emails matching your search ".$row[email]. "</p>";

    }

    //foreach($st->fetchAll() as $row) {


}
catch(PDOException $e)
{print"$e";}


?>
</body>
</html>