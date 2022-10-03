<?php 
class Calculator{
    public $value;
    public $degFirst;
    public $degSecond;

    private function fromBin($value, $degSecond){
        $result = base_convert($value, 2, $degSecond);
        return $result;
    }
    private function fromOct($value, $degSecond){
        $result = base_convert($value, 8, $degSecond);
        return $result;
    }
    private function fromDec($value, $degSecond){
        $result = base_convert($value, 10, $degSecond);
        return $result;
    }
    private function fromHex($value, $degSecond){
        $result = base_convert($value, 16, $degSecond);
        return $result;
    }
    public function calculate($value, $degFirst, $degSecond){
        switch($degFirst){
            case 2:
                $answer = $this->fromBin($value, $degSecond);
                break;
            case 8:
                $answer = $this->fromOct($value, $degSecond);
                break;
            case 10:
                $answer = $this->fromDec($value, $degSecond);
                break;
            case 16:
                $answer = $this->fromHex($value, $degSecond);
                break;
        }
        return $answer;
    }
}