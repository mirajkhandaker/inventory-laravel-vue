<?php

use App\Http\Controllers\Api\EmployeeController;
use App\Http\Controllers\AuthController;

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', [AuthController::class,'login']);
    Route::post('signup', [AuthController::class,'signup']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);
});

Route::apiResources([
    'employee' => EmployeeController::class,
]);

//Route::apiResource('/employee',EmployeeController::class);
