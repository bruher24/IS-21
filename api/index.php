<?php
  
error_reporting(-1);

require('application/Application.php');

function router($params) {
    $method = $params['method'];
    if($method) {
        $app = new Application();
        switch ($method) {
            case 'login': return $app->login($params);
            case 'convert': return $app->convert($params);
            case 'registration': return $app->registration($params);
            case 'logout': return $app->logout($params);
            case 'sendMessageAll': return $app->sendMessageAll($params);
            case 'sendMessageTo': return $app->sendMessageTo($params);
            case 'getMessages': return $app->getMessages($params);
            case 'getScene': return $app->getScene($params);
            case 'getCastle': return $app->getCastle($params);
            case 'comand': return $app->comand($params);
        }
    }
    return false;
}

function answer($data) {
    if($data) {
        return array(
            'result' => 'ok',
            'data' => $data
        );
    }
    return array('result' => 'error');
}

echo json_encode(answer(router($_GET)));

?>