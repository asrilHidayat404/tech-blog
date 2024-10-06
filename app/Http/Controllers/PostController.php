<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Write");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validData = $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        // Simpan Gambarnya
        $validData['thumbnail'] = $request->file('thumbnail')->store('posts/thumbnails');

        Post::create([
            'user_id' => Auth::user()->id,
            'category_id' => rand(1,5),
            'title' => $validData['title'],
            'slug' => Str::slug($validData['title'], '-','id'),
            'excerpt' => Str::excerpt($validData['content']),
            'content' => $validData['content'],
            'thumbnail' => $validData['thumbnail']
        ]);

        return redirect('dashboard')->with('success', 'Post berhasil disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
