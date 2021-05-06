<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
//        return Post::all();
        $posts = Post::with('category', 'tags')->get();
        return response()->json($posts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::pluck('title', 'id')->all();
        $tags = Tag::pluck('title', 'id')->all();
        return ['tags' => $tags, 'categories' => $categories];
//        return 'ss';

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request;
        $validator = Validator::make(
            $data->all(),
            [
                'title' => 'required',
                'content' => 'required',
                'category_id' => 'required',
                'thumbnail' => 'nullable|image'
            ]
        );

        if ($data->hasFile('thumbnail')) {
            $date = date('d-m-Y');
            $thumbnail = $data->file('thumbnail')->store('images/posts/' . $date);
            $thumbnail = '/storage/' . $thumbnail;
        }

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->messages()]);
        }

        $response = Post::create([
            'title' => $data->title,
            'description' => $data->description,
            'content' => $data->content,
            'category_id' => $data->category_id,
            'thumbnail' => $thumbnail ?? null
        ]);

        $response->tags()->sync(json_decode($data->tag_id));
        return 'Пост - ' . $data->title . ' успешно создан !';
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
//        return $id;
//        return Post::find($slug);
//        return 'sdsd';
//        return $id;
        return Post::where('slug', $slug)->with('tags')->first();
//        return Post::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::find($id);
        $postTitle = $post->title;
        $post->tags()->sync([]);
        Storage::delete($post->thumbnail);
        $post->delete();
        return "Статья - '$postTitle' успешно удалена!";
    }
}
