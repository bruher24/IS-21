<?php 
class Calculator{
    public $value;
    public $degFirst;
    public $degSecond;

    public function calculate($value, $degFirst, $degSecond){
        if($degFirst > 1 && $degSecond > 1){
        $answer = "Ответ: " . base_convert($value, $degFirst, $degSecond);
        }else{
            $answer = 'Ошибка: введите корректную систему счисления';
        }
        return $answer;
    }
}