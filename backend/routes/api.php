<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ClaimController;

// Public routes
Route::post('/login',  [AuthController::class, 'login']);
Route::get('/items',   [ItemController::class, 'index']);
Route::get('/items/{item}', [ItemController::class, 'show']);

// Authenticated routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout',        [AuthController::class, 'logout']);
    Route::get('/me',             [AuthController::class, 'me']);
    Route::post('/items',         [ItemController::class, 'store']);
    Route::patch('/items/{item}', [ItemController::class, 'update']);
    Route::delete('/items/{item}',[ItemController::class, 'destroy']);
    Route::post('/claims',        [ClaimController::class, 'store']);

    // Admin only
    Route::patch('/admin/claims/{claim}/{status}',
        [ClaimController::class, 'updateStatus']);
});
