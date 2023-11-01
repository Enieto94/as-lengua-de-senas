
<?php
header('Access-Control-Allow-Origin: *');
// Conectarse a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$database = "asls";

$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

// Valor específico que deseas asignar
$nuevoValor = "0";

// Consulta SQL para actualizar la columna con un valor específico
// $sql = "UPDATE numeros SET visto = '$nuevoValor';";
$sql = "UPDATE numeros SET visto = '$nuevoValor';" . "UPDATE temas SET visto = '$nuevoValor';" . "UPDATE colors SET visto = '$nuevoValor';" . "UPDATE preguntas SET visto = '$nuevoValor';" . "UPDATE presentacions SET visto = '$nuevoValor';" . "UPDATE verbos SET visto = '$nuevoValor';";
// $sql = "UPDATE numeros SET visto = '$nuevoValor';";

// Ejecutar la consulta
if ($conn->multi_query($sql) === TRUE) {
    echo "Actualización exitosa. La columna ahora tiene el valor específico.";
} else {
    echo "Error al actualizar la columna: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
