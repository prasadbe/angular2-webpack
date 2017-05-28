<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    //
    public function test() {
        $product = array(['name' => 'Sony'], ['name' => 'Panasonic'], ['name' => 'Onida'], ['name' => 'Samsung']);
        return response()->json($product);
    }
}
