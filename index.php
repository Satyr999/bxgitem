<?php
// include "view/dashboard/aaa.html";
// var_dump($_SERVER);
// $path=$_SERVER['PATH_INFO'];
// include $path.'.html';

$path='';
if(array_key_exists('PATH_INFO',$_SERVER)){
    $path=$_SERVER['PATH_INFO'];
    $path=substr($path,1);
    $arr=explode("/",$path);//将字符串切割成数组

    if(count($arr)==2){
        $path='view/'.$arr[0].'/'.$arr[1];
    }else if(count($arr)==1){
        $path='view/dashboard/'.$arr[0];
    }

}else{
    $path='view/dashboard/index';
}

    include $path.'.html';

?>