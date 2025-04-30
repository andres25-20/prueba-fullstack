<?php

use App\Http\Controllers\LocationController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth.apikey')->get('/locations', [LocationController::class, 'index']);
