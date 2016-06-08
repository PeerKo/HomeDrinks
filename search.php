<?php
mysql_connect("localhost","root","PASSWORT") or die ("Keine Verbindung moeglich");
	mysql_select_db("App_Data/packages/HomeDrinks_DB") or die ("Die Datenbank existiert nicht");
	mysql_query("SET NAMES 'utf8'");
	
	$result = mysql_query("SELECT * FROM Zutaten WHERE Name LIKE '%" . $_GET['search'] . "%' LIMIT 5");
	while($row = mysql_fetch_object($result))
	{
		echo '
';
		echo preg_replace('/(' . $_GET['search'] . ')/Usi', '<span class="result">\\1</span>', $row->Name);
		echo '
';
	}
?>


