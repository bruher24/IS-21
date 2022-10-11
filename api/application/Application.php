<?php

    require('db/DB.php');
    require('user/User.php');
    require('dmitry/Dmitry.php');
    require('chat/Chat.php');
    require('game/Game.php');

    class Application {
        function __construct() {
            $db = new DB();
            $this->user = new User($db);
            $this->dmitry = new Dmitry();
            $this->chat = new Chat($db);
            $this->game = new Game($db);
        }
        
        function login($params) {
            if ($params['login'] && $params['password']) {
                return $this->user->login($params['login'], $params['password']);
            }
        }

        function convert($params) {
            [ 'token' => $token,
              'value' => $value,
              'systemFrom' => $systemFrom,
              'systemTo' => $systemTo
            ] = $params;
            $user = $this->user->getUser($token);
            if($user && $value && $systemFrom && $systemTo) {
                return $this->dmitry->convert($value, $systemFrom, $systemTo);
            }
        }

        function registration($params) {
            if ($params['login'] && $params['password']) {
                return $this->user->registration($params['login'], $params['password']);
            }
        }

        function logout($params) {
            if ($params['login']) {
                return $this->user->logout($params['login']);
            }
        }

        function sendMessageAll($params) {
            if ($params['login']) {
                return $this->chat->sendMessageAll($params['login']);
            }
        }

        function sendMessageTo($params) {
            if ($params['login'] && $params['receiver']) {
                return $this->chat->sendMessageTo($params['login'], $params['receiver']);
            }
        }

        function getMessages($params) {
            if ($params['login'] && $params['sender']) {
                return $this->chat->getMessages($params['login'], $params['sender']);
            }
        }
        function getScene($params) {
            return $this->game->getScene();
        }

        function getCastle($params) {
            return $this->game->getCastle();
        }

        function comand($params) {
            return $this->game->comand();
        }
    }



?>