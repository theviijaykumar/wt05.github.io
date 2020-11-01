<?php
mysql_connect("localhost","root","");
mysql_select_db('registration');
$query="select * from registration ";
$result= mysql_query($query);
?>

<!DOCTYPE html>
<html>
<body>
<table align="center" border="1px" style="width:600px; line-height:40px;">
<tr>
  <th colspan="4"><h2>Registrations</h2></th>
</tr>
<?php

while($rows=mysql_fetch_assoc($result))
{
?>
<tr>
  <td><?php echo $rows['id']; ?></td>
<td><?php echo $rows['name']; ?></td>
<td><?php echo $rows['email']; ?></td>
<td><?php echo $rows['mobileno']; ?></td>
</tr>
<?php

}
?>
</table>
</body>
</html>



