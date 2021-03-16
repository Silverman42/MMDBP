<?php
use Illuminate\Support\Facades\Request;

if(!function_exists('replaceCloudFile')){
    function replaceCloudFile(string $fileName,string $folderName, string $filePublicId = null){
        if(Request::file($fileName)){
            try {
                if($filePublicId !== null){
                    cloudinary()->destroy($filePublicId);
                }
                $parameters = Request::file($fileName)->storeOnCloudinary($folderName);
                return $parameters;
            } catch (Throwable $error) {
                throw $error;
            }
        }
        return null;
    }
}

if(!function_exists('uploadCloudFile')){
    function uploadCloudFile(string $fileName,string $folderName){
        if(Request::file($fileName)){
            try {
                $parameters = Request::file($fileName)->storeOnCloudinary($folderName);
                return $parameters;
            } catch (Throwable $error) {
                throw $error;
            }
        }
        return null;
    }
}