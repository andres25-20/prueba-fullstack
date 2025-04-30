<?php

namespace App\Http\Controllers;

class LocationController extends Controller
{
    /** Devuelve una lista simulada */
    public function index()
    {
        return response()->json([
            [
                'code' => '029042025',
                'name' => 'Sede 01',
                'image' => url('img/prueba1.png'),
                'creationDate' => '2025-04-29',
            ],
            [
                'code' => '030042025',
                'name' => 'Sede 02',
                'image' => url('img/prueba2.png'),
                'creationDate' => '2025-04-30',
            ],
        ]);
    }
}
