<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h1 align="center">Doctor Department Details</h1>
<table border="8" align="center" >

<tr bgcolor="#9acd32"> 
	<th>id</th>
	<th>Name</th>
	<th>Age</th>
	<th>Department</th>
	<th>Years_experience</th>
	<th>Specialization</th>
	<th>salary</th>
	<th>charge</th>
	<th>city</th>
</tr>
	<xsl:for-each select="Doctor/s">
	<xsl:sort select="Department"/>
<tr>
	<td><xsl:value-of select="id"/></td>
	<td><xsl:value-of select="name"/></td>
	<td><xsl:value-of select="age"/></td>
	<td><xsl:value-of select="Department"/></td>
	<td><xsl:value-of select="yearsexp"/></td>
	<td><xsl:value-of select="Specialization"/></td>
	<td><xsl:value-of select="salary"/></td>
	<td><xsl:value-of select="charge"/></td>
	<td><xsl:value-of select="city"/></td>
</tr>
	
	</xsl:for-each>
	
	</table>
</body>
</html>


</xsl:template>


</xsl:stylesheet>
