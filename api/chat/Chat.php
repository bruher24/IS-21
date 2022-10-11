<?php

class Chat {
    function __construct() {
        
    }

    function sendMessageAll($login) {
        return array(
            'sender' => $login,
            'receiver' => 'All',
            'text' => 'Hello, World!'
        );
    }

    function sendMessageTo($login, $receiver) {
        return array(
            'sender' => $login,
            'receiver' => $receiver,
            'text' => 'Hello, ' . $receiver . '!'
        );
    }

    function getMessages($login, $sender) {
        return array(
            'receiver' => $login,
            'senders' => $sender,
            'amount' => '5'
        );
    }
}