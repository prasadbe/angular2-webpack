<?php

namespace App\Http\Controllers;

use illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller as BaseController;

class Password extends BaseController
{
    public function doLogin(Request $request) {
        try {
            if(count($request->all()) > 2) {
                throw new \Exception('Invalid Length');
            }
            if($request->input('email')  == '') {
                throw new \Exception('Invalid Length');    
            }
            if($request->input('password')  == '') {
               throw new \Exception('Invalid Length'); 
            }

            $users = \App\Model\User::where('email', '=', $request->input('email'))
                     ->select(['id', 'password', 'salt'])
                     ->first();

            if(count($users) == 0) {
                throw new \Exception('Email doesnt exist in database');
            }


            return response()->json(['password' => md5(md5($request->input('password')),$users->salt)]);

        } catch(\Exception $e) {
            $code	=	$e->getCode() ? $e->getCode() : 400;
            return response()->json(['error' => true, 'msg' => $e->getMessage()], $code);
        }
    }

    public function doLogout(Request $request) {
        try {
            if(count($request->all()) > 2) {
                throw new \Exception('Invalid Length');
            }

            //do logout process    

            return response()->json([]);

        } catch(\Exception $e) {
            $code	=	$e->getCode() ? $e->getCode() : 400;
            return response()->json(['error' => true, 'msg' => $e->getMessage()], $code);
        }
    }
}
