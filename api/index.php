<?php
    require('Calculator.php');

    $value = $_GET['value'];
    $degFirst = $_GET['degFirst'];
    $degSecond = $_GET['degSecond'];

    $calc = new Calculator();
    $result = $calc -> calculate($value, $degFirst, $degSecond);
    print($result);

?>