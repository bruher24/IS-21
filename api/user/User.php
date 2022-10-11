<?php

class User {
    function __construct($db) {
        $this->db = $db;
    }

    function login($login, $password) {
        if ($login == 'vasya' && $password == '123') {
            $token = md5(rand());
            return array(
                'name' => 'Vasya Pupkin',
                'token' => $token
            );
        }
    }

    function registration($login, $password) {
            return array(
                'login' => $login,
                'password' => $password
            );
    }

    function logout($login) {
            return array(
                'login' => $login,
                'token' => ""
            );
    }

    function getUser($token) {
        return !!$token;
    }
}