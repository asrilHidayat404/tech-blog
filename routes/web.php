<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index']);
Route::get("/read/{post:slug}", [HomeController::class, 'show']);

// Route::get("/write", [PostController::class, 'create']);
// Route::post("/write", [PostController::class, 'store'])->name('write');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard/postingan', function () {
    return Inertia::render('Postingan');
});

Route::get('/dashboard/statistik', function () {
    return Inertia::render('Statistik');
});

Route::get('/dashboard/komentar', function () {
    return Inertia::render('Komentar');
});

Route::get('/dashboard/penghasilan', function () {
    return Inertia::render('Penghasilan');
});

Route::get('/dashboard/halaman', function () {
    return Inertia::render('Halaman');
});

Route::get('/dashboard/tata-letak', function () {
    return Inertia::render('TataLetak');
});

Route::get('/dashboard/tema', function () {
    return Inertia::render('Tema');
});

Route::get('/dashboard/setelan', function () {
    return Inertia::render('Setelan');
});

Route::get('/dashboard/daftar-bacaan', function () {
    return Inertia::render('DaftarBacaan');
});

Route::middleware('auth')->group(function () {
    Route::get("/write", [PostController::class, 'create']);
    Route::post("/write", [PostController::class, 'store'])->name('write');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
