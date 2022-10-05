<?php 
class Calculator{
    public $value;
    public $degFirst;
    public $degSecond;

    public function calculate($value, $degFirst, $degSecond){
        if($degFirst >= 2 && $degFirst <= 36 &&  $degSecond >= 2 && $degSecond <= 36){
        $answer = "Ответ: " . base_convert($value, $degFirst, $degSecond);
        }else{
            $answer = 'Ошибка: Error';
        }
        return $answer;
    }
}