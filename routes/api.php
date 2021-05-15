<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Api\PostController;
use \App\Http\Controllers\Api\TagController;
use \App\Http\Controllers\Api\CategoryController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('tags/getAllTags', [TagController::class, 'getAllTags'])->name('getAllTags');
Route::get('posts/getPostsMainPage', [PostController::class, 'getPostsMainPage'])->name('posts.getPostsMainPage');
Route::get('categories/getPopularCategories', [CategoryController::class, 'getPopularCategories'])->name('categories.getPopularCategories');
Route::get('categories/getCategoryPosts/{slug}', [CategoryController::class, 'getCategoryPosts'])->name('categories.getCategoryPosts');

Route::resource('posts', PostController::class);
Route::resource('tags', TagController::class);
Route::resource('categories', CategoryController::class);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
